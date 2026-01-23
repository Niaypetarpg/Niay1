// Dados de Características e Talentos por Classe/Subclasse
// GERADO AUTOMATICAMENTE A PARTIR DOS ARQUIVOS TXT ORIGINAIS
// NÃO EDITAR MANUALMENTE - Use os arquivos txt como fonte da verdade

// Estrutura das características
export const CARACTERISTICAS_DATA = {
  // ARDENTE
  'Ardente': {
    'Clarão': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Clarão.',
    },
    'Invisibilidade': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você ganha a Capacidade Invisibilidade, mas',
    },
    'Miragem': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você cria uma ilusão visual. Você deve',
    },
    'Multiplicar': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Multiplicar. Você não',
    },
    'Ofuscação': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Ofuscação.',
    },
  },

  // ARTISTA MARCIAL
  'Artista Marcial': {
    'Sensei': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'pokémons e humanos.',
      efeito: 'escolha uma Arte Marcial específica (como',
    },
    'Amortecer': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você sofre dano por um Golpe que você já',
      alvo: 'um pokémon ou um humano.',
      efeito: 'reduza o dano sofrido por seu MA e por seu',
    },
    'Arrojado': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'receba a Habilidade Imprudência.',
    },
    'Fortão': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'pokémons e humanos.',
      efeito: 'quando você faz um teste que adiciona seu',
    },
    'Pontapé': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Pontapé.',
    },
    'Supervoadora': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Supervoadora.',
    },
  },

  // ARTÍFICE
  'Artífice': {
    'Forja': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após dez horas de',
    },
    'Armeiro': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode usar as pedras listadas abaixo como matérias-primas quando criar armas. Uma vez diária,',
    },
    'Aprendiz': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após cinco horas de trabalho cansativo (consumindo 20 PV), role 1d20 + MV. Se o resultado for 20',
    },
    'Artesão': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após cinco horas de trabalho cansativo (consumindo 20 PV), role 1d20 + MV. Se o resultado for 20',
    },
    'Ferraria': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após dez horas de trabalho cansativo (consumindo 20 PV), você cria um objeto que pode ser',
    },
    'Instrumental': {
      frequencia: 'Mensal.',
      referencia: 'E,X',
      efeito: 'após dez horas de trabalho cansativo (consumindo 20 PV), escolha uma Condição entre Confusão,',
    },
    'Perfumaria': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após seis horas de trabalho cansativo (consumindo 20 PV), você cria um Incenso Relaxante, um',
    },
  },

  // ATLETA
  'Atleta': {
    'Porradaria': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Porrada. Se você tiver',
    },
    'Rapidez': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'L,X',
      efeito: 'adicione seu MA aos seus Deslocamentos',
    },
    'Esquiva': {
      frequencia: 'Diária.',
      referencia: 'I,P,X',
      gatilho: 'você é reduzido a inconsciente (0 PV ou',
      efeito: 'você usa o Golpe Detecção.',
    },
    'Ringue': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'L,X',
      gatilho: 'você usa o Golpe Porrada.',
      alvo: 'um pokémon seu.',
      efeito: 'a Dificuldade de Acurácia da Porrada se',
    },
  },

  // AVENTUREIRO
  'Aventureiro': {
    'Arquearia': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      gatilho: 'um pokémon usa um Golpe com o',
      efeito: 'os alvos dos seus ataques de Armas feitos',
    },
    'Escalada': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      efeito: 'você não precisa fazer testes enquanto se',
    },
    'Intuição': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um local não urbano.',
      efeito: 'role 1d20 + MV. Se o resultado for 18 ou',
    },
    'Pacifismo': {
      frequencia: 'Diária. A cada 6 Níveis, receba um uso',
      referencia: 'L, X',
      alvo: 'uma rolagem de Contenção.',
      efeito: 'você se compromete a não usar o pokémon',
    },
    'Sobrevivente': {
      frequencia: 'À Vontade.',
      referencia: 'P, X',
      alvo: 'qualquer material (como madeiro, plástico,',
      efeito: 'role 1d20 + MA + MV. Se o resultado for 18',
    },
  },

  // AZARÃO
  'Azarão': {
    'Capaz': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu que possui pelo menos um',
      efeito: 'aumente em um todas as Capacidades',
    },
  },

  // BANDIDO
  'Bandido': {
    'Ludibriar': {
      frequencia: 'Constante.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'escolha um dos seguintes Golpes: Adulação,',
    },
    'Psique': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'I,P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Pelas Costas.',
    },
    'Afiar': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'uma de suas armas.',
      efeito: 'role 1d20 + MA. Se o resultado for 12 ou',
    },
    'Desespero': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      gatilho: 'você faz um Teste de Acurácia para atacar',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Último Recurso. Só é',
    },
    'Riposta': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'I,P,X',
      gatilho: 'você recebe um ataque de Armas usando',
      efeito: 'role 1d20 + MA. Se o resultado for 16 ou',
    },
    'Roubo': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Roubo. Se você acertar um',
    },
  },

  // BARDO
  'Bardo': {
    'Melodia': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um Lendário que você possa ver.',
      efeito: 'o alvo recupera 100 PV.',
    },
    'Cântico': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Cantiga': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Épica': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Lamento': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Opera': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Réquiem': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Ritual': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
    'Verso': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'assim que declarar o uso deste Talento, seu',
    },
  },

  // BELDADE
  'Beldade': {
    'Beleza': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'quando um pokémon seu',
    },
    'Elegância': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'L,V',
      gatilho: 'um pokémon seu com Beleza 15 usa um',
      efeito: 'eleve uma Fase de Ataque Especial do',
    },
    'Encantadora': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Proteção Mágica',
    },
    'Fabulosa': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, V',
      gatilho: 'um pokémon seu com Beleza 15 usa um',
      efeito: 'o Golpe recebe o Descritor Explosão 2, que',
    },
    'Graça': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Graça Serena até',
    },
    'Sedução': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      efeito: 'todos os seus pokémons com pelo menos',
    },
  },

  // BOTÂNICO
  'Botânico': {
    'Semeador': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'um pokémon se alimenta de uma fruta.',
      alvo: 'um local não urbano.',
      efeito: 'você carrega consigo um vaso portátil usado',
    },
    'Hibridização': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'frutos.',
      efeito: 'quando plantar um fruto em sua Horta,',
    },
  },

  // BRUXO
  'Bruxo': {
    'Ofuscar': {
      frequencia: 'À Vontade.',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Ofuscar. Isso deixa resíduo',
    },
    'Sugestão': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'role 1d20 + MAE. Se o resultado for 20 ou',
    },
    'Choro': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Choro.',
    },
    'Domínio': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você controla completamente o alvo. Você',
    },
    'Encantamento': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'role 1d20 + MAE. Se o resultado for 16 ou',
    },
    'Feitiço': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Feitiço.',
    },
    'Maldição': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Maldição como se fosse do Tipo',
    },
  },

  // CATIVANTE
  'Cativante': {
    'Ternura': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'quando um pokémon seu com pelo menos',
    },
    'Brincadeiras': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com um prêmio em',
      efeito: 'desde que o pokémon ainda não tenha',
    },
    'Delicadeza': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      gatilho: 'um pokémon seu com Ternura 15 usa um',
      efeito: 'eleve uma Fase da Velocidade do pokémon.',
    },
    'Infantilização': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon seu ou um pokémon aliado.',
      efeito: 'role 1d20 + MDE. Se o resultado for 16 ou',
    },
    'Miúdo': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Ligeiro até ser',
    },
    'Subestimado': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Sorte até ser',
    },
  },

  // CAVALEIRO
  'Cavaleiro': {
    'Aderência': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      gatilho: 'você é acertado por um ataque enquanto',
      efeito: 'você obtém sucesso automático em testes',
    },
    'Cavalaria': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'L, X',
      efeito: 'você pode montar um pokémon voluntário',
    },
    'Hipismo': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      efeito: 'enquanto você está montado, sua montaria',
    },
    'Mobilidade': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      alvo: 'um humano aliado que está montado, mas',
      efeito: 'você pode usar a Velocidade da sua',
    },
  },

  // CAÇADOR
  'Caçador': {
    'Arranque': {
      frequencia: 'Constante.',
      gatilho: 'um pokémon seu nocauteia um inimigo.',
      alvo: 'um pokémon seu usando um Golpe que',
      efeito: 'quando um pokémon seu sobe de nível,',
    },
    'Perseguição': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Perseguição.',
    },
  },

  // CIENTISTA
  'Cientista': {
    'Poções': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após certa quantidade de trabalho químico,',
    },
    'Repelentes': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após certa quantidade de trabalho químico,',
    },
    'Concentrados': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após uma hora de trabalho químico, escolha',
    },
    'Éteres': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após quatro horas de trabalho químico,',
    },
    'Elixires': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após quatro horas de trabalho químico,',
    },
    'Magnificadores': {
      frequencia: 'Mensal. A cada 15 Níveis, receba um',
      referencia: 'E,X',
      efeito: 'após dez horas de trabalho químico, você',
    },
    'Remédios': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após trinta minutos de trabalho químico,',
    },
  },

  // COLECIONADOR
  'Colecionador': {
    'Contagem': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você faz um Teste de Captura.',
      efeito: 'de agora em diante, você recebe um Nível',
    },
    'Assistência': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'um aliado faz uma rolagem de Captura.',
      efeito: 'seu aliado pode subtrair sua Contagem do',
    },
    'Camuflagem': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'por um número de rodadas igual a seu MV,',
    },
    'Compulsão': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'I,P,X',
      gatilho: 'você falha em um Teste de Captura.',
      efeito: 'você joga outra pokébola imediatamente.',
    },
    'Cosplay': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      efeito: 'após vinte e quatro horas ininterruptas de',
    },
    'Inabalável': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      gatilho: 'você faz um Teste de Captura.',
      alvo: 'um local não urbano.',
      efeito: 'você e seus pokémons são imunes a efeitos',
    },
    'Rastreador': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'role 1d20 + MV. Se o resultado for 21 ou',
    },
    'Zelo': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'você faz um Teste de Captura em uma',
      efeito: 'subtraia sua Contagem do resultado do',
    },
  },

  // COREÓGRAFA
  'Coreógrafa': {
    'Autor': {
      frequencia: 'Diária.',
      referencia: 'P, V',
      alvo: 'um pokémon seu ou aliado.',
      efeito: 'esta Característica de Classe',
    },
    'Acompanhamento': {
      frequencia: 'Diária.',
      referencia: 'P, V',
      gatilho: 'um pokémon seu está executando um',
      efeito: 'o Golpe usado pode ser usado por qualquer',
    },
    'Deslumbrante': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, V',
      gatilho: 'um pokémon seu está executando um',
      efeito: 'escolha outro Golpe com o Descritor Som',
    },
    'Destacado': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'P, V',
      gatilho: 'um pokémon seu está executando um',
      efeito: 'aqueles que forem atingidos pelo Golpe do',
    },
    'Fortíssimo': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, V',
      gatilho: 'um pokémon seu está executando um',
      alvo: 'um pokémon seu.',
      efeito: 'o pokémon usa o Golpe duas vezes em uma',
    },
    'Vibrato': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      efeito: 'quando um pokémon seu perderia uma ou',
    },
  },

  // COZINHEIRO
  'Cozinheiro': {
    'Calórico': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após cozinhar por quinze minutos (com',
    },
    'Envenenamento': {
      frequencia: 'À Vontade.',
      referencia: 'L,X',
      alvo: 'um Prato ou uma Isca que você está criando.',
      efeito: 'escolha entre Paralisia, Sono ou Veneno.',
    },
    'Herbalismo': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após cozinhar por uma hora (com',
    },
    'Isca': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      efeito: 'após cozinhar por uma hora (com',
    },
    'Liquidificador': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      alvo: 'um Suco.',
      efeito: 'adicione seu MD ao valor do Suco.',
    },
  },

  // CRIADOR
  'Criador': {
    'Chocadeira': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'um ovo seu está chocando.',
      alvo: 'ovos em sua posse.',
      efeito: 'os ovos que você carrega consigo chocam',
    },
    'Ninhada': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      gatilho: 'um pokémon seu sobe de Nível para um',
      alvo: 'pokémons que estão procriando.',
      efeito: 'role 1d4. O resultado é o número de ovos',
    },
    'Zootecnista': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      alvo: 'dois pokémons compatíveis para reprodução',
      efeito: 'dando 8 horas juntos aos dois pokémons,',
    },
  },

  // CÉLIO
  'Célio': {
    'Aerodinâmico': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'enquanto o clima estiver ameno, você é',
    },
    'Carga': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Carga.',
    },
    'Desanuviar': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Desanuviar.',
    },
    'Descarga': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Descarga.',
    },
    'Furacão': {
      frequencia: 'À Vontade.',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Furacão.',
    },
    'Levitação': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um número de voluntários (pokémons e/ou',
      efeito: 'enquanto você está usando Voo, você pode',
    },
    'Relâmpago': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Relâmpago.',
    },
    'Voo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você recebe Deslocamento de Voo igual a',
    },
  },

  // DESCOLADO
  'Descolado': {
    'Estilo': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'quando um pokémon seu com pelo menos',
    },
    'Desafiador': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Agonista até ser',
    },
    'Fitar': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Intimidar até ser',
    },
    'Liderança': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      efeito: 'todos os seus pokémons com pelo menos',
    },
    'Minúcia': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Franco-Atirador',
    },
    'Original': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      gatilho: 'um pokémon seu com Estilo 15 usa um',
      efeito: 'eleve uma Fase de Ataque do pokémon.',
    },
    'Único': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      gatilho: 'um pokémon seu com Estilo 15 usa um',
      efeito: 'o Golpe não pode ser interceptado por',
    },
  },

  // DOMADOR
  'Domador': {
    'Domação': {
      frequencia: 'À Vontade.',
      referencia: 'L,X',
      alvo: 'um pokémon selvagem.',
      efeito: 'você nomeia o alvo sua Presa. Quando',
    },
    'Laçar': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'role 1d20 + MV. Se o resultado for 12 ou',
    },
    'Derrubar': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'você causa dano à sua Presa.',
      alvo: 'um pokémon Laçado ou um humano Laçado.',
      efeito: 'role 1d20 + MV. Quando o alvo é um',
    },
    'Rodeio': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'um pokémon Laçado tenta usar um Golpe.',
      efeito: 'role 1d20 + MV. Se o resultado for 16 ou',
    },
    'Tranquilizante': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'usa o Golpe Bocejo em um alvo a até 30',
    },
  },

  // EMPÁTICO
  'Empático': {
    'Conexão': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'seus pokémons.',
      efeito: 'você entende os pensamentos dos seus',
    },
    'Desejo': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Desejo. Isso deixa resíduo',
    },
    'Repouso': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'após dez minutos, recupere todos os seus',
    },
    'Vínculo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'enquanto você está inconsciente, seus',
    },
  },

  // ENGENHEIRO
  'Engenheiro': {
    'Radar': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você legalmente altera sua própria',
    },
    'Hacker': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode acessar qualquer computador ou',
    },
    'Meteoro': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Meteoro. Óculos Digitalizadores',
    },
    'Perfuração': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Perfuração.',
    },
    'Propulsor': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'após doze horas de trabalho, seu Braço',
    },
    'Robô': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'após dez horas de trabalho cansativo (consumindo 40 PV), você consegue construir um pequeno',
    },
  },

  // ESPECIALISTA
  'Especialista': {
    'Abundância': {
      frequencia: 'Diária.',
      referencia: 'P,V',
      alvo: 'um pokémon.',
      efeito: 'seu pokémon perde metade de seus PV',
    },
    'Superioridade': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'P,V',
      alvo: 'um pokémon inimigo.',
      efeito: 'se o Atributo de Escolha do seu pokémon',
    },
  },

  // ESTILISTA
  'Estilista': {
    'Personalização': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      gatilho: 'um pokémon seu entra em um Concurso.',
      efeito: 'adicione o número de Acessórios feitos por',
    },
    'Estilização': {
      frequencia: 'À Vontade.',
      referencia: 'E,X',
      alvo: 'um item.',
      efeito: 'após trinta minutos de trabalho, o item alvo',
    },
  },

  // ESTRATEGISTA
  'Estrategista': {
    'Batedor': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso diário adicional.',
      referencia: 'P,V',
      gatilho: 'um pokémon seu usa um Golpe com o',
      alvo: 'um pokémon seu.',
      efeito: 'na próxima',
    },
    'Prioridades': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'L,V',
      gatilho: 'um pokémon seu usa um Golpe que tem',
      alvo: 'um pokémon seu com pelo menos uma das',
      efeito: 'o pokémon recupera.',
    },
    'Versatilidade': {
      frequencia: 'Diária.',
      referencia: 'P,V',
      gatilho: 'um pokémon seu usa um Golpe com o',
      alvo: 'um pokémon seu.',
      efeito: 'o alvo pode abdicar do uso de um Golpe',
    },
  },

  // EVOLUCIONISTA
  'Evolucionista': {
    'Elemental': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon adjacente ao qual você causou',
      efeito: 'role 1d20 + MD. Se o resultado for 19 ou',
    },
  },

  // FOTÓGRAFO
  'Fotógrafo': {
    'Avaliação': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'L,X',
      gatilho: 'você usa Arte Fotográfica em um',
      alvo: 'um pokémon.',
      efeito: 'você pode usar o Golpe Revelação no',
    },
    'Flash': {
      frequencia: 'À Vontade.',
      referencia: 'L,X',
      gatilho: 'você ou um aliado é atacado por um',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Clarão. Você pode usar',
    },
    'Incômodo': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon.',
      efeito: 'desde que não tenha feito nenhuma ação',
    },
    'Provocação': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon.',
      efeito: 'desde que não tenha feito nenhuma ação',
    },
  },

  // GUARDIÃO
  'Guardião': {
    'Refletor': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      gatilho: 'você usa Guarda-Costas ou Pelo Time!',
      alvo: 'si.',
      efeito: 'você usa o Golpe Refletor e pode, se quiser,',
    },
    'Reflexos': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'você ou um pokémon canalizado é',
      alvo: 'si.',
      efeito: 'a rolagem de ataque causa dano neutro,',
    },
    'Salvaguarda': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Salvaguarda.',
    },
  },

  // GUERREIRO
  'Guerreiro': {
    'Calejar': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'quando sofrer dano (inclusive por dano',
    },
    'Fachada': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Fachada.',
    },
    'Megassoco': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Megassoco.',
    },
    'Voadora': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Voadora.',
    },
  },

  // HIPNÓLOGO
  'Hipnólogo': {
    'Introjeção': {
      frequencia: 'Semanal.',
      referencia: 'P,X',
      alvo: 'o pokémon que está dormindo e sendo',
      efeito: 'role 1d20 + MDE. Se o resultado for 20 ou',
    },
    'Regressão': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'o pokémon que está dormindo e sendo',
      efeito: 'role 1d20 + MDE. Se o resultado for 16 ou',
    },
    'Vivência': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'receba +3 a quaisquer testes feitos para',
    },
  },

  // ILUSIONISTA
  'Ilusionista': {
    'Imitação': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um humano.',
      efeito: 'role 1d20 + MD. Se o',
    },
    'Indiscernível': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'o humano cuja forma você está imitando no',
      efeito: 'escolha um Talento do alvo. Pelas próximas 24 horas, enquanto você não abandonar a forma do alvo,',
    },
    'Identidade': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'quando você usa Imitação, você pode',
    },
    'Mórfico': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você tem sucesso em usar Imitação.',
      efeito: 'quando você usa Imitação, você pode reter',
    },
    'Ressonância': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'o Talento que você obteve mediante',
      efeito: 'quando usar Imitação em um aliado, você',
    },
    'Transeunte': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você muda sua aparência para uma forma',
    },
    'Voz': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      gatilho: 'você tem sucesso em usar Imitação.',
      efeito: 'você aprende a fazer ilusões sonoras, assim',
    },
  },

  // INQUEBRÁVEL
  'Inquebrável': {
    'Incansável': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      gatilho: 'um de seus pokémons adjacente a você é',
      efeito: 'seus pokémons só',
    },
    'Aparar': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'adicione seu MA à sua Defesa e à sua',
    },
    'Consciente': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você é atingido por um Golpe especial (ou',
      efeito: 'enquanto dorme, você mantêm ciência',
    },
    'Proteção': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'I,P,X',
      gatilho: 'você é atingido por um Golpe.',
      efeito: 'você usa o Golpe Proteção.',
    },
    'Resistência': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'I,P,X',
      gatilho: 'você é atingido por um Golpe.',
      efeito: 'você usa o Golpe Resistência.',
    },
  },

  // LADRÃO
  'Ladrão': {
    'Furto': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon não selvagem com Lealdade',
      efeito: 'você atira uma pokébola usando seu',
    },
  },

  // MALABARISTA
  'Malabarista': {
    'Arremessador': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'seu pokémon fica inconsciente ou um',
      efeito: 'você recebe o Talento Arma de Escolha',
    },
    'Bumerangue': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'acertar o segundo alvo usando Ricochete.',
      efeito: 'o objeto arremessado ricocheteia de volta',
    },
    'Lançamento': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      gatilho: 'você coloca um pokémon seu para fora da',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Lançamento, e qualquer',
    },
    'Ricochete': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      gatilho: 'um objeto (possivelmente uma arma ou',
      alvo: 'seus pokémons',
      efeito: 'o objeto ricocheteia se movendo um',
    },
  },

  // MONGE
  'Monge': {
    'Ioga': {
      frequencia: 'À Vontade.',
      referencia: 'E,X',
      alvo: 'um pokémon.',
      efeito: 'após cinco minutos de meditação, o alvo',
    },
    'Alongamento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      gatilho: 'você usa Ioga.',
      efeito: 'o alvo de Ioga recebe a Habilidade',
    },
    'Contorcionismo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você é imune a Paralisia.',
    },
    'Estímulo': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P,X',
      gatilho: 'você usa Ioga.',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Estímulo.',
    },
    'Iluminação': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'uma criatura adjacente Atordoada ou',
      efeito: 'quando você faz qualquer rolagem que',
    },
    'Relaxamento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      gatilho: 'você usa Ioga.',
      alvo: 'um pokémon ou um humano.',
      efeito: 'o alvo de Ioga recebe a Habilidade Foco',
    },
    'Terapia': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      gatilho: 'você usa Ioga em um humano.',
      efeito: 'escolha um Atributo. O humano recebe +2',
    },
    'Tratamento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'após dez minutos de práticas de iluminação',
    },
  },

  // MÉDICO
  'Médico': {
    'Analgésicos': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano Envenenado ou',
      efeito: 'restaura a Queimadura ou o Veneno.',
    },
  },

  // MÉDIUM
  'Médium': {
    'Acupunturista': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Acupuntura.',
    },
    'Empoderamento': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon canalizado.',
      efeito: 'você perde todas as Fases positivas que',
    },
    'Agilidade': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Agilidade.',
    },
    'Amnésia': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Amnésia.',
    },
    'Conspiração': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Conspiração.',
    },
    'Vegetarianismo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você come uma das seguintes frutas:',
      efeito: 'você terá duas Fases elevadas do Atributo,',
    },
  },

  // MÍSTICO
  'Místico': {
    'Canalizar': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon',
      efeito: 'faça um Teste de',
    },
    'Permissão': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'escolha um Golpe conhecido pelo pokémon',
    },
    'Ancestral': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode identificar as funções e as',
    },
    'Clérigo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode canalizar até três pokémons',
    },
    'Druida': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode falar com plantas que possuam',
    },
    'Esponja': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon adjacente.',
      efeito: 'quando usar Permissão ou Empréstimo,',
    },
    'Misticismo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'adicione o triplo de seu MD a seus Pontos',
    },
    'Profeta': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você tem o conhecimento relacionado a',
    },
    'Vodu': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode fazer duas tentativas de',
    },
  },

  // NEBULOSO
  'Nebuloso': {
    'Cascata': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Cascata.',
    },
    'Nadador': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'adicione seu MAE aos seus Deslocamentos',
    },
    'Neblina': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Neblina.',
    },
    'Nevasca': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Nevasca.',
    },
    'Nevoeiro': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Nevoeiro.',
    },
    'Redemoinho': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Redemoinho.',
    },
    'Respingos': {
      frequencia: 'À Vontade.',
      referencia: 'L,X',
      gatilho: 'você usa um Golpe de Água ou de Gelo.',
      efeito: 'o Golpe acerta um alvo adicional. Se ele',
    },
    'Surfe': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Surfe.',
    },
  },

  // NERD
  'Nerd': {
    'Perspicácia': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu com pelo menos um prêmio em Gincana ou um pokémon aliado com pelo menos um prêmio em Gincana.',
      efeito: 'quando um pokémon seu com pelo menos',
    },
    'Detalhista': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Antecipação até',
    },
    'Escolaridade': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'após dez horas de ensino, o alvo ganha',
    },
    'Intelectualizar': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      gatilho: 'um pokémon seu com Perspicácia 15 usa',
      alvo: 'um pokémon seu ou um pokémon aliado.',
      efeito: 'role 1d20 + MDE. Se o resultado for 16 ou',
    },
  },

  // NINJA
  'Ninja': {
    'Envenenamento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Pó Venenoso. Você pode',
    },
    'Vivacidade': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'para fins de fazer feitos acrobáticos,',
    },
    'Antídotos': {
      frequencia: 'À Vontade.',
      referencia: 'P,V',
      alvo: 'uma criatura adjacente Envenenada.',
      efeito: 'role 1d20 + MD. Se o resultado for 13 ou',
    },
    'Borrão': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'ataques que o tenham como alvo e que por',
    },
    'Desaparecer': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você pode se misturar ao ambiente muito',
    },
    'Farpas': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso diário adicional.',
      referencia: 'P,X',
      alvo: 'um lugar.',
      efeito: 'você usa o Golpe Espinhos ou o Golpe',
    },
    'Multiplicar': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Multiplicar.',
    },
    'Sonífero': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Pó Sonífero, mas como',
    },
    'Venochoque': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Venochoque.',
    },
  },

  // OBSERVADOR
  'Observador': {
    'Escrutínio': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, V',
      alvo: 'um pokémon.',
      efeito: 'role 1d20 + MDE. Se o resultado for 11 ou',
    },
    'Pinceladas': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      efeito: 'você é um pintor e desenhista veloz. É',
    },
    'Psicologia': {
      frequencia: 'À Vontade.',
      referencia: 'P, V',
      gatilho: 'você ouve algo que você suspeita ser uma',
      efeito: 'especifique qual sentença dita pela pessoa',
    },
    'Rastreador': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      efeito: 'quando um pokémon seu faz um teste para',
    },
  },

  // OCULTISTA
  'Ocultista': {
    'Exaltação': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um Lendário.',
      efeito: 'role 1d20 + MAE + MDE. Se o resultado for 16 ou mais, o alvo hesitará em atacar você e seus',
    },
    'Mitologia': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      efeito: 'você sabe qualquer informação sobre',
    },
    'Bênção': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'role 1d20 + o dobro do seu MDE. O alvo',
    },
    'Incorporação': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon leal.',
      efeito: 'o alvo usa um Golpe conhecido pelo',
    },
    'Invocação': {
      frequencia: 'Mensal. A cada 15 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um Lendário aliado.',
      efeito: 'você invoca o Lendário de onde ele estiver.',
    },
    'Milagre': {
      frequencia: 'Semanal. A cada 8 Níveis, receba um',
      referencia: 'L,X',
      gatilho: 'um aliado (pokémon ou humano) falha em',
      efeito: 'o alvo pode refazer aquele Teste de Morte.',
    },
    'Moral': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'pokémons aliados a até um número de',
      efeito: 'escolha um Atributo (salvo Saúde). Eleve',
    },
    'Presságio': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um lugar não urbano.',
      efeito: 'role 1d20 + MDE. Se o resultado for 11 ou',
    },
    'Saudação': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'a área de residência de um Lendário que você',
      efeito: 'role 1d20 + MDE. Se o resultado for 21 ou',
    },
    'Vinculação': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um Lendário aliado.',
      efeito: 'o Lendário está vinculado a você, o que',
    },
  },

  // OFICIAL
  'Oficial': {
    'Encorajamento': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'Frequência: Diária. A cada 5 Níveis, receba um uso',
      gatilho: 'um humano aliado causa dano a um',
      efeito: 'o aliado causa dano extra igual ao seu MA',
    },
    'Status': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      gatilho: 'você causa dano a um inimigo dentro do',
      efeito: 'suas experiências sob forte estresse e em',
    },
    'Inspiração': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, X',
      gatilho: 'você causa dano a um inimigo dentro do',
      efeito: 'um humano aliado recebe Pontos de Vida',
    },
    'Orientação': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um humano aliado.',
      efeito: 'o alvo pode imediatamente executar uma',
    },
    'Pastoreio': {
      frequencia: 'Constante.',
      referencia: 'P, X',
      efeito: 'quando usar Contenção, você pode ter',
    },
    'Reagrupamento': {
      frequencia: 'Diária.',
      efeito: 'se houver pelo menos um Ranger além de',
    },
    'Socorro': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, X',
      gatilho: 'um aliado faz uma rolagem devido a',
      alvo: 'um local.',
      efeito: 'role 1d20 + MA. Se o resultado for 14 ou',
    },
    'Tática': {
      frequencia: 'Diária. A cada 25 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um humano aliado.',
      efeito: 'escolha dois dentre os seguintes Talentos:',
    },
  },

  // ORADOR
  'Orador': {
    'Atrocidade': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Ultraje, mas o Golpe não',
    },
    'Incêndio': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Superaquecimento.',
    },
    'Louvor': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'pokémons canalizados por você podem o',
    },
    'Mímica': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Espelho.',
    },
    'Parasitismo': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Gigadreno.',
    },
    'Tremor': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Terremoto, mas a',
    },
  },

  // PARRUDO
  'Parrudo': {
    'Vigor': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'quando um pokémon seu com pelo menos',
    },
    'Corpulento': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,V',
      alvo: 'um pokémon com Vigor 5.',
      efeito: 'o alvo recebe uma quantidade de Pontos de',
    },
    'Impassível': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      gatilho: 'um pokémon seu com Vigor 15 usa um',
      efeito: 'eleve uma Fase de Defesa do pokémon.',
    },
    'Impenetrável': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'o alvo ganha a Habilidade Armadura até ser',
    },
    'Musculação': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      alvo: 'um pokémon seu com pelo menos um',
      efeito: 'após dez horas de treinamento, o alvo',
    },
    'Teimosia': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon seu ou um pokémon aliado.',
      efeito: 'role 1d20 + MD. Se o resultado for 16 ou',
    },
  },

  // PETROLOGISTA
  'Petrologista': {
    'Arqueologia': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um local não urbano.',
      efeito: 'após trinta minutos de trabalho minucioso,',
    },
    'Cinzelamento': {
      frequencia: 'Mensal.',
      referencia: 'E,X',
      alvo: 'uma pedra ordinária.',
      efeito: 'após dez horas de trabalho, você',
    },
    'Condensação': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'uma Pedra Elemental.',
      efeito: 'a pedra ganha um segundo uso antes de ser',
    },
    'Demolição': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      alvo: 'uma caverna.',
      efeito: 'após três horas de trabalho no subsolo,',
    },
    'Espeleologia': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'uma armadilha de fosso sua.',
      efeito: 'enquanto no subsolo, você sabe se há',
    },
    'Reanimador': {
      frequencia: 'Diária.',
      referencia: 'E,X',
      alvo: 'um fóssil sendo reanimado.',
      efeito: 'após cinco horas de trabalho, você constrói',
    },
    'Ressurreição': {
      frequencia: 'Mensal.',
      referencia: 'E,X',
      alvo: 'um pokémon falecido nas últimas 24 horas.',
      efeito: 'após cinco horas de trabalho, role 1d20 +',
    },
    'Soterramento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      alvo: 'uma armadilha de fosso sua.',
      efeito: 'após dez minutos modificando sua',
    },
  },

  // POLICIAL
  'Policial': {
    'Escâner': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon.',
      efeito: 'quando olha para um pokémon, você vê',
    },
    'Armadura': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'quando sofrer dano por ataques, reduza o',
    },
    'Disparador': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa um dos Golpes a seguir com um',
    },
    'Catalizador': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'uma Pedra Elemental é inserida em seu',
    },
    'Colete': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'quando sofrer dano por ataques, reduza o',
    },
    'Derrubada': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Derrubada.',
    },
    'Proteção': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'I,P,X',
      gatilho: 'você é atingido por um Golpe.',
      efeito: 'você usa o Golpe Proteção.',
    },
    'Pulverizador': {
      frequencia: 'Diária. A cada 6 Níveis, receba um uso',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa um dos Golpes a seguir com um',
    },
    'Resistência': {
      frequencia: 'Diária.',
      referencia: 'I,P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Resistência.',
    },
    'Respirador': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você ativa o Respirador, que permite',
    },
  },

  // PROFESSOR
  'Professor': {
    'Ânimo': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'pokémons aliados a até um número de',
      efeito: 'escolha um Atributo (salvo Saúde). Eleve',
    },
    'Autoconfiança': {
      frequencia: 'Diária.',
      referencia: 'P,V',
      alvo: 'pokémons aliados a até um número de',
      efeito: 'escolha um Atributo (salvo Saúde). O',
    },
    'Desmoralização': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'pokémons inimigos a até um número de',
      efeito: 'escolha um Atributo (salvo Saúde). Os alvos',
    },
    'Eficiência': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,V',
      alvo: 'aliados.',
      efeito: 'durante a próxima rodada do encontro,',
    },
    'Linguista': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      gatilho: 'um pokémon seu teve sucesso em usar',
      efeito: 'escolha uma família de pokémons (o que',
    },
    'Sabotagem': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      gatilho: 'um pokémon seu teve sucesso em usar',
      alvo: 'os pokémons selvagens.',
      efeito: 'role 1d20 + MAE. Se o resultado for 16 ou',
    },
  },

  // PSÍQUICO
  'Psíquico': {
    'Psicocinese': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um objeto cujo peso máximo em quilos não',
      efeito: 'você move o alvo sem tocá-lo um número',
    },
    'Telepatia': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um humano ou um pokémon seu.',
      efeito: 'você pode projetar seus pensamentos',
    },
    'Adaptação': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Adaptação.',
    },
    'Extrassensorial': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Extrassensorial.',
    },
    'Gravidade': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      efeito: 'você usa o Golpe Gravidade.',
    },
    'Mentalismo': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você pode identificar se a mente do alvo foi',
    },
    'Paranormal': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Paranormal.',
    },
    'Refletor': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Refletor.',
    },
    'Teletransporte': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'si.',
      efeito: 'você usa o Golpe Teletransporte.',
    },
  },

  // RANGER
  'Ranger': {
    'Contenção': {
      frequencia: 'À Vontade.',
      referencia: 'P, X',
      alvo: 'um pokémon.',
      efeito: 'Usando seu próprio Estilizador, um Ranger',
    },
    'Parceria': {
      frequencia: 'À Vontade.',
      referencia: 'P, X',
      alvo: 'um pokémon Prestativo que é selvagem.',
      efeito: 'O alvo perde a Condição Prestativo e passa',
    },
    'Ajuda': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um pokémon Parceiro ou Prestativo.',
      efeito: 'por um número de rodadas igual à metade',
    },
    'Ambientalista': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      gatilho: 'você tem sucesso em usar Contenção em',
      efeito: 'o pokémon selvagem tem sucesso',
    },
    'Amigos': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um local.',
      efeito: 'Ao usar este Talento, role 1d20 + MA ou',
    },
    'Autoridade': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      alvo: 'uma rolagem de Contenção.',
      efeito: 'você assume as responsabilidades como um',
    },
    'Recursos': {
      frequencia: 'Semanal.',
      referencia: 'P, X',
      alvo: 'si.',
      efeito: 'você convoca apoio de pelo menos um',
    },
    'Santuário': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um local não urbano.',
      efeito: 'role 1d20 + MA + MV. Se o resultado for 21',
    },
  },

  // RÚNICO
  'Rúnico': {
    'Convocação': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'role 1d20. Se o resultado for 11 ou mais, um',
    },
    'Soletrar': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'até seis Unown.',
      efeito: 'você pode combinar até seis Unown',
    },
    'Banimento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'role 1d20 + MD. Se o resultado for 16 ou',
    },
    'Dicionário': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'o pokémon que você está canalizando.',
      efeito: 'você pode entender qualquer idioma',
    },
    'Portal': {
      frequencia: 'Semanal. A cada 25 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'uma área adjacente desocupada.',
      efeito: 'escolha um local que você já visitou não',
    },
    'Reescrever': {
      frequencia: 'Semanal. A cada 15 Níveis, receba um',
      referencia: 'P,X',
      alvo: 'um Unown palavra.',
      efeito: 'após cinco minutos em um ritual ou em',
    },
    'Runa': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      efeito: 'você inscreve uma Runa na escrita Unown.',
    },
    'Selo': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      gatilho: 'você usa o Talento Poder Oculto.',
      efeito: 'em vez de usar o Poder Oculto',
    },
  },

  // SOLDADO
  'Soldado': {
    'Armado': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você acerta um ataque de Armas com uma',
      efeito: 'as Dificuldades de Acurácia para seus',
    },
    'Égide': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'você obtém um resultado maior que 15',
      efeito: 'enquanto empunhar uma arma, receba +5 à',
    },
    'Matador': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'L,X',
      gatilho: 'você obtém um resultado maior que 15',
      efeito: 'o alvo do ataque fica Confuso.',
    },
    'Sangramento': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'L,X',
      gatilho: 'você obtém um resultado maior que 15',
      efeito: 'o alvo do ataque perde uma Fase de Defesa',
    },
  },

  // SÍNCRONO
  'Síncrono': {
    'Interferência': {
      frequencia: 'Constante.',
      referencia: 'C,V',
      gatilho: 'um de seus dois pokémons adjacentes é',
      alvo: 'um pokémon que foi acertado por dois',
      efeito: 'a Dificuldade da Acurácia do alvo aumenta',
    },
  },

  // TERRULENTO
  'Terrulento': {
    'Escavação': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'um pokémon.',
      efeito: 'você recebe Deslocamento de Escavação',
    },
    'Gigadreno': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Gigadreno.',
    },
    'Materialização': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você recebe a Capacidade Materialização.',
    },
    'Obelisco': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon ou um humano.',
      efeito: 'você usa o Golpe Obelisco.',
    },
    'Transparência': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'você pode enxergar através de areia, terra,',
    },
  },

  // TUTOR
  'Tutor': {
    'Introjeção': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'um de seus pokémons aprende um Golpe',
      efeito: 'você pode posicionar o Golpe aprendido na',
    },
    'Tutorial': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'E,X',
      alvo: 'um pokémon.',
      efeito: 'após quinze minutos treinando e instruindo',
    },
    'Recordador': {
      frequencia: 'Semanal.',
      referencia: 'E,X',
      alvo: 'um pokémon.',
      efeito: 'após quatro horas de trabalho diligente,',
    },
  },

  // VIDENTE
  'Vidente': {
    'Clariaudiência': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'quando você usa Passado Recente, Passado',
    },
    'Clarividência': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      alvo: 'uma ilusão.',
      efeito: 'receba +3 a todas as rolagens envolvidas',
    },
    'Passado': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      alvo: 'o local onde você se encontra ou um objeto.',
      efeito: 'você pode ver o sumário psíquico do que',
    },
    'Psicometria': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'escolha um objeto que serve como foco de',
    },
  },

  // XAMÃ
  'Xamã': {
    'Empréstimo': {
      frequencia: 'Diária.',
      referencia: 'P,X',
      gatilho: 'você deixa uma',
      efeito: 'escolha um Golpe',
    },
    'Possessão': {
      frequencia: 'À Vontade.',
      referencia: 'P,X',
      alvo: 'um pokémon.',
      efeito: 'faça um Teste de Captura para o pokémon',
    },
    'Comunhão': {
      frequencia: 'Por Encontro.',
      referencia: 'L,X',
      efeito: 'se você estiver possuindo um pokémon e',
    },
    'Ferocidade': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      gatilho: 'o pokémon que você está possuindo é',
      efeito: 'quando um pokémon possuído por você usa',
    },
    'Presas': {
      frequencia: 'Diária.',
      referencia: 'L,X',
      gatilho: 'você acerta um Golpe Corpo a Corpo em',
      efeito: 'recupere um número de PV igual à metade',
    },
    'Primitivo': {
      frequencia: 'Constante.',
      referencia: 'C,X',
      efeito: 'o pokémon possuído por você tem seus',
    },
    'Seleção': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P,X',
      gatilho: 'você deixa uma possessão para voltar para',
      efeito: 'escolha uma das seguintes Capacidades:',
    },
  },

  // ARTISTA
  'artista': {
    'Fama': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      efeito: 'seus pokémons recebem 20% de pontos de',
    },
    'Postura': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      alvo: 'um pokémon seu.',
      efeito: 'seus pokémons podem possuir uma soma',
    },
    'Aplausos': {
      frequencia: 'Diária.',
      referencia: 'P, V',
      efeito: 'usa o Golpe Bis.',
    },
    'Clímax': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, V',
      alvo: 'um pokémon seu.',
      efeito: 'o próximo Golpe cuja Frequência seja',
    },
    'Paciência': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, X',
      alvo: 'um pokémon seu.',
      efeito: 'usa o Golpe Revogação.',
    },
    'Perfeccionismo': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, V',
      alvo: 'um pokémon seu.',
      efeito: 'o alvo ganha 30% de experiência extra pelo',
    },
    'Protagonismo': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, V',
      alvo: 'um pokémon seu.',
      efeito: 'o alvo usa imediatamente o Golpe Isca',
    },
  },

  // DE DETETIVE
  'de Detetive': {
    'Arsenal': {
      frequencia: 'Uso Único. A cada 10 Níveis, receba um uso adicional.',
      referencia: 'L, X',
      efeito: 'quando você ativa esta Característica de Classe, escolha um das',
    },
    'Criminologia': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      efeito: 'quando lidando com um suspeito de um crime ou um criminoso, aumente todos os seus Modificadores em 1.',
    },
    'Auxiliar': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      gatilho: 'você ouve algo que você suspeita ser uma',
      alvo: 'um pokémon seu que já recebeu',
      efeito: 'usar este Talento consome sua Ação de',
    },
    'Disfarce': {
      frequencia: 'À Vontade.',
      referencia: 'E, X',
      gatilho: 'você está perseguindo alguém que está',
      alvo: 'uma pessoa que não está em combate e não é hostil a você (ela não precisa estar ciente da sua',
      efeito: 'após dez minutos se arrumando, você cria',
    },
  },

  // ELEMENTALISTA
  'elementalista': {
    'Conversão': {
      frequencia: 'Uso Único. A cada 10 Níveis, receba',
      referencia: 'E, X',
      alvo: 'um pokémon seu.',
      efeito: 'este Talento requer levar o pokémon alvo a',
    },
    'Elementalismo': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, V',
      gatilho: 'um pokémon seu usa um Golpe.',
      alvo: 'um pokémon seu.',
      efeito: 'o Golpe é considerado de seu Tipo de',
    },
  },

  // TALENTOS GERAIS
  'talentos gerais': {
    'Meditação': {
      frequencia: 'À Vontade.',
      referencia: 'L, V',
      gatilho: 'um humano ou pokémon tenta ler sua',
      alvo: 'um pokémon com uma Megapedra.',
      efeito: 'Role 1d20 + MAE ou MDE. Se o resultado',
    },
    'Multitarefa': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      gatilho: 'um humano desafia você para uma',
      efeito: 'você pode executar duas Ações Padrões por',
    },
    'Socorrista': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
      referencia: 'P, X',
      alvo: 'um humano.',
      efeito: 'role 1d20 + MAE ou MDE. Cure um número',
    },
  },

  // TREINADOR
  'treinador': {
    'Afirmação': {
      frequencia: 'Constante.',
      referencia: 'C, V',
      gatilho: 'seu pokémon vence um inimigo ou obtém',
      efeito: 'seu pokémon ganha Pontos de Vida',
    },
    'Capataz': {
      frequencia: 'Constante.',
      referencia: 'C, X',
      alvo: 'um pokémon seu, cujo ataque na ação',
      efeito: 'quando você usa Pressão, Pressão + ou',
    },
    'Foco': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
      referencia: 'P, V',
      alvo: 'um pokémon seu.',
      efeito: 'na próxima vez que seu pokémon usar um',
    },
    'Intimidar': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, X',
      alvo: 'um pokémon.',
      efeito: 'você usa a Habilidade Intimidar no alvo.',
    },
    'Pressão': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
      referencia: 'P, X',
      alvo: 'um pokémon seu adjacente.',
      efeito: 'cause dano ao seu pokémon igual a um',
    },
    'Transpassar': {
      frequencia: 'Diária.',
      referencia: 'L, V',
      gatilho: 'seu pokémon acerta um ataque causador',
      efeito: 'o ataque causa o dano neutro, ignorando',
    },
  },

};

// Estrutura dos talentos
export const TALENTOS_DATA = {
  // ARDENTE
  'Ardente': {
    'Requisitos: dois pokémons de Fogo.': {
      requisitos: 'dois pokémons de Fogo.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: quatro de Ardente (desconte': {
      requisitos: 'quatro Talentos de Ardente (desconte',
    },
    'Requisitos: dois pokémons Fantasmas ou de Noturnos.': {
      requisitos: 'dois pokémons Fantasmas ou de Noturnos.',
    },
    'Requisitos: Nível 15, Bruma de Lava.': {
      requisitos: 'Nível 15, Bruma de Lava.',
    },
    'Requisitos: um pokémon com a Capacidade Invisibilidade.': {
      requisitos: 'um pokémon com a Capacidade Invisibilidade.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon que conhece o Golpe': {
      requisitos: 'um pokémon que conhece o Golpe',
    },
    'Requisitos: Nível 10, Esfera de Sombras.': {
      requisitos: 'Nível 10, Esfera de Sombras.',
    },
  },

  // ARTISTA MARCIAL
  'Artista Marcial': {
    'Requisitos: Arrojado.': {
      requisitos: 'Arrojado.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Vá para Longe!': {
      requisitos: 'Vá para Longe!',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa 18.': {
      requisitos: 'Defesa 18.',
    },
    'Requisitos: Calejar.': {
      requisitos: 'Calejar.',
    },
    'Requisitos: ter sofrido o Golpe Soco de Fogo.': {
      requisitos: 'ter sofrido o Golpe Soco de Fogo.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Durão.': {
      requisitos: 'Durão.',
    },
    'Requisitos: Ataque 20.': {
      requisitos: 'Ataque 20.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Chute Giratório.': {
      requisitos: 'Chute Giratório.',
    },
    'Requisitos: ter sofrido o Golpe Soco Rápido.': {
      requisitos: 'ter sofrido o Golpe Soco Rápido.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Voadora.': {
      requisitos: 'Voadora.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
  },

  // ARTÍFICE
  'Artífice': {
    'Requisitos: ter forjado três armas.': {
      requisitos: 'ter forjado três armas.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Aprendiz.': {
      requisitos: 'Aprendiz.',
    },
    'Frequência: Mensal.': {
      frequencia: 'Mensal.',
    },
    'Requisitos: Armeiro.': {
      requisitos: 'Armeiro.',
    },
    'Requisitos: Artesão.': {
      requisitos: 'Artesão.',
    },
  },

  // ATLETA
  'Atleta': {
    'Requisitos: Defesa 18.': {
      requisitos: 'Defesa 18.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
      efeito: 'você usa o Golpe Retaliação.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque 26.': {
      requisitos: 'Ataque 26.',
    },
    'Requisitos: um pokémon com Força 5.': {
      requisitos: 'um pokémon com Força 5.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 16.': {
      requisitos: 'Ataque 16.',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Trabalhe este Corpo!': {
      requisitos: 'Trabalhe este Corpo!',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
  },

  // AVENTUREIRO
  'Aventureiro': {
    'Requisitos: Nível 10, Arma de Escolha para uma': {
      requisitos: 'Nível 10, Arma de Escolha para uma',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ranger, Velocidade 16.': {
      requisitos: 'Ranger, Velocidade 16.',
    },
    'Frequência: Diária. A cada 6 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 6 Níveis, receba um uso',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
  },

  // AZARÃO
  'Azarão': {
    'Requisitos: Capaz': {
      requisitos: 'Capaz',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Ataque Especial 22, Lapidar Pedra do': {
      requisitos: 'Ataque Especial 22, Lapidar Pedra do',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: ter evitado a evolução de um pokémon': {
      requisitos: 'ter evitado a evolução de um pokémon',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 16, Ataque Especial 16, Força': {
      requisitos: 'Ataque 16, Ataque Especial 16, Força',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Altamente Capaz': {
      requisitos: 'Altamente Capaz',
    },
    'Requisitos: três de Azarão (desconte as': {
      requisitos: 'três Talentos de Azarão (desconte as',
    },
    'Frequência: Diária. A cada 6 Níveis,': {
      frequencia: 'Diária. A cada 6 Níveis,',
    },
  },

  // BANDIDO
  'Bandido': {
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Arma de Escolha para uma arma pequena e real (não ataque desarmado).': {
      requisitos: 'Arma de Escolha para uma arma pequena e real (não ataque desarmado).',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: seis de Bandido (desconte as': {
      requisitos: 'seis Talentos de Bandido (desconte as',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Frequência: Diária. A cada 4 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 4 Níveis, receba um uso',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Ataque 17.': {
      requisitos: 'Ataque 17.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Arma de Escolha.': {
      requisitos: 'Arma de Escolha.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // BARDO
  'Bardo': {
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: sete de Bardo (desconte as': {
      requisitos: 'sete Talentos de Bardo (desconte as',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: cinco de Bardo (desconte as': {
      requisitos: 'cinco Talentos de Bardo (desconte as',
    },
  },

  // BELDADE
  'Beldade': {
    'Requisitos: 1 prêmios em Gincana ou Fisiculturismo.': {
      requisitos: '1 prêmios em Gincana ou Fisiculturismo.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: 1 prêmios em Concurso de Fofura ou Espetáculo.': {
      requisitos: '1 prêmios em Concurso de Fofura ou Espetáculo.',
    },
    'Requisitos: 2 prêmios em Desfiles de Beleza.': {
      requisitos: '2 prêmios em Desfiles de Beleza.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com Beleza 15.': {
      requisitos: 'um pokémon com Beleza 15.',
    },
    'Requisitos: Defesa Especial 18.': {
      requisitos: 'Defesa Especial 18.',
    },
    'Requisitos: Defesa Especial 17.': {
      requisitos: 'Defesa Especial 17.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
  },

  // BOTÂNICO
  'Botânico': {
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: já ter colhido uma das seguintes frutas': {
      requisitos: 'já ter colhido uma das seguintes frutas',
    },
    'Frequência: Diária. A cada 7 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 7 Níveis, receba um uso',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Defesa Especial 18.': {
      requisitos: 'Defesa Especial 18.',
    },
    'Frequência: Semanal. A cada 10 Níveis, receba um': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
    },
    'Requisitos: já ter colhido dez frutos em sua Horta.': {
      requisitos: 'já ter colhido dez frutos em sua Horta.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: quatro de Botânico (desconte as Características de Classe para este cálculo).': {
      requisitos: 'quatro Talentos de Botânico (desconte as Características de Classe para este cálculo).',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Requisitos: um pokémon com um Atributo 30.': {
      requisitos: 'um pokémon com um Atributo 30.',
    },
  },

  // BRUXO
  'Bruxo': {
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Nível 18, Ataque Especial 26, Encantamento.': {
      requisitos: 'Nível 18, Ataque Especial 26, Encantamento.',
    },
    'Requisitos: seis de Bruxo (desconte as': {
      requisitos: 'seis Talentos de Bruxo (desconte as',
    },
    'Requisitos: três de Bruxo (desconte as': {
      requisitos: 'três Talentos de Bruxo (desconte as',
    },
    'Requisitos: quatro de Bruxo (desconte as': {
      requisitos: 'quatro Talentos de Bruxo (desconte as',
    },
    'Requisitos: um pokémon que conhece Maldição.': {
      requisitos: 'um pokémon que conhece Maldição.',
    },
    'Requisitos: um pokémon que conhece Raio de Confusão.': {
      requisitos: 'um pokémon que conhece Raio de Confusão.',
    },
  },

  // CAPTOR
  'Captor': {
    'Requisitos: Velocidade 16.': {
      requisitos: 'Velocidade 16.',
    },
    'Frequência: Por Encontro.': {
      frequencia: 'Por Encontro.',
    },
    'Requisitos: Velocidade 18.': {
      requisitos: 'Velocidade 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Reparar Pokébola.': {
      requisitos: 'Reparar Pokébola.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Velocidade 18, Ponto de Captura +.': {
      requisitos: 'Velocidade 18, Ponto de Captura +.',
    },
    'Requisitos: um pokémon com Corte Falso.': {
      requisitos: 'um pokémon com Corte Falso.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Rastreador Informado.': {
      requisitos: 'Rastreador Informado.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // CATIVANTE
  'Cativante': {
    'Requisitos: 1 prêmios em Espetáculo ou Fisiculturismo.': {
      requisitos: '1 prêmios em Espetáculo ou Fisiculturismo.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: 1 prêmios em Concurso de Beleza ou': {
      requisitos: '1 prêmios em Concurso de Beleza ou',
    },
    'Requisitos: um pokémon com Ternura 15.': {
      requisitos: 'um pokémon com Ternura 15.',
    },
    'Requisitos: 3 prêmios em Concursos de Fofura.': {
      requisitos: '3 prêmios em Concursos de Fofura.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
  },

  // CAVALEIRO
  'Cavaleiro': {
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ranger.': {
      requisitos: 'Ranger.',
    },
    'Requisitos: um pokémon com Deslocamento': {
      requisitos: 'um pokémon com Deslocamento',
    },
    'Frequência: Diária. A cada 25 Níveis, receba um': {
      frequencia: 'Diária. A cada 25 Níveis, receba um',
    },
    'Requisitos: um pokémon com uma das': {
      requisitos: 'um pokémon com uma das',
    },
    'Requisitos: cinco de Cavaleiro (desconte': {
      requisitos: 'cinco Talentos de Cavaleiro (desconte',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: um pokémon com Velocidade 25.': {
      requisitos: 'um pokémon com Velocidade 25.',
    },
  },

  // CAÇADOR
  'Caçador': {
    'Requisitos: Ataque Especial 16, um pokémon com': {
      requisitos: 'Ataque Especial 16, um pokémon com',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Afirmação': {
      requisitos: 'Afirmação',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Sede de Sangue.': {
      requisitos: 'Sede de Sangue.',
    },
    'Requisitos: Ataque 16.': {
      requisitos: 'Ataque 16.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Requisitos: Perseguição.': {
      requisitos: 'Perseguição.',
    },
    'Requisitos: Ataque Especial 18.': {
      requisitos: 'Ataque Especial 18.',
    },
    'Requisitos: Ataque 16, Ataque Especial 14': {
      requisitos: 'Ataque 16, Ataque Especial 14',
    },
    'Requisitos: dois pokémons com Farejar, Olhar': {
      requisitos: 'dois pokémons com Farejar, Olhar',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
  },

  // CIENTISTA
  'Cientista': {
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Éteres.': {
      requisitos: 'Éteres.',
    },
    'Requisitos: Suplementos Defensivos, Suplementos': {
      requisitos: 'Suplementos Defensivos, Suplementos',
    },
    'Frequência: Mensal. A cada 15 Níveis, receba um': {
      frequencia: 'Mensal. A cada 15 Níveis, receba um',
    },
    'Requisitos: um pokémon com Saúde ou Velocidade': {
      requisitos: 'um pokémon com Saúde ou Velocidade 20.',
    },
    'Requisitos: um pokémon com Ataque ou Ataque': {
      requisitos: 'um pokémon com Ataque ou Ataque',
    },
    'Requisitos: um pokémon com Defesa ou Defesa': {
      requisitos: 'um pokémon com Defesa ou Defesa',
    },
    'Requisitos: Defesa Especial 14.': {
      requisitos: 'Defesa Especial 14.',
    },
    'Requisitos: ter usado Melhoradores de': {
      requisitos: 'ter usado Melhoradores de',
    },
    'Requisitos: ter usado Remédios três vezes.': {
      requisitos: 'ter usado Remédios três vezes.',
    },
  },

  // COLECIONADOR
  'Colecionador': {
    'Requisitos: Ponto de Captura ++.': {
      requisitos: 'Ponto de Captura ++.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Peregrino Silencioso.': {
      requisitos: 'Peregrino Silencioso.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Velocidade 16.': {
      requisitos: 'Velocidade 16.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: ter capturado pokémons em quatro biomas diferentes.': {
      requisitos: 'ter capturado pokémons em quatro biomas diferentes.',
    },
    'Requisitos: Rastreador Informado +.': {
      requisitos: 'Rastreador Informado +.',
    },
    'Requisitos: Velocidade 18.': {
      requisitos: 'Velocidade 18.',
    },
  },

  // COZINHEIRO
  'Cozinheiro': {
    'Requisitos: Isca.': {
      requisitos: 'Isca.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
    'Requisitos: Defesa Especial 17.': {
      requisitos: 'Defesa Especial 17.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Defesa 18.': {
      requisitos: 'Defesa 18.',
    },
    'Requisitos: Defesa 14.': {
      requisitos: 'Defesa 14.',
    },
    'Requisitos: Defesa Especial 20.': {
      requisitos: 'Defesa Especial 20.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Vitaminas e Sais Minerais.': {
      requisitos: 'Vitaminas e Sais Minerais.',
    },
  },

  // CRIADOR
  'Criador': {
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Chocadeira, Defesa Especial 19.': {
      requisitos: 'Chocadeira, Defesa Especial 19.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Defesa 16, Defesa Especial 18.': {
      requisitos: 'Defesa 16, Defesa Especial 18.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa Especial 18.': {
      requisitos: 'Defesa Especial 18.',
    },
    'Requisitos: um pokémon que já produziu pelo menos dois ovos.': {
      requisitos: 'um pokémon que já produziu pelo menos dois ovos.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Ninhada, um pokémon que já produziu pelo menos quatro ovos.': {
      requisitos: 'Ninhada, um pokémon que já produziu pelo menos quatro ovos.',
    },
    'Requisitos: seis de Criador (desconte as Características de Classe para este cálculo).': {
      requisitos: 'seis Talentos de Criador (desconte as Características de Classe para este cálculo).',
    },
    'Requisitos: Defesa 17.': {
      requisitos: 'Defesa 17.',
    },
  },

  // CUIDADOR
  'Cuidador': {
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Defesa Especial 20, Arrumando-se.': {
      requisitos: 'Defesa Especial 20, Arrumando-se.',
    },
    'Requisitos: Treinamento em Agilidade.': {
      requisitos: 'Treinamento em Agilidade.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: 2 prêmios em Concursos.': {
      frequencia: '2 prêmios em Concursos.',
    },
    'Requisitos: 3 prêmios em Concursos.': {
      requisitos: '3 prêmios em Concursos.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa 16, Sangue de Vencedores.': {
      requisitos: 'Defesa 16, Sangue de Vencedores.',
    },
    'Requisitos: 2 prêmios em Concursos.': {
      requisitos: '2 prêmios em Concursos.',
    },
  },

  // CÉLIO
  'Célio': {
    'Requisitos: Desanuviar, um pokémon com': {
      requisitos: 'Desanuviar, um pokémon com',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: dois que concedem usos de': {
      requisitos: 'dois Talentos que concedem usos de',
    },
    'Requisitos: dois pokémons Voadores.': {
      requisitos: 'dois pokémons Voadores.',
    },
    'Requisitos: dois pokémons Elétricos.': {
      requisitos: 'dois pokémons Elétricos.',
    },
    'Requisitos: Nível 15, Corte Aéreo.': {
      requisitos: 'Nível 15, Corte Aéreo.',
    },
    'Requisitos: Voo.': {
      requisitos: 'Voo.',
    },
    'Requisitos: Nível 10, Descarga.': {
      requisitos: 'Nível 10, Descarga.',
    },
    'Requisitos: um pokémon com Deslocamento de': {
      requisitos: 'um pokémon com Deslocamento de',
    },
  },

  // DESCOLADO
  'Descolado': {
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: 1 prêmios em Gincana ou Concurso de Fofura.': {
      requisitos: '1 prêmios em Gincana ou Concurso de Fofura.',
    },
    'Requisitos: 1 prêmio em Concurso de Beleza ou de Fisiculturismo.': {
      requisitos: '1 prêmio em Concurso de Beleza ou de Fisiculturismo.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon com Estilo 15.': {
      requisitos: 'um pokémon com Estilo 15.',
    },
    'Requisitos: Defesa Especial 18, 3 prêmios em Concurso de Beleza ou de Fisiculturismo.': {
      requisitos: 'Defesa Especial 18, 3 prêmios em Concurso de Beleza ou de Fisiculturismo.',
    },
  },

  // DOMADOR
  'Domador': {
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com um Golpe com o Descritor Prisão.': {
      requisitos: 'um pokémon com um Golpe com o Descritor Prisão.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon com Supersônico.': {
      requisitos: 'um pokémon com Supersônico.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: um pokémon com Sedução.': {
      requisitos: 'um pokémon com Sedução.',
    },
    'Requisitos: Velocidade 18.': {
      requisitos: 'Velocidade 18.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: um pokémon com Esporos ou Pó Sonífero.': {
      requisitos: 'um pokémon com Esporos ou Pó Sonífero.',
    },
  },

  // EMPÁTICO
  'Empático': {
    'Requisitos: As Profundezas da Mente.': {
      requisitos: 'As Profundezas da Mente.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Psíquico, Ataque Especial 16.': {
      requisitos: 'Psíquico, Ataque Especial 16.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: quatro pokémons seus já subiram pelo': {
      requisitos: 'quatro pokémons seus já subiram pelo',
    },
    'Requisitos: Conexão, Ataque Especial 18.': {
      requisitos: 'Conexão, Ataque Especial 18.',
    },
    'Requisitos: Cura Média, Ataque Especial 18.': {
      requisitos: 'Cura Média, Ataque Especial 18.',
    },
    'Frequência: Diária. A cada 12 Níveis, receba um': {
      frequencia: 'Diária. A cada 12 Níveis, receba um',
    },
    'Requisitos: Cura Maior, Ataque Especial 20.': {
      requisitos: 'Cura Maior, Ataque Especial 20.',
    },
    'Frequência: Diária. A cada 6 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 6 Níveis, receba um uso',
    },
    'Requisitos: Cura Maior.': {
      requisitos: 'Cura Maior.',
    },
    'Requisitos: um pokémon com um Golpe que': {
      requisitos: 'um pokémon com um Golpe que',
    },
    'Requisitos: Ataque Especial 16, Compartilhar': {
      requisitos: 'Ataque Especial 16, Compartilhar',
    },
    'Requisitos: Ataque Especial 16, ter curado Paralisia': {
      requisitos: 'Ataque Especial 16, ter curado Paralisia',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Ataque Especial 16, ter curado Queimadura e/ou Veneno três vezes usando itens ou Talentos.': {
      requisitos: 'Ataque Especial 16, ter curado Queimadura e/ou Veneno três vezes usando itens ou Talentos.',
    },
    'Requisitos: Conexão.': {
      requisitos: 'Conexão.',
    },
  },

  // ENGENHEIRO
  'Engenheiro': {
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // ESPECIALISTA
  'Especialista': {
    'Requisitos: Pressão + ou Pressão Positiva.': {
      requisitos: 'Pressão + ou Pressão Positiva.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: dois pokémons com Naturezas que': {
      requisitos: 'dois pokémons com Naturezas que',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque Especial 18.': {
      requisitos: 'Ataque Especial 18.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon com Atributo de Escolha': {
      requisitos: 'um pokémon com Atributo de Escolha 30.',
    },
    'Requisitos: Nível 10.': {
      requisitos: 'Nível 10.',
    },
    'Requisitos: Ataque 15, Pressão.': {
      requisitos: 'Ataque 15, Pressão.',
    },
    'Requisitos: Ataque Especial 15.': {
      requisitos: 'Ataque Especial 15.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: cinco insígnias ou equivalentes.': {
      requisitos: 'cinco insígnias ou equivalentes.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: 3 insígnias ou equivalentes.': {
      requisitos: '3 insígnias ou equivalentes.',
    },
  },

  // ESTILISTA
  'Estilista': {
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Defesa Especial 18.': {
      requisitos: 'Defesa Especial 18.',
    },
    'Requisitos: Design Volátil.': {
      requisitos: 'Design Volátil.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: ter criado 10 itens com de Estilista.': {
      requisitos: 'ter criado 10 itens com Talentos de Estilista.',
    },
  },

  // ESTRATEGISTA
  'Estrategista': {
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque 14.': {
      requisitos: 'Ataque 14.',
    },
    'Requisitos: seis de Estrategista (desconte': {
      requisitos: 'seis Talentos de Estrategista (desconte',
    },
    'Requisitos: Ataque 14, Ataque Especial 18.': {
      requisitos: 'Ataque 14, Ataque Especial 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
  },

  // EVOLUCIONISTA
  'Evolucionista': {
    'Requisitos: Pedra-Chave Elemental, Recarregar Pedra-Chave, Sobrecarga da Pedra-Chave.': {
      requisitos: 'Pedra-Chave Elemental, Recarregar Pedra-Chave, Sobrecarga da Pedra-Chave.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Defesa 16, Defesa Especial 18.': {
      requisitos: 'Defesa 16, Defesa Especial 18.',
    },
    'Requisitos: Defesa 16, ter evoluído um pokémon usando uma Pedra Elemental.': {
      requisitos: 'Defesa 16, ter evoluído um pokémon usando uma Pedra Elemental.',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
    'Requisitos: Defesa Especial 20.': {
      requisitos: 'Defesa Especial 20.',
    },
  },

  // FOTÓGRAFO
  'Fotógrafo': {
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Incômodo ou Provocação.': {
      requisitos: 'Incômodo ou Provocação.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Defesa Especial 17.': {
      requisitos: 'Defesa Especial 17.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Pesquisa.': {
      requisitos: 'Pesquisa.',
    },
    'Requisitos: cinco de Ardente (desconte as': {
      requisitos: 'cinco Talentos de Ardente (desconte as',
    },
    'Requisitos: Registro Fotográfico.': {
      requisitos: 'Registro Fotográfico.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
  },

  // GUARDIÃO
  'Guardião': {
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Salvaguarda.': {
      requisitos: 'Salvaguarda.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Pelo Time!, cinco outros de': {
      requisitos: 'Pelo Time!, cinco outros Talentos de',
    },
    'Frequência: Diária. A cada 20 Níveis, receba um': {
      frequencia: 'Diária. A cada 20 Níveis, receba um',
    },
    'Requisitos: ter usado Contra-Ataque mediante': {
      requisitos: 'ter usado Contra-Ataque mediante',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: sete de Guardião (desconte as': {
      requisitos: 'sete Talentos de Guardião (desconte as',
    },
    'Frequência: Diária. A cada 25 Níveis, receba um': {
      frequencia: 'Diária. A cada 25 Níveis, receba um',
    },
    'Requisitos: Místico.': {
      requisitos: 'Místico.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter usado Escudo Espelho mediante': {
      requisitos: 'ter usado Escudo Espelho mediante',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: cinco de Guardião (desconte': {
      requisitos: 'cinco Talentos de Guardião (desconte',
    },
  },

  // GUERREIRO
  'Guerreiro': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: ter um pokémon que conhece o Golpe Chute Duplo.': {
      requisitos: 'ter um pokémon que conhece o Golpe Chute Duplo.',
    },
    'Frequência: Diária. A cada 4 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 4 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 15, Defesa 15.': {
      requisitos: 'Ataque 15, Defesa 15.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Velocidade 18.': {
      requisitos: 'Velocidade 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: seis de Guerreiro (desconte as Características de Classe para este cálculo).': {
      requisitos: 'seis Talentos de Guerreiro (desconte as Características de Classe para este cálculo).',
    },
    'Requisitos: Ataque 14, Defesa 14.': {
      requisitos: 'Ataque 14, Defesa 14.',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // GUIA
  'Guia': {
    'Requisitos: cinco de Guia (desconte as': {
      requisitos: 'cinco Talentos de Guia (desconte as',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com Inteligência 5.': {
      requisitos: 'um pokémon com Inteligência 5.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: um pokémon com Força 5.': {
      requisitos: 'um pokémon com Força 5.',
    },
    'Requisitos: Fortaleza!': {
      requisitos: 'Fortaleza!',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon com Salto 4.': {
      requisitos: 'um pokémon com Salto 4.',
    },
    'Frequência: Diária. A cada 4 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 4 Níveis, receba um uso',
    },
    'Requisitos: Fortinho!': {
      requisitos: 'Fortinho!',
    },
    'Requisitos: Espertinho!': {
      requisitos: 'Espertinho!',
    },
  },

  // HIPNÓLOGO
  'Hipnólogo': {
    'Requisitos: Defesa Especial 17.': {
      requisitos: 'Defesa Especial 17.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Habilidade Inconsciente.': {
      requisitos: 'Habilidade Inconsciente.',
    },
    'Requisitos: ter usando com sucesso Materialização': {
      requisitos: 'ter usando com sucesso Materialização',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Habilidade Inconsciente,': {
      requisitos: 'Habilidade Inconsciente,',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Introjeção.': {
      requisitos: 'Introjeção.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // ILUSIONISTA
  'Ilusionista': {
    'Requisitos: três de Ilusionista (desconte': {
      requisitos: 'três Talentos de Ilusionista (desconte',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Mais um Pouquinho!': {
      requisitos: 'Mais um Pouquinho!',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: ter usar Imitação em cinco pessoas que': {
      requisitos: 'ter usar Imitação em cinco pessoas que',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Defesa 18.': {
      requisitos: 'Defesa 18.',
    },
    'Requisitos: cinco de Ilusionista (desconte': {
      requisitos: 'cinco Talentos de Ilusionista (desconte',
    },
  },

  // INCUBADOR
  'Incubador': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
    'Requisitos: Defesa Especial 18, Paleta de Atitudes.': {
      requisitos: 'Defesa Especial 18, Paleta de Atitudes.',
    },
    'Frequência: Por Encontro.': {
      frequencia: 'Por Encontro.',
    },
    'Requisitos: Defesa Especial 20.': {
      requisitos: 'Defesa Especial 20.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
  },

  // INQUEBRÁVEL
  'Inquebrável': {
    'Requisitos: Ataque 18, Ataque Especial 16.': {
      requisitos: 'Ataque 18, Ataque Especial 16.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ainda de Pé!.': {
      requisitos: 'Ainda de Pé!.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 15.': {
      requisitos: 'Ataque 15.',
    },
    'Requisitos: Aparar.': {
      requisitos: 'Aparar.',
    },
    'Requisitos: três pokémons com Defesa Especial 25.': {
      requisitos: 'três pokémons com Defesa Especial 25.',
    },
    'Requisitos: um pokémon com Proteção.': {
      requisitos: 'um pokémon com Proteção.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: um pokémon com Resistência.': {
      requisitos: 'um pokémon com Resistência.',
    },
    'Requisitos: três pokémons com Defesa 25.': {
      requisitos: 'três pokémons com Defesa 25.',
    },
  },

  // LADRÃO
  'Ladrão': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: ter um pokémon de Gelo capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon de Gelo capturado mediante Furto ou Furto +.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: ter um pokémon Lutador capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon Lutador capturado mediante Furto ou Furto +.',
    },
    'Requisitos: ter um pokémon de Fogo capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon de Fogo capturado mediante Furto ou Furto +.',
    },
    'Requisitos: ter um pokémon capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon capturado mediante Furto ou Furto +.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: ter um pokémon com Lealdade 4 capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon com Lealdade 4 capturado mediante Furto ou Furto +.',
    },
    'Requisitos: ter um pokémon Elétrico capturado mediante Furto ou Furto +.': {
      requisitos: 'ter um pokémon Elétrico capturado mediante Furto ou Furto +.',
    },
    'Requisitos: ter um pokémon com Lealdade 3': {
      requisitos: 'ter um pokémon com Lealdade 3',
    },
  },

  // MALABARISTA
  'Malabarista': {
    'Requisitos: Ricochete.': {
      requisitos: 'Ricochete.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Velocidade 18.': {
      requisitos: 'Velocidade 18.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Como um Raio!': {
      requisitos: 'Como um Raio!',
    },
    'Frequência: Por Encontro.': {
      frequencia: 'Por Encontro.',
    },
    'Requisitos: quatro de Malabarista (desconte as Características de Classe para este cálculo).': {
      requisitos: 'quatro Talentos de Malabarista (desconte as Características de Classe para este cálculo).',
    },
  },

  // MONGE
  'Monge': {
    'Requisitos: Exercícios Revigorantes.': {
      requisitos: 'Exercícios Revigorantes.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Técnica Milenar.': {
      requisitos: 'Técnica Milenar.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Contorcionismo.': {
      requisitos: 'Contorcionismo.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
  },

  // MÉDICO
  'Médico': {
    'Requisitos: Defesa 15.': {
      requisitos: 'Defesa 15.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Defesa 18.': {
      requisitos: 'Defesa 18.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Defesa 20.': {
      requisitos: 'Defesa 20.',
    },
    'Requisitos: Não Morrerá Comigo Aqui!.': {
      requisitos: 'Não Morrerá Comigo Aqui!.',
    },
    'Requisitos: quatro de Médico (desconte as Características de Classe para este cálculo).': {
      requisitos: 'quatro Talentos de Médico (desconte as Características de Classe para este cálculo).',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Analgésicos.': {
      requisitos: 'Analgésicos.',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
    'Frequência: Diária. A cada 9 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 9 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
  },

  // MÉDIUM
  'Médium': {
    'Requisitos: ter usado Agilidade ou Polimento mediante Permissão.': {
      requisitos: 'ter usado Agilidade ou Polimento mediante Permissão.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: ter usado Amnésia mediante Permissão.': {
      requisitos: 'ter usado Amnésia mediante Permissão.',
    },
    'Requisitos: ter usado dois Golpes que elevam': {
      requisitos: 'ter usado dois Golpes que elevam',
    },
    'Requisitos: ter usado Brilho ou Conspiração': {
      requisitos: 'ter usado Brilho ou Conspiração',
    },
    'Requisitos: ter usado Dança das Espadas mediante Permissão.': {
      requisitos: 'ter usado Dança das Espadas mediante Permissão.',
    },
    'Requisitos: ter usado um dos seguintes Golpes': {
      requisitos: 'ter usado um dos seguintes Golpes',
    },
    'Requisitos: já ter comido uma das seguintes frutas:': {
      requisitos: 'já ter comido uma das seguintes frutas:',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: cinco de Médium (desconte as': {
      requisitos: 'cinco Talentos de Médium (desconte as',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: seis de Médium (desconte as': {
      requisitos: 'seis Talentos de Médium (desconte as',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: oito de Médium (desconte as': {
      requisitos: 'oito Talentos de Médium (desconte as',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
  },

  // MÍSTICO
  'Místico': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: um pokémon com Lealdade 4.': {
      requisitos: 'um pokémon com Lealdade 4.',
    },
    'Requisitos: Canalizar Amigo, Defesa 17.': {
      requisitos: 'Canalizar Amigo, Defesa 17.',
    },
    'Requisitos: Nível 10.': {
      requisitos: 'Nível 10.',
    },
    'Requisitos: ter usado Permissão para usar um': {
      requisitos: 'ter usado Permissão para usar um',
    },
    'Requisitos: Canalizar Amigo.': {
      requisitos: 'Canalizar Amigo.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Clérigo.': {
      requisitos: 'Clérigo.',
    },
  },

  // NEBULOSO
  'Nebuloso': {
    'Requisitos: Dança da Chuva ou Granizo.': {
      requisitos: 'Dança da Chuva ou Granizo.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: dois pokémons de Água.': {
      requisitos: 'dois pokémons de Água.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: cinco de Nebuloso (desconte': {
      requisitos: 'cinco Talentos de Nebuloso (desconte',
    },
    'Requisitos: dois pokémon de Gelo.': {
      requisitos: 'dois pokémon de Gelo.',
    },
    'Requisitos: um pokémon com Deslocamento de': {
      requisitos: 'um pokémon com Deslocamento de',
    },
    'Requisitos: Nível 15, Estaca de Gelo.': {
      requisitos: 'Nível 15, Estaca de Gelo.',
    },
    'Requisitos: Nível 10, Cascata.': {
      requisitos: 'Nível 10, Cascata.',
    },
  },

  // NERD
  'Nerd': {
    'Requisitos: 1 prêmios em Concurso de Beleza ou Espetáculo.': {
      requisitos: '1 prêmios em Concurso de Beleza ou Espetáculo.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: 1 prêmios em Concurso de Fofura ou de Fisiculturismo.': {
      requisitos: '1 prêmios em Concurso de Fofura ou de Fisiculturismo.',
    },
    'Frequência: Mensal.': {
      frequencia: 'Mensal.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com Perspicácia 15.': {
      requisitos: 'um pokémon com Perspicácia 15.',
    },
  },

  // NINJA
  'Ninja': {
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: um pokémon Venenoso.': {
      requisitos: 'um pokémon Venenoso.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
      efeito: 'você usa o Golpe Venochoque.',
    },
    'Requisitos: Ataque 16.': {
      requisitos: 'Ataque 16.',
    },
    'Frequência: Diária. A cada 4 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 4 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso diário adicional.': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso diário adicional.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: cinco de Ninja (desconte as Características de Classe para este cálculo).': {
      requisitos: 'cinco Talentos de Ninja (desconte as Características de Classe para este cálculo).',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Borrão, Velocidade 15.': {
      requisitos: 'Borrão, Velocidade 15.',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
  },

  // OBSERVADOR
  'Observador': {
    'Frequência: Diária. A cada 20 Níveis, receba um': {
      frequencia: 'Diária. A cada 20 Níveis, receba um',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Planejamento.': {
      requisitos: 'Planejamento.',
    },
    'Requisitos: Rastreador.': {
      requisitos: 'Rastreador.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Defesa Especial 18.': {
      requisitos: 'Defesa Especial 18.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: um pokémon com a Capacidade Faro.': {
      requisitos: 'um pokémon com a Capacidade Faro.',
    },
  },

  // OCULTISTA
  'Ocultista': {
    'Requisitos: ter se aliado a um Lendário.': {
      requisitos: 'ter se aliado a um Lendário.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Defesa Especial 18, Bênção.': {
      requisitos: 'Defesa Especial 18, Bênção.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Professor, Linguista.': {
      requisitos: 'Professor, Linguista.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Vinculação, estar vinculado a um Lendário.': {
      requisitos: 'Vinculação, estar vinculado a um Lendário.',
    },
    'Frequência: Semanal. A cada 10 Níveis, receba um': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
    },
    'Frequência: Mensal. A cada 15 Níveis, receba um': {
      frequencia: 'Mensal. A cada 15 Níveis, receba um',
    },
    'Frequência: Semanal. A cada 8 Níveis, receba um': {
      frequencia: 'Semanal. A cada 8 Níveis, receba um',
    },
    'Requisitos: Coordenação.': {
      requisitos: 'Coordenação.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter usado Exaltação uma vez.': {
      requisitos: 'ter usado Exaltação uma vez.',
    },
    'Requisitos: Vinculação, estar vinculado a um': {
      requisitos: 'Vinculação, estar vinculado a um',
    },
  },

  // OFICIAL
  'Oficial': {
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Contenção Aprimorada +.': {
      requisitos: 'Contenção Aprimorada +.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: seis de Oficial (desconte as': {
      requisitos: 'seis Talentos de Oficial (desconte as',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ao Meu Sinal!, Inspiração, Orientação.': {
      requisitos: 'Ao Meu Sinal!, Inspiração, Orientação.',
    },
    'Frequência: Diária. A cada 25 Níveis, receba um': {
      frequencia: 'Diária. A cada 25 Níveis, receba um',
    },
  },

  // ORADOR
  'Orador': {
    'Requisitos: ter usado um dos seguintes Golpes': {
      requisitos: 'ter usado um dos seguintes Golpes',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: já ter consumido 5000 PV de Lendários': {
      requisitos: 'já ter consumido 5000 PV de Lendários',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: já ter consumido 1000 PV de Lendários': {
      requisitos: 'já ter consumido 1000 PV de Lendários',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: já ter consumido 500 PV de Lendários': {
      requisitos: 'já ter consumido 500 PV de Lendários',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: já ter consumido 300 PV de Lendários': {
      requisitos: 'já ter consumido 300 PV de Lendários',
    },
    'Requisitos: ter usado Hiper-Raio mediante': {
      requisitos: 'ter usado Hiper-Raio mediante',
    },
  },

  // PARRUDO
  'Parrudo': {
    'Requisitos: 1 prêmios em Concurso de Beleza ou de Fofura.': {
      requisitos: '1 prêmios em Concurso de Beleza ou de Fofura.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: 1 prêmios em Gincana ou Espetáculo.': {
      requisitos: '1 prêmios em Gincana ou Espetáculo.',
    },
    'Requisitos: um pokémon com Vigor 5.': {
      requisitos: 'um pokémon com Vigor 5.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: um pokémon com Vigor 15.': {
      requisitos: 'um pokémon com Vigor 15.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Defesa 16.': {
      requisitos: 'Defesa 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
  },

  // PETROLOGISTA
  'Petrologista': {
    'Requisitos: Cavar e Cavar.': {
      requisitos: 'Cavar e Cavar.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Condensação.': {
      requisitos: 'Condensação.',
    },
    'Frequência: Mensal.': {
      frequencia: 'Mensal.',
    },
    'Frequência: Semanal. A cada 10 Níveis, receba um': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter visitado três cavernas diferentes.': {
      requisitos: 'ter visitado três cavernas diferentes.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Reanimador.': {
      requisitos: 'Reanimador.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
  },

  // POKÉBOLISTA
  'Pokébolista': {
    'Requisitos: Trabalho Manual.': {
      requisitos: 'Trabalho Manual.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Ferreiro de Pokébolas.': {
      requisitos: 'Ferreiro de Pokébolas.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Semanal. A cada 10 Níveis, receba um': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
    },
  },

  // POLICIAL
  'Policial': {
    'Requisitos: Colete.': {
      requisitos: 'Colete.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Diária. A cada 6 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 6 Níveis, receba um uso',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
  },

  // PROFESSOR
  'Professor': {
    'Requisitos: Coordenação.': {
      requisitos: 'Coordenação.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ânimo.': {
      requisitos: 'Ânimo.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Nível 10, Coordenação.': {
      requisitos: 'Nível 10, Coordenação.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Técnica Coordenada.': {
      requisitos: 'Técnica Coordenada.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: Planejamento.': {
      requisitos: 'Planejamento.',
    },
  },

  // PSÍQUICO
  'Psíquico': {
    'Requisitos: Ataque Especial 15.': {
      requisitos: 'Ataque Especial 15.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Sala de Truques.': {
      requisitos: 'Sala de Truques.',
    },
    'Requisitos: um pokémon que conhece o Golpe Refletor.': {
      requisitos: 'um pokémon que conhece o Golpe Refletor.',
    },
    'Requisitos: Ataque Especial 15, um pokémon que': {
      requisitos: 'Ataque Especial 15, um pokémon que',
    },
  },

  // RANGER
  'Ranger': {
    'Requisitos: Nível 10, uma das Classes a seguir:': {
      requisitos: 'Nível 10, uma das Classes a seguir:',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter usado Contenção em um pokémon': {
      requisitos: 'ter usado Contenção em um pokémon',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: reconhecido pela execução de um': {
      requisitos: 'reconhecido pela execução de um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Contenção Aprimorada.': {
      requisitos: 'Contenção Aprimorada.',
    },
    'Requisitos: Velocidade 15.': {
      requisitos: 'Velocidade 15.',
    },
    'Requisitos: Autoridade.': {
      requisitos: 'Autoridade.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: ter um Parceiro consigo há pelo menos': {
      requisitos: 'ter um Parceiro consigo há pelo menos',
    },
    'Frequência: Uso Único. A cada 10 Níveis, receba': {
      frequencia: 'Uso Único. A cada 10 Níveis, receba',
    },
  },

  // RÚNICO
  'Rúnico': {
    'Requisitos: cinco de Rúnico (desconte as': {
      requisitos: 'cinco Talentos de Rúnico (desconte as',
    },
    'Frequência: Diária. A cada 20 Níveis, receba um': {
      frequencia: 'Diária. A cada 20 Níveis, receba um',
    },
    'Requisitos: 21 Unown.': {
      requisitos: '21 Unown.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: 14 Unown.': {
      requisitos: '14 Unown.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Semanal. A cada 25 Níveis, receba um': {
      frequencia: 'Semanal. A cada 25 Níveis, receba um',
    },
    'Frequência: Semanal. A cada 15 Níveis, receba um': {
      frequencia: 'Semanal. A cada 15 Níveis, receba um',
    },
    'Requisitos: Poder Oculto.': {
      requisitos: 'Poder Oculto.',
    },
  },

  // SOLDADO
  'Soldado': {
    'Frequência: Diária. A cada 10 Níveis, receba um uso diário adicional.': {
      frequencia: 'Diária. A cada 10 Níveis, receba um uso diário adicional.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque 18.': {
      requisitos: 'Ataque 18.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: quatro de Soldado (desconte as Características de Classe para este cálculo).': {
      requisitos: 'quatro Talentos de Soldado (desconte as Características de Classe para este cálculo).',
    },
    'Requisitos: Ataque 16, cinco de Soldado (desconte as Características de Classe para este cálculo).': {
      requisitos: 'Ataque 16, cinco Talentos de Soldado (desconte as Características de Classe para este cálculo).',
    },
    'Frequência: Diária. A cada 20 Níveis, receba um': {
      frequencia: 'Diária. A cada 20 Níveis, receba um',
    },
    'Requisitos: Ataque 16.': {
      requisitos: 'Ataque 16.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 17, quatro de Soldado (desconte as Características de Classe para este cálculo).': {
      requisitos: 'Ataque 17, quatro Talentos de Soldado (desconte as Características de Classe para este cálculo).',
    },
  },

  // SÍNCRONO
  'Síncrono': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Interferência.': {
      requisitos: 'Interferência.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa 22.': {
      requisitos: 'Defesa 22.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Por um Amigo.': {
      requisitos: 'Por um Amigo.',
    },
    'Requisitos: Combo!': {
      requisitos: 'Combo!',
    },
  },

  // TERRULENTO
  'Terrulento': {
    'Requisitos: dois que concedem usos de': {
      requisitos: 'dois Talentos que concedem usos de',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: dois pokémons de Pedra.': {
      requisitos: 'dois pokémons de Pedra.',
    },
    'Requisitos: um pokémon com um Deslocamento': {
      requisitos: 'um pokémon com um Deslocamento',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: dois pokémons de Planta.': {
      requisitos: 'dois pokémons de Planta.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com Materialização.': {
      requisitos: 'um pokémon com Materialização.',
    },
    'Requisitos: Nível 10, Deslizamento de Rochas.': {
      requisitos: 'Nível 10, Deslizamento de Rochas.',
    },
    'Requisitos: cinco de Terrulento (desconte': {
      requisitos: 'cinco Talentos de Terrulento (desconte',
    },
    'Requisitos: Nível 15, Gigadreno.': {
      requisitos: 'Nível 15, Gigadreno.',
    },
    'Requisitos: Nível 10, Materialização.': {
      requisitos: 'Nível 10, Materialização.',
    },
  },

  // TUTOR
  'Tutor': {
    'Requisitos: Defesa Especial 20.': {
      requisitos: 'Defesa Especial 20.',
    },
    'Frequência: Uso Único.': {
      frequencia: 'Uso Único.',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Frequência: Mensal.': {
      frequencia: 'Mensal.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: um pokémon com Ataque Especial 30.': {
      requisitos: 'um pokémon com Ataque Especial 30.',
    },
    'Requisitos: um pokémon com Ataque 30.': {
      requisitos: 'um pokémon com Ataque 30.',
    },
    'Requisitos: Recordador.': {
      requisitos: 'Recordador.',
    },
    'Requisitos: Defesa Especial 17, ter usado a Característica de Classe Tutorial três vezes com sucesso.': {
      requisitos: 'Defesa Especial 17, ter usado a Característica de Classe Tutorial três vezes com sucesso.',
    },
    'Frequência: Semanal.': {
      frequencia: 'Semanal.',
    },
    'Requisitos: Recordador, Inventor de Técnicas.': {
      requisitos: 'Recordador, Inventor de Técnicas.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Defesa Especial 16 e um dos seguintes- Instrução de Efeito, Instrução Especial ou Instrução Física.': {
      requisitos: 'Defesa Especial 16 e um dos seguintes- Instrução de Efeito, Instrução Especial ou Instrução Física.',
    },
    'Requisitos: ter usado a Característica de Classe Tutorial cinco vezes.': {
      requisitos: 'ter usado a Característica de Classe Tutorial cinco vezes.',
    },
  },

  // VIDENTE
  'Vidente': {
    'Requisitos: Buscador de Formas.': {
      requisitos: 'Buscador de Formas.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Buscador de Almas.': {
      requisitos: 'Buscador de Almas.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Ataque Especial 17.': {
      requisitos: 'Ataque Especial 17.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Requisitos: Clariaudiência, Clarividência.': {
      requisitos: 'Clariaudiência, Clarividência.',
    },
    'Requisitos: Passado, Ataque Especial 19.': {
      requisitos: 'Passado, Ataque Especial 19.',
    },
  },

  // XAMÃ
  'Xamã': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Frequência: Por Encontro.': {
      frequencia: 'Por Encontro.',
    },
    'Requisitos: seis de Xamã (desconte as': {
      requisitos: 'seis Talentos de Xamã (desconte as',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: quatro de Xamã (desconte as': {
      requisitos: 'quatro Talentos de Xamã (desconte as',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: um pokémon leal que já evoluiu pelo': {
      requisitos: 'um pokémon leal que já evoluiu pelo',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
  },

  // ARTISTA
  'artista': {
    'Requisitos: Defesa Especial 17.': {
      requisitos: 'Defesa Especial 17.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Defesa Especial 16.': {
      requisitos: 'Defesa Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Defesa Especial 15, 2 prêmios em': {
      requisitos: 'Defesa Especial 15, 2 prêmios em',
    },
    'Requisitos: Clímax.': {
      requisitos: 'Clímax.',
    },
    'Requisitos: 2 prêmios em Concursos.': {
      requisitos: '2 prêmios em Concursos.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: 3 prêmios em Concursos.': {
      requisitos: '3 prêmios em Concursos.',
    },
    'Frequência: Semanal. A cada 10 Níveis, receba um': {
      frequencia: 'Semanal. A cada 10 Níveis, receba um',
    },
    'Requisitos: Velocidade 16.': {
      requisitos: 'Velocidade 16.',
    },
  },

  // DE DETETIVE
  'de Detetive': {
    'Requisitos: Treinamento Investigativo.': {
      requisitos: 'Treinamento Investigativo.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter solucionado um caso.': {
      requisitos: 'ter solucionado um caso.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Disfarce.': {
      requisitos: 'Disfarce.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: um pokémon com Lealdade 3.': {
      requisitos: 'um pokémon com Lealdade 3.',
    },
    'Frequência: Uso Único. A cada 10 Níveis, receba': {
      frequencia: 'Uso Único. A cada 10 Níveis, receba',
    },
  },

  // ELEMENTALISTA
  'elementalista': {
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: Alma Elemental.': {
      requisitos: 'Alma Elemental.',
    },
    'Frequência: À Vontade.': {
      frequencia: 'À Vontade.',
    },
    'Requisitos: Mudança de Tipo.': {
      requisitos: 'Mudança de Tipo.',
    },
    'Frequência: Uso Único. A cada 10 Níveis, receba': {
      frequencia: 'Uso Único. A cada 10 Níveis, receba',
    },
    'Requisitos: Mudança Elemental.': {
      requisitos: 'Mudança Elemental.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: Elementalismo.': {
      requisitos: 'Elementalismo.',
    },
    'Requisitos: Ataque Especial 15.': {
      requisitos: 'Ataque Especial 15.',
    },
  },

  // TREINADOR
  'treinador': {
    'Requisitos: Ataque 14.': {
      requisitos: 'Ataque 14.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: Ataque 16, Ataque Especial 16.': {
      requisitos: 'Ataque 16, Ataque Especial 16.',
    },
    'Requisitos: Ataque 18, Ataque Especial 18, Ataques': {
      requisitos: 'Ataque 18, Ataque Especial 18, Ataques',
    },
    'Requisitos: Pressão +.': {
      requisitos: 'Pressão +.',
    },
    'Requisitos: Ataque Especial 15.': {
      requisitos: 'Ataque Especial 15.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: Ataque 15.': {
      requisitos: 'Ataque 15.',
    },
    'Requisitos: Crítica Construtiva.': {
      requisitos: 'Crítica Construtiva.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: Ataque 16, Ataque Especial 14.': {
      requisitos: 'Ataque 16, Ataque Especial 14.',
    },
    'Frequência: Diária. A cada 5 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 5 Níveis, receba um uso',
    },
    'Requisitos: 8 insígnias.': {
      requisitos: '8 insígnias.',
    },
    'Requisitos: Ataque Especial 16.': {
      requisitos: 'Ataque Especial 16.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
  },

  // ÁUGERE
  'Áugere': {
    'Requisitos: quatro de Áugure (desconte as Características de Classe para este cálculo), Ataque 18.': {
      requisitos: 'quatro Talentos de Áugure (desconte as Características de Classe para este cálculo), Ataque 18.',
    },
    'Frequência: Constante.': {
      frequencia: 'Constante.',
    },
    'Requisitos: ter visto o Golpe Esfera da Aura ser usado.': {
      requisitos: 'ter visto o Golpe Esfera da Aura ser usado.',
    },
    'Frequência: Diária. A cada 15 Níveis, receba um': {
      frequencia: 'Diária. A cada 15 Níveis, receba um',
    },
    'Requisitos: ter sofrido o Golpe Expansão da Aura.': {
      requisitos: 'ter sofrido o Golpe Expansão da Aura.',
    },
    'Frequência: Semanal. A cada 15 Níveis, receba um': {
      frequencia: 'Semanal. A cada 15 Níveis, receba um',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um uso diário adicional.': {
      frequencia: 'Diária. A cada 10 Níveis, receba um uso diário adicional.',
    },
    'Requisitos: ter sofrido o Golpe Pulso d’Água.': {
      requisitos: 'ter sofrido o Golpe Pulso d’Água.',
    },
    'Frequência: Diária. A cada 10 Níveis, receba um': {
      frequencia: 'Diária. A cada 10 Níveis, receba um',
    },
    'Requisitos: ter sofrido o Golpe Pulso do Dragão.': {
      requisitos: 'ter sofrido o Golpe Pulso do Dragão.',
    },
    'Requisitos: ter sofrido o Golpe Pulso Sombrio.': {
      requisitos: 'ter sofrido o Golpe Pulso Sombrio.',
    },
    'Requisitos: um pokémon que conhece o Golpe Soco de Drenagem.': {
      requisitos: 'um pokémon que conhece o Golpe Soco de Drenagem.',
    },
    'Frequência: Diária.': {
      frequencia: 'Diária.',
    },
    'Requisitos: ter sofrido o Golpe Soco de Fogo.': {
      requisitos: 'ter sofrido o Golpe Soco de Fogo.',
    },
    'Frequência: Diária. A cada 8 Níveis, receba um uso': {
      frequencia: 'Diária. A cada 8 Níveis, receba um uso',
    },
    'Requisitos: ter sofrido o Golpe Soco de Gelo.': {
      requisitos: 'ter sofrido o Golpe Soco de Gelo.',
    },
    'Frequência: Diária. A cada 18Níveis, receba um uso': {
      frequencia: 'Diária. A cada 18Níveis, receba um uso',
    },
    'Requisitos: ter sofrido o Golpe Soco do Trovão.': {
      requisitos: 'ter sofrido o Golpe Soco do Trovão.',
    },
    'Requisitos: ter sofrido o Golpe Soco Sombrio.': {
      requisitos: 'ter sofrido o Golpe Soco Sombrio.',
    },
    'Requisitos: um pokémon que conhece o Golpe Tela de Luz.': {
      requisitos: 'um pokémon que conhece o Golpe Tela de Luz.',
    },
  },

};
