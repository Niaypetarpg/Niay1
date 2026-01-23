const fs = require('fs');
const pokemonMovesData = JSON.parse(fs.readFileSync('./src/pokemonMovesData.json', 'utf8'));

const VARIANT_MAPPINGS = {
  'Rattata de Alola': 'Rattata',
  'Raichu de Alola': 'Raichu',
  'Lycanroc Diurna': 'Lycanroc',
  'Lycanroc Crepuscular': 'Lycanroc',
  'Lycanroc Noturna': 'Lycanroc'
};

function getSpeciesForMoves(species) {
  if (VARIANT_MAPPINGS[species]) {
    const mapped = VARIANT_MAPPINGS[species];
    if (pokemonMovesData[mapped]) {
      return mapped;
    }
  }
  return species;
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
  const inheritedMoves = selectInheritedMoves(species);
  moves.push(...inheritedMoves);
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

console.log('=== TESTE FINAL DE GERAÇÃO DE GOLPES ===\n');

// Teste 1: Pokémon comum
console.log('1. Bulbassauro nível 15:');
const bulba = generatePokemonMoves('Bulbassauro', 15);
console.log(`   Golpes (${bulba.length}): ${bulba.join(', ')}\n`);

// Teste 2: Variante Alola
console.log('2. Raichu de Alola nível 30:');
const raichuAlola = generatePokemonMoves('Raichu de Alola', 30);
const speciesUsed = getSpeciesForMoves('Raichu de Alola');
console.log(`   Espécie usada: ${speciesUsed}`);
console.log(`   Golpes (${raichuAlola.length}): ${raichuAlola.join(', ')}\n`);

// Teste 3: Lycanroc (formas diferentes devem usar mesma lista)
console.log('3. Lycanroc Diurna nível 40:');
const lycanrocD = generatePokemonMoves('Lycanroc Diurna', 40);
console.log(`   Golpes (${lycanrocD.length}): ${lycanrocD.join(', ')}\n`);

console.log('4. Lycanroc Noturna nível 40:');
const lycanrocN = generatePokemonMoves('Lycanroc Noturna', 40);
console.log(`   Golpes (${lycanrocN.length}): ${lycanrocN.join(', ')}\n`);

// Teste 4: Pokémon com muitos golpes (deve ter substituições)
console.log('5. Dragonite nível 80:');
const dragonite = generatePokemonMoves('Dragonite', 80);
console.log(`   Golpes (${dragonite.length}): ${dragonite.join(', ')}\n`);

console.log('✓ TODOS OS TESTES COMPLETADOS!');
console.log('\nResumo:');
console.log('- Golpes herdados: 20% chance cada, max 4');
console.log('- Golpes naturais: baseados no nível');
console.log('- Limite: 8 golpes total');
console.log('- Substituição: 50% quando cheio');
console.log('- Variantes: usam espécie base quando não há dados específicos');
