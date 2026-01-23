const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('./src/golpesData.js', 'utf8');

// Lista de substituições
const substituicoes = [
  // Colisão Quente
  {
    buscar: `"Colisão Quente": {
    "tipo": "Fogo",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "O alvo revela a Categoria de Peso dele. O Dano Basal da Colisão Quente varia conforme a diferença entre as Categorias de Peso do alvo e do usuário- Iguais: 1d10 Físico / Usuário mais pesado que o alvo em uma Categoria de Peso: 1d10+10 Físico / Usuário mais pesado que o alvo em duas Categorias de Peso: 2d12+12 Físico / Usuário mais pesado que o alvo em três Categorias de Peso: 3d10+14 Físico / Usuário mais pesado que o alvo em quatro ou mais Categorias de Peso: 5d10+16 Físico"
  },`,
    substituir: `"Colisão Quente": {
    "tipo": "Fogo",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": {
      "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal da Colisão Quente varia conforme a diferença entre as Categorias de Peso do alvo e do usuário:",
      "tabela": [
        { "diferenca": "Iguais", "danoBasal": "1d10 Físico" },
        { "diferenca": "Usuário mais pesado em 1 Categoria", "danoBasal": "1d10+10 Físico" },
        { "diferenca": "Usuário mais pesado em 2 Categorias", "danoBasal": "2d12+12 Físico" },
        { "diferenca": "Usuário mais pesado em 3 Categorias", "danoBasal": "3d10+14 Físico" },
        { "diferenca": "Usuário mais pesado em 4+ Categorias", "danoBasal": "5d10+16 Físico" }
      ]
    }
  },`
  }
];

console.log('Iniciando correções...\n');

substituicoes.forEach((sub, idx) => {
  if (content.includes(sub.buscar)) {
    content = content.replace(sub.buscar, sub.substituir);
    console.log(`✓ Substituição ${idx + 1} aplicada`);
  } else {
    console.log(`✗ Substituição ${idx + 1} NÃO ENCONTRADA`);
  }
});

// Salvar o arquivo
fs.writeFileSync('./src/golpesData.js', content, 'utf8');

console.log('\n✓ Arquivo salvo!');
