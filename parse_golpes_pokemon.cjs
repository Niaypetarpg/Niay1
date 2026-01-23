const fs = require('fs');

// Ler o arquivo
const content = fs.readFileSync('./golpes por pkm.txt', 'utf8');
const lines = content.split('\n');

const pokemonMoves = {};
let currentPokemon = null;
let inGolpesNaturais = false;
let inGolpesHerdados = false;
let golpesHerdadosBuffer = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  // Detecta início de novo Pokémon (formato: "001. Bulbassauro")
  const pokemonMatch = line.match(/^\d{3}\.\s+(.+)$/);
  if (pokemonMatch) {
    currentPokemon = pokemonMatch[1];
    pokemonMoves[currentPokemon] = {
      naturais: {},
      herdados: []
    };
    inGolpesNaturais = false;
    inGolpesHerdados = false;
    golpesHerdadosBuffer = '';
    continue;
  }

  if (!currentPokemon) continue;

  // Detecta seção "Golpes Naturais"
  if (line === 'Golpes Naturais') {
    inGolpesNaturais = true;
    inGolpesHerdados = false;
    continue;
  }

  // Detecta seção "Golpes Herdados:"
  if (line.startsWith('Golpes Herdados:')) {
    inGolpesNaturais = false;
    inGolpesHerdados = true;
    // Pega o resto da linha após "Golpes Herdados:"
    golpesHerdadosBuffer = line.replace('Golpes Herdados:', '').trim();
    continue;
  }

  // Detecta fim da seção de golpes herdados (quando encontra "Golpes Ensináveis:")
  if (line.startsWith('Golpes Ensináveis:')) {
    if (inGolpesHerdados && golpesHerdadosBuffer) {
      // Processa os golpes herdados acumulados
      const herdados = golpesHerdadosBuffer
        .split(',')
        .map(g => g.trim())
        .filter(g => g && g !== '');
      pokemonMoves[currentPokemon].herdados = herdados;
    }
    inGolpesHerdados = false;
    golpesHerdadosBuffer = '';
    continue;
  }

  // Processa golpes naturais (formato: "1 Investida" ou "Evolução Dança das Pétalas")
  if (inGolpesNaturais && line) {
    // Tenta extrair nível e nome do golpe
    const naturalMatch = line.match(/^(\d+|Evolução)\s+(.+)$/);
    if (naturalMatch) {
      const nivel = naturalMatch[1] === 'Evolução' ? 'Evolução' : parseInt(naturalMatch[1]);
      const golpe = naturalMatch[2].trim();

      // Se o nível já existe, cria array
      if (pokemonMoves[currentPokemon].naturais[nivel]) {
        if (Array.isArray(pokemonMoves[currentPokemon].naturais[nivel])) {
          pokemonMoves[currentPokemon].naturais[nivel].push(golpe);
        } else {
          pokemonMoves[currentPokemon].naturais[nivel] = [
            pokemonMoves[currentPokemon].naturais[nivel],
            golpe
          ];
        }
      } else {
        pokemonMoves[currentPokemon].naturais[nivel] = golpe;
      }
    }
  }

  // Continua acumulando golpes herdados em múltiplas linhas
  if (inGolpesHerdados && line && !line.startsWith('Golpes Ensináveis:')) {
    golpesHerdadosBuffer += ' ' + line;
  }
}

// Salvar em JSON
fs.writeFileSync('./src/pokemonMovesData.json', JSON.stringify(pokemonMoves, null, 2), 'utf8');

console.log(`✓ Parseado! Total de Pokémon: ${Object.keys(pokemonMoves).length}`);
console.log('\nExemplos:');
console.log('Bulbassauro:', JSON.stringify(pokemonMoves['Bulbassauro'], null, 2));
