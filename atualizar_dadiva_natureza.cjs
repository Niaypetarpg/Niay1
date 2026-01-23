const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('./src/golpesData.js', 'utf8');

// Parse o objeto
const startMatch = content.match(/const GOLPES_DATA = /);
const start = content.indexOf('{', startMatch.index);
const end = content.lastIndexOf('export default GOLPES_DATA');
const objetoStr = content.substring(start, end).trim();
const objetoLimpo = objetoStr.endsWith(';') ? objetoStr.slice(0, -1) : objetoStr;

let GOLPES_DATA;
eval('GOLPES_DATA = ' + objetoLimpo);

console.log('✓ Arquivo carregado\n');

// Atualizar Dádiva da Natureza
if (GOLPES_DATA["Dádiva da Natureza"]) {
  GOLPES_DATA["Dádiva da Natureza"].efeito = {
    "descricao": "A Dádiva da Natureza tem Dano Basal e Tipo de dano de acordo com a fruta que é o item Mantido do usuário, que terá sua energia usada sendo destruída sem ser consumida:",
    "tabela": [
      { "fruto": "Aguav", "frutaReal": "Goiaba", "danoBasal": "1d10+10 Especial", "tipo": "Dragão" },
      { "fruto": "Apicot", "frutaReal": "Damasco", "danoBasal": "2d12+15 Especial", "tipo": "Terra" },
      { "fruto": "Aspear", "frutaReal": "Pera", "danoBasal": "1d10+10 Especial", "tipo": "Gelo" },
      { "fruto": "Babiri", "frutaReal": "Biribá", "danoBasal": "1d10+10 Especial", "tipo": "Metal" },
      { "fruto": "Belue", "frutaReal": "Mirtilo", "danoBasal": "2d12+15 Especial", "tipo": "Elétrico" },
      { "fruto": "Bluk", "frutaReal": "Amora", "danoBasal": "1d10+10 Especial", "tipo": "Fogo" },
      { "fruto": "Charti", "frutaReal": "Alcachofra", "danoBasal": "1d10+10 Especial", "tipo": "Pedra" },
      { "fruto": "Cheri", "frutaReal": "Cereja", "danoBasal": "1d10+10 Especial", "tipo": "Fogo" },
      { "fruto": "Chesto", "frutaReal": "Castanha", "danoBasal": "1d10+10 Especial", "tipo": "Água" },
      { "fruto": "Chilan", "frutaReal": "Sininho", "danoBasal": "1d10+10 Especial", "tipo": "Normal" },
      { "fruto": "Chople", "frutaReal": "Chipotle", "danoBasal": "1d10+10 Especial", "tipo": "Lutador" },
      { "fruto": "Coba", "frutaReal": "Babaco", "danoBasal": "1d10+10 Especial", "tipo": "Voador" },
      { "fruto": "Cornn", "frutaReal": "Cardo", "danoBasal": "1d12+15 Especial", "tipo": "Inseto" },
      { "fruto": "Coulbur", "frutaReal": "Milho", "danoBasal": "1d10+10 Especial", "tipo": "Trevas" },
      { "fruto": "Cutsap", "frutaReal": "Pinha", "danoBasal": "2d12+15 Especial", "tipo": "Fantasma" },
      { "fruto": "Durin", "frutaReal": "Durião", "danoBasal": "2d12+15 Especial", "tipo": "Água" },
      { "fruto": "Enigma", "frutaReal": "Enigma", "danoBasal": "2d12+15 Especial", "tipo": "Inseto" },
      { "fruto": "Figy", "frutaReal": "Figo", "danoBasal": "1d10+10 Especial", "tipo": "Inseto" },
      { "fruto": "Ganlon", "frutaReal": "Longana", "danoBasal": "2d12+15 Especial", "tipo": "Gelo" },
      { "fruto": "Grepa", "frutaReal": "Uva", "danoBasal": "1d12+15 Especial", "tipo": "Voador" },
      { "fruto": "Haban", "frutaReal": "Araçá", "danoBasal": "1d10+10 Especial", "tipo": "Dragão" },
      { "fruto": "Hondew", "frutaReal": "Cantalupo", "danoBasal": "1d12+15 Especial", "tipo": "Terra" },
      { "fruto": "Iapapa", "frutaReal": "Mamão", "danoBasal": "1d10+10 Especial", "tipo": "Trevas" },
      { "fruto": "Jaboca", "frutaReal": "Jabuticaba", "danoBasal": "2d12+15 Especial", "tipo": "Dragão" },
      { "fruto": "Kasib", "frutaReal": "Mandioca", "danoBasal": "1d10+10 Especial", "tipo": "Fantasma" },
      { "fruto": "Kebia", "frutaReal": "Akebia", "danoBasal": "1d10+10 Especial", "tipo": "Venenoso" },
      { "fruto": "Kee", "frutaReal": "Guaraná", "danoBasal": "2d12+15 Especial", "tipo": "Fada" },
      { "fruto": "Kelpsy", "frutaReal": "Alga", "danoBasal": "1d12+15 Especial", "tipo": "Lutador" },
      { "fruto": "Lansat", "frutaReal": "Langsat", "danoBasal": "2d12+15 Especial", "tipo": "Voador" },
      { "fruto": "Leppa", "frutaReal": "Maçã", "danoBasal": "1d10+10 Especial", "tipo": "Lutador" },
      { "fruto": "Liechi", "frutaReal": "Lichia", "danoBasal": "2d12+15 Especial", "tipo": "Planta" },
      { "fruto": "Lum", "frutaReal": "Ameixa", "danoBasal": "1d10+10 Especial", "tipo": "Voador" },
      { "fruto": "Mago", "frutaReal": "Manga", "danoBasal": "1d10+10 Especial", "tipo": "Fantasma" },
      { "fruto": "Magost", "frutaReal": "Mangostão", "danoBasal": "1d12+15 Especial", "tipo": "Pedra" },
      { "fruto": "Maranga", "frutaReal": "Jaca", "danoBasal": "2d12+15 Especial", "tipo": "Normal" },
      { "fruto": "Micle", "frutaReal": "Fruta Milagrosa", "danoBasal": "2d12+15 Especial", "tipo": "Pedra" },
      { "fruto": "Nanab", "frutaReal": "Banana", "danoBasal": "1d12+15 Especial", "tipo": "Água" },
      { "fruto": "Nomel", "frutaReal": "Limão", "danoBasal": "1d12+15 Especial", "tipo": "Dragão" },
      { "fruto": "Occa", "frutaReal": "Cacau", "danoBasal": "1d10+10 Especial", "tipo": "Fogo" },
      { "fruto": "Oran", "frutaReal": "Laranja", "danoBasal": "1d10+10 Especial", "tipo": "Venenoso" },
      { "fruto": "Pamtre", "frutaReal": "Açaí", "danoBasal": "1d12+15 Especial", "tipo": "Metal" },
      { "fruto": "Passho", "frutaReal": "Maracujá", "danoBasal": "1d10+10 Especial", "tipo": "Água" },
      { "fruto": "Payapa", "frutaReal": "Papaia", "danoBasal": "1d10+10 Especial", "tipo": "Psíquico" },
      { "fruto": "Pecha", "frutaReal": "Pêssego", "danoBasal": "1d10+10 Especial", "tipo": "Elétrico" },
      { "fruto": "Persim", "frutaReal": "Caqui", "danoBasal": "1d10+10 Especial", "tipo": "Terra" },
      { "fruto": "Petaya", "frutaReal": "Pitaia", "danoBasal": "2d12+15 Especial", "tipo": "Venenoso" },
      { "fruto": "Pinap", "frutaReal": "Abacaxi", "danoBasal": "1d12+15 Especial", "tipo": "Planta" },
      { "fruto": "Pomeg", "frutaReal": "Romã", "danoBasal": "1d12+15 Especial", "tipo": "Gelo" },
      { "fruto": "Qualot", "frutaReal": "Nêspera", "danoBasal": "1d12+15 Especial", "tipo": "Venenoso" },
      { "fruto": "Rabuta", "frutaReal": "Rambutão", "danoBasal": "1d12+15 Especial", "tipo": "Fantasma" },
      { "fruto": "Rawst", "frutaReal": "Morango", "danoBasal": "1d10+10 Especial", "tipo": "Planta" },
      { "fruto": "Razz", "frutaReal": "Framboesa", "danoBasal": "1d10+10 Especial", "tipo": "Metal" },
      { "fruto": "Rindo", "frutaReal": "Tamarindo", "danoBasal": "1d10+10 Especial", "tipo": "Planta" },
      { "fruto": "Roseli", "frutaReal": "Rosélia", "danoBasal": "1d10+10 Especial", "tipo": "Fada" },
      { "fruto": "Rowap", "frutaReal": "Jambo", "danoBasal": "2d12+15 Especial", "tipo": "Trevas" },
      { "fruto": "Salac", "frutaReal": "Salak", "danoBasal": "2d12+15 Especial", "tipo": "Lutador" },
      { "fruto": "Shuca", "frutaReal": "Caju", "danoBasal": "1d10+10 Especial", "tipo": "Terra" },
      { "fruto": "Sitrus", "frutaReal": "Toranja", "danoBasal": "1d10+10 Especial", "tipo": "Psíquico" },
      { "fruto": "Spelon", "frutaReal": "Melão", "danoBasal": "1d12+15 Especial", "tipo": "Trevas" },
      { "fruto": "Starf", "frutaReal": "Carambola", "danoBasal": "2d12+15 Especial", "tipo": "Psíquico" },
      { "fruto": "Tamato", "frutaReal": "Tomate", "danoBasal": "1d12+15 Especial", "tipo": "Psíquico" },
      { "fruto": "Tanga", "frutaReal": "Pitanga", "danoBasal": "1d10+10 Especial", "tipo": "Inseto" },
      { "fruto": "Wacan", "frutaReal": "Guajilote", "danoBasal": "1d10+10 Especial", "tipo": "Elétrico" },
      { "fruto": "Watmel", "frutaReal": "Melancia", "danoBasal": "2d12+15 Especial", "tipo": "Fogo" },
      { "fruto": "Wepear", "frutaReal": "Abacate", "danoBasal": "1d12+15 Especial", "tipo": "Elétrico" },
      { "fruto": "Wiki", "frutaReal": "Kiwi", "danoBasal": "1d10+10 Especial", "tipo": "Pedra" },
      { "fruto": "Yache", "frutaReal": "Chirimoia", "danoBasal": "1d10+10 Especial", "tipo": "Gelo" }
    ]
  };

  console.log('✓ Dádiva da Natureza atualizada com 68 frutas!');
} else {
  console.log('✗ Golpe não encontrado!');
}

// Converter de volta para string
const novoConteudo = `// Dados completos de todos os golpes Pokémon
const GOLPES_DATA = ${JSON.stringify(GOLPES_DATA, null, 2)}

export default GOLPES_DATA
`;

// Salvar
fs.writeFileSync('./src/golpesData.js', novoConteudo, 'utf8');

console.log('\n✓ Arquivo salvo!');
