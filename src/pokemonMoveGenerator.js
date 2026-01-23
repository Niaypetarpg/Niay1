import pokemonMovesData from './pokemonMovesData.json'
import pokedexData from './pokemonData'

// Mapeamentos para variantes regionais e formas especiais
// Mapeia nomes de variantes para a espécie base quando não há dados específicos
const VARIANT_MAPPINGS = {
  // Formas Alola - usam dados da espécie base
  'Rattata de Alola': 'Rattata',
  'Raticate de Alola': 'Raticate',
  'Raichu de Alola': 'Raichu',
  'Sandshrew de Alola': 'Sandshrew',
  'Sandslash de Alola': 'Sandslash',
  'Vulpix de Alola': 'Vulpix',
  'Ninetales de Alola': 'Ninetales',
  'Diglett de Alola': 'Diglett',
  'Dugtrio de Alola': 'Dugtrio',
  'Meowth de Alola': 'Meowth',
  'Persian de Alola': 'Persian',
  'Geodude de Alola': 'Geodude',
  'Graveler de Alola': 'Graveler',
  'Golem de Alola': 'Golem',
  'Grimer de Alola': 'Grimer',
  'Muk de Alola': 'Muk',
  'Exeggutor de Alola': 'Exeggutor',
  'Marowak de Alola': 'Marowak',

  // Lycanroc - usa dados da espécie base
  'Lycanroc Diurna': 'Lycanroc',
  'Lycanroc Crepuscular': 'Lycanroc',
  'Lycanroc Noturna': 'Lycanroc'
}

/**
 * Retorna a espécie correta para buscar os golpes, considerando variantes e gênero
 * Se a variante não tem dados próprios, usa a espécie base
 */
function getSpeciesForMoves(species, gender = null) {
  // Normalizar nome: remover parênteses e converter para o formato usado no JSON
  // "Lycanroc (Diurna)" -> "Lycanroc Diurna"
  let normalizedSpecies = species.replace(/\s*\(([^)]+)\)/g, ' $1').trim()

  // Caso especial: Mewostic/Meowstic tem listas de golpes diferentes baseadas no gênero
  if ((normalizedSpecies === 'Meowstic' || normalizedSpecies === 'Mewostic') && gender) {
    const genderLower = gender.toLowerCase()

    // Tentar com ambas as grafias: Mewostic (arquivo) e Meowstic (nome correto)
    const variantNames = {
      macho: ['Mewostic Macho', 'Meowstic Macho'],
      femea: ['Mewostic Fêmea', 'Meowstic Fêmea']
    }

    if (genderLower === 'macho' || genderLower === 'male' || genderLower === 'm') {
      for (const name of variantNames.macho) {
        if (pokemonMovesData[name]) return name
      }
    } else if (genderLower === 'fêmea' || genderLower === 'femea' || genderLower === 'female' || genderLower === 'f') {
      for (const name of variantNames.femea) {
        if (pokemonMovesData[name]) return name
      }
    }
  }

  // Verifica se o nome normalizado existe diretamente no JSON
  if (pokemonMovesData[normalizedSpecies]) {
    return normalizedSpecies
  }

  // Se tem mapeamento específico, tenta usar ele
  if (VARIANT_MAPPINGS[normalizedSpecies]) {
    const mapped = VARIANT_MAPPINGS[normalizedSpecies]
    // Verifica se os dados mapeados existem
    if (pokemonMovesData[mapped]) {
      return mapped
    }
  }

  // Última tentativa: usar o nome original sem normalização
  if (pokemonMovesData[species]) {
    return species
  }

  // Se não encontrou nada, retorna o nome normalizado
  return normalizedSpecies
}

/**
 * Encontra todas as pré-evoluções de um Pokémon
 * Retorna array com os nomes das espécies da cadeia evolutiva, do mais básico ao atual
 * Exemplo: Para "Venusaur" retorna ["Bulbasaur", "Ivysaur", "Venusaur"]
 */
function getEvolutionChain(species) {
  const chain = []

  // Encontrar o pokémon atual na Pokédex
  const currentPokemon = pokedexData.find(p =>
    p.nome.toLowerCase() === species.toLowerCase()
  )

  if (!currentPokemon) {
    // Se não encontrar, retorna apenas a espécie atual
    return [species]
  }

  // Adicionar o pokémon atual
  chain.push(currentPokemon.nome)

  // Buscar pré-evoluções recursivamente
  function findPreEvolutions(dexNumber) {
    // Procurar pokémon que evolui para este dexNumber
    const preEvolution = pokedexData.find(p => p.evolucao === dexNumber)

    if (preEvolution) {
      // Adicionar no início do array
      chain.unshift(preEvolution.nome)
      // Continuar buscando pré-evoluções
      findPreEvolutions(preEvolution.dexNumber)
    }
  }

  findPreEvolutions(currentPokemon.dexNumber)

  return chain
}

/**
 * Coleta todos os golpes naturais de toda a cadeia evolutiva
 * Considerando o nível atual do pokémon
 */
function collectEvolutionChainMoves(species, level, gender = null) {
  const chain = getEvolutionChain(species)
  const allMoves = []
  const seenMoves = new Set()

  // Para cada forma na cadeia evolutiva
  for (const formSpecies of chain) {
    const speciesKey = getSpeciesForMoves(formSpecies, gender)
    const movesData = pokemonMovesData[speciesKey]

    if (!movesData || !movesData.naturais) continue

    // Encontrar o pokémon na Pokédex para saber em que nível ele evolui
    const pokemonInfo = pokedexData.find(p =>
      p.nome.toLowerCase() === formSpecies.toLowerCase()
    )

    // Determinar até que nível podemos pegar golpes desta forma
    let maxLevelForThisForm = level

    // Se este não é o último da cadeia, limitar ao nível de evolução
    if (formSpecies !== species && pokemonInfo && pokemonInfo.evolucao) {
      if (pokemonInfo.evolucaoNivel) {
        maxLevelForThisForm = pokemonInfo.evolucaoNivel
      }
    }

    // Coletar golpes naturais desta forma
    const levels = Object.keys(movesData.naturais)
      .filter(l => l !== 'Evolução')
      .map(l => parseInt(l))
      .sort((a, b) => a - b)

    for (const moveLevel of levels) {
      if (moveLevel > maxLevelForThisForm) break

      const moves = movesData.naturais[moveLevel]
      const movesArray = Array.isArray(moves) ? moves : [moves]

      for (const move of movesArray) {
        if (!seenMoves.has(move)) {
          allMoves.push({
            nome: move,
            nivel: moveLevel,
            forma: formSpecies
          })
          seenMoves.add(move)
        }
      }
    }

    // Se esta é a forma atual, adicionar golpe de evolução se existir
    if (formSpecies === species && movesData.naturais['Evolução']) {
      const evolutionMove = movesData.naturais['Evolução']
      const move = Array.isArray(evolutionMove) ? evolutionMove[0] : evolutionMove
      if (!seenMoves.has(move)) {
        allMoves.push({
          nome: move,
          nivel: 'Evolução',
          forma: formSpecies
        })
        seenMoves.add(move)
      }
    }
  }

  // Ordenar por nível (golpes mais recentes primeiro)
  allMoves.sort((a, b) => {
    if (a.nivel === 'Evolução') return 1
    if (b.nivel === 'Evolução') return -1
    return b.nivel - a.nivel
  })

  return allMoves
}

/**
 * Seleciona golpes herdados aleatoriamente
 * - 20% de chance para cada golpe herdado
 * - Máximo de 4 golpes herdados
 */
function selectInheritedMoves(species, gender = null) {
  const speciesKey = getSpeciesForMoves(species, gender)
  const movesData = pokemonMovesData[speciesKey]

  if (!movesData || !movesData.herdados || movesData.herdados.length === 0) {
    return []
  }

  const inherited = []
  const availableMoves = [...movesData.herdados]

  for (const move of availableMoves) {
    if (inherited.length >= 4) break

    // 20% de chance
    if (Math.random() < 0.20) {
      inherited.push(move)
    }
  }

  return inherited
}

/**
 * Seleciona golpes naturais baseados no nível do Pokémon
 * - Pega todos os golpes que o Pokémon pode aprender até o nível atual
 * - Quando há múltiplos golpes no mesmo nível, pega todos
 */
function selectNaturalMoves(species, level, gender = null) {
  const speciesKey = getSpeciesForMoves(species, gender)
  const movesData = pokemonMovesData[speciesKey]

  if (!movesData || !movesData.naturais) {
    return []
  }

  const natural = []
  const levels = Object.keys(movesData.naturais)
    .filter(l => l !== 'Evolução') // Ignora golpes de evolução por enquanto
    .map(l => parseInt(l))
    .sort((a, b) => a - b)

  for (const moveLevel of levels) {
    if (moveLevel > level) break

    const moves = movesData.naturais[moveLevel]
    if (Array.isArray(moves)) {
      natural.push(...moves)
    } else {
      natural.push(moves)
    }
  }

  return natural
}

/**
 * Adiciona golpe de evolução se existir
 */
function getEvolutionMove(species, gender = null) {
  const speciesKey = getSpeciesForMoves(species, gender)
  const movesData = pokemonMovesData[speciesKey]

  if (!movesData || !movesData.naturais || !movesData.naturais['Evolução']) {
    return null
  }

  const evolutionMove = movesData.naturais['Evolução']
  return Array.isArray(evolutionMove) ? evolutionMove[0] : evolutionMove
}

/**
 * Gera lista completa de golpes para um Pokémon NPC
 *
 * Regras (ATUALIZADO COM CADEIA EVOLUTIVA):
 * 1. Seleciona golpes herdados (20% chance cada, max 4)
 * 2. Adiciona golpe de evolução se existir
 * 3. Preenche com golpes de TODA A CADEIA EVOLUTIVA baseados no nível
 *    - Inclui golpes de pré-evoluções que o pokémon teria aprendido
 *    - Respeita níveis de evolução (golpes até o nível de cada forma)
 * 4. Quando atingir 8 golpes e houver mais golpes naturais:
 *    - 50% de chance de substituir um golpe existente
 * 5. Prioriza golpes mais recentes por nível
 *
 * @param {string} species - Nome da espécie do Pokémon
 * @param {number} level - Nível do Pokémon
 * @param {boolean} includeEvolutionMove - Se deve incluir golpe de evolução
 * @param {string} gender - Gênero do Pokémon (usado para espécies com diferenças de gênero como Meowstic)
 */
export function generatePokemonMoves(species, level, includeEvolutionMove = false, gender = null) {
  const moves = []

  // 1. Adiciona golpes herdados (máximo 4)
  const inheritedMoves = selectInheritedMoves(species, gender)
  moves.push(...inheritedMoves)

  // 2. Adiciona golpe de evolução se solicitado
  if (includeEvolutionMove) {
    const evolutionMove = getEvolutionMove(species, gender)
    if (evolutionMove && !moves.includes(evolutionMove)) {
      moves.push(evolutionMove)
    }
  }

  // 3. NOVO: Coleta golpes de toda a cadeia evolutiva
  const evolutionChain = getEvolutionChain(species)
  console.log(`[EVOLUTION CHAIN] ${species}: ${evolutionChain.join(' → ')}`)

  const evolutionChainMoves = collectEvolutionChainMoves(species, level, gender)
  console.log(`[MOVES FROM CHAIN] Total de golpes disponíveis: ${evolutionChainMoves.length}`)

  // Adicionar golpes da cadeia evolutiva (priorizando mais recentes)
  for (const moveData of evolutionChainMoves) {
    const move = moveData.nome

    // Se já tem o golpe, pula
    if (moves.includes(move)) continue

    // Se tem menos de 8 golpes, adiciona direto
    if (moves.length < 8) {
      moves.push(move)
    } else {
      // 50% de chance de substituir um golpe aleatório
      if (Math.random() < 0.50) {
        const randomIndex = Math.floor(Math.random() * moves.length)
        moves[randomIndex] = move
      }
    }
  }

  return moves
}

/**
 * Verifica se uma espécie tem dados de golpes disponíveis
 */
export function hasMovesData(species) {
  const speciesKey = getSpeciesForMoves(species)
  return !!pokemonMovesData[speciesKey]
}

/**
 * Retorna informações sobre os golpes disponíveis para uma espécie
 */
export function getMovesInfo(species) {
  const speciesKey = getSpeciesForMoves(species)
  const movesData = pokemonMovesData[speciesKey]

  if (!movesData) {
    return {
      hasData: false,
      naturalCount: 0,
      inheritedCount: 0
    }
  }

  const naturalCount = Object.keys(movesData.naturais || {}).length
  const inheritedCount = (movesData.herdados || []).length

  return {
    hasData: true,
    naturalCount,
    inheritedCount,
    data: movesData
  }
}

/**
 * Função auxiliar para debug/teste - retorna a cadeia evolutiva de um pokémon
 */
export function getEvolutionChainForSpecies(species) {
  return getEvolutionChain(species)
}

export default {
  generatePokemonMoves,
  hasMovesData,
  getMovesInfo,
  getEvolutionChainForSpecies
}
