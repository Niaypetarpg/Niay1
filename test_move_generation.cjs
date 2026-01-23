const fs = require('fs');

// Carregar dados
const pokemonMovesData = JSON.parse(fs.readFileSync('./src/pokemonMovesData.json', 'utf8'));

// Simular a função generatePokemonMoves
function getSpeciesForMoves(species) {
  const VARIANT_MAPPINGS = {
    'Rattata de Alola': 'Rattata de Alola',
    'Raichu de Alola': 'Raichu de Alola',
    'Meowstic Macho': 'Meowstic Macho',
    'Meowstic Fêmea': 'Meowstic Fêmea',
    'Lycanroc Diurna': 'Lycanroc Diurna',
    'Lycanroc Crepuscular': 'Lycanroc Crepuscular',
    'Lycanroc Noturna': 'Lycanroc Noturna'
  };
  return VARIANT_MAPPINGS[species] || species;
}

function selectInheritedMoves(species) {
  const speciesKey = getSpeciesForMoves(species);
  const movesData = pokemonMovesData[speciesKey];

  if (!movesData || !movesData.herdados || movesData.herdados.length === 0) {
    return [];
  }

  const inherited = [];
  for (const move of movesData.herdados) {
    if (inherited.length >= 4) break;
    if (Math.random() < 0.20) {
      inherited.push(move);
    }
  }
  return inherited;
}

function selectNaturalMoves(species, level) {
  const speciesKey = getSpeciesForMoves(species);
  const movesData = pokemonMovesData[speciesKey];

  if (!movesData || !movesData.naturais) {
    return [];
  }

  const natural = [];
  const levels = Object.keys(movesData.naturais)
    .filter(l => l !== 'Evolução')
    .map(l => parseInt(l))
    .sort((a, b) => a - b);

  for (const moveLevel of levels) {
    if (moveLevel > level) break;
    const moves = movesData.naturais[moveLevel];
    if (Array.isArray(moves)) {
      natural.push(...moves);
    } else {
      natural.push(moves);
    }
  }
  return natural;
}

function generatePokemonMoves(species, level) {
  const moves = [];

  // Golpes herdados
  const inheritedMoves = selectInheritedMoves(species);
  moves.push(...inheritedMoves);

  // Golpes naturais
  const naturalMoves = selectNaturalMoves(species, level);
  for (const move of naturalMoves) {
    if (moves.includes(move)) continue;

    if (moves.length < 8) {
      moves.push(move);
    } else {
      if (Math.random() < 0.50) {
        const randomIndex = Math.floor(Math.random() * moves.length);
        moves[randomIndex] = move;
      }
    }
  }

  return moves;
}

// Testes
console.log('=== TESTE DE GERAÇÃO DE GOLPES ===\n');

// Teste 1: Bulbassauro nível 10
console.log('1. Bulbassauro nível 10:');
const bulba10 = generatePokemonMoves('Bulbassauro', 10);
console.log(`   Total de golpes: ${bulba10.length}`);
console.log(`   Golpes: ${bulba10.join(', ')}\n`);

// Teste 2: Pikachu nível 25
console.log('2. Pikachu nível 25:');
const pika25 = generatePokemonMoves('Pikachu', 25);
console.log(`   Total de golpes: ${pika25.length}`);
console.log(`   Golpes: ${pika25.join(', ')}\n`);

// Teste 3: Charizard nível 50 (muitos golpes naturais, deve ter substituições)
console.log('3. Charizard nível 50:');
const char50 = generatePokemonMoves('Charizard', 50);
console.log(`   Total de golpes: ${char50.length}`);
console.log(`   Golpes: ${char50.join(', ')}\n`);

// Teste 4: Verificar variante Alola
if (pokemonMovesData['Raichu de Alola']) {
  console.log('4. Raichu de Alola nível 30:');
  const raichuAlola = generatePokemonMoves('Raichu de Alola', 30);
  console.log(`   Total de golpes: ${raichuAlola.length}`);
  console.log(`   Golpes: ${raichuAlola.join(', ')}\n`);
}

// Teste 5: Verificar Meowstic
if (pokemonMovesData['Meowstic Macho']) {
  console.log('5. Meowstic Macho nível 40:');
  const meowsticM = generatePokemonMoves('Meowstic Macho', 40);
  console.log(`   Total de golpes: ${meowsticM.length}`);
  console.log(`   Golpes: ${meowsticM.join(', ')}\n`);
}

console.log('=== TESTES COMPLETADOS ===');
