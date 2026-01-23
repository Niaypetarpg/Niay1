const fs = require('fs');

// Ler o arquivo
let content = fs.readFileSync('./src/golpesData.js', 'utf8');

// Poder Oculto
content = content.replace(
  `  "Poder Oculto": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Reviravolta",
    "efeito": "Quando um pokémon aprende seu Poder Oculto, role 1d4 para definir o Dano Basal do Poder Oculto: Resultado da Rolagem de 1d4 1: 1d12+6 Especial; 2: 2d8+6 Especial; 3: 2d10+8 Especial; 4: 3d8+10 Especial. Além disso, quando um pokémon aprende seu Poder Oculto, role 1d20 para definir o Tipo do Poder Oculto. O Tipo definido será o Tipo do Golpe no lugar do Tipo Normal, de modo que o dano causado será do Tipo definido. Resultado da Rolagem de 1d20 1: Água; 2: Dragão; 3: Elétrico; 4: Fada; 5: Fantasma; 6: Fogo; 7: Gelo; 8: Inseto; 9: Lutador; 10: Metal; 11: Normal; 12: Pedra; 13: Planta; 14: Psíquico; 15: Terra; 16: Trevas; 17: Venenoso; 18: Voador; 19 ou 20: Role Novamente"
  },`,
  `  "Poder Oculto": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Reviravolta",
    "efeito": {
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
    }
  },`
);

// Colisão Quente
content = content.replace(
  `  "Colisão Quente": {
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
  `  "Colisão Quente": {
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
);

// Corte Furioso
content = content.replace(
  `  "Corte Furioso": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "1d4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Modéstia",
    "efeito": "Se Corte Furioso for usado consecutivamente com sucesso contra o mesmo alvo, seu Dano Basal aumenta conforme a tabela abaixo: Segunda Rodada: 1d12+6 Físico / Terceira Rodada: 2d12+12 Físico / Quarta Rodada: 3d12+18 Físico / Além da Quarta Rodada: 4d12+24 Físico"
  },`,
  `  "Corte Furioso": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "1d4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Modéstia",
    "efeito": {
      "descricao": "Se Corte Furioso for usado consecutivamente com sucesso contra o mesmo alvo, seu Dano Basal aumenta conforme a tabela abaixo:",
      "tabela": [
        { "rodada": "Segunda", "danoBasal": "1d12+6 Físico" },
        { "rodada": "Terceira", "danoBasal": "2d12+12 Físico" },
        { "rodada": "Quarta", "danoBasal": "3d12+18 Físico" },
        { "rodada": "Além da Quarta", "danoBasal": "4d12+24 Físico" }
      ]
    }
  },`
);

// Curinga
content = content.replace(
  `  "Curinga": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura (0)",
    "efeito": "O Dano Basal deste Golpe varia conforme o número de vezes que o usuário usou o Curinga neste encontro: N° Usos Curinga Usuário Encotr. Atual: 1 ou 2 Dano Basal:1d10+4 Especial / N° Usos Curinga Usuário Encotr. Atual: 3 Dano Basal: 1d12+6 Especial / N° Usos Curinga Usuário Encotr. Atual: 4 Dano Basal: 2d10+8 Especial / N° Usos Curinga Usuário Encotr. Atual: 5 Dano Basal: 7d10+28 Especial - Se o Dano Basal do Curinga atingir o máximo em determinado encontro, a Frequência do Curinga se tornará Diária, de forma que não será possível usá-lo novamente naquele mesmo encontro."
  },`,
  `  "Curinga": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura (0)",
    "efeito": {
      "descricao": "O Dano Basal deste Golpe varia conforme o número de vezes que o usuário usou o Curinga neste encontro. Se o Dano Basal atingir o máximo em determinado encontro, a Frequência se tornará Diária, de forma que não será possível usá-lo novamente naquele mesmo encontro.",
      "tabela": [
        { "usos": "1 ou 2", "danoBasal": "1d10+4 Especial" },
        { "usos": "3", "danoBasal": "1d12+6 Especial" },
        { "usos": "4", "danoBasal": "2d10+8 Especial" },
        { "usos": "5", "danoBasal": "7d10+28 Especial" }
      ]
    }
  },`
);

// Engolir
content = content.replace(
  `  "Engolir": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará a quantidade de PV recuperados por Engolir. Fases Def. e Def. Esp. recebidas por Estocagem: Uma Fase de cada Atributo / PV Recuperados:25% dos PV máximos & Fases Def. e Def. Esp. recebidas por Estocagem: Duas Fases de cada Atributo / PV Recuperados:Metade dos PV máximos & Fases Def. e Def. Esp. recebidas por Estocagem: Três Fases de cada Atributo/ PV Recuperados:Todos os PV // Depois de usar Engolir, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Engolir não faz nada."
  },`,
  `  "Engolir": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": {
      "descricao": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará a quantidade de PV recuperados por Engolir. Depois de usar Engolir, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Engolir não faz nada.",
      "tabela": [
        { "fases": "Uma Fase de cada Atributo", "pvRecuperados": "25% dos PV máximos" },
        { "fases": "Duas Fases de cada Atributo", "pvRecuperados": "Metade dos PV máximos" },
        { "fases": "Três Fases de cada Atributo", "pvRecuperados": "Todos os PV" }
      ]
    }
  },`
);

// Esfera Elétrica
content = content.replace(
  `  "Esfera Elétrica": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "O alvo revela a Velocidade atual dele (com Fases, bônus e penalidades aplicados). O Dano Basal da Esfera Elétrica varia conforme a divisão entre a Velocidade atual do usuário e a Velocidade atual do alvo- Velo. Usu. comparada à Velo Alvo:4x+ Dano Basal:5d10+16 Especial / Velo. Usu. comparada à Velo Alvo:3x Dano Basal:3d10+14 Especial / Velo. Usu. comparada à Velo Alvo:2x Dano Basal:2d10+12 Especial / Velo. Usu. comparada à Velo Alvo: Maior Dano Basal:1d10+10 Especial"
  },`,
  `  "Esfera Elétrica": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": {
      "descricao": "O alvo revela a Velocidade atual dele (com Fases, bônus e penalidades aplicados). O Dano Basal da Esfera Elétrica varia conforme a divisão entre a Velocidade atual do usuário e a Velocidade atual do alvo:",
      "tabela": [
        { "velocidade": "Usuário 4x+ mais rápido", "danoBasal": "5d10+16 Especial" },
        { "velocidade": "Usuário 3x mais rápido", "danoBasal": "3d10+14 Especial" },
        { "velocidade": "Usuário 2x mais rápido", "danoBasal": "2d10+12 Especial" },
        { "velocidade": "Usuário mais rápido", "danoBasal": "1d10+10 Especial" }
      ]
    }
  },`
);

// Liberação
content = content.replace(
  `  "Liberação": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará o Dano Basal da Liberação. Fases de Defesa e de Defesa Especial recebidas por Estocagem: Uma Fase de cada Atributo: 3d10+12 Especial; Duas Fases de cada Atributo: 4d12+16 Especial; Três Fases de cada Atributo: 5d12+18 Especial. Depois de usar Liberação, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Liberação não faz nada."
  },`,
  `  "Liberação": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": {
      "descricao": "O número de Fases de Defesa e de Defesa Especial que o usuário recebeu por Estocagem determinará o Dano Basal da Liberação. Depois de usar Liberação, as Fases recebidas por Estocagem são perdidas. Se o usuário não tiver usado Estocagem, a Liberação não faz nada.",
      "tabela": [
        { "fases": "Uma Fase de cada Atributo", "danoBasal": "3d10+12 Especial" },
        { "fases": "Duas Fases de cada Atributo", "danoBasal": "4d12+16 Especial" },
        { "fases": "Três Fases de cada Atributo", "danoBasal": "5d12+18 Especial" }
      ]
    }
  },`
);

// Mangual
content = content.replace(
  `  "Mangual": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Despedida",
    "efeito": "O Dano Basal do Mangual depende dos Pontos de Vida do usuário: PV Atuais 70% ou mais dos PV máximos: 1d10+5 Físico; De 36% a 69% dos PV máximos: 2d10+10 Físico; De 21% a 35% dos PV máximos: 3d10+10 Físico; De 6% a 20% dos PV máximos: 4d10+10 Físico; De 1 PV até 5% dos PV máximos: 5d10+20 Físico"
  },`,
  `  "Mangual": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Despedida",
    "efeito": {
      "descricao": "O Dano Basal do Mangual depende dos Pontos de Vida do usuário:",
      "tabela": [
        { "pvAtuais": "70% ou mais dos PV máximos", "danoBasal": "1d10+5 Físico" },
        { "pvAtuais": "36% a 69% dos PV máximos", "danoBasal": "2d10+10 Físico" },
        { "pvAtuais": "21% a 35% dos PV máximos", "danoBasal": "3d10+10 Físico" },
        { "pvAtuais": "6% a 20% dos PV máximos", "danoBasal": "4d10+10 Físico" },
        { "pvAtuais": "1 a 5% dos PV máximos", "danoBasal": "5d10+20 Físico" }
      ]
    }
  },`
);

// Peso Pesado
content = content.replace(
  `  "Peso Pesado": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "O alvo revela a Categoria de Peso dele. O Dano Basal do Peso Pesado varia conforme a diferença entre as Categorias de Peso do alvo e do usuário: Categorias de Peso Iguais: 1d10 Físico; Usuário mais pesado que o alvo em uma Categoria de Peso: 1d10+10 Físico; Usuário mais pesado que o alvo em duas Categorias de Peso: 2d12+12 Físico; Usuário mais pesado que o alvo em três Categorias de Peso: 3d10+14 Físico; Usuário mais pesado que o alvo em quatro ou mais Categorias de Peso: 5d10+16 Físico"
  },`,
  `  "Peso Pesado": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": {
      "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal do Peso Pesado varia conforme a diferença entre as Categorias de Peso do alvo e do usuário:",
      "tabela": [
        { "diferenca": "Iguais", "danoBasal": "1d10 Físico" },
        { "diferenca": "Usuário mais pesado em 1 Categoria", "danoBasal": "1d10+10 Físico" },
        { "diferenca": "Usuário mais pesado em 2 Categorias", "danoBasal": "2d12+12 Físico" },
        { "diferenca": "Usuário mais pesado em 3 Categorias", "danoBasal": "3d10+14 Físico" },
        { "diferenca": "Usuário mais pesado em 4+ Categorias", "danoBasal": "5d10+16 Físico" }
      ]
    }
  },`
);

// Pular
content = content.replace(
  `  "Pular": {
    "tipo": "Voador",
    "aptidao": "Ternura",
    "descritores": "Explosão (ver texto), Preparo",
    "acuracia": "4",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento que declarar o uso deste Golpe, o usuário vai Pular a 10 metros no ar e seu turno acaba. Isso é considerado um efeito de Preparo. Na rodada seguinte, o usuário atinge o solo criando uma Explosão com valor conforme sua Categoria de Peso: 1 para Muito Leve, 2 para Leve, 3 para Médio, 4 para Pesado, 5 para Muito Pesado e 6 para Extremamente Pesado. Se o resultado do Teste de Acurácia for 17 ou mais, os alvos estão Paralisados."
  },`,
  `  "Pular": {
    "tipo": "Voador",
    "aptidao": "Ternura",
    "descritores": "Explosão (ver texto), Preparo",
    "acuracia": "4",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": {
      "descricao": "No momento que declarar o uso deste Golpe, o usuário vai Pular a 10 metros no ar e seu turno acaba. Isso é considerado um efeito de Preparo. Na rodada seguinte, o usuário atinge o solo criando uma Explosão com valor conforme sua Categoria de Peso. Se o resultado do Teste de Acurácia for 17 ou mais, os alvos estão Paralisados.",
      "tabela": [
        { "categoria": "Muito Leve", "explosao": "1" },
        { "categoria": "Leve", "explosao": "2" },
        { "categoria": "Médio", "explosao": "3" },
        { "categoria": "Pesado", "explosao": "4" },
        { "categoria": "Muito Pesado", "explosao": "5" },
        { "categoria": "Extremamente Pesado", "explosao": "6" }
      ]
    }
  },`
);

// Rasteira
content = content.replace(
  `  "Rasteira": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O alvo revela a Categoria de Peso dele. O Dano Basal da Rasteira varia conforme a Categoria de Peso do alvo: Categoria de Peso do Alvo Muito Leve: 1d10 Físico; Leve: 1d10+5 Físico; Médio: 1d10+10 Físico; Pesado: 2d10+12 Físico; Muito Pesado: 3d10+14 Físico; Extremamente Pesado: 5d10+16 Físico"
  },`,
  `  "Rasteira": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": {
      "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal da Rasteira varia conforme a Categoria de Peso do alvo:",
      "tabela": [
        { "categoria": "Muito Leve", "danoBasal": "1d10 Físico" },
        { "categoria": "Leve", "danoBasal": "1d10+5 Físico" },
        { "categoria": "Médio", "danoBasal": "1d10+10 Físico" },
        { "categoria": "Pesado", "danoBasal": "2d10+12 Físico" },
        { "categoria": "Muito Pesado", "danoBasal": "3d10+14 Físico" },
        { "categoria": "Extremamente Pesado", "danoBasal": "5d10+16 Físico" }
      ]
    }
  },`
);

// Reversão
content = content.replace(
  `  "Reversão": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Despedida",
    "efeito": "O Dano Basal da Reversão varia conforme a quantidade de PV que o usuário possui atualmente comparada a seus Pontos de Vida máximos: PV Atuais Mais de 70% dos PV Máximos: 1d10+5 Físico; De 36% a 70% dos PV Máximos: 2d10+10 Físico; De 21% a 35% dos PV Máximos: 3d10+10 Físico; De 6% a 20% dos PV Máximos: 4d10+10 Físico; De 1% a 5% dos PV Máximos: 5d10+20 Físico"
  },`,
  `  "Reversão": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Despedida",
    "efeito": {
      "descricao": "O Dano Basal da Reversão varia conforme a quantidade de PV que o usuário possui atualmente comparada a seus Pontos de Vida máximos:",
      "tabela": [
        { "pvAtuais": "Mais de 70% dos PV Máximos", "danoBasal": "1d10+5 Físico" },
        { "pvAtuais": "36% a 70% dos PV Máximos", "danoBasal": "2d10+10 Físico" },
        { "pvAtuais": "21% a 35% dos PV Máximos", "danoBasal": "3d10+10 Físico" },
        { "pvAtuais": "6% a 20% dos PV Máximos", "danoBasal": "4d10+10 Físico" },
        { "pvAtuais": "1% a 5% dos PV Máximos", "danoBasal": "5d10+20 Físico" }
      ]
    }
  },`
);

// Rolagem
content = content.replace(
  `  "Rolagem": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Investida",
    "acuracia": "4",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "O usuário deve continuar atacando todas as rodadas usando a Rolagem pelas próximas quatro rodadas (totalizando cinco ataques), até que ele falhe em acertar o alvo ou até que seu deslocamento não seja o suficiente para alcançar o alvo. O Dano Basal aumenta conforme o número de rodadas consecutivas de Rolagem: Rodada Primeira: 1d10+4 Físico; Segunda: 2d10+8 Físico; Terceira: 2d10+12 Físico; Quarta: 3d10+16 Físico; Quinta: 4d10+20 Físico"
  },`,
  `  "Rolagem": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Investida",
    "acuracia": "4",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": {
      "descricao": "O usuário deve continuar atacando todas as rodadas usando a Rolagem pelas próximas quatro rodadas (totalizando cinco ataques), até que ele falhe em acertar o alvo ou até que seu deslocamento não seja o suficiente para alcançar o alvo. O Dano Basal aumenta conforme o número de rodadas consecutivas de Rolagem:",
      "tabela": [
        { "rodada": "Primeira", "danoBasal": "1d10+4 Físico" },
        { "rodada": "Segunda", "danoBasal": "2d10+8 Físico" },
        { "rodada": "Terceira", "danoBasal": "2d10+12 Físico" },
        { "rodada": "Quarta", "danoBasal": "3d10+16 Físico" },
        { "rodada": "Quinta", "danoBasal": "4d10+20 Físico" }
      ]
    }
  },`
);

// Poder da Natureza
content = content.replace(
  `  "Poder da Natureza": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Ver Efeito",
    "danoBasal": "Ver Efeito",
    "alcance": "Ver Efeito",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Sorteio",
    "efeito": "O usuário usa um Golpe de acordo com o ambiente em que se encontra. Se a Frequência do Golpe usado for Por Encontro ou Diária, não será possível usar o Poder da Natureza de novo durante o encontro. Ambiente: Água Doce - Surfe; Ártico, Taiga e Tundra - Nevasca; Caverna - Esfera de Sombras; Céu - Rajada de Vento; Cidade - Estrela Cadente; Deserto - Ataque de Areia; Floresta - Folhas Mágicas; Montanha - Deslizamento de Rochas; Oceano - Hidrobomba; Pradaria - Esporos Paralisantes; Praia - Água Barrenta; Selva - Folha Navalha; Vulcão - Onda de Calor"
  },`,
  `  "Poder da Natureza": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Ver Efeito",
    "danoBasal": "Ver Efeito",
    "alcance": "Ver Efeito",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Sorteio",
    "efeito": {
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
    }
  },`
);

// Poder Secreto
content = content.replace(
  `  "Poder Secreto": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Sorteio",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o Poder Secreto causa no alvo um efeito de acordo com o ambiente: Água Doce: perde uma Fase de Velocidade; Ártico, Taiga e Tundra: está Congelado; Caverna: está Atordoado; Céu: perde uma Fase de Ataque Especial; Cidade: está Paralisado; Deserto: recebe +2 às Dificuldades de Acurácia; Floresta: perde uma Fase de Defesa; Montanha: está Confuso; Oceano: perde uma Fase de Ataque; Pradaria: está Envenenado; Praia: perde uma Fase de Defesa Especial; Selva: está Adormecido; Vulcão: está Queimado"
  },`,
  `  "Poder Secreto": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Sorteio",
    "efeito": {
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
    }
  },`
);

// Salvar o arquivo
fs.writeFileSync('./src/golpesData.js', content, 'utf8');

console.log('✓ Todos os 20 golpes foram estruturados com tabelas!');
