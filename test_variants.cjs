const data = require('./src/pokemonMovesData.json');

console.log('Raichu existe?', !!data['Raichu']);
console.log('Meowstic existe?', !!data['Meowstic']);
console.log('Lycanroc existe?', !!data['Lycanroc']);

if (data['Raichu']) {
  console.log('\nGolpes naturais Raichu:', Object.keys(data['Raichu'].naturais || {}).length);
  console.log('Golpes herdados Raichu:', data['Raichu'].herdados?.length || 0);
}

if (data['Lycanroc']) {
  console.log('\nGolpes naturais Lycanroc:', Object.keys(data['Lycanroc'].naturais || {}).length);
  console.log('Golpes herdados Lycanroc:', data['Lycanroc'].herdados?.length || 0);
}
