// Dados completos de todos os golpes Pokémon
const GOLPES_DATA = {
  "Abanar Rabo": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "O alvo perde uma Fase de Defesa."
  },
  "Abandono da Concha": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases de Ataque, de Ataque Especial e de Velocidade do usuário, mas o usuário perde uma Fase de Defesa e de Defesa Especial."
  },
  "Absorção": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Proveito",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual à metade do dano causado ao alvo."
  },
  "Aceleração": {
    "tipo": "Pedra",
    "aptidao": "Estilo",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se um inimigo declarar um Golpe, é possível usar a Aceleração no turno dele antes do Golpe dele."
  },
  "Ácido": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Aço Solar": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Explosão 5, Impacto",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Não é possível usar nenhum Golpe nem nenhuma Habilidade para negar os efeitos do Feixe Espectral."
  },
  "Açoite": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Modéstia",
    "efeito": "O usuário do Açoite repetirá um Golpe idêntico a Açoite por 1d2 rodadas depois dessa, tendo como alvo a criatura mais próxima e se deslocando para alcançá-la. Se há mais de uma criatura equidistante, é possível escolher a criatura que será o alvo. Após estas duas ou três rodadas de uso seguido de Açoite, o usuário cessa o Açoite e está Confuso. Os usos obrigatórios de Açoite na(s) rodada(s) subsequente(s) à inicial ainda consomem normalmente a Ação de Golpe (ou a Ação Padrão, se for humano)."
  },
  "Açoite Flamejante": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "O alvo perde uma Fase de Defesa."
  },
  "Acrobacias": {
    "tipo": "Voador",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "O Dano Basal deste Golpe é alterado para 4d12+16 Físico se o usuário não estiver portando nenhum item Mantido."
  },
  "Acupuntura": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": {
      "descricao": "Role 1d6 e então confira o efeito:",
      "tabela": [
        {
          "resultado": "1",
          "efeito": "Eleva duas Fases de Ataque do alvo"
        },
        {
          "resultado": "2",
          "efeito": "Eleva duas Fases de Defesa do alvo"
        },
        {
          "resultado": "3",
          "efeito": "Eleva duas Fases de Ataque Especial do alvo"
        },
        {
          "resultado": "4",
          "efeito": "Eleva duas Fases de Defesa Especial do alvo"
        },
        {
          "resultado": "5",
          "efeito": "Eleva duas Fases de Velocidade do alvo"
        },
        {
          "resultado": "6",
          "efeito": "Reduz em 2 as Dificuldades de Acurácia do alvo até o fim do encontro"
        }
      ]
    }
  },
  "Adaptação": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O usuário muda o Tipo dele para o Tipo que quiser por 1d4+1 rodadas."
  },
  "Adeus": {
    "tipo": "Noturno",
    "aptidao": "Estilo",
    "descritores": "Som",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O alvo perde uma Fase de Ataque Especial e o usuário imediatamente retorna à pokébola; um novo pokémon é instantaneamente enviado em seu lugar."
  },
  "Adulação": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Eleva uma Fase de Ataque Especial do alvo, mas o deixa Confuso."
  },
  "Afiar": {
    "tipo": "Noturno",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "-",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque do usuário e reduz em 1 as Dificuldades de Acurácia de seus Golpes Físicos Corpo a Corpo até o fim do encontro."
  },
  "Afrochoque": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Empurrão 5 (1d12), Rebote (1/4)",
    "acuracia": "2",
    "danoBasal": "5612+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Agarrar": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Agilidade": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Entrada",
    "efeito": "Eleva duas Fases de Velocidade do usuário"
  },
  "Água Barrenta": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "Coluna 4",
    "acuracia": "5",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, os alvos têm suas Dificuldades de Acurácia aumentadas em 2."
  },
  "Agulhão": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Se Agulhão deixar o alvo inconsciente, o usuário eleva duas Fases de Ataque."
  },
  "Agulhas": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+1 Físico",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco Agulhas podem ser atiradas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Agulhas Gêmeas": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "1d8+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo é Envenenado."
  },
  "Alvorada": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera metade de seus PV máximos. Se o Clima estiver Chuvoso, ele recupera apenas um quarto dos PV máximos, em vez de metade. Se o Clima estiver Ensolarado, ele recupera dois terços dos PV máximos, em vez de metade."
  },
  "Amizade": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "Uma das Habilidades do alvo (determinada aleatoriamente se ele possuir mais de uma) é trocada por uma das Habilidades do usuário por 1d4+1 rodadas."
  },
  "Amnésia": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases da Defesa Especial do usuário."
  },
  "Ancorar": {
    "tipo": "Metal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "O alvo não poderá fugir ou ser convocado de volta à pokébola até o fim do encontro ou até ficar inconsciente."
  },
  "Anel de Água": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "A Cobertura do Anel de Água permite que o usuário recupere 1/16 de seus Pontos de Vida máximos a cada rodada no início de seu turno."
  },
  "Anel de Fogo": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Modéstia",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Queimado."
  },
  "Anel de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Investida",
    "acuracia": "4",
    "danoBasal": "Ver Efeito",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": {
      "descricao": "O usuário deve continuar atacando todas as rodadas usando o Anel de Gelo pelas próximas quatro rodadas (totalizando cinco ataques), até que ele falhe em acertar o alvo ou até que seu deslocamento não seja o suficiente para alcançar o alvo. O Dano Basal aumenta conforme o número de rodadas consecutivas de Anel de Gelo:",
      "tabela": [
        {
          "rodada": "Primeira",
          "danoBasal": "1d10+4 Físico"
        },
        {
          "rodada": "Segunda",
          "danoBasal": "2d10+8 Físico"
        },
        {
          "rodada": "Terceira",
          "danoBasal": "2d10+12 Físico"
        },
        {
          "rodada": "Quarta",
          "danoBasal": "3d10+16 Físico"
        },
        {
          "rodada": "Quinta",
          "danoBasal": "4d10+20 Físico"
        }
      ]
    }
  },
  "Armadura Ácida": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases de Defesa do usuário."
  },
  "Aromaterapia": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modelo",
    "efeito": "O alvo é curado de uma Condição. Se ele possui mais de uma Condição sobre si, é possível escolher qual será curada."
  },
  "Aromatizar": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 6, Som",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "Pelo resto do encontro, são reduzidas em 2 as Dificuldades de Acurácia de Golpes feitos contra os alvos na área."
  },
  "Arranhão": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Arremesso Circular": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Explosão 4, Som",
    "acuracia": "4",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Se for uma batalha oficial entre humanos, as regras dizem que um pokémon que foi parar tão longe deve ser retornado à pokébola e substituído por outro."
  },
  "Arremesso de Pedras": {
    "tipo": "Fogo",
    "aptidao": "Estilo",
    "descritores": "Ameaça",
    "acuracia": "4",
    "danoBasal": "2d8+6 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Arremesso Sísmico": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "O alvo perde uma quantidade de Pontos de Vida igual ao Nível do usuário."
  },
  "Arroto": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "5d10+25 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "O Arroto só pode ser usado se o usuário comeu uma fruta durante o encontro."
  },
  "Antena": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "2d8+4 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "O usuário recupera metade do dano causado ao alvo que sofreu mais dano."
  },
  "Aperto Esmagador": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "O Dano Basal do Aperto Esmagador é reduzido em 1d12 para cada 10% de Pontos de Vida que o alvo possui abaixo de seus PV máximos, até o mínimo de apenas os 18 de dano."
  },
  "Apito de Folha": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Empurrão 40 (0)",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos Adormecem."
  },
  "Aproveitamento": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "+1d10 ao Dano Basal para cada Fase que o usuário possui acima da neutra (até o máximo de +6d10 por isso)."
  },
  "Ária Magnífica": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "4d12+16 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se houver algum aliado com Queimadura na área, este aliado não sofre o dano e ainda é restaurado da Queimadura."
  },
  "Armadilha de Concha": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 1",
    "frequencia": "Diária",
    "tagConcurso": "Abstração",
    "efeito": "Escolha um quadrado adjacente ao usuário para se tornar explosivo. Se alguma criatura se mover através da Armadilha de Concha, ela sofre 7d10+28 de dano Especial de Fogo, aplicando o Ataque Especial do usuário e a Defesa Especial da vítima normalmente, e são aplicadas resistências e vulnerabilidades a este dano."
  },
  "Asa de Aço": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Investida, Moral",
    "acuracia": "3",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, eleva uma Fase de Defesa do usuário."
  },
  "Ascensão": {
    "tipo": "Voador",
    "aptidao": "Beleza",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O alvo perde uma Fase de Defesa e de Defesa Especial."
  },
  "Assustar": {
    "tipo": "Fantasma",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo está Atordoado."
  },
  "Ataque de Areia": {
    "tipo": "Terra",
    "aptidao": "Ternura",
    "descritores": "Coluna 2",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 2",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista (1d4)",
    "efeito": "Os alvos têm suas Dificuldades de Acurácia aumentadas em 1 até o fim do encontro."
  },
  "Ataque de Asa": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Ataque de Chamas": {
    "tipo": "Fogo",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Eleva uma Fase da Velocidade do usuário."
  },
  "Ataque de Lama": {
    "tipo": "Terra",
    "aptidao": "Ternura",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "1d6+3 Especial",
    "alcance": "À Distância 2",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Os alvos têm suas Dificuldades de Acurácia aumentadas em 1 até o fim do encontro."
  },
  "Ataque de Raios": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "5",
    "danoBasal": "5d12+22 Físico",
    "alcance": "À Distância 20",
    "frequencia": "Diária",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Paralisado."
  },
  "Ataque do Céu": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Investida, Preparo",
    "acuracia": "4",
    "danoBasal": "6d12+22 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento em que declarar o uso de Ataque do Céu, o usuário ascende 10 metros no ar e seu turno acaba. Na próxima rodada, ele descerá para causar os efeitos do Golpe. Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Atordoado."
  },
  "Ataque Furtivo": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "1d10+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Ataque Rápido": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se um inimigo declarar um Golpe, é possível usar o Ataque Rápido no turno dele antes do Golpe dele."
  },
  "Ataque Triplo": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": {
      "descricao": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo recebe uma Condição, definida por uma rolagem de 1d4:",
      "tabela": [
        {
          "resultado": "1",
          "condicao": "Paralisia"
        },
        {
          "resultado": "2",
          "condicao": "Queimadura"
        },
        {
          "resultado": "3",
          "condicao": "Congelamento"
        },
        {
          "resultado": "4",
          "condicao": "Role Novamente"
        }
      ]
    }
  },
  "Atração": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Se o alvo for do sexo oposto ao usuário, ele está Apaixonado."
  },
  "Aumento de Massa": {
    "tipo": "Lutador",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque e de Defesa do usuário."
  },
  "Aurora": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "O alvo com a Cobertura da Aurora reduz todos os danos sofridos por Golpes pela metade desde que esteja em clima de Granizo. É possível usar a Aurora em si mesmo, mesmo sendo um Golpe À Distância."
  },
  "Autodestruição": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 4",
    "acuracia": "2",
    "danoBasal": "10d10+46 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Os Pontos de Vida do usuário são reduzidos para -50% de seus Pontos de Vida máximos. A Lealdade do usuário é reduzida em 1."
  },
  "Automação": {
    "tipo": "Metal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases de Velocidade do usuário. Até o fim do encontro, a Categoria de Peso do usuário é reduzida: se era Leve ele se torna Muito Leve; se era Médio ele se torna Leve; se era Pesado ele se torna Médio; se era Muito Pesado ele se torna Pesado; Se era Extremamente Pesado ele se torna Muito Pesado."
  },
  "Auxílio": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Sorteio",
    "efeito": "Aleatoriamente determine um pokêmon aliado e depois aleatoriamente determine um Golpe que este aliado conhece. O usuário usa este Golpe imediatamente."
  },
  "Avalanche": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 2",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "Contra alvos que causaram dano ao usuário nos últimos turnos deles, o Dano Basal da Avalanche aumenta em +2d10."
  },
  "Avessas": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Todas as Fases do alvo são invertidas: aquelas que antes eram Fases negativas agora são positivas e vice-versa."
  },
  "Barragem": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco ovos podem ser lançados, mas após o primeiro erro, esta Saralvada acaba."
  },
  "Barreira": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Eleva duas Fases de Defesa do usuário."
  },
  "Bastão Ósseo": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "5",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo está Atordoado."
  },
  "Batida Dupla": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "-"
  },
  "Bebida Láctea": {
    "tipo": "Normal",
    "aptidao": "ternura",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O alvo recupera metade de seus PV máximos."
  },
  "Beijo": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo está Adormecido."
  },
  "Beijo Doce": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo está Confuso."
  },
  "Beijo Drenante": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+8 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "O usuário recupera uma quantidade de PV igual a três quartos do dano causado ao alvo."
  },
  "Bicada": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Bico Broca": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Bico Explosivo": {
    "tipo": "Voador",
    "aptidao": "Vigor",
    "descritores": "Preparo",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Se o usuário receber um ataque Corpo a Corpo desde o momento que declarou o uso do Bico Explosivo até a execução, aquele que fez o ataque está com Queimadura."
  },
  "Bis": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "À Distância 10",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Proveito",
    "efeito": "O alvo deve usar o mesmo Golpe que usou mais recentemente pelas próximas 1d2+1 rodadas. Se a Frequência do Golpe não permite que ele seja usado de novo, o alvo não poderá usar Golpes enquanto isso."
  },
  "Bloquear Cura": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "-",
    "danoBasal": "À Distância 10",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, o alvo não pode recuperar PV."
  },
  "Bloqueio": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Prisão",
    "acuracia": "-",
    "danoBasal": "Corpo a Corpo",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Ambos os usuário e alvo estão Presos."
  },
  "Bocejo": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 4",
    "acuracia": "-",
    "danoBasal": "Si",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos adormecem no fim de seus próximos Turnos."
  },
  "Bolha": {
    "tipo": "Água",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Especial",
    "alcance": "À Distância 8",
    "frequencia": "À Vontade",
    "tagConcurso": "Pausa",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, o alvo perde uma Fase de Velocidade."
  },
  "Bomba Ácida": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "Os alvos perdem duas Fases de Defesa."
  },
  "Bomba de Lama": {
    "tipo": "Terra",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 1",
    "acuracia": "4",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "têm suas Dificuldades de Acurácia aumentadas em 1 até o fim do encontro."
  },
  "Bomba de Lodo": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão Envenenados."
  },
  "Bomba de Sementes": {
    "tipo": "Planta",
    "aptidao": "Vigor",
    "descritores": "Explosão 2",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Bomba Magnética": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Bombardeio de Chamas": {
    "tipo": "Fogo",
    "aptidao": "Estilo",
    "descritores": "Empurrão 5(1d6), Impacto, Rebote (1/3)",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo sofre Queimadura."
  },
  "Braço de Agulhas": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Braço Martelo": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Pausa",
    "efeito": "O usuário perde uma Fase de Velocidade."
  },
  "Brasa": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 8",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo está Queimado."
  },
  "Bravata": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "À Distância 8",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Eleva duas Fases de Ataque do alvo mas o deixa Confuso"
  },
  "Brilho": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Eleva três Fases de Ataque Especial."
  },
  "Brincadeira": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo perde uma Fase de Ataque."
  },
  "Bruma de Lava": {
    "tipo": "Fogo",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não Abertura",
    "tagConcurso": "Se o resultado do Teste de Acurácia for 16 ou mais, o alvo está com Queimadura.",
    "efeito": ""
  },
  "Brutalidade": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "Explosão 2",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "-"
  },
  "Bumerangue Ósseo": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "2d12+8 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "-"
  },
  "Cabeça de Ferro": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Cabeça do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Cabeçada": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Cabeçada Zen": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Impacto",
    "acuracia": "4",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Cadeado": {
    "tipo": "Fada",
    "aptidao": "Perspicácia",
    "descritores": "Prisão",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Ambos o usuário e o alvo estão Presos."
  },
  "Campo Elétrico": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Por cinco rodadas, a área está Eletrificada, o que significa que ninguém que toca o chão pode Adormecer (nem volun-tariamente) e que todos os Golpes causadores de dano Elétrico causam dano adicional igual ao triplo do Bônus Elemental. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não Golpes Elétricos e se acumula com o próprio Bônus Elemental se houver."
  },
  "Campo Enevoado": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Sorteio",
    "efeito": "Por cinco rodadas, a área está Enevoada, o que significa que ninguém que toca o chão pode ser Adormecido, Congelado,Envenenado, Paralisado ou Queimado."
  },
  "Campo Gramado": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "Por cinco rodadas, a área é considerada Gramada, o que significa que danos de Planta recebem um bônus igual ao dobro do Bônus Elemental do pokémon, independente se aquele pokémon normalmente recebe Bônus Elemental ou não para o Tipo Planta. Além disso, o Gramado permite que pokémons do Tipo Planta recuperem 1/16 de seus Pontos de Vida máximos a cada rodada em seu turno."
  },
  "Campo Magnético": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 10",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Perspectiva",
    "efeito": "Os aliados na área que possuírem as Habilidades Mais ou Menos elevam uma Fase de Defesa e de Defesa Especial."
  },
  "Campo Psíquico": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "Por cinco rodadas, a área é considerada Psíquica, o que significa que ninguém que toca o chão pode ser interrompido (nem voluntariamente) e que todos os Golpes causadores de dano Psíquico causam dano adicional igual ao dobro do Bônus Elemental. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não Golpes Psíquicos e se acumula com o próprio Bônus Elemental se houver."
  },
  "Camuflagem": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": {
      "descricao": "O usuário muda seu Tipo de acordo com o ambiente e com o Clima:",
      "tabela": [
        {
          "ambiente": "Água Doce",
          "tipo": "Água"
        },
        {
          "ambiente": "Ártico / Taiga / Tundra",
          "tipo": "Gelo"
        },
        {
          "ambiente": "Caverna",
          "tipo": "Pedra"
        },
        {
          "ambiente": "Céu",
          "tipo": "Voador"
        },
        {
          "ambiente": "Cidade",
          "tipo": "Normal"
        },
        {
          "ambiente": "Deserto",
          "tipo": "Terra"
        },
        {
          "ambiente": "Floresta",
          "tipo": "Planta"
        },
        {
          "ambiente": "Montanha",
          "tipo": "Pedra"
        },
        {
          "ambiente": "Oceano",
          "tipo": "Água"
        },
        {
          "ambiente": "Pradaria",
          "tipo": "Planta"
        },
        {
          "ambiente": "Praia",
          "tipo": "Terra"
        },
        {
          "ambiente": "Selva",
          "tipo": "Inseto"
        },
        {
          "ambiente": "Vulcão",
          "tipo": "Fogo"
        },
        {
          "clima": "Ensolarado",
          "tipo": "Fogo"
        },
        {
          "clima": "Chuva",
          "tipo": "Água"
        },
        {
          "clima": "Granizo",
          "tipo": "Gelo"
        },
        {
          "clima": "Tempestade de Areia",
          "tipo": "Terra"
        }
      ]
    }
  },
  "": {
    "tipo": "",
    "aptidao": "",
    "descritores": "",
    "acuracia": "",
    "danoBasal": "",
    "alcance": "",
    "frequencia": "",
    "tagConcurso": "",
    "efeito": "Se houver dificuldade em determinar qual o Tipo associado uma situação, o Narrador tem a palavra final sobre ele, e deve ser consultado para prever qual Tipo o pokémon se tornará se usar a Camuflagem. Outros Tipos também podem ser associados a este Golpe: por exemplo, um vulcão provavelmente será associado ao Tipo Fogo."
  },
  "Canção": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 4, Som 11",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos são Adormecidos."
  },
  "Canhão de Água": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Exaustão, Explosão 3",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o Canhão de Água errar, ele ainda causa o Ataque Especial do usuário a todos os alvos nos quais errar."
  },
  "Canhão de Espinhos": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco espinhos podem ser atirados, mas após o primeiro erro, esta Saraivada acaba. Quando adicionar o Ataque a este Golpe, adicione apenas metade do Atributo Ataque."
  },
  "Canhão de Luz": {
    "tipo": "Metal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Canhão Elétrico": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Explosão 2",
    "acuracia": "12",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Paralisa os alvos."
  },
  "Canhão Feérico": {
    "tipo": "Fada",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 4",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde duas Fases de Ataque Especial."
  },
  "Cântico da Sorte": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 4",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Os aliados na área (incluindo o usuário) são imunes a Críticos (sofrendo dano normal, não Crítico) por 1d4+1 rodadas."
  },
  "Careta": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Pausa",
    "efeito": "O alvo perde duas Fases de Velocidade."
  },
  "Carga": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Defesa Especial do usuário. Além disso,se ele causar dano Elétrico na próxima rodada, duplique a rolagem do Dano Basal."
  },
  "Carga Selvagem": {
    "tipo": "Elétrico",
    "aptidao": "Vigor",
    "descritores": "Impacto, Rebote (1/4)",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Carvoeira": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se o usuário for acertado por um Golpe causador de dano, ele pode usar a Carvoeira para anunciar que se esquivou do Golpe (o Golpe que o acertaria simplesmente erra). Se o Golpe era Corpo a Corpo, o atacante fica Envenenado."
  },
  "Cascata": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "Empurrão 2 (0)",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o alvo estiver embaixo d’água, a Cascata aumenta seu Dano Basal em +1d12. Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Atordoado."
  },
  "Castigo": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d10+15 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "+1d10 ao Dano Basal para cada Fase que o usuário possui acima da neutra (até o máximo de +6d10 por isso)."
  },
  "Cativar": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Se o alvo for do sexo oposto ao usuário, ele perde duas Fases de Ataque Especial."
  },
  "Cauda de Água": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Investida",
    "acuracia": "4",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Cauda de Ferro": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "6",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada",
    "tagConcurso": "Não Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Cauda de Vento": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "O usuário e todos os seus aliados elevam uma Fase de Velocidade. Isso dura por 1d6+1 rodadas, quando eles perdem a Fase de Velocidade recebida. Se a Cauda de Vento for usada de novo durante este período, não se recebe outra Fase de Velocidade, mas o período de tempo é renovado."
  },
  "Cauda do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Vigor",
    "descritores": "Empurrão 40 (0)",
    "acuracia": "3",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Desfecho",
    "efeito": "Se for uma batalha oficial entre humanos, as regras dizem que um pokémon que foi para tão longe deve ser retornado à pokébola e substituído por outro."
  },
  "Cauda Venenosa": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Cauda Venenosa causa um Crítico. Se o resultado do Teste de Acurácia for 19 ou mas, o alvo está Envenenado."
  },
  "Caudada": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco Caudadas podem ser feitas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Cavar": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Impacto, Preparo",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento que declara o uso deste Golpe, o usuário cava para se mover através do subterrâneo e seu turno acaba. Isso conta como o Preparo. Na próxima rodada, o alvo pode se deslocar usando seu maior Deslocamento entre Terrestre ou de Escavação em direção ao alvo e aí aplicar o Dano Basal por Cavar. Enquanto estiver no subsolo, o usuário não pode ser alvo de Golpes por inimigos na superfície do chão."
  },
  "Celebração": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "-"
  },
  "Chama Azul": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "5",
    "danoBasal": "5d12+22 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Queimado."
  },
  "Chamego": {
    "tipo": "Elétrico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Paralisa o alvo."
  },
  "Charme": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "O alvo perde duas Fases de Ataque."
  },
  "Chicote": {
    "tipo": "Planta",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "5",
    "danoBasal": "5d12+18 Físico",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Chute Duplo": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "-"
  },
  "Chute Flamejante": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Empurrão 2 (0)",
    "acuracia": "4",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, o Chute Flamejante é um Crítico."
  },
  "Chute Giratório": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Impacto",
    "acuracia": "4",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, Atordoa o alvo."
  },
  "Chute Triplo": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Saraivada 3",
    "acuracia": "3",
    "danoBasal": "1d6+1 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modéstia (3d4)",
    "efeito": "Se todos os três chutes acertarem o mesmo alvo, o terceiro chute tem seu Dano Basal aumentado para 3d12+8 Físico."
  },
  "Chute Tropical": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo",
    "efeito": "O alvo perde uma Fase de Ataque."
  },
  "Choque do Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Segurança",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança (2d4)",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, Paralisa o alvo."
  },
  "Ciclone": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo está Atordoado. Ciclone pode acertar alvos que estão no ar em virtude de Golpes como Queda Livre ou Voar ignorando as distâncias e recebendo +1d12+10 ao Dano Basal."
  },
  "Cinese": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Barreira",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Posicione 5 metros de Barreiras que durarão por cinco rodadas posicionadas a até 3 metros do usuário. Se algum Golpe tenta ter um alvo através da Barreira, a Dificuldade de Acurácia do Golpe é aumentada em 3. Quebra Telha não pode destruir a Cinese."
  },
  "Clamor": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 5, Som",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "O usuário do Clamor repetirá um Golpe idêntico ao Clamor por 1d4+1 rodadas depois dessa, podendo se mover normalmente entre os usos. Qualquer criatura Adormecida dentro da área do Clamor imediatamente acorda"
  },
  "Clampeamento": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "O usuário e o alvo estão Presos por 1d4+1 rodadas. Uma vez por rodada, no início de cada turno do alvo enquanto Presos, ele sofre 1d12 de dano. A menos que o usuário seja Enorme ou Gigantesco, ele não pode clampear mais de um alvo simultaneamente."
  },
  "Clarão": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 4",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento (1d4)",
    "efeito": "As Dificuldades de Acurácia dos alvos aumentam em 1."
  },
  "Clemência": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "Se este Golpe reduziria o alvo a zero PV ou menos, por Clemência ele deixa o alvo com 1 PV. Isso não tem efeito se o alvo já estava abaixo de zero PV."
  },
  "Cobiça": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "Se o usuário não possuir nenhum item Mantido, ele obtém para si o item Mantido do alvo."
  },
  "Cócegas": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "O alvo perde uma Fase de Ataque e de Defesa."
  },
  "Coice": {
    "tipo": "Terra",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Cólera": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o usuário tiver errado seu ataque na rodada anterior ou seu ataque tiver sido interrompido ou interceptado de modo a ser anulado na rodada anterior, o Dano Basal da Cólera se torna 6d12+22 Físico."
  },
  "Colisão Quente": {
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
        {
          "diferenca": "Iguais",
          "danoBasal": "1d10 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 1 Categoria",
          "danoBasal": "1d10+10 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 2 Categorias",
          "danoBasal": "2d12+12 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 3 Categorias",
          "danoBasal": "3d10+14 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 4+ Categorias",
          "danoBasal": "5d10+16 Físico"
        }
      ]
    }
  },
  "Combate Aéreo": {
    "tipo": "Lutador",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "Quando aplicar vulnerabilidades, imunidades e resistências, Combate Aéreo será considerado ao mesmo tempo dos Tipos Lutador e Voador."
  },
  "Compartilhar Defesas": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Escolha um Atributo entre Defesa ou Defesa Especial. O alvo revela o valor do Atributo escolhido. Ambos o usuário e o alvo têm o Atributo escolhido substituído pela média dos Atributos do usuário e do alvo até o fim do encontro."
  },
  "Compartilhar Forças": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Escolha um Atributo entre Ataque ou Ataque Especial. O alvo revela o valor do Atributo escolhido. Ambos o usuário e o alvo têm o Atributo escolhido substituído pela média dos Atributos do usuário e do alvo até o fim do encontro."
  },
  "Concentração": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "O próximo Golpe que o usuário fizer, desde que acerte o alvo, será um Crítico."
  },
  "Concha Navalha": {
    "tipo": "Água",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "3",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "SegurançaSe o resultado do Teste de Acurácia for 11 ou mais, o alvo perde uma Fase de Defesa.",
    "efeito": ""
  },
  "Confidência": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Som",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "O alvo perde uma Fase de Ataque Especial."
  },
  "Confisco": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Se o alvo possuir um item Mantido, este não poderá mais ser usado até o fim do encontro."
  },
  "Confusão": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Confuso."
  },
  "Conspiração": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases de Ataque Especial do usuário."
  },
  "Constrição": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O usuário e o alvo estão Presos por 1d4+1 rodadas. Uma vez por rodada, no início de cada turno do alvo enquanto Presos, ele sofre 1d12 de dano. A menos que o usuário seja Enorme ou Gigantesco, ele não pode constringir mais de um alvo simultaneamente."
  },
  "Contra-Ataque": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "Se o usuário for acertado por um Golpe causador de dano Físico, ele pode fazer um Contra-Ataque. Desde que sobreviva ao Golpe, o usuário causa no oponente que o acertou o dobro do dano sofrido por ele."
  },
  "Conversão": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário se torna do Tipo de um de seus Golpes à sua escolha até o fim do encontro. Conversão substitui todos os Tipos do alvo pelo Tipo escolhido."
  },
  "Conversão 2": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário se torna de um dos Tipos que resiste ao último Golpe causador de dano sofrido por ele. É possível escolher qual Tipo se houver mais de um Tipo que resiste àquele dano. Conversão 2 substitui todos os Tipos do alvo pelo Tipo escolhido."
  },
  "Corpo a Corpo": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde uma Fase de Defesa e de Defesa Especial."
  },
  "Corte": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Corte Aéreo": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Corte em X": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Corte Falso": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "Se este Golpe reduziria o alvo a zero PV ou menos, o Corte Falso deixa o alvo com 1 PV. Isso não tem efeito se o alvo já estava abaixo de zero PV."
  },
  "Corte Furioso": {
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
        {
          "rodada": "Segunda",
          "danoBasal": "1d12+6 Físico"
        },
        {
          "rodada": "Terceira",
          "danoBasal": "2d12+12 Físico"
        },
        {
          "rodada": "Quarta",
          "danoBasal": "3d12+18 Físico"
        },
        {
          "rodada": "Além da Quarta",
          "danoBasal": "4d12+24 Físico"
        }
      ]
    }
  },
  "Corte Psíquico": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o Corte Psíquico é um Crítico."
  },
  "Cortina de Fumaça": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Barreira",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "Posicione 5 metros de Barreiras que durarão por cinco rodadas posicionadas a até 3 metros do usuário. Se algum Golpe tenta ter um alvo através da Barreira, a Dificuldade de Acurácia do Golpe é aumentada em 3. Quebra Telha não pode destruir a Cortina de Fumaça."
  },
  "Crescimento": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque e de Ataque Especial do usuário. Se o Clima estiver Ensolarado, eleva duas Fases de Ataque e de Ataque Especial do usuário, em vez de apenas uma."
  },
  "Crítico": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Este Golpe sempre é um Crítico."
  },
  "Cruzado": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Empurrão 1 (1d6), Impacto",
    "acuracia": "4",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, o Cruzado é um Crítico. Se for um Crítico, Cruzado empurrará 5 metros, em vez de apenas 1."
  },
  "Cruzado Envenenado": {
    "tipo": "Venenoso",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo está Envenenado e o Cruzado Envenenado é um Crítico."
  },
  "Cura Floral": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O alvo recupera uma quantidade de PV igual à metade de seus PV máximos. Se a área for de Gramado, o alvo recupera todos os seus Pontos de Vida."
  },
  "Curinga": {
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
        {
          "usos": "1 ou 2",
          "danoBasal": "1d10+4 Especial"
        },
        {
          "usos": "3",
          "danoBasal": "1d12+6 Especial"
        },
        {
          "usos": "4",
          "danoBasal": "2d10+8 Especial"
        },
        {
          "usos": "5",
          "danoBasal": "7d10+28 Especial"
        }
      ]
    }
  },
  "Dádiva da Natureza": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": {
      "descricao": "A Dádiva da Natureza tem Dano Basal e Tipo de dano de acordo com a fruta que é o item Mantido do usuário, que terá sua energia usada sendo destruída sem ser consumida:",
      "tabela": [
        {
          "fruto": "Aguav",
          "frutaReal": "Goiaba",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Dragão"
        },
        {
          "fruto": "Apicot",
          "frutaReal": "Damasco",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Terra"
        },
        {
          "fruto": "Aspear",
          "frutaReal": "Pera",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Gelo"
        },
        {
          "fruto": "Babiri",
          "frutaReal": "Biribá",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Metal"
        },
        {
          "fruto": "Belue",
          "frutaReal": "Mirtilo",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Elétrico"
        },
        {
          "fruto": "Bluk",
          "frutaReal": "Amora",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fogo"
        },
        {
          "fruto": "Charti",
          "frutaReal": "Alcachofra",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Pedra"
        },
        {
          "fruto": "Cheri",
          "frutaReal": "Cereja",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fogo"
        },
        {
          "fruto": "Chesto",
          "frutaReal": "Castanha",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Água"
        },
        {
          "fruto": "Chilan",
          "frutaReal": "Sininho",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Normal"
        },
        {
          "fruto": "Chople",
          "frutaReal": "Chipotle",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Lutador"
        },
        {
          "fruto": "Coba",
          "frutaReal": "Babaco",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Voador"
        },
        {
          "fruto": "Cornn",
          "frutaReal": "Cardo",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Inseto"
        },
        {
          "fruto": "Coulbur",
          "frutaReal": "Milho",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Trevas"
        },
        {
          "fruto": "Cutsap",
          "frutaReal": "Pinha",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Fantasma"
        },
        {
          "fruto": "Durin",
          "frutaReal": "Durião",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Água"
        },
        {
          "fruto": "Enigma",
          "frutaReal": "Enigma",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Inseto"
        },
        {
          "fruto": "Figy",
          "frutaReal": "Figo",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Inseto"
        },
        {
          "fruto": "Ganlon",
          "frutaReal": "Longana",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Gelo"
        },
        {
          "fruto": "Grepa",
          "frutaReal": "Uva",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Voador"
        },
        {
          "fruto": "Haban",
          "frutaReal": "Araçá",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Dragão"
        },
        {
          "fruto": "Hondew",
          "frutaReal": "Cantalupo",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Terra"
        },
        {
          "fruto": "Iapapa",
          "frutaReal": "Mamão",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Trevas"
        },
        {
          "fruto": "Jaboca",
          "frutaReal": "Jabuticaba",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Dragão"
        },
        {
          "fruto": "Kasib",
          "frutaReal": "Mandioca",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fantasma"
        },
        {
          "fruto": "Kebia",
          "frutaReal": "Akebia",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Venenoso"
        },
        {
          "fruto": "Kee",
          "frutaReal": "Guaraná",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Fada"
        },
        {
          "fruto": "Kelpsy",
          "frutaReal": "Alga",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Lutador"
        },
        {
          "fruto": "Lansat",
          "frutaReal": "Langsat",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Voador"
        },
        {
          "fruto": "Leppa",
          "frutaReal": "Maçã",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Lutador"
        },
        {
          "fruto": "Liechi",
          "frutaReal": "Lichia",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Planta"
        },
        {
          "fruto": "Lum",
          "frutaReal": "Ameixa",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Voador"
        },
        {
          "fruto": "Mago",
          "frutaReal": "Manga",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fantasma"
        },
        {
          "fruto": "Magost",
          "frutaReal": "Mangostão",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Pedra"
        },
        {
          "fruto": "Maranga",
          "frutaReal": "Jaca",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Normal"
        },
        {
          "fruto": "Micle",
          "frutaReal": "Fruta Milagrosa",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Pedra"
        },
        {
          "fruto": "Nanab",
          "frutaReal": "Banana",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Água"
        },
        {
          "fruto": "Nomel",
          "frutaReal": "Limão",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Dragão"
        },
        {
          "fruto": "Occa",
          "frutaReal": "Cacau",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fogo"
        },
        {
          "fruto": "Oran",
          "frutaReal": "Laranja",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Venenoso"
        },
        {
          "fruto": "Pamtre",
          "frutaReal": "Açaí",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Metal"
        },
        {
          "fruto": "Passho",
          "frutaReal": "Maracujá",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Água"
        },
        {
          "fruto": "Payapa",
          "frutaReal": "Papaia",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Psíquico"
        },
        {
          "fruto": "Pecha",
          "frutaReal": "Pêssego",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Elétrico"
        },
        {
          "fruto": "Persim",
          "frutaReal": "Caqui",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Terra"
        },
        {
          "fruto": "Petaya",
          "frutaReal": "Pitaia",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Venenoso"
        },
        {
          "fruto": "Pinap",
          "frutaReal": "Abacaxi",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Planta"
        },
        {
          "fruto": "Pomeg",
          "frutaReal": "Romã",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Gelo"
        },
        {
          "fruto": "Qualot",
          "frutaReal": "Nêspera",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Venenoso"
        },
        {
          "fruto": "Rabuta",
          "frutaReal": "Rambutão",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Fantasma"
        },
        {
          "fruto": "Rawst",
          "frutaReal": "Morango",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Planta"
        },
        {
          "fruto": "Razz",
          "frutaReal": "Framboesa",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Metal"
        },
        {
          "fruto": "Rindo",
          "frutaReal": "Tamarindo",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Planta"
        },
        {
          "fruto": "Roseli",
          "frutaReal": "Rosélia",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Fada"
        },
        {
          "fruto": "Rowap",
          "frutaReal": "Jambo",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Trevas"
        },
        {
          "fruto": "Salac",
          "frutaReal": "Salak",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Lutador"
        },
        {
          "fruto": "Shuca",
          "frutaReal": "Caju",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Terra"
        },
        {
          "fruto": "Sitrus",
          "frutaReal": "Toranja",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Psíquico"
        },
        {
          "fruto": "Spelon",
          "frutaReal": "Melão",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Trevas"
        },
        {
          "fruto": "Starf",
          "frutaReal": "Carambola",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Psíquico"
        },
        {
          "fruto": "Tamato",
          "frutaReal": "Tomate",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Psíquico"
        },
        {
          "fruto": "Tanga",
          "frutaReal": "Pitanga",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Inseto"
        },
        {
          "fruto": "Wacan",
          "frutaReal": "Guajilote",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Elétrico"
        },
        {
          "fruto": "Watmel",
          "frutaReal": "Melancia",
          "danoBasal": "2d12+15 Especial",
          "tipo": "Fogo"
        },
        {
          "fruto": "Wepear",
          "frutaReal": "Abacate",
          "danoBasal": "1d12+15 Especial",
          "tipo": "Elétrico"
        },
        {
          "fruto": "Wiki",
          "frutaReal": "Kiwi",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Pedra"
        },
        {
          "fruto": "Yache",
          "frutaReal": "Chirimoia",
          "danoBasal": "1d10+10 Especial",
          "tipo": "Gelo"
        }
      ]
    }
  },
  "Dança Ardente": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Dança, Moral",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, eleva uma Fase de Ataque Especial do usuário."
  },
  "Dança Caótica": {
    "tipo": "normal",
    "aptidao": "Ternura",
    "descritores": "Dança, Explosão 7",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Sorteio",
    "efeito": "Os alvos estão Confusos."
  },
  "Dança da Chuva": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Clima, Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, a área é considerada Chuvosa, o que significa que danos de Água são multiplicados por 1,5 e danos de Fogo são reduzidos à metade."
  },
  "Dança das Asas": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque Especial, de Defesa Especial e de Velocidade."
  },
  "Dança das Espadas": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva duas Fases de Ataque do usuário."
  },
  "Dança das Penas": {
    "tipo": "Voador",
    "aptidao": "Beleza",
    "descritores": "Dança, Explosão 1",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista (1d4)",
    "efeito": "Os alvos perdem duas Fases de Ataque."
  },
  "Dança das Pétalas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Dança, Explosão 3",
    "acuracia": "3",
    "danoBasal": "5d12+18 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "O usuário da Dança das Pétalas repetirá um Golpe idêntico a Dança das Pétalas por 1d2 rodadas depois dessa. Se não há nenhuma criatura dentro do alcance da Explosão, o usuário se deslocará em direção à criatura mais próxima. Se há mais de uma criatura equidistante, é possível escolher a criatura que será. Após estas duas ou três rodadas de uso seguido da Dança das Pétalas, o usuário cessa a Dança das Pétalas e está Confuso. Os usos obrigatórios da Dança das Pétalas na(s) rodada(s) subsequente(s) à inicial ainda consomem normalmente a Ação de Golpe (ou a Ação Padrão, se for humano)."
  },
  "Dança do Despertar": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Dança, Explosão 5",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O Tipo da Dança do Despertar muda para igualar o Tipo do pokémon. Se o pokémon possui dois Tipos, o primeiro Tipo listado para ele será o Tipo (e consequentemente o dano) da Dança do Despertar."
  },
  "Dança dos Dragões": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque e de Velocidade do usuário."
  },
  "Dança Lunar": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Dança, Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "Se os PV do usuário forem reduzidos a zero ou menos, é possível usar a Dança Lunar como uma Interrupção. O alvo é tratado como se tivesse sido curado em um Centro Pokémon. A Dança Lunar pode ter como alvo um pokémon em uma pokébola, desde que ele imediatamente saia da pokébola. A Dança Lunar não restaura o uso diário dos seguintes Golpes: Dança Lunar e Desejo de Cura."
  },
  "Defesa Aberta": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Se um inimigo usar um Golpe que atinge múltiplos alvos e o usuário da Defesa Aberta for um destes alvos, é possível usar a Defesa Aberta como uma Interceptação para que apenas o usuário da Defesa Aberta seja atingido."
  },
  "Defesa de Ferro": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Eleva duas Fases de Defesa do usuário."
  },
  "Defesa Fechada": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Eleva uma Fase de Defesa do usuário. Se o usuário não for trocado e usar Anel de Gelo ou Rolagem mais tarde no mesmo encontro, o Dano Basal do Anel de Gelo ou da Rolagem aumenta em +1d12+4 em todos os Danos Basais."
  },
  "Demolição": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Exaustão, Investida",
    "acuracia": "4",
    "danoBasal": "7d10+28 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se a Demolição errar, ela ainda causa o Ataque do usuário a todos os alvos nos quais errar."
  },
  "Depois de Você": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Pausa",
    "efeito": "O alvo é o primeiro a agir na próxima rodada, independente da ordem normal de iniciativa. O alvo não poderá sofrer Interrupções no turno dele na próxima rodada."
  },
  "Derrubada": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto, Rebote (1/4)",
    "acuracia": "5",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Desabilitar": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Escolha um Golpe. Pelo resto do encontro, o alvo não pode usar aquele Golpe, que é considerado Desabilitado. O alvo só pode possuir um Golpe Desabilitado, de modo que se um novo Golpe for Desabilitado, o anterior será reabilitado."
  },
  "Desanuviar": {
    "tipo": "Voador",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, a área é considerada de clima amenos, removendo quaisquer condições climáticas que conferem benefícios ou penalidades. Junto a elas, todas as Ameaças, as Barreiras e até mesmo as Coberturas são destruídas."
  },
  "Descamação": {
    "tipo": "Dragão",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "5d12+18 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "A Descamação faz o usuário perder uma Fase de Defesa."
  },
  "Descansar": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera todos os seus Pontos de Vida, é curado de todas as Condições e então Adormece. Um personagem que ganhou a Condição Sono em virtude do uso do Golpe Descansar sempre dorme por duas rodadas, e não faz nenhum teste para acordar."
  },
  "Descarga": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão Paralisados."
  },
  "Desejo": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "No fim do próximo turno do usuário, o alvo recupera metade de seus PV máximos. Se o usuário tiver como alvo a si mesmo e for convocado de volta à pokébola para ser substituído por outro pokémon, o substituto recupera metade de seus Pontos de Vida máximos."
  },
  "Desejo de Cura": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "Se os PV do usuário forem reduzidos a zero ou menos, é possível usar o Desejo de Cura como uma Interrupção. O alvo é tratado como se tivesse sido curado em um Centro Pokémon. O Desejo de Cura pode ter como alvo um pokémon em uma pokébola, desde que ele imediatamente saia da pokébola. O Desejo de Cura não restaura o uso diário dos seguintes Golpes: Dança Lunar e Desejo de Cura."
  },
  "Desejo de Destruição": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Coluna 1, Preparo",
    "acuracia": "2",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Surpresa",
    "efeito": "O Desejo de Destruição não consome a Ação de Golpe na rodada em que age, apenas na rodada inicial de Preparo de modo que é possível agir normalmente na rodada que o Desejo de Destruição causa seu dano. O dano causado pelo Desejo de Destruição é considerado sem Tipo, de modo que causa dano neutro em todos os alvos."
  },
  "Deslizamento de Rochas": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Coluna 4",
    "acuracia": "4",
    "danoBasal": "3d10+22 Físico",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o Deslizamento de Rochas Atordoa os alvos."
  },
  "Despertador": {
    "tipo": "Lutador",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o alvo estiver Adormecido, este Golpe o acorda e tem seu Dano Basal aumentado para 5d10 Físico."
  },
  "Destruição": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Se o alvo é imune a Golpes de Terra, ele perde esta imunidade por 1d4+1 rodadas."
  },
  "Detecção": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o usuário for acertado por um Golpe, ele pode usar a Detecção para anunciar que se esquivou do Golpe (o Golpe que o acertaria simplesmente erra)."
  },
  "Detonação": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "5",
    "danoBasal": "1d10+4 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco pedras são lançadas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Devorar Sonhos": {
    "tipo": "Psíquico",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Proveito",
    "efeito": "O alvo de Devorar Sonhos deve estar Dormindo. O usuário recupera uma quantidade de Pontos de Vida igual à metade do dano causado ao alvo."
  },
  "Dia de Sol": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, a área é considerada com clima ensolarado. Isso significa que os danos de Fogo aumentam em 50% e os danos de Água são reduzidos à metade."
  },
  "Dia do Pagamento": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Diária",
    "tagConcurso": "Reviravolta",
    "efeito": "Este Golpe cria moedas com valor total igual a 1d8 multiplicado pelo Nível do usuário. Se for uma batalha entre humanos, o vitorioso tem direito legal sobre estas moedas."
  },
  "Dilúvio Iônico": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "Interrupção",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Constrangimento",
    "efeito": "Até o próximo turno do usuário, todos os danos Normais a até 10 metros do usuário se tornam danos Elétricos."
  },
  "Doçura": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "À Vontade",
    "tagConcurso": "Abertura",
    "efeito": "Se um alvo usar um Golpe, é possível usar a Doçura durante o turno dele como uma Ação Livre. Sua Doçura faz o alvo perder uma Fase de Ataque."
  },
  "Eco": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Som",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Modéstia",
    "efeito": "Se o usuário usar o Eco durante rodadas consecutivas, o Dano Basal aumenta em +1d20 para cada rodada anterior que o usuário usou o Eco, até o máximo de +5d20. Não é preciso ter o mesmo alvo para receber este bônus."
  },
  "Elaborar": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Dança",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque e de Ataque Especial do usuário."
  },
  "Elementalismo": {
    "tipo": "Fada",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 6",
    "acuracia": "2",
    "danoBasal": "3d8+12 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "O Elementalismo só afeta alvos que possuam pelo menos um dos Tipos igual a pelo menos um dos Tipos do usuário."
  },
  "Eletrificar": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "O próximo Golpe usado pelo alvo será do Tipo Elétrico."
  },
  "Elevação da Mente": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "As Fases do usuário são neutralizadas e então o usuário copia para si todas as Fases em vigência sobre o alvo."
  },
  "Emboscada": {
    "tipo": "Noturno",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Emboscada é um Crítico."
  },
  "Empoleirar": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual à metade de seus PV máximos, contudo ele perde quaisquer resistências ou imunidades a dano de Terra até o fim do seu próximo turno."
  },
  "Encarar": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "O alvo perde uma Fase de Defesa."
  },
  "Endurecer": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Eleva uma Fase de Defesa do usuário."
  },
  "Engolir": {
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
        {
          "fases": "Uma Fase de cada Atributo",
          "pvRecuperados": "25% dos PV máximos"
        },
        {
          "fases": "Duas Fases de cada Atributo",
          "pvRecuperados": "Metade dos PV máximos"
        },
        {
          "fases": "Três Fases de cada Atributo",
          "pvRecuperados": "Todos os PV"
        }
      ]
    }
  },
  "Engrenagens": {
    "tipo": "Metal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Se o alvo possui a Habilidade Mais ou a Habilidade Menos,eleve uma Fase de Ataque e de Ataque Especial dele."
  },
  "Enlaçar": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+1 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Continuação",
    "efeito": "O alvo perde uma Fase de Velocidade."
  },
  "Enraizar": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação",
    "efeito": "Enraizar concede uma Cobertura com as seguintes propriedades: o usuário não pode ser forçado a ser trocado por outro pokémon nem a fugir, mas ele ainda pode ser trocado e fugir se quiser. Além disso, no início de cada turno dele, ele recupera 1/16 de seus PV máximos a cada rodada. Caso o usuário possua imunidade a Terra, a Cobertura de Enraizar o faz perder esta imunidade."
  },
  "Enrolar": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque e de Defesa do usuário, e pelo resto do encontro as Dificuldades de Acurácia do usuário são reduzidas em 1."
  },
  "Ensopar": {
    "tipo": "Água",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação",
    "efeito": "Por 1d4+1 rodadas, o alvo recebe o Tipo Água, substituindo seu(s) Tipo(s)."
  },
  "Erupção": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 10",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Encerramento",
    "efeito": "A Erupção não pode ser executada se o usuário não possuir pelo menos 90% de seus PV máximos."
  },
  "Esboço": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Diária",
    "tagConcurso": "Reviravolta",
    "efeito": "Uma vez que o Esboço tenha sido usado, remova-o da lista de Golpes do usuário. O último Golpe usado pelo usuário é adicionado à lista de Golpes Naturais do usuário permanentemente, e pode se tornar um Golpe aprendido instantaneamente. O Esboço não pode ser Interrompido nem Interceptado."
  },
  "Escalada": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "5",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Confuso."
  },
  "Escaldar": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está com Queimadura."
  },
  "Escudo Espelho": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Diária",
    "tagConcurso": "Despedida",
    "efeito": "Se o usuário for acertado por um Golpe que causa dano Especial, ele pode usar o Escudo Espelho como uma Interceptação para – desde que não seja reduzido a zero PV ou menos – causar ao atacante o dobro do dano que sofreu."
  },
  "Escudo de Espinhos": {
    "tipo": "Planta",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o usuário for acertado por um Golpe, ele pode usar o Escudo de Espinhos para anunciar que aparou o Golpe (o Golpe que o acertaria simplesmente erra). Além disso, se o Golpe do inimigo era Corpo a Corpo, este inimigo perde um oitavo de seus PV máximos."
  },
  "Escudo Florido": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "Explosão",
    "acuracia": "5",
    "danoBasal": "Automática",
    "alcance": "-",
    "frequencia": "Si",
    "tagConcurso": "Rodada Sim Rodada Não",
    "efeito": "Perspectiva"
  },
  "Escudo Mágico": {
    "tipo": "Fada",
    "aptidao": "Perspicácia",
    "descritores": "Interceptação",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o usuário for acertado por um Golpe não causador de dano, ele pode usar o Escudo Mágico para anunciar que aparou o Golpe (o Golpe que o acertaria simplesmente erra)."
  },
  "Escudo Real": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se o usuário for acertado por um Golpe, ele pode usar o Escudo Real para anunciar que aparou o Golpe (o Golpe que o acertaria simplesmente erra). Além disso, se o Golpe do inimigo era Corpo a Corpo, este inimigo perde duas Fases de Ataque."
  },
  "Escuridão": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "O alvo perde uma quantidade de Pontos de Vida igual ao Nível do usuário."
  },
  "Esfera Climática": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": {
      "descricao": "Se o Clima não estiver Ameno, o Dano Basal da Esfera Climática aumenta para 4d12+16 Especial e o Tipo dele muda variando conforme o Clima. Se houver mais de um Clima em vigência, é possível escolher qual será o Tipo (e o dano consequentemente) da Esfera Climática.",
      "tabela": [
        {
          "clima": "Ensolarado",
          "tipo": "Fogo",
          "danoBasal": "4d12+16 Especial"
        },
        {
          "clima": "Tempestade de Areia",
          "tipo": "Pedra",
          "danoBasal": "4d12+16 Especial"
        },
        {
          "clima": "Granizo",
          "tipo": "Gelo",
          "danoBasal": "4d12+16 Especial"
        },
        {
          "clima": "Chuva",
          "tipo": "Água",
          "danoBasal": "4d12+16 Especial"
        },
        {
          "clima": "Ameno",
          "tipo": "Normal",
          "danoBasal": "2d8+6 Especial"
        }
      ]
    }
  },
  "Esfera de Aura": {
    "tipo": "Lutador",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Esfera de Energia": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa Especial."
  },
  "Esfera de Névoa": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1, Explosão 5",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 6 ou mais, os alvos perdem uma Fase de Ataque Especial."
  },
  "Esfera de Sombras": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa Especial."
  },
  "Esfera Elétrica": {
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
        {
          "velocidade": "Usuário 4x+ mais rápido",
          "danoBasal": "5d10+16 Especial"
        },
        {
          "velocidade": "Usuário 3x mais rápido",
          "danoBasal": "3d10+14 Especial"
        },
        {
          "velocidade": "Usuário 2x mais rápido",
          "danoBasal": "2d10+12 Especial"
        },
        {
          "velocidade": "Usuário mais rápido",
          "danoBasal": "1d10+10 Especial"
        }
      ]
    }
  },
  "Esforço": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Despedida",
    "efeito": "A quantidade de PV do alvo é reduzida para igualar a quantidade de PV do usuário. O Esforço não funciona se o usuário possui mais PV que o alvo."
  },
  "Esguicho": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Explosão 10",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Só é possível usar o Esguicho se o usuário possui pelo menos 90% de seus Pontos de Vida máximos."
  },
  "Esmagamento": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Espada Sagrada": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O Teste de Acurácia e a Dificuldade de Acurácia da Espada Sagrada não pode receber nenhuma variação benéfica ou maléfica."
  },
  "Espada Secreta": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Apesar de ser um Golpe causador de dano Especial, o alvo usará a Defesa, e não a Defesa Especial, para reduzir o dano da Espada Secreta."
  },
  "Espancamento": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Saraivada 6",
    "acuracia": "2",
    "danoBasal": "1d8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modéstia",
    "efeito": "Até seis Espancamentos podem ser feitos (mas não mais do que o número de aliados), mas após o primeiro erro, esta Saraivada acaba. Adicione o número de aliados do pokémon (até o máximo de 6) às rolagens de dano de cada Espancamento."
  },
  "Espelho": {
    "tipo": "Voador",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Despedida",
    "efeito": "O usuário usa o Golpe usado pelo alvo no último turno dele."
  },
  "Espinhos": {
    "tipo": "Terra",
    "aptidao": "Perspicácia",
    "descritores": "Ameaça",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Escolha dez metros quadrados dentro do alcance. Todos os quadrados devem estar adjacentes a pelo menos outro quadrado escolhido. Se uma criatura se mover através destes quadrados ou para eles, ela perde um oitavo de seus PV máximos. É possível usar este Golpe múltiplas vezes adicionando Espinhos a quadrados que antes já possuíam Espinhos, aumentando o dano que será causado a quem se mover através dos quadrados ou para eles: se um mesmo quadrado foi escolhido duas vezes, o dano se torna de um sexto dos PV máximos, e se o mesmo quadrado for escolhido três ou mais vezes, o dano se torna de um quarto dos PV máximos."
  },
  "Espinhos Venenosos": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Ameaça",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Escolha dez metros quadrados dentro do alcance. Todos os quadrados devem estar adjacentes a pelo menos outro quadrado escolhido. Se uma criatura se mover através destes quadrados ou para eles, ela está Envenenada. É possível usar este Golpe múltiplas vezes adicionando mais veneno a quadrados que antes já possuíam veneno, o que fará com que aquele que se mover através do quadrado duplamente envenenado seja acometido com Veneno Mortal."
  },
  "Espiral de Fogo": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O alvo fica Aprisionado por 1d4+1 rodadas. Enquanto Preso, No início do turno dele, ele sofre 1d12 de dano."
  },
  "Esplendor Purificador": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1, Explosão 5",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, os alvos perdem uma Fase de Defesa Especial."
  },
  "Esporos": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Clímax (2d4)",
    "efeito": "O alvo cai no Sono."
  },
  "Esporos de Algodão": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Explosão 2",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Entrada",
    "efeito": "Os alvos perdem duas Fases de Velocidade."
  },
  "Esporos Paralisantes": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 1",
    "acuracia": "11",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos estão Paralisados."
  },
  "Esporte Aquático": {
    "tipo": "Água",
    "aptidao": "Ternura",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Esporte Aquático cria uma Cobertura que concede resistência a dano de Fogo. É possível usar o Esporte Aquático em si mesmo, mesmo sendo um Golpe À Distância."
  },
  "Esporte Terrestre": {
    "tipo": "Terra",
    "aptidao": "Ternura",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Esporte Terrestre cria uma Cobertura que concede resistência a dano Elétrico. É possível usar o Esporte Terrestre em si mesmo, mesmo sendo um Golpe À Distância."
  },
  "Esquecimento": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "4d12+17 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual a três quartos do dano causado ao alvo."
  },
  "Estaca de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "3d12+14 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Estilhaços de Diamantes": {
    "tipo": "Pedra",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, eleva duas Fase de Defesa do usuário."
  },
  "Estilhaços de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se o alvo declarar o uso de um Golpe, é possível usar os Estilhaços de Gelo no turno dele antes do Golpe dele."
  },
  "Estímulo": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento (0)",
    "efeito": "Se o alvo estiver Paralisado, este Golpe remove a Paralisia dele e tem seu Dano Basal aumentado para 5d10 Físico."
  },
  "Estocada": {
    "tipo": "Inseto",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O usuário perde uma Fase de Ataque."
  },
  "Estocagem": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Defesa e de Defesa Especial do usuário, até o máximo de três Fases de Defesa e de Defesa Especial."
  },
  "Estoicismo": {
    "tipo": "Inseto",
    "aptidao": "Ternura",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "1d10+4 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "As criaturas na área perdem uma Fase de Ataque Especial."
  },
  "Estrela Cadente": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Estrondo": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Explosão 4, Som",
    "acuracia": "2",
    "danoBasal": "5d12+25 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Expansão da Aura": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "6",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo perde uma Fase de Defesa Especial."
  },
  "Explosão": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 7",
    "acuracia": "2",
    "danoBasal": "6d20+55 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Os Pontos de Vida do usuário são reduzidos para -50% de seus Pontos de Vida máximos. Se a Lealdade do usuário era 2 ou mais, ela é reduzida em 1."
  },
  "Explosão Aérea": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Coluna 2",
    "acuracia": "3",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 20",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, a Explosão Aérea é um Crítico."
  },
  "Explosão de Fogo": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 2",
    "acuracia": "6",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos estão Queimados."
  },
  "Explosão Sônica": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Coluna 1",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "A Explosão Sônica causa 15 de dano."
  },
  "Explosão Tecnológica": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+18 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "A Explosão Tecnológica causa dano do Tipo associado ao Disco de Memória ou à Placa Elemental que o usuário tem como item Mantido."
  },
  "Extrassensorial": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Atordoado."
  },
  "Extrema Velocidade": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Impacto, Interrupção",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Entrada",
    "efeito": "Se o inimigo declarar o uso de um Golpe, é possível usar a Extrema Velocidade no turno dele antes do Golpe dele. A Extrema Velocidade não pode ser Interrompida. Finalmente, depois de causar o dano pela Extrema Velocidade, o usuário ganha uma Ação de Movimento para se deslocar."
  },
  "Faca de Dois Gumes": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Empurrão 5 (1d12), Impacto, Rebote (1/3)",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Desfecho",
    "efeito": "-"
  },
  "Fachada": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Despedida",
    "efeito": "Se o usuário estiver sob alguma Condição, o Dano Basal da Fachada aumenta em +4d12 e a Frequência aumenta para À Vontade."
  },
  "Faísca": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Paralisado."
  },
  "Farejar": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Proveito",
    "efeito": "Os Golpes Normais e Lutadores do usuário agora podem acertar e afetar Fantasmas normalmente. Além disso, o usuário não recebe aumentos às suas Dificuldades de Acurácia em virtude de Golpes inimigos e nem mesmo alvos podem usar suas Evasões de Velocidade contra os Golpes do usuário, mas ainda podem usar suas Evasões de Defesa e de Defesa Especial. Finalmente, o usuário pode diferenciar o ativador de Multiplicar das cópias."
  },
  "Feitiço": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o alvo possuir alguma Condição, o Dano Basal do Feitiço se torna 4d12+16 Especial."
  },
  "Feixe Espectral": {
    "tipo": "Fantasma",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Não é possível usar nenhum Golpe nem nenhuma Habilidade para negar os efeitos do Feixe Espectral."
  },
  "Feixe Psíquico": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "O alvo é Empurrado 5 metros em uma direção escolhida pelo usuário. Não há dano causado por este empurrão caso se choque em outra criatura ou em um Terreno Bloqueador. Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa Especial."
  },
  "Fenda Espacial": {
    "tipo": "Dragão",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 20",
    "frequencia": "Diária",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 10 ou mais, a Fenda Espacial é um Crítico."
  },
  "Fertilizante": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Explosão 10",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "Eleva uma Fase de Ataque e de Ataque Especial de todos os aliados do Tipo Planta na área da Explosão."
  },
  "Festa": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "-"
  },
  "Fingimento": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Quando um encontro começa, você pode usar Fingimento como uma Interrupção. Não é possível usar o Fingimento em outra situação que não como a Interrupção de início de encontro. O alvo do Fingimento ficará Atordoado."
  },
  "Finta": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "A Finta pode ser usada para interromper Interceptações e não pode ser usada em outras situações. Jogue um dado. Se o resultado for par, o alvo não consome o uso da Interceptação interrompida pela Finta. Se for ímpar, aquele Golpe conta como tendo sido usado. A Finta anula todos os efeitos da Interceptação do alvo."
  },
  "Fissura": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Coluna 3",
    "acuracia": "15",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Todos os alvos têm seus Pontos de Vida reduzidos a zero pelo fechamento da Fissura no solo diretamente sobre eles. Fissura pode afetar um alvo sob efeito de Cavar ou dentro do chão em virtude de Deslocamento de Escavação."
  },
  "Focar Energia": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Pelo resto do combate, os Golpes do usuário são Críticos em resultados de Testes de Acurácia três pontos a menos que aquilo que normalmente é necessário (a menos que um Golpe ou algum efeito aumente a chance de Crítico, isso significa resultados 17 ou mais em Testes de Acurácia). Focar Energia é uma Cobertura, portanto seus efeitos não se acumulam se for usado de novo, já que substituirá a Cobertura atualmente em vigência."
  },
  "Fogo Místico": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+18 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "O alvo perde uma Fase de Defesa Especial."
  },
  "Fogo Sagrado": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 7",
    "acuracia": "3",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, os alvos estão com Queimadura"
  },
  "Fogo-Fátuo": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura (0)",
    "efeito": "O usuário sofre Queimadura."
  },
  "Folha Navalha": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "2d10+8 Físico À",
    "alcance": "Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Folha Navalha é um Crítico."
  },
  "Folhagem": {
    "tipo": "Planta",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Folhas Mágicas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Força Lunar": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modelo",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Ataque Especial."
  },
  "Força Sombria": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "Preparo",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Assim que começar conduzir a Força Sombria, o usuário desaparece do campo de batalha e seu turno acaba. Isso é considerado o tempo de Preparo. O usuário reaparece adjacente ao alvo no turno seguinte, ignorando quaisquer distâncias por Deslocamentos feitos pelo alvo durante este período, e aí então o Dano Basal é causado."
  },
  "Fotossíntese": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera metade de seus PV máximos. Se o Clima estiver Chuvoso, ele recupera apenas um quarto dos PV máximos, em vez de metade. Se o Clima estiver Ensolarado, ele recupera dois terços dos PV máximos, em vez de metade."
  },
  "Frustração": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "O usuário só pode usar sua Frustração se sua Lealdade for 0 ou 1. Pokémons selvagens podem usar sua Frustração livremente na presença de inimigos."
  },
  "Fumaça": {
    "tipo": "Venenoso",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Todas as Fases do alvo são neutralizadas."
  },
  "Furacão": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Empurrão 3 (0), Explosão 4",
    "acuracia": "6",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 13 ou mais, os alvos estão Confusos. A Dificuldade de Acurácia se torna 11 se o clima estiver Ensolarado, e se torna Automática se o clima estiver Chuvoso. Furacão não precisa fazer o Teste de Acurácia contra alvos que estão no ar em virtude de Golpes como Voar ou Queda Livre."
  },
  "Fúria": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco ataques podem ser feitos, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Fúria Dimensional": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "Explosão 2",
    "acuracia": "Automática",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "O alvo perde uma Fase de Defesa."
  },
  "Fúria do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "40",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Fúria dos Pássaros": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Empurrão 5 (1d6), Impacto, Rebote (1/3)",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Furto": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O Furto pode ser usado se o alvo estiver elevando uma ou mais Fases. Independentemente da razão pela qual o alvo ganharia aquelas Fases, ele não mais ganha nenhuma Fase e o usuário do Furto eleva suas Fases no lugar do alvo da mesma forma que o alvo elevaria."
  },
  "Fusão de Chamas": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Coluna 4",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se alguém tiver usado Fusão de Raios desde a rodada anterior, Fusão de Chamas recebe +8d12 ao Dano Basal."
  },
  "Fusão de Raios": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "Coluna 4",
    "acuracia": "2",
    "danoBasal": "4d12+22 Físico",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se alguém tiver usado Fusão de Chamas desde a rodada anterior, Fusão de Raios recebe +8d12 ao Dano Basal."
  },
  "Gancho": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Empurrão 2 (0)",
    "acuracia": "3",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o alvo está no ar, o Dano Basal do Gancho aumenta em +2d10. O Gancho não precisa fazer o Teste de Acurácia contra alvos que estão no ar em virtude de Golpes como Voar ou Queda Livre."
  },
  "Garantia": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "O Dano Basal da Garantia aumenta para 4d12+16 Físico se o alvo já sofreu dano por um Golpe na mesma rodada."
  },
  "Garra do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Garra Esmagadora": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Impacto",
    "acuracia": "3",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, a Garra Esmagadora faz o alvo perder uma Fase de Defesa."
  },
  "Garra Sombria": {
    "tipo": "Fantasma",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Garra Sombria é um Crítico."
  },
  "Garras Furiosas": {
    "tipo": "normal",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco cortes podem ser feitos, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Gás Venenoso": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 6",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Os alvos estão Envenenados."
  },
  "Geada": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 3",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos estão Congelados."
  },
  "Gêiser": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Mesmo se o Gêiser errar, o usuário será Descongelado. O Gêiser quente Descongela o alvo se acertar. Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Queimado."
  },
  "Gêiser de Fótons": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico ou Especial",
    "alcance": "À Distância 20",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "O usuário pode escolher se este Golpe será Físico ou Especial a cada uso."
  },
  "Gelochoque": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 2, Empurrão 10 (1d6)",
    "acuracia": "4",
    "danoBasal": "6d12+22 Físico",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão Paralisados."
  },
  "Geomancia": {
    "tipo": "Fada",
    "aptidao": "Estilo",
    "descritores": "Preparo",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Eleva duas Fases de Ataque Especial, de Defesa Especial e de Velocidade."
  },
  "Geração V": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 10",
    "acuracia": "5",
    "danoBasal": "8d10+36 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde uma Fase de Defesa, de Defesa Especial e de Velocidade."
  },
  "Gigadreno": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual à metade do dano causado ao alvo."
  },
  "Gigaimpacto": {
    "tipo": "Norma",
    "aptidao": "Vigor",
    "descritores": "Exaustão, Impacto",
    "acuracia": "4",
    "danoBasal": "7d10+28 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o Gigaimpacto errar o alvo, ele cria uma Explosão 3 centrada no alvo ainda causando o Ataque do usuário (mas não a rolagem de Dano Basal) a todos aqueles na área da Explosão."
  },
  "Giro Rápido": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Abertura",
    "efeito": "O Giro Rápido liberta o usuário de Prisões e da Semente Sanguessuga e também remove Ameaças a até 5 metros."
  },
  "Girobola": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "1d12+6 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Despedida",
    "efeito": "O alvo revela o Atributo Velocidade dele. Para cada dez pontos que a Velocidade do alvo é superior à Velocidade do usuário, adicione +1d12 ao Dano Basal do Girobola."
  },
  "Glaciação": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Explosão 5",
    "acuracia": "3",
    "danoBasal": "3d8+10 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Os alvos perdem uma Fase de Velocidade. Se o resultado do Teste de Acurácia for 11 ou mais, os alvos estão Presos por duas rodadas."
  },
  "Golpe Aéreo": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Golpes de Braço": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+1 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco Golpes de Braço podem ser feitos, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Golpe de Caratê": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o Golpe de Caratê é um Crítico."
  },
  "Gostosuras ou Travessuras": {
    "tipo": "Fantasma",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação",
    "efeito": "Por 1d4+1 rodadas, o alvo recebe o Tipo Fantasma, em adição a quaisquer Tipos que já possuía. Em virtude deste Golpe, é possível excepcionalmente possuir três Tipos."
  },
  "Granizo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, a área está em Granizo, o que significa que no início de cada rodada todos os pokémons que não forem de Gelo perdem 1/16 de seus Pontos de Vida máximos. Enquanto em Granizo, pokémons de Gelo elevam duas Fases de Defesa."
  },
  "Gratidão": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "A Gratidão só poderá ser usada se a Lealdade do pokémon for 3 ou mais. Pokémons selvagens podem usar sua Gratidão livremente na presença de aliados."
  },
  "Gravata": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "O alvo não pode usar Golpes com o Descritor Som por 1d8 rodadas."
  },
  "Gravidade": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, a área é considerada Gravitacional, o que significa que Golpes que exigem se deslocar em direção ao céu (como Voar ou Queda Livre) são impossíveis de usar, e pokémons que possuem imunidade a dano de Terra (por serem Voadores ou por possuírem Levitação) perdem esta imunidade. Além disso, a Gravidade reduz em 2 todas as Dificuldades de Acurácia para todos. A Gravidade não substitui o Clima que havia antes, mas se combina a ele."
  },
  "Grilhão Espectral": {
    "tipo": "Fantasma",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Se o alvo for acertado, ele não poderá ser trocado ou fugir até o fim do encontro."
  },
  "Guilhotina": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "15",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Os Pontos de Vida do alvo são reduzidos a zero."
  },
  "Guincho": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 4, Som",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "Os alvos perdem duas Fases de Defesa."
  },
  "Harmonia": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 3, Som",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "O próximo uso deste Golpe (pelo usuário ou não) durante o mesmo encontro tem seu Dano Basal aumentado para 2d10+20 Especial. A partir do terceiro uso da Harmonia durante o mesmo encontro (pelo usuário ou não), o Dano Basal se torna 3d10+30 Especial."
  },
  "Hidrobomba": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "4",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 9",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Hiperpresa": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Atordoado."
  },
  "Hiper-Raio": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Coluna 1, Exaustão",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Aos alvos contra os quais errar o Hiper-Raio, ele ainda causa o Ataque Especial do usuário, mas não o Dano Basal."
  },
  "Hipnose": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo Adormece."
  },
  "Holofotes": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por uma rodada, todos os aliados devem usar Golpes apenas no usuário dos Holofotes até este ficar inconsciente, fugir ou ser convocado de volta à pokébola."
  },
  "Imitação": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Cobiça",
    "efeito": "O usuário usa o Golpe que o alvo usou no último turno deste."
  },
  "Impacto Psíquico": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Diária",
    "tagConcurso": "Incentivo",
    "efeito": "A despeito de o Impacto Psíquico ser um Golpe Especial, use a Defesa do alvo – e não a Defesa Especial dele – para reduzir o dano sofrido."
  },
  "Impulso Psíquico": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 4",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde duas Fases de Ataque Especial."
  },
  "Incêndio": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Exaustão, Explosão 3",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o Incêndio falhar em acertar um alvo, este ainda recebe dano igual ao Ataque Especial do usuário."
  },
  "Incinerar": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d10+4 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o alvo tem uma fruta como um item Mantido, a fruta é incinerada, destruída sem ativação."
  },
  "Inferno": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 2",
    "acuracia": "11",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 2",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Os alvos sofrem Queimadura."
  },
  "Infestação": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "Cobertura",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 3",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação",
    "efeito": "O alvo ganha a Cobertura Infestada. Aquele que possuir esta Cobertura perde um oitavo de seus PV máximos no início de cada rodada por cinco rodadas. Além disso, criaturas Infestadas estão Presas."
  },
  "Injetar Veneno": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Envenenado."
  },
  "Instrução": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "Escolha um aliado voluntário que acabou de usar um Golpe com Frequência À Vontade ou Rodada Sim Rodada Não. Este aliado usa o Golpe de novo imediatamente."
  },
  "Intensificar Veneno": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo",
    "efeito": "Se o alvo estiver Envenenado, ele perde uma Fase de Ataque, de Ataque Especial e de Velocidade."
  },
  "Interpretação": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário copia para si uma das Habilidades do alvo por 1d8+1 rodadas."
  },
  "Inundação": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Investida": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "3",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Investida de Cabeça": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Empurrão 5 (1d12), Impacto, Rebote (1/2)",
    "acuracia": "5",
    "danoBasal": "7d10+28 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "-"
  },
  "Investida do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Vigor",
    "descritores": "Empurrão 3 (1d6), Impacto",
    "acuracia": "4",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Investida Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Empurrão 5 (1d6), Impacto, Rebote (1/3)",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Paralisado."
  },
  "Ira da Natureza": {
    "tipo": "Fada",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O alvo perde metade dos PV. Excepcionalmente arredonde o resultado para cima, em vez de para baixo."
  },
  "Ira Terrestre": {
    "tipo": "Terra",
    "aptidao": "Beleza",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Isca": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por uma rodada, todos os inimigos só poderão ter como alvo o usuário até que ele fique inconsciente, fuja ou seja retornado à pokébola."
  },
  "Jato d’Água": {
    "tipo": "Água",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Joia do Poder": {
    "tipo": "Pedra",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Jorro Metálico": {
    "tipo": "Metal",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "O Jorro Metálico só pode ser usado se o usuário tiver sofrido dano por um Golpe do alvo na rodada atual. A Evasão do alvo é aplicada ao Jorro Metálico como se ele fosse um Golpe Físico. O alvo sofre dano igual a 1,5 multiplicado pelo dano sofrido causado ao usuário."
  },
  "Julgamento": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 25",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Julgamento pode causar dano de qualquer Tipo que o usuário queira causar."
  },
  "Lágrimas": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "O alvo perde uma Fase de Ataque e de Ataque Especial."
  },
  "Lama": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Coluna 2",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos são Envenenados."
  },
  "Lambida": {
    "tipo": "Fantasma",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Paralisado."
  },
  "Lâmina de Vento": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Preparo",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Lâmina de Vento é um Crítico."
  },
  "Lâmina Solar": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Investida, Preparo",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "O usuário poderá usar três Ações de Movimento antes de fazer o ataque da Lâmina Solar, mas apenas no turno que atacará, não no turno de Preparo. Se o Clima estiver Ensolarado, o Raio Solar perde a necessidade de Preparo. Se o clima estiver Chuvoso ou de Tempestade de Areia, haverá uma rodada extra de Preparo para usar o Raio Solar. Se o clima estiver de Granizo, o Dano Basal é reduzido a 3d10 Especial."
  },
  "Lâmina Vegetal": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Lâmina Vegetal é um Crítico."
  },
  "Lâminas do Precipício": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Explosão 15",
    "acuracia": "4",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "-"
  },
  "Lança-Chamas": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos sofrem Queimadura."
  },
  "Lançamento": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d12+5 Físico",
    "alcance": "À Distância 12",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário lança o item Mantido quando usa Lançamento. Dependendo do item Mantido, Lançamento causa diferentes efeitos. Se for uma fruta, Lançamento não causa dano algum no alvo, que ingere a fruta imediatamente, recebendo seus efeitos. Se o item Mantido possuir um efeito, o efeito é ativado no alvo. Se outro objeto qualquer for arremessado, Lançamento adiciona +2d6 ao Dano Basal. Itens consumíveis lançados são destruídos durante o processo. Os demais podem ser recuperados do chão posteriormente."
  },
  "Lançar Teia": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 2",
    "acuracia": "3",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos perdem uma Fase de Velocidade. Lançar Teia ganha o Descritor Prisão para criaturas acertadas cinco rodadas seguidas por Lançar Teia ou para criaturas que já perderam todas as Fases de Velocidade."
  },
  "Lanças de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d10+4 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco Lanças de Gelo podem ser atiradas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Lapidação": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Ignore quaisquer bônus ou penalidades à Defesa do alvo, bem como quaisquer Fases que o alvo possua em Defesa, quando calculando o dano da Lapidação."
  },
  "Laser": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "Coluna 1, Exaustão",
    "acuracia": "2",
    "danoBasal": "7d10+28 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Em alvos nos quais o Laser errar, ele ainda causa o Ataque Especial do usuário (mas não o Dano Basal) como dano."
  },
  "Leitura Mental": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Proveito",
    "efeito": "O próximo Golpe que o usuário usar contra o alvo que tiver uma Dificuldade de Acurácia diferente de Automática acerta automaticamente. O efeito da Leitura Mental, tanto no alvo quanto no usuário, é transferido por Passar o Bastão."
  },
  "Lembrança": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Desfecho",
    "efeito": "Os Pontos de Vida do usuário são reduzidos a zero (e não é possível usar este Golpe se os PV já estiverem abaixo de zero). O sofrimento da Lembrança faz o alvo perder duas Fases de cada Atributo. Para usar a Lembrança não é preciso ter linha de visão ao alvo."
  },
  "Levantar o Tapete": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Levantar o Tapete só pode ser feito na primeira rodada de um encontro ou na primeira rodada que um pokémon acabou de sair da pokébola. Até o próximo turno do pokémon, os aliados adjacentes a ele atingidos por um Golpe causador de dano simplesmente não são atingidos: o Golpe que acertaria erra."
  },
  "Liberação": {
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
        {
          "fases": "Uma Fase de cada Atributo",
          "danoBasal": "3d10+12 Especial"
        },
        {
          "fases": "Duas Fases de cada Atributo",
          "danoBasal": "4d12+16 Especial"
        },
        {
          "fases": "Três Fases de cada Atributo",
          "danoBasal": "5d12+18 Especial"
        }
      ]
    }
  },
  "Liofilização": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Congelado. Quando aplicando resistências e vulnerabilidades, pokémons de Água são considerados vulneráveis, e não resistentes, à Liofilização."
  },
  "Luar": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera metade de seus PV máximos. Se o Clima estiver Chuvoso, ele recupera apenas um quarto dos PV máximos, em vez de metade. Se o Clima estiver Ensolarado, ele recupera dois terços dos PV máximos, em vez de metade."
  },
  "Luz Mágica": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "2d12+21 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modelo",
    "efeito": "-"
  },
  "Maciez": {
    "tipo": "Planta",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Eleva três Fases de Defesa do usuário."
  },
  "Magnetização": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Garante a Habilidade Levitação até o fim do encontro. Se já possuía Levitação, o usuário agora pode perder Levitação por qualquer motivo que o faria perder esta Habilidade e ainda continuar levitando."
  },
  "Magnitude": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Explosão 2",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": {
      "descricao": "Role 1d6 para definir o Dano Basal da Magnitude. A Magnitude pode acertar alvos que estão no subsolo em virtude do Golpe Cavar ou de Deslocamento de Escavação.",
      "tabela": [
        {
          "resultado": "1",
          "danoBasal": "1d4 Físico"
        },
        {
          "resultado": "2",
          "danoBasal": "1d8 Físico"
        },
        {
          "resultado": "3",
          "danoBasal": "2d8 Físico"
        },
        {
          "resultado": "4",
          "danoBasal": "2d10 Físico"
        },
        {
          "resultado": "5",
          "danoBasal": "3d10 Físico"
        },
        {
          "resultado": "6",
          "danoBasal": "4d10 Físico"
        }
      ]
    }
  },
  "Maldição": {
    "tipo": "Fantasma",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O usuário eleva uma Fase de Ataque e de Defesa, mas perde uma Fase de Velocidade. Se o usuário for do Tipo Fantasma, este Golpe terá um efeito diferente. Ele não eleva Fases do usuário e nem faz perder Fases de Velocidade. Em vez disso, o usuário perde metade de seus Pontos de Vida máximos e determina um alvo a até 4 metros para amaldiçoá-lo. O alvo perderá um oitavo de seus Pontos de Vida máximos no início de cada turno dele. Este uso de Maldição por Fantasmas só pode ser feito uma vez diária."
  },
  "Maldição da Floresta": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação",
    "efeito": "Por 1d4+1 rodadas, o alvo recebe o Tipo Planta, em adição a quaisquer Tipos que já possuía. Em virtude deste Golpe, é possível excepcionalmente possuir três Tipos."
  },
  "Mangual": {
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
        {
          "pvAtuais": "70% ou mais dos PV máximos",
          "danoBasal": "1d10+5 Físico"
        },
        {
          "pvAtuais": "36% a 69% dos PV máximos",
          "danoBasal": "2d10+10 Físico"
        },
        {
          "pvAtuais": "21% a 35% dos PV máximos",
          "danoBasal": "3d10+10 Físico"
        },
        {
          "pvAtuais": "6% a 20% dos PV máximos",
          "danoBasal": "4d10+10 Físico"
        },
        {
          "pvAtuais": "1 a 5% dos PV máximos",
          "danoBasal": "5d10+20 Físico"
        }
      ]
    }
  },
  "Manto Mágico": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Diária",
    "tagConcurso": "Despedida",
    "efeito": "Se o usuário for alvo de um Golpe não causador de dano, ele pode usar o Manto Mágico como uma Interceptação para refletir o Golpe de volta ao atacante, que será o alvo de seu próprio Golpe."
  },
  "Mão Amiga": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Proveito",
    "efeito": "O aliado alvo da Mão Amiga aumentará o Dano Basal do próximo Golpe que usar em +1d20, desde que o Golpe seja um Golpe causador de dano."
  },
  "Martelo de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Pausa",
    "efeito": "O usuário perde uma Fase de Velocidade."
  },
  "Martelo de Madeira": {
    "tipo": "Planta",
    "aptidao": "Vigor",
    "descritores": "Empurrão 5 (1d6), Impacto, Rebote (1/3)",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Mastigada": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Meditação": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque do usuário."
  },
  "Megachifre": {
    "tipo": "Inseto",
    "aptidao": "Estilo",
    "descritores": "Empurrão 3 (1d6)",
    "acuracia": "5",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Megachute": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Empurrão 6 (1d12), Impacto",
    "acuracia": "6",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Megadreno": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Proveito",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual à metade do dano causado ao alvo."
  },
  "Megassoco": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "-"
  },
  "Mente Calma": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque Especial e de Defesa Especial do usuário."
  },
  "Mergulho": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Impacto, Preparo",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento que for fazer o Mergulho, o usuário submerge na água, de modo que é necessário haver um corpo d'água para se fazer o Mergulho. Isso é considerado seu preparo. Em seu turno seguinte, ele ascenderá à superfície usando os efeitos do Golpe. Enquanto submerso, o usuário não pode ser alvo de Golpes por inimigos na superfície do chão."
  },
  "Metalizar Garra": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Investida, Moral",
    "acuracia": "3",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, eleva uma Fase de Ataque do usuário."
  },
  "Meteoro": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Impacto, Moral",
    "acuracia": "4",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o usuário eleva uma Fase de Ataque."
  },
  "Meteoro do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Beleza",
    "descritores": "Explosão 4",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde duas Fases de Ataque Especial."
  },
  "Metrônomo": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Sorteio",
    "efeito": "O Metrônomo faz o usuário usar outro Golpe determinado aleatoriamente entre os Golpes existentes, salvo Golpes específicos que não podem ser convocados mediante o Metrônomo (a critério do Narrador)."
  },
  "Milagre": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Proveito",
    "efeito": "Os Golpes Psíquicos do usuário agora podem acertar e afetar pokémons de Trevas normalmente. Além disso, o usuário não é afetado por efeitos que exigem um resultado mínimo no Teste de Acurácia para funcionar. Alvos não podem usar suas Evasões de Velocidade contra os Golpes do usuário, mas ainda podem usar suas Evasões de Defesa e de Defesa Especial. Finalmente, o usuário pode diferenciar o ativador de Multiplicar das cópias."
  },
  "Mímica": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O usuário escolhe um Golpe que o alvo usou durante o encontro. Pelo resto do encontro, o Golpe escolhido substitui Mímica na lista de Golpe conhecidos do usuário."
  },
  "Minimizar": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Abstração",
    "efeito": "+4 às Dificuldades de Acurácia de Golpes feitos contra o usuário, e o Tamanho do usuário é reduzido em uma categoria (de Gigantesco para Enorme, de Enorme para Grande, de Grande para Médio e de Médio para Pequeno)."
  },
  "Mira": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Diária",
    "tagConcurso": "Proveito",
    "efeito": "O próximo Golpe que o usuário usar contra o alvo que tiver uma Dificuldade de Acurácia diferente de Automática acerta automaticamente. O efeito de Mira, tanto no alvo quanto no usuário, é transferido por Passar o Bastão."
  },
  "Míssil Aquático": {
    "tipo": "Água",
    "aptidao": "Estilo",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se o inimigo declarar um Golpe, é possível usar o Míssil Aquático no turno dele antes do Golpe dele."
  },
  "Moedor": {
    "tipo": "Metal",
    "aptidao": "Estilo",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "-"
  },
  "Mordida": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Multiataque": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Multiataque causa dano do Tipo associado ao Disco de Memória que o usuário tem como item Mantido."
  },
  "Multiplicar": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modéstia",
    "efeito": "O usuário cria três cópias de si mesmo e as coloca em campo de batalha formando um quadrado consigo. O usuário e o Narrador devem saber quais são cópias e qual é o original. Se uma das cópias sofrer dano, ela é destruída. Se o usuário sofrer dano por um Golpe, todas as cópias são destruídas. Quando executar um Golpe, o usuário pode determinar que ele se origina de qualquer das cópias, e o Golpe terá seu efeito normal a despeito disso. O usuário só possui sua Ação de Golpe por rodada, mas cada cópia pode se deslocar separadamente possuindo sua própria Ação de Movimento junto à Ação de Movimento do original. As cópias não precisam permanecer adjacentes ao original, mas é necessário tê-las em seu campo visual para controlá-las. Além disso, se o usuário ou se uma cópia estiverem adjacentes a pelo menos uma cópia, as Dificuldades de Acurácia de Golpes contra o usuário ou a cópia aumentam em 2. Quando cada cópia é destruída, o usuário perde 1d12 Pontos de Vida."
  },
  "Música da Relíquia": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 4, Som",
    "acuracia": "2",
    "danoBasal": "3d12+12 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, os alvos são Adormecidos."
  },
  "Neblina": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "O alvo com a Cobertura de Neblina não pode ter suas Fases reduzidas. É possível usar a Neblina em si mesmo, mesmo sendo um Golpe À Distância."
  },
  "Nevasca": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 3",
    "acuracia": "7",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, os alvos estão Congelados. Se o clima estiver de Granizo, a Nevasca acerta automaticamente dispensando o Teste de Acurácia."
  },
  "Névoa Aromática": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Perspectiva",
    "efeito": "Eleva uma Fase de Defesa Especial do alvo."
  },
  "Nevoeiro": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Por três rodadas, a área é considerada de Nevoeiro, o que significa que todas as Fases são anuladas. O Nevoeiro não substitui o Clima que havia antes, mas se combina a ele."
  },
  "Nó de Grama": {
    "tipo": "Planta",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": {
      "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal do Nó de Grama varia conforme a Categoria de Peso do alvo:",
      "tabela": [
        {
          "categoria": "Muito Leve",
          "danoBasal": "1d10 Especial"
        },
        {
          "categoria": "Leve",
          "danoBasal": "1d10+5 Especial"
        },
        {
          "categoria": "Médio",
          "danoBasal": "1d10+10 Especial"
        },
        {
          "categoria": "Pesado",
          "danoBasal": "2d10+12 Especial"
        },
        {
          "categoria": "Muito Pesado",
          "danoBasal": "3d10+14 Especial"
        },
        {
          "categoria": "Extremamente Pesado",
          "danoBasal": "5d10+16 Especial"
        }
      ]
    }
  },
  "Nocaute": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o alvo possui um item Mantido, ele é jogado para longe do campo de batalha."
  },
  "Núcleo Excretor": {
    "tipo": "Dragão",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 10",
    "acuracia": "4",
    "danoBasal": "4d12+16 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Alvos que já tinham atacado o usuário perdem suas Habilidades pelo resto do encontro."
  },
  "Obelisco": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "5",
    "danoBasal": "4d12+16 Físico",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o Obelisco causa um Crítico."
  },
  "Ódio": {
    "tipo": "Fantasma",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O último Golpe usado pelo alvo tem sua Frequência alterada até o fim do encontro. Se for um Golpe que poderia ser usado À Vontade, ele agora só pode ser usado Rodada Sim Rodada Não. Se for um Golpe usado Rodada Sim Rodada Não, ele só poderá ser usado uma vez por encontro, o que significa que ele não poderá mais ser usado naquele encontro."
  },
  "Oferenda": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O usuário dá seu item Mantido ao alvo, a menos que o alvo já esteja com algum item Mantido."
  },
  "Ofuscação": {
    "tipo": "Noturno",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Se o resultado do Teste de Acurácia for 13 ou mais, aumente em 1 as Dificuldades de Acurácia do alvo pelo resto do encontro."
  },
  "Ofuscar": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "O alvo está Paralisado."
  },
  "Olhar Paralisante": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Pelo resto do encontro, o alvo não pode fugir nem ser convocado à pokébola até estar inconsciente."
  },
  "Onda Anômala": {
    "tipo": "Elétrico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "O alvo perde duas Fases de Ataque Especial."
  },
  "Onda de Calor": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "4",
    "danoBasal": "4d12+16 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, os alvos estão Queimados."
  },
  "Onda de Choques": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Coluna 2",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 2",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Onda de Lama": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Coluna 4",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos estão Envenenados."
  },
  "Onda de Vácuo": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se o inimigo declarar um Golpe, é possível usar a Onda de Vácuo no turno dele antes do Golpe dele."
  },
  "Onda Psíquica": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 2",
    "acuracia": "5",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": {
      "descricao": "Role 1d4 para definir quantos PV os alvos perdem:",
      "tabela": [
        {
          "resultado": "1 ou 2",
          "pvPerdidos": "Metade do Nível do Usuário"
        },
        {
          "resultado": "3",
          "pvPerdidos": "Nível do Usuário"
        },
        {
          "resultado": "4",
          "pvPerdidos": "1,5 multiplicado pelo Nível do Usuário"
        }
      ]
    }
  },
  "Onda Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Conquista",
    "efeito": "Paralisa o alvo."
  },
  "Ordenar Ataque": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, Ordenar Ataque causa um Crítico."
  },
  "Ordenar Cura": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "Recupera metade de seus Pontos de Vida máximos."
  },
  "Ordenar Defesa": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Defesa e de Defesa Especial."
  },
  "Osso Sombrio": {
    "tipo": "Fantasma",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa."
  },
  "Ovo Bomba": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 2",
    "acuracia": "6",
    "danoBasal": "4d12+16 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Paciência": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "Se o usuário for alvo de um Golpe, ele pode usar a Paciência como uma Interceptação. Após declarar o uso da Paciência, o usuário encerra seu turno. O usuário não fará nada em seu próximo turno na rodada seguinte. Apenas no outro turno, duas rodadas depois, some todo o dano sofrido pelo usuário desde o momento que declarou a Paciência até agora. O alvo perde uma quantidade de PV igual ao dobro do valor desta soma."
  },
  "Pancada": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Paralisado."
  },
  "Pancada Dupla": {
    "tipo": "Dragão",
    "aptidao": "Vigor",
    "descritores": "Saraivada 2",
    "acuracia": "3",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "-"
  },
  "Paranormal": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Empurrão 5 (0)",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo perde uma Fase de Defesa Especial."
  },
  "Partir o Coração": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, Atordoa o alvo."
  },
  "Passar o Bastão": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário é substituído por outro pokémon da equipe do seu dono. Todas as Fases e Coberturas que estavam sob efeito no usuário são passadas adiante ao pokémon que o substituir. Passar o Bastão pode permitir que um pokémon seja trocado mesmo que ele esteja Aprisionado, mas o pokémon que sairá da pokébola ficará Aprisionado no lugar do anterior neste caso."
  },
  "Patola": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "Empurrão 2",
    "acuracia": "3",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Patola causa um Crítico."
  },
  "Pedras Soltas": {
    "tipo": "Pedra",
    "aptidao": "Estilo",
    "descritores": "Ameaça",
    "acuracia": "-",
    "danoBasal": "",
    "alcance": "À Distância 20",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Escolha cinco metros quadrados dentro do alcance. Todos os quadrados devem estar adjacentes a pelo menos outro quadrado escolhido. Se uma criatura se mover através destes de algum quadrado a menos de dez metros de um dos cinco quadrados escolhidos, as Pedras Soltas do quadrado mais próximo da criatura são removidas e o inimigo perde um oitavo de seus PV máximos. Esta perda é considerada dano de Pedra comum, afetado por resistências e vulnerabilidades, mas não se aplicam Atributos. Se um alvo já foi atingido por um dos cinco quadrados, ele não pode ser atingido por outro até o fim do encontro, ou até que seja convocado de volta à pokébola ou fuja."
  },
  "Pelas Costas": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Entrada",
    "efeito": "Se o usuário for alvo de um Golpe Corpo a Corpo causador de dano, é possível ir Pelas Costas contra o atacante como uma Interrupção."
  },
  "Perder a Cabeça": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 8",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde metade dos PV por Perder a Cabeça."
  },
  "Perfuração": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, a Perfuração é um Crítico."
  },
  "Perseguição": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Proveito",
    "efeito": "Se o alvo estiver fugindo ou sendo convocado à pokébola, este Golpe pode ser usado como uma Interrupção. Quando perseguir como Interrupção, a Perseguição fará o usuário se manter adjacente ao alvo que estiver fugindo, garantindo 25 metros de deslocamento imediato acompanhando o alvo o máximo que for possível para poder causar o dano Corpo a Corpo. Se for possível alcançar o alvo desta forma ou se o alvo está sendo convocado de volta à pokébola, Perseguição causará 3d10+12 de Dano Basal."
  },
  "Pesadelo": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "O Pesadelo só pode afetar um alvo se este estiver dormindo. O alvo perderá um quarto de seus Pontos de Vida máximos por rodada enquanto sob efeito do Pesadelo. Pesadelo não influencia se o alvo acordará mais cedo ou mais tarde. O alvo só para de sofrer pelo Pesadelo se acordar."
  },
  "Peso Pesado": {
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
        {
          "diferenca": "Iguais",
          "danoBasal": "1d10 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 1 Categoria",
          "danoBasal": "1d10+10 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 2 Categorias",
          "danoBasal": "2d12+12 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 3 Categorias",
          "danoBasal": "3d10+14 Físico"
        },
        {
          "diferenca": "Usuário mais pesado em 4+ Categorias",
          "danoBasal": "5d10+16 Físico"
        }
      ]
    }
  },
  "Picada": {
    "tipo": "Inseto",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Cobiça",
    "efeito": "Se o alvo da Picada possuir um item Mantido consumível, o usuário do Golpe pode consumi-lo."
  },
  "Picada Venenosa": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "À Distância 6",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo é Envenenado."
  },
  "Picotar": {
    "tipo": "Voador",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Cobiça",
    "efeito": "Se o alvo estiver mantendo uma fruta, o usuário de Picotar ingere a fruta imediatamente, recebendo seus efeitos, e ainda aumenta em +2d10 o Dano Basal ao Picotar."
  },
  "Pilar de Água": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "Se este Golpe for usado na mesma rodada que o Pilar de Chamas, reduza em 3 o número mínimo necessário como resultado dos Testes de Acurácia para efeitos de Golpes serem ativados por 1d4+1 rodadas. Se este Golpe for usado na mesma rodada que o Pilar de Folhas, todos os inimigos perdem duas Fases de Velocidade por 1d4+1 rodadas."
  },
  "Pilar de Chamas": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "Se este Golpe for usado na mesma rodada que o Pilar de Água, reduza em 3 o número mínimo necessário como resultado dos Testes de Acurácia para efeitos de Golpes serem ativados por 1d4+1 rodadas. Se este Golpe for usado na mesma rodada que o Pilar de Folhas, todos os inimigos a até 20 metros perdem um oitavo de seus PV máximos no fim de cada rodada por 1d4+1 rodadas."
  },
  "Pilar de Folhas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "Se este Golpe for usado na mesma rodada que o Pilar de Água, todos os inimigos perdem duas Fases de Velocidade por 1d4+1 rodadas. Se este Golpe for usado na mesma rodada que o Pilar de Chamas, todos os inimigos a até 20 metros perdem um oitavo de seus PV máximos no fim de cada rodada por 1d4+1 rodadas."
  },
  "Pisotear": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado. O Dano Basal por Pisotear aumenta em +1d10 se o alvo for Pequeno."
  },
  "Planta Mortal": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Explosão 3, Exaustão",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Caso este Golpe erre, ele ainda causa como dano o Ataque Especial do usuário a todos os alvos no qual errou."
  },
  "Pó Irritante": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1, Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por uma rodada, os alvos na área só podem atacar o usuário do Pó Irritante a menos que este fique inconsciente ou seja convocado à pokébola."
  },
  "Pó Sonífero": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 1",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Os alvos Adormecem."
  },
  "Pó Venenoso": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 1",
    "acuracia": "6",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos estão Envenenados."
  },
  "Poder Antigo": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Coluna 2, Moral",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, o usuário eleva uma Fase de todos os Atributos, salvo Saúde. Se o resultado do Teste de Acurácia tiver sido 16 ou mais, todos os aliados dentro da área também elevam uma Fase de todos os Atributos (novamente, salvo Saúde) e não sofrem dano pelo Poder Antigo."
  },
  "Poder Cósmico": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Defesa e de Defesa Especial do usuário."
  },
  "Poder da Natureza": {
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
        {
          "ambiente": "Água Doce",
          "golpe": "Surfe"
        },
        {
          "ambiente": "Ártico, Taiga e Tundra",
          "golpe": "Nevasca"
        },
        {
          "ambiente": "Caverna",
          "golpe": "Esfera de Sombras"
        },
        {
          "ambiente": "Céu",
          "golpe": "Rajada de Vento"
        },
        {
          "ambiente": "Cidade",
          "golpe": "Estrela Cadente"
        },
        {
          "ambiente": "Deserto",
          "golpe": "Ataque de Areia"
        },
        {
          "ambiente": "Floresta",
          "golpe": "Folhas Mágicas"
        },
        {
          "ambiente": "Montanha",
          "golpe": "Deslizamento de Rochas"
        },
        {
          "ambiente": "Oceano",
          "golpe": "Hidrobomba"
        },
        {
          "ambiente": "Pradaria",
          "golpe": "Esporos Paralisantes"
        },
        {
          "ambiente": "Praia",
          "golpe": "Água Barrenta"
        },
        {
          "ambiente": "Selva",
          "golpe": "Folha Navalha"
        },
        {
          "ambiente": "Vulcão",
          "golpe": "Onda de Calor"
        }
      ]
    }
  },
  "Poder Oculto": {
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
        {
          "resultado": "1",
          "danoBasal": "1d12+6 Especial"
        },
        {
          "resultado": "2",
          "danoBasal": "2d8+6 Especial"
        },
        {
          "resultado": "3",
          "danoBasal": "2d10+8 Especial"
        },
        {
          "resultado": "4",
          "danoBasal": "3d8+10 Especial"
        }
      ],
      "tabelaTipo": [
        {
          "resultado": "1",
          "tipo": "Água"
        },
        {
          "resultado": "2",
          "tipo": "Dragão"
        },
        {
          "resultado": "3",
          "tipo": "Elétrico"
        },
        {
          "resultado": "4",
          "tipo": "Fada"
        },
        {
          "resultado": "5",
          "tipo": "Fantasma"
        },
        {
          "resultado": "6",
          "tipo": "Fogo"
        },
        {
          "resultado": "7",
          "tipo": "Gelo"
        },
        {
          "resultado": "8",
          "tipo": "Inseto"
        },
        {
          "resultado": "9",
          "tipo": "Lutador"
        },
        {
          "resultado": "10",
          "tipo": "Metal"
        },
        {
          "resultado": "11",
          "tipo": "Normal"
        },
        {
          "resultado": "12",
          "tipo": "Pedra"
        },
        {
          "resultado": "13",
          "tipo": "Planta"
        },
        {
          "resultado": "14",
          "tipo": "Psíquico"
        },
        {
          "resultado": "15",
          "tipo": "Terra"
        },
        {
          "resultado": "16",
          "tipo": "Trevas"
        },
        {
          "resultado": "17",
          "tipo": "Venenoso"
        },
        {
          "resultado": "18",
          "tipo": "Voador"
        },
        {
          "resultado": "19 ou 20",
          "tipo": "Role Novamente"
        }
      ]
    }
  },
  "Poder Secreto": {
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
        {
          "ambiente": "Água Doce",
          "efeito": "Perde uma Fase de Velocidade"
        },
        {
          "ambiente": "Ártico, Taiga e Tundra",
          "efeito": "Está Congelado"
        },
        {
          "ambiente": "Caverna",
          "efeito": "Está Atordoado"
        },
        {
          "ambiente": "Céu",
          "efeito": "Perde uma Fase de Ataque Especial"
        },
        {
          "ambiente": "Cidade",
          "efeito": "Está Paralisado"
        },
        {
          "ambiente": "Deserto",
          "efeito": "Recebe +2 às Dificuldades de Acurácia"
        },
        {
          "ambiente": "Floresta",
          "efeito": "Perde uma Fase de Defesa"
        },
        {
          "ambiente": "Montanha",
          "efeito": "Está Confuso"
        },
        {
          "ambiente": "Oceano",
          "efeito": "Perde uma Fase de Ataque"
        },
        {
          "ambiente": "Pradaria",
          "efeito": "Está Envenenado"
        },
        {
          "ambiente": "Praia",
          "efeito": "Perde uma Fase de Defesa Especial"
        },
        {
          "ambiente": "Selva",
          "efeito": "Está Adormecido"
        },
        {
          "ambiente": "Vulcão",
          "efeito": "Está Queimado"
        }
      ]
    }
  },
  "Poder Terreno": {
    "tipo": "Terra",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, os alvos perdem uma Fase de Defesa Especial."
  },
  "Pólen Fofo": {
    "tipo": "Inseto",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "Se o alvo for aliado, o dano que seria causado é curado."
  },
  "Polimento": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Eleva duas Fases de Velocidade do usuário."
  },
  "Poluição": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Explosão 3",
    "acuracia": "5",
    "danoBasal": "1d6+3 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 13 ou mais, os alvos estão Envenenados."
  },
  "Polvo Canhão": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, o alvo tem suas Dificuldades de Acurácia aumentadas em 1."
  },
  "Pólvora": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "Cobertura",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Sorteio",
    "efeito": "O alvo recebe uma Cobertura de Pólvora. Se for acertado por um Golpe causador de dano de Fogo, a Cobertura de Pólvora explode (sendo destruída) e ele perde um quarto de seus PV máximos."
  },
  "Pontapé": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d10+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "O alvo perde uma Fase de Velocidade."
  },
  "Porrada": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "6",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Postura de Ovos": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O alvo recupera metade de seus PV máximos."
  },
  "Presa de Fogo": {
    "tipo": "Fogo",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo é aleatoriamente acometido por uma das seguintes Condições: Atordoamento ou Queimadura. Se o resultado do Teste de Acurácia for 20, o alvo está Atordoado e Queimado."
  },
  "Presa de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo é aleatoriamente acometido por uma das seguintes Condições: Atordoamento ou Congelamento. Se o resultado do Teste de Acurácia for 20, o alvo está Atordoado e Congelado."
  },
  "Presa do Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo é aleatoriamente acometido por uma das seguintes Condições: Atordoamento ou Paralisia. Se o resultado do Teste de Acurácia for 20, o alvo está Atordoado e Paralisado."
  },
  "Presa Psíquica": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "A Presa Psíquica pode destruir Barreiras."
  },
  "Presa Venenosa": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Envenenado."
  },
  "Presente": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Excentricidade",
    "efeito": {
      "descricao": "Role 1d4 e então confira o Dano Basal do Presente:",
      "tabela": [
        {
          "resultado": "1",
          "danoBasal": "1d10+10 Físico"
        },
        {
          "resultado": "2",
          "danoBasal": "2d10+10 Físico"
        },
        {
          "resultado": "3",
          "danoBasal": "3d10+10 Físico"
        },
        {
          "resultado": "4",
          "danoBasal": "Não há nenhum Dano Basal, e o alvo é curado em 65 Pontos de Vida"
        }
      ]
    }
  },
  "Prevenção": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Por uma rodada, Prevenção garante que nenhum aliado seja alvo de qualquer Golpe usado como Interrupção ou Interceptação. A Prevenção não protege o próprio usuário, apenas os aliados."
  },
  "Previsão": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1, Preparo",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Abertura",
    "efeito": "Previsão não consome a Ação de Golpe na rodada em que age, apenas na rodada inicial de Preparo de modo que é possível agir normalmente na rodada que a Previsão causa seu dano. O dano causado pela Previsão é considerado sem Tipo, de modo que causa dano neutro em todos os alvos."
  },
  "Primeira Impressão": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Abertura",
    "efeito": "Desde que o usuário de Primeira Impressão não tenha usado nenhum Golpe durante o encontro, se um inimigo declarar o uso de um Golpe, é possível usar Primeira Impressão durante o turno dele."
  },
  "Primeiro Eu": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Interrupção",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Entrada",
    "efeito": "Se o alvo declarar um Golpe causador de dano e a Velocidade do usuário de Primeiro Eu for maior que a do alvo, é possível interromper o alvo usando Primeiro Eu para usar no alvo o mesmo Golpe que ele pretende usar no usuário antes dele."
  },
  "Profundezas da Escuridão": {
    "tipo": "Fantasma",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Antes de o Dano Basal das Profundezas da Escuridão ser causado, as Fases negativas do alvo são neutralizadas e todas as Fases positivas dele são transferidas ao usuário."
  },
  "Proteção": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o usuário for acertado por um Golpe, ele pode usar a Proteção para anunciar que se protegeu do Golpe (o Golpe que o acertaria simplesmente não faz nada contra ele)."
  },
  "Provocação": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Excentricidade",
    "efeito": "O alvo só pode usar Golpes causadores de dano por 1d4+1 rodadas."
  },
  "Psicochoque": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+12 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo",
    "efeito": "A despeito de Psicochoque ser um Golpe Especial, use a Defesa do alvo – e não a Defesa Especial dele – para reduzir o dano sofrido."
  },
  "Pular": {
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
        {
          "categoria": "Muito Leve",
          "explosao": "1"
        },
        {
          "categoria": "Leve",
          "explosao": "2"
        },
        {
          "categoria": "Médio",
          "explosao": "3"
        },
        {
          "categoria": "Pesado",
          "explosao": "4"
        },
        {
          "categoria": "Muito Pesado",
          "explosao": "5"
        },
        {
          "categoria": "Extremamente Pesado",
          "explosao": "6"
        }
      ]
    }
  },
  "Pulso d’Água": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, os alvos estão Confusos."
  },
  "Pulso de Cura": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Explosão 2",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "Os alvos recupera metade de seus PV máximos, mas o Pulso de Cura não recupera Pontos de Vida do usuário."
  },
  "Pulso do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "3d12+10 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Pulso Primitivo": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Explosão 15",
    "acuracia": "4",
    "danoBasal": "5d12+18 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "-"
  },
  "Pulso Sombrio": {
    "tipo": "Noturno",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, os alvos estão Atordoados."
  },
  "Purificação": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo é curado de Veneno e recupera um quarto de seus Pontos de Vida máximos."
  },
  "Quebra Crânio": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Empurrão 4 (1d12), Impacto, Preparo",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "-"
  },
  "Quebra Telha": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Quebra Telha pode destruir Barreiras."
  },
  "Queda Livre": {
    "tipo": "Voador",
    "aptidao": "Vigor",
    "descritores": "Preparo, Prisão",
    "acuracia": "3",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento que Voar, o usuário e o alvo ascendem aos céus 25 metros. Isso é considerado seu preparo e o alvo irá com o usuário sendo considerado Aprisionado pelo usuário. Em seu turno seguinte, ambos descerão ao chão em descida usando os efeitos do Golpe para causar dano ao alvo e ele será libertado da Prisão. Pokémons Voadores não sofrem dano por Queda Livre."
  },
  "Queimadura por Frio": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 2, Empurrão 10 (1d6)",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão com Queimadura."
  },
  "Quinas Pontudas": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque do usuário."
  },
  "Raio Aurora": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o alvo perde uma Fase de Ataque."
  },
  "Raio Carregado": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "Coluna 1, Moral",
    "acuracia": "3",
    "danoBasal": "2d8+6 Especial",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, eleva uma Fase do Ataque Especial do usuário."
  },
  "Raio de Confusão": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Constrangimento",
    "efeito": "Os alvos estão Confusos."
  },
  "Raio de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos estão Congelados."
  },
  "Raio Solar": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Coluna 1, Preparo",
    "acuracia": "2",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Se o Clima estiver Ensolarado, o Raio Solar perde a necessidade de Preparo. Se o clima estiver Chuvoso ou de Tempestade de Areia, haverá uma rodada extra de Preparo para usar o Raio Solar. Se o clima estiver de Granizo, o Dano Basal é reduzido a 3d10 Especial."
  },
  "Raiva": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Moral",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase do usuário se quaisquer das seguintes condições for satisfeita: o usuário sofreu dano por um ataque desde o turno passado dele ou o usuário usou a Raiva no turno passado dele."
  },
  "Rajada de Bolhas": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Pausa",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, os alvos perdem uma Fase de Velocidade."
  },
  "Rajada de Chamas": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 4",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Salvo pelo alvo no centro da área da Explosão, os demais alvos não sofrem o Dano Basal da Rajada de Chamas. Em vez disso, eles perdem 1/16 de seus PV máximos."
  },
  "Rajada de Vento": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Empurrão 40 (0)",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Se for uma batalha oficial entre humanos, as regras dizem que um pokémon que foi para tão longe deve ser retornado à pokébola e substituído por outro."
  },
  "Rancor": {
    "tipo": "Fantasma",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 20",
    "frequencia": "Diária",
    "tagConcurso": "Constrangimento",
    "efeito": "Quando o usuário fica inconsciente devido a um Golpe, ele pode usar o Rancor de sua alma como uma Interceptação para impedir o uso do Golpe que o deixou inconsciente por parte daquele que usou o Golpe contra ele por uma hora."
  },
  "Rasteira": {
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
        {
          "categoria": "Muito Leve",
          "danoBasal": "1d10 Físico"
        },
        {
          "categoria": "Leve",
          "danoBasal": "1d10+5 Físico"
        },
        {
          "categoria": "Médio",
          "danoBasal": "1d10+10 Físico"
        },
        {
          "categoria": "Pesado",
          "danoBasal": "2d10+12 Físico"
        },
        {
          "categoria": "Muito Pesado",
          "danoBasal": "3d10+14 Físico"
        },
        {
          "categoria": "Extremamente Pesado",
          "danoBasal": "5d10+16 Físico"
        }
      ]
    }
  },
  "Reciclagem": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Cobiça",
    "efeito": "O efeito de um item consumível previamente usado durante o encontro é usado de novo como se o item não tivesse sido consumido."
  },
  "Recuperação": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera metade de seus PV máximos."
  },
  "Redemoinho": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 5",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O alvo está Preso por 1d4+1 rodadas. Uma vez por rodada, no início de cada turno do alvo enquanto Preso, ele sofre 1d12 de dano. O usuário não pode manter Redemoinhos em mais de um alvo simultaneamente."
  },
  "Refletor": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Barreira",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Posicione 5 metros de Barreiras que durarão por 1d4+1 rodadas posicionadas adjacentes ao usuário enquanto ele se deslocar. Se algum Golpe inimigo tenta ter um alvo através da Barreira, o alvo do Golpe é considerado com duas Fases a mais de Defesa."
  },
  "Refresco": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Modelo",
    "efeito": "O usuário é restaurado de todas as Condições."
  },
  "Relâmpago": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 7",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, Paralisa os alvos."
  },
  "Relaxar": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera uma quantidade de Pontos de Vida igual à metade de seus Pontos de Vida máximos."
  },
  "Repuxo": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, Paralisa o alvo."
  },
  "Réquiem": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 15, Som",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Constrangimento",
    "efeito": "Humanos não sofrem os efeitos do Réquiem, mas os pokémons na área – incluindo o usuário – sofrem, recebendo um contador que começa em 3. No início do turno de cada pokémon afetado, este contador é reduzido em 1 para aquele pokémon. Quando o contador de cada pokémon atingir zero, aquele pokémon tem seus PV reduzidos instantaneamente a zero. É possível retirar seu contador sendo convocado à pokébola ou fugindo. Se o pokémon ficar inconsciente durante este período seu contador também desaparece."
  },
  "Reserva": {
    "tipo": "Psíquico",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+3 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Para cada Fase positiva que o usuário possua, aumente o Dano Basal da Reserva em +1d10."
  },
  "Resistência": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Abstração",
    "efeito": "Se o usuário for acertado por um Golpe e seria reduzido a zero PV ou menos, ele pode usar a Resistência para permanecer com 1 Ponto de Vida."
  },
  "Retalhar": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, Retalhar é um Crítico."
  },
  "Retaliação": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se algum aliado ficou inconsciente devido a um Golpe ou a um Talento do alvo nas últimas duas rodadas, o Dano Basal da Retaliação se torna 5d12 Físico."
  },
  "Retirada": {
    "tipo": "Água",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Eleva uma Fase de Defesa do usuário."
  },
  "Retribuição": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d8+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Se o alvo causou dano contra o usuário de Retribuição no último turno dele, o Dano Basal da Retribuição aumenta para 4d12+16 Físico."
  },
  "Revelação": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Proveito",
    "efeito": "Os Golpes Normais e Lutadores do usuário agora podem acertar e afetar Fantasmas normalmente. Além disso, o usuário não recebe aumentos às suas Dificuldades de Acurácia em virtude de Golpes inimigos e nem mesmo alvos podem usar suas Evasões de Velocidade contra os Golpes do usuário, mas ainda podem usar suas Evasões de Defesa e de Defesa Especial. Finalmente, o usuário pode diferenciar o ativador de Multiplicar das cópias."
  },
  "Reversão": {
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
        {
          "pvAtuais": "Mais de 70% dos PV Máximos",
          "danoBasal": "1d10+5 Físico"
        },
        {
          "pvAtuais": "36% a 70% dos PV Máximos",
          "danoBasal": "2d10+10 Físico"
        },
        {
          "pvAtuais": "21% a 35% dos PV Máximos",
          "danoBasal": "3d10+10 Físico"
        },
        {
          "pvAtuais": "6% a 20% dos PV Máximos",
          "danoBasal": "4d10+10 Físico"
        },
        {
          "pvAtuais": "1% a 5% dos PV Máximos",
          "danoBasal": "5d10+20 Físico"
        }
      ]
    }
  },
  "Revogação": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Interceptação",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Entrada",
    "efeito": "Revogação só pode afetar um alvo que ainda não agiu naquela rodada. A Revogação garante que o turno do alvo seja o último de toda a rodada."
  },
  "Ringue": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Empurrão 5 (1d6)",
    "acuracia": "Automática",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Pausa",
    "efeito": "Este Golpe só pode ter como alvo um inimigo que atacou o usuário no último turno dele e que já estava adjacente desde então."
  },
  "Rolagem": {
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
        {
          "rodada": "Primeira",
          "danoBasal": "1d10+4 Físico"
        },
        {
          "rodada": "Segunda",
          "danoBasal": "2d10+8 Físico"
        },
        {
          "rodada": "Terceira",
          "danoBasal": "2d10+12 Físico"
        },
        {
          "rodada": "Quarta",
          "danoBasal": "3d10+16 Físico"
        },
        {
          "rodada": "Quinta",
          "danoBasal": "4d10+20 Físico"
        }
      ]
    }
  },
  "Rolo Compressor": {
    "tipo": "Inseto",
    "aptidao": "Vigor",
    "descritores": "Investida",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o alvo for Pequeno, aumente o Dano Basal em +1d10. Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está Atordoado."
  },
  "Ronco": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 5, Som",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão Atordoados. Só é possível usar o Ronco se o usuário estiver Dormindo."
  },
  "Rosnado": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Explosão 5, Som",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos perdem uma Fase de Ataque."
  },
  "Roubo": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "Se o usuário não estiver com nenhum item Mantido, ele rouba o item Mantido do alvo."
  },
  "Rugido": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Som",
    "acuracia": "11",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo foge na direção oposta do usuário deslocando-se 15 metros independentes de seus Deslocamentos permitirem ou não isso. O alvo não poderá fazer nenhum Golpe por quatro rodadas. Se for uma batalha oficial entre humanos, as regras dizem que um pokémon que fugiu deve ser retornado à pokébola e substituído por outro."
  },
  "Rugido do Rei": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 3, Som",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos perdem uma Fase de Ataque e de Ataque Especial."
  },
  "Rugido do Tempo": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "Exaustão, Explosão 10, Prisão",
    "acuracia": "4",
    "danoBasal": "7d10+28 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Cada alvo deve rolar 1d20 uma vez a cada rodada. Se o resultado for 16 ou mais, eles se libertam da Prisão temporal."
  },
  "Ruído": {
    "tipo": "Metal",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 4, Som",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Encerramento",
    "efeito": "Os alvos perdem duas Fases de Defesa Especial."
  },
  "Sabre Ósseo": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d10+4 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco espadadas podem ser feitas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Sacrifício": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Os PV do usuário são imediatamente reduzidos a zero e o inimigo sofre uma quantidade de dano idêntica àquela sofrida pelo usuário. Nenhum item é ativado pelo Sacrifício."
  },
  "Sala das Maravilhas": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por 1d4+1 rodadas, a área é considerada Maravilhosa, o que significa que para cada criatura, sua Defesa e sua Defesa Especial são invertidas. A Sala das Maravilhas não substitui o Clima que havia antes, mas se combina a ele."
  },
  "Sala de Truques": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por 1d4+1 rodadas, a área é considerada Invertida, o que significa que a ordem da iniciativa é totalmente invertida, de modo que o que agiria por último é o primeiro a agir, seguido por aquele que agiria em penúltimo até finalmente aquele que começaria agindo. A Sala de Truques não substitui o Clima que havia antes, mas se combina a ele."
  },
  "Sala Mágica": {
    "tipo": "Psíquico",
    "aptidao": "Ternura",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Diária",
    "tagConcurso": "Sorteio",
    "efeito": "Por 1d4+1 rodadas, a área é considerada Mágica, o que significa que itens não podem ser usados, ativados, consumidos ou funcionar de qualquer outra forma. A Sala Mágica não substitui o Clima que havia antes, mas se combina a ele."
  },
  "Salmoura": {
    "tipo": "Água",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o alvo estiver abaixo da metade dos PV, o Dano Basal da Salmoura aumenta para 5d12+22 Especial."
  },
  "Saltitar": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Excentricidade",
    "efeito": "-"
  },
  "Salvaguarda": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Barreira",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 2",
    "frequencia": "À Vontade",
    "tagConcurso": "Abstração",
    "efeito": "Posicione 10 metros de Barreiras que durarão por cinco rodadas. Se o efeito de um Golpe pode atravessar Barreiras e atravessar a Salvaguarda para causar alguma Condição, a Salvaguarda garante que a Condição não será causada."
  },
  "Sanguessuga": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d6+1 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Proveito",
    "efeito": "O usuário recupera uma quantidade de PV igual à metade do dano causado ao alvo."
  },
  "Seiva": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "O alvo recupera uma quantidade de PV igual ao Ataque do usuário. Depois, o usuário perde uma Fase de Ataque."
  },
  "Selo": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "O alvo está Selado, o que significa que ele não pode usar nenhum Golpe que ele poderia fazer. Não é possível manter mais de um alvo Selado simultaneamente. O usuário permanece Selado até que o usuário deseje libertá-lo ou até que o usuário use o Selo em outro alvo, sem precisar libertar o alvo até o fim do encontro ou após cinco minutos."
  },
  "Semente Bala": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Saraivada",
    "acuracia": "4",
    "danoBasal": "1d10+4 Físico",
    "alcance": "À Distância 8",
    "frequencia": "À Vontade",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco sementes podem ser atiradas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Semente Irritante": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "A Habilidade do alvo é substituída por Insônia. Se ele possui mais de uma Habilidade, determine aleatoriamente qual Habilidade será substituída."
  },
  "Semente Ofuscante": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "5",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "Os alvos perdem uma Fase de Defesa Especial."
  },
  "Semente Sanguessuga": {
    "tipo": "Planta",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Diária",
    "tagConcurso": "Continuação",
    "efeito": "No início de cada turno do alvo, a Semente Sanguessuga remove dele um oitavo de seus Pontos de Vida máximos. Assim continuará até o alvo fugir, desmaiar ou retornar a uma pokébola. O usuário da Semente Sanguessuga recupera uma quantidade de Pontos de Vida igual à quantidade perdida pelo alvo. A Semente Sanguessuga não afeta pokémons do Tipo Planta."
  },
  "Shuriken Aquática": {
    "tipo": "Água",
    "aptidao": "Estilo",
    "descritores": "Interrupção, Saraivada 5",
    "acuracia": "2",
    "danoBasal": "1d6+3 Físico",
    "alcance": "À Distância 7",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Se um inimigo declarar um Golpe, é possível usar a Shuriken Aquática no turno dele antes do Golpe dele. Até cinco Shuriken Aquáticas podem ser atiradas, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Simpatia": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "À Vontade",
    "tagConcurso": "Conquista",
    "efeito": "O alvo perde uma Fase de Ataque."
  },
  "Simplificador": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 7",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Uma das Habilidades do alvo (determinada aleatoriamente se ele possuir mais de uma) é trocada por Mediocridade até o fim do encontro."
  },
  "Sinalizador": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "3d10+12 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Incentivo (0)",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, os alvos estão Confusos."
  },
  "Sino da Cura": {
    "tipo": "Normal",
    "aptidao": "Beleza",
    "descritores": "Explosão 3, Som",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "Todos os alvos são curados de quaisquer Condições."
  },
  "Soco Bala": {
    "tipo": "Metal",
    "aptidao": "Vigor",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se um inimigo declarar o uso de um Golpe, é possível usar o Soco Bala no turno do inimigo imediatamente antes que ele use o Golpe dele."
  },
  "Soco Cometa": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco socos podem ser feitos, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Soco de Drenagem": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "O usuário recupera uma quantidade de PV igual à metade do dano causado."
  },
  "Soco de Fogo": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está com Queimadura."
  },
  "Soco de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, o alvo está Congelado."
  },
  "Soco de Plasma": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Pelo resto da rodada, Golpes Normais se tornam Elétricos."
  },
  "Soco Dinâmico": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "12",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "Deixa o alvo Confuso."
  },
  "Soco do Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, Paralisa o alvo."
  },
  "Soco Energizado": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Eleva uma Fase do Ataque do usuário."
  },
  "Soco Estonteante": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Empurrão 2 (0)",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Se o resultado do Teste de Acurácia for 17 ou mais, o alvo está Confuso."
  },
  "Soco Focalizado": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Empurrão 10 (1d12), Preparo",
    "acuracia": "2",
    "danoBasal": "7d10+28 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Dedicatória",
    "efeito": "Se o alvo se chocar contra um Terreno Bloqueador, ele sofre 2d12, e não apenas 1d12, de dano por isso. O Soco Focalizado exige não ter sido acertado por nenhum Golpe causador de dano desde o momento de declarar seu uso até sua execução na rodada seguinte. Se for acertado por um Golpe durante este período, o usuário do Soco Focalizado perderá sua próxima Ação (aquela em que faria o Soco Focalizado)."
  },
  "Soco Rápido": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Interrupção",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se um inimigo declarar o uso de um Golpe, é possível usar o Soco Rápido no turno do inimigo imediatamente antes que ele use o Golpe dele."
  },
  "Soco Sombrio": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "2d10+8 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Sofrimento Mútuo": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Constrangimento",
    "efeito": "Some os Pontos de Vida do usuário e do alvo. Os Pontos de Vida do usuário e do alvo são agora a metade desta soma, a menos que isso seja maior que os Pontos de Vida máximos de um deles, caso em que o excedente é perdido."
  },
  "Sombra Traiçoeira": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "Interrupção, Investida",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Entrada",
    "efeito": "Se um inimigo for usar um Golpe, é possível usar a Sombra Traiçoeira como uma Interrupção antes do Golpe dele."
  },
  "Sonambulismo": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O usuário usa um Golpe conhecido por ele sorteado aleatoriamente e ignorando as Frequências normais. Só é possível usar o Sonambulismo enquanto Adormecido."
  },
  "Sopro de Gelo": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "10 Especial",
    "alcance": "À Distância 2",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Este Golpe sempre é um Crítico."
  },
  "Sopro do Dragão": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos estão Paralisados."
  },
  "Sua Vez": {
    "tipo": "Inseto",
    "aptidao": "Ternura",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "3d8+10 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário imediatamente retorna à pokébola; um novo pokémon é instantaneamente enviado em seu lugar."
  },
  "Submissão": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Rebote (1/4)",
    "acuracia": "6",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Substituição": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Cobertura",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário perde um quarto de seus PV máximos. Se ele não possui pelo menos um quarto de seus Pontos de Vida, ele não pode usar Substituição. Uma Cobertura é feita possuindo a quantidade de PV perdidas como sua quantidade de PV. Se o usuário seria atingido por algum Golpe, a Cobertura é atingida no lugar. A Cobertura possui o(s) mesmo(s) Tipo(s) e os mesmos Atributos do usuário, mas é imune a todas as Condições. Golpes sonoros (aqueles com o Descritor Som) ignoran a Substituição."
  },
  "Sufocamento": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d6+3 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O usuário e o alvo estão Presos por 1d4+1 rodadas. Uma vez por rodada, no início de cada turno do alvo enquanto Presos, ele sofre 1d12 de dano. A menos que o usuário seja Enorme ou Gigantesco, ele não pode sufocar mais de um alvo simultaneamente."
  },
  "Sujeira": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "Explosão 3",
    "acuracia": "7",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, os alvos estão Envenenados. Aos alvos contra os quais errar a Sujeira, ela ainda causa o Ataque Especial do usuário, mas não o Dano Basal e não pode Envenenar."
  },
  "Superaquecimento": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 2",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde duas Fases de Ataque Especial."
  },
  "Superforça": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Empurrão 8 (0)",
    "acuracia": "4",
    "danoBasal": "3d10+12 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Superpoder": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "Empurrão 6 (1d6), Impacto",
    "acuracia": "2",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "O usuário perde uma Fase de Ataque e de Defesa."
  },
  "Superpresa": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Os Pontos de Vida do alvo são reduzidos à metade da quantidade que estavam antes, excepcionalmente arredondando para cima."
  },
  "Supersônico": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1, Som",
    "acuracia": "11",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos estão Confusos."
  },
  "Supervoadora": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "3",
    "danoBasal": "5d12+22 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Se a Supervoadora errar, o usuário sofre 4d10 de dano."
  },
  "Suporte": {
    "tipo": "Terra",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Modelo",
    "efeito": "O usuário recupera uma quantidade de PV igual à metade de seus Pontos de Vida máximos. Se estiver em uma Tempestade de Areia, ele recupera dois terços dos Pontos de Vida máximos, em vez de apenas metade dos PV máximos."
  },
  "Surfe": {
    "tipo": "Água",
    "aptidao": "Beleza",
    "descritores": "Coluna 4",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "-"
  },
  "Tagarelar": {
    "tipo": "Voador",
    "aptidao": "Ternura",
    "descritores": "Coluna 1, Som",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Reviravolta",
    "efeito": "Os alvos estão Confusos."
  },
  "Tambor de Pança": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "O usuário perde metade de seus PV máximos e então eleva sua Fase de Ataque ao máximo."
  },
  "Tapa": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Tapa Duplo": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "Saraivada 5",
    "acuracia": "4",
    "danoBasal": "1d6+1 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Modéstia",
    "efeito": "Até cinco tapas podem ser dados, mas após o primeiro erro, esta Saraivada acaba."
  },
  "Tática Suja": {
    "tipo": "Noturno",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Dedicatória",
    "efeito": "Tática Suja ignora todas as Fases do alvo, desde o Teste de Acurácia até a rolagem de Dano Basal."
  },
  "Teia de Aranha": {
    "tipo": "Inseto",
    "aptidao": "Perspicácia",
    "descritores": "Prisão",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Diária",
    "tagConcurso": "Abstração",
    "efeito": "-"
  },
  "Teia Elétrica": {
    "tipo": "Elétrico",
    "aptidao": "Beleza",
    "descritores": "Coluna 2",
    "acuracia": "3",
    "danoBasal": "1d10+10 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Os alvos perdem uma Fase de Velocidade."
  },
  "Teia Pegajosa": {
    "tipo": "Inseto",
    "aptidao": "Vigor",
    "descritores": "Ameaça",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Escolha dez metros quadrados dentro do alcance. Todos os quadrados devem estar adjacentes a pelo menos outro quadrado escolhido. Se uma criatura se mover através destes quadrados ou para eles, ela perde uma Fase de Velocidade. Não mais do que uma Fase de Velocidade por turno é perdida para a Teia Pegajosa."
  },
  "Teia Tóxica": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "Coluna 1",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos perdem uma Fase de Velocidade e estão Envenenados."
  },
  "Tela de Luz": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "Barreira",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abstração",
    "efeito": "Posicione 5 metros de Barreiras que durarão por 1d4+1 rodadas posicionadas adjacentes ao usuário enquanto ele se deslocar. Se algum Golpe inimigo tenta ter um alvo através da Barreira, o alvo do Golpe é considerado com duas Fases a mais de Defesa Especial. Quebra Telha não pode destruir a Cortina de Fumaça."
  },
  "Telecinesia": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "Por 1d4+1 rodadas, o alvo é imune a Golpes de Terra e todas as Dificuldades de Acurácia de Golpes feitos contra ele são reduzidas em 5. Os efeitos da Telecinesia não se acumulam, mas é possível renovar a duração usando-a de novo."
  },
  "Teletransporte": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "Interceptação",
    "acuracia": "7",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Entrada",
    "efeito": "O usuário pode se mover 1d10+10 metros, e pode atravessar Terrenos Bloqueadores e Terrenos Acidentados como se fossem Terreno Regular. Quando o Teletransporte não é usado como uma Interceptação, ele dispensa Teste de Acurácia tendo sucesso automaticamente. Quando ele é usado como Interceptação e falha devido ao Teste de Acurácia, o uso não conta como consumo para fins de sua Frequência."
  },
  "Tempestade de Areia": {
    "tipo": "Pedra",
    "aptidao": "Vigor",
    "descritores": "Clima",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Área",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "Por 1d4+1 rodadas, uma Tempestade de Areia toma conta da área, o que significa que aqueles que não possuírem os Tipos Metal, Pedra ou Terra perdem 1/16 de seus Pontos de Vida máximos a cada rodada. Além disso, pokémons de Pedra elevam duas Fases de Defesa Especial durante uma Tempestade de Areia."
  },
  "Tempestade de Folhas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Coluna 2",
    "acuracia": "4",
    "danoBasal": "6d12+22 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Diária",
    "tagConcurso": "Perspectiva",
    "efeito": "O usuário perde duas Fases de Ataque Especial."
  },
  "Tempestade de Magma": {
    "tipo": "Fogo",
    "aptidao": "Vigor",
    "descritores": "Prisão",
    "acuracia": "7",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 8",
    "frequencia": "Diária",
    "tagConcurso": "Modéstia",
    "efeito": "O alvo fica Aprisionado por 1d4+1 rodadas. A cada rodada que ele estiver Aprisionado, no início do turno dele, ele sofre 2d20 de dano."
  },
  "Tempestade de Pétalas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Explosão 4",
    "acuracia": "2",
    "danoBasal": "3d12+19 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Terremoto": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Encerramento",
    "efeito": "O Terremoto pode afetar alvos que estão no subsolo pelo uso de Cavar ou por estarem se movendo por Deslocamento de Escavação."
  },
  "Tiro de Lama": {
    "tipo": "Terra",
    "aptidao": "Vigor",
    "descritores": "Coluna 1",
    "acuracia": "3",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 3",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Pausa",
    "efeito": "Os alvos perdem uma Fase de Velocidade."
  },
  "Tiro Escaldante": {
    "tipo": "Fogo",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Diária",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, o alvo está com Queimadura."
  },
  "Tiro Espelhado": {
    "tipo": "Metal",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "5",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 7",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 16 ou mais, os alvos têm suas Dificuldades de Acurácia aumentadas em 2."
  },
  "Torção": {
    "tipo": "Normal",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "5d12+18 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "O Dano Basal da Torção é reduzido em 1d12 para cada 10% de Pontos de Vida que o alvo possui abaixo de seus PV máximos, até o mínimo de apenas os 18 de dano."
  },
  "Tormento": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Por 1d4+2 rodadas, o Tormento garante que o usuário não repita Golpes usados nas últimas duas rodadas."
  },
  "Tornado de Folhas": {
    "tipo": "Planta",
    "aptidao": "Beleza",
    "descritores": "Explosão 6",
    "acuracia": "4",
    "danoBasal": "3d8+10 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Proveito",
    "efeito": "Se o resultado do Teste de Acurácia for 15 ou mais, os alvos têm suas Dificuldades de Acurácia aumentadas em 1 até o fim do encontro."
  },
  "Toxicidade": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "O alvo é acometido com Veneno Mortal."
  },
  "Transferência": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "Os Atributos Ataque e Defesa do usuário são trocados por 1d8+1 rodadas."
  },
  "Transformação": {
    "tipo": "Normal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Por Encontro",
    "tagConcurso": "Reviravolta",
    "efeito": "O usuário assume a forma do alvo, recebendo seu(s) Tipo(s) e sua(s) Habilidade(s) e aprendendo todos os Golpes conhecidos por ele, bem como assumindo sua altura, seu Tamanho e seu Peso, mas os Atributos do usuário permanecem os seus próprios. O usuário permanece nesta forma até escolher reverter a sua forma original ou até usar Transformação para se tornar alguma outra coisa, sem precisar reverter até o fim do encontro ou após cinco minutos."
  },
  "Transmissibilidade": {
    "tipo": "Psíquico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário transfere de si para o alvo todas as Condições que o afligiam, restaurando-as de si mesmo, mas a Transmissibilidade só é possível se o alvo não possuía as Condições que receberá."
  },
  "Trapaça": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "4d12+16 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "O alvo revela ao usuário seu Atributo Ataque. Em vez de adicionar o Ataque do usuário da Trapaça ao Dano Basal, adicione o Ataque do alvo no lugar."
  },
  "Travessia Fantasmagórica": {
    "tipo": "Fantasma",
    "aptidao": "Estilo",
    "descritores": "Preparo",
    "acuracia": "2",
    "danoBasal": "3d12+19 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Perspectiva",
    "efeito": "Assim que começar a Travessia Fantasmagórica, o usuário desaparece do campo de batalha e seu turno acaba. Isso é considerando o tempo de Preparo. O usuário reaparece adjacente ao alvo no turno seguinte, ignorando quaisquer distâncias por Deslocamentos feitos pelo alvo durante este período, e aí então o Dano Basal é causado."
  },
  "Tremor": {
    "tipo": "Terra",
    "aptidao": "Estilo",
    "descritores": "Explosão 3",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Os alvos perdem uma Fase de Velocidade."
  },
  "Troca": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "O alvo e o usuário trocam seus itens Mantidos."
  },
  "Troca de Bateria": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário imediatamente retorna à pokébola; um novo pokémon é instantaneamente enviado em seu lugar."
  },
  "Troca de Corações": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 25",
    "frequencia": "Diária",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário troca todas as Fases que estavam ativas sobre ele pelas Fases que estavam ativas no alvo e vice-versa. É possível neutralizar Fases."
  },
  "Troca de Defesas": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário troca todas as Fases de Defesa e de Defesa Especial que estavam ativas sobre ele pelas Fases que estavam ativas nos mesmos Atributos do alvo e vice-versa. É possível neutralizar Fases."
  },
  "Troca de Forças": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário troca todas as Fases de Ataque e de Ataque Especial que estavam ativas sobre ele pelas Fases que estavam ativas nos mesmos Atributos do alvo e vice-versa. É possível neutralizar Fases."
  },
  "Troca de Habilidades": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista (0)",
    "efeito": "O usuário troca suas Habilidades e as Habilidades do alvo umas pelas outras, de modo a ganhar as Habilidades do alvo enquanto o alvo recebe as suas Habilidades até o fim do encontro."
  },
  "Troca de Marcha": {
    "tipo": "Metal",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque do usuário e duas Fases de Velocidade do usuário."
  },
  "Troca de Velocidades": {
    "tipo": "Psíquico",
    "aptidao": "Beleza",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Excentricidade",
    "efeito": "O usuário troca todas as Fases de Velocidade que estavam ativas sobre ele pelas Fases que estavam ativas na Velocidade do alvo e vice-versa. É possível neutralizar Fases."
  },
  "Trocar de Lugar": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Sorteio",
    "efeito": "Escolha um aliado voluntário e troque de lugar com ele dentro do campo de batalha. Se um dos dois seria alvo de algum Golpe, o outro é o alvo agora."
  },
  "Trovão": {
    "tipo": "Elétrico",
    "aptidao": "Estilo",
    "descritores": "Empurrão 3 (0), Explosão 3",
    "acuracia": "6",
    "danoBasal": "5d12+18 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abertura",
    "efeito": "Se o resultado do Teste de Acurácia for 13 ou mais, os alvos estão Paralisados. A Dificuldade de Acurácia do Trovão varia conforme o Clima na área alvo, mudando para 11 se o Clima estiver Ensolarado ou para Automática se estiver Chuvoso."
  },
  "Truque": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "",
    "alcance": "À Distância 5",
    "frequencia": "Por Encontro",
    "tagConcurso": "Cobiça",
    "efeito": "Escolha dois alvos para este Golpe. Troque os itens Mantidos dos dois. Se algum dos dois não possuía item Mantido, ele ganha o item Mantido do outro, que fica sem item Mantido."
  },
  "Tumba de Areia": {
    "tipo": "Terra",
    "aptidao": "Perspicácia",
    "descritores": "Prisão",
    "acuracia": "4",
    "danoBasal": "1d12+6 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Continuação",
    "efeito": "O alvo fica Preso por 1d4+1 rodadas. Enquanto Aprisionado, uma vez por rodada no início do turno do alvo, ele sofre 1d20 de dano."
  },
  "Tumba de Pedra": {
    "tipo": "Pedra",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 3",
    "acuracia": "5",
    "danoBasal": "2d8+6 Físico",
    "alcance": "À Distância 6",
    "frequencia": "Por Encontro",
    "tagConcurso": "Pausa",
    "efeito": "Os alvos perdem uma Fase de Velocidade."
  },
  "Uivo": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "À Vontade",
    "tagConcurso": "Clímax",
    "efeito": "Eleva uma Fase de Ataque do usuário."
  },
  "Última Chama": {
    "tipo": "Fogo",
    "aptidao": "Beleza",
    "descritores": "Explosão 5",
    "acuracia": "2",
    "danoBasal": "5d12+22 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Encerramento",
    "efeito": "O usuário perde o Tipo Fogo por uma hora. Se este era o único Tipo do alvo, ele será do Tipo Normal por uma hora."
  },
  "Último Recurso": {
    "tipo": "Normal",
    "aptidao": "Ternura",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "6d12+22 Especial",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Continuação (2d4)",
    "efeito": "O Último Recurso só pode ser empregado se o usuário já tiver usado pelo menos seis Golpes diferentes no encontro."
  },
  "Ultraje": {
    "tipo": "Dragão",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "3",
    "danoBasal": "5d12+18 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Diária",
    "tagConcurso": "Modéstia",
    "efeito": "O usuário do Ultraje repetirá um Golpe idêntico a Ultraje por 1d2 rodadas depois dessa, tendo como alvo a criatura mais próxima e se deslocando para alcançá-la. Se há mais de uma criatura equidistante, é possível escolher a criatura que será o alvo. Após estas duas ou três rodadas de uso seguido de Ultraje, o usuário cessa o Ultraje e está Confuso. Os usos obrigatórios de Ultraje na(s) rodada(s) subsequente(s) à inicial ainda consomem normalmente a Ação de Golpe (ou a Ação Padrão, se for humano)."
  },
  "Vácuo Dimensional": {
    "tipo": "Psíquico",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 4",
    "acuracia": "Automática",
    "danoBasal": "3d10+12 Especial",
    "alcance": "Si",
    "frequencia": "Diária",
    "tagConcurso": "Segurança",
    "efeito": "O Vácuo Dimensional ignora Barreiras e os efeitos de Levantar o Tapete. Se Hoopa estiver em sua forma não confinada, o Vácuo Dimensional se tornará de Trevas e seu Dano Basal mudará para 4d12+16 Físico, mas o fará perder uma Fase de Defesa."
  },
  "Vazio": {
    "tipo": "Noturno",
    "aptidao": "Perspicácia",
    "descritores": "Explosão 10",
    "acuracia": "4",
    "danoBasal": "",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos Adormecem."
  },
  "Venochoque": {
    "tipo": "Venenoso",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "3d8+10 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o alvo estiver Envenenado, o Dano Basal do Venochoque se torna 5d12+22 Especial."
  },
  "Ventania": {
    "tipo": "Voador",
    "aptidao": "Perspicácia",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Este Golpe pode acertar alvos mesmo que eles estejam no ar em consequência de Golpes como Voar ou Queda Livre ignorando a distância, e seu Dano Basal contra estes alvos aumenta para 2d12+16 Especial."
  },
  "Vento Cortante": {
    "tipo": "Voador",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 8",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "Se o resultado do Teste de Acurácia for 18 ou mais, o Vento Cortante é um Crítico."
  },
  "Vento Encantado": {
    "tipo": "Fada",
    "aptidao": "Beleza",
    "descritores": "Coluna 3",
    "acuracia": "2",
    "danoBasal": "1d12+6 Especial",
    "alcance": "À Distância 4",
    "frequencia": "À Vontade",
    "tagConcurso": "Modelo",
    "efeito": "-"
  },
  "Vento Gelado": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Coluna 1",
    "acuracia": "3",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 6",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Pausa",
    "efeito": "Os alvos perdem uma Fase de Velocidade."
  },
  "Vento Nefasto": {
    "tipo": "Fantasma",
    "aptidao": "Beleza",
    "descritores": "Coluna 2, Moral",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Clímax",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, o usuário eleva uma Fase de todos os Atributos, salvo Saúde. Se o resultado do Teste de Acurácia tiver sido 16 ou mais, todos os aliados dentro da área também elevam uma Fase de todos os Atributos (novamente, salvo Saúde) e não sofrem dano pelo Vento Nefasto."
  },
  "Vento Prateado": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "Coluna 2, Moral",
    "acuracia": "2",
    "danoBasal": "2d10+8 Especial",
    "alcance": "À Distância 15",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 11 ou mais, o usuário eleva uma Fase de todos os Atributos, salvo Saúde. Se o resultado do Teste de Acurácia tiver sido 16 ou mais, todos os aliados dentro da área também elevam uma Fase de todos os Atributos (novamente, salvo Saúde) e não sofrem dano pelo Vento Prateado."
  },
  "Vínculo do Destino": {
    "tipo": "Fantasma",
    "aptidao": "Perspicácia",
    "descritores": "Interceptação",
    "acuracia": "Automática",
    "danoBasal": "",
    "alcance": "À Distância 20",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho",
    "efeito": "Se o usuário for acertado por um Golpe e ficar inconsciente por isso, ele pode usar o Vínculo do Destino para rolar 1d20. Se o resultado for 6 ou mais, aquele que o deixou inconsciente perde todos os seus Pontos de Vida, sendo deixado com 0 PV."
  },
  "Vingança": {
    "tipo": "Lutador",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Por Encontro",
    "tagConcurso": "Despedida",
    "efeito": "Se o alvo causou dano ao usuário no último turno dele, o Dano Basal da Vingança se torna 4d12+16."
  },
  "Voadora": {
    "tipo": "Lutador",
    "aptidao": "Estilo",
    "descritores": "Investida",
    "acuracia": "3",
    "danoBasal": "2d10+8 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Segurança",
    "efeito": "Se a Supervoadora errar, o usuário sofre 2d10 de dano."
  },
  "Voar": {
    "tipo": "Voador",
    "aptidao": "Perspicácia",
    "descritores": "Impacto, Preparo",
    "acuracia": "3",
    "danoBasal": "3d12+14 Físico",
    "alcance": "Corpo a Corpo",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Dedicatória",
    "efeito": "No momento que Voar, o usuário ascende aos céus 25 metros. Isso é considerado seu Preparo. Em seu turno seguinte, ele descerá ao chão em descida usando os efeitos do Golpe."
  },
  "Vociferação": {
    "tipo": "Noturno",
    "aptidao": "Vigor",
    "descritores": "Explosão 5, Som",
    "acuracia": "3",
    "danoBasal": "2d10+8 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Conquista",
    "efeito": "Os alvos perdem uma Fase de Ataque Especial."
  },
  "Vômito": {
    "tipo": "Venenoso",
    "aptidao": "Vigor",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "",
    "alcance": "À Distância 8",
    "frequencia": "Por Encontro",
    "tagConcurso": "Abstração",
    "efeito": "O alvo perde a Habilidade dele até o fim do encontro. Se ele possui mais de uma Habilidade, ele perde uma Habilidade definida aleatoriamente."
  },
  "Voz Encantadora": {
    "tipo": "Fada",
    "aptidao": "Ternura",
    "descritores": "Explosão 4, Som",
    "acuracia": "Automática",
    "danoBasal": "1d8+4 Especial",
    "alcance": "Si",
    "frequencia": "Rodada Sim Rodada Não",
    "tagConcurso": "Constrangimento",
    "efeito": "-"
  },
  "Vozeirão": {
    "tipo": "Normal",
    "aptidao": "Estilo",
    "descritores": "Coluna 4, Empurrão 3 (0), Som",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "À Distância 4",
    "frequencia": "Por Encontro",
    "tagConcurso": "Segurança",
    "efeito": "-"
  },
  "Zero Absoluto": {
    "tipo": "Gelo",
    "aptidao": "Beleza",
    "descritores": "Explosão 3",
    "acuracia": "16",
    "danoBasal": "",
    "alcance": "À Distância 4",
    "frequencia": "Diária",
    "tagConcurso": "Desfecho (2d4)",
    "efeito": "Todos os alvos têm seus Pontos de Vida reduzidos a zero."
  },
  "Zumbido": {
    "tipo": "Inseto",
    "aptidao": "Beleza",
    "descritores": "Explosão 3, Som",
    "acuracia": "2",
    "danoBasal": "3d12+14 Especial",
    "alcance": "Si",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": "Se o resultado do Teste de Acurácia for 19 ou mais, Zumbido reduz uma Fase de Defesa Especial."
  },
  "Chicote de Vinha": {
    "tipo": "Planta",
    "aptidao": "Estilo",
    "descritores": "",
    "acuracia": "2",
    "danoBasal": "1d12+6 Físico",
    "alcance": "À Distância 10",
    "frequencia": "À Vontade",
    "tagConcurso": "Segurança",
    "efeito": "-"
  }
}

export default GOLPES_DATA
