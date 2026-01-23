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

let count = 0;

// Anel de Gelo - Similar a Rolagem
if (typeof GOLPES_DATA["Anel de Gelo"].efeito === 'string') {
  GOLPES_DATA["Anel de Gelo"].efeito = {
    "descricao": "O usuário deve continuar atacando todas as rodadas usando o Anel de Gelo pelas próximas quatro rodadas (totalizando cinco ataques), até que ele falhe em acertar o alvo ou até que seu deslocamento não seja o suficiente para alcançar o alvo. O Dano Basal aumenta conforme o número de rodadas consecutivas de Anel de Gelo:",
    "tabela": [
      { "rodada": "Primeira", "danoBasal": "1d10+4 Físico" },
      { "rodada": "Segunda", "danoBasal": "2d10+8 Físico" },
      { "rodada": "Terceira", "danoBasal": "2d10+12 Físico" },
      { "rodada": "Quarta", "danoBasal": "3d10+16 Físico" },
      { "rodada": "Quinta", "danoBasal": "4d10+20 Físico" }
    ]
  };
  count++;
  console.log('✓ Anel de Gelo');
}

// Camuflagem - Muda tipo por ambiente/clima
if (typeof GOLPES_DATA["Camuflagem"].efeito === 'string') {
  GOLPES_DATA["Camuflagem"].efeito = {
    "descricao": "O usuário muda seu Tipo de acordo com o ambiente e com o Clima:",
    "tabela": [
      { "ambiente": "Água Doce", "tipo": "Água" },
      { "ambiente": "Ártico / Taiga / Tundra", "tipo": "Gelo" },
      { "ambiente": "Caverna", "tipo": "Pedra" },
      { "ambiente": "Céu", "tipo": "Voador" },
      { "ambiente": "Cidade", "tipo": "Normal" },
      { "ambiente": "Deserto", "tipo": "Terra" },
      { "ambiente": "Floresta", "tipo": "Planta" },
      { "ambiente": "Montanha", "tipo": "Pedra" },
      { "ambiente": "Oceano", "tipo": "Água" },
      { "ambiente": "Pradaria", "tipo": "Planta" },
      { "ambiente": "Praia", "tipo": "Terra" },
      { "ambiente": "Selva", "tipo": "Inseto" },
      { "ambiente": "Vulcão", "tipo": "Fogo" },
      { "clima": "Ensolarado", "tipo": "Fogo" },
      { "clima": "Chuva", "tipo": "Água" },
      { "clima": "Granizo", "tipo": "Gelo" },
      { "clima": "Tempestade de Areia", "tipo": "Terra" }
    ]
  };
  count++;
  console.log('✓ Camuflagem');
}

// Esfera Climática
if (typeof GOLPES_DATA["Esfera Climática"].efeito === 'string') {
  GOLPES_DATA["Esfera Climática"].efeito = {
    "descricao": "Se o Clima não estiver Ameno, o Dano Basal da Esfera Climática aumenta para 4d12+16 Especial e o Tipo dele muda variando conforme o Clima. Se houver mais de um Clima em vigência, é possível escolher qual será o Tipo (e o dano consequentemente) da Esfera Climática.",
    "tabela": [
      { "clima": "Ensolarado", "tipo": "Fogo", "danoBasal": "4d12+16 Especial" },
      { "clima": "Tempestade de Areia", "tipo": "Pedra", "danoBasal": "4d12+16 Especial" },
      { "clima": "Granizo", "tipo": "Gelo", "danoBasal": "4d12+16 Especial" },
      { "clima": "Chuva", "tipo": "Água", "danoBasal": "4d12+16 Especial" },
      { "clima": "Ameno", "tipo": "Normal", "danoBasal": "2d8+6 Especial" }
    ]
  };
  count++;
  console.log('✓ Esfera Climática');
}

// Nó de Grama - Similar a Rasteira (baseado em peso)
if (typeof GOLPES_DATA["Nó de Grama"].efeito === 'string') {
  GOLPES_DATA["Nó de Grama"].efeito = {
    "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal do Nó de Grama varia conforme a Categoria de Peso do alvo:",
    "tabela": [
      { "categoria": "Muito Leve", "danoBasal": "1d10 Especial" },
      { "categoria": "Leve", "danoBasal": "1d10+5 Especial" },
      { "categoria": "Médio", "danoBasal": "1d10+10 Especial" },
      { "categoria": "Pesado", "danoBasal": "2d10+12 Especial" },
      { "categoria": "Muito Pesado", "danoBasal": "3d10+14 Especial" },
      { "categoria": "Extremamente Pesado", "danoBasal": "5d10+16 Especial" }
    ]
  };
  count++;
  console.log('✓ Nó de Grama');
}

console.log(`\n✓ ${count} golpes adicionados!`);

// Converter de volta para string
const novoConteudo = `// Dados completos de todos os golpes Pokémon
const GOLPES_DATA = ${JSON.stringify(GOLPES_DATA, null, 2)}

export default GOLPES_DATA
`;

// Salvar
fs.writeFileSync('./src/golpesData.js', novoConteudo, 'utf8');

console.log('\n✓ Arquivo salvo!');
