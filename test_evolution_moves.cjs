// Script de teste para verificar geração de golpes com cadeia evolutiva
const { generatePokemonMoves, getEvolutionChainForSpecies } = require('./src/pokemonMoveGenerator.js')

console.log('='.repeat(80))
console.log('TESTE DE GERAÇÃO DE GOLPES COM CADEIA EVOLUTIVA')
console.log('='.repeat(80))

// Teste 1: Venusaur nível 50
console.log('\n📊 Teste 1: Venusaur (nível 50)')
console.log('-'.repeat(80))
const venusaurChain = getEvolutionChainForSpecies('Venussauro')
console.log('Cadeia evolutiva:', venusaurChain.join(' → '))

const venusaurMoves = generatePokemonMoves('Venussauro', 50, true)
console.log(`\nGolpes gerados (${venusaurMoves.length}/8):`)
venusaurMoves.forEach((move, idx) => {
  console.log(`  ${idx + 1}. ${move}`)
})

// Teste 2: Charizard nível 50
console.log('\n\n📊 Teste 2: Charizard (nível 50)')
console.log('-'.repeat(80))
const charizardChain = getEvolutionChainForSpecies('Charizard')
console.log('Cadeia evolutiva:', charizardChain.join(' → '))

const charizardMoves = generatePokemonMoves('Charizard', 50, true)
console.log(`\nGolpes gerados (${charizardMoves.length}/8):`)
charizardMoves.forEach((move, idx) => {
  console.log(`  ${idx + 1}. ${move}`)
})

// Teste 3: Blastoise nível 50
console.log('\n\n📊 Teste 3: Blastoise (nível 50)')
console.log('-'.repeat(80))
const blastoiseChain = getEvolutionChainForSpecies('Blastoise')
console.log('Cadeia evolutiva:', blastoiseChain.join(' → '))

const blastoiseMoves = generatePokemonMoves('Blastoise', 50, true)
console.log(`\nGolpes gerados (${blastoiseMoves.length}/8):`)
blastoiseMoves.forEach((move, idx) => {
  console.log(`  ${idx + 1}. ${move}`)
})

// Teste 4: Pikachu (forma intermediária com evolução por item)
console.log('\n\n📊 Teste 4: Pikachu (nível 30)')
console.log('-'.repeat(80))
const pikachuChain = getEvolutionChainForSpecies('Pikachu')
console.log('Cadeia evolutiva:', pikachuChain.join(' → '))

const pikachuMoves = generatePokemonMoves('Pikachu', 30, false)
console.log(`\nGolpes gerados (${pikachuMoves.length}/8):`)
pikachuMoves.forEach((move, idx) => {
  console.log(`  ${idx + 1}. ${move}`)
})

// Teste 5: Pokémon sem evolução (Lapras)
console.log('\n\n📊 Teste 5: Lapras (nível 40 - sem pré-evolução)')
console.log('-'.repeat(80))
const laprasChain = getEvolutionChainForSpecies('Lapras')
console.log('Cadeia evolutiva:', laprasChain.join(' → '))

const laprasMoves = generatePokemonMoves('Lapras', 40, false)
console.log(`\nGolpes gerados (${laprasMoves.length}/8):`)
laprasMoves.forEach((move, idx) => {
  console.log(`  ${idx + 1}. ${move}`)
})

console.log('\n' + '='.repeat(80))
console.log('✅ TESTES CONCLUÍDOS')
console.log('='.repeat(80))
