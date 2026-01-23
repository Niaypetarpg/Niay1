const fs = require('fs');

// Ler o arquivo
let golpesDataStr = fs.readFileSync('./src/golpesData.js', 'utf8');

// Extrair apenas o objeto GOLPES_DATA
const startMatch = golpesDataStr.match(/const GOLPES_DATA = /);
const start = golpesDataStr.indexOf('{', startMatch.index);
const end = golpesDataStr.lastIndexOf('export default GOLPES_DATA');

const objetoStr = golpesDataStr.substring(start, end).trim();
// Remover o ponto e vírgula final se existir
const objetoLimpo = objetoStr.endsWith(';') ? objetoStr.slice(0, -1) : objetoStr;

// Avaliar o objeto
let GOLPES_DATA;
eval('GOLPES_DATA = ' + objetoLimpo);

console.log('✓ Arquivo carregado e parseado\n');

// Atualizar os golpes com tabelas
let count = 0;

// Poder Oculto (caso especial com 2 tabelas)
if (typeof GOLPES_DATA["Poder Oculto"].efeito === 'string') {
  GOLPES_DATA["Poder Oculto"].efeito = {
    "descricao": "Quando um pokémon aprende seu Poder Oculto, role 1d4 para definir o Dano Basal do Poder Oculto. Além disso, role 1d20 para definir o Tipo do Poder Oculto. O Tipo definido será o Tipo do Golpe no lugar do Tipo Normal, de modo que o dano causado será do Tipo definido.",
    "tabelaDano": [
      { "resultado": "1", "danoBasal": "1d12+6 Especial" },
      { "resultado": "2", "danoBasal": "2d8+6 Especial" },
      { "resultado": "3", "danoBasal": "2d10+8 Especial" },
      { "resultado": "4", "danoBasal": "3d8+10 Especial" }
    ],
    "tabelaTipo": [
      { "resultado": "1", "tipo": "Água" },
      { "resultado": "2", "tipo": "Dragão" },
      { "resultado": "3", "tipo": "Elétrico" },
      { "resultado": "4", "tipo": "Fada" },
      { "resultado": "5", "tipo": "Fantasma" },
      { "resultado": "6", "tipo": "Fogo" },
      { "resultado": "7", "tipo": "Gelo" },
      { "resultado": "8", "tipo": "Inseto" },
      { "resultado": "9", "tipo": "Lutador" },
      { "resultado": "10", "tipo": "Metal" },
      { "resultado": "11", "tipo": "Normal" },
      { "resultado": "12", "tipo": "Pedra" },
      { "resultado": "13", "tipo": "Planta" },
      { "resultado": "14", "tipo": "Psíquico" },
      { "resultado": "15", "tipo": "Terra" },
      { "resultado": "16", "tipo": "Trevas" },
      { "resultado": "17", "tipo": "Venenoso" },
      { "resultado": "18", "tipo": "Voador" },
      { "resultado": "19 ou 20", "tipo": "Role Novamente" }
    ]
  };
  count++;
  console.log('✓ Poder Oculto');
}

// Colisão Quente
if (typeof GOLPES_DATA["Colisão Quente"].efeito === 'string') {
  GOLPES_DATA["Colisão Quente"].efeito = {
    "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal da Colisão Quente varia conforme a diferença entre as Categorias de Peso do alvo e do usuário:",
    "tabela": [
      { "diferenca": "Iguais", "danoBasal": "1d10 Físico" },
      { "diferenca": "Usuário mais pesado em 1 Categoria", "danoBasal": "1d10+10 Físico" },
      { "diferenca": "Usuário mais pesado em 2 Categorias", "danoBasal": "2d12+12 Físico" },
      { "diferenca": "Usuário mais pesado em 3 Categorias", "danoBasal": "3d10+14 Físico" },
      { "diferenca": "Usuário mais pesado em 4+ Categorias", "danoBasal": "5d10+16 Físico" }
    ]
  };
  count++;
  console.log('✓ Colisão Quente');
}

// Corte Furioso
if (typeof GOLPES_DATA["Corte Furioso"].efeito === 'string') {
  GOLPES_DATA["Corte Furioso"].efeito = {
    "descricao": "Se Corte Furioso for usado consecutivamente com sucesso contra o mesmo alvo, seu Dano Basal aumenta conforme a tabela abaixo:",
    "tabela": [
      { "rodada": "Segunda", "danoBasal": "1d12+6 Físico" },
      { "rodada": "Terceira", "danoBasal": "2d12+12 Físico" },
      { "rodada": "Quarta", "danoBasal": "3d12+18 Físico" },
      { "rodada": "Além da Quarta", "danoBasal": "4d12+24 Físico" }
    ]
  };
  count++;
  console.log('✓ Corte Furioso');
}

// Curinga
if (typeof GOLPES_DATA["Curinga"].efeito === 'string') {
  GOLPES_DATA["Curinga"].efeito = {
    "descricao": "O Dano Basal deste Golpe varia conforme o número de vezes que o usuário usou o Curinga neste encontro. Se o Dano Basal atingir o máximo em determinado encontro, a Frequência se tornará Diária, de forma que não será possível usá-lo novamente naquele mesmo encontro.",
    "tabela": [
      { "usos": "1 ou 2", "danoBasal": "1d10+4 Especial" },
      { "usos": "3", "danoBasal": "1d12+6 Especial" },
      { "usos": "4", "danoBasal": "2d10+8 Especial" },
      { "usos": "5", "danoBasal": "7d10+28 Especial" }
    ]
  };
  count++;
  console.log('✓ Curinga');
}

// Engolir
if (typeof GOLPES_DATA["Engolir"].efeito === 'string') {
  GOLPES_DATA["Engolir"].efeito = {
    "descricao": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará a quantidade de PV recuperados por Engolir. Depois de usar Engolir, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Engolir não faz nada.",
    "tabela": [
      { "fases": "Uma Fase de cada Atributo", "pvRecuperados": "25% dos PV máximos" },
      { "fases": "Duas Fases de cada Atributo", "pvRecuperados": "Metade dos PV máximos" },
      { "fases": "Três Fases de cada Atributo", "pvRecuperados": "Todos os PV" }
    ]
  };
  count++;
  console.log('✓ Engolir');
}

// Esfera Elétrica
if (typeof GOLPES_DATA["Esfera Elétrica"].efeito === 'string') {
  GOLPES_DATA["Esfera Elétrica"].efeito = {
    "descricao": "O alvo revela a Velocidade atual dele (com Fases, bônus e penalidades aplicados). O Dano Basal da Esfera Elétrica varia conforme a divisão entre a Velocidade atual do usuário e a Velocidade atual do alvo:",
    "tabela": [
      { "velocidade": "Usuário 4x+ mais rápido", "danoBasal": "5d10+16 Especial" },
      { "velocidade": "Usuário 3x mais rápido", "danoBasal": "3d10+14 Especial" },
      { "velocidade": "Usuário 2x mais rápido", "danoBasal": "2d10+12 Especial" },
      { "velocidade": "Usuário mais rápido", "danoBasal": "1d10+10 Especial" }
    ]
  };
  count++;
  console.log('✓ Esfera Elétrica');
}

// Liberação
if (typeof GOLPES_DATA["Liberação"].efeito === 'string') {
  GOLPES_DATA["Liberação"].efeito = {
    "descricao": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará o Dano Basal da Liberação. Depois de usar Liberação, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Liberação não faz nada.",
    "tabela": [
      { "fases": "Uma Fase de cada Atributo", "danoBasal": "3d10+12 Especial" },
      { "fases": "Duas Fases de cada Atributo", "danoBasal": "4d12+16 Especial" },
      { "fases": "Três Fases de cada Atributo", "danoBasal": "5d12+18 Especial" }
    ]
  };
  count++;
  console.log('✓ Liberação');
}

// Mangual
if (typeof GOLPES_DATA["Mangual"].efeito === 'string') {
  GOLPES_DATA["Mangual"].efeito = {
    "descricao": "O Dano Basal do Mangual depende dos Pontos de Vida do usuário:",
    "tabela": [
      { "pvAtuais": "70% ou mais dos PV máximos", "danoBasal": "1d10+5 Físico" },
      { "pvAtuais": "36% a 69% dos PV máximos", "danoBasal": "2d10+10 Físico" },
      { "pvAtuais": "21% a 35% dos PV máximos", "danoBasal": "3d10+10 Físico" },
      { "pvAtuais": "6% a 20% dos PV máximos", "danoBasal": "4d10+10 Físico" },
      { "pvAtuais": "1 a 5% dos PV máximos", "danoBasal": "5d10+20 Físico" }
    ]
  };
  count++;
  console.log('✓ Mangual');
}

// Peso Pesado
if (typeof GOLPES_DATA["Peso Pesado"].efeito === 'string') {
  GOLPES_DATA["Peso Pesado"].efeito = {
    "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal do Peso Pesado varia conforme a diferença entre as Categorias de Peso do alvo e do usuário:",
    "tabela": [
      { "diferenca": "Iguais", "danoBasal": "1d10 Físico" },
      { "diferenca": "Usuário mais pesado em 1 Categoria", "danoBasal": "1d10+10 Físico" },
      { "diferenca": "Usuário mais pesado em 2 Categorias", "danoBasal": "2d12+12 Físico" },
      { "diferenca": "Usuário mais pesado em 3 Categorias", "danoBasal": "3d10+14 Físico" },
      { "diferenca": "Usuário mais pesado em 4+ Categorias", "danoBasal": "5d10+16 Físico" }
    ]
  };
  count++;
  console.log('✓ Peso Pesado');
}

// Pular
if (typeof GOLPES_DATA["Pular"].efeito === 'string') {
  GOLPES_DATA["Pular"].efeito = {
    "descricao": "No momento que declarar o uso deste Golpe, o usuário vai Pular a 10 metros no ar e seu turno acaba. Isso é considerado um efeito de Preparo. Na rodada seguinte, o usuário atinge o solo criando uma Explosão com valor conforme sua Categoria de Peso. Se o resultado do Teste de Acurácia for 17 ou mais, os alvos estão Paralisados.",
    "tabela": [
      { "categoria": "Muito Leve", "explosao": "1" },
      { "categoria": "Leve", "explosao": "2" },
      { "categoria": "Médio", "explosao": "3" },
      { "categoria": "Pesado", "explosao": "4" },
      { "categoria": "Muito Pesado", "explosao": "5" },
      { "categoria": "Extremamente Pesado", "explosao": "6" }
    ]
  };
  count++;
  console.log('✓ Pular');
}

// Rasteira
if (typeof GOLPES_DATA["Rasteira"].efeito === 'string') {
  GOLPES_DATA["Rasteira"].efeito = {
    "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal da Rasteira varia conforme a Categoria de Peso do alvo:",
    "tabela": [
      { "categoria": "Muito Leve", "danoBasal": "1d10 Físico" },
      { "categoria": "Leve", "danoBasal": "1d10+5 Físico" },
      { "categoria": "Médio", "danoBasal": "1d10+10 Físico" },
      { "categoria": "Pesado", "danoBasal": "2d10+12 Físico" },
      { "categoria": "Muito Pesado", "danoBasal": "3d10+14 Físico" },
      { "categoria": "Extremamente Pesado", "danoBasal": "5d10+16 Físico" }
    ]
  };
  count++;
  console.log('✓ Rasteira');
}

// Reversão
if (typeof GOLPES_DATA["Reversão"].efeito === 'string') {
  GOLPES_DATA["Reversão"].efeito = {
    "descricao": "O Dano Basal da Reversão varia conforme a quantidade de PV que o usuário possui atualmente comparada a seus Pontos de Vida máximos:",
    "tabela": [
      { "pvAtuais": "Mais de 70% dos PV Máximos", "danoBasal": "1d10+5 Físico" },
      { "pvAtuais": "36% a 70% dos PV Máximos", "danoBasal": "2d10+10 Físico" },
      { "pvAtuais": "21% a 35% dos PV Máximos", "danoBasal": "3d10+10 Físico" },
      { "pvAtuais": "6% a 20% dos PV Máximos", "danoBasal": "4d10+10 Físico" },
      { "pvAtuais": "1% a 5% dos PV Máximos", "danoBasal": "5d10+20 Físico" }
    ]
  };
  count++;
  console.log('✓ Reversão');
}

// Rolagem
if (typeof GOLPES_DATA["Rolagem"].efeito === 'string') {
  GOLPES_DATA["Rolagem"].efeito = {
    "descricao": "O usuário deve continuar atacando todas as rodadas usando a Rolagem pelas próximas quatro rodadas (totalizando cinco ataques), até que ele falhe em acertar o alvo ou até que seu deslocamento não seja o suficiente para alcançar o alvo. O Dano Basal aumenta conforme o número de rodadas consecutivas de Rolagem:",
    "tabela": [
      { "rodada": "Primeira", "danoBasal": "1d10+4 Físico" },
      { "rodada": "Segunda", "danoBasal": "2d10+8 Físico" },
      { "rodada": "Terceira", "danoBasal": "2d10+12 Físico" },
      { "rodada": "Quarta", "danoBasal": "3d10+16 Físico" },
      { "rodada": "Quinta", "danoBasal": "4d10+20 Físico" }
    ]
  };
  count++;
  console.log('✓ Rolagem');
}

// Poder da Natureza
if (typeof GOLPES_DATA["Poder da Natureza"].efeito === 'string') {
  GOLPES_DATA["Poder da Natureza"].efeito = {
    "descricao": "O usuário usa um Golpe de acordo com o ambiente em que se encontra. Se a Frequência do Golpe usado for Por Encontro ou Diária, não será possível usar o Poder da Natureza de novo durante o encontro.",
    "tabela": [
      { "ambiente": "Água Doce", "golpe": "Surfe" },
      { "ambiente": "Ártico, Taiga e Tundra", "golpe": "Nevasca" },
      { "ambiente": "Caverna", "golpe": "Esfera de Sombras" },
      { "ambiente": "Céu", "golpe": "Rajada de Vento" },
      { "ambiente": "Cidade", "golpe": "Estrela Cadente" },
      { "ambiente": "Deserto", "golpe": "Ataque de Areia" },
      { "ambiente": "Floresta", "golpe": "Folhas Mágicas" },
      { "ambiente": "Montanha", "golpe": "Deslizamento de Rochas" },
      { "ambiente": "Oceano", "golpe": "Hidrobomba" },
      { "ambiente": "Pradaria", "golpe": "Esporos Paralisantes" },
      { "ambiente": "Praia", "golpe": "Água Barrenta" },
      { "ambiente": "Selva", "golpe": "Folha Navalha" },
      { "ambiente": "Vulcão", "golpe": "Onda de Calor" }
    ]
  };
  count++;
  console.log('✓ Poder da Natureza');
}

// Poder Secreto
if (typeof GOLPES_DATA["Poder Secreto"].efeito === 'string') {
  GOLPES_DATA["Poder Secreto"].efeito = {
    "descricao": "Se o resultado do Teste de Acurácia for 17 ou mais, o Poder Secreto causa no alvo um efeito de acordo com o ambiente:",
    "tabela": [
      { "ambiente": "Água Doce", "efeito": "Perde uma Fase de Velocidade" },
      { "ambiente": "Ártico, Taiga e Tundra", "efeito": "Está Congelado" },
      { "ambiente": "Caverna", "efeito": "Está Atordoado" },
      { "ambiente": "Céu", "efeito": "Perde uma Fase de Ataque Especial" },
      { "ambiente": "Cidade", "efeito": "Está Paralisado" },
      { "ambiente": "Deserto", "efeito": "Recebe +2 às Dificuldades de Acurácia" },
      { "ambiente": "Floresta", "efeito": "Perde uma Fase de Defesa" },
      { "ambiente": "Montanha", "efeito": "Está Confuso" },
      { "ambiente": "Oceano", "efeito": "Perde uma Fase de Ataque" },
      { "ambiente": "Pradaria", "efeito": "Está Envenenado" },
      { "ambiente": "Praia", "efeito": "Perde uma Fase de Defesa Especial" },
      { "ambiente": "Selva", "efeito": "Está Adormecido" },
      { "ambiente": "Vulcão", "efeito": "Está Queimado" }
    ]
  };
  count++;
  console.log('✓ Poder Secreto');
}

console.log(`\n✓ ${count} golpes estruturados!`);

// Converter de volta para string
const novoConteudo = `// Dados completos de todos os golpes Pokémon
const GOLPES_DATA = ${JSON.stringify(GOLPES_DATA, null, 2)}

export default GOLPES_DATA
`;

// Salvar
fs.writeFileSync('./src/golpesData.js', novoConteudo, 'utf8');

console.log('\n✓ Arquivo salvo com sucesso!');
