import { useState, useEffect } from 'react'
import { Camera, Plus, Minus, Crown, X, Moon, Sun, User, Lock, Sword, Heart, Search, Trash2, Smile, BookOpenText, Zap, BookA, CircleDot, Webhook, Coins, Backpack, ArrowBigRightDash, ArrowBigLeftDash, Info, ChevronDown, ChevronRight, Wrench, Sparkles, CornerLeftDown, CornerRightUp, LifeBuoy, BatteryCharging, ShieldPlus, Users, ShoppingBag, Package, BarChart3, ChevronLeft, BadgeHelp, Clover, Shell, Snowflake, Flame, Droplet, Edit, ArrowRightCircle, PlusCircle, HandMetal, MapPin } from 'lucide-react'
import pokedexData from './pokemonData'
import GOLPES_DATA_IMPORTED from './golpesData'
import HABILIDADES_DATA_IMPORTED, { HABILIDADES_NAMES as HABILIDADES_NAMES_IMPORTED } from './habilidadesData'
import CARACTERISTICAS_DATA_IMPORTED, { TALENTOS_DATA as TALENTOS_DATA_IMPORTED, TALENTOS_NAMES as TALENTOS_NAMES_IMPORTED } from './caracteristicasETalentosData'

// Cores dos tipos de Pokémon
const TYPE_COLORS = {
  'Normal': '#A8A878',
  'Fogo': '#F08030',
  'Água': '#6890F0',
  'Elétrico': '#F8D030',
  'Planta': '#78C850',
  'Gelo': '#98D8D8',
  'Lutador': '#C03028',
  'Venenoso': '#A040A0',
  'Terrestre': '#E0C068',
  'Voador': '#A890F0',
  'Psíquico': '#F85888',
  'Inseto': '#A8B820',
  'Pedra': '#B8A038',
  'Fantasma': '#705898',
  'Dragão': '#7038F8',
  'Sombrio': '#705848',
  'Metal': '#B8B8D0',
  'Fada': '#EE99AC'
}

// Tabela XP por nível (1-100)
const XP_TABLE = {
  1: 0, 2: 25, 3: 50, 4: 100, 5: 150, 6: 200, 7: 400, 8: 600, 9: 800, 10: 1000,
  11: 1500, 12: 2000, 13: 3000, 14: 4000, 15: 5000, 16: 6000, 17: 7000, 18: 8000, 19: 9000, 20: 10000,
  21: 11500, 22: 13000, 23: 14500, 24: 16000, 25: 17500, 26: 19000, 27: 20500, 28: 22000, 29: 23500, 30: 25000,
  31: 27500, 32: 30000, 33: 32500, 34: 35000, 35: 37500, 36: 40000, 37: 42500, 38: 45000, 39: 47500, 40: 50000,
  41: 55000, 42: 60000, 43: 65000, 44: 70000, 45: 75000, 46: 80000, 47: 85000, 48: 90000, 49: 95000, 50: 100000,
  51: 110000, 52: 120000, 53: 130000, 54: 140000, 55: 150000, 56: 160000, 57: 170000, 58: 180000, 59: 190000, 60: 200000,
  61: 210000, 62: 220000, 63: 230000, 64: 240000, 65: 250000, 66: 260000, 67: 270000, 68: 280000, 69: 290000, 70: 300000,
  71: 310000, 72: 320000, 73: 330000, 74: 340000, 75: 350000, 76: 360000, 77: 370000, 78: 380000, 79: 390000, 80: 400000,
  81: 410000, 82: 420000, 83: 430000, 84: 440000, 85: 450000, 86: 460000, 87: 470000, 88: 480000, 89: 490000, 90: 500000,
  91: 510000, 92: 520000, 93: 530000, 94: 540000, 95: 550000, 96: 560000, 97: 570000, 98: 580000, 99: 590000, 100: 600000
}

// Mapeamento de estilos de tipos Pokémon
const TYPE_STYLES = {
  'Normal': 'bg-pink-400',
  'normal': 'bg-pink-400',
  'Norma': 'bg-pink-400',
  'Fogo': 'bg-gradient-to-r from-orange-500 to-red-600',
  'Água': 'bg-blue-900',
  'água': 'bg-blue-900',
  'Planta': 'bg-green-700',
  'Elétrico': 'bg-yellow-400 text-gray-900',
  'Gelo': 'bg-blue-300 text-gray-900',
  'Lutador': 'bg-gradient-to-r from-pink-400 to-yellow-700',
  'Veneno': 'bg-gradient-to-r from-green-500 to-purple-600',
  'Venenoso': 'bg-gradient-to-r from-green-500 to-purple-600',
  'Terra': 'bg-yellow-700',
  'Voador': 'bg-gradient-to-r from-blue-400 to-white',
  'Psíquico': 'bg-gradient-to-r from-purple-300 to-purple-700',
  'Inseto': 'bg-gradient-to-r from-purple-500 to-green-500',
  'Pedra': 'bg-gray-500',
  'Fantasma': 'bg-gradient-to-r from-purple-700 to-black',
  'Dragão': 'bg-gradient-to-r from-blue-600 to-orange-500',
  'Sombrio': 'bg-black',
  'Noturno': 'bg-black',
  'Metal': 'bg-gradient-to-r from-slate-300 to-blue-400',
  'Fada': 'bg-gradient-to-r from-pink-400 via-purple-400 via-purple-300 to-yellow-300'
}

// Lista de espécies Pokémon - gerada dinamicamente do pokemonData
const POKEMON_SPECIES = pokedexData.map(p => p.nome).sort()

// Dados de Descritores
const DESCRITORES_DATA = [
  {
    nome: "Ameaça",
    efeito: "Este Golpe posiciona um efeito que cobre uma parte do campo de batalha. Alguns destes Golpes permitem usos subsequentes para tornar o terreno ainda mais perigoso."
  },
  {
    nome: "Barreira",
    efeito: "Uma Barreira é criada no campo de batalha. O comprimento da Barreira em metros é especificado após o Descritor. A Barreira pode ser contínua ou dividida em várias partes, mas uma parte não pode estar mais distante de um metro da mais próxima. A menos que especificado o contrário, a altura da Barreira é de dois metros e a espessura dela é de alguns centímetros, mas é possível acumular Barreiras vertical e horizontalmente para que fiquem mais altas ou espessas, respectivamente. Ao fim do encontro (ou em cinco minutos), as Barreiras desaparecem. Cada Barreira determinará se é possível ou não se deslocar através dela ou se é possível ou não mirar Golpes através dela."
  },
  {
    nome: "Clima",
    efeito: "O Clima é alterado para uma área."
  },
  {
    nome: "Cobertura",
    efeito: "Uma Cobertura encobre o alvo com uma camada de algum material, concedendo normalmente efeitos benéficos. Não é possível acumular os efeitos de mais de uma Cobertura simultaneamente. Se uma Cobertura concede resistência a um Tipo de dano, o alvo sofre metade do dano que normalmente sofreria por aquele Tipo de dano."
  },
  {
    nome: "Coluna",
    efeito: "Uma Coluna pode afetar várias criaturas e sempre será um Golpe À Distância. Para construir a área, desenhe uma linha do usuário do Golpe até um ponto dentro do alcance máximo. Depois crie um retângulo a partir desta linha, com largura igual ao valor especificado após o Descritor. As criaturas no retângulo serão afetadas."
  },
  {
    nome: "Dança",
    efeito: "Uma Dança deve ser feita."
  },
  {
    nome: "Empurrão",
    efeito: "Um Empurrão desloca o alvo um número de metros especificado após o Descritor se acertar. A direção para a qual o alvo é deslocado é a direção oposta do usuário do Empurrão. O alvo sofrerá dano extra – apresentado entre parênteses após o número de metros empurrado – se colidir com um Terreno Bloqueador e se colidir com outra criatura, caso em que ambos sofrem este dano. Dano sofrido em virtude do Empurrão (como por se chocar com algo ou por queda) é considerado sem Tipo sempre causando dano padrão, e não se aplicam os Atributos Defesa ou Defesa Especial."
  },
  {
    nome: "Exaustão",
    efeito: "Após usar o Golpe, o usuário está cansado e por isso não poderá usar Ações na rodada seguinte (ele ainda pode ser retornado à pokébola)."
  },
  {
    nome: "Explosão",
    efeito: "Uma Explosão pode afetar várias criaturas, especificamente todas as criaturas em uma área circular com centro no alvo. O raio do círculo é especificado após o Descritor."
  },
  {
    nome: "Impacto",
    efeito: "Um Impacto só pode ser usado se o usuário se deslocou em direção ao alvo durante a rodada. É possível se deslocar para longe do alvo e depois de volta no mesmo turno, desde que seu Deslocamento seja suficiente."
  },
  {
    nome: "Interceptação",
    efeito: "Uma Interceptação pode ser usada durante a ação de oponentes. Normalmente ela possuirá uma situação que permite ativá-la. Se nenhuma situação for especificada, ela pode ser usada quando quiser. Enquanto Interceptações podem ser usadas como Ação Livre fora de seu turno, não será possível usar sua Ação de Golpe naquela rodada."
  },
  {
    nome: "Interrupção",
    efeito: "Uma Interrupção pode ser usada durante a ação de oponentes. Normalmente ela possuirá uma situação que permite ativá-la. Se nenhuma situação for especificada, ela pode ser usada quando quiser. Enquanto Interrupções podem ser usadas como Ação Livre fora de seu turno, não será possível usar nenhuma Ação naquela rodada. Salvo para usar Finta, não é possível usar uma Interrupção contra Interceptações ou Interrupções."
  },
  {
    nome: "Investida",
    efeito: "Uma Investida pode afetar várias criaturas, especificamente uma linha reta de todo o Deslocamento. O usuário se desloca em linha reta o máximo de seu Deslocamento. Todas as criaturas atravessadas são acertadas, contudo a Dificuldade de Acurácia do Golpe aumenta em 2 para cada alvo além do primeiro. O usuário da Investida não pode terminar o seu Deslocamento em um local ocupado."
  },
  {
    nome: "Moral",
    efeito: "O efeito de um Golpe que afeta a Moral funcionará tendo o Golpe acertado ou errado."
  },
  {
    nome: "Preparo",
    efeito: "Um Golpe que precisa de Preparo demorará para ser ativado. Quando um destes Golpes é declarado, o turno do usuário imediatamente acaba. Na rodada seguinte, e consumindo a Ação de Golpe (ou Ação Padrão, se for um humano), o Golpe ocorrerá. Se o usuário do Golpe mudar de ideia sobre o que fazer durante a rodada de preparo, ele não é obrigado a continuar a executar o Golpe na rodada seguinte."
  },
  {
    nome: "Prisão",
    efeito: "Uma Prisão previne a fuga. Um alvo Preso não pode fugir, ser convocado de volta à pokébola nem se deslocar. Ele se liberta caso aquele que criou a Prisão vá embora, fique inconsciente ou seja convocado à pokébola."
  },
  {
    nome: "Rebote",
    efeito: "Um Rebote é um Golpe que possui consequências negativas ao próprio usuário, ou seja, que causará dano aousuário no processo. A quantidade de dano é proporcional ao dano causado (como metade, um terço, ou semelhantes), e não se somam danos por Condições ou por Empurrão. Este dano é considerado sem Tipo (sempre causando dano padrão) e não se aplicam Atributos Defesa ou Defesa Especial."
  },
  {
    nome: "Saraivada",
    efeito: "Uma Saraivada é um Golpe constituído de vários pequenos ataques – como múltiplos dardos ou socos. Cada Saraivada possui um número de ataques especificado após o Descritor e cada um destes ataques é resolvido como ataques separados para todos os fins: para cada um é feito um Teste de Acurácia – ativando quaisquer efeitos dependentes de Testes de Acurácia normalmente – e uma rolagem de dano própria – adicionando Ataque ou Ataque Especial e subtraindo Defesa e Defesa Especial normalmente."
  },
  {
    nome: "Som",
    efeito: "Este Golpe depende da produção de Som."
  }
]

// Dados de Tags de Concurso
const TAGS_CONCURSO_DATA = [
  {
    nome: "Abertura",
    pontuacaoBasal: "2d4",
    efeito: "+2d4 à Pontuação se for o primeiro da rodada."
  },
  {
    nome: "Abstração",
    pontuacaoBasal: "2d4",
    efeito: "A Expectativa do Jurado não poderá ser aumentada durante aquela rodada."
  },
  {
    nome: "Clímax",
    pontuacaoBasal: "0",
    efeito: "Dobre a Pontuação que ganhar na próxima rodada."
  },
  {
    nome: "Cobiça",
    pontuacaoBasal: "0",
    efeito: "Reduza à metade a Pontuação do competidor que Pontuou imediatamente antes e adicione a quantidade reduzida à sua Pontuação."
  },
  {
    nome: "Conquista",
    pontuacaoBasal: "2d4",
    efeito: "A Expectativa do Jurado não poderá ser reduzida durante aquela rodada."
  },
  {
    nome: "Constrangimento",
    pontuacaoBasal: "2d4",
    efeito: "Independentemente da Aptidão do Golpe, ele sempre reduz em 1 a Expectativa de todos os Jurados."
  },
  {
    nome: "Continuação",
    pontuacaoBasal: "0",
    efeito: "A Pontuação deste Golpe é 1d4 se for o primeiro ou o segundo da rodada; 2d4 se for o terceiro ou o quarto da rodada; ou 3d4 se for o último da rodada."
  },
  {
    nome: "Dedicatória",
    pontuacaoBasal: "1d4",
    efeito: "+3d4 se nenhum outro competidor escolheu o mesmo Jurado naquela rodada."
  },
  {
    nome: "Desfecho",
    pontuacaoBasal: "0",
    efeito: "A Pontuação deste Golpe se torna 15d4 se todos os competidores se apresentaram para o mesmo jurado. Só é possível usar um Golpe com este Descritor se o competidor for o quarto ou quinto na ordem da rodada."
  },
  {
    nome: "Despedida",
    pontuacaoBasal: "2d4",
    efeito: "Dobre a Pontuação se estiver na última rodada da Apelação."
  },
  {
    nome: "Encerramento",
    pontuacaoBasal: "2d4",
    efeito: "+2d4 à Pontuação se for o último da rodada."
  },
  {
    nome: "Entrada",
    pontuacaoBasal: "2d4",
    efeito: "Na próxima rodada, o competidor será o primeiro da rodada."
  },
  {
    nome: "Especial",
    pontuacaoBasal: "-",
    efeito: "Na próxima rodada, o competidor poderá escolher sua posição na ordem da rodada."
  },
  {
    nome: "Excentricidade",
    pontuacaoBasal: "2d4",
    efeito: "A Pontuação deste Golpe é Xd4, em que X é igual a 6 - a Expectativa do Jurado antes do Golpe."
  },
  {
    nome: "Extravagância",
    pontuacaoBasal: "-",
    efeito: "Independentemente da Aptidão do Golpe, ele sempre aumenta em 1 a Expectativa de todos os Jurados."
  },
  {
    nome: "Incentivo",
    pontuacaoBasal: "2d4",
    efeito: "+2d4 se o Golpe aumentar a Expectativa."
  },
  {
    nome: "Modelo",
    pontuacaoBasal: "0",
    efeito: "A Pontuação deste Golpe é Xd4, em que X é a Expectativa do Jurado antes do Golpe."
  },
  {
    nome: "Modéstia",
    pontuacaoBasal: "2d4",
    efeito: "Este Golpe pode ser usado várias rodadas seguidas e ainda obter o benefício de +1d4, desde que seja da Aptidão associada ao Concurso."
  },
  {
    nome: "Originalidade",
    pontuacaoBasal: "-",
    efeito: "Independentemente da Aptidão do Golpe, ele sempre aumenta em 2 a Expectativa do Jurado."
  },
  {
    nome: "Pausa",
    pontuacaoBasal: "2d4",
    efeito: "Na próxima rodada, o competidor será o último da rodada."
  },
  {
    nome: "Perspectiva",
    pontuacaoBasal: "2d4",
    efeito: "+3d4 se a Expectativa do Jurado atingiu a Expectativa máxima durante a rodada."
  },
  {
    nome: "Proveito",
    pontuacaoBasal: "1d4",
    efeito: "+3d4 à Pontuação se houve algum aumento de Expectativa nas últimas duas rodadas da Apelação."
  },
  {
    nome: "Reviravolta",
    pontuacaoBasal: "1d4",
    efeito: "+3d4 à Pontuação se possuir a menor Pontuação."
  },
  {
    nome: "Segurança",
    pontuacaoBasal: "3d4",
    efeito: "-"
  },
  {
    nome: "Sorteio",
    pontuacaoBasal: "2d4",
    efeito: "Na próxima rodada, a ordem será necessariamente sorteada."
  },
  {
    nome: "Surpresa",
    pontuacaoBasal: "2d4",
    efeito: "Este Golpe sempre é o primeiro da rodada, ignorando a ordem."
  }
]

// Dados de Atributos e Perícias
const ATRIBUTOS_PERICIAS_DATA = [
  {
    nome: "Saúde",
    explicacao: "Saúde serve um propósito especial, diferente dos outros cinco Atributos. A Saúde não possui Modificador. Em vez disso, ela é um Atributo que determina seus Pontos de Vida máximos, calculados da seguinte forma: (Nível + Saúde) multiplicado por 4. Como a Saúde sequer possui um Modificador, as Perícias de Saúde são competências possuídas. Não é necessário fazer rolagens delas:",
    pericias: [
      { nome: "Apneia", descricao: "Você pode prender sua respiração por até cinco minutos." },
      { nome: "Imunidade", descricao: "Seu sistema imunológico é muito eficiente. Você recebe apenas três quartos do dano que normalmente receberia por Queimaduras ou Venenos. Além disso, ao fazer testes para a Confusão, Congelamento, Paralisia ou Sono, receba +2 às rolagens." },
      { nome: "Jejum", descricao: "Sem esta Perícia, um humano pode sobreviver até quatro dias sem água e até duas semanas sem comida. Com esta Perícia, um personagem pode aguentar até uma semana sem água e até um mês sem comida." },
      { nome: "Resiliência", descricao: "Resiliência está ligada à durabilidade diante do trabalho físico. Você não corre o risco de perder Pontos de Vida mesmo após horas correndo, nadando ou trabalhando." }
    ]
  },
  {
    nome: "Ataque",
    explicacao: "O Modificador de Ataque (MA) é adicionado a qualquer ataque improvisado. Também, quando quiser uma proeza atlética, o Narrador definirá com qual Perícia de Ataque ela mais se aproxima.",
    pericias: [
      { nome: "Corrida", descricao: "Esta Perícia é usada para correr, permitindo recuperar o atraso em perseguições. Resultado 1: Tropeça e cai; 5: Cãibra impõe -1 ao deslocamento; 10: Deslocamento Normal; 15: +2 ao deslocamento; 20: +4 ao deslocamento; 30: Deslocamento x4 (apenas terrestre)." },
      { nome: "Força", descricao: "Auxilia a empurrar ou levantar objetos pesados. Um indivíduo destreinado pode suspender/empurrar metade de seu peso. Resultado 1: Derruba o objeto e fica atordoado; 5: Força normal; 10: Igual a seu peso; 15: Peso x2; 20: Peso x3; 30: Peso x4." },
      { nome: "Intimidação", descricao: "Usada contra humanos e pokémons. Sempre rolada contra NPCs, quanto mais alto melhor." },
      { nome: "Salto", descricao: "Pular mais alto e mais distante. Humanos padrão: 60cm vertical. Resultado 1: Tropeça e cai; 5: Altura padrão (60cm) ou horizontal (1,5m); 10: Altura 1,2m e horizontal 3m; 15: Altura 1,5m e horizontal 3,6m; 20: Altura 2,4m e horizontal 6m; 30: Altura 3m e horizontal 9m." }
    ]
  },
  {
    nome: "Defesa",
    explicacao: "O Modificador de Defesa (MD) será usado sob a forma de Perícia de Defesa quando se realiza uma proeza de resistência, como resistir ao sono ou à fome. Normalmente, a Defesa será a maneira mais comum pela qual um personagem pode evitar sofrer dano aos seus Pontos de Vida.",
    pericias: [
      { nome: "Concentração", descricao: "Ajuda a manter foco mesmo ferido ou distraído. Resultado 1: Menor estímulo interrompe; 5: Sofre até 10 dano; 10: Sofre até 20 dano; 15: Sofre até 50 dano; 20: Sofre até 150 dano; 30: Nenhum dano atrapalha." },
      { nome: "Deflexão", descricao: "Interceptar objetos atirados (defletindo ou pegando). Não funciona contra Golpes pokémons não-físicos. Rolada contra NPCs, quanto mais alto melhor." },
      { nome: "Incansável", descricao: "Manter-se sem dormir. Teste após 24h sem sono e a cada 2h seguintes. Resultado 1: Adormece 1d4 horas; 5: Perde 25% PV máximo; 10: Perde 15% PV máximo; 15: Perde 5% PV máximo; 20: Não perde PV; 30: Não perde PV e não testa 2h depois." },
      { nome: "Regeneração", descricao: "Recuperação aprimorada durante descanso (padrão: 10% PV em 8h). Resultado 1: Nenhuma recuperação; 5: Cura 10% PV máximo; 10: Cura 15%; 15: Cura 25%; 20: Cura 50%; 30: Cura total e remove aflições." }
    ]
  },
  {
    nome: "Ataque Especial",
    explicacao: "Sempre que realizar um ato que exija conhecimento acadêmico, experiência ou inteligência geral, seu Narrador colocará este teste em um teste de Perícias de Ataque Especial.",
    pericias: [
      { nome: "Engenharia", descricao: "Compreensão e operação de máquinas. Resultado 1: Objeto estranho; 5: Supõe propósito; 10: Entende objetivo, liga/desliga; 15: Opera e repara; 20: Usa mesmo defeituoso; 30: Entende plenamente e pode replicar." },
      { nome: "História", descricao: "Conhecimento sobre o passado. Resultado 1: Não sabe nada; 5: Ouviu falar mas não prestou atenção; 10: Sabe sobre pessoas famosas e marcos; 15: Sabe especificidades e detalhes; 20: Sabe detalhes ignorados por livros; 30: Como se tivesse presenciado." },
      { nome: "Investigação", descricao: "Entender propósitos e procurar ativamente. Encontra objetos importantes rapidamente. Rolada contra cenário do Narrador." },
      { nome: "Programação", descricao: "Acesso a computadores e redes. Tarefas incluem: acessar dispositivos/computadores/redes, danificar programações, ativar/desativar remotos, alterar senhas, manipular hardware, ocultar evidências." }
    ]
  },
  {
    nome: "Defesa Especial",
    explicacao: "O Modificador de Defesa Especial (MDE) é usado para definir a percepção sensorial e a força da personalidade do personagem. Sempre que realizar um ato que exija blefar, mediar, convencer, achar contatos ou se portar com outros de maneira geral, pode usar uma Perícia de Defesa Especial.",
    pericias: [
      { nome: "Empatia", descricao: "Entender e amansar pokémons chateados (amedrontados, preocupados, zangados, agressivos). Usada apenas contra pokémons, não funciona em pokémons de alta Inteligência. Rolada contra NPCs." },
      { nome: "Manha", descricao: "Ter contatos e entender dinâmica local. Resultado 1: Não sabe nada; 5: Ouviu sobre empresários; 10: Sabe lugares inseguros e serviços questionáveis; 15: Sabe grupos e onde agem; 20: Sabe detalhes dos líderes; 30: Pode se passar por membro." },
      { nome: "Manipulação", descricao: "Convencer através de argumentos ou mentiras. Garante que alguém compre seu ponto de vista ou faça algo sugerido. Rolada contra NPCs." },
      { nome: "Percepção", descricao: "Notar coisas que passariam despercebidas. Rolada contra cenário do Narrador ou contra Furtividade." }
    ]
  },
  {
    nome: "Velocidade",
    explicacao: "Sempre que um ato exigir precisão, equilíbrio, flexibilidade ou rapidez, seu Narrador pode pedir que você faça um teste de uma Perícia de Velocidade. Adicione seu Modificador de Velocidade (MV) a este teste.",
    pericias: [
      { nome: "Acrobacia", descricao: "Equilíbrio, escalar, atravessar locais oscilantes. Resultado 1: Você cai; 5: Superfície larga ou escada comum; 10: Saliência/tronco ou escala 3m; 15: Caminhos estreitos e escala prédio; 20: Sem problemas." },
      { nome: "Furtividade", descricao: "Mover-se sorrateiramente, deslocar silenciosamente e se esconder. Rolada contra humanos e pokémons." },
      { nome: "Performance", descricao: "Tocar instrumentos, cantar, dançar ou atuar. Resultado 1: Medo de palco; 5: Passos/notas perdidos; 10: Salva de palmas; 15: Ovação de pé (até 100 créditos diários); 20: Gritos por minutos, desempenho primoroso (até 1000 créditos diários), fama local; 30: Inspira movimentos sociais." },
      { nome: "Prestidigitação", descricao: "Movimento manual rápido e discreto. Bater carteiras, esconder coisas, encantar com mágica. Rolada contra humanos e pokémons." }
    ]
  }
]

// Dados de Capacidades
const CAPACIDADES_DATA = {
  "Força": "Representa a potência muscular do pokémon. Possui valor de 1 a 10, indicando o peso médio que o pokémon pode erguer fisicamente. Pode aumentar com treinamento e alimentação adequados. Tabela: Força 1 = 5 kg; 2 = 23 kg; 3 = 45 kg; 4 = 90 kg; 5 = 158 kg; 6 = 227 kg; 7 = 340 kg; 8 = 455 kg; 9 = 1135 kg; 10 = 1815 kg.",
  "Inteligência": "Quantificada de 1 a 7, representa o intelecto médio da espécie. Influencia autonomia, planejamento e comportamento social. Tabela: 1 Vegetal (incapaz de pensamentos); 2 Animal Autoconsciente; 3 Animal Inteligente (segue ordens); 4 Deficiente (cria e usa ferramentas); 5 Humano; 6 Superior (liderança); 7 Gênio (cálculos complexos, múltiplas línguas).",
  "Salto": "Quantificada de 1 a 10, indica a altura máxima que o pokémon consegue saltar. Usar Salto consome o Deslocamento da rodada. Tabela: 1=1m; 2=2m; 3=3m; 4=4,5m; 5=6m; 6=7,6m; 7=10,6m; 8=15,2m; 9=21m; 10=30m.",
  "Adesão": "Permite tratar terreno vertical e tetos como Terreno Regular, usando Deslocamento Terrestre, mesmo em superfícies lisas.",
  "Afundamento": "O pokémon não pode nadar nem se mover na água. A cada rodada submerso perde 25% dos PV máximos e pode morrer por sufocamento.",
  "Alcance": "Permite realizar ataques corpo a corpo contra alvos a até 5 metros de distância, geralmente devido a tamanho, membros extensíveis ou arremesso.",
  "Amorfia": "O pokémon não possui forma consistente, podendo se liquefazer, se esticar e atravessar frestas ou fechaduras.",
  "Aura": "Permite ler e manipular auras. A cor indica emoção dominante e escuridão indica más intenções. Não permite leitura de mentes.",
  "Bruxaria": "Permite amaldiçoar criaturas merecedoras (traidores, criminosos etc.). A maldição persiste até redenção ou reparação.",
  "Calor": "O pokémon é sempre quente ao toque.",
  "Camuflagem": "Usuário avançado de Silêncio. Golpes à distância não podem alvocá-lo em Terreno Acidentado, e ataques contra ele têm Dificuldade de Acurácia +2.",
  "Combustão": "Permite produzir e controlar chamas, desde pequenas até grandes explosões de fogo.",
  "Congelação": "Permite congelar terreno usando Ação de Movimento em rodadas alternadas. Tabela (1d20): 1=1m²; 6=5m²; 9=7m²; 12=10m²; 15=15m²; 18=20m²; 20=30m².",
  "Eletricidade": "Produz eletricidade controlada. Pode recarregar dispositivos com rolagem 1d20 (sucesso com 13+).",
  "Encolhimento": "Reduz o tamanho para até 75% sem alterar peso. Ataques contra ele têm Dificuldade de Acurácia +3.",
  "Escalada": "Trata terreno vertical como Terreno Regular, exceto superfícies lisas.",
  "Família": "Machos e fêmeas são espécies distintas mas contam como uma só para procriação. Tabela: Ilumise/Volbeat; Latias/Latios; Lunatone/Solrock; Miltank/Tauros; Plusle/Minun; Nidoran/Nidorina/Nidoqueen vs Nidoran/Nidorino/Nidoking; Smoochum/Jynx vs Mime Jr./Mr. Mime; Vullaby/Mandibuzz vs Rufflet/Braviary.",
  "Faro": "Permite rastrear odores. Tabela de rolagem 1d20: 11+ após cheirar alvo ou pertence; 16+ odor aleatório; 20 odor específico sem referência. Uso: 1 vez por hora.",
  "Fiação": "Permite disparar fios (seda, teia, vinha) até 10m usando Ação de Movimento. Teste de Acurácia 6 se usado contra criaturas.",
  "Frio": "O pokémon é sempre frio ao toque.",
  "Geleira": "Trata Terreno Gelado como Terreno Regular se vantajoso.",
  "Guelras": "Permite respirar debaixo d'água indefinidamente.",
  "Hierarquia": "Estrutura social rígida. Formas menos evoluídas tornam-se Prestativas. Pode causar submissão ou hostilidade conforme diferença de níveis.",
  "Incubação": "Reduz em 2 horas por dia o tempo de eclosão de ovos mantidos com o pokémon.",
  "Ininteligível": "A mente do pokémon não pode ser lida.",
  "Intangibilidade": "Permite atravessar terreno bloqueador e paredes por até 30 segundos (5 rodadas). Não pode atacar enquanto intangível.",
  "Invisibilidade": "Permite ficar invisível por até 4 minutos. Ataques contra ele têm Dificuldade de Acurácia +4.",
  "Luminar": "Emite luz corporal, podendo atrair ou afastar pokémons.",
  "Magnetismo": "Manipula campos magnéticos, atrai ou repele metais e identifica o norte magnético.",
  "Manancial": "Produz água potável em intensidades variadas.",
  "Materialização": "Cria rochas adjacentes ao corpo. Para cada 2,5 kg criados perde 2 PV. Máximo de 25 kg por rodada.",
  "Obrigatoriedade": "Determina uma Habilidade fixa obrigatória. Pode substituir escolha de Habilidade inicial ou a segunda Habilidade no nível 40.",
  "Onirismo": "Produz material onírico usado pela máquina do Hipnólogo.",
  "Presciência": "Recebe visões do futuro de forma não controlada, determinadas pelo Narrador.",
  "Rebento": "Acelera crescimento vegetal. 1 metro a cada 6 segundos, até 125% do tamanho natural. Custa 1 PV a cada 2 rodadas.",
  "Repeteco": "Exclusivo de Wobbuffet. Permite Contra-Ataque e Escudo Espelho como Rodada Sim/Rodada Não, com penalidades acumulativas.",
  "Secreção": "Exclusivo de Shuckle. Frutas viram Concentrados após 24h e Doce Raro após 2 semanas.",
  "Sedução": "Produz feromônios ou odores agradáveis que atraem pokémons selvagens.",
  "Silêncio": "Não produz som ao se mover. Golpes à distância não podem alvocá-lo em Terreno Acidentado.",
  "Telecinesia": "Move objetos à distância de até o Nível do pokémon, com peso máximo de 2,5 kg por Nível.",
  "Telepatia": "Lê pensamentos superficiais e projeta pensamentos. Não funciona se diferença de Inteligência for maior que 1.",
  "Térreo": "Transforma terreno adjacente em Terreno Acidentado ou Regular em rodadas alternadas.",
  "Tumefação": "Aumenta tamanho até 125%. Ataques contra ele têm Dificuldade de Acurácia -3, mas ele se torna Terreno Bloqueador.",
  "Vento": "Cria rajadas de vento variando de brisa leve a fortes correntes.",
  "Virtualidade": "Pode entrar em dispositivos eletrônicos, viajar por cabos, ler dados 1 vez/dia e tentar controlar aparelhos (1d20, sucesso 16+)."
}

const CAPACIDADES_NAMES = Object.keys(CAPACIDADES_DATA).filter(cap => !['Força', 'Inteligência', 'Salto'].includes(cap)).sort()

// Dados de Golpes - importados do arquivo golpesData.js
const GOLPES_DATA = GOLPES_DATA_IMPORTED

const GOLPES_NAMES = Object.keys(GOLPES_DATA).sort()

// Dados de Habilidades - importados do arquivo habilidadesData.js
const HABILIDADES_DATA = HABILIDADES_DATA_IMPORTED
const HABILIDADES_NAMES = HABILIDADES_NAMES_IMPORTED

// Dados de Características e Talentos - importados do arquivo caracteristicasETalentosData.js
const CARACTERISTICAS_DATA = CARACTERISTICAS_DATA_IMPORTED
const TALENTOS_DATA = TALENTOS_DATA_IMPORTED
const TALENTOS_NAMES = TALENTOS_NAMES_IMPORTED

// Dados de Pokébolas
const POKEBALLS_LIST = [
  'Custom Pokeball',
  'Pokeball', 'Greatball', 'Ultraball', 'Masterball', 'Beastball', 'Cherishball',
  'Diveball', 'Dreamball', 'Duskball', 'Fastball', 'Friendball', 'Healball',
  'Heavyball', 'Levelball', 'Loveball', 'Lunarball', 'Lureball', 'Luxuryball',
  'Nestball', 'Netball', 'Parkball', 'Premierball', 'Quickball', 'Repeatball',
  'Safariball', 'Sportball', 'Timerball', 'NeoGenBall', 'Noryball'
]

// Lista de pokébolas para o PC (com Custom Pokeball 2)
const POKEBALLS_PC_LIST = [
  'Custom Pokeball 2',
  'Pokeball', 'Greatball', 'Ultraball', 'Masterball', 'Beastball', 'Cherishball',
  'Diveball', 'Dreamball', 'Duskball', 'Fastball', 'Friendball', 'Healball',
  'Heavyball', 'Levelball', 'Loveball', 'Lunarball', 'Lureball', 'Luxuryball',
  'Nestball', 'Netball', 'Parkball', 'Premierball', 'Quickball', 'Repeatball',
  'Safariball', 'Sportball', 'Timerball', 'NeoGenBall', 'Noryball'
]

// Frases aleatórias para quando não há Held Item
const NO_HELD_ITEM_PHRASES = [
  "Sua mochila não está muito pesada?",
  "Me dá um trocado?",
  "O que você vai me dar agora?",
  "Deixa eu levar sua mochila!",
  "Vou segurar essa Masterball aqui."
]

// Itens Chave disponíveis
const KEY_ITEMS_LIST = [
  ...POKEBALLS_LIST,
  'Potion',
  'Superpotion',
  'Hiperpotion',
  'Revive',
  'Antidoto',
  'Antiparalisante',
  'Despertador',
  'Anticongelante',
  'Repel',
  'Super Repel',
  'Max Repel',
  'Hp-up',
  'Proteína',
  'Ferro',
  'Cálcio',
  'Zinco',
  'Carburante',
  'PP-up',
  'Rare Candy'
]

// Estrutura da PokéLoja
// Função helper para obter a imagem do item
const getItemImage = (itemName) => {
  // Procurar em todas as categorias da PokéLoja
  for (const category in POKELOJA_DATA) {
    const item = POKELOJA_DATA[category].find(i => i.name === itemName)
    if (item) return item.image
  }
  // Se não encontrar, retornar imagem padrão baseada no nome
  return `/pokeballs/${itemName.toLowerCase().replace(/\s+/g, '')}.png`
}

const POKELOJA_DATA = {
  'Cura': [
    { name: 'Potion', price: 200, description: 'Restaura 2d12+10 PV', image: '/pokeballs/potion.png' },
    { name: 'Superpotion', price: 350, description: 'Restaura 3d12+20 PV', image: '/pokeballs/superpotion.png' },
    { name: 'Hiperpotion', price: 400, description: 'Restaura 4d12+30 PV', image: '/pokeballs/hiperpotion.png' },
    { name: 'Antidoto', price: 250, description: 'Cura envenenamento', image: '/pokeballs/antidoto.png' },
    { name: 'Antiparalisante', price: 200, description: 'Cura paralisia', image: '/pokeballs/antiparalisante.png' },
    { name: 'Despertador', price: 200, description: 'Acorda o pokémon', image: '/pokeballs/despertador.png' },
    { name: 'Anticongelante', price: 200, description: 'Descongela o pokémon', image: '/pokeballs/anticongelante.png' },
    { name: 'Revive', price: 300, description: 'Revive o pokémon', image: '/pokeballs/revive.png' }
  ],
  'Repelente': [
    { name: 'Repel', price: 200, description: '1d6+3 horas', image: '/pokeballs/repel.png' },
    { name: 'Super Repel', price: 300, description: '1d8+4 horas', image: '/pokeballs/superrepel.png' },
    { name: 'Max Repel', price: 400, description: '1d10+5 horas', image: '/pokeballs/maxrepel.png' }
  ],
  'Captura': [
    { name: 'Pokébola', price: 200, description: '+15', image: '/pokeballs/pokeball.png' },
    { name: 'Greatball', price: 500, description: '+5', image: '/pokeballs/greatball.png' },
    { name: 'Ultraball', price: 1000, description: '-5', image: '/pokeballs/ultraball.png' },
    { name: 'Beastball', price: 2000, description: '+45, ou -50 se o alvo possui a Habilidade Ultrabesta', image: '/pokeballs/beastball.png' },
    { name: 'Cherishball', price: 2000, description: '-5', image: '/pokeballs/cherishball.png' },
    { name: 'Diveball', price: 2000, description: '+5, ou -15 se estiver submerso ou no subterrâneo.', image: '/pokeballs/diveball.png' },
    { name: 'Dreamball', price: 2000, description: '+0, Pokébola funcional em sonhos.', image: '/pokeballs/dreamball.png' },
    { name: 'Duskball', price: 2000, description: '+0, ou -15 se estiver muito escuro.', image: '/pokeballs/duskball.png' },
    { name: 'Fastball', price: 2000, description: '+5, ou -15 se o alvo possui algum Deslocamento acima de 7.', image: '/pokeballs/fastball.png' },
    { name: 'Friendball', price: 2000, description: '-5, A Lealdade do alvo começará 3.', image: '/pokeballs/friendball.png' },
    { name: 'Healball', price: 2000, description: '-5, Todos os PV são recuperados.', image: '/pokeballs/healball.png' },
    { name: 'Heavyball', price: 2000, description: '+5, reduzindo em 5 para cada Categoria de Peso do alvo mais pesada que Leve.', image: '/pokeballs/heavyball.png' },
    { name: 'Levelball', price: 2000, description: '+5, ou -15 se o Nível do alvo é menor que a metade do Nível do seu pokémon.', image: '/pokeballs/levelball.png' },
    { name: 'Loveball', price: 2000, description: '+0, ou -15 se o sexo do alvo é o oposto do sexo do seu pokémon.', image: '/pokeballs/loveball.png' },
    { name: 'Lunarball', price: 2000, description: '+0, ou -15 se o alvo em algum ponto pode evoluir usando uma Pedra da Lua.', image: '/pokeballs/lunarball.png' },
    { name: 'Lureball', price: 2000, description: '+0, ou -15 se o alvo foi atraído ao encontro por uma isca.', image: '/pokeballs/lureball.png' },
    { name: 'Luxuryball', price: 2000, description: '-5, Fica feliz.', image: '/pokeballs/luxuryball.png' },
    { name: 'Nestball', price: 2000, description: '+0; ou -15 se o Nível do alvo é menor que 10.', image: '/pokeballs/nestball.png' },
    { name: 'Netball', price: 2000, description: '+0, ou -15 se o Nível do alvo é menor que 10.', image: '/pokeballs/netball.png' },
    { name: 'Parkball', price: 2000, description: '+0, Pokébola autorizadas para uso dentro de uma Zona de Safari.', image: '/pokeballs/parkball.png' },
    { name: 'Premierball', price: 2000, description: '+0', image: '/pokeballs/premierball.png' },
    { name: 'Quickball', price: 2000, description: '-20, ou -15 se for usada na segunda rodada do combate ou -10 se for usada depois da segunda rodada', image: '/pokeballs/quickball.png' },
    { name: 'Repeatball', price: 2000, description: '+10; ou -15 se o alvo já consta na sua lista de Pokémons Possuídos.', image: '/pokeballs/repeatball.png' },
    { name: 'Safariball', price: 2000, description: '+0, Pokébola autorizadas para uso dentro de uma Zona de Safari.', image: '/pokeballs/safariball.png' },
    { name: 'Sportball', price: 2000, description: '+0, Pokébola autorizadas para uso dentro de uma Zona de Safari.', image: '/pokeballs/sportball.png' },
    { name: 'Timerball', price: 2000, description: '+5, reduzindo em 5 para cada duas rodadas de combate (até o mínimo de -20)', image: '/pokeballs/timerball.png' }
  ],
  'Suplemento': [
    { name: 'Hp-up', price: 4900, description: 'Aumenta a Saúde Basal em 1.', image: '/pokeballs/hpup.png' },
    { name: 'Proteína', price: 4900, description: 'Aumenta o Ataque Basal em 1.', image: '/pokeballs/proteina.png' },
    { name: 'Ferro', price: 4900, description: 'Aumenta a Defesa Basal em 1.', image: '/pokeballs/ferro.png' },
    { name: 'Cálcio', price: 4900, description: 'Aumenta o Ataque Especial Basal em 1.', image: '/pokeballs/calcio.png' },
    { name: 'Zinco', price: 4900, description: 'Aumenta a Defesa Especial Basal em 1.', image: '/pokeballs/zinco.png' },
    { name: 'Carburante', price: 4900, description: 'Aumenta a Velocidade Basal em 1.', image: '/pokeballs/carburante.png' },
    { name: 'PP-up', price: 9800, description: 'Escolha um Golpe* do pokémon.Se o Golpe escolhido tinha Frequência Rodada Sim Rodada Não, ele agora pode ser usado À Vontade. Se o Golpe escolhido tinha Frequência Por Encontro, ele agora pode ser usado Rodada Sim Rodada Não. Se ele possuía Frequência Centro Pokémon, ele agora pode ser usado Por Encontro.', image: '/pokeballs/ppup.png' },
    { name: 'Rare Candy', price: 48000, description: 'O pokémon ganha 1 nível.', image: '/pokeballs/rarecandy.png' }
  ]
}

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentArea, setCurrentArea] = useState('')
  const [darkMode, setDarkMode] = useState(true)
  const [selectedUser, setSelectedUser] = useState(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // Estado do treinador
  const [level, setLevel] = useState(1)
  const [image, setImage] = useState('')
  const [classes, setClasses] = useState(['', '', '', ''])
  const [attributes, setAttributes] = useState({
    saude: 10, ataque: 10, defesa: 10, ataqueEspecial: 10, defesaEspecial: 10, velocidade: 10
  })
  const [skills, setSkills] = useState({
    saude: [], ataque: [], defesa: [], ataqueEspecial: [], defesaEspecial: [], velocidade: []
  })
  const [currentHP, setCurrentHP] = useState(44)
  
  // Estado dos Pokémon
  const [mainTeam, setMainTeam] = useState([])
  const [pcPokemon, setPcPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [npcPokemonList, setNpcPokemonList] = useState([]) // Pokémon gerados recentemente
  const [npcPokemon, setNpcPokemon] = useState([]) // Pokémon confirmados como NPC
  const [expandedNpcCards, setExpandedNpcCards] = useState([]) // IDs dos cards expandidos
  const [showNpcDamageModal, setShowNpcDamageModal] = useState(false) // Modal de dano/cura NPC
  const [selectedNpcPokemon, setSelectedNpcPokemon] = useState(null) // Pokémon NPC selecionado para dano/cura
  const [npcDamageAmount, setNpcDamageAmount] = useState('') // Quantidade de dano/cura
  const [npcConditions, setNpcConditions] = useState({}) // Condições de captura por pokémon {pokemonId: {confusao: false, critico: false, ...}}
  const [showSendToTrainerModal, setShowSendToTrainerModal] = useState(false) // Modal de envio para treinador
  const [pokemonToSend, setPokemonToSend] = useState(null) // Pokémon NPC a ser enviado
  const [sendPokemonSpecies, setSendPokemonSpecies] = useState('') // Espécie do pokémon a enviar (editável)
  const [sendPokemonNature, setSendPokemonNature] = useState(null) // Natureza do pokémon a enviar (editável)
  const [speciesSearchSend, setSpeciesSearchSend] = useState('') // Busca de espécie no modal de envio
  const [natureSearchSend, setNatureSearchSend] = useState('') // Busca de natureza no modal de envio

  // Estados para área de Batalha
  const [battleTrainers, setBattleTrainers] = useState([]) // Treinadores enviados para batalha
  const [battlePokemon, setBattlePokemon] = useState([]) // Pokémon enviados para batalha
  const [battleTrainersList, setBattleTrainersList] = useState([]) // Lista ordenada de treinadores em batalha
  const [battlePokemonList, setBattlePokemonList] = useState([]) // Lista ordenada de pokémon em batalha
  const [currentTrainerTurn, setCurrentTrainerTurn] = useState(0) // Índice do turno atual dos treinadores
  const [currentPokemonTurn, setCurrentPokemonTurn] = useState(0) // Índice do turno atual dos pokémon
  const [trainerRound, setTrainerRound] = useState(1) // Rodada atual dos treinadores
  const [pokemonRound, setPokemonRound] = useState(1) // Rodada atual dos pokémon

  // Modais
  const [showLevelModal, setShowLevelModal] = useState(false)
  const [showClassModal, setShowClassModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [showHPModal, setShowHPModal] = useState(false)
  const [showAddPokemonModal, setShowAddPokemonModal] = useState(false)
  const [showXPModal, setShowXPModal] = useState(false)
  const [showHappinessModal, setShowHappinessModal] = useState(false)
  const [happinessAmount, setHappinessAmount] = useState('')
  const [selectedPokemonHappinessIndex, setSelectedPokemonHappinessIndex] = useState(null)
  const [showTrainerImageModal, setShowTrainerImageModal] = useState(false)
  const [trainerImageUrl, setTrainerImageUrl] = useState('')
  const [trainerImageUploadType, setTrainerImageUploadType] = useState('link') // 'link' ou 'file'
  const [currentSlot, setCurrentSlot] = useState(null)
  const [tempLevel, setTempLevel] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [classSearch, setClassSearch] = useState('')
  const [hpValue, setHpValue] = useState('')
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null)
  const [xpToAdd, setXpToAdd] = useState('')
  const [showPokedexDetailModal, setShowPokedexDetailModal] = useState(false)
  const [selectedPokedexEntry, setSelectedPokedexEntry] = useState(null)
  const [showCaptureModal, setShowCaptureModal] = useState(false)

  // States para capacidades
  const [selectedCapacityForInfo, setSelectedCapacityForInfo] = useState(null)
  const [showCapacityInfoModal, setShowCapacityInfoModal] = useState(false)
  const [capacitySearch, setCapacitySearch] = useState('')
  const [otherCapacities, setOtherCapacities] = useState([]) // Array de slots dinâmicos

  // States para sistema de Habilidades
  const [showHabilidadesModal, setShowHabilidadesModal] = useState(false)
  const [selectedPokemonForHabilidades, setSelectedPokemonForHabilidades] = useState(null)
  const [selectedPokemonTypeForHabilidades, setSelectedPokemonTypeForHabilidades] = useState(null) // 'team' ou 'pc'
  const [habilidadesSearch, setHabilidadesSearch] = useState('')
  const [habilidadesSelectedList, setHabilidadesSelectedList] = useState([]) // Lista de habilidades selecionadas
  const [showHabilidadeDetailModal, setShowHabilidadeDetailModal] = useState(false)
  const [selectedHabilidadeForDetail, setSelectedHabilidadeForDetail] = useState(null)

  // States para sistema de Características e Talentos
  const [expandedCaracteristicas, setExpandedCaracteristicas] = useState([]) // IDs das características expandidas
  const [expandedTalentos, setExpandedTalentos] = useState([]) // IDs dos talentos expandidos
  const [caracteristicasSelected, setCaracteristicasSelected] = useState([]) // Lista de características selecionadas
  const [showTalentosModal, setShowTalentosModal] = useState(false)
  const [talentosSearch, setTalentosSearch] = useState('')
  const [talentosSelected, setTalentosSelected] = useState([]) // Lista de talentos selecionados
  const [showBolsaTalentoModal, setShowBolsaTalentoModal] = useState(false)
  const [bolsaTalento, setBolsaTalento] = useState(0)

  // States para sistema de Estilizador (Ranger)
  const [estilizadorBattery, setEstilizadorBattery] = useState(10) // Bateria do Estilizador (0-10)

  // States para sistema de Estilizador Policial (Policial)
  const [estilizadorPolicialBattery, setEstilizadorPolicialBattery] = useState(30) // Bateria do Estilizador Policial (0-30 ou 0-40)
  const [thunderStoneActive, setThunderStoneActive] = useState(false) // Se a Pedra do Trovão foi ativada

  // States para sistema de Pokébolas
  const [showPokeballModal, setShowPokeballModal] = useState(false)
  const [showPokeballPCModal, setShowPokeballPCModal] = useState(false)
  const [selectedPokemonForPokeball, setSelectedPokemonForPokeball] = useState(null)
  const [selectedPokemonTypeForPokeball, setSelectedPokemonTypeForPokeball] = useState(null) // 'team' ou 'pc'
  const [pokeballSearch, setPokeballSearch] = useState('')
  const [selectedPokeball, setSelectedPokeball] = useState('')
  const [showCustomPokeballOptions, setShowCustomPokeballOptions] = useState(false)
  const [customPokeballUploadType, setCustomPokeballUploadType] = useState('link') // 'link' ou 'file'
  const [customPokeballLink, setCustomPokeballLink] = useState('')
  const [customPokeballFile, setCustomPokeballFile] = useState(null)
  const [showCustomPokeball2Options, setShowCustomPokeball2Options] = useState(false)
  const [customPokeball2UploadType, setCustomPokeball2UploadType] = useState('link') // 'link' ou 'file'
  const [customPokeball2Link, setCustomPokeball2Link] = useState('')
  const [customPokeball2File, setCustomPokeball2File] = useState(null)

  // States para sistema de Held Items
  const [showHeldItemModal, setShowHeldItemModal] = useState(false)
  const [showHeldItemPCModal, setShowHeldItemPCModal] = useState(false)
  const [selectedPokemonForHeldItem, setSelectedPokemonForHeldItem] = useState(null)
  const [selectedPokemonTypeForHeldItem, setSelectedPokemonTypeForHeldItem] = useState(null) // 'team' ou 'pc'
  const [heldItemName, setHeldItemName] = useState('')
  const [heldItemDescription, setHeldItemDescription] = useState('')
  const [showHeldItemDetailModal, setShowHeldItemDetailModal] = useState(false)
  const [selectedHeldItemForDetail, setSelectedHeldItemForDetail] = useState(null)

  // States para sistema de Mochila
  const [pokemonedas, setPokemonedas] = useState(0)
  const [keyItems, setKeyItems] = useState([]) // Array de {name: string, quantity: number}
  const [customItems, setCustomItems] = useState([]) // Array de {name: string, quantity: number, description: string}
  const [showAddKeyItemModal, setShowAddKeyItemModal] = useState(false)
  const [selectedKeyItem, setSelectedKeyItem] = useState('')
  const [keyItemQuantity, setKeyItemQuantity] = useState(1)
  const [keyItemSearch, setKeyItemSearch] = useState('')
  const [showAddCustomItemModal, setShowAddCustomItemModal] = useState(false)
  const [customItemName, setCustomItemName] = useState('')
  const [customItemQuantity, setCustomItemQuantity] = useState(1)
  const [customItemDescription, setCustomItemDescription] = useState('')
  const [showGiveItemModal, setShowGiveItemModal] = useState(false)
  const [selectedItemToGive, setSelectedItemToGive] = useState(null)
  const [selectedPokemonToReceiveItem, setSelectedPokemonToReceiveItem] = useState(null)
  const [showEditKeyItemQuantityModal, setShowEditKeyItemQuantityModal] = useState(false)
  const [selectedKeyItemForEdit, setSelectedKeyItemForEdit] = useState(null)
  const [editKeyItemQuantity, setEditKeyItemQuantity] = useState(1)
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [deleteType, setDeleteType] = useState(null) // 'keyItem' ou 'customItem'
  const [showEditCustomItemModal, setShowEditCustomItemModal] = useState(false)
  const [selectedCustomItemForEdit, setSelectedCustomItemForEdit] = useState(null)
  const [editCustomItemName, setEditCustomItemName] = useState('')
  const [editCustomItemQuantity, setEditCustomItemQuantity] = useState(1)
  const [editCustomItemDescription, setEditCustomItemDescription] = useState('')
  const [showPokemonedasModal, setShowPokemonedasModal] = useState(false)
  const [pokemonedasValue, setPokemonedasValue] = useState('')

  // States para PokéLoja
  const [expandedCorredores, setExpandedCorredores] = useState({}) // {corredor: boolean}
  const [showItemDescriptionModal, setShowItemDescriptionModal] = useState(false)
  const [selectedItemForDescription, setSelectedItemForDescription] = useState(null)
  const [showBuyItemModal, setShowBuyItemModal] = useState(false)
  const [selectedItemToBuy, setSelectedItemToBuy] = useState(null)
  const [buyItemQuantity, setBuyItemQuantity] = useState(1)

  // States para Treinador NPC
  const [npcTrainers, setNpcTrainers] = useState([])
  const [showCustomTrainerModal, setShowCustomTrainerModal] = useState(false)
  const [showRandomTrainerModal, setShowRandomTrainerModal] = useState(false)
  const [customTrainerForm, setCustomTrainerForm] = useState({
    name: '',
    level: 1,
    attributes: {
      saude: 6,
      ataque: 6,
      defesa: 6,
      ataqueEspecial: 6,
      defesaEspecial: 6,
      velocidade: 6
    },
    classes: [],
    talentosMode: 'aleatorio', // 'aleatorio' ou 'manual'
    selectedTalentos: [] // Para modo manual
  })
  const [randomTrainerForm, setRandomTrainerForm] = useState({
    name: '',
    level: 1
  })
  const [showNPCTalentosModal, setShowNPCTalentosModal] = useState(false)
  const [selectedNPCForTalentos, setSelectedNPCForTalentos] = useState(null)
  const [showSelectTalentosModal, setShowSelectTalentosModal] = useState(false)

  // States para sistema de Tutoria e Golpes
  const [showTutoriaModal, setShowTutoriaModal] = useState(false)
  const [selectedPokemonForTutoria, setSelectedPokemonForTutoria] = useState(null)
  const [selectedPokemonTypeForTutoria, setSelectedPokemonTypeForTutoria] = useState(null) // 'team' ou 'pc'
  const [tutoriaGolpesSearch, setTutoriaGolpesSearch] = useState('')
  const [tutoriaSelectedGolpes, setTutoriaSelectedGolpes] = useState([])
  const [showGolpeDetailModal, setShowGolpeDetailModal] = useState(false)
  const [selectedGolpeForDetail, setSelectedGolpeForDetail] = useState(null)
  const [showPCGolpesModal, setShowPCGolpesModal] = useState(false)
  const [selectedPokemonForPCGolpes, setSelectedPokemonForPCGolpes] = useState(null)
  const [expandedGolpeInPC, setExpandedGolpeInPC] = useState(null)

  const [captureForm, setCaptureForm] = useState({ nickname: '', level: 5 })
  const [pokemonToCapture, setPokemonToCapture] = useState(null)
  const [fullPokedexData, setFullPokedexData] = useState([])
  const [showExoticDataModal, setShowExoticDataModal] = useState(false)
  const [exoticDataForm, setExoticDataForm] = useState({
    dexNumber: '',
    altura: '',
    peso: '',
    genero: '',
    tipos: [''],
    habitats: [''],
    catchRate: '',
    baseExp: '',
    evolucao: '',
    evolucaoNivel: '',
    evolucaoItem: '',
    statusBasais: {
      saude: '',
      ataque: '',
      defesa: '',
      ataqueEspecial: '',
      defesaEspecial: '',
      velocidade: ''
    }
  })
  const [selectedPokemonForImage, setSelectedPokemonForImage] = useState(null)
  const [imageUploadType, setImageUploadType] = useState('link') // 'link' ou 'file'
  const [pokemonImages, setPokemonImages] = useState({})

  // Estado para edição de Pokémon
  const [showEditPokemonModal, setShowEditPokemonModal] = useState(false)
  const [editingPokemon, setEditingPokemon] = useState(null)
  const [editingPokemonLocation, setEditingPokemonLocation] = useState(null) // 'team' ou 'pc'
  const [pokemonEditForm, setPokemonEditForm] = useState({
    nature: '',
    baseAttributes: {
      saude: '',
      ataque: '',
      defesa: '',
      ataqueEspecial: '',
      defesaEspecial: '',
      velocidade: ''
    },
    levelPoints: {
      saude: '',
      ataque: '',
      defesa: '',
      ataqueEspecial: '',
      defesaEspecial: '',
      velocidade: ''
    },
    gender: '',
    displacement: {
      terrestre: '',
      nadar: '',
      voar: '',
      cavar: '',
      submerso: ''
    },
    weight: '',
    height: '',
    loyalty: '',
    capacities: {
      forca: '',
      inteligencia: '',
      salto: '',
      others: [] // Array de strings com nomes das capacidades
    }
  })
  const [natureSearch, setNatureSearch] = useState('')

  // Estados para modal de edição do PC
  const [showEditPokemonPCModal, setShowEditPokemonPCModal] = useState(false)

  // Estados para modal de habilidades do PC
  const [showHabilidadesPCModal, setShowHabilidadesPCModal] = useState(false)

  // Estados para modal Name Rater - Time Principal
  const [showNameRaterModal, setShowNameRaterModal] = useState(false)
  const [nameRaterIndex, setNameRaterIndex] = useState(null)
  const [nameRaterNickname, setNameRaterNickname] = useState('')

  // Estados para modal Name Rater PC
  const [showNameRaterPCModal, setShowNameRaterPCModal] = useState(false)
  const [nameRaterPCIndex, setNameRaterPCIndex] = useState(null)
  const [nameRaterPCNickname, setNameRaterPCNickname] = useState('')

  // Estado para visualização de informações do Pokémon
  const [showPokemonInfoModal, setShowPokemonInfoModal] = useState(false)
  const [viewingPokemon, setViewingPokemon] = useState(null)

  // Estado para modal de Dano/Cura de Pokémon
  const [showPokemonHPModal, setShowPokemonHPModal] = useState(false)
  const [selectedPokemonHP, setSelectedPokemonHP] = useState(null)

  // Estados para Enciclopédia (Treinador)
  const [encyclopediaSection, setEncyclopediaSection] = useState('Golpedex') // 'Golpedex', 'Descritordex', 'Tag de Concursodex', 'Períciadex'
  const [golpedexSearches, setGolpedexSearches] = useState(['', '', '', '', '', '', '', '']) // 8 barras de pesquisa
  const [expandedDescritor, setExpandedDescritor] = useState(null) // Nome do descritor expandido ou null
  const [expandedTagConcurso, setExpandedTagConcurso] = useState(null) // Nome da tag de concurso expandida ou null
  const [expandedAtributo, setExpandedAtributo] = useState(null) // Nome do atributo expandido ou null

  // Estados para Enciclopédia M (Mestre)
  const [encyclopediaMSection, setEncyclopediaMSection] = useState('Golpedex M') // 'Golpedex M', 'Descritordex M', 'Tag de Concursodex M', 'Períciadex M'
  const [golpedexMSearches, setGolpedexMSearches] = useState(['', '', '', '', '', '', '', '']) // 8 barras de pesquisa
  const [expandedDescritorM, setExpandedDescritorM] = useState(null) // Nome do descritor expandido ou null
  const [expandedTagConcursoM, setExpandedTagConcursoM] = useState(null) // Nome da tag de concurso expandida ou null
  const [expandedAtributoM, setExpandedAtributoM] = useState(null) // Nome do atributo expandido ou null

  // Estados para Visão do Mestre
  const [visaoMestreSection, setVisaoMestreSection] = useState('Perfis') // 'Perfis', 'Pokéloja Config'
  const [selectedTrainer, setSelectedTrainer] = useState(null) // Username do treinador selecionado ou null
  const [expandedTeamPokemon, setExpandedTeamPokemon] = useState(null) // Index do pokémon do time expandido ou null
  const [showCaracTaleModal, setShowCaracTaleModal] = useState(false) // Modal de Características & Talentos
  const [showMochilaModal, setShowMochilaModal] = useState(false) // Modal da Mochila
  const [hiddenPokelojaItems, setHiddenPokelojaItems] = useState([]) // Array de nomes de itens ocultos na Pokéloja

  const [selectedPokemonHPIndex, setSelectedPokemonHPIndex] = useState(null)
  const [hpAmount, setHpAmount] = useState('')
  // Estado para modal de HP Temporário
  const [showTempHPModal, setShowTempHPModal] = useState(false)
  const [selectedPokemonForTempHP, setSelectedPokemonForTempHP] = useState(null)
  const [selectedPokemonTempHPIndex, setSelectedPokemonTempHPIndex] = useState(null)
  const [tempHPAmount, setTempHPAmount] = useState('')

  // Estado do formulário de adicionar Pokémon
  const [pokemonForm, setPokemonForm] = useState({
    nickname: '',
    species: '',
    isCaptured: false,
    isExotic: false,
    level: 1,
    exoticSpecies: '',
    currentXP: 0
  })
  const [speciesSearch, setSpeciesSearch] = useState('')

  // Lista de naturezas
  const natures = [
    {nome:"Ousada", up:"Saúde", down:"Ataque", gosto:"Nenhum", desgosto:"Picante"},
    {nome:"Dócil", up:"Saúde", down:"Defesa", gosto:"Nenhum", desgosto:"Azedo"},
    {nome:"Orgulhosa", up:"Saúde", down:"Ataque Especial", gosto:"Nenhum", desgosto:"Seco"},
    {nome:"Excêcentrica", up:"Saúde", down:"Defesa Especial", gosto:"Nenhum", desgosto:"Amargo"},
    {nome:"Preguiçosa", up:"Saúde", down:"Velocidade", gosto:"Nenhum", desgosto:"Doce"},
    {nome:"Desesperada", up:"Ataque", down:"Saúde", gosto:"Picante", desgosto:"Nenhum"},
    {nome:"Solitária", up:"Ataque", down:"Defesa", gosto:"Picante", desgosto:"Azedo"},
    {nome:"Firme", up:"Ataque", down:"Ataque Especial", gosto:"Picante", desgosto:"Seco"},
    {nome:"Travessa", up:"Ataque", down:"Defesa Especial", gosto:"Picante", desgosto:"Amargo"},
    {nome:"Brava", up:"Ataque", down:"Velocidade", gosto:"Picante", desgosto:"Doce"},
    {nome:"Rígida", up:"Defesa", down:"Saúde", gosto:"Azedo", desgosto:"Nenhum"},
    {nome:"Arrojada", up:"Defesa", down:"Ataque", gosto:"Azedo", desgosto:"Picante"},
    {nome:"Endiabrada", up:"Defesa", down:"Ataque Especial", gosto:"Azedo", desgosto:"Seco"},
    {nome:"Negligente", up:"Defesa", down:"Defesa Especial", gosto:"Azedo", desgosto:"Amargo"},
    {nome:"Relaxada", up:"Defesa", down:"Velocidade", gosto:"Azedo", desgosto:"Doce"},
    {nome:"Tímida", up:"Ataque Especial", down:"Saúde", gosto:"Seco", desgosto:"Nenhum"},
    {nome:"Modesta", up:"Ataque Especial", down:"Ataque", gosto:"Seco", desgosto:"Picante"},
    {nome:"Amável", up:"Ataque Especial", down:"Defesa", gosto:"Seco", desgosto:"Azedo"},
    {nome:"Imprudente", up:"Ataque Especial", down:"Defesa Especial", gosto:"Seco", desgosto:"Amargo"},
    {nome:"Quieta", up:"Ataque Especial", down:"Velocidade", gosto:"Seco", desgosto:"Doce"},
    {nome:"Enjoada", up:"Defesa Especial", down:"Saúde", gosto:"Amargo", desgosto:"Nenhum"},
    {nome:"Calma", up:"Defesa Especial", down:"Ataque", gosto:"Amargo", desgosto:"Picante"},
    {nome:"Gentil", up:"Defesa Especial", down:"Defesa", gosto:"Amargo", desgosto:"Azedo"},
    {nome:"Meticulosa", up:"Defesa Especial", down:"Ataque Especial", gosto:"Amargo", desgosto:"Seco"},
    {nome:"Atrevida", up:"Defesa Especial", down:"Velocidade", gosto:"Amargo", desgosto:"Doce"},
    {nome:"Séria", up:"Velocidade", down:"Saúde", gosto:"Doce", desgosto:"Nenhum"},
    {nome:"Medrosa", up:"Velocidade", down:"Ataque", gosto:"Doce", desgosto:"Picante"},
    {nome:"Apressada", up:"Velocidade", down:"Defesa", gosto:"Doce", desgosto:"Azedo"},
    {nome:"Alegre", up:"Velocidade", down:"Ataque Especial", gosto:"Doce", desgosto:"Seco"},
    {nome:"Ingênua", up:"Velocidade", down:"Defesa Especial", gosto:"Doce", desgosto:"Amargo"},
    {nome:"Comedida", up:"Nenhum", down:"Nenhum", gosto:"Nenhum", desgosto:"Nenhum"},
    {nome:"Chata", up:"Nenhum", down:"Nenhum", gosto:"Nenhum", desgosto:"Nenhum"},
    {nome:"Séria", up:"Nenhum", down:"Nenhum", gosto:"Nenhum", desgosto:"Nenhum"},
    {nome:"Tola", up:"Nenhum", down:"Nenhum", gosto:"Nenhum", desgosto:"Nenhum"},
    {nome:"Passiva", up:"Nenhum", down:"Nenhum", gosto:"Nenhum", desgosto:"Nenhum"}
  ]

  const users = [
    { username: 'Mestre', type: 'mestre', gradient: 'linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)' },
    { username: 'Alocin', type: 'treinador', gradient: 'linear-gradient(135deg, #000080, #4169E1, #87CEEB, #FFFFFF)' },
    { username: 'Lila', type: 'treinador', gradient: 'linear-gradient(135deg, #800080, #9370DB, #FF1493, #FF69B4)' },
    { username: 'Ludovic', type: 'treinador', gradient: 'linear-gradient(135deg, #8B0000, #DC143C, #FF6347, #2F4F4F)' },
    { username: 'Noryat', type: 'treinador', gradient: 'linear-gradient(135deg, #000000, #404040, #808080, #FFFFFF)' },
    { username: 'Pedro', type: 'treinador', gradient: 'linear-gradient(135deg, #0000CD, #4169E1, #00CED1, #32CD32)' }
  ]

  const mestreAreas = ['Gerador Pokémon', 'Treinador NPC', 'Pokémon NPC', 'Batalha', 'Enciclopédia M', 'Visão do Mestre']
  const treinadorAreas = ['Treinador', 'PC', 'Pokédex', 'Mochila', 'Características & Talentos', 'Pokéloja', 'Enciclopédia']

  const allClasses = [
    { name: 'Artista', color: '#87CEEB', isMaster: true }, { name: 'Beldade', color: '#87CEEB' },
    { name: 'Cativante', color: '#87CEEB' }, { name: 'Coreógrafo', color: '#87CEEB' },
    { name: 'Descolado', color: '#87CEEB' }, { name: 'Estilista', color: '#87CEEB' },
    { name: 'Nerd', color: '#87CEEB' }, { name: 'Parrudo', color: '#87CEEB' },
    { name: 'Captor', color: '#FFA500', isMaster: true }, { name: 'Artífice', color: '#FFA500' },
    { name: 'Colecionador', color: '#FFA500' }, { name: 'Domador', color: '#FFA500' },
    { name: 'Engenheiro', color: '#FFA500' }, { name: 'Ladrão', color: '#FFA500' },
    { name: 'Malabarista', color: '#FFA500' }, { name: 'Pokébolista', color: '#FFA500' },
    { name: 'Criador', color: '#FFC0CB', isMaster: true }, { name: 'Botânico', color: '#FFC0CB' },
    { name: 'Cozinheiro', color: '#FFC0CB' }, { name: 'Cuidador', color: '#FFC0CB' },
    { name: 'Evolucionista', color: '#FFC0CB' }, { name: 'Incubador', color: '#FFC0CB' },
    { name: 'Médico', color: '#FFC0CB' }, { name: 'Tutor', color: '#FFC0CB' },
    { name: 'Guerreiro', color: '#B8860B', isMaster: true }, { name: 'Artista Marcial', color: '#B8860B' },
    { name: 'Atleta', color: '#B8860B' }, { name: 'Áugure', color: '#B8860B' },
    { name: 'Bandido', color: '#B8860B' }, { name: 'Monge', color: '#B8860B' },
    { name: 'Ninja', color: '#B8860B' }, { name: 'Soldado', color: '#B8860B' },
    { name: 'Místico', color: '#800080', isMaster: true }, { name: 'Bardo', color: '#800080' },
    { name: 'Guardião', color: '#800080' }, { name: 'Ilusionista', color: '#800080' },
    { name: 'Médium', color: '#800080' }, { name: 'Orador', color: '#800080' },
    { name: 'Rúnico', color: '#800080' }, { name: 'Xamã', color: '#800080' },
    { name: 'Pesquisador', color: '#00008B', isMaster: true }, { name: 'Cientista', color: '#00008B' },
    { name: 'Fotógrafo', color: '#00008B' }, { name: 'Hipnólogo', color: '#00008B' },
    { name: 'Observador', color: '#00008B' }, { name: 'Ocultista', color: '#00008B' },
    { name: 'Petrologista', color: '#00008B' }, { name: 'Professor', color: '#00008B' },
    { name: 'Psíquico', color: '#8B4513', isMaster: true }, { name: 'Ardente', color: '#8B4513' },
    { name: 'Bruxo', color: '#8B4513' }, { name: 'Célio', color: '#8B4513' },
    { name: 'Empático', color: '#8B4513' }, { name: 'Nebuloso', color: '#8B4513' },
    { name: 'Terrulento', color: '#8B4513' }, { name: 'Vidente', color: '#8B4513' },
    { name: 'Ranger', color: '#228B22', isMaster: true }, { name: 'Aventureiro', color: '#228B22' },
    { name: 'Cavaleiro', color: '#228B22' }, { name: 'Detetive', color: '#228B22' },
    { name: 'Guia', color: '#228B22' }, { name: 'Oficial', color: '#228B22' },
    { name: 'Pactuário', color: '#228B22' }, { name: 'Policial', color: '#228B22' },
    { name: 'Treinador', color: '#DC143C', isMaster: true }, { name: 'Azarão', color: '#DC143C' },
    { name: 'Caçador', color: '#DC143C' }, { name: 'Elementalista', color: '#DC143C' },
    { name: 'Especialista', color: '#DC143C' }, { name: 'Estrategista', color: '#DC143C' },
    { name: 'Inquebrável', color: '#DC143C' }, { name: 'Síncrono', color: '#DC143C' }
  ]

  const skillsByAttribute = {
    saude: ['Apneia', 'Imunidade', 'Jejum', 'Resiliência'],
    ataque: ['Corrida', 'Força', 'Intimidação', 'Salto'],
    defesa: ['Concentração', 'Deflexão', 'Incansável', 'Regeneração'],
    ataqueEspecial: ['Engenharia', 'História', 'Investigação', 'Programação'],
    defesaEspecial: ['Empatia', 'Manha', 'Manipulação', 'Percepção'],
    velocidade: ['Acrobacia', 'Furtividade', 'Performance', 'Prestidigitação']
  }

  // Tabela de talentos por nível (incluindo características)
  const TALENTOS_POR_NIVEL = {
    1:3,2:4,3:5,4:6,5:7,6:8,7:9,8:10,9:11,10:12,11:13,12:13,13:14,14:14,15:15,16:15,17:16,18:16,19:17,20:17,
    21:18,22:18,23:19,24:19,25:20,26:20,27:21,28:21,29:22,30:22,31:23,32:23,33:24,34:24,35:25,36:25,37:26,
    38:26,39:27,40:27,41:28,42:28,43:29,44:29,45:30,46:30,47:31,48:31,49:32,50:32
  }

  // Função para gerar classes/subclasses aleatórias baseado no nível
  const generateRandomClasses = (level) => {
    let numClasses = 1
    if (level >= 5 && level <= 11) numClasses = 2
    else if (level >= 12 && level <= 23) numClasses = 3
    else if (level >= 24) numClasses = 4

    const selectedClasses = []
    const availableClasses = [...allClasses]

    for (let i = 0; i < numClasses; i++) {
      if (availableClasses.length === 0) break
      const randomIndex = Math.floor(Math.random() * availableClasses.length)
      selectedClasses.push(availableClasses[randomIndex].name)
      availableClasses.splice(randomIndex, 1)
    }

    return selectedClasses
  }

  // Função para obter características de uma classe
  const getClassCaracteristicas = (className) => {
    const caracteristicas = CARACTERISTICAS_DATA[className]
    if (!caracteristicas) return []
    return Object.entries(caracteristicas).map(([nome, data]) => ({
      nome,
      ...data,
      classe: className
    }))
  }

  // Função para gerar talentos aleatórios
  const generateRandomTalentos = (level, classes) => {
    const totalTalentos = TALENTOS_POR_NIVEL[level] || 3
    const selectedTalentos = []

    // Primeiro, adicionar todas as características das classes escolhidas
    classes.forEach(className => {
      const caracteristicas = getClassCaracteristicas(className)
      caracteristicas.forEach(carac => {
        selectedTalentos.push({ tipo: 'caracteristica', ...carac })
      })
    })

    // Calcular quantos talentos ainda faltam
    const talentosRestantes = totalTalentos - selectedTalentos.length

    if (talentosRestantes > 0) {
      // Coletar todos os talentos disponíveis das classes do NPC
      const availableTalentos = []

      classes.forEach(className => {
        if (TALENTOS_DATA[className]) {
          TALENTOS_DATA[className].forEach(talento => {
            availableTalentos.push({ tipo: 'talento', classe: className, ...talento })
          })
        }
      })

      // Adicionar talentos gerais
      if (TALENTOS_DATA['Geral']) {
        TALENTOS_DATA['Geral'].forEach(talento => {
          availableTalentos.push({ tipo: 'talento', classe: 'Geral', ...talento })
        })
      }

      // Selecionar talentos aleatórios
      for (let i = 0; i < talentosRestantes && availableTalentos.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableTalentos.length)
        selectedTalentos.push(availableTalentos[randomIndex])
        availableTalentos.splice(randomIndex, 1)
      }
    }

    return selectedTalentos
  }

  // Funções auxiliares
  const getModifier = (value) => {
    const map = {1:-9,2:-8,3:-7,4:-6,5:-5,6:-4,7:-3,8:-2,9:-1,10:0,11:0,12:1,13:1,14:2,15:2,16:3,17:3,18:4,19:4,20:5,21:5,22:6,23:6,24:7,25:7,26:8,27:8,28:9,29:9,30:10,31:10,32:11,33:11,34:12,35:12,36:13,37:13,38:14,39:14,40:15}
    return map[value] || 0
  }

  const getMaxHP = () => (level + attributes.saude) * 4

  const getDisplacement = () => {
    const modAtk = getModifier(attributes.ataque)
    const modDef = getModifier(attributes.defesa)
    const modSpd = getModifier(attributes.velocidade)
    return {
      terrestre: Math.max(5, 3 + Math.floor(Math.max(modAtk, modSpd) / 2)),
      natacao: Math.max(4, 2 + Math.floor(modDef / 2)),
      subaquatico: (modAtk >= 3 || modDef >= 3) ? 4 : 3
    }
  }

  const getEvasion = () => ({
    fisica: Math.floor(attributes.defesa / 5),
    especial: Math.floor(attributes.defesaEspecial / 5),
    veloz: Math.floor(attributes.velocidade / 5)
  })

  const getSkillCount = (attr, skill) => {
    return skills[attr].filter(s => s === skill).length
  }

  const toggleSkill = (attr, skill) => {
    const current = skills[attr]
    const count = current.filter(s => s === skill).length
    let newSkills
    if (count === 0) newSkills = [...current, skill]
    else if (count === 1) newSkills = [...current, skill]
    else newSkills = current.filter(s => s !== skill)
    setSkills({ ...skills, [attr]: newSkills })
  }

  const filteredSpecies = POKEMON_SPECIES.filter(s => 
    s.toLowerCase().includes(speciesSearch.toLowerCase())
  )

  // Calcular níveis automaticamente baseado em XP
  const calculateLevel = (currentXP) => {
    let level = 1
    for (let lvl = 100; lvl >= 1; lvl--) {
      if (currentXP >= XP_TABLE[lvl]) {
        level = lvl
        break
      }
    }
    return level
  }

  // Funções de cálculo para Treinador NPC
  const calculateModifier = (attributeValue) => {
    const modifierMap = {
      1: -9, 2: -8, 3: -7, 4: -6, 5: -5, 6: -4, 7: -3, 8: -2, 9: -1,
      10: 0, 11: 0, 12: 1, 13: 1, 14: 2, 15: 2, 16: 3, 17: 3, 18: 4,
      19: 4, 20: 5, 21: 5, 22: 6, 23: 6, 24: 7, 25: 7, 26: 8, 27: 8,
      28: 9, 29: 9, 30: 10, 31: 10, 32: 11, 33: 11, 34: 12, 35: 12,
      36: 13, 37: 13, 38: 14, 39: 14, 40: 15
    }
    return modifierMap[attributeValue] || 0
  }

  const calculateNPCHP = (level, saudeAttribute) => {
    return (level + saudeAttribute) * 4
  }

  const calculateDisplacement = (attributes) => {
    const modAtaque = calculateModifier(attributes.ataque)
    const modDefesa = calculateModifier(attributes.defesa)
    const modVelocidade = calculateModifier(attributes.velocidade)

    // Terrestre: 3 + metade do maior entre mod ataque ou velocidade, mínimo 5
    const terrestre = Math.max(5, 3 + Math.floor(Math.max(modAtaque, modVelocidade) / 2))

    // Natação: 2 + metade do mod defesa, mínimo 4
    const natacao = Math.max(4, Math.floor(2 + modDefesa / 2))

    // Subaquático: 3, aumenta para 4 se mod ataque ou defesa >= 3
    const subaquatico = (modAtaque >= 3 || modDefesa >= 3) ? 4 : 3

    return { terrestre, natacao, subaquatico }
  }

  const calculateEvasion = (attributes) => {
    // Física: defesa / 5
    const fisica = Math.floor(attributes.defesa / 5)

    // Especial: defesa especial / 5
    const especial = Math.floor(attributes.defesaEspecial / 5)

    // Veloz: velocidade / 5
    const veloz = Math.floor(attributes.velocidade / 5)

    return { fisica, especial, veloz }
  }

  const distributeRandomAttributes = (level) => {
    // Nível 1 tem 66 pontos, cada nível adicional dá +1 ponto
    const totalPoints = 66 + (level - 1)
    const minPerAttribute = 6
    const numAttributes = 6

    // Garantir mínimo de 6 em cada atributo
    const attributes = {
      saude: minPerAttribute,
      ataque: minPerAttribute,
      defesa: minPerAttribute,
      ataqueEspecial: minPerAttribute,
      defesaEspecial: minPerAttribute,
      velocidade: minPerAttribute
    }

    // Pontos restantes após garantir o mínimo
    let remainingPoints = totalPoints - (minPerAttribute * numAttributes)

    // Distribuir pontos restantes aleatoriamente
    const attrKeys = Object.keys(attributes)
    while (remainingPoints > 0) {
      const randomAttr = attrKeys[Math.floor(Math.random() * attrKeys.length)]
      attributes[randomAttr]++
      remainingPoints--
    }

    return attributes
  }

  // Sistema de Rolagem de Dados - Versão Avançada
  // Rola um único dado XdY e retorna os valores individuais
  const rollSingleDiceNotation = (numDice, numSides) => {
    const rolls = []
    let sum = 0

    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1
      rolls.push(roll)
      sum += roll
    }

    return { rolls, sum }
  }

  // Parser avançado que suporta expressões complexas: 2d4+4-4d3+1d6-5
  const rollDiceExpression = (expression) => {
    try {
      // Remove espaços em branco
      expression = expression.trim().replace(/\s/g, '')

      if (!expression) {
        return { error: 'Expressão vazia' }
      }

      // Validação básica de caracteres permitidos
      if (!/^[\dd\+\-]+$/i.test(expression)) {
        return { error: 'Expressão contém caracteres inválidos. Use apenas números, d, + e -' }
      }

      // Array para armazenar todos os detalhes das rolagens
      const rollDetails = []
      let expressionBreakdown = []

      // Divide a expressão em tokens (dados e números)
      // Suporta: 2d6, +3, -4d8, +1d4, etc.
      const tokens = expression.match(/[+-]?(\d+d\d+|\d+)/gi)

      if (!tokens || tokens.length === 0) {
        return { error: 'Nenhuma rolagem ou número válido encontrado' }
      }

      let total = 0

      tokens.forEach((token, index) => {
        // Determina o sinal (primeiro token é positivo por padrão)
        let sign = 1
        let cleanToken = token

        if (token.startsWith('+')) {
          sign = 1
          cleanToken = token.substring(1)
        } else if (token.startsWith('-')) {
          sign = -1
          cleanToken = token.substring(1)
        }

        // Verifica se é uma rolagem de dados (XdY)
        if (cleanToken.includes('d')) {
          const [numDiceStr, numSidesStr] = cleanToken.split('d')
          const numDice = parseInt(numDiceStr)
          const numSides = parseInt(numSidesStr)

          // Validações
          if (isNaN(numDice) || isNaN(numSides)) {
            throw new Error(`Formato inválido em: ${token}`)
          }

          if (numDice <= 0 || numDice > 100) {
            throw new Error(`Número de dados deve estar entre 1 e 100 em: ${token}`)
          }

          if (numSides <= 0 || numSides > 1000) {
            throw new Error(`Número de lados deve estar entre 1 e 1000 em: ${token}`)
          }

          // Rola os dados
          const { rolls, sum } = rollSingleDiceNotation(numDice, numSides)
          const value = sum * sign

          rollDetails.push({
            type: 'dice',
            notation: cleanToken,
            sign: sign > 0 ? '+' : '-',
            numDice,
            numSides,
            rolls,
            sum,
            value,
            display: `${sign > 0 && index > 0 ? '+' : sign < 0 ? '-' : ''}${cleanToken}[${rolls.join(', ')}]=${sum}`
          })

          expressionBreakdown.push({
            original: token,
            rolled: `[${rolls.join('+')}]`,
            sum: sum,
            signedSum: value
          })

          total += value

        } else {
          // É um número simples
          const num = parseInt(cleanToken)

          if (isNaN(num)) {
            throw new Error(`Número inválido: ${token}`)
          }

          const value = num * sign

          rollDetails.push({
            type: 'number',
            sign: sign > 0 ? '+' : '-',
            value,
            display: `${sign > 0 && index > 0 ? '+' : sign < 0 ? '-' : ''}${num}`
          })

          expressionBreakdown.push({
            original: token,
            value: value
          })

          total += value
        }
      })

      // Cria uma fórmula legível
      const formula = rollDetails.map(detail => detail.display).join(' ')

      // Cria breakdown detalhado
      const detailedFormula = expressionBreakdown.map(item => {
        if (item.rolled) {
          return `${item.original}${item.rolled}=${item.sum}`
        }
        return item.original
      }).join(' ')

      return {
        success: true,
        expression,
        total,
        rollDetails,
        formula,
        detailedFormula,
        breakdown: expressionBreakdown
      }

    } catch (error) {
      return {
        error: error.message || 'Erro ao processar expressão'
      }
    }
  }

  // Função legada mantida para compatibilidade (rolagem simples)
  const rollDice = (notation) => {
    const result = rollDiceExpression(notation)

    if (result.error) {
      return result
    }

    // Converte para o formato legado se for uma rolagem simples
    if (result.rollDetails.length === 1 && result.rollDetails[0].type === 'dice') {
      const detail = result.rollDetails[0]
      return {
        notation: detail.notation,
        numDice: detail.numDice,
        numSides: detail.numSides,
        modifier: 0,
        rolls: detail.rolls,
        sum: detail.sum,
        total: result.total,
        formula: result.formula
      }
    }

    return result
  }

  // Parser de texto para múltiplas expressões em um texto
  const parseDiceNotation = (text) => {
    const regex = /[\dd\+\-]+d[\dd\+\-]+/gi
    const matches = text.match(regex)

    if (!matches) {
      return null
    }

    return matches.map(expression => rollDiceExpression(expression))
  }

  // Handlers para Treinador NPC
  const handleSaveCustomTrainer = () => {
    if (!customTrainerForm.name.trim()) {
      alert('Por favor, insira um nome para o treinador.')
      return
    }

    const modifiers = {
      saude: calculateModifier(customTrainerForm.attributes.saude),
      ataque: calculateModifier(customTrainerForm.attributes.ataque),
      defesa: calculateModifier(customTrainerForm.attributes.defesa),
      ataqueEspecial: calculateModifier(customTrainerForm.attributes.ataqueEspecial),
      defesaEspecial: calculateModifier(customTrainerForm.attributes.defesaEspecial),
      velocidade: calculateModifier(customTrainerForm.attributes.velocidade)
    }

    // Gerar características e talentos se classes foram selecionadas
    let caracteristicasETalentos = []
    if (customTrainerForm.classes.length > 0) {
      if (customTrainerForm.talentosMode === 'aleatorio') {
        caracteristicasETalentos = generateRandomTalentos(customTrainerForm.level, customTrainerForm.classes)
      } else {
        // Modo manual - adicionar características automáticas + talentos selecionados
        customTrainerForm.classes.forEach(className => {
          const caracteristicas = getClassCaracteristicas(className)
          caracteristicas.forEach(carac => {
            caracteristicasETalentos.push({ tipo: 'caracteristica', ...carac })
          })
        })
        caracteristicasETalentos.push(...customTrainerForm.selectedTalentos)
      }
    }

    const newTrainer = {
      id: Date.now(),
      name: customTrainerForm.name,
      level: customTrainerForm.level,
      attributes: customTrainerForm.attributes,
      modifiers: modifiers,
      hp: calculateNPCHP(customTrainerForm.level, customTrainerForm.attributes.saude),
      currentHP: calculateNPCHP(customTrainerForm.level, customTrainerForm.attributes.saude),
      displacement: calculateDisplacement(customTrainerForm.attributes),
      evasion: calculateEvasion(customTrainerForm.attributes),
      classes: customTrainerForm.classes,
      caracteristicasETalentos: caracteristicasETalentos,
      isRandom: false
    }

    setNpcTrainers([...npcTrainers, newTrainer])
    setShowCustomTrainerModal(false)
    setCustomTrainerForm({
      name: '',
      level: 1,
      attributes: {
        saude: 6,
        ataque: 6,
        defesa: 6,
        ataqueEspecial: 6,
        defesaEspecial: 6,
        velocidade: 6
      },
      classes: [],
      talentosMode: 'aleatorio',
      selectedTalentos: []
    })
  }

  const handleSaveRandomTrainer = () => {
    if (!randomTrainerForm.name.trim()) {
      alert('Por favor, insira um nome para o treinador.')
      return
    }

    const randomAttributes = distributeRandomAttributes(randomTrainerForm.level)

    const modifiers = {
      saude: calculateModifier(randomAttributes.saude),
      ataque: calculateModifier(randomAttributes.ataque),
      defesa: calculateModifier(randomAttributes.defesa),
      ataqueEspecial: calculateModifier(randomAttributes.ataqueEspecial),
      defesaEspecial: calculateModifier(randomAttributes.defesaEspecial),
      velocidade: calculateModifier(randomAttributes.velocidade)
    }

    // Gerar classes/subclasses aleatórias
    const randomClasses = generateRandomClasses(randomTrainerForm.level)

    // Gerar características e talentos
    const randomTalentos = generateRandomTalentos(randomTrainerForm.level, randomClasses)

    const newTrainer = {
      id: Date.now(),
      name: randomTrainerForm.name,
      level: randomTrainerForm.level,
      attributes: randomAttributes,
      modifiers: modifiers,
      hp: calculateNPCHP(randomTrainerForm.level, randomAttributes.saude),
      currentHP: calculateNPCHP(randomTrainerForm.level, randomAttributes.saude),
      displacement: calculateDisplacement(randomAttributes),
      evasion: calculateEvasion(randomAttributes),
      classes: randomClasses,
      caracteristicasETalentos: randomTalentos,
      isRandom: true
    }

    setNpcTrainers([...npcTrainers, newTrainer])
    setShowRandomTrainerModal(false)
    setRandomTrainerForm({
      name: '',
      level: 1
    })
  }

  const handleDeleteNPC = (npcId) => {
    setNpcTrainers(npcTrainers.filter(npc => npc.id !== npcId))
  }

  // Handlers para Tutoria de Golpes
  const handleOpenTutoria = (pokemon, type) => {
    setSelectedPokemonForTutoria(pokemon)
    setSelectedPokemonTypeForTutoria(type)
    setTutoriaSelectedGolpes(pokemon.golpes || [])
    setTutoriaGolpesSearch('')
    setShowTutoriaModal(true)
  }

  const handleAddGolpeToSelected = (golpe) => {
    if (tutoriaSelectedGolpes.length >= 8) {
      alert('Máximo de 8 golpes atingido!')
      return
    }
    if (!tutoriaSelectedGolpes.includes(golpe)) {
      setTutoriaSelectedGolpes([...tutoriaSelectedGolpes, golpe])
    }
  }

  const handleRemoveGolpeFromSelected = (golpe) => {
    setTutoriaSelectedGolpes(tutoriaSelectedGolpes.filter(g => g !== golpe))
  }

  const handleSaveGolpes = () => {
    if (tutoriaSelectedGolpes.length < 1) {
      alert('Selecione pelo menos 1 golpe!')
      return
    }

    const updatedPokemon = { ...selectedPokemonForTutoria, golpes: tutoriaSelectedGolpes }

    if (selectedPokemonTypeForTutoria === 'team') {
      setMainTeam(mainTeam.map(p => p.id === selectedPokemonForTutoria.id ? updatedPokemon : p))
    } else {
      setPcPokemon(pcPokemon.map(p => p.id === selectedPokemonForTutoria.id ? updatedPokemon : p))
    }

    setShowTutoriaModal(false)
    setSelectedPokemonForTutoria(null)
    setSelectedPokemonTypeForTutoria(null)
    setTutoriaSelectedGolpes([])
  }

  const handleOpenGolpeDetail = (golpe) => {
    setSelectedGolpeForDetail(golpe)
    setShowGolpeDetailModal(true)
  }

  const handleOpenPCGolpes = (pokemon) => {
    setSelectedPokemonForPCGolpes(pokemon)
    setExpandedGolpeInPC(null)
    setShowPCGolpesModal(true)
  }

  // Funções de Habilidades
  const handleOpenHabilidades = (pokemon, type) => {
    setSelectedPokemonForHabilidades(pokemon)
    setSelectedPokemonTypeForHabilidades(type)
    setHabilidadesSelectedList(pokemon.habilidades || [])
    setHabilidadesSearch('')
    setShowHabilidadesModal(true)
  }

  const handleOpenHabilidadesPC = (pokemon, type) => {
    setSelectedPokemonForHabilidades(pokemon)
    setSelectedPokemonTypeForHabilidades(type)
    setHabilidadesSelectedList(pokemon.habilidades || [])
    setHabilidadesSearch('')
    setShowHabilidadesPCModal(true)
  }

  const handleAddHabilidadeToSelected = (habilidade) => {
    if (habilidadesSelectedList.length >= 2) {
      alert('Máximo de 2 habilidades atingido!')
      return
    }
    if (!habilidadesSelectedList.includes(habilidade)) {
      setHabilidadesSelectedList([...habilidadesSelectedList, habilidade])
    }
  }

  const handleRemoveHabilidadeFromSelected = (habilidade) => {
    setHabilidadesSelectedList(habilidadesSelectedList.filter(h => h !== habilidade))
  }

  const handleSaveHabilidades = () => {
    if (habilidadesSelectedList.length < 1) {
      alert('Selecione pelo menos 1 habilidade!')
      return
    }

    const updatedPokemon = { ...selectedPokemonForHabilidades, habilidades: habilidadesSelectedList }

    if (selectedPokemonTypeForHabilidades === 'team') {
      setMainTeam(mainTeam.map(p => p.id === selectedPokemonForHabilidades.id ? updatedPokemon : p))
    } else {
      setPcPokemon(pcPokemon.map(p => p.id === selectedPokemonForHabilidades.id ? updatedPokemon : p))
    }

    setShowHabilidadesModal(false)
    setSelectedPokemonForHabilidades(null)
    setSelectedPokemonTypeForHabilidades(null)
    setHabilidadesSelectedList([])
  }

  // Funções para sistema de Pokébolas
  const handleOpenPokeballModal = (pokemon, type) => {
    setSelectedPokemonForPokeball(pokemon)
    setSelectedPokemonTypeForPokeball(type)
    setSelectedPokeball(pokemon.pokeball || '')
    setPokeballSearch('')
    setShowPokeballModal(true)
  }

  const handleOpenPokeballPC = (pokemon, type) => {
    setSelectedPokemonForPokeball(pokemon)
    setSelectedPokemonTypeForPokeball(type)
    setSelectedPokeball(pokemon.pokeball || '')
    setPokeballSearch('')
    setShowPokeballPCModal(true)
  }

  // Handlers para Custom Pokeball (Time Principal)
  const handleSelectPokeball = (pokeball) => {
    if (pokeball === 'Custom Pokeball') {
      setShowCustomPokeballOptions(true)
    } else {
      setSelectedPokeball(pokeball)
    }
  }

  const handleConfirmCustomPokeball = () => {
    if (customPokeballUploadType === 'link' && !customPokeballLink.trim()) {
      alert('Por favor, insira um link válido para a imagem da pokébola!')
      return
    }
    if (customPokeballUploadType === 'file' && !customPokeballFile) {
      alert('Por favor, selecione um arquivo de imagem!')
      return
    }
    setSelectedPokeball('Custom Pokeball')
    setShowCustomPokeballOptions(false)
  }

  const handleCancelCustomPokeball = () => {
    setShowCustomPokeballOptions(false)
    setCustomPokeballLink('')
    setCustomPokeballFile(null)
    setCustomPokeballUploadType('link')
  }

  // Handlers para Custom Pokeball 2 (PC)
  const handleSelectPokeballPC = (pokeball) => {
    if (pokeball === 'Custom Pokeball 2') {
      setShowCustomPokeball2Options(true)
    } else {
      setSelectedPokeball(pokeball)
    }
  }

  const handleConfirmCustomPokeball2 = () => {
    if (customPokeball2UploadType === 'link' && !customPokeball2Link.trim()) {
      alert('Por favor, insira um link válido para a imagem da pokébola!')
      return
    }
    if (customPokeball2UploadType === 'file' && !customPokeball2File) {
      alert('Por favor, selecione um arquivo de imagem!')
      return
    }
    setSelectedPokeball('Custom Pokeball 2')
    setShowCustomPokeball2Options(false)
  }

  const handleCancelCustomPokeball2 = () => {
    setShowCustomPokeball2Options(false)
    setCustomPokeball2Link('')
    setCustomPokeball2File(null)
    setCustomPokeball2UploadType('link')
  }

  // Handler de salvamento único
  const handleSavePokeball = () => {
    if (!selectedPokeball) return

    const updatedPokemon = { ...selectedPokemonForPokeball, pokeball: selectedPokeball }

    // Custom Pokeball (Time Principal)
    if (selectedPokeball === 'Custom Pokeball') {
      if (customPokeballUploadType === 'link') {
        updatedPokemon.customPokeballImage = customPokeballLink
      } else if (customPokeballFile) {
        const reader = new FileReader()
        reader.onloadend = () => {
          updatedPokemon.customPokeballImage = reader.result
          setMainTeam(mainTeam.map(p => p.id === selectedPokemonForPokeball.id ? updatedPokemon : p))
        }
        reader.readAsDataURL(customPokeballFile)
        setShowPokeballModal(false)
        setSelectedPokemonForPokeball(null)
        setSelectedPokeball('')
        setPokeballSearch('')
        setCustomPokeballLink('')
        setCustomPokeballFile(null)
        setCustomPokeballUploadType('link')
        return
      }
    }

    // Custom Pokeball 2 (PC)
    if (selectedPokeball === 'Custom Pokeball 2') {
      if (customPokeball2UploadType === 'link') {
        updatedPokemon.customPokeballImage = customPokeball2Link
      } else if (customPokeball2File) {
        const reader = new FileReader()
        reader.onloadend = () => {
          updatedPokemon.customPokeballImage = reader.result
          setPcPokemon(pcPokemon.map(p => p.id === selectedPokemonForPokeball.id ? updatedPokemon : p))
        }
        reader.readAsDataURL(customPokeball2File)
        setShowPokeballPCModal(false)
        setSelectedPokemonForPokeball(null)
        setSelectedPokeball('')
        setPokeballSearch('')
        setCustomPokeball2Link('')
        setCustomPokeball2File(null)
        setCustomPokeball2UploadType('link')
        return
      }
    }

    // Pokébolas normais
    if (selectedPokemonTypeForPokeball === 'team') {
      setMainTeam(mainTeam.map(p => p.id === selectedPokemonForPokeball.id ? updatedPokemon : p))
    } else {
      setPcPokemon(pcPokemon.map(p => p.id === selectedPokemonForPokeball.id ? updatedPokemon : p))
    }

    setShowPokeballModal(false)
    setShowPokeballPCModal(false)
    setSelectedPokemonForPokeball(null)
    setSelectedPokeball('')
    setPokeballSearch('')
    setCustomPokeballLink('')
    setCustomPokeballFile(null)
    setCustomPokeballUploadType('link')
    setCustomPokeball2Link('')
    setCustomPokeball2File(null)
    setCustomPokeball2UploadType('link')
  }

  // Funções para sistema de Held Items
  const handleOpenHeldItemModal = (pokemon, type) => {
    setSelectedPokemonForHeldItem(pokemon)
    setSelectedPokemonTypeForHeldItem(type)
    setHeldItemName(pokemon.heldItem?.name || '')
    setHeldItemDescription(pokemon.heldItem?.description || '')
    setShowHeldItemModal(true)
  }

  const handleOpenHeldItemPC = (pokemon, type) => {
    setSelectedPokemonForHeldItem(pokemon)
    setSelectedPokemonTypeForHeldItem(type)
    setHeldItemName(pokemon.heldItem?.name || '')
    setHeldItemDescription(pokemon.heldItem?.description || '')
    setShowHeldItemPCModal(true)
  }

  const handleSaveHeldItem = () => {
    if (!heldItemName.trim()) {
      alert('Por favor, insira o nome do item!')
      return
    }

    const updatedPokemon = {
      ...selectedPokemonForHeldItem,
      heldItem: {
        name: heldItemName.trim(),
        description: heldItemDescription.trim()
      }
    }

    if (selectedPokemonTypeForHeldItem === 'team') {
      setMainTeam(mainTeam.map(p => p.id === selectedPokemonForHeldItem.id ? updatedPokemon : p))
    } else {
      setPcPokemon(pcPokemon.map(p => p.id === selectedPokemonForHeldItem.id ? updatedPokemon : p))
    }

    setShowHeldItemModal(false)
    setSelectedPokemonForHeldItem(null)
    setSelectedPokemonTypeForHeldItem(null)
    setHeldItemName('')
    setHeldItemDescription('')
  }

  const handleOpenHeldItemDetail = (heldItem) => {
    setSelectedHeldItemForDetail(heldItem)
    setShowHeldItemDetailModal(true)
  }

  const getRandomNoItemPhrase = () => {
    return NO_HELD_ITEM_PHRASES[Math.floor(Math.random() * NO_HELD_ITEM_PHRASES.length)]
  }

  // Função para obter o nome correto do arquivo de imagem do item
  const getItemImagePath = (itemName) => {
    // Mapeamento de nomes de itens para nomes de arquivos
    const imageMap = {
      'Pokébola': 'pokeball',
      'Super Repel': 'superrepel',
      'Max Repel': 'maxrepel',
      'Rare Candy': 'rarecandy',
      'PP-up': 'ppup',
      'Hp-up': 'hpup',
      'Proteína': 'proteina',
      'Cálcio': 'calcio'
    }

    // Se existe um mapeamento específico, usa ele
    if (imageMap[itemName]) {
      return `/pokeballs/${imageMap[itemName]}.png`
    }

    // Caso contrário, converte para lowercase
    return `/pokeballs/${itemName.toLowerCase()}.png`
  }

  // Função para obter a descrição do item da PokéLoja
  const getItemDescription = (itemName) => {
    // Percorre todos os corredores da loja
    for (const corredor in POKELOJA_DATA) {
      const item = POKELOJA_DATA[corredor].find(i => i.name === itemName)
      if (item) {
        return item.description
      }
    }
    return 'Descrição não disponível'
  }

  // Função para mostrar descrição do item chave
  const handleShowKeyItemDescription = (itemName) => {
    const description = getItemDescription(itemName)
    setSelectedItemForDescription({ name: itemName, description })
    setShowItemDescriptionModal(true)
  }

  // Funções para sistema de Mochila
  const handleAddKeyItem = () => {
    if (!selectedKeyItem) {
      alert('Selecione um item!')
      return
    }

    const existingItem = keyItems.find(item => item.name === selectedKeyItem)
    if (existingItem) {
      setKeyItems(keyItems.map(item =>
        item.name === selectedKeyItem
          ? { ...item, quantity: item.quantity + keyItemQuantity }
          : item
      ))
    } else {
      setKeyItems([...keyItems, { name: selectedKeyItem, quantity: keyItemQuantity }])
    }

    setShowAddKeyItemModal(false)
    setSelectedKeyItem('')
    setKeyItemQuantity(1)
  }

  // Incrementar quantidade de item chave
  const handleIncrementKeyItem = (itemName) => {
    setKeyItems(keyItems.map(item =>
      item.name === itemName
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  // Decrementar quantidade de item chave
  const handleDecrementKeyItem = (itemName) => {
    setKeyItems(keyItems.map(item =>
      item.name === itemName && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0))
  }

  // Abrir modal para editar quantidade de item chave
  const handleOpenEditKeyItemQuantity = (item) => {
    setSelectedKeyItemForEdit(item)
    setEditKeyItemQuantity(item.quantity)
    setShowEditKeyItemQuantityModal(true)
  }

  // Salvar quantidade editada de item chave
  const handleSaveEditKeyItemQuantity = () => {
    if (editKeyItemQuantity < 1) {
      alert('A quantidade deve ser pelo menos 1!')
      return
    }

    setKeyItems(keyItems.map(item =>
      item.name === selectedKeyItemForEdit.name
        ? { ...item, quantity: editKeyItemQuantity }
        : item
    ))

    setShowEditKeyItemQuantityModal(false)
    setSelectedKeyItemForEdit(null)
    setEditKeyItemQuantity(1)
  }

  // Abrir modal de confirmação de exclusão
  const handleOpenDeleteConfirm = (item, type) => {
    setItemToDelete(item)
    setDeleteType(type)
    setShowDeleteConfirmModal(true)
  }

  // Confirmar exclusão
  const handleConfirmDelete = () => {
    if (deleteType === 'keyItem') {
      setKeyItems(keyItems.filter(i => i.name !== itemToDelete))
    } else if (deleteType === 'customItem') {
      setCustomItems(customItems.filter((_, i) => i !== itemToDelete))
    }

    setShowDeleteConfirmModal(false)
    setItemToDelete(null)
    setDeleteType(null)
  }

  const handleAddCustomItem = () => {
    if (!customItemName.trim()) {
      alert('Insira o nome do item!')
      return
    }

    const existingItem = customItems.find(item => item.name === customItemName.trim())
    if (existingItem) {
      setCustomItems(customItems.map(item =>
        item.name === customItemName.trim()
          ? { ...item, quantity: item.quantity + customItemQuantity }
          : item
      ))
    } else {
      setCustomItems([...customItems, {
        name: customItemName.trim(),
        quantity: customItemQuantity,
        description: customItemDescription.trim()
      }])
    }

    setShowAddCustomItemModal(false)
    setCustomItemName('')
    setCustomItemQuantity(1)
    setCustomItemDescription('')
  }

  const handleGiveItemToPokemon = () => {
    if (!selectedPokemonToReceiveItem) {
      alert('Selecione um Pokémon!')
      return
    }

    // Converter para número para garantir comparação correta
    const pokemonId = parseInt(selectedPokemonToReceiveItem)
    const pokemon = mainTeam.find(p => p.id === pokemonId)
    if (!pokemon) {
      alert('Pokémon não encontrado!')
      return
    }

    const updatedPokemon = {
      ...pokemon,
      heldItem: {
        name: selectedItemToGive.name,
        description: selectedItemToGive.description || ''
      }
    }

    setMainTeam(mainTeam.map(p => p.id === pokemonId ? updatedPokemon : p))

    // Remover o item da mochila
    const updatedCustomItems = customItems.map(item =>
      item.name === selectedItemToGive.name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0)

    setCustomItems(updatedCustomItems)

    // Resetar estados e fechar modal
    setShowGiveItemModal(false)
    setSelectedItemToGive(null)
    setSelectedPokemonToReceiveItem(null)

    alert(`${selectedItemToGive.name} foi dado para ${pokemon.nickname}!`)
  }

  // Abrir modal para editar item customizado
  const handleOpenEditCustomItem = (item, index) => {
    setSelectedCustomItemForEdit(index)
    setEditCustomItemName(item.name)
    setEditCustomItemQuantity(item.quantity)
    setEditCustomItemDescription(item.description)
    setShowEditCustomItemModal(true)
  }

  // Salvar edição de item customizado
  const handleSaveEditCustomItem = () => {
    if (!editCustomItemName.trim()) {
      alert('O nome do item não pode estar vazio!')
      return
    }

    if (editCustomItemQuantity < 1) {
      alert('A quantidade deve ser pelo menos 1!')
      return
    }

    setCustomItems(customItems.map((item, idx) =>
      idx === selectedCustomItemForEdit
        ? {
            name: editCustomItemName.trim(),
            quantity: editCustomItemQuantity,
            description: editCustomItemDescription.trim()
          }
        : item
    ))

    setShowEditCustomItemModal(false)
    setSelectedCustomItemForEdit(null)
    setEditCustomItemName('')
    setEditCustomItemQuantity(1)
    setEditCustomItemDescription('')
  }

  // Funções para manipular Pokémonedas
  const handlePerdeuPokemonedas = () => {
    const value = parseInt(pokemonedasValue) || 0
    setPokemonedas(Math.max(0, pokemonedas - value))
    setShowPokemonedasModal(false)
    setPokemonedasValue('')
  }

  const handleSaldoPokemonedas = () => {
    const value = parseInt(pokemonedasValue) || 0
    setPokemonedas(Math.max(0, value))
    setShowPokemonedasModal(false)
    setPokemonedasValue('')
  }

  const handleAcheiPokemonedas = () => {
    const value = parseInt(pokemonedasValue) || 0
    setPokemonedas(pokemonedas + value)
    setShowPokemonedasModal(false)
    setPokemonedasValue('')
  }

  // Enviar held item de volta para a mochila
  const handleReturnItemToBackpack = (pokemon, isPC = false) => {
    if (!pokemon.heldItem) {
      alert('Este Pokémon não está segurando nenhum item!')
      return
    }

    const itemName = pokemon.heldItem.name
    const itemDescription = pokemon.heldItem.description

    // Remover o item do pokémon
    const updatedPokemon = { ...pokemon, heldItem: null }

    if (isPC) {
      setPcPokemon(pcPokemon.map(p => p.id === pokemon.id ? updatedPokemon : p))
    } else {
      setMainTeam(mainTeam.map(p => p.id === pokemon.id ? updatedPokemon : p))
    }

    // Adicionar o item de volta à mochila
    const existingItem = customItems.find(item => item.name === itemName)
    if (existingItem) {
      // Incrementar quantidade se já existe
      const updatedCustomItems = customItems.map(item =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCustomItems(updatedCustomItems)
    } else {
      // Adicionar novo item
      setCustomItems([...customItems, {
        name: itemName,
        quantity: 1,
        description: itemDescription
      }])
    }

    alert(`${itemName} foi devolvido para a mochila!`)
  }

  // Funções da PokéLoja
  const toggleCorredor = (corredor) => {
    setExpandedCorredores(prev => ({
      ...prev,
      [corredor]: !prev[corredor]
    }))
  }

  const handleOpenItemDescription = (item) => {
    setSelectedItemForDescription(item)
    setShowItemDescriptionModal(true)
  }

  const handleOpenBuyItemModal = (item) => {
    setSelectedItemToBuy(item)
    setBuyItemQuantity(1)
    setShowBuyItemModal(true)
  }

  const handleBuyItem = () => {
    if (!selectedItemToBuy) {
      alert('Nenhum item selecionado!')
      return
    }

    const totalPrice = selectedItemToBuy.price * buyItemQuantity

    if (pokemonedas < totalPrice) {
      alert(`Pokémoedas insuficientes! Você precisa de ${totalPrice}₽ mas tem apenas ${pokemonedas}₽`)
      return
    }

    // Descontar pokémoedas
    setPokemonedas(pokemonedas - totalPrice)

    // Adicionar item à mochila (keyItems)
    const existingItem = keyItems.find(item => item.name === selectedItemToBuy.name)
    if (existingItem) {
      const updatedKeyItems = keyItems.map(item =>
        item.name === selectedItemToBuy.name
          ? { ...item, quantity: item.quantity + buyItemQuantity }
          : item
      )
      setKeyItems(updatedKeyItems)
    } else {
      setKeyItems([...keyItems, {
        name: selectedItemToBuy.name,
        quantity: buyItemQuantity
      }])
    }

    alert(`Você comprou ${buyItemQuantity}x ${selectedItemToBuy.name} por ${totalPrice}₽!`)

    // Resetar estados
    setShowBuyItemModal(false)
    setSelectedItemToBuy(null)
    setBuyItemQuantity(1)
  }

  // Adicionar Pokémon
  const handleAddPokemon = () => {
    const species = pokemonForm.isExotic ? pokemonForm.exoticSpecies : pokemonForm.species

    if (!species) {
      alert('Selecione ou digite uma espécie!')
      return
    }

    if (pokemonForm.isCaptured && !pokemonForm.nickname) {
      alert('Pokémon capturado precisa de um nome!')
      return
    }

    // Se for exótico, abrir modal para coletar dados completos
    if (pokemonForm.isExotic) {
      setExoticDataForm({
        dexNumber: '',
        altura: '',
        peso: '',
        genero: '',
        tipos: [''],
        habitats: [''],
        catchRate: '',
        baseExp: '',
        evolucao: '',
        evolucaoNivel: '',
        evolucaoItem: '',
        statusBasais: {
          saude: '',
          ataque: '',
          defesa: '',
          ataqueEspecial: '',
          defesaEspecial: '',
          velocidade: ''
        }
      })
      setShowExoticDataModal(true)
      return
    }

    const newPokemon = {
      id: Date.now(),
      nickname: pokemonForm.nickname || species,
      species: species,
      level: pokemonForm.isCaptured ? pokemonForm.level : 1,
      totalXP: pokemonForm.isCaptured ? (XP_TABLE[pokemonForm.level] || 0) : 0,
      isCaptured: pokemonForm.isCaptured,
      isExotic: pokemonForm.isExotic,
      golpes: []
    }

    // Adicionar à Pokédex
    if (!pokedex.find(p => p.species === species)) {
      setPokedex([...pokedex, { species, isCaptured: pokemonForm.isCaptured }])
    } else if (pokemonForm.isCaptured) {
      setPokedex(pokedex.map(p => p.species === species ? { ...p, isCaptured: true } : p))
    }

    // Se capturado, adicionar ao time ou PC
    if (pokemonForm.isCaptured) {
      if (mainTeam.length < 6) {
        setMainTeam([...mainTeam, newPokemon])
      } else {
        setPcPokemon([...pcPokemon, newPokemon])
      }
    }

    // Resetar formulário
    setPokemonForm({
      nickname: '',
      species: '',
      isCaptured: false,
      isExotic: false,
      level: 1,
      exoticSpecies: '',
      currentXP: 0
    })
    setSpeciesSearch('')
    setShowAddPokemonModal(false)
  }

  // Excluir Pokémon
  const handleDeletePokemon = (index) => {
    if (confirm('Deseja realmente excluir este Pokémon do time?')) {
      const newTeam = mainTeam.filter((_, i) => i !== index)
      setMainTeam(newTeam)
    }
  }

  // Mover Pokémon do Time para o PC
  const moveToPc = (index) => {
    const pokemon = mainTeam[index]
    setMainTeam(mainTeam.filter((_, i) => i !== index))
    setPcPokemon([...pcPokemon, pokemon])
  }

  // Mover Pokémon do PC para o Time
  const moveToTeam = (index) => {
    if (mainTeam.length >= 6) {
      alert('Time Principal está cheio! Máximo de 6 Pokémon.')
      return
    }
    const pokemon = pcPokemon[index]
    setPcPokemon(pcPokemon.filter((_, i) => i !== index))
    setMainTeam([...mainTeam, pokemon])
  }

  // Excluir Pokémon do PC
  const handleDeleteFromPc = (index) => {
    if (confirm('Deseja realmente excluir este Pokémon do PC?')) {
      setPcPokemon(pcPokemon.filter((_, i) => i !== index))
    }
  }

  // Marcar Pokémon como capturado na Pokédex
  const markAsCaptured = (species) => {
    setPokedex(pokedex.map(p => p.species === species ? { ...p, isCaptured: true } : p))
  }

  // Remover Pokémon da Pokédex
  const removeFromPokedex = (species) => {
    if (confirm(`Tem certeza que deseja remover ${species} da Pokédex?`)) {
      setPokedex(pokedex.filter(p => p.species !== species))
    }
  }

  // Abrir modal de imagem para Pokémon
  const openImageModal = (pokemon) => {
    setSelectedPokemonForImage(pokemon)
    setImageUrl(pokemonImages[pokemon.id] || '')
    setImageUploadType('link')
    setShowImageModal(true)
  }

  // Salvar imagem do Pokémon
  const handleSaveImage = () => {
    if (imageUploadType === 'link' && imageUrl.trim()) {
      setPokemonImages({
        ...pokemonImages,
        [selectedPokemonForImage.id]: imageUrl
      })
      setShowImageModal(false)
      setImageUrl('')
      setSelectedPokemonForImage(null)
    } else if (imageUploadType === 'file') {
      // Para upload de arquivo local, usamos FileReader
      const fileInput = document.getElementById('pokemon-image-file')
      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setPokemonImages({
            ...pokemonImages,
            [selectedPokemonForImage.id]: e.target.result
          })
          setShowImageModal(false)
          setImageUrl('')
          setSelectedPokemonForImage(null)
        }
        reader.readAsDataURL(fileInput.files[0])
      }
    }
  }

  // Salvar dados do Pokémon exótico e adicionar
  const handleSaveExoticData = () => {
    const species = pokemonForm.exoticSpecies

    // Validações básicas
    if (!exoticDataForm.altura || !exoticDataForm.peso || !exoticDataForm.tipos[0]) {
      alert('Preencha pelo menos Altura, Peso e um Tipo!')
      return
    }

    // Criar objeto de dados completos do Pokémon exótico
    const exoticFullData = {
      nome: species,
      dexNumber: exoticDataForm.dexNumber || 9999,
      altura: parseFloat(exoticDataForm.altura) || 0,
      peso: parseFloat(exoticDataForm.peso) || 0,
      genero: exoticDataForm.genero || 'Desconhecido',
      tipos: exoticDataForm.tipos.filter(t => t.trim() !== ''),
      habitats: exoticDataForm.habitats.filter(h => h.trim() !== ''),
      catchRate: parseInt(exoticDataForm.catchRate) || 0,
      baseExp: parseInt(exoticDataForm.baseExp) || 0,
      evolucao: exoticDataForm.evolucao || null,
      evolucaoNivel: exoticDataForm.evolucaoNivel ? parseInt(exoticDataForm.evolucaoNivel) : null,
      evolucaoItem: exoticDataForm.evolucaoItem || null,
      statusBasais: {
        saude: parseInt(exoticDataForm.statusBasais.saude) || 0,
        ataque: parseInt(exoticDataForm.statusBasais.ataque) || 0,
        defesa: parseInt(exoticDataForm.statusBasais.defesa) || 0,
        ataqueEspecial: parseInt(exoticDataForm.statusBasais.ataqueEspecial) || 0,
        defesaEspecial: parseInt(exoticDataForm.statusBasais.defesaEspecial) || 0,
        velocidade: parseInt(exoticDataForm.statusBasais.velocidade) || 0
      }
    }

    const newPokemon = {
      id: Date.now(),
      nickname: pokemonForm.nickname || species,
      species: species,
      level: pokemonForm.isCaptured ? pokemonForm.level : 1,
      totalXP: pokemonForm.isCaptured ? (XP_TABLE[pokemonForm.level] || 0) : 0,
      isCaptured: pokemonForm.isCaptured,
      isExotic: true,
      golpes: []
    }

    // Adicionar à Pokédex com dados completos
    if (!pokedex.find(p => p.species === species)) {
      setPokedex([...pokedex, {
        species,
        isCaptured: pokemonForm.isCaptured,
        isExotic: true,
        exoticData: exoticFullData
      }])
    } else {
      setPokedex(pokedex.map(p =>
        p.species === species
          ? { ...p, isCaptured: pokemonForm.isCaptured, exoticData: exoticFullData }
          : p
      ))
    }

    // Se capturado, adicionar ao time ou PC
    if (pokemonForm.isCaptured) {
      if (mainTeam.length < 6) {
        setMainTeam([...mainTeam, newPokemon])
      } else {
        setPcPokemon([...pcPokemon, newPokemon])
      }
    }

    // Resetar formulários
    setPokemonForm({
      nickname: '',
      species: '',
      isCaptured: false,
      isExotic: false,
      level: 1,
      exoticSpecies: '',
      totalXP: 0
    })

    setShowExoticDataModal(false)
    alert(pokemonForm.isCaptured ? `${species} capturado e adicionado!` : `${species} escaneado e adicionado à Pokédex!`)
  }

  // Função para calcular HP máximo: (3 x Saúde) + Nível
  const calculateMaxHP = (pokemon) => {
    const saudeBase = parseInt(pokemon.baseAttributes?.saude) || 0
    const selectedNature = natures.find(n => n.nome === pokemon.nature)
    const isIncreased = selectedNature?.up === 'Saúde'
    const isDecreased = selectedNature?.down === 'Saúde'
    const natureBonus = isIncreased ? 1 : isDecreased ? -1 : 0
    const saudePontos = parseInt(pokemon.levelPoints?.saude) || 0
    const saudeTotal = saudeBase + natureBonus + saudePontos
    return (3 * saudeTotal) + (pokemon.level || 1)
  }

  // Função auxiliar para calcular atributo total com natureza
  const calculateTotalAttribute = (pokemon, attributeKey, attributeLabel) => {
    const baseVal = parseInt(pokemon.baseAttributes?.[attributeKey]) || 0
    const selectedNature = natures.find(n => n.nome === pokemon.nature)
    const isIncreased = selectedNature?.up === attributeLabel
    const isDecreased = selectedNature?.down === attributeLabel
    const natureBonus = attributeKey === 'saude' ? (isIncreased ? 1 : isDecreased ? -1 : 0) : (isIncreased ? 2 : isDecreased ? -2 : 0)
    const levelPoints = parseInt(pokemon.levelPoints?.[attributeKey]) || 0
    return baseVal + natureBonus + levelPoints
  }

  // Função para buscar tipos do Pokémon do pokemonData
  const getPokemonTypes = (pokemon) => {
    if (!pokemon.species) return []
    const foundPokemon = pokedexData.find(p => p.nome.toLowerCase() === pokemon.species.toLowerCase())
    if (foundPokemon && foundPokemon.tipos) {
      // Converter "Aço" para "Metal" conforme solicitado
      return foundPokemon.tipos.map(tipo => tipo === 'Aço' ? 'Metal' : tipo)
    }
    return []
  }

  // Função para calcular Evasão Física: Defesa / 5 (arredondado para baixo)
  const calculatePhysicalEvasion = (pokemon) => {
    const defesa = calculateTotalAttribute(pokemon, 'defesa', 'Defesa')
    return Math.floor(defesa / 5)
  }

  // Função para calcular Evasão Especial: Defesa Especial / 5 (arredondado para baixo)
  const calculateSpecialEvasion = (pokemon) => {
    const defesaEspecial = calculateTotalAttribute(pokemon, 'defesaEspecial', 'Defesa Especial')
    return Math.floor(defesaEspecial / 5)
  }

  // Função para calcular Evasão Veloz: Velocidade / 10 (arredondado para baixo)
  const calculateSpeedEvasion = (pokemon) => {
    const velocidade = calculateTotalAttribute(pokemon, 'velocidade', 'Velocidade')
    return Math.floor(velocidade / 10)
  }

  // Função para calcular Bônus Elemental: Nível / 5 (arredondado para baixo)
  const calculateElementalBonus = (pokemon) => {
    return Math.floor((pokemon.level || 1) / 5)
  }

  // Função para calcular felicidade máxima: Nível + 5
  const calculateMaxHappiness = (pokemon) => {
    return (pokemon.level || 1) + 5
  }

  // Função para abrir modal de felicidade
  const openHappinessModal = (pokemon, index) => {
    setSelectedPokemonHappinessIndex(index)
    setHappinessAmount('')
    setShowHappinessModal(true)
  }

  // Função para aumentar felicidade (botão Feliz)
  const handleIncreaseHappiness = () => {
    const amount = parseInt(happinessAmount) || 0
    if (amount <= 0) return

    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonHappinessIndex]
    const maxHappiness = calculateMaxHappiness(pokemon)

    pokemon.currentHappiness = Math.min(maxHappiness, (pokemon.currentHappiness || 0) + amount)

    setMainTeam(updatedTeam)
    setShowHappinessModal(false)
    setHappinessAmount('')
  }

  // Função para diminuir felicidade (botão Triste)
  const handleDecreaseHappiness = () => {
    const amount = parseInt(happinessAmount) || 0
    if (amount <= 0) return

    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonHappinessIndex]

    pokemon.currentHappiness = Math.max(0, (pokemon.currentHappiness || 0) - amount)

    setMainTeam(updatedTeam)
    setShowHappinessModal(false)
    setHappinessAmount('')
  }

  // Abrir modal de captura
  const openCaptureModal = (species) => {
    setPokemonToCapture(species)
    setCaptureForm({ nickname: '', level: 5 })
    setShowCaptureModal(true)
  }

  // Confirmar captura de Pokémon
  const handleCapturePokemon = () => {
    if (!captureForm.nickname.trim()) {
      alert('Por favor, digite um nome para o Pokémon!')
      return
    }

    const newPokemon = {
      id: Date.now(),
      nickname: captureForm.nickname,
      species: pokemonToCapture,
      level: captureForm.level,
      totalXP: XP_TABLE[captureForm.level] || 0, // XP total do nível inicial
      currentHP: 0, // Será calculado depois
      currentHappiness: 0, // Felicidade inicial
      isCaptured: true,
      isExotic: false,
      golpes: []
    }

    // Calcular HP máximo e definir HP atual como máximo
    const maxHP = calculateMaxHP(newPokemon)
    newPokemon.currentHP = maxHP

    // Marcar como capturado na Pokédex
    markAsCaptured(pokemonToCapture)

    // Adicionar ao time ou PC
    if (mainTeam.length < 6) {
      setMainTeam([...mainTeam, newPokemon])
      alert(`${pokemonToCapture} capturado e adicionado ao Time Principal!`)
    } else {
      setPcPokemon([...pcPokemon, newPokemon])
      alert(`Time cheio! ${pokemonToCapture} capturado e enviado ao PC.`)
    }

    setShowCaptureModal(false)
    setCaptureForm({ nickname: '', level: 5 })
    setPokemonToCapture(null)
  }

  // Função para abrir modal de edição de Pokémon
  const openEditPokemonModal = (pokemon, location, index) => {
    setEditingPokemon({ ...pokemon, index })
    setEditingPokemonLocation(location)

    // Buscar atributos basais do pokemonData por espécie
    let baseAttributesFromData = {
      saude: '',
      ataque: '',
      defesa: '',
      ataqueEspecial: '',
      defesaEspecial: '',
      velocidade: ''
    }

    // Procurar o Pokémon na Pokédex pelo nome da espécie
    const pokemonSpecies = pokemon.species || pokemon.nickname
    const foundPokemon = pokedexData.find(p => p.nome.toLowerCase() === pokemonSpecies.toLowerCase())

    if (foundPokemon && foundPokemon.statusBasais) {
      baseAttributesFromData = {
        saude: foundPokemon.statusBasais.saude || '',
        ataque: foundPokemon.statusBasais.ataque || '',
        defesa: foundPokemon.statusBasais.defesa || '',
        ataqueEspecial: foundPokemon.statusBasais.ataqueEspecial || '',
        defesaEspecial: foundPokemon.statusBasais.defesaEspecial || '',
        velocidade: foundPokemon.statusBasais.velocidade || ''
      }
    }

    // Preencher formulário com dados existentes ou buscar do pokemonData
    setPokemonEditForm({
      nature: pokemon.nature || '',
      baseAttributes: pokemon.baseAttributes || baseAttributesFromData,
      levelPoints: pokemon.levelPoints || {
        saude: '',
        ataque: '',
        defesa: '',
        ataqueEspecial: '',
        defesaEspecial: '',
        velocidade: ''
      },
      displacement: pokemon.displacement || {
        terrestre: '',
        nadar: '',
        voar: '',
        cavar: '',
        submerso: ''
      },
      weight: pokemon.weight || '',
      height: pokemon.height || '',
      loyalty: pokemon.loyalty || '',
      capacities: pokemon.capacities || {
        forca: '',
        inteligencia: '',
        salto: '',
        others: []
      }
    })
    setNatureSearch('')
    setShowEditPokemonModal(true)
  }

  // Função para abrir modal de edição de Pokémon do PC
  const openEditPokemonPCModal = (pokemon, index) => {
    setEditingPokemon({ ...pokemon, index })
    setEditingPokemonLocation('pc')

    // Buscar atributos basais do pokemonData por espécie
    let baseAttributesFromData = {
      saude: '',
      ataque: '',
      defesa: '',
      ataqueEspecial: '',
      defesaEspecial: '',
      velocidade: ''
    }

    // Procurar o Pokémon na Pokédex pelo nome da espécie
    const pokemonSpecies = pokemon.species || pokemon.nickname
    const foundPokemon = pokedexData.find(p => p.nome.toLowerCase() === pokemonSpecies.toLowerCase())

    if (foundPokemon && foundPokemon.statusBasais) {
      baseAttributesFromData = {
        saude: foundPokemon.statusBasais.saude || '',
        ataque: foundPokemon.statusBasais.ataque || '',
        defesa: foundPokemon.statusBasais.defesa || '',
        ataqueEspecial: foundPokemon.statusBasais.ataqueEspecial || '',
        defesaEspecial: foundPokemon.statusBasais.defesaEspecial || '',
        velocidade: foundPokemon.statusBasais.velocidade || ''
      }
    }

    // Preencher formulário com dados existentes ou buscar do pokemonData
    setPokemonEditForm({
      nature: pokemon.nature || '',
      baseAttributes: pokemon.baseAttributes || baseAttributesFromData,
      levelPoints: pokemon.levelPoints || {
        saude: '',
        ataque: '',
        defesa: '',
        ataqueEspecial: '',
        defesaEspecial: '',
        velocidade: ''
      },
      displacement: pokemon.displacement || {
        terrestre: '',
        nadar: '',
        voar: '',
        cavar: '',
        submerso: ''
      },
      weight: pokemon.weight || '',
      height: pokemon.height || '',
      loyalty: pokemon.loyalty || '',
      capacities: pokemon.capacities || {
        forca: '',
        inteligencia: '',
        salto: '',
        others: []
      }
    })
    setNatureSearch('')
    setShowEditPokemonPCModal(true)
  }

  // Função para salvar edição de Pokémon
  const handleSaveEditPokemon = () => {
    const updatedPokemon = {
      ...editingPokemon,
      ...pokemonEditForm
    }

    if (editingPokemonLocation === 'team') {
      const updatedTeam = [...mainTeam]
      updatedTeam[editingPokemon.index] = updatedPokemon
      setMainTeam(updatedTeam)
    } else if (editingPokemonLocation === 'pc') {
      const updatedPc = [...pcPokemon]
      updatedPc[editingPokemon.index] = updatedPokemon
      setPcPokemon(updatedPc)
    }

    setShowEditPokemonModal(false)
    setEditingPokemon(null)
    setEditingPokemonLocation(null)
  }

  // Função para abrir modal de visualização de informações do Pokémon
  const openPokemonInfoModal = (pokemon) => {
    setViewingPokemon(pokemon)
    setShowPokemonInfoModal(true)
  }

  // Função para abrir modal de Dano/Cura de Pokémon
  const openPokemonHPModal = (pokemon, index) => {
    setSelectedPokemonHP(pokemon)
    setSelectedPokemonHPIndex(index)
    setHpAmount('')
    setShowPokemonHPModal(true)
  }

  // Função para aplicar dano ao Pokémon
  const handleDamagePokemon = () => {
    const damage = parseInt(hpAmount) || 0
    if (damage <= 0) return

    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonHPIndex]
    
    let remainingDamage = damage
    
    // Primeiro, subtrair do HP Temporário
    if (pokemon.temporaryHP && pokemon.temporaryHP > 0) {
      if (pokemon.temporaryHP >= remainingDamage) {
        // HP Temporário absorve todo o dano
        pokemon.temporaryHP -= remainingDamage
        remainingDamage = 0
      } else {
        // HP Temporário absorve parte do dano
        remainingDamage -= pokemon.temporaryHP
        pokemon.temporaryHP = 0
      }
    }
    
    // Se ainda houver dano restante, aplicar ao HP normal
    if (remainingDamage > 0) {
      pokemon.currentHP = Math.max(0, (pokemon.currentHP || 0) - remainingDamage)
    }

    setMainTeam(updatedTeam)
    setShowPokemonHPModal(false)
    setHpAmount('')
  }

  // Função para curar o Pokémon
  const handleHealPokemon = () => {
    const heal = parseInt(hpAmount) || 0
    if (heal <= 0) return

    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonHPIndex]
    const maxHP = calculateMaxHP(pokemon)
    pokemon.currentHP = Math.min(maxHP, (pokemon.currentHP || 0) + heal)

    setMainTeam(updatedTeam)
    setShowPokemonHPModal(false)
    setHpAmount('')
  }
  // Função para abrir modal de HP Temporário
  const openTempHPModal = (pokemon, index) => {
    setSelectedPokemonForTempHP(pokemon)
    setSelectedPokemonTempHPIndex(index)
    setTempHPAmount(pokemon.temporaryHP || '')
    setShowTempHPModal(true)
  }

  // Função para salvar HP Temporário
  const handleSaveTempHP = () => {
    const tempHP = parseInt(tempHPAmount) || 0
    
    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonTempHPIndex]
    pokemon.temporaryHP = tempHP

    setMainTeam(updatedTeam)
    setShowTempHPModal(false)
    setTempHPAmount('')
  }

  // Função para curar todos os Pokémon do time (EstagiAyla Joy)
  const healAllPokemon = () => {
    const updatedTeam = mainTeam.map(pokemon => {
      const maxHP = calculateMaxHP(pokemon)
      return { ...pokemon, currentHP: maxHP }
    })
    setMainTeam(updatedTeam)
    alert('Todos os Pokémon foram curados pela EstagiAyla Joy! 💚')
  }

  // Adicionar XP
  const handleAddXP = () => {
    const xp = parseInt(xpToAdd) || 0
    if (xp <= 0) return

    const updatedTeam = [...mainTeam]
    const pokemon = updatedTeam[selectedPokemonIndex]

    // Nível anterior
    const oldLevel = pokemon.level || 1
    const oldMaxHappiness = calculateMaxHappiness(pokemon)

    // totalXP agora armazena o XP total acumulado
    const newTotalXP = (pokemon.totalXP || 0) + xp
    const newLevel = calculateLevel(newTotalXP)

    pokemon.level = newLevel
    pokemon.totalXP = newTotalXP

    // Lógica de felicidade quando sobe de nível
    if (newLevel > oldLevel) {
      const newMaxHappiness = calculateMaxHappiness(pokemon)
      const currentHappiness = pokemon.currentHappiness || 0

      // Se estava no máximo da felicidade, ajusta para o novo máximo
      if (currentHappiness >= oldMaxHappiness) {
        pokemon.currentHappiness = newMaxHappiness
      } else {
        // Se não estava no máximo, ganha 5 de felicidade
        pokemon.currentHappiness = Math.min(newMaxHappiness, currentHappiness + 5)
      }
    }

    updatedTeam[selectedPokemonIndex] = pokemon
    setMainTeam(updatedTeam)
    setXpToAdd('')
    setShowXPModal(false)
  }

  const addToNpcList = (pokemonId) => {
    const pokemon = npcPokemonList.find(p => p.id === pokemonId)
    if (pokemon && !pokemon.addedToNpc) {
      setNpcPokemon(prev => [...prev, pokemon])
      setNpcPokemonList(prev => prev.map(p =>
        p.id === pokemonId ? { ...p, addedToNpc: true } : p
      ))
    }
  }

  // Função para remover Pokémon da lista de gerados recentemente
  const removeFromGeneratedList = (pokemonId) => {
    setNpcPokemonList(prev => prev.filter(p => p.id !== pokemonId))
    // Se o pokémon também estava na lista de NPCs, remove de lá também
    setNpcPokemon(prev => prev.filter(p => p.id !== pokemonId))
    setExpandedNpcCards(prev => prev.filter(id => id !== pokemonId))
  }

  // Função para remover Pokémon NPC
  const removeNpcPokemon = (pokemonId) => {
    setNpcPokemon(prev => prev.filter(p => p.id !== pokemonId))
    setNpcPokemonList(prev => prev.map(p =>
      p.id === pokemonId ? { ...p, addedToNpc: false } : p
    ))
    setExpandedNpcCards(prev => prev.filter(id => id !== pokemonId))
  }

  // Função para alternar expansão do card NPC
  const toggleNpcCard = (pokemonId) => {
    setExpandedNpcCards(prev => {
      if (prev.includes(pokemonId)) {
        return prev.filter(id => id !== pokemonId)
      } else {
        return [...prev, pokemonId]
      }
    })
  }

  // Função para aplicar dano ou cura ao Pokémon NPC
  const applyNpcDamage = (isDamage) => {
    if (!selectedNpcPokemon || !npcDamageAmount) return

    const amount = parseInt(npcDamageAmount)
    if (isNaN(amount) || amount <= 0) return

    setNpcPokemon(prev => prev.map(pokemon => {
      if (pokemon.id === selectedNpcPokemon.id) {
        const maxHP = (3 * pokemon.attributes.saude) + pokemon.level
        const currentHP = pokemon.currentHP !== undefined ? pokemon.currentHP : maxHP

        let newHP
        if (isDamage) {
          newHP = Math.max(0, currentHP - amount)
        } else {
          newHP = Math.min(maxHP, currentHP + amount)
        }

        return { ...pokemon, currentHP: newHP }
      }
      return pokemon
    }))

    setShowNpcDamageModal(false)
    setNpcDamageAmount('')
    setSelectedNpcPokemon(null)
  }

  // Função para alternar condição de captura
  const toggleNpcCondition = (pokemonId, condition) => {
    setNpcConditions(prev => ({
      ...prev,
      [pokemonId]: {
        ...prev[pokemonId],
        [condition]: !prev[pokemonId]?.[condition]
      }
    }))
  }

  // Função para calcular o Valor de Captura
  const calculateCaptureValue = (pokemon) => {
    let total = 0

    // Catch Rate do pokémon
    const catchRate = pokemon.catchRate || 0
    total += catchRate

    // Bônus de condições
    const conditions = npcConditions[pokemon.id] || {}
    if (conditions.confusao) total += 5
    if (conditions.critico) total += 10
    if (conditions.paralisia) total += 7
    if (conditions.sono) total += 10
    if (conditions.atordoamento) total += 10
    if (conditions.congelamento) total += 15
    if (conditions.paixao) total += 3
    if (conditions.queimadura) total += 5
    if (conditions.veneno) total += 7

    // Bônus de HP
    const maxHP = (3 * pokemon.attributes.saude) + pokemon.level
    const currentHP = pokemon.currentHP !== undefined ? pokemon.currentHP : maxHP
    const hpPercentage = (currentHP / maxHP) * 100

    if (hpPercentage > 75) {
      total -= 15
    } else if (hpPercentage > 50) {
      total -= 5
    } else if (hpPercentage > 25) {
      total += 5
    } else if (currentHP >= 1) {
      total += 25
    }

    // Bônus de nível
    const level = pokemon.level
    if (level >= 1 && level <= 20) {
      total += 20
    } else if (level >= 21 && level <= 40) {
      total += 10
    } else if (level >= 41 && level <= 60) {
      total -= 5
    } else if (level >= 61 && level <= 80) {
      total -= 15
    } else if (level >= 81 && level <= 100) {
      total -= 30
    }

    return total
  }

  // Função para enviar pokémon NPC para treinador
  const sendPokemonToTrainer = (trainerUsername) => {
    if (!pokemonToSend || !sendPokemonSpecies || !sendPokemonNature) {
      alert('Por favor, selecione a espécie e a natureza antes de enviar.')
      return
    }

    const key = `trainer_${trainerUsername}`
    const saved = localStorage.getItem(key)

    if (saved) {
      try {
        const trainerData = JSON.parse(saved)

        // Usar espécie e natureza editáveis
        const finalNature = sendPokemonNature

        // Preparar dados do pokémon para envio
        const pokemonData = {
          id: `${Date.now()}-${Math.random()}`,
          species: sendPokemonSpecies,
          nickname: '',
          level: pokemonToSend.level,
          totalXP: XP_TABLE[pokemonToSend.level] || 0,
          nature: finalNature.nome,
          baseAttributes: pokemonToSend.baseAttributes,
          levelPoints: {
            saude: pokemonToSend.attributes.saude - pokemonToSend.baseAttributes.saude - (finalNature.up === 'Saúde' ? 1 : finalNature.down === 'Saúde' ? -1 : 0),
            ataque: pokemonToSend.attributes.ataque - pokemonToSend.baseAttributes.ataque - (finalNature.up === 'Ataque' ? 1 : finalNature.down === 'Ataque' ? -1 : 0),
            defesa: pokemonToSend.attributes.defesa - pokemonToSend.baseAttributes.defesa - (finalNature.up === 'Defesa' ? 1 : finalNature.down === 'Defesa' ? -1 : 0),
            ataqueEspecial: pokemonToSend.attributes.ataqueEspecial - pokemonToSend.baseAttributes.ataqueEspecial - (finalNature.up === 'Ataque Especial' ? 1 : finalNature.down === 'Ataque Especial' ? -1 : 0),
            defesaEspecial: pokemonToSend.attributes.defesaEspecial - pokemonToSend.baseAttributes.defesaEspecial - (finalNature.up === 'Defesa Especial' ? 1 : finalNature.down === 'Defesa Especial' ? -1 : 0),
            velocidade: pokemonToSend.attributes.velocidade - pokemonToSend.baseAttributes.velocidade - (finalNature.up === 'Velocidade' ? 1 : finalNature.down === 'Velocidade' ? -1 : 0)
          },
          favoriteFlavor: finalNature.gosto,
          dislikedFlavor: finalNature.desgosto,
          weight: pokemonToSend.weight,
          height: pokemonToSend.height,
          happiness: 0,
          currentHP: (3 * pokemonToSend.attributes.saude) + pokemonToSend.level,
          imageUrl: pokemonToSend.imageUrl || '',
          shiny: pokemonToSend.shiny || false,
          gender: pokemonToSend.gender,
          dexNumber: pokemonToSend.dexNumber
        }

        // Verificar se o time principal tem menos de 6 pokémons
        const mainTeam = trainerData.mainTeam || []
        const pcPokemon = trainerData.pcPokemon || []

        if (mainTeam.length < 6) {
          trainerData.mainTeam = [...mainTeam, pokemonData]
        } else {
          trainerData.pcPokemon = [...pcPokemon, pokemonData]
        }

        // Salvar dados atualizados do treinador
        localStorage.setItem(key, JSON.stringify(trainerData))

        // Fechar modal e limpar estado
        setShowSendToTrainerModal(false)
        setPokemonToSend(null)

        alert(`Pokémon ${pokemonToSend.species} enviado para ${trainerUsername}!`)
      } catch (e) {
        console.error('Erro ao enviar pokémon:', e)
        alert('Erro ao enviar pokémon para o treinador.')
      }
    } else {
      alert('Dados do treinador não encontrados.')
    }
  }

  // Funções para enviar para Batalha
  const sendPokemonToBattle = (pokemon) => {
    const maxHP = calculateMaxHP(pokemon)
    const totalVel = calculateTotalAttribute(pokemon, 'velocidade', 'Velocidade')
    const totalDef = calculateTotalAttribute(pokemon, 'defesa', 'Defesa')
    const totalDefEsp = calculateTotalAttribute(pokemon, 'defesaEspecial', 'Defesa Especial')
    const tipos = getPokemonTypes(pokemon) || []

    const battleData = {
      id: `pokemon-${Date.now()}-${Math.random()}`,
      nome: pokemon.nickname || pokemon.species,
      especie: pokemon.species,
      tipos: tipos,
      hp: pokemon.currentHP !== undefined ? pokemon.currentHP : maxHP,
      maxHP: maxHP,
      velocidade: totalVel,
      evasaoFisica: Math.floor(totalDef / 5),
      evasaoEspecial: Math.floor(totalDefEsp / 5),
      evasaoVeloz: Math.floor(totalVel / 10)
    }
    setBattlePokemon(prev => [...prev, battleData])
    alert(`${battleData.nome} enviado para a Batalha!`)
  }

  const sendTrainerToBattle = () => {
    const maxHP = getMaxHP()
    const evasion = getEvasion()

    const battleData = {
      id: `trainer-${Date.now()}-${Math.random()}`,
      nome: currentUser.username,
      hp: currentHP,
      maxHP: maxHP,
      velocidade: attributes.velocidade,
      evasaoFisica: evasion.fisica,
      evasaoEspecial: evasion.especial,
      evasaoVeloz: evasion.veloz
    }
    setBattleTrainers(prev => [...prev, battleData])
    alert(`${battleData.nome} enviado para a Batalha!`)
  }

  const sendNpcPokemonToBattle = (pokemon) => {
    const battleData = {
      id: `npc-pokemon-${Date.now()}-${Math.random()}`,
      nome: pokemon.species,
      especie: pokemon.species,
      tipos: pokemon.types || [],
      hp: pokemon.currentHP !== undefined ? pokemon.currentHP : ((3 * pokemon.attributes.saude) + pokemon.level),
      maxHP: (3 * pokemon.attributes.saude) + pokemon.level,
      velocidade: pokemon.attributes.velocidade,
      evasaoFisica: Math.floor(pokemon.attributes.defesa / 5),
      evasaoEspecial: Math.floor(pokemon.attributes.defesaEspecial / 5),
      evasaoVeloz: Math.floor(pokemon.attributes.velocidade / 10)
    }
    setBattlePokemon(prev => [...prev, battleData])
    alert(`${battleData.nome} enviado para a Batalha!`)
  }

  const sendNpcTrainerToBattle = (trainer) => {
    const battleData = {
      id: `npc-trainer-${Date.now()}-${Math.random()}`,
      nome: trainer.name,
      hp: trainer.currentHP !== undefined ? trainer.currentHP : trainer.hp,
      maxHP: trainer.hp,
      velocidade: trainer.attributes.velocidade,
      evasaoFisica: Math.floor(trainer.attributes.defesa / 5),
      evasaoEspecial: Math.floor(trainer.attributes.defesaEspecial / 5),
      evasaoVeloz: Math.floor(trainer.attributes.velocidade / 10)
    }
    setBattleTrainers(prev => [...prev, battleData])
    alert(`${battleData.nome} enviado para a Batalha!`)
  }

  // Funções de controle da Batalha
  const sortBySpeed = (entities) => {
    // Ordena por velocidade decrescente
    return [...entities].sort((a, b) => b.velocidade - a.velocidade)
  }

  const mountTrainerBattle = () => {
    if (battleTrainers.length === 0) {
      alert('Nenhum treinador para montar a batalha!')
      return
    }
    const sorted = sortBySpeed(battleTrainers)
    setBattleTrainersList(sorted)
    setBattleTrainers([])
    setCurrentTrainerTurn(0)
    setTrainerRound(1)
  }

  const mountPokemonBattle = () => {
    if (battlePokemon.length === 0) {
      alert('Nenhum pokémon para montar a batalha!')
      return
    }
    const sorted = sortBySpeed(battlePokemon)
    setBattlePokemonList(sorted)
    setBattlePokemon([])
    setCurrentPokemonTurn(0)
    setPokemonRound(1)
  }

  const addToTrainerBattle = () => {
    if (battleTrainers.length === 0) {
      alert('Nenhum treinador para adicionar!')
      return
    }
    // Combina a lista atual com os novos e reordena
    const combined = [...battleTrainersList, ...battleTrainers]
    const sorted = sortBySpeed(combined)
    setBattleTrainersList(sorted)
    setBattleTrainers([])
    // Mantém o turno atual se houver itens
    if (battleTrainersList.length === 0) {
      setCurrentTrainerTurn(0)
      setTrainerRound(1)
    }
  }

  const addToPokemonBattle = () => {
    if (battlePokemon.length === 0) {
      alert('Nenhum pokémon para adicionar!')
      return
    }
    // Combina a lista atual com os novos e reordena
    const combined = [...battlePokemonList, ...battlePokemon]
    const sorted = sortBySpeed(combined)
    setBattlePokemonList(sorted)
    setBattlePokemon([])
    // Mantém o turno atual se houver itens
    if (battlePokemonList.length === 0) {
      setCurrentPokemonTurn(0)
      setPokemonRound(1)
    }
  }

  const advanceTrainerTurn = () => {
    if (battleTrainersList.length === 0) return

    const nextTurn = currentTrainerTurn + 1
    if (nextTurn >= battleTrainersList.length) {
      // Volta para o início e incrementa a rodada
      setCurrentTrainerTurn(0)
      setTrainerRound(prev => prev + 1)
    } else {
      setCurrentTrainerTurn(nextTurn)
    }
  }

  const advancePokemonTurn = () => {
    if (battlePokemonList.length === 0) return

    const nextTurn = currentPokemonTurn + 1
    if (nextTurn >= battlePokemonList.length) {
      // Volta para o início e incrementa a rodada
      setCurrentPokemonTurn(0)
      setPokemonRound(prev => prev + 1)
    } else {
      setCurrentPokemonTurn(nextTurn)
    }
  }

  // Carregar dados da Pokédex completa
  useEffect(() => {
    setFullPokedexData(pokedexData)
  }, [])

  // Escutar mensagens do iframe do gerador
  useEffect(() => {
    const handleMessage = (event) => {
      // Verificar se a mensagem vem do gerador de Pokémon
      if (event.data && event.data.type === 'POKEMON_GENERATED') {
        const pokemonData = event.data.pokemon
        console.log('Pokémon recebido do gerador:', pokemonData)
        console.log('Species:', pokemonData.species)
        console.log('Name:', pokemonData.name)
        // Armazenar na lista de Pokémon gerados recentemente
        setNpcPokemonList(prev => {
          // Evitar duplicatas verificando se já existe
          const exists = prev.some(p => p.id === pokemonData.id)
          if (exists) return prev
          return [...prev, { ...pokemonData, addedToNpc: false }]
        })
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])


  // Carregar dados do LocalStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const key = `trainer_${currentUser.username}`
      const saved = localStorage.getItem(key)
      if (saved) {
        try {
          const data = JSON.parse(saved)
          setLevel(data.level || 1)
          setImage(data.image || '')
          setClasses(data.classes || ['', '', '', ''])
          setAttributes(data.attributes || { saude: 10, ataque: 10, defesa: 10, ataqueEspecial: 10, defesaEspecial: 10, velocidade: 10 })
          setSkills(data.skills || { saude: [], ataque: [], defesa: [], ataqueEspecial: [], defesaEspecial: [], velocidade: [] })
          setCurrentHP(data.currentHP || 44)
          setMainTeam(data.mainTeam || [])
          setPcPokemon(data.pcPokemon || [])
          setPokedex(data.pokedex || [])
          setPokemonedas(data.pokemonedas || 0)
          setKeyItems(data.keyItems || [])
          setCustomItems(data.customItems || [])
          setCaracteristicasSelected(data.caracteristicasSelected || [])
          setTalentosSelected(data.talentosSelected || [])
        } catch (e) {
          console.error('Erro ao carregar:', e)
        }
      }
      // Definir área inicial como Treinador
      setCurrentArea('Treinador')
    } else if (currentUser?.type === 'mestre') {
      // Carregar configurações do mestre
      const key = 'mestre_config'
      const saved = localStorage.getItem(key)
      if (saved) {
        try {
          const data = JSON.parse(saved)
          setHiddenPokelojaItems(data.hiddenPokelojaItems || [])
        } catch (e) {
          console.error('Erro ao carregar configurações do mestre:', e)
        }
      }
    }
  }, [currentUser])

  // Salvar no LocalStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const key = `trainer_${currentUser.username}`
      const data = {
        level, image, classes, attributes, skills, currentHP,
        mainTeam, pcPokemon, pokedex,
        pokemonedas, keyItems, customItems,
        caracteristicasSelected, talentosSelected
      }
      localStorage.setItem(key, JSON.stringify(data))
    } else if (currentUser?.type === 'mestre') {
      const key = 'mestre_config'
      const data = {
        hiddenPokelojaItems
      }
      localStorage.setItem(key, JSON.stringify(data))
    }
  }, [level, image, classes, attributes, skills, currentHP, mainTeam, pcPokemon, pokedex, pokemonedas, keyItems, customItems, caracteristicasSelected, talentosSelected, hiddenPokelojaItems, currentUser])

  // Fechar modais com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShowLevelModal(false)
        setShowClassModal(false)
        setShowImageModal(false)
        setShowHPModal(false)
        setShowAddPokemonModal(false)
        setShowXPModal(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  // Atualizar HP quando mudar nível ou saúde
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const newMaxHP = getMaxHP()
      setCurrentHP(newMaxHP)
    }
  }, [level, attributes.saude, currentUser])

  // Persistir NPCs no localStorage
  useEffect(() => {
    if (currentUser) {
      const saved = localStorage.getItem(`npcTrainers_${currentUser.username}`)
      if (saved) {
        setNpcTrainers(JSON.parse(saved))
      }
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`npcTrainers_${currentUser.username}`, JSON.stringify(npcTrainers))
    }
  }, [npcTrainers, currentUser])

  // TELA DE LOGIN
  if (!currentUser) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} flex items-center justify-center p-4`}>
        <style>{`@keyframes gradient-shift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animated-gradient{background-size:300% 300%;animation:gradient-shift 4s ease infinite}`}</style>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 w-full max-w-xl`}>
          <div className="flex justify-end mb-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          </div>
          <div className="flex justify-center mb-6"><img src="/logo.png" alt="Logo" className="w-48 h-48 object-contain" /></div>
          <div className="text-center mb-6">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Niaypeta Corp™</h1>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>O Professor Carvalho quer saber seu nome.</p>
          </div>
          <h2 className={`text-center font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Selecione o Usuário</h2>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {users.map(user => (
              <button key={user.username} onClick={() => { setSelectedUser(user); setError('') }} className={`animated-gradient p-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 ${selectedUser?.username === user.username ? 'ring-4 ring-blue-400' : ''}`} style={{ background: user.gradient }}>
                <User size={18} /><span className="text-base">{user.username}</span>
              </button>
            ))}
          </div>
          <div>
            <h2 className={`text-center font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Senha</h2>
            <div className="relative mb-4">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyPress={e => e.key === 'Enter' && selectedUser && password === 'DnD7MarPkm' && (setCurrentUser(selectedUser), setCurrentArea(selectedUser.type === 'treinador' ? 'Treinador' : ''), setSelectedUser(null), setPassword(''))} placeholder="Digite a senha" disabled={!selectedUser} className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'} ${!selectedUser ? 'opacity-50 cursor-not-allowed' : ''}`} />
            </div>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">{error}</div>}
            <button onClick={() => password === 'DnD7MarPkm' ? (setCurrentUser(selectedUser), setCurrentArea(selectedUser.type === 'treinador' ? 'Treinador' : ''), setSelectedUser(null), setPassword('')) : setError('Senha incorreta!')} disabled={!selectedUser || !password} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Entrar</button>
          </div>
        </div>
      </div>
    )
  }

  // SELEÇÃO DE ÁREA (pula para treinadores)
  if (!currentArea && currentUser.type === 'mestre') {
    const areas = mestreAreas
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentUser.username} {currentUser.type === 'mestre' && '👑'}</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => setCurrentUser(null)} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 text-sm font-semibold shadow-md">{area}</button>)}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <p className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Selecione uma área acima</p>
          </div>
        </div>
      </div>
    )
  }

  // GERADOR POKÉMON (MESTRE)
  if (currentUser.type === 'mestre' && currentArea === 'Gerador Pokémon') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Gerador Pokémon 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Gerador Pokémon' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <iframe
            src="/Pokedéx_RPG.html"
            className="w-full rounded-2xl shadow-2xl border-0"
            style={{ height: 'calc(100vh - 200px)', minHeight: '800px' }}
            title="Gerador Pokémon"
          />

          {/* Lista de Pokémon gerados com botão para adicionar como NPC */}
          {npcPokemonList.length > 0 && (
            <div className={`mt-8 p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Pokémon Gerados Recentemente
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {npcPokemonList.map(pokemon => (
                  <div
                    key={pokemon.id}
                    className={`p-4 rounded-lg border-2 relative ${
                      pokemon.addedToNpc
                        ? darkMode ? 'bg-green-900/30 border-green-600' : 'bg-green-50 border-green-400'
                        : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    }`}
                  >
                    {/* Botão de exclusão */}
                    <button
                      onClick={() => removeFromGeneratedList(pokemon.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 z-10"
                      title="Remover da lista"
                    >
                      <X size={16} />
                    </button>

                    {pokemon.imageUrl && (
                      <div className="flex justify-center mb-3">
                        <img
                          src={pokemon.imageUrl}
                          alt={pokemon.name || pokemon.species}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {pokemon.species} {pokemon.shiny && '✨'}
                        </h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Nível {pokemon.level} • {pokemon.gender}
                        </p>
                      </div>
                      <div className="flex gap-1 mr-6">
                        {pokemon.types.map((type, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                      <span className="font-semibold">Espécie:</span> {pokemon.species}
                    </div>

                    <button
                      onClick={() => addToNpcList(pokemon.id)}
                      disabled={pokemon.addedToNpc}
                      className={`w-full mt-3 px-4 py-2 rounded-lg font-semibold ${
                        pokemon.addedToNpc
                          ? darkMode ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:from-blue-700 hover:to-purple-800'
                      }`}
                    >
                      {pokemon.addedToNpc ? '✓ Adicionado aos NPCs' : 'Pokémon NPC'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // ÁREA TREINADOR NPC
  if (currentUser.type === 'mestre' && currentArea === 'Treinador NPC') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Treinador NPC 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Treinador NPC' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 mb-6`}>
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setShowCustomTrainerModal(true)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-purple-800 font-semibold text-lg"
              >
                Treinador Personalizado
              </button>
              <button
                onClick={() => setShowRandomTrainerModal(true)}
                className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-4 rounded-lg hover:from-green-700 hover:to-teal-800 font-semibold text-lg"
              >
                Treinador Aleatório
              </button>
            </div>

            {/* Cards de NPCs */}
            {npcTrainers.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="text-lg">Nenhum treinador NPC criado ainda</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {npcTrainers.map(npc => (
                  <div key={npc.id} className={`p-6 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-blue-500' : 'bg-blue-50 border-blue-300'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{npc.name}</h3>
                        {npc.isRandom && npc.caracteristicasETalentos && (
                          <button
                            onClick={() => {
                              setSelectedNPCForTalentos(npc)
                              setShowNPCTalentosModal(true)
                            }}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg hover:from-purple-700 hover:to-pink-700 font-semibold text-sm"
                            title="Ver Características e Talentos"
                          >
                            Talento R NPC
                          </button>
                        )}
                        {!npc.isRandom && npc.caracteristicasETalentos && npc.caracteristicasETalentos.length > 0 && (
                          <button
                            onClick={() => {
                              setSelectedNPCForTalentos(npc)
                              setShowNPCTalentosModal(true)
                            }}
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-lg hover:from-blue-700 hover:to-cyan-700 font-semibold text-sm"
                            title="Ver Características e Talentos"
                          >
                            Treinador T Personalizado
                          </button>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => sendNpcTrainerToBattle(npc)}
                          className="bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600"
                          title="Enviar para Batalha Treinador NPC"
                        >
                          <PlusCircle size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteNPC(npc.id)}
                          className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    <div className={`mb-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <p className="mb-2"><span className="font-semibold">Nível:</span> {npc.level}</p>
                      <p className="mb-2"><span className="font-semibold">Vida:</span> {npc.currentHP}/{npc.hp}</p>
                    </div>

                    {/* Tabela de Atributos */}
                    <div className="mb-4">
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Atributos</h4>
                      <div className="overflow-x-auto">
                        <table className={`w-full text-sm ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                          <thead>
                            <tr className={darkMode ? 'bg-gray-500' : 'bg-gray-200'}>
                              <th className={`border p-2 text-left ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Atributo</th>
                              <th className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Valor</th>
                              <th className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Modificador</th>
                            </tr>
                          </thead>
                          <tbody className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Saúde</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.saude}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.saude}</td></tr>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Ataque</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.ataque}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.ataque}</td></tr>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Defesa</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.defesa}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.defesa}</td></tr>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Ataque Especial</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.ataqueEspecial}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.ataqueEspecial}</td></tr>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Defesa Especial</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.defesaEspecial}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.defesaEspecial}</td></tr>
                            <tr><td className={`border p-2 ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>Velocidade</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.attributes.velocidade}</td><td className={`border p-2 text-center ${darkMode ? 'border-gray-400' : 'border-gray-300'}`}>{npc.modifiers.velocidade}</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Deslocamento */}
                    <div className="mb-4">
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Deslocamento</h4>
                      <div className={`grid grid-cols-3 gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Terrestre:</span> {npc.displacement.terrestre}</div>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Natação:</span> {npc.displacement.natacao}</div>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Subaquático:</span> {npc.displacement.subaquatico}</div>
                      </div>
                    </div>

                    {/* Evasão */}
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Evasão</h4>
                      <div className={`grid grid-cols-3 gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Física:</span> {npc.evasion.fisica}</div>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Especial:</span> {npc.evasion.especial}</div>
                        <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}><span className="font-semibold">Veloz:</span> {npc.evasion.veloz}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MODAL TREINADOR PERSONALIZADO */}
        {showCustomTrainerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowCustomTrainerModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Criar Treinador Personalizado
                  </h3>
                  <button onClick={() => setShowCustomTrainerModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Nome */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Nome</label>
                  <input
                    type="text"
                    value={customTrainerForm.name}
                    onChange={(e) => setCustomTrainerForm({...customTrainerForm, name: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Nome do treinador"
                  />
                </div>

                {/* Nível */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Nível</label>
                  <input
                    type="number"
                    min="1"
                    value={customTrainerForm.level}
                    onChange={(e) => setCustomTrainerForm({...customTrainerForm, level: parseInt(e.target.value) || 1})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                {/* Tabela de Atributos */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Atributos</label>
                  <div className="overflow-x-auto">
                    <table className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                      <thead>
                        <tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                          <th className={`border p-2 text-left ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributo</th>
                          <th className={`border p-2 text-center ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Valor</th>
                          <th className={`border p-2 text-center ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Modificador</th>
                        </tr>
                      </thead>
                      <tbody className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                        {[
                          { label: 'Saúde', key: 'saude' },
                          { label: 'Ataque', key: 'ataque' },
                          { label: 'Defesa', key: 'defesa' },
                          { label: 'Ataque Especial', key: 'ataqueEspecial' },
                          { label: 'Defesa Especial', key: 'defesaEspecial' },
                          { label: 'Velocidade', key: 'velocidade' }
                        ].map(attr => (
                          <tr key={attr.key}>
                            <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{attr.label}</td>
                            <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                              <input
                                type="number"
                                min="1"
                                max="40"
                                value={customTrainerForm.attributes[attr.key]}
                                onChange={(e) => setCustomTrainerForm({
                                  ...customTrainerForm,
                                  attributes: {...customTrainerForm.attributes, [attr.key]: parseInt(e.target.value) || 1}
                                })}
                                className={`w-full px-2 py-1 text-center ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'}`}
                              />
                            </td>
                            <td className={`border p-2 text-center font-bold ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                              {calculateModifier(customTrainerForm.attributes[attr.key])}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Vida Calculada */}
                <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                  <p className={`text-lg font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Vida: {calculateNPCHP(customTrainerForm.level, customTrainerForm.attributes.saude)}
                  </p>
                </div>

                {/* Classes e Subclasses */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    4. Classes & Subclasses (Opcional)
                  </label>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {customTrainerForm.classes.map((className, idx) => {
                      const classInfo = allClasses.find(c => c.name === className)
                      return (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg font-semibold text-white text-sm flex items-center gap-2"
                          style={{ backgroundColor: classInfo?.color || '#666' }}
                        >
                          {className}
                          <button
                            onClick={() => {
                              const newClasses = customTrainerForm.classes.filter((_, i) => i !== idx)
                              setCustomTrainerForm({...customTrainerForm, classes: newClasses})
                            }}
                            className="hover:bg-white/20 rounded px-1"
                          >
                            ×
                          </button>
                        </span>
                      )
                    })}
                  </div>
                  <select
                    value=""
                    onChange={(e) => {
                      if (e.target.value && !customTrainerForm.classes.includes(e.target.value)) {
                        setCustomTrainerForm({
                          ...customTrainerForm,
                          classes: [...customTrainerForm.classes, e.target.value]
                        })
                      }
                    }}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecionar classe/subclasse...</option>
                    {allClasses
                      .filter(c => !customTrainerForm.classes.includes(c.name))
                      .map(c => (
                        <option key={c.name} value={c.name}>{c.name}</option>
                      ))
                    }
                  </select>
                </div>

                {/* Modo de Talentos */}
                {customTrainerForm.classes.length > 0 && (
                  <div className="mb-6">
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      5. Talentos
                    </label>
                    <div className="flex gap-4 mb-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={customTrainerForm.talentosMode === 'aleatorio'}
                          onChange={() => setCustomTrainerForm({...customTrainerForm, talentosMode: 'aleatorio', selectedTalentos: []})}
                          className="w-4 h-4"
                        />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Aleatório</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          checked={customTrainerForm.talentosMode === 'manual'}
                          onChange={() => setCustomTrainerForm({...customTrainerForm, talentosMode: 'manual'})}
                          className="w-4 h-4"
                        />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Escolher Manualmente</span>
                      </label>
                    </div>

                    {customTrainerForm.talentosMode === 'manual' && (
                      <div>
                        <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Total necessário: {TALENTOS_POR_NIVEL[customTrainerForm.level] || 3} (Características automáticas + Talentos selecionados)
                        </p>
                        <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Selecionados: {customTrainerForm.classes.reduce((acc, className) => {
                            const caracs = getClassCaracteristicas(className)
                            return acc + caracs.length
                          }, 0)} características + {customTrainerForm.selectedTalentos.length} talentos
                        </p>
                        <button
                          onClick={() => setShowSelectTalentosModal(true)}
                          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 font-semibold"
                        >
                          Selecionar Talentos
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Botões */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowCustomTrainerModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveCustomTrainer}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL TREINADOR ALEATÓRIO */}
        {showRandomTrainerModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowRandomTrainerModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Criar Treinador Aleatório
                  </h3>
                  <button onClick={() => setShowRandomTrainerModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Nome */}
                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nome</label>
                  <input
                    type="text"
                    value={randomTrainerForm.name}
                    onChange={(e) => setRandomTrainerForm({...randomTrainerForm, name: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Nome do treinador"
                  />
                </div>

                {/* Nível */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nível</label>
                  <input
                    type="number"
                    min="1"
                    value={randomTrainerForm.level}
                    onChange={(e) => setRandomTrainerForm({...randomTrainerForm, level: parseInt(e.target.value) || 1})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                {/* Botões */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowRandomTrainerModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveRandomTrainer}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                  >
                    Gerar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL TALENTOS NPC */}
        {showNPCTalentosModal && selectedNPCForTalentos && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowNPCTalentosModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Características & Talentos - {selectedNPCForTalentos.name}
                  </h3>
                  <button onClick={() => setShowNPCTalentosModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Classes */}
                {selectedNPCForTalentos.classes && selectedNPCForTalentos.classes.length > 0 && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                      Classes & Subclasses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedNPCForTalentos.classes.map((className, idx) => {
                        const classInfo = allClasses.find(c => c.name === className)
                        return (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg font-semibold text-white text-sm"
                            style={{ backgroundColor: classInfo?.color || '#666' }}
                          >
                            {className}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Características e Talentos */}
                {selectedNPCForTalentos.caracteristicasETalentos && selectedNPCForTalentos.caracteristicasETalentos.length > 0 && (
                  <div>
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                      Características & Talentos ({selectedNPCForTalentos.caracteristicasETalentos.length})
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedNPCForTalentos.caracteristicasETalentos.map((item, idx) => {
                        const isCaracteristica = item.tipo === 'caracteristica'
                        return (
                          <div
                            key={idx}
                            className={`p-4 rounded-lg border-2 ${
                              isCaracteristica
                                ? darkMode ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-50 border-blue-300'
                                : darkMode ? 'bg-purple-900/30 border-purple-500' : 'bg-purple-50 border-purple-300'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h5 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {item.nome}
                              </h5>
                              <span className={`text-xs px-2 py-0.5 rounded ml-2 flex-shrink-0 ${
                                isCaracteristica
                                  ? darkMode ? 'bg-blue-700 text-blue-200' : 'bg-blue-200 text-blue-800'
                                  : darkMode ? 'bg-purple-700 text-purple-200' : 'bg-purple-200 text-purple-800'
                              }`}>
                                {item.classe}
                              </span>
                            </div>
                            <div className="space-y-1 text-xs">
                              {item.requisitos && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Requisitos:</span> {item.requisitos}
                                </p>
                              )}
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Frequência:</span> {item.frequencia}
                              </p>
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Referência:</span> {item.referencia}
                              </p>
                              {item.alvo && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Alvo:</span> {item.alvo}
                                </p>
                              )}
                              {item.gatilho && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Gatilho:</span> {item.gatilho}
                                </p>
                              )}
                              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <span className="font-semibold">Efeito:</span> {item.efeito}
                              </p>
                              {item.especial && (
                                <p className={`mt-2 italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {item.especial}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal de Seleção Manual de Talentos */}
        {showSelectTalentosModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowSelectTalentosModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Selecionar Talentos
                  </h3>
                  <button onClick={() => setShowSelectTalentosModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Resumo de Seleção */}
                <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Progresso da Seleção
                    </span>
                    <span className={`text-lg font-bold ${
                      (customTrainerForm.classes.reduce((acc, className) => {
                        const caracs = getClassCaracteristicas(className)
                        return acc + caracs.length
                      }, 0) + customTrainerForm.selectedTalentos.length) >= (TALENTOS_POR_NIVEL[customTrainerForm.level] || 3)
                        ? 'text-green-500'
                        : 'text-yellow-500'
                    }`}>
                      {customTrainerForm.classes.reduce((acc, className) => {
                        const caracs = getClassCaracteristicas(className)
                        return acc + caracs.length
                      }, 0) + customTrainerForm.selectedTalentos.length} / {TALENTOS_POR_NIVEL[customTrainerForm.level] || 3}
                    </span>
                  </div>
                  <div className="text-xs space-y-1">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Características (automáticas): {customTrainerForm.classes.reduce((acc, className) => {
                        const caracs = getClassCaracteristicas(className)
                        return acc + caracs.length
                      }, 0)}
                    </p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Talentos selecionados: {customTrainerForm.selectedTalentos.length}
                    </p>
                  </div>
                </div>

                {/* Talentos Selecionados */}
                {customTrainerForm.selectedTalentos.length > 0 && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                      Talentos Selecionados ({customTrainerForm.selectedTalentos.length})
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {customTrainerForm.selectedTalentos.map((talento, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg border-2 ${darkMode ? 'bg-purple-900/30 border-purple-500' : 'bg-purple-50 border-purple-300'}`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h5 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {talento.nome}
                            </h5>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ${darkMode ? 'bg-purple-700 text-purple-200' : 'bg-purple-200 text-purple-800'}`}>
                                {talento.classe}
                              </span>
                              <button
                                onClick={() => {
                                  setCustomTrainerForm({
                                    ...customTrainerForm,
                                    selectedTalentos: customTrainerForm.selectedTalentos.filter((_, i) => i !== idx)
                                  })
                                }}
                                className="text-red-500 hover:text-red-700 font-bold"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                          <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            <span className="font-semibold">Efeito:</span> {talento.efeito}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Talentos Disponíveis */}
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Talentos Disponíveis
                  </h4>

                  {/* Talentos das Classes Selecionadas */}
                  {customTrainerForm.classes.map(className => {
                    const classTalentos = TALENTOS_DATA[className] || []
                    if (classTalentos.length === 0) return null

                    const classInfo = allClasses.find(c => c.name === className)

                    return (
                      <div key={className} className="mb-6">
                        <h5 className={`text-md font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <span className="px-3 py-1 rounded-lg font-semibold text-white text-sm"
                            style={{ backgroundColor: classInfo?.color || '#666' }}>
                            {className}
                          </span>
                          <span className="text-sm">({classTalentos.length} talentos)</span>
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {classTalentos.map((talento, idx) => {
                            const isSelected = customTrainerForm.selectedTalentos.some(t => t.nome === talento.nome && t.classe === className)

                            return (
                              <div
                                key={idx}
                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                  isSelected
                                    ? darkMode ? 'bg-purple-900/50 border-purple-400' : 'bg-purple-100 border-purple-400'
                                    : darkMode ? 'bg-gray-700 border-gray-600 hover:border-purple-500' : 'bg-white border-gray-300 hover:border-purple-400'
                                }`}
                                onClick={() => {
                                  if (isSelected) {
                                    setCustomTrainerForm({
                                      ...customTrainerForm,
                                      selectedTalentos: customTrainerForm.selectedTalentos.filter(t => !(t.nome === talento.nome && t.classe === className))
                                    })
                                  } else {
                                    setCustomTrainerForm({
                                      ...customTrainerForm,
                                      selectedTalentos: [...customTrainerForm.selectedTalentos, { tipo: 'talento', classe: className, ...talento }]
                                    })
                                  }
                                }}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h6 className={`font-bold text-xs ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {talento.nome}
                                  </h6>
                                  {isSelected && (
                                    <span className="text-green-500 font-bold">✓</span>
                                  )}
                                </div>
                                <div className="space-y-1 text-xs">
                                  {talento.requisitos && (
                                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                      <span className="font-semibold">Req:</span> {talento.requisitos}
                                    </p>
                                  )}
                                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    <span className="font-semibold">Freq:</span> {talento.frequencia}
                                  </p>
                                  <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {talento.efeito.substring(0, 80)}{talento.efeito.length > 80 ? '...' : ''}
                                  </p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}

                  {/* Talentos Gerais */}
                  {TALENTOS_DATA['Geral'] && TALENTOS_DATA['Geral'].length > 0 && (
                    <div className="mb-6">
                      <h5 className={`text-md font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="px-3 py-1 rounded-lg font-semibold text-white text-sm bg-gray-600">
                          Geral
                        </span>
                        <span className="text-sm">({TALENTOS_DATA['Geral'].length} talentos)</span>
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {TALENTOS_DATA['Geral'].map((talento, idx) => {
                          const isSelected = customTrainerForm.selectedTalentos.some(t => t.nome === talento.nome && t.classe === 'Geral')

                          return (
                            <div
                              key={idx}
                              className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                                isSelected
                                  ? darkMode ? 'bg-purple-900/50 border-purple-400' : 'bg-purple-100 border-purple-400'
                                  : darkMode ? 'bg-gray-700 border-gray-600 hover:border-purple-500' : 'bg-white border-gray-300 hover:border-purple-400'
                              }`}
                              onClick={() => {
                                if (isSelected) {
                                  setCustomTrainerForm({
                                    ...customTrainerForm,
                                    selectedTalentos: customTrainerForm.selectedTalentos.filter(t => !(t.nome === talento.nome && t.classe === 'Geral'))
                                  })
                                } else {
                                  setCustomTrainerForm({
                                    ...customTrainerForm,
                                    selectedTalentos: [...customTrainerForm.selectedTalentos, { tipo: 'talento', classe: 'Geral', ...talento }]
                                  })
                                }
                              }}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <h6 className={`font-bold text-xs ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {talento.nome}
                                </h6>
                                {isSelected && (
                                  <span className="text-green-500 font-bold">✓</span>
                                )}
                              </div>
                              <div className="space-y-1 text-xs">
                                {talento.requisitos && (
                                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    <span className="font-semibold">Req:</span> {talento.requisitos}
                                  </p>
                                )}
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Freq:</span> {talento.frequencia}
                                </p>
                                <p className={`mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {talento.efeito.substring(0, 80)}{talento.efeito.length > 80 ? '...' : ''}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botão Confirmar */}
                <div className="flex gap-3 pt-4 mt-6 border-t border-gray-300">
                  <button
                    onClick={() => setShowSelectTalentosModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setShowSelectTalentosModal(false)}
                    className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 font-semibold"
                  >
                    Confirmar Seleção
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }


  // ÁREA POKÉMON NPC (MESTRE)
  if (currentUser.type === 'mestre' && currentArea === 'Pokémon NPC') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Pokémon NPC 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Pokémon NPC' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {npcPokemon.length === 0 ? (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 text-center`}>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Nenhum Pokémon NPC adicionado ainda. Gere Pokémon no Gerador e adicione-os como NPCs.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {npcPokemon.map(pokemon => {
                const isExpanded = expandedNpcCards.includes(pokemon.id)

                return (
                  <div
                    key={pokemon.id}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden transition-all ${
                      isExpanded ? 'col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-4' : ''
                    }`}
                  >
                    {!isExpanded ? (
                      // Card compacto - apenas imagem
                      <div className="relative group">
                        <div
                          onClick={() => toggleNpcCard(pokemon.id)}
                          className="cursor-pointer p-4 flex flex-col items-center"
                        >
                          {pokemon.imageUrl && (
                            <img
                              src={pokemon.imageUrl}
                              alt={pokemon.name || pokemon.species}
                              className="w-32 h-32 object-contain mb-2"
                            />
                          )}
                          <p className={`text-sm font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {pokemon.species || pokemon.name || 'Pokémon'} {pokemon.shiny && '✨'}
                          </p>
                          <p className={`text-xs text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Nível {pokemon.level}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            removeNpcPokemon(pokemon.id)
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Remover NPC"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ) : (
                      // Card expandido - todas as informações
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div
                            onClick={() => toggleNpcCard(pokemon.id)}
                            className="cursor-pointer flex-1"
                          >
                            {pokemon.imageUrl && (
                              <div className="flex justify-center mb-2">
                                <img
                                  src={pokemon.imageUrl}
                                  alt={pokemon.name || pokemon.species}
                                  className="w-20 h-20 object-contain"
                                />
                              </div>
                            )}
                            <div className="text-center mb-2">
                              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {pokemon.species} {pokemon.shiny && '✨'}
                              </p>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                #{String(pokemon.dexNumber).padStart(4, '0')} • Nível {pokemon.level}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => sendNpcPokemonToBattle(pokemon)}
                              className="bg-cyan-500 text-white p-1.5 rounded-lg hover:bg-cyan-600"
                              title="Enviar para Batalha"
                            >
                              <ArrowRightCircle size={14} />
                            </button>
                            <button
                              onClick={() => removeNpcPokemon(pokemon.id)}
                              className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600"
                              title="Remover NPC"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Condições de Captura */}
                        <div className="mb-2">
                          <h4 className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Condições</h4>
                          <div className="grid grid-cols-3 gap-1">
                            {[
                              { key: 'confusao', icon: BadgeHelp, color: 'text-purple-400', label: 'Confusão' },
                              { key: 'critico', icon: Clover, color: 'text-green-600', label: 'Crítico' },
                              { key: 'paralisia', icon: Zap, color: 'text-yellow-500', label: 'Paralisia' },
                              { key: 'sono', icon: Moon, color: 'text-blue-500', label: 'Sono' },
                              { key: 'atordoamento', icon: Shell, color: 'text-gray-500', label: 'Atordoamento' },
                              { key: 'congelamento', icon: Snowflake, color: 'text-blue-400', label: 'Congelamento' },
                              { key: 'paixao', icon: Heart, color: 'text-red-500', label: 'Paixão' },
                              { key: 'queimadura', icon: Flame, color: 'text-orange-500', label: 'Queimadura' },
                              { key: 'veneno', icon: Droplet, color: 'text-purple-600', label: 'Veneno' }
                            ].map(condition => {
                              const Icon = condition.icon
                              const isChecked = npcConditions[pokemon.id]?.[condition.key] || false
                              return (
                                <label key={condition.key} className="flex items-center gap-1 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleNpcCondition(pokemon.id, condition.key)}
                                    className="w-3 h-3"
                                  />
                                  <Icon size={14} className={condition.color} title={condition.label} />
                                </label>
                              )
                            })}
                          </div>
                        </div>

                        {/* Tipos e Valor de Captura */}
                        <div className="mb-2">
                          <h4 className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tipos</h4>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              {pokemon.types.map((type, idx) => (
                                <span key={idx} className="px-2 py-0.5 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold">
                                  {type}
                                </span>
                              ))}
                            </div>
                            <div className={`px-3 py-1 rounded-lg font-bold text-sm ${
                              calculateCaptureValue(pokemon) >= 0
                                ? 'bg-green-600 text-white'
                                : 'bg-red-600 text-white'
                            }`}>
                              Captura: {calculateCaptureValue(pokemon) >= 0 ? '+' : ''}{calculateCaptureValue(pokemon)}
                            </div>
                          </div>
                        </div>

                        {/* HP e Evasões */}
                        <div className={`mb-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex-1">
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>HP</p>
                              <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {pokemon.currentHP !== undefined ? pokemon.currentHP : ((3 * pokemon.attributes.saude) + pokemon.level)} / {(3 * pokemon.attributes.saude) + pokemon.level}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedNpcPokemon(pokemon)
                                setShowNpcDamageModal(true)
                              }}
                              className="flex items-center gap-1 bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1.5 rounded-lg hover:from-red-700 hover:to-pink-700 font-semibold text-xs"
                              title="Dano/Cura PkmNpc"
                            >
                              <Sword size={12} />
                              <Heart size={12} />
                            </button>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ev. Física</p>
                              <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {Math.floor(pokemon.attributes.defesa / 5)}
                              </p>
                            </div>
                            <div>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ev. Especial</p>
                              <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {Math.floor(pokemon.attributes.defesaEspecial / 5)}
                              </p>
                            </div>
                            <div>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ev. Veloz</p>
                              <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {Math.floor(pokemon.attributes.velocidade / 10)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Informações Básicas */}
                        <div className={`grid grid-cols-2 gap-2 mb-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Espécie</p>
                            <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.species}</p>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Catch Rate</p>
                            <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.catchRate}</p>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experiência</p>
                            <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.experience} XP</p>
                          </div>
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Gênero</p>
                            <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.gender}</p>
                          </div>
                        </div>

                        {/* Natureza */}
                        <div className="mb-2">
                          <h4 className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Natureza</h4>
                          <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                            {pokemon.nature.nome} <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                              ({pokemon.nature.up && `↑${pokemon.nature.up}`} {pokemon.nature.down && `↓${pokemon.nature.down}`})
                            </span>
                          </p>
                        </div>

                        {/* Atributos */}
                        <div>
                          <h4 className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Atributos</h4>
                          <div className="space-y-1">
                            {[
                              { label: 'Saúde', key: 'saude' },
                              { label: 'Ataque', key: 'ataque' },
                              { label: 'Defesa', key: 'defesa' },
                              { label: 'Ataque Especial', key: 'ataqueEspecial' },
                              { label: 'Defesa Especial', key: 'defesaEspecial' },
                              { label: 'Velocidade', key: 'velocidade' }
                            ].map(attr => {
                              const isIncreased = pokemon.nature.up === attr.label
                              const isDecreased = pokemon.nature.down === attr.label
                              return (
                                <div key={attr.key} className={`flex justify-between items-center p-1 rounded text-xs ${
                                  isIncreased ? (darkMode ? 'bg-green-900/30' : 'bg-green-50') :
                                  isDecreased ? (darkMode ? 'bg-red-900/30' : 'bg-red-50') :
                                  (darkMode ? 'bg-gray-700' : 'bg-gray-100')
                                }`}>
                                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {attr.label} {isIncreased && '↑'} {isDecreased && '↓'}
                                  </span>
                                  <div className="flex gap-2">
                                    <span className={`${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                      Base: {pokemon.baseAttributes[attr.key]}
                                    </span>
                                    <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                      Total: {pokemon.attributes[attr.key]}
                                    </span>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Informações Adicionais */}
                        {(pokemon.migration || pokemon.habitats?.length > 0) && (
                          <div className={`mt-2 pt-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                            {pokemon.migration && (
                              <p className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-700'} mb-1`}>
                                🌍 Migração de {pokemon.migrationRegion}
                              </p>
                            )}
                            {pokemon.habitats?.length > 0 && (
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Habitats: {pokemon.habitats.join(', ')}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Botão Enviar para... */}
                        <button
                          onClick={() => {
                            setPokemonToSend(pokemon)
                            setSendPokemonSpecies(pokemon.species || '')
                            setSendPokemonNature(pokemon.nature || null)
                            setSpeciesSearchSend('')
                            setNatureSearchSend('')
                            setShowSendToTrainerModal(true)
                          }}
                          className="w-full mt-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 font-semibold text-sm"
                        >
                          Enviar para...
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Modal de Dano/Cura Pokémon NPC */}
        {showNpcDamageModal && selectedNpcPokemon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowNpcDamageModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Dano/Cura - {selectedNpcPokemon.species}
                  </h3>
                  <button onClick={() => setShowNpcDamageModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Informação de HP Atual */}
                <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>HP Atual</p>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {selectedNpcPokemon.currentHP !== undefined ? selectedNpcPokemon.currentHP : ((3 * selectedNpcPokemon.attributes.saude) + selectedNpcPokemon.level)} / {(3 * selectedNpcPokemon.attributes.saude) + selectedNpcPokemon.level}
                  </p>
                </div>

                {/* Input de Quantidade */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Quantidade
                  </label>
                  <input
                    type="number"
                    value={npcDamageAmount}
                    onChange={(e) => setNpcDamageAmount(e.target.value)}
                    placeholder="Digite a quantidade..."
                    className={`w-full px-4 py-3 border-2 rounded-lg text-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300 placeholder-gray-400'
                    }`}
                    min="1"
                  />
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <button
                    onClick={() => applyNpcDamage(true)}
                    disabled={!npcDamageAmount || parseInt(npcDamageAmount) <= 0}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Sword size={18} />
                    Aplicar Dano
                  </button>
                  <button
                    onClick={() => applyNpcDamage(false)}
                    disabled={!npcDamageAmount || parseInt(npcDamageAmount) <= 0}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Heart size={18} />
                    Curar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Envio para Treinador */}
        {showSendToTrainerModal && pokemonToSend && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowSendToTrainerModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Enviar Pokémon NPC
                  </h3>
                  <button onClick={() => setShowSendToTrainerModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Imagem do Pokémon */}
                {pokemonToSend.imageUrl && (
                  <div className="flex justify-center mb-4">
                    <img src={pokemonToSend.imageUrl} alt={pokemonToSend.species} className="w-24 h-24 object-contain" />
                  </div>
                )}

                {/* Barra de Pesquisa de Espécie */}
                <div className="mb-4">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Espécie do Pokémon *
                  </label>
                  <div className="relative mb-2">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
                    <input
                      type="text"
                      value={speciesSearchSend}
                      onChange={e => setSpeciesSearchSend(e.target.value)}
                      placeholder="Pesquisar espécie..."
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                    />
                  </div>
                  <div className={`max-h-48 overflow-y-auto border-2 rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    {pokedexData
                      .filter(p => speciesSearchSend === '' || p.nome.toLowerCase().includes(speciesSearchSend.toLowerCase()))
                      .slice(0, 50)
                      .map(p => (
                        <button
                          key={p.nome}
                          onClick={() => {
                            setSendPokemonSpecies(p.nome)
                            setSpeciesSearchSend('')
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-opacity-80 ${
                            sendPokemonSpecies === p.nome
                              ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-200'
                              : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                          }`}
                        >
                          {p.nome}
                        </button>
                      ))}
                  </div>
                  {sendPokemonSpecies && (
                    <p className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      ✓ Selecionado: {sendPokemonSpecies}
                    </p>
                  )}
                </div>

                {/* Barra de Pesquisa de Natureza */}
                <div className="mb-4">
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Natureza do Pokémon *
                  </label>
                  <input
                    type="text"
                    placeholder="Buscar natureza..."
                    value={natureSearchSend}
                    onChange={(e) => setNatureSearchSend(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg mb-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                  />
                  <select
                    value={sendPokemonNature ? sendPokemonNature.nome : ''}
                    onChange={(e) => {
                      const selectedNature = natures.find(n => n.nome === e.target.value)
                      setSendPokemonNature(selectedNature || null)
                    }}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecione uma natureza</option>
                    {natures
                      .filter(n => natureSearchSend === '' || n.nome.toLowerCase().includes(natureSearchSend.toLowerCase()))
                      .map((nature, idx) => (
                        <option key={idx} value={nature.nome}>
                          {nature.nome} {nature.up !== 'Nenhum' && `(↑${nature.up} ↓${nature.down})`}
                        </option>
                      ))}
                  </select>
                  {sendPokemonNature && (
                    <p className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      ✓ Selecionado: {sendPokemonNature.nome}
                    </p>
                  )}
                </div>

                {/* Informações adicionais */}
                <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Nível: <strong>{pokemonToSend.level}</strong> • Gênero: <strong>{pokemonToSend.gender}</strong>
                  </p>
                  {pokemonToSend.shiny && (
                    <p className={`text-sm ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      ✨ Shiny
                    </p>
                  )}
                </div>

                {/* Lista de Treinadores */}
                <div className="mb-4">
                  <h4 className={`text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Selecione o treinador:
                  </h4>
                  <div className="space-y-2">
                    {users.filter(u => u.type === 'treinador').map(trainer => (
                      <button
                        key={trainer.username}
                        onClick={() => sendPokemonToTrainer(trainer.username)}
                        className={`w-full px-4 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105`}
                        style={{ background: trainer.gradient }}
                      >
                        {trainer.username}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Botão Cancelar */}
                <button
                  onClick={() => setShowSendToTrainerModal(false)}
                  className={`w-full py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA BATALHA
  if (currentUser.type === 'mestre' && currentArea === 'Batalha') {
    // Garantir que os estados existem
    const safeTrainers = Array.isArray(battleTrainers) ? battleTrainers : []
    const safePokemon = Array.isArray(battlePokemon) ? battlePokemon : []
    const safeTrainersList = Array.isArray(battleTrainersList) ? battleTrainersList : []
    const safePokemonList = Array.isArray(battlePokemonList) ? battlePokemonList : []

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Batalha 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Batalha' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Botão Limpar Lista e Envios */}
          <div className="mb-6 flex justify-center">
            <button
              onClick={() => {
                setBattleTrainers([])
                setBattlePokemon([])
                setBattleTrainersList([])
                setBattlePokemonList([])
                setCurrentTrainerTurn(0)
                setCurrentPokemonTurn(0)
                setTrainerRound(1)
                setPokemonRound(1)
              }}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold flex items-center gap-2"
            >
              <X size={20} />
              Limpar Lista e Envios
            </button>
          </div>

          {/* Layout de Duas Colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* TRACKER TREINADORES */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6`}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Tracker Treinadores
              </h3>

              {/* Box de Enviados */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Enviados ({safeTrainers.length})
                </h4>
                <div className={`p-4 rounded-lg border-2 min-h-[150px] max-h-[200px] overflow-y-auto ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}>
                  {safeTrainers.length === 0 ? (
                    <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum treinador enviado
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {safeTrainers.map(trainer => (
                        <div key={trainer.id} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                          <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{trainer.nome}</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            HP: {trainer.hp}/{trainer.maxHP} | Vel: {trainer.velocidade}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Evasões - F: {trainer.evasaoFisica} | E: {trainer.evasaoEspecial} | V: {trainer.evasaoVeloz}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Botões de Controle */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={mountTrainerBattle}
                  className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 font-semibold flex items-center justify-center gap-2"
                >
                  <HandMetal size={20} />
                  Montar Batalha
                </button>
                <button
                  onClick={addToTrainerBattle}
                  className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  Adicionar
                </button>
              </div>

              {/* Box Em Batalha */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Em Batalha - Rodada {trainerRound}
                  </h4>
                  {safeTrainersList.length > 0 && (
                    <button
                      onClick={advanceTrainerTurn}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 font-semibold text-sm"
                    >
                      Avançar Turno
                    </button>
                  )}
                </div>
                <div className={`p-4 rounded-lg border-2 min-h-[250px] max-h-[400px] overflow-y-auto ${darkMode ? 'bg-gray-700 border-blue-500' : 'bg-blue-50 border-blue-300'}`}>
                  {safeTrainersList.length === 0 ? (
                    <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum treinador em batalha
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {safeTrainersList.map((trainer, idx) => (
                        <div
                          key={trainer.id}
                          className={`p-3 rounded-lg border-2 ${
                            idx === currentTrainerTurn
                              ? darkMode ? 'bg-yellow-900 border-yellow-500' : 'bg-yellow-100 border-yellow-500'
                              : darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`font-semibold ${idx === currentTrainerTurn ? 'text-yellow-600' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {idx === currentTrainerTurn && '▶ '}{trainer.nome}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                              Vel: {trainer.velocidade}
                            </span>
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            HP: {trainer.hp}/{trainer.maxHP}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Evasões - F: {trainer.evasaoFisica} | E: {trainer.evasaoEspecial} | V: {trainer.evasaoVeloz}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* TRACKER POKÉMON */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6`}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                Tracker Pokémon
              </h3>

              {/* Box de Enviados */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Enviados ({safePokemon.length})
                </h4>
                <div className={`p-4 rounded-lg border-2 min-h-[150px] max-h-[200px] overflow-y-auto ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'}`}>
                  {safePokemon.length === 0 ? (
                    <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum pokémon enviado
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {safePokemon.map(pokemon => (
                        <div key={pokemon.id} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                          <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.nome}</div>
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {pokemon.especie} | HP: {pokemon.hp}/{pokemon.maxHP} | Vel: {pokemon.velocidade}
                          </div>
                          <div className={`text-xs flex gap-1 mt-1`}>
                            {(pokemon.tipos || []).map((tipo, i) => (
                              <span key={i} className="px-2 py-0.5 rounded text-white text-xs" style={{ backgroundColor: TYPE_COLORS[tipo] || '#777' }}>
                                {tipo}
                              </span>
                            ))}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Evasões - F: {pokemon.evasaoFisica} | E: {pokemon.evasaoEspecial} | V: {pokemon.evasaoVeloz}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Botões de Controle */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={mountPokemonBattle}
                  className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 font-semibold flex items-center justify-center gap-2"
                >
                  <HandMetal size={20} />
                  Montar Batalha
                </button>
                <button
                  onClick={addToPokemonBattle}
                  className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  Adicionar
                </button>
              </div>

              {/* Box Em Batalha */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Em Batalha - Rodada {pokemonRound}
                  </h4>
                  {safePokemonList.length > 0 && (
                    <button
                      onClick={advancePokemonTurn}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 font-semibold text-sm"
                    >
                      Avançar Turno
                    </button>
                  )}
                </div>
                <div className={`p-4 rounded-lg border-2 min-h-[250px] max-h-[400px] overflow-y-auto ${darkMode ? 'bg-gray-700 border-red-500' : 'bg-red-50 border-red-300'}`}>
                  {safePokemonList.length === 0 ? (
                    <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum pokémon em batalha
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {safePokemonList.map((pokemon, idx) => (
                        <div
                          key={pokemon.id}
                          className={`p-3 rounded-lg border-2 ${
                            idx === currentPokemonTurn
                              ? darkMode ? 'bg-yellow-900 border-yellow-500' : 'bg-yellow-100 border-yellow-500'
                              : darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`font-semibold ${idx === currentPokemonTurn ? 'text-yellow-600' : darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {idx === currentPokemonTurn && '▶ '}{pokemon.nome}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                              Vel: {pokemon.velocidade}
                            </span>
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {pokemon.especie} | HP: {pokemon.hp}/{pokemon.maxHP}
                          </div>
                          <div className={`text-xs flex gap-1 mt-1`}>
                            {(pokemon.tipos || []).map((tipo, i) => (
                              <span key={i} className="px-2 py-0.5 rounded text-white text-xs" style={{ backgroundColor: TYPE_COLORS[tipo] || '#777' }}>
                                {tipo}
                              </span>
                            ))}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Evasões - F: {pokemon.evasaoFisica} | E: {pokemon.evasaoEspecial} | V: {pokemon.evasaoVeloz}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  // ÁREA ENCICLOPÉDIA M
  if (currentUser.type === 'mestre' && currentArea === 'Enciclopédia M') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Enciclopédia M 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Enciclopédia M' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            {/* Menu de Navegação das Subáreas */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setEncyclopediaMSection('Golpedex M')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    encyclopediaMSection === 'Golpedex M'
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Sparkles size={20} />
                  Golpedex M
                </button>
                <button
                  onClick={() => setEncyclopediaMSection('Descritordex M')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    encyclopediaMSection === 'Descritordex M'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <BookOpenText size={20} />
                  Descritordex M
                </button>
                <button
                  onClick={() => setEncyclopediaMSection('Tag de Concursodex M')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    encyclopediaMSection === 'Tag de Concursodex M'
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Crown size={20} />
                  Tag de Concursodex M
                </button>
                <button
                  onClick={() => setEncyclopediaMSection('Períciadex M')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    encyclopediaMSection === 'Períciadex M'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Zap size={20} />
                  Períciadex M
                </button>
              </div>
            </div>

            {/* GOLPEDEX M */}
            {encyclopediaMSection === 'Golpedex M' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Golpedex M
                </h3>
                <p className={`mb-6 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pesquise até 8 golpes simultaneamente para comparar suas características
                </p>

                {/* Grid 4x2 de Barras de Pesquisa */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {golpedexMSearches.map((search, index) => (
                    <div key={index} className="relative">
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Golpe #{index + 1}
                      </label>
                      <div className="relative">
                        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                        <input
                          type="text"
                          value={search}
                          onChange={(e) => {
                            const newSearches = [...golpedexMSearches]
                            newSearches[index] = e.target.value
                            setGolpedexMSearches(newSearches)
                          }}
                          placeholder="Digite o nome do golpe..."
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${
                            darkMode
                              ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-purple-500'
                              : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-500'
                          } focus:outline-none transition-all`}
                          list={`golpes-datalist-m-${index}`}
                        />
                        <datalist id={`golpes-datalist-m-${index}`}>
                          {GOLPES_NAMES.filter(nome =>
                            nome.toLowerCase().includes(search.toLowerCase())
                          ).slice(0, 50).map(nome => (
                            <option key={nome} value={nome} />
                          ))}
                        </datalist>
                        {search && (
                          <button
                            onClick={() => {
                              const newSearches = [...golpedexMSearches]
                              newSearches[index] = ''
                              setGolpedexMSearches(newSearches)
                            }}
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                              darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            <X size={20} />
                          </button>
                        )}
                      </div>

                      {/* Exibir informações do golpe se selecionado */}
                      {search && GOLPES_DATA[search] && (
                        <div className={`mt-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${TYPE_STYLES[GOLPES_DATA[search].tipo] || 'bg-gray-500'} text-white`}>
                                {GOLPES_DATA[search].tipo}
                              </span>
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'}`}>
                                {GOLPES_DATA[search].aptidao}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Acurácia:</span>
                                <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].acuracia || 'N/A'}
                                </span>
                              </div>
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dano:</span>
                                <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].danoBasal || 'N/A'}
                                </span>
                              </div>
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Alcance:</span>
                                <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].alcance || 'N/A'}
                                </span>
                              </div>
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequência:</span>
                                <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].frequencia || 'N/A'}
                                </span>
                              </div>
                            </div>

                            {GOLPES_DATA[search].descritores && (
                              <div>
                                <span className={`font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  Descritores:
                                </span>
                                <span className={`ml-2 text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].descritores}
                                </span>
                              </div>
                            )}

                            {GOLPES_DATA[search].tagConcurso && (
                              <div>
                                <span className={`font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  Tag Concurso:
                                </span>
                                <span className={`ml-2 text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {GOLPES_DATA[search].tagConcurso}
                                </span>
                              </div>
                            )}

                            <div className={`pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <span className="font-semibold">Efeito:</span> {GOLPES_DATA[search].efeito}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DESCRITORDEX M */}
            {encyclopediaMSection === 'Descritordex M' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Descritordex M
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {DESCRITORES_DATA.map((descritor) => (
                    <div key={descritor.nome}>
                      <button
                        onClick={() => {
                          if (expandedDescritorM === descritor.nome) {
                            setExpandedDescritorM(null)
                          } else {
                            setExpandedDescritorM(descritor.nome)
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-between ${
                          expandedDescritorM === descritor.nome
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                            : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <span>{descritor.nome}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            expandedDescritorM === descritor.nome ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedDescritorM === descritor.nome && (
                        <div className={`mt-2 p-4 rounded-xl ${
                          darkMode ? 'bg-gray-700' : 'bg-purple-50'
                        } border-2 border-purple-600`}>
                          <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                            {descritor.nome}
                          </h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {descritor.efeito}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAG DE CONCURSODEX M */}
            {encyclopediaMSection === 'Tag de Concursodex M' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Tag de Concursodex M
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {TAGS_CONCURSO_DATA.map((tag) => (
                    <div key={tag.nome}>
                      <button
                        onClick={() => {
                          if (expandedTagConcursoM === tag.nome) {
                            setExpandedTagConcursoM(null)
                          } else {
                            setExpandedTagConcursoM(tag.nome)
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl font-semibold transition-all ${
                          expandedTagConcursoM === tag.nome
                            ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg'
                            : darkMode
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{tag.nome}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${
                              expandedTagConcursoM === tag.nome ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div className={`text-xs mt-1 ${
                          expandedTagConcursoM === tag.nome ? 'text-pink-100' : darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          Pontuação Basal: {tag.pontuacaoBasal}
                        </div>
                      </button>

                      {expandedTagConcursoM === tag.nome && (
                        <div className={`mt-2 p-4 rounded-xl ${
                          darkMode ? 'bg-gray-700' : 'bg-pink-50'
                        } border-2 border-pink-600`}>
                          <h4 className={`font-bold text-lg mb-2 ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>
                            {tag.nome}
                          </h4>
                          <p className={`text-sm font-semibold mb-2 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`}>
                            Pontuação Basal: {tag.pontuacaoBasal}
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {tag.efeito}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PERÍCIADEX M */}
            {encyclopediaMSection === 'Períciadex M' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Períciadex M
                </h3>
                <div className="space-y-4 max-w-4xl mx-auto">
                  {ATRIBUTOS_PERICIAS_DATA.map((atributo) => (
                    <div
                      key={atributo.nome}
                      className={`rounded-xl overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-blue-50'
                      } border-2 ${
                        expandedAtributoM === atributo.nome ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <button
                        onClick={() => {
                          if (expandedAtributoM === atributo.nome) {
                            setExpandedAtributoM(null)
                          } else {
                            setExpandedAtributoM(atributo.nome)
                          }
                        }}
                        className={`w-full px-6 py-4 transition-all flex items-center justify-between ${
                          expandedAtributoM === atributo.nome
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                            : darkMode
                            ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                            : 'bg-blue-100 text-gray-800 hover:bg-blue-200'
                        }`}
                      >
                        <div className="text-left flex-1">
                          <h4 className="text-xl font-bold">{atributo.nome}</h4>
                          <p className={`text-sm mt-1 ${
                            expandedAtributoM === atributo.nome ? 'text-blue-100' : darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {atributo.explicacao}
                          </p>
                        </div>
                        <ChevronRight
                          size={24}
                          className={`transition-transform ml-4 ${
                            expandedAtributoM === atributo.nome ? 'rotate-90' : ''
                          }`}
                        />
                      </button>

                      {expandedAtributoM === atributo.nome && (
                        <div className={`px-6 py-4 space-y-3 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                          {atributo.pericias.map((pericia, index) => (
                            <div
                              key={pericia.nome}
                              className={`p-4 rounded-lg ${
                                darkMode ? 'bg-gray-600' : 'bg-blue-50'
                              }`}
                            >
                              <h6 className={`font-bold text-lg mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                                {pericia.nome}
                              </h6>
                              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {pericia.descricao}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ÁREA VISÃO DO MESTRE
  if (currentUser.type === 'mestre' && currentArea === 'Visão do Mestre') {
    // Filtrar apenas contas de treinadores
    const treinadores = users.filter(u => u.type === 'treinador')

    // Função para carregar dados de um treinador do localStorage
    const loadTrainerData = (username) => {
      const key = `trainer_${username}`
      const saved = localStorage.getItem(key)
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Erro ao carregar dados do treinador:', e)
          return null
        }
      }
      return null
    }

    // Carregar dados do treinador selecionado
    const trainerData = selectedTrainer ? loadTrainerData(selectedTrainer) : null

    // Função para calcular HP máximo do pokémon
    const calculatePokemonMaxHP = (pokemon) => {
      const saudeBase = parseInt(pokemon.baseAttributes?.saude) || 0
      const selectedNature = natures.find(n => n.nome === pokemon.nature)
      const isIncreased = selectedNature?.up === 'Saúde'
      const isDecreased = selectedNature?.down === 'Saúde'
      const natureBonus = isIncreased ? 1 : isDecreased ? -1 : 0
      const saudePontos = parseInt(pokemon.levelPoints?.saude) || 0
      const saudeTotal = saudeBase + natureBonus + saudePontos
      return (3 * saudeTotal) + (pokemon.level || 1)
    }

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Visão do Mestre 👑</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {mestreAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Visão do Mestre' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            {/* Menu de Navegação das Subáreas */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => {
                    setVisaoMestreSection('Perfis')
                    setSelectedTrainer(null)
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    visaoMestreSection === 'Perfis'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Users size={20} />
                  Perfis
                </button>
                <button
                  onClick={() => {
                    setVisaoMestreSection('Pokéloja Config')
                    setSelectedTrainer(null)
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    visaoMestreSection === 'Pokéloja Config'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <ShoppingBag size={20} />
                  Pokéloja Config
                </button>
              </div>
            </div>

            {/* POKÉLOJA CONFIG */}
            {visaoMestreSection === 'Pokéloja Config' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Configuração da Pokéloja
                </h3>
                <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Marque "Esconder" para ocultar itens da Pokéloja para todos os treinadores
                </p>

                {/* Corredores da Pokéloja */}
                <div className="space-y-8">
                  {Object.entries(POKELOJA_DATA).map(([corredor, items]) => (
                    <div key={corredor} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {corredor}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {items.map((item) => {
                          const isHidden = hiddenPokelojaItems.includes(item.name)
                          return (
                            <div
                              key={item.name}
                              className={`p-4 rounded-lg border-2 transition-all ${
                                isHidden
                                  ? darkMode ? 'bg-gray-800 border-red-500 opacity-60' : 'bg-gray-200 border-red-400 opacity-60'
                                  : darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'
                              }`}
                            >
                              <div className="text-center mb-3">
                                <h5 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {item.name}
                                </h5>
                                <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  ₽{item.price}
                                </p>
                                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex items-center justify-center gap-2 mt-3">
                                <input
                                  type="checkbox"
                                  id={`hide-${item.name}`}
                                  checked={isHidden}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setHiddenPokelojaItems([...hiddenPokelojaItems, item.name])
                                    } else {
                                      setHiddenPokelojaItems(hiddenPokelojaItems.filter(name => name !== item.name))
                                    }
                                  }}
                                  className="w-4 h-4 cursor-pointer"
                                />
                                <label
                                  htmlFor={`hide-${item.name}`}
                                  className={`text-xs cursor-pointer ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                                >
                                  Esconder
                                </label>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PERFIS */}
            {visaoMestreSection === 'Perfis' && (
              <div>
                <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Perfis dos Treinadores
                </h3>

                {/* Botões dos Treinadores */}
                {!selectedTrainer && (
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {treinadores.map(treinador => (
                      <button
                        key={treinador.username}
                        onClick={() => setSelectedTrainer(treinador.username)}
                        className={`px-6 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                        style={{ background: treinador.gradient }}
                      >
                        {treinador.username}
                      </button>
                    ))}
                  </div>
                )}

                {/* Card do Treinador Selecionado */}
                {selectedTrainer && (
                  <div>
                    {/* Botão Voltar */}
                    <button
                      onClick={() => {
                        setSelectedTrainer(null)
                        setExpandedTeamPokemon(null)
                      }}
                      className={`mb-6 px-4 py-2 rounded-lg flex items-center gap-2 ${
                        darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <ChevronLeft size={20} />
                      Voltar
                    </button>

                    {/* Informações do Treinador */}
                    <div className="space-y-6">
                      {/* Card Principal */}
                      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h4 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {selectedTrainer}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* De olho nas informações */}
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                            <h5 className={`text-lg font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                              <Info size={20} />
                              De olho nas informações
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Nível:</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {trainerData?.level || 1}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Classes&Subclasses:</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {trainerData?.classes && trainerData.classes.length > 0
                                    ? trainerData.classes.join(', ')
                                    : '-'}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>HP:</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {trainerData?.currentHP || 0} / {trainerData ? (44 + ((trainerData.level - 1) * trainerData.attributes.saude)) : 44}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* De olho nas estatísticas */}
                          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                            <h5 className={`text-lg font-bold mb-3 flex items-center gap-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                              <BarChart3 size={20} />
                              De olho nas estatísticas
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Pokémon Capturados:</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {trainerData?.pokedex?.filter(p => p.isCaptured).length || 0}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Pokémon Escaneados:</span>
                                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                  {trainerData?.pokedex?.length || 0}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
                          {/* De olho no time */}
                          <button
                            onClick={() => setExpandedTeamPokemon(expandedTeamPokemon === null ? 0 : null)}
                            className={`p-4 rounded-lg text-left transition-all ${
                              expandedTeamPokemon !== null
                                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                                : darkMode
                                ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Users size={18} />
                              <span className="font-bold">De olho no time</span>
                            </div>
                            <p className="text-xs opacity-75">Ver equipe principal</p>
                          </button>

                          {/* De olho nos Carac&Tale */}
                          <button
                            onClick={() => setShowCaracTaleModal(true)}
                            className={`p-4 rounded-lg text-left transition-all ${
                              darkMode
                                ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Sparkles size={18} />
                              <span className="font-bold">De olho nos Carac&Tale</span>
                            </div>
                            <p className="text-xs opacity-75">Ver habilidades</p>
                          </button>

                          {/* De olho na Mochila */}
                          <button
                            onClick={() => setShowMochilaModal(true)}
                            className={`p-4 rounded-lg text-left transition-all ${
                              darkMode
                                ? 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Package size={18} />
                              <span className="font-bold">De olho na Mochila</span>
                            </div>
                            <p className="text-xs opacity-75">Ver itens</p>
                          </button>
                        </div>

                        {/* Time Expandido */}
                        {expandedTeamPokemon !== null && (
                          <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                            <h5 className={`text-lg font-bold mb-4 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                              Time Principal
                            </h5>
                            {trainerData?.mainTeam && trainerData.mainTeam.length > 0 ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {trainerData.mainTeam.map((pokemon, index) => {
                                  const maxHP = calculatePokemonMaxHP(pokemon)
                                  return (
                                    <div key={index} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center`}>
                                      <h6 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                        {pokemon.nickname || pokemon.species}
                                      </h6>
                                      {pokemon.nickname && (
                                        <p className={`text-xs mb-2 italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                          {pokemon.species}
                                        </p>
                                      )}
                                      <div className="space-y-1 text-xs mt-2">
                                        <div>
                                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>HP: </span>
                                          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                            {pokemon.currentHP !== undefined ? pokemon.currentHP : '-'}/{maxHP}
                                          </span>
                                        </div>
                                        <div>
                                          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Nível: </span>
                                          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                            {pokemon.level || 1}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            ) : (
                              <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  Nenhum Pokémon no time
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal de Características & Talentos */}
        {showCaracTaleModal && selectedTrainer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
              <div className={`sticky top-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Características & Talentos - {selectedTrainer}
                </h3>
                <button
                  onClick={() => setShowCaracTaleModal(false)}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X size={24} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                {/* Características de Classe */}
                <div>
                  <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Características de Classe
                  </h4>
                  {(() => {
                    // Obter características das classes/subclasses do usuário
                    const userCaracteristicas = []
                    if (trainerData?.classes) {
                      trainerData.classes.forEach(className => {
                        if (className && CARACTERISTICAS_DATA[className]) {
                          Object.entries(CARACTERISTICAS_DATA[className]).forEach(([name, data]) => {
                            userCaracteristicas.push({ name, ...data, className })
                          })
                        }
                      })
                    }

                    if (userCaracteristicas.length === 0) {
                      return (
                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Nenhuma classe selecionada
                          </p>
                        </div>
                      )
                    }

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {userCaracteristicas.map((carac, index) => (
                          <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border-2 ${darkMode ? 'border-blue-500' : 'border-blue-300'}`}>
                            <div className="flex items-start justify-between mb-2">
                              <h5 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {carac.name}
                              </h5>
                              <span className={`text-xs px-2 py-1 rounded ml-2 flex-shrink-0 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                                {carac.className}
                              </span>
                            </div>
                            <div className="space-y-1 text-sm">
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Frequência:</span> {carac.frequencia}
                              </p>
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Referência:</span> {carac.referencia}
                              </p>
                              {carac.alvo && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Alvo:</span> {carac.alvo}
                                </p>
                              )}
                              {carac.gatilho && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Gatilho:</span> {carac.gatilho}
                                </p>
                              )}
                              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <span className="font-semibold">Efeito:</span> {carac.efeito}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })()}
                </div>

                {/* Talentos Selecionados */}
                <div>
                  <h4 className={`text-xl font-bold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    Talentos Selecionados
                  </h4>
                  {trainerData?.talentosSelected && trainerData.talentosSelected.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trainerData.talentosSelected.map((talentoNome, index) => {
                        // Buscar dados completos do talento pelo nome
                        let talentoData = null

                        // Percorrer todas as classes para encontrar o talento
                        Object.values(TALENTOS_DATA).forEach(talentosList => {
                          const found = talentosList.find(t => t.nome === talentoNome)
                          if (found) talentoData = found
                        })

                        if (!talentoData) {
                          return (
                            <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border-2 ${darkMode ? 'border-purple-500' : 'border-purple-300'}`}>
                              <h5 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {talentoNome}
                              </h5>
                              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Detalhes não disponíveis
                              </p>
                            </div>
                          )
                        }

                        return (
                          <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'} border-2 ${darkMode ? 'border-purple-500' : 'border-purple-300'}`}>
                            <h5 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {talentoData.nome}
                            </h5>
                            <div className="space-y-1 text-sm">
                              {talentoData.requisitos && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Requisitos:</span> {talentoData.requisitos}
                                </p>
                              )}
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Frequência:</span> {talentoData.frequencia}
                              </p>
                              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                <span className="font-semibold">Referência:</span> {talentoData.referencia}
                              </p>
                              {talentoData.alvo && (
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                  <span className="font-semibold">Alvo:</span> {talentoData.alvo}
                                </p>
                              )}
                              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                <span className="font-semibold">Efeito:</span> {talentoData.efeito}
                              </p>
                              {talentoData.especial && (
                                <p className={`mt-2 italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {talentoData.especial}
                                </p>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Nenhum talento selecionado
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal da Mochila */}
        {showMochilaModal && selectedTrainer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
              <div className={`sticky top-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Mochila - {selectedTrainer}
                </h3>
                <button
                  onClick={() => setShowMochilaModal(false)}
                  className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X size={24} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                {/* Itens Chave */}
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    Itens Chave
                  </h4>
                  {trainerData?.keyItems && trainerData.keyItems.length > 0 ? (
                    <div className="space-y-2">
                      {trainerData.keyItems.map((item, index) => (
                        <div key={index} className={`p-3 rounded-lg flex justify-between items-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {item.name}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-yellow-600' : 'bg-yellow-500'} text-white`}>
                            x{item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Nenhum item chave
                      </p>
                    </div>
                  )}
                </div>

                {/* Itens Customizados */}
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Itens Customizados
                  </h4>
                  {trainerData?.customItems && trainerData.customItems.length > 0 ? (
                    <div className="space-y-3">
                      {trainerData.customItems.map((item, index) => (
                        <div key={index} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="flex justify-between items-start mb-2">
                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {item.name}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white`}>
                              x{item.quantity}
                            </span>
                          </div>
                          {item.description && (
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Nenhum item customizado
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA DO TREINADOR
  if (currentUser.type === 'treinador' && currentArea === 'Treinador') {
    const maxHP = getMaxHP()
    const displacement = getDisplacement()
    const evasion = getEvasion()
    const hpPercent = maxHP > 0 ? (currentHP / maxHP) * 100 : 0
    
    const capturedCount = pokedex.filter(p => p.isCaptured).length
    const scannedCount = pokedex.length

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentUser.username}</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Treinador' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            
            {/* CABEÇALHO COM IMAGEM E INFO */}
            <div className="flex items-start gap-6 mb-8">
              <div className="relative flex-shrink-0">
                {image ? <img src={image} alt="T" className="w-32 h-32 object-cover rounded-lg border-4 border-blue-500" /> : <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center border-4 border-gray-400"><Camera size={48} className="text-gray-500" /></div>}
                <button onClick={() => setShowTrainerImageModal(true)} className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"><Camera size={20} /></button>
              </div>
              <div className="flex-1">
                <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>{currentUser.username}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Nível: {level}</span>
                  <button onClick={() => setLevel(Math.max(0, Math.min(50, level - 1)))} className="p-1 bg-red-500 text-white rounded hover:bg-red-600"><Minus size={16} /></button>
                  <button onClick={() => { setTempLevel(level.toString()); setShowLevelModal(true) }} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-semibold">Lvl</button>
                  <button onClick={() => setLevel(Math.max(0, Math.min(50, level + 1)))} className="p-1 bg-green-500 text-white rounded hover:bg-green-600"><Plus size={16} /></button>
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>HP: {currentHP}/{maxHP}</span>
                    <div className="flex gap-2">
                      <button onClick={() => sendTrainerToBattle()} className="flex items-center gap-1 px-3 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 text-sm" title="Adicionar a Batalha Treinador"><PlusCircle size={14} /></button>
                      <button onClick={() => setShowHPModal(true)} className="flex items-center gap-1 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"><Sword size={14} /><Heart size={14} />Dano/Cura</button>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-6">
                    <div className={`h-6 rounded-full transition-all ${currentHP < 0 ? 'bg-red-700' : 'bg-green-500'}`} style={{ width: `${Math.min(100, Math.max(0, hpPercent))}%` }}></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-yellow-100 px-4 py-2 rounded-lg text-center"><div className="text-xs text-yellow-600">Pokédex</div><div className="text-lg font-bold text-yellow-800">{scannedCount}</div></div>
                  <div className="bg-green-100 px-4 py-2 rounded-lg text-center"><div className="text-xs text-green-600">PC</div><div className="text-lg font-bold text-green-800">{pcPokemon.length}/1000</div></div>
                </div>
              </div>
            </div>

            {/* CLASSES */}
            <div className="mb-8">
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Classes & Subclasses</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {classes.map((cls, idx) => {
                  const ci = allClasses.find(c => c.name === cls)
                  return <div key={idx} className="relative">
                    <button onClick={() => { setCurrentSlot(idx); setShowClassModal(true) }} className="w-full p-4 rounded-lg border-2 hover:shadow-lg transition-all text-center font-semibold" style={{ backgroundColor: cls ? ci?.color + '40' : darkMode ? '#374151' : '#f3f4f6', color: cls ? ci?.color : darkMode ? '#9ca3af' : '#6b7280', borderColor: cls ? ci?.color : darkMode ? '#4b5563' : '#d1d5db' }}>{cls || 'Classe & Subclasse'}</button>
                    {cls && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          const newClasses = [...classes]
                          newClasses[idx] = ''
                          setClasses(newClasses)
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-lg transition-colors"
                        title="Remover classe"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                })}
              </div>
            </div>

            {/* ESTILIZADOR - para Rangers e Policiais */}
            {(classes.includes('Ranger') || classes.includes('Policial')) && (
              <div className="mb-8">
                {/* ESTILIZADOR POLICIAL - apenas para Policiais */}
                {classes.includes('Policial') ? (
                  <>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center`}>Estilizador Policial</h4>
                    <div className={`p-6 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                      <div className="flex items-center justify-center gap-6">
                        {/* Catador - à esquerda da Pedra do Trovão se Ladrão estiver selecionado */}
                        {classes.includes('Ladrão') && (
                          <div className="flex-shrink-0">
                            <img
                              src="/catador.png"
                              alt="Catador"
                              className="w-20 h-20 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}

                        {/* Pedra do Trovão - esquerda */}
                        <div className="flex-shrink-0">
                          <button
                            onClick={() => {
                              if (!thunderStoneActive) {
                                setThunderStoneActive(true)
                                setEstilizadorPolicialBattery(40)
                              } else {
                                setThunderStoneActive(false)
                                setEstilizadorPolicialBattery(prev => Math.min(prev, 30))
                              }
                            }}
                            className="transition-all cursor-pointer"
                            title={thunderStoneActive ? "Clique para desativar a Pedra do Trovão" : "Clique para ativar a Pedra do Trovão (+10 bateria)"}
                          >
                            <img
                              src="/pedra-trovao.png"
                              alt="Pedra do Trovão"
                              className="w-16 h-16 object-contain"
                              style={{
                                filter: thunderStoneActive ? 'none' : 'grayscale(100%)',
                                opacity: thunderStoneActive ? 1 : 0.6,
                                cursor: 'pointer'
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </button>
                        </div>

                        {/* Imagem do Estilizador Policial */}
                        <div className="flex-shrink-0">
                          <img
                            src="/estilizador-policial.png"
                            alt="Estilizador Policial"
                            className="w-24 h-24 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>

                        {/* Bateria - 3 linhas de 10 colunas (ou 4 se Thunder Stone ativa) */}
                        <div className="flex flex-col items-center">
                          <div className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Bateria: {estilizadorPolicialBattery}/{thunderStoneActive ? 40 : 30}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {/* Linhas 1-3 (ou 1-4 com Thunder Stone) */}
                            {[...Array(thunderStoneActive ? 4 : 3)].map((_, lineIdx) => (
                              <div key={lineIdx} className="flex gap-1.5">
                                {[...Array(10)].map((_, colIdx) => {
                                  // Calcular índice da bateria: linha 0 col 0 = bateria 1, linha 0 col 9 = bateria 10
                                  // linha 1 col 0 = bateria 11, etc
                                  const batteryIdx = lineIdx * 10 + colIdx + 1
                                  const maxBattery = thunderStoneActive ? 40 : 30
                                  const isActive = estilizadorPolicialBattery >= batteryIdx

                                  // Gradiente: vermelho (0) no início, verde (120) no final
                                  const hue = ((batteryIdx - 1) / (maxBattery - 1)) * 120
                                  const backgroundColor = isActive
                                    ? `hsl(${hue}, 80%, 50%)`
                                    : darkMode ? '#374151' : '#e5e7eb'

                                  return (
                                    <div
                                      key={colIdx}
                                      className="w-8 h-8 rounded border-2"
                                      style={{
                                        backgroundColor,
                                        borderColor: isActive ? `hsl(${hue}, 80%, 40%)` : darkMode ? '#4b5563' : '#d1d5db'
                                      }}
                                    />
                                  )
                                })}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Controles */}
                        <div className="flex gap-4">
                          <button
                            onClick={() => setEstilizadorPolicialBattery(Math.max(0, estilizadorPolicialBattery - 1))}
                            className={`p-3 rounded-lg ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                            disabled={estilizadorPolicialBattery === 0}
                            title="Usar Estilizador Policial (-1 bateria)"
                          >
                            <LifeBuoy size={28} />
                          </button>
                          <button
                            onClick={() => setEstilizadorPolicialBattery(thunderStoneActive ? 40 : 30)}
                            className={`p-3 rounded-lg ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                            disabled={estilizadorPolicialBattery === (thunderStoneActive ? 40 : 30)}
                            title="Recarregar Estilizador Policial"
                          >
                            <BatteryCharging size={28} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* ESTILIZADOR - apenas para Rangers */
                  <>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center`}>Estilizador</h4>
                    <div className={`p-6 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                      <div className="flex items-center justify-center gap-8">
                        {/* Catador - à esquerda do Estilizador se Ladrão estiver selecionado */}
                        {classes.includes('Ladrão') && (
                          <div className="flex-shrink-0">
                            <img
                              src="/catador.png"
                              alt="Catador"
                              className="w-20 h-20 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}

                        {/* Imagem do Estilizador */}
                        <div className="flex-shrink-0">
                          <img
                            src="/estilizador.png"
                            alt="Estilizador"
                            className="w-24 h-24 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>

                        {/* Bateria */}
                        <div className="flex flex-col items-center">
                          <div className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Bateria: {estilizadorBattery}/10
                          </div>
                          <div className="flex gap-1.5">
                            {[...Array(10)].map((_, idx) => {
                              const isActive = idx < estilizadorBattery
                              // Gradiente de vermelho (0) para verde (9)
                              const hue = (idx / 9) * 120 // 0 = vermelho, 120 = verde
                              const backgroundColor = isActive
                                ? `hsl(${hue}, 80%, 50%)`
                                : darkMode ? '#374151' : '#e5e7eb'

                              return (
                                <div
                                  key={idx}
                                  className="w-10 h-10 rounded border-2"
                                  style={{
                                    backgroundColor,
                                    borderColor: isActive ? `hsl(${hue}, 80%, 40%)` : darkMode ? '#4b5563' : '#d1d5db'
                                  }}
                                />
                              )
                            })}
                          </div>
                        </div>

                        {/* Controles */}
                        <div className="flex gap-4">
                          <button
                            onClick={() => setEstilizadorBattery(Math.max(0, estilizadorBattery - 1))}
                            className={`p-3 rounded-lg ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                            disabled={estilizadorBattery === 0}
                            title="Usar Estilizador (-1 bateria)"
                          >
                            <LifeBuoy size={28} />
                          </button>
                          <button
                            onClick={() => setEstilizadorBattery(10)}
                            className={`p-3 rounded-lg ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
                            disabled={estilizadorBattery === 10}
                            title="Recarregar Estilizador"
                          >
                            <BatteryCharging size={28} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* CATADOR - para Ladrão sem Ranger ou Policial */}
            {classes.includes('Ladrão') && !classes.includes('Ranger') && !classes.includes('Policial') && (
              <div className="mb-8">
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4 text-center`}>Catador</h4>
                <div className={`p-6 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0">
                      <img
                        src="/catador.png"
                        alt="Catador"
                        className="w-24 h-24 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TABELA DE ATRIBUTOS */}
            <div className="mb-8">
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Atributos</h4>
              <div className="overflow-x-auto">
                <table className={`w-full border-collapse ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <thead><tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                    <th className={`border p-2 ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributo</th>
                    <th className={`border p-2 ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Valor</th>
                    <th className={`border p-2 ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Modificador</th>
                    <th className={`border p-2 ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Perícias</th>
                  </tr></thead>
                  <tbody>
                    {Object.entries(attributes).map(([key, value]) => {
                      const mod = getModifier(value)
                      const names = { saude: 'Saúde', ataque: 'Ataque', defesa: 'Defesa', ataqueEspecial: 'Ataque Especial', defesaEspecial: 'Defesa Especial', velocidade: 'Velocidade' }
                      return <tr key={key}>
                        <td className={`border p-2 font-semibold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>{names[key]}</td>
                        <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                          <input type="number" min="1" max="40" value={value} onChange={e => setAttributes({ ...attributes, [key]: Math.max(1, Math.min(40, parseInt(e.target.value) || 1)) })} className={`w-20 px-2 py-1 text-center border rounded ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'border-gray-300'}`} />
                        </td>
                        <td className={`border p-2 text-center font-bold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>{mod >= 0 ? '+' : ''}{mod}</td>
                        <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                          <div className="flex flex-wrap gap-1">
                            {skillsByAttribute[key].map(skill => {
                              const cnt = getSkillCount(key, skill)
                              return <button key={skill} onClick={() => toggleSkill(key, skill)} className={`px-2 py-1 text-xs rounded ${cnt > 0 ? 'bg-blue-500 text-white' : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>{skill} {cnt === 2 && 'x2'}</button>
                            })}
                          </div>
                        </td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DESLOCAMENTOS E EVASÃO */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Deslocamentos</h4>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="mb-2"><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Terrestre:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{displacement.terrestre}</span></div>
                  <div className="mb-2"><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Natação:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{displacement.natacao}</span></div>
                  <div><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Subaquático:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{displacement.subaquatico}</span></div>
                </div>
              </div>
              <div>
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Evasão</h4>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="mb-2"><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Física:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{evasion.fisica}</span></div>
                  <div className="mb-2"><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Especial:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{evasion.especial}</span></div>
                  <div><span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Veloz:</span> <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{evasion.veloz}</span></div>
                </div>
              </div>
            </div>

            {/* TIME PRINCIPAL - COLUNA ÚNICA */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Time Principal ({mainTeam.length}/6)</h4>
                <div className="flex gap-2">
                  <button onClick={healAllPokemon} className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 shadow-lg" title="Curar todos os Pokémon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                    <span>EstagiAyla Joy</span>
                  </button>
                  <button onClick={() => setShowAddPokemonModal(true)} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg font-semibold hover:opacity-90 shadow-lg border-2 border-gray-300">
                    <img src="/pokeball-icon.png" alt="Pokébola" className="w-6 h-6" />
                    <span className="text-gray-800">Adicionar Pkm</span>
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {[...Array(6)].map((_, idx) => {
                  const pokemon = mainTeam[idx]
                  return (
                    <div key={idx} className={`p-4 rounded-lg border-2 ${pokemon ? darkMode ? 'bg-gray-700 border-blue-500' : 'bg-blue-50 border-blue-300' : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'}`}>
                      {pokemon ? (
                        <div>
                          {/* Botões no canto direito superior */}
                          <div className="flex justify-end gap-2 mb-4">
                            <button onClick={() => openImageModal(pokemon)} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600" title="Adicionar Imagem">
                              <Camera size={18} />
                            </button>
                            <button onClick={() => sendPokemonToBattle(pokemon)} className="bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600" title="Enviar para Batalha">
                              <ArrowRightCircle size={18} />
                            </button>
                            <button onClick={() => openTempHPModal(pokemon, idx)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" title="HP Temporário Pkm">
                              <ShieldPlus size={18} />
                            </button>
                            <button
                              onClick={() => {
                                setNameRaterIndex(idx)
                                setNameRaterNickname(pokemon.nickname)
                                setShowNameRaterModal(true)
                              }}
                              className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
                              title="Name Rater"
                            >
                              <Edit size={18} />
                            </button>
                            <button onClick={() => handleOpenTutoria(pokemon, 'team')} className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600" title="Tutoria de Golpes">
                              <BookOpenText size={18} />
                            </button>
                            <button onClick={() => handleOpenHabilidades(pokemon, 'team')} className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600" title="Habilidades">
                              <BookA size={18} />
                            </button>
                            <button
                              onClick={() => handleOpenPokeballModal(pokemon, 'team')}
                              className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 animate-pulse"
                              title="Pokébola de Captura"
                              style={{
                                animation: 'colorCycle 3s linear infinite'
                              }}
                            >
                              <CircleDot size={18} />
                            </button>
                            <button
                              onClick={() => handleOpenHeldItemModal(pokemon, 'team')}
                              className="bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
                              title="Held Item"
                            >
                              <Webhook size={18} />
                            </button>
                            <button onClick={() => openEditPokemonModal(pokemon, 'team', idx)} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm font-semibold" title="Editar Pokémon">
                              Edição Pkm
                            </button>
                            <button onClick={() => openPokemonHPModal(pokemon, idx)} className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 text-sm font-semibold" title="Dano/Cura">
                              Dano/Cura
                            </button>
                            <button onClick={() => { setSelectedPokemonIndex(idx); setShowXPModal(true) }} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm font-semibold">
                              + XP
                            </button>
                            <button onClick={() => openHappinessModal(pokemon, idx)} className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600" title="Felicidade">
                              <Smile size={18} />
                            </button>
                            <button onClick={() => moveToPc(idx)} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-sm font-semibold" title="Mover para o PC">
                              ⬇️ PC
                            </button>
                            <button onClick={() => handleDeletePokemon(idx)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                              <Trash2 size={18} />
                            </button>
                          </div>

                          {/* Informações principais e barras */}
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex flex-col items-center gap-2">
                              {pokemonImages[pokemon.id] && (
                                <img src={pokemonImages[pokemon.id]} alt={pokemon.nickname} className="w-20 h-20 object-cover rounded-lg border-2 border-blue-500" />
                              )}
                              {pokemon.pokeball && (
                                <img
                                  src={pokemon.pokeball === 'Custom Pokeball' && pokemon.customPokeballImage ? pokemon.customPokeballImage : `/pokeballs/${pokemon.pokeball.toLowerCase().replace(/\s+/g, '')}.png`}
                                  alt={pokemon.pokeball}
                                  className="w-10 h-10 object-contain"
                                  title={pokemon.pokeball}
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h5
                                  className={`font-bold text-lg cursor-pointer hover:underline ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
                                  onClick={() => openPokemonInfoModal(pokemon)}
                                >
                                  {pokemon.nickname}
                                </h5>
                                <span className={`px-2 py-1 rounded text-xs font-bold ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'}`}>Lv.{pokemon.level}</span>
                                {getPokemonTypes(pokemon).map((tipo, idx) => (
                                  <span
                                    key={idx}
                                    className={`px-3 py-1 rounded-md text-xs font-bold text-white shadow-md ${TYPE_STYLES[tipo] || 'bg-gray-400'}`}
                                    style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}
                                  >
                                    {tipo}
                                  </span>
                                ))}

                                {/* Tags de Capacidades em grid dinâmico */}
                                {pokemon.capacities && pokemon.capacities.others && pokemon.capacities.others.length > 0 && (() => {
                                  const capacitiesCount = pokemon.capacities.others.filter(cap => cap).length
                                  const gridCols = capacitiesCount === 1 ? 'grid-cols-1' : capacitiesCount === 2 ? 'grid-cols-2' : 'grid-cols-3'
                                  return (
                                    <div className={`px-2 py-1 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} grid ${gridCols} gap-1 inline-grid`}>
                                      {pokemon.capacities.others.filter(cap => cap).map((capacity, idx) => (
                                        <button
                                          key={idx}
                                          onClick={() => {
                                            setSelectedCapacityForInfo(capacity)
                                            setShowCapacityInfoModal(true)
                                          }}
                                          className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'} cursor-pointer transition-colors`}
                                        >
                                          {capacity}
                                        </button>
                                      ))}
                                    </div>
                                  )
                                })()}

                                {/* Caixa de Slots de Habilidades */}
                                <div className={`px-2 py-1 rounded-lg ${darkMode ? 'bg-teal-900 border-2 border-teal-600' : 'bg-teal-50 border-2 border-teal-300'} inline-flex flex-wrap gap-2 items-center`}>
                                  {/* Slot 1 - Nível 1 */}
                                  {pokemon.habilidades && pokemon.habilidades[0] ? (
                                    <button
                                      onClick={() => {
                                        setSelectedHabilidadeForDetail(pokemon.habilidades[0])
                                        setShowHabilidadeDetailModal(true)
                                      }}
                                      className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-teal-200 text-teal-900 hover:bg-teal-300'} cursor-pointer transition-colors`}
                                    >
                                      {pokemon.habilidades[0]}
                                    </button>
                                  ) : (
                                    <span className={`px-2 py-1 text-xs italic ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                                      Habilidade a partir do nível 1
                                    </span>
                                  )}

                                  {/* Slot 2 - Nível 40 */}
                                  {pokemon.habilidades && pokemon.habilidades[1] ? (
                                    <button
                                      onClick={() => {
                                        setSelectedHabilidadeForDetail(pokemon.habilidades[1])
                                        setShowHabilidadeDetailModal(true)
                                      }}
                                      className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-teal-200 text-teal-900 hover:bg-teal-300'} cursor-pointer transition-colors`}
                                    >
                                      {pokemon.habilidades[1]}
                                    </button>
                                  ) : (
                                    <span className={`px-2 py-1 text-xs italic ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                                      Habilidade a partir do nível 40
                                    </span>
                                  )}
                                </div>

                                {/* Caixa de Held Item */}
                                <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-2 border-gray-500' : 'bg-gray-100 border-2 border-gray-400'} inline-flex items-center justify-center text-center gap-2`}>
                                  {pokemon.heldItem ? (
                                    <>
                                      <button
                                        onClick={() => handleOpenHeldItemDetail(pokemon.heldItem)}
                                        className={`text-sm font-semibold ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-gray-900'} hover:underline cursor-pointer transition-colors`}
                                      >
                                        {pokemon.heldItem.name}
                                      </button>
                                      <button
                                        onClick={() => handleReturnItemToBackpack(pokemon, false)}
                                        className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                                        title="Devolver item para a mochila"
                                      >
                                        <ArrowBigRightDash size={18} />
                                      </button>
                                    </>
                                  ) : (
                                    <span className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                      {getRandomNoItemPhrase()}
                                    </span>
                                  )}
                                </div>
                                {/* Caixa de HP Temporário */}
                                {pokemon.temporaryHP > 0 && (
                                  <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-blue-700 border-2 border-blue-500' : 'bg-blue-100 border-2 border-blue-400'} inline-flex items-center justify-center text-center gap-2`}>
                                    <ShieldPlus size={16} className={darkMode ? 'text-blue-200' : 'text-blue-600'} />
                                    <span className={`text-sm font-semibold ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                                      {pokemon.temporaryHP}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{pokemon.species}</p>

                              {/* Barra de HP */}
                              <div className="mb-1">
                                <div className="flex justify-between items-center mb-1">
                                  <span className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    HP: {pokemon.currentHP || 0}/{calculateMaxHP(pokemon)}
                                  </span>
                                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {Math.round(((pokemon.currentHP || 0) / calculateMaxHP(pokemon)) * 100)}%
                                  </span>
                                </div>
                                <div className={`w-full rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                                  <div
                                    className={`h-3 rounded-full transition-all duration-500 ${
                                      ((pokemon.currentHP || 0) / calculateMaxHP(pokemon)) > 0.5 ? 'bg-green-500' :
                                      ((pokemon.currentHP || 0) / calculateMaxHP(pokemon)) > 0.2 ? 'bg-yellow-500' :
                                      'bg-red-500'
                                    }`}
                                    style={{ width: `${Math.min(100, ((pokemon.currentHP || 0) / calculateMaxHP(pokemon)) * 100)}%` }}
                                  ></div>
                                </div>
                              </div>

                              {/* Barra de XP */}
                              <div className="mb-1">
                                <div className="flex justify-between items-center mb-1">
                                  <span className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    XP: {(pokemon.totalXP || 0) - XP_TABLE[pokemon.level]}/{XP_TABLE[pokemon.level + 1] - XP_TABLE[pokemon.level]}
                                  </span>
                                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {Math.round((((pokemon.totalXP || 0) - XP_TABLE[pokemon.level]) / (XP_TABLE[pokemon.level + 1] - XP_TABLE[pokemon.level])) * 100)}%
                                  </span>
                                </div>
                                <div className={`w-full rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                                  <div
                                    className="rainbow-xp-bar h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min(100, (((pokemon.totalXP || 0) - XP_TABLE[pokemon.level]) / (XP_TABLE[pokemon.level + 1] - XP_TABLE[pokemon.level])) * 100)}%` }}
                                  ></div>
                                </div>
                              </div>

                              {/* Barra de Felicidade */}
                              <div className="mb-1">
                                <div className="flex justify-between items-center mb-1">
                                  <span className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Felicidade: {pokemon.currentHappiness || 0}/{calculateMaxHappiness(pokemon)}
                                  </span>
                                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {Math.round(((pokemon.currentHappiness || 0) / calculateMaxHappiness(pokemon)) * 100)}%
                                  </span>
                                </div>
                                <div className={`w-full rounded-full h-3 overflow-hidden ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                                  <div
                                    className="h-3 rounded-full transition-all duration-500 bg-gradient-to-r from-pink-400 to-green-400"
                                    style={{ width: `${Math.min(100, ((pokemon.currentHappiness || 0) / calculateMaxHappiness(pokemon)) * 100)}%` }}
                                  ></div>
                                </div>
                              </div>

                              {/* Slots de Golpes */}
                              <div className="mt-4">
                                <div className="grid grid-cols-4 gap-2">
                                  {[...Array(8)].map((_, slotIdx) => {
                                    const golpe = pokemon.golpes && pokemon.golpes[slotIdx]
                                    const golpeTipo = golpe && GOLPES_DATA[golpe] ? GOLPES_DATA[golpe].tipo : null
                                    const golpeColor = golpeTipo ? TYPE_STYLES[golpeTipo] : null
                                    return (
                                      <button
                                        key={slotIdx}
                                        onClick={() => golpe && handleOpenGolpeDetail(golpe)}
                                        className={`p-2 rounded text-xs font-semibold transition-all ${
                                          golpe
                                            ? `${golpeColor || (darkMode ? 'bg-orange-600' : 'bg-orange-500')} text-white hover:opacity-80 cursor-pointer`
                                            : `${darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-500'} cursor-default`
                                        }`}
                                        disabled={!golpe}
                                      >
                                        {golpe || 'Seu pokémon quer aprender...'}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Evasões e Bônus Elemental */}
                          <div className={`pt-4 border-t-2 ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
                            <div className="flex justify-between items-start">
                              {/* Evasões */}
                              <div className="flex-1">
                                <h6 className={`text-xs font-bold mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Evasões</h6>
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                  <div className={`text-center p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-blue-100'}`}>
                                    <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ev. Física</div>
                                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-600'}`}>{calculatePhysicalEvasion(pokemon)}</div>
                                  </div>
                                  <div className={`text-center p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-blue-100'}`}>
                                    <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ev. Especial</div>
                                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-600'}`}>{calculateSpecialEvasion(pokemon)}</div>
                                  </div>
                                  <div className={`text-center p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-blue-100'}`}>
                                    <div className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ev. Veloz</div>
                                    <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-600'}`}>{calculateSpeedEvasion(pokemon)}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Bônus Elemental */}
                              <div className="ml-4">
                                <h6 className={`text-xs font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Bônus Elemental</h6>
                                <div className={`text-center p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-purple-100'} min-w-[80px]`}>
                                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-purple-600'}`}>{calculateElementalBonus(pokemon)}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`text-center py-6 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          <span className="text-3xl">○</span>
                          <p className="text-sm mt-2">Slot {idx + 1}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MODAIS (mantidos iguais) */}
        {showLevelModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowLevelModal(false)}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Definir Nível (0-50)</h3>
              <button onClick={() => setShowLevelModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            <input type="number" min="0" max="50" value={tempLevel} onChange={e => setTempLevel(e.target.value)} className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-2xl font-bold ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
            <button onClick={() => { const n = parseInt(tempLevel); if (n >= 0 && n <= 50) { setLevel(n); setShowLevelModal(false); setTempLevel('') } }} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">Confirmar</button>
          </div>
        </div>}

        {showHPModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHPModal(false)}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dano/Cura Treinador</h3>
              <button onClick={() => setShowHPModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            <input type="number" min="1" max="1000" value={hpValue} onChange={e => setHpValue(e.target.value)} placeholder="Valor (1-1000)" className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => { const v = parseInt(hpValue) || 0; setCurrentHP(Math.min(currentHP + v, maxHP)); setHpValue(''); setShowHPModal(false) }} className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold flex items-center justify-center gap-2"><Heart size={20} />Curar</button>
              <button onClick={() => { const v = parseInt(hpValue) || 0; setCurrentHP(currentHP - v); setHpValue(''); setShowHPModal(false) }} className="bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold flex items-center justify-center gap-2"><Sword size={20} />Dano</button>
            </div>
          </div>
        </div>}

        {/* MODAL DE IMAGEM DO TREINADOR */}
        {showTrainerImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowTrainerImageModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Adicionar Foto do Treinador
                </h3>
                <button onClick={() => setShowTrainerImageModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Seletor de tipo de upload */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setTrainerImageUploadType('link')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                      trainerImageUploadType === 'link'
                        ? 'bg-blue-500 text-white'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Link/URL
                  </button>
                  <button
                    onClick={() => setTrainerImageUploadType('file')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                      trainerImageUploadType === 'file'
                        ? 'bg-blue-500 text-white'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Arquivo Local
                  </button>
                </div>

                {trainerImageUploadType === 'link' ? (
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      URL da Imagem
                    </label>
                    <input
                      type="url"
                      value={trainerImageUrl}
                      onChange={(e) => setTrainerImageUrl(e.target.value)}
                      placeholder="https://exemplo.com/foto.jpg"
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                    />
                  </div>
                ) : (
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Selecionar Arquivo
                    </label>
                    <input
                      id="trainer-image-file"
                      type="file"
                      accept="image/*"
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      setShowTrainerImageModal(false)
                      setTrainerImageUrl('')
                    }}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      if (trainerImageUploadType === 'link' && trainerImageUrl.trim()) {
                        setImage(trainerImageUrl)
                        setShowTrainerImageModal(false)
                        setTrainerImageUrl('')
                      } else if (trainerImageUploadType === 'file') {
                        const fileInput = document.getElementById('trainer-image-file')
                        if (fileInput && fileInput.files && fileInput.files[0]) {
                          const reader = new FileReader()
                          reader.onload = (e) => {
                            setImage(e.target.result)
                            setShowTrainerImageModal(false)
                            setTrainerImageUrl('')
                          }
                          reader.readAsDataURL(fileInput.files[0])
                        }
                      }
                    }}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showImageModal && selectedPokemonForImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowImageModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Adicionar Imagem - {selectedPokemonForImage.nickname}
                </h3>
                <button onClick={() => setShowImageModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Seletor de tipo de upload */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setImageUploadType('link')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                      imageUploadType === 'link'
                        ? 'bg-blue-500 text-white'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Link/URL
                  </button>
                  <button
                    onClick={() => setImageUploadType('file')}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                      imageUploadType === 'file'
                        ? 'bg-blue-500 text-white'
                        : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Arquivo Local
                  </button>
                </div>

                {imageUploadType === 'link' ? (
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      URL da Imagem
                    </label>
                    <input
                      type="url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://exemplo.com/imagem.jpg"
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                    />
                  </div>
                ) : (
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Selecionar Arquivo
                    </label>
                    <input
                      id="pokemon-image-file"
                      type="file"
                      accept="image/*"
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => {
                      setShowImageModal(false)
                      setImageUrl('')
                      setSelectedPokemonForImage(null)
                    }}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveImage}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar Imagem
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showClassModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowClassModal(false)}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Selecionar Classe/Subclasse</h3>
              <button onClick={() => setShowClassModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            <div className="relative mb-4">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
              <input type="text" value={classSearch} onChange={e => setClassSearch(e.target.value)} placeholder="Pesquisar..." className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`} />
            </div>
            <div className="space-y-2">
              {allClasses.filter(c => c.name.toLowerCase().includes(classSearch.toLowerCase())).map(cls => <button key={cls.name} onClick={() => { const nc = [...classes]; nc[currentSlot] = cls.name; setClasses(nc); setShowClassModal(false); setClassSearch('') }} className="w-full p-3 rounded-lg text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-2" style={{ backgroundColor: cls.color + '60', color: cls.color, border: `2px solid ${cls.color}` }}>{cls.isMaster && <Crown size={20} />}{cls.name}</button>)}
            </div>
          </div>
        </div>}

        {/* MODAL ADICIONAR POKÉMON */}
        {showAddPokemonModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddPokemonModal(false)}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adicionar Pokémon</h3>
              <button onClick={() => setShowAddPokemonModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className={`flex items-center gap-2 mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <input type="checkbox" checked={pokemonForm.isCaptured} onChange={e => setPokemonForm({ ...pokemonForm, isCaptured: e.target.checked })} className="w-4 h-4" />
                  <span className="font-semibold">Capturado?</span>
                </label>
              </div>

              {pokemonForm.isCaptured && (
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Nome do Pokémon *</label>
                  <input type="text" value={pokemonForm.nickname} onChange={e => setPokemonForm({ ...pokemonForm, nickname: e.target.value })} placeholder="Apelido do Pokémon" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`} />
                </div>
              )}

              <div>
                <label className={`flex items-center gap-2 mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <input type="checkbox" checked={pokemonForm.isExotic} onChange={e => setPokemonForm({ ...pokemonForm, isExotic: e.target.checked })} className="w-4 h-4" />
                  <span className="font-semibold">Pkm Exótico</span>
                </label>
              </div>

              {pokemonForm.isExotic ? (
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Nome da Espécie Exótica *</label>
                  <input type="text" value={pokemonForm.exoticSpecies} onChange={e => setPokemonForm({ ...pokemonForm, exoticSpecies: e.target.value })} placeholder="Nome da espécie" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`} />
                </div>
              ) : (
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Espécie do Pokémon *</label>
                  <div className="relative mb-2">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
                    <input type="text" value={speciesSearch} onChange={e => setSpeciesSearch(e.target.value)} placeholder="Pesquisar espécie..." className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`} />
                  </div>
                  <div className={`max-h-48 overflow-y-auto border-2 rounded-lg ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                    {filteredSpecies.map(species => (
                      <button key={species} onClick={() => { setPokemonForm({ ...pokemonForm, species }); setSpeciesSearch('') }} className={`w-full px-4 py-2 text-left hover:bg-opacity-80 ${pokemonForm.species === species ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-200' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white hover:bg-gray-100'}`}>
                        {species}
                      </button>
                    ))}
                  </div>
                  {pokemonForm.species && <p className={`mt-2 text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓ Selecionado: {pokemonForm.species}</p>}
                </div>
              )}

              {pokemonForm.isCaptured && (
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Nível (1-100)</label>
                  <input type="number" min="1" max="100" value={pokemonForm.level} onChange={e => setPokemonForm({ ...pokemonForm, level: Math.max(1, Math.min(100, parseInt(e.target.value) || 1)) })} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                </div>
              )}

              <button onClick={handleAddPokemon} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">Adicionar</button>
            </div>
          </div>
        </div>}

        {/* MODAL XP */}
        {/* MODAL DE XP */}
        {showXPModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowXPModal(false)}>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adicionar XP</h3>
              <button onClick={() => setShowXPModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            {mainTeam[selectedPokemonIndex] && (
              <div className="mb-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pokémon: <strong>{mainTeam[selectedPokemonIndex].nickname}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Nível atual: <strong>{mainTeam[selectedPokemonIndex].level}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>XP total: <strong>{mainTeam[selectedPokemonIndex].totalXP || 0}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Progresso no nível: <strong>{(mainTeam[selectedPokemonIndex].totalXP || 0) - XP_TABLE[mainTeam[selectedPokemonIndex].level]}/{XP_TABLE[mainTeam[selectedPokemonIndex].level + 1] - XP_TABLE[mainTeam[selectedPokemonIndex].level]}</strong></p>
              </div>
            )}
            <input type="number" min="1" value={xpToAdd} onChange={e => setXpToAdd(e.target.value)} placeholder="Quantidade de XP" className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
            <button onClick={handleAddXP} className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold">Adicionar XP</button>
          </div>
        </div>}

        {/* MODAL DE FELICIDADE */}
        {showHappinessModal && mainTeam[selectedPokemonHappinessIndex] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHappinessModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Felicidade</h3>
                <button onClick={() => setShowHappinessModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <div className="mb-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pokémon: <strong>{mainTeam[selectedPokemonHappinessIndex].nickname}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Felicidade atual: <strong>{mainTeam[selectedPokemonHappinessIndex].currentHappiness || 0}/{calculateMaxHappiness(mainTeam[selectedPokemonHappinessIndex])}</strong></p>
              </div>
              <input
                type="number"
                min="1"
                value={happinessAmount}
                onChange={e => setHappinessAmount(e.target.value)}
                placeholder="Quantidade"
                className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
              />
              <div className="flex gap-3">
                <button onClick={handleDecreaseHappiness} className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">
                  Triste
                </button>
                <button onClick={handleIncreaseHappiness} className="flex-1 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 font-semibold">
                  Feliz
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL NAME RATER - TIME PRINCIPAL */}
        {showNameRaterModal && nameRaterIndex !== null && mainTeam[nameRaterIndex] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowNameRaterModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Name Rater</h3>
                <button onClick={() => setShowNameRaterModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>
              <div className="mb-4">
                <p className={`text-center mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ele tem um nome feio mesmo, quer algumas dicas?
                </p>
                <input
                  type="text"
                  value={nameRaterNickname}
                  onChange={e => setNameRaterNickname(e.target.value)}
                  placeholder="Novo nome do Pokémon"
                  className={`w-full px-4 py-3 border-2 rounded-lg text-center text-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                  maxLength={30}
                />
              </div>
              <button
                onClick={() => {
                  if (nameRaterNickname.trim()) {
                    const updatedTeam = [...mainTeam]
                    updatedTeam[nameRaterIndex] = {
                      ...updatedTeam[nameRaterIndex],
                      nickname: nameRaterNickname.trim()
                    }
                    setMainTeam(updatedTeam)
                    setShowNameRaterModal(false)
                    setNameRaterIndex(null)
                    setNameRaterNickname('')
                  }
                }}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold"
              >
                Renomear
              </button>
            </div>
          </div>
        )}

        {/* MODAL DE INFORMAÇÃO DE CAPACIDADE */}
        {showCapacityInfoModal && selectedCapacityForInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowCapacityInfoModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedCapacityForInfo}</h3>
                <button onClick={() => setShowCapacityInfoModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base leading-relaxed`}>
                {CAPACIDADES_DATA[selectedCapacityForInfo]}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowCapacityInfoModal(false)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Detalhes da Habilidade */}
        {showHabilidadeDetailModal && selectedHabilidadeForDetail && HABILIDADES_DATA[selectedHabilidadeForDetail] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHabilidadeDetailModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>{selectedHabilidadeForDetail}</h3>
                <button onClick={() => setShowHabilidadeDetailModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>
              <div className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-2">
                  <span className="font-semibold">Ativação:</span>{' '}
                  <span className={`px-2 py-1 rounded ${darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800'}`}>
                    {HABILIDADES_DATA[selectedHabilidadeForDetail].ativacao}
                  </span>
                </p>
              </div>
              <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base leading-relaxed`}>
                <p className="font-semibold mb-2">Efeito:</p>
                <p>{HABILIDADES_DATA[selectedHabilidadeForDetail].efeito}</p>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowHabilidadeDetailModal(false)}
                  className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Detalhes do Held Item */}
        {showHeldItemDetailModal && selectedHeldItemForDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHeldItemDetailModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {selectedHeldItemForDetail.name}
                  </h3>
                  <button onClick={() => setShowHeldItemDetailModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Descrição */}
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} whitespace-pre-wrap`}>
                    {selectedHeldItemForDetail.description || 'Nenhuma descrição fornecida.'}
                  </p>
                </div>

                {/* Botão Fechar */}
                <div className="mt-6">
                  <button
                    onClick={() => setShowHeldItemDetailModal(false)}
                    className={`w-full py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE DANO/CURA */}
        {showPokemonHPModal && selectedPokemonHP && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPokemonHPModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dano/Cura</h3>
                <button onClick={() => setShowPokemonHPModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <div className="mb-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pokémon: <strong>{selectedPokemonHP.nickname}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>HP atual: <strong>{selectedPokemonHP.currentHP || 0}/{calculateMaxHP(selectedPokemonHP)}</strong></p>
                <div className={`w-full rounded-full h-4 overflow-hidden mt-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                  <div
                    className={`h-4 rounded-full transition-all duration-500 ${
                      ((selectedPokemonHP.currentHP || 0) / calculateMaxHP(selectedPokemonHP)) > 0.5 ? 'bg-green-500' :
                      ((selectedPokemonHP.currentHP || 0) / calculateMaxHP(selectedPokemonHP)) > 0.2 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(100, ((selectedPokemonHP.currentHP || 0) / calculateMaxHP(selectedPokemonHP)) * 100)}%` }}
                  ></div>
                </div>
              </div>
              <input type="number" min="1" value={hpAmount} onChange={e => setHpAmount(e.target.value)} placeholder="Quantidade de HP" className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
              <div className="flex gap-3">
                <button onClick={handleDamagePokemon} className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold">Aplicar Dano</button>
                <button onClick={handleHealPokemon} className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold">Curar</button>
              </div>
            </div>
          </div>
        )}
        {/* MODAL DE HP TEMPORÁRIO */}
        {showTempHPModal && selectedPokemonForTempHP && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowTempHPModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>HP Temporário Pkm</h3>
                <button onClick={() => setShowTempHPModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <div className="mb-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pokémon: <strong>{selectedPokemonForTempHP.nickname}</strong></p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>HP Temporário Atual: <strong>{selectedPokemonForTempHP.temporaryHP || 0}</strong></p>
              </div>
              <input 
                type="number" 
                min="0" 
                value={tempHPAmount} 
                onChange={e => setTempHPAmount(e.target.value)} 
                placeholder="Valor de HP Temporário" 
                className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-xl ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} 
              />
              <button onClick={handleSaveTempHP} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">Salvar HP Temporário</button>
            </div>
          </div>
        )}

        {/* MODAL DE DADOS EXÓTICOS */}
        {showExoticDataModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Dados do Pokémon Exótico: {pokemonForm.exoticSpecies}
                </h3>
                <button onClick={() => setShowExoticDataModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Número da Pokédex</label>
                    <input type="number" value={exoticDataForm.dexNumber} onChange={(e) => setExoticDataForm({...exoticDataForm, dexNumber: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Gênero</label>
                    <input type="text" value={exoticDataForm.genero} onChange={(e) => setExoticDataForm({...exoticDataForm, genero: e.target.value})} placeholder="Macho/Fêmea/Sem Gênero" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Altura (m) *</label>
                    <input type="number" step="0.1" value={exoticDataForm.altura} onChange={(e) => setExoticDataForm({...exoticDataForm, altura: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Peso (kg) *</label>
                    <input type="number" step="0.1" value={exoticDataForm.peso} onChange={(e) => setExoticDataForm({...exoticDataForm, peso: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Tipos * (separados por Enter)</label>
                  {exoticDataForm.tipos.map((tipo, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={tipo} onChange={(e) => {
                        const newTipos = [...exoticDataForm.tipos]
                        newTipos[idx] = e.target.value
                        setExoticDataForm({...exoticDataForm, tipos: newTipos})
                      }} placeholder={`Tipo ${idx + 1}`} className={`flex-1 px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                      {idx > 0 && <button onClick={() => setExoticDataForm({...exoticDataForm, tipos: exoticDataForm.tipos.filter((_, i) => i !== idx)})} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"><Minus size={16} /></button>}
                    </div>
                  ))}
                  {exoticDataForm.tipos.length < 3 && <button onClick={() => setExoticDataForm({...exoticDataForm, tipos: [...exoticDataForm.tipos, '']})} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Plus size={16} className="inline" /> Adicionar Tipo</button>}
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Habitats</label>
                  {exoticDataForm.habitats.map((habitat, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={habitat} onChange={(e) => {
                        const newHabitats = [...exoticDataForm.habitats]
                        newHabitats[idx] = e.target.value
                        setExoticDataForm({...exoticDataForm, habitats: newHabitats})
                      }} placeholder={`Habitat ${idx + 1}`} className={`flex-1 px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                      {idx > 0 && <button onClick={() => setExoticDataForm({...exoticDataForm, habitats: exoticDataForm.habitats.filter((_, i) => i !== idx)})} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"><Minus size={16} /></button>}
                    </div>
                  ))}
                  <button onClick={() => setExoticDataForm({...exoticDataForm, habitats: [...exoticDataForm.habitats, '']})} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Plus size={16} className="inline" /> Adicionar Habitat</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Catch Rate</label>
                    <input type="number" value={exoticDataForm.catchRate} onChange={(e) => setExoticDataForm({...exoticDataForm, catchRate: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Experiência Base</label>
                    <input type="number" value={exoticDataForm.baseExp} onChange={(e) => setExoticDataForm({...exoticDataForm, baseExp: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Status Base</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Saúde</label>
                      <input type="number" value={exoticDataForm.statusBasais.saude} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, saude: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Ataque</label>
                      <input type="number" value={exoticDataForm.statusBasais.ataque} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, ataque: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Defesa</label>
                      <input type="number" value={exoticDataForm.statusBasais.defesa} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, defesa: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Ataque Especial</label>
                      <input type="number" value={exoticDataForm.statusBasais.ataqueEspecial} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, ataqueEspecial: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Defesa Especial</label>
                      <input type="number" value={exoticDataForm.statusBasais.defesaEspecial} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, defesaEspecial: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Velocidade</label>
                      <input type="number" value={exoticDataForm.statusBasais.velocidade} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, velocidade: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Evolução (Opcional)</h4>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Evolui para</label>
                      <input type="text" value={exoticDataForm.evolucao} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucao: e.target.value})} placeholder="Nome do Pokémon" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Nível de Evolução</label>
                        <input type="number" value={exoticDataForm.evolucaoNivel} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucaoNivel: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Item de Evolução</label>
                        <input type="text" value={exoticDataForm.evolucaoItem} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucaoItem: e.target.value})} placeholder="Nome do item" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button onClick={() => setShowExoticDataModal(false)} className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                    Cancelar
                  </button>
                  <button onClick={handleSaveExoticData} className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold">
                    Salvar e Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE EDIÇÃO DE POKÉMON */}
        {showEditPokemonModal && editingPokemon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditPokemonModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Edição de {editingPokemon.nickname}
                  </h3>
                  <button onClick={() => setShowEditPokemonModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* 1. NATUREZA */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Natureza</label>
                  <input
                    type="text"
                    placeholder="Buscar natureza..."
                    value={natureSearch}
                    onChange={(e) => setNatureSearch(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg mb-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                  <select
                    value={pokemonEditForm.nature}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, nature: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecione uma natureza</option>
                    {natures
                      .filter(n => natureSearch === '' || n.nome.toLowerCase().includes(natureSearch.toLowerCase()))
                      .map((nature, idx) => (
                        <option key={idx} value={nature.nome}>
                          {nature.nome} {nature.up !== 'Nenhum' && `(↑${nature.up} ↓${nature.down})`}
                        </option>
                      ))
                    }
                  </select>
                  {pokemonEditForm.nature && (() => {
                    const selectedNature = natures.find(n => n.nome === pokemonEditForm.nature)
                    return selectedNature && (
                      <div className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <p><strong>Aumenta:</strong> {selectedNature.up}</p>
                        <p><strong>Diminui:</strong> {selectedNature.down}</p>
                      </div>
                    )
                  })()}
                </div>

                {/* 2. ATRIBUTOS */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Atributos</label>
                  <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Todos os atributos flutuam entre +2/-2, menos a saúde, ela flutuará entre +1/-1.
                  </p>
                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                      <thead>
                        <tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributos</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributos Basais</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Basal + Natureza</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Pontos por Nível</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: 'Saúde', key: 'saude' },
                          { label: 'Ataque', key: 'ataque' },
                          { label: 'Defesa', key: 'defesa' },
                          { label: 'Ataque Especial', key: 'ataqueEspecial' },
                          { label: 'Defesa Especial', key: 'defesaEspecial' },
                          { label: 'Velocidade', key: 'velocidade' }
                        ].map(attr => {
                          const selectedNature = natures.find(n => n.nome === pokemonEditForm.nature)
                          const isIncreased = selectedNature?.up === attr.label
                          const isDecreased = selectedNature?.down === attr.label
                          const baseVal = parseInt(pokemonEditForm.baseAttributes[attr.key]) || 0
                          // Saúde flutua ±1, outros atributos flutuam ±2
                          const natureBonus = attr.key === 'saude' ? 1 : 2
                          const natureVal = isIncreased ? natureBonus : isDecreased ? -natureBonus : 0
                          const levelVal = parseInt(pokemonEditForm.levelPoints[attr.key]) || 0
                          const total = baseVal + natureVal + levelVal

                          return (
                            <tr key={attr.key} className={
                              isIncreased ? (darkMode ? 'bg-green-900/30' : 'bg-green-50') :
                              isDecreased ? (darkMode ? 'bg-red-900/30' : 'bg-red-50') : ''
                            }>
                              <td className={`border p-2 text-xs font-semibold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {attr.label}
                              </td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                <input
                                  type="number"
                                  min="1"
                                  max="100"
                                  value={pokemonEditForm.baseAttributes[attr.key]}
                                  onChange={(e) => setPokemonEditForm({
                                    ...pokemonEditForm,
                                    baseAttributes: {...pokemonEditForm.baseAttributes, [attr.key]: e.target.value}
                                  })}
                                  className={`w-full px-2 py-1 text-xs text-center border rounded ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'border-gray-300'}`}
                                />
                              </td>
                              <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {baseVal + natureVal}
                              </td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                <input
                                  type="number"
                                  value={pokemonEditForm.levelPoints[attr.key]}
                                  onChange={(e) => setPokemonEditForm({
                                    ...pokemonEditForm,
                                    levelPoints: {...pokemonEditForm.levelPoints, [attr.key]: e.target.value}
                                  })}
                                  className={`w-full px-2 py-1 text-xs text-center border rounded ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'border-gray-300'}`}
                                />
                              </td>
                              <td className={`border p-2 text-xs text-center font-bold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {total}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3 e 4. SABORES */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Sabor Predileto</label>
                    <input
                      type="text"
                      value={natures.find(n => n.nome === pokemonEditForm.nature)?.gosto || 'Nenhum'}
                      disabled
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>4. Sabor que Não Gosta</label>
                    <input
                      type="text"
                      value={natures.find(n => n.nome === pokemonEditForm.nature)?.desgosto || 'Nenhum'}
                      disabled
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'}`}
                    />
                  </div>
                </div>

                {/* 5. GÊNERO */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>5. Gênero</label>
                  <select
                    value={pokemonEditForm.gender}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, gender: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecione...</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                    <option value="Assexuado">Assexuado</option>
                  </select>
                </div>

                {/* 6. DESLOCAMENTO */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>6. Deslocamento</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {['terrestre', 'nadar', 'voar', 'cavar', 'submerso'].map(type => (
                      <div key={type}>
                        <label className={`block text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'} capitalize`}>{type}</label>
                        <input
                          type="text"
                          value={pokemonEditForm.displacement[type]}
                          onChange={(e) => setPokemonEditForm({
                            ...pokemonEditForm,
                            displacement: {...pokemonEditForm.displacement, [type]: e.target.value}
                          })}
                          className={`w-full px-3 py-2 border-2 rounded-lg text-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. PESO E ALTURA */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>7. Peso (Kg)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={pokemonEditForm.weight}
                      onChange={(e) => setPokemonEditForm({...pokemonEditForm, weight: e.target.value})}
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Altura (M)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={pokemonEditForm.height}
                      onChange={(e) => setPokemonEditForm({...pokemonEditForm, height: e.target.value})}
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                </div>

                {/* 8. LEALDADE */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>8. Lealdade</label>
                  <input
                    type="text"
                    value={pokemonEditForm.loyalty}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, loyalty: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                {/* 9. CAPACIDADES */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>9. Capacidades</label>

                  {/* Força, Inteligência, Salto */}
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Força (1-10)</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={pokemonEditForm.capacities.forca}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, forca: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Inteligência (1-7)</label>
                      <input
                        type="number"
                        min="1"
                        max="7"
                        value={pokemonEditForm.capacities.inteligencia}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, inteligencia: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Salto (1-10)</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={pokemonEditForm.capacities.salto}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, salto: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                  </div>

                  {/* Outras capacidades */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className={`block text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Outras Capacidades</label>
                      <button
                        onClick={() => {
                          setPokemonEditForm({
                            ...pokemonEditForm,
                            capacities: {
                              ...pokemonEditForm.capacities,
                              others: [...pokemonEditForm.capacities.others, '']
                            }
                          })
                        }}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm font-semibold"
                      >
                        Outros +
                      </button>
                    </div>

                    {/* Slots dinâmicos */}
                    <div className="space-y-2">
                      {pokemonEditForm.capacities.others.map((capacity, idx) => (
                        <div key={idx} className="flex gap-2">
                          <select
                            value={capacity}
                            onChange={(e) => {
                              const newOthers = [...pokemonEditForm.capacities.others]
                              newOthers[idx] = e.target.value
                              setPokemonEditForm({
                                ...pokemonEditForm,
                                capacities: {...pokemonEditForm.capacities, others: newOthers}
                              })
                            }}
                            className={`flex-1 px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                          >
                            <option value="">Selecione uma capacidade</option>
                            {CAPACIDADES_NAMES.map((cap, i) => (
                              <option key={i} value={cap}>{cap}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => {
                              const newOthers = pokemonEditForm.capacities.others.filter((_, i) => i !== idx)
                              setPokemonEditForm({
                                ...pokemonEditForm,
                                capacities: {...pokemonEditForm.capacities, others: newOthers}
                              })
                            }}
                            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÕES */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowEditPokemonModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveEditPokemon}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar Edições
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Visualização de Informações do Pokémon */}
        {showPokemonInfoModal && viewingPokemon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
              <div className={`sticky top-0 ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-purple-600'} p-6 rounded-t-2xl`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {viewingPokemon.nickname || viewingPokemon.species}
                  </h3>
                  <button onClick={() => { setShowPokemonInfoModal(false); setViewingPokemon(null) }} className="text-white hover:text-gray-300">
                    <X size={28} />
                  </button>
                </div>
              </div>

              <div className={`p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {/* Informações Básicas */}
                <div className="mb-6">
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Informações Básicas</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold">Apelido:</span> {viewingPokemon.nickname || '-'}</div>
                    <div><span className="font-semibold">Espécie:</span> {viewingPokemon.species || '-'}</div>
                    <div><span className="font-semibold">Nível:</span> {viewingPokemon.level || '-'}</div>
                    <div><span className="font-semibold">XP:</span> {(viewingPokemon.totalXP || 0) - XP_TABLE[viewingPokemon.level]}/{XP_TABLE[viewingPokemon.level + 1] - XP_TABLE[viewingPokemon.level]}</div>
                    <div><span className="font-semibold">Natureza:</span> {viewingPokemon.nature || '-'}</div>
                    <div><span className="font-semibold">Gênero:</span> {viewingPokemon.gender || '-'}</div>
                    <div><span className="font-semibold">Felicidade:</span> {viewingPokemon.currentHappiness || 0}/{calculateMaxHappiness(viewingPokemon)}</div>
                    <div><span className="font-semibold">Peso:</span> {viewingPokemon.weight || '-'} kg</div>
                    <div><span className="font-semibold">Altura:</span> {viewingPokemon.height || '-'} m</div>
                    <div><span className="font-semibold">Lealdade:</span> {viewingPokemon.loyalty || '-'}</div>
                  </div>
                </div>

                {/* Capacidades */}
                {viewingPokemon.capacities && (viewingPokemon.capacities.forca || viewingPokemon.capacities.inteligencia || viewingPokemon.capacities.salto) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Capacidades</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      {viewingPokemon.capacities.forca && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                          <div className="font-semibold text-blue-600">Força</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.forca}</div>
                        </div>
                      )}
                      {viewingPokemon.capacities.inteligencia && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                          <div className="font-semibold text-purple-600">Inteligência</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.inteligencia}</div>
                        </div>
                      )}
                      {viewingPokemon.capacities.salto && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                          <div className="font-semibold text-green-600">Salto</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.salto}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Atributos */}
                {(viewingPokemon.baseAttributes || viewingPokemon.levelPoints) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Atributos</h4>
                    <div className="overflow-x-auto">
                      <table className={`w-full border-collapse ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                        <thead>
                          <tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Atributo</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Basal</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Basal + Natureza</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Pontos Nível</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label: 'Saúde', key: 'saude' },
                            { label: 'Ataque', key: 'ataque' },
                            { label: 'Defesa', key: 'defesa' },
                            { label: 'Ataque Especial', key: 'ataqueEspecial' },
                            { label: 'Defesa Especial', key: 'defesaEspecial' },
                            { label: 'Velocidade', key: 'velocidade' }
                          ].map(attr => {
                            const selectedNature = natures.find(n => n.nome === viewingPokemon.nature)
                            const isIncreased = selectedNature?.up === attr.label
                            const isDecreased = selectedNature?.down === attr.label
                            const baseVal = parseInt(viewingPokemon.baseAttributes?.[attr.key]) || 0
                            const natureBonus = attr.key === 'saude' ? 1 : 2
                            const natureVal = isIncreased ? natureBonus : isDecreased ? -natureBonus : 0
                            const levelVal = parseInt(viewingPokemon.levelPoints?.[attr.key]) || 0
                            const total = baseVal + natureVal + levelVal

                            return (
                              <tr key={attr.key}>
                                <td className={`border p-2 text-xs font-semibold ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{attr.label}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal || '-'}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal ? baseVal + natureVal : '-'}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{levelVal || '-'}</td>
                                <td className={`border p-2 text-xs text-center font-bold ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal ? total : '-'}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Sabores */}
                {(viewingPokemon.nature) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Preferências</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="font-semibold">Sabor Predileto:</span> {viewingPokemon.favoriteFlavor || natures.find(n => n.nome === viewingPokemon.nature)?.gosto || '-'}</div>
                      <div><span className="font-semibold">Sabor que Não Gosta:</span> {viewingPokemon.dislikedFlavor || natures.find(n => n.nome === viewingPokemon.nature)?.desgosto || '-'}</div>
                    </div>
                  </div>
                )}

                {/* Deslocamento */}
                {viewingPokemon.displacement && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Deslocamento</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div><span className="font-semibold">Terrestre:</span> {viewingPokemon.displacement.terrestre || '-'}</div>
                      <div><span className="font-semibold">Nadar:</span> {viewingPokemon.displacement.nadar || '-'}</div>
                      <div><span className="font-semibold">Voar:</span> {viewingPokemon.displacement.voar || '-'}</div>
                      <div><span className="font-semibold">Cavar:</span> {viewingPokemon.displacement.cavar || '-'}</div>
                      <div><span className="font-semibold">Submerso:</span> {viewingPokemon.displacement.submerso || '-'}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-b-2xl flex justify-end`}>
                <button onClick={() => { setShowPokemonInfoModal(false); setViewingPokemon(null) }} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 font-semibold">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Tutoria de Golpes */}
        {showTutoriaModal && selectedPokemonForTutoria && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowTutoriaModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Tutoria de Golpes - {selectedPokemonForTutoria.nickname}
                  </h3>
                  <button onClick={() => setShowTutoriaModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Golpes Selecionados */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Golpes Selecionados ({tutoriaSelectedGolpes.length}/8)
                  </label>
                  {tutoriaSelectedGolpes.length === 0 ? (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum golpe selecionado
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex flex-wrap gap-2`}>
                      {tutoriaSelectedGolpes.map((golpe, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded ${darkMode ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white'}`}>
                          <span className="font-semibold">{golpe}</span>
                          <button onClick={() => handleRemoveGolpeFromSelected(golpe)} className="hover:bg-red-500 rounded p-1">
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Busca de Golpes */}
                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Busca de Golpes
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={tutoriaGolpesSearch}
                      onChange={(e) => setTutoriaGolpesSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome do golpe..."
                    />
                  </div>
                </div>

                {/* Golpes Disponíveis */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Golpes Disponíveis
                  </label>
                  <div className={`max-h-64 overflow-y-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4 space-y-2`}>
                    {GOLPES_NAMES
                      .filter(golpe => golpe.toLowerCase().includes(tutoriaGolpesSearch.toLowerCase()))
                      .filter(golpe => !tutoriaSelectedGolpes.includes(golpe))
                      .map((golpe, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-3 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'} transition-colors`}>
                          <div className="flex-1">
                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{golpe}</span>
                            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                              <span className="mr-3">Tipo: {GOLPES_DATA[golpe].tipo}</span>
                              <span className="mr-3">Aptidão: {GOLPES_DATA[golpe].aptidao}</span>
                              <span className="mr-3">Dano: {GOLPES_DATA[golpe].danoBasal || '-'}</span>
                              <span>Freq: {GOLPES_DATA[golpe].frequencia}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddGolpeToSelected(golpe)}
                            className={`ml-2 p-2 rounded ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowTutoriaModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveGolpes}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                    disabled={tutoriaSelectedGolpes.length < 1}
                  >
                    Salvar Golpes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Detalhes do Golpe */}
        {showGolpeDetailModal && selectedGolpeForDetail && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowGolpeDetailModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {selectedGolpeForDetail}
                  </h3>
                  <button onClick={() => setShowGolpeDetailModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className={`space-y-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tipo</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].tipo}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aptidão</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].aptidao}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dano Basal</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].danoBasal || '-'}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Acurácia</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].acuracia}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequência</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].frequencia}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Alcance</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].alcance}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Descritores</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].descritores || '-'}</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      <div className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tag de Concurso</div>
                      <div className="text-lg font-bold">{GOLPES_DATA[selectedGolpeForDetail].tagConcurso}</div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <div className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Efeito</div>
                    <div className="text-base">{GOLPES_DATA[selectedGolpeForDetail].efeito}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setShowGolpeDetailModal(false)}
                    className={`w-full py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE HELD ITEM - TIME PRINCIPAL */}
        {showHeldItemModal && selectedPokemonForHeldItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHeldItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Held Item - {selectedPokemonForHeldItem.nickname}
                  </h3>
                  <button onClick={() => setShowHeldItemModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nome do Item
                  </label>
                  <input
                    type="text"
                    value={heldItemName}
                    onChange={(e) => setHeldItemName(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Digite o nome do item..."
                  />
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Descrição / Efeito
                  </label>
                  <textarea
                    value={heldItemDescription}
                    onChange={(e) => setHeldItemDescription(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg min-h-[120px] ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Digite a descrição e efeito do item..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowHeldItemModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveHeldItem}
                    className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 font-semibold"
                  >
                    Salvar Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE HABILIDADES - TIME PRINCIPAL */}
        {showHabilidadesModal && selectedPokemonForHabilidades && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHabilidadesModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                    Selecionar Habilidades - {selectedPokemonForHabilidades.nickname}
                  </h3>
                  <button onClick={() => setShowHabilidadesModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Habilidades Selecionadas ({habilidadesSelectedList.length}/2)
                  </label>
                  {habilidadesSelectedList.length === 0 ? (
                    <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                      Nenhuma habilidade selecionada
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg flex flex-wrap gap-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {habilidadesSelectedList.map((hab, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'}`}>
                          <button
                            onClick={() => {
                              setSelectedHabilidadeForDetail(hab)
                              setShowHabilidadeDetailModal(true)
                            }}
                            className="font-semibold hover:underline"
                          >
                            {hab}
                          </button>
                          <button
                            onClick={() => handleRemoveHabilidadeFromSelected(hab)}
                            className="hover:bg-red-500 rounded p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buscar Habilidades
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={habilidadesSearch}
                      onChange={(e) => setHabilidadesSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome da habilidade..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Habilidades Disponíveis
                  </label>
                  <div className={`max-h-64 overflow-y-auto rounded-lg p-4 space-y-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {HABILIDADES_NAMES
                      .filter(hab => hab.toLowerCase().includes(habilidadesSearch.toLowerCase()))
                      .filter(hab => !habilidadesSelectedList.includes(hab))
                      .map((hab, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-3 rounded transition-colors ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'}`}>
                          <div className="flex-1">
                            <button
                              onClick={() => {
                                setSelectedHabilidadeForDetail(hab)
                                setShowHabilidadeDetailModal(true)
                              }}
                              className={`font-semibold hover:underline text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}
                            >
                              {hab}
                            </button>
                            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              <span className="mr-3">Ativação: {HABILIDADES_DATA[hab].ativacao}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddHabilidadeToSelected(hab)}
                            className={`ml-2 p-2 rounded text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowHabilidadesModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveHabilidades}
                    className="flex-1 bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 font-semibold"
                    disabled={habilidadesSelectedList.length < 1}
                  >
                    Salvar Habilidades
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* MODAL POKÉBOLA DE CAPTURA - TIME PRINCIPAL */}
        {showPokeballModal && selectedPokemonForPokeball && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPokeballModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    Pokébola de Captura - {selectedPokemonForPokeball.nickname}
                  </h3>
                  <button onClick={() => setShowPokeballModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buscar Pokébola
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={pokeballSearch}
                      onChange={(e) => setPokeballSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome da pokébola..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pokébolas Disponíveis
                  </label>
                  <div className={`max-h-96 overflow-y-auto rounded-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {POKEBALLS_LIST
                      .filter(ball => ball.toLowerCase().includes(pokeballSearch.toLowerCase()))
                      .map((ball, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectPokeball(ball)}
                          className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all border-2 ${
                            selectedPokeball === ball
                              ? darkMode ? 'bg-purple-600 border-purple-400' : 'bg-purple-200 border-purple-500'
                              : darkMode ? 'bg-gray-600 hover:bg-gray-500 border-transparent' : 'bg-white hover:bg-gray-50 border-transparent'
                          }`}
                        >
                          <img
                            src={ball === 'Custom Pokeball' ? `/pokeballs/custompokeball.png` : `/pokeballs/${ball.toLowerCase().replace(/\s+/g, '')}.png`}
                            alt={ball}
                            className="w-16 h-16 object-contain"
                          />
                          <span className={`text-xs font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {ball}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPokeballModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSavePokeball}
                    className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-semibold"
                    disabled={!selectedPokeball}
                  >
                    Salvar Pokébola
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE CUSTOM POKEBALL OPTIONS */}
        {showCustomPokeballOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4" onClick={handleCancelCustomPokeball}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-md w-full shadow-2xl`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    Custom Pokeball
                  </h3>
                  <button onClick={handleCancelCustomPokeball} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Escolha como adicionar a imagem
                  </label>
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => setCustomPokeballUploadType('link')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        customPokeballUploadType === 'link'
                          ? darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                          : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Link
                    </button>
                    <button
                      onClick={() => setCustomPokeballUploadType('file')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        customPokeballUploadType === 'file'
                          ? darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                          : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Upload
                    </button>
                  </div>

                  {customPokeballUploadType === 'link' ? (
                    <div>
                      <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        URL da Imagem
                      </label>
                      <input
                        type="text"
                        value={customPokeballLink}
                        onChange={(e) => setCustomPokeballLink(e.target.value)}
                        className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                        placeholder="https://exemplo.com/pokeball.png"
                      />
                      {customPokeballLink && (
                        <div className="mt-3 p-3 rounded-lg border-2 border-dashed border-gray-500 flex justify-center">
                          <img src={customPokeballLink} alt="Preview" className="w-20 h-20 object-contain" onError={(e) => e.target.style.display = 'none'} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Selecionar Arquivo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCustomPokeballFile(e.target.files[0])}
                        className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                      {customPokeballFile && (
                        <div className="mt-3 p-3 rounded-lg border-2 border-dashed border-gray-500 flex justify-center">
                          <img src={URL.createObjectURL(customPokeballFile)} alt="Preview" className="w-20 h-20 object-contain" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleCancelCustomPokeball}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmCustomPokeball}
                    className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-semibold"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA DO PC
  if (currentUser.type === 'treinador' && currentArea === 'PC') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>PC ({pcPokemon.length}/1000)</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'PC' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Pokémon Armazenados</h3>
            {pcPokemon.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="text-lg">Nenhum Pokémon armazenado no PC</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pcPokemon.map((pokemon, idx) => (
                  <div key={pokemon.id || idx} className={`p-4 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-purple-500' : 'bg-purple-50 border-purple-300'}`}>
                    <div className="flex items-center justify-between gap-4">
                      {pokemonImages[pokemon.id] && (
                        <div className="flex flex-col items-center gap-2">
                          <img src={pokemonImages[pokemon.id]} alt={pokemon.nickname} className="w-16 h-16 object-cover rounded-lg border-2 border-purple-500" />
                          {pokemon.pokeball && (
                            <img
                              src={pokemon.pokeball === 'Custom Pokeball' && pokemon.customPokeballImage ? pokemon.customPokeballImage : `/pokeballs/${pokemon.pokeball.toLowerCase().replace(/\s+/g, '')}.png`}
                              alt={pokemon.pokeball}
                              className="w-8 h-8 object-contain"
                              title={pokemon.pokeball}
                            />
                          )}
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h5
                            className={`font-bold text-lg cursor-pointer hover:underline ${darkMode ? 'text-white hover:text-purple-400' : 'text-gray-800 hover:text-purple-600'}`}
                            onClick={() => openPokemonInfoModal(pokemon)}
                          >
                            {pokemon.nickname}
                          </h5>
                          <span className={`px-2 py-1 rounded text-xs font-bold ${darkMode ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800'}`}>Lv.{pokemon.level}</span>
                          {getPokemonTypes(pokemon).map((tipo, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-md text-xs font-bold text-white shadow-md ${TYPE_STYLES[tipo] || 'bg-gray-400'}`}
                              style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' }}
                            >
                              {tipo}
                            </span>
                          ))}

                          {/* Tags de Capacidades na mesma linha */}
                          {pokemon.capacities && pokemon.capacities.others && pokemon.capacities.others.length > 0 && (
                            <div className={`px-2 py-1 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} inline-flex flex-wrap gap-1 items-center`}>
                              {pokemon.capacities.others.filter(cap => cap).map((capacity, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setSelectedCapacityForInfo(capacity)
                                    setShowCapacityInfoModal(true)
                                  }}
                                  className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-indigo-200 text-indigo-800 hover:bg-indigo-300'} cursor-pointer transition-colors`}
                                >
                                  {capacity}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Caixa de Slots de Habilidades */}
                          {pokemon.habilidades && pokemon.habilidades.length > 0 && (
                            <div className={`px-2 py-1 rounded-lg ${darkMode ? 'bg-teal-900 border-2 border-teal-600' : 'bg-teal-50 border-2 border-teal-300'} inline-flex flex-wrap gap-1 items-center`}>
                              {pokemon.habilidades.map((habilidade, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    setSelectedHabilidadeForDetail(habilidade)
                                    setShowHabilidadeDetailModal(true)
                                  }}
                                  className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-500' : 'bg-teal-200 text-teal-900 hover:bg-teal-300'} cursor-pointer transition-colors`}
                                >
                                  {habilidade}
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Caixa de Held Item */}
                          <div className={`px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-700 border-2 border-gray-500' : 'bg-gray-100 border-2 border-gray-400'} inline-flex items-center justify-center text-center gap-2`}>
                            {pokemon.heldItem ? (
                              <>
                                <button
                                  onClick={() => handleOpenHeldItemDetail(pokemon.heldItem)}
                                  className={`text-sm font-semibold ${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-gray-900'} hover:underline cursor-pointer transition-colors`}
                                >
                                  {pokemon.heldItem.name}
                                </button>
                                <button
                                  onClick={() => handleReturnItemToBackpack(pokemon, true)}
                                  className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                                  title="Devolver item para a mochila"
                                >
                                  <ArrowBigRightDash size={18} />
                                </button>
                              </>
                            ) : (
                              <span className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {getRandomNoItemPhrase()}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{pokemon.species}</p>

                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() => {
                              setNameRaterPCIndex(idx)
                              setNameRaterPCNickname(pokemon.nickname)
                              setShowNameRaterPCModal(true)
                            }}
                            className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                            title="Name Rater PC"
                          >
                            <Edit size={16} />
                          </button>
                          <button onClick={() => handleOpenTutoria(pokemon, 'pc')} className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600" title="Tutoria de Golpes">
                            <BookOpenText size={16} />
                          </button>
                          <button onClick={() => handleOpenHabilidadesPC(pokemon, 'pc')} className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600" title="Habilidades PC">
                            <BookA size={16} />
                          </button>
                          <button
                            onClick={() => handleOpenPokeballPC(pokemon, 'pc')}
                            className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 animate-pulse"
                            title="Pokébola de Captura PC"
                            style={{
                              animation: 'colorCycle 3s linear infinite'
                            }}
                          >
                            <CircleDot size={16} />
                          </button>
                          <button
                            onClick={() => handleOpenHeldItemPC(pokemon, 'pc')}
                            className="bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
                            title="Held Item PC"
                          >
                            <Webhook size={16} />
                          </button>
                          <button onClick={() => handleOpenPCGolpes(pokemon)} className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600" title="Ver Golpes">
                            <Zap size={16} />
                          </button>
                          <button onClick={() => openEditPokemonPCModal(pokemon, idx)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm font-semibold" title="Editar Pokémon PC">
                            Edit Pkm PC
                          </button>
                          <button onClick={() => moveToTeam(idx)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm font-semibold" title="Mover para o Time">
                            ⬆️ TP
                          </button>
                          <button onClick={() => handleDeleteFromPc(idx)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm font-semibold">
                            🗑️ Liberar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal de Visualização de Informações do Pokémon */}
        {showPokemonInfoModal && viewingPokemon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
              <div className={`sticky top-0 ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-purple-600'} p-6 rounded-t-2xl`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {viewingPokemon.nickname || viewingPokemon.species}
                  </h3>
                  <button onClick={() => { setShowPokemonInfoModal(false); setViewingPokemon(null) }} className="text-white hover:text-gray-300">
                    <X size={28} />
                  </button>
                </div>
              </div>

              <div className={`p-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {/* Informações Básicas */}
                <div className="mb-6">
                  <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Informações Básicas</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold">Apelido:</span> {viewingPokemon.nickname || '-'}</div>
                    <div><span className="font-semibold">Espécie:</span> {viewingPokemon.species || '-'}</div>
                    <div><span className="font-semibold">Nível:</span> {viewingPokemon.level || '-'}</div>
                    <div><span className="font-semibold">XP:</span> {(viewingPokemon.totalXP || 0) - XP_TABLE[viewingPokemon.level]}/{XP_TABLE[viewingPokemon.level + 1] - XP_TABLE[viewingPokemon.level]}</div>
                    <div><span className="font-semibold">Natureza:</span> {viewingPokemon.nature || '-'}</div>
                    <div><span className="font-semibold">Gênero:</span> {viewingPokemon.gender || '-'}</div>
                    <div><span className="font-semibold">Felicidade:</span> {viewingPokemon.currentHappiness || 0}/{calculateMaxHappiness(viewingPokemon)}</div>
                    <div><span className="font-semibold">Peso:</span> {viewingPokemon.weight || '-'} kg</div>
                    <div><span className="font-semibold">Altura:</span> {viewingPokemon.height || '-'} m</div>
                    <div><span className="font-semibold">Lealdade:</span> {viewingPokemon.loyalty || '-'}</div>
                  </div>
                </div>

                {/* Capacidades */}
                {viewingPokemon.capacities && (viewingPokemon.capacities.forca || viewingPokemon.capacities.inteligencia || viewingPokemon.capacities.salto) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Capacidades</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      {viewingPokemon.capacities.forca && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                          <div className="font-semibold text-blue-600">Força</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.forca}</div>
                        </div>
                      )}
                      {viewingPokemon.capacities.inteligencia && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                          <div className="font-semibold text-purple-600">Inteligência</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.inteligencia}</div>
                        </div>
                      )}
                      {viewingPokemon.capacities.salto && (
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                          <div className="font-semibold text-green-600">Salto</div>
                          <div className="text-2xl font-bold">{viewingPokemon.capacities.salto}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Atributos */}
                {(viewingPokemon.baseAttributes || viewingPokemon.levelPoints) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Atributos</h4>
                    <div className="overflow-x-auto">
                      <table className={`w-full border-collapse ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                        <thead>
                          <tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Atributo</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Basal</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Basal + Natureza</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Pontos Nível</th>
                            <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { label: 'Saúde', key: 'saude' },
                            { label: 'Ataque', key: 'ataque' },
                            { label: 'Defesa', key: 'defesa' },
                            { label: 'Ataque Especial', key: 'ataqueEspecial' },
                            { label: 'Defesa Especial', key: 'defesaEspecial' },
                            { label: 'Velocidade', key: 'velocidade' }
                          ].map(attr => {
                            const selectedNature = natures.find(n => n.nome === viewingPokemon.nature)
                            const isIncreased = selectedNature?.up === attr.label
                            const isDecreased = selectedNature?.down === attr.label
                            const baseVal = parseInt(viewingPokemon.baseAttributes?.[attr.key]) || 0
                            const natureBonus = attr.key === 'saude' ? 1 : 2
                            const natureVal = isIncreased ? natureBonus : isDecreased ? -natureBonus : 0
                            const levelVal = parseInt(viewingPokemon.levelPoints?.[attr.key]) || 0
                            const total = baseVal + natureVal + levelVal

                            return (
                              <tr key={attr.key}>
                                <td className={`border p-2 text-xs font-semibold ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{attr.label}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal || '-'}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal ? baseVal + natureVal : '-'}</td>
                                <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{levelVal || '-'}</td>
                                <td className={`border p-2 text-xs text-center font-bold ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>{baseVal ? total : '-'}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Sabores */}
                {(viewingPokemon.nature) && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Preferências</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="font-semibold">Sabor Predileto:</span> {viewingPokemon.favoriteFlavor || natures.find(n => n.nome === viewingPokemon.nature)?.gosto || '-'}</div>
                      <div><span className="font-semibold">Sabor que Não Gosta:</span> {viewingPokemon.dislikedFlavor || natures.find(n => n.nome === viewingPokemon.nature)?.desgosto || '-'}</div>
                    </div>
                  </div>
                )}

                {/* Deslocamento */}
                {viewingPokemon.displacement && (
                  <div className="mb-6">
                    <h4 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Deslocamento</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div><span className="font-semibold">Terrestre:</span> {viewingPokemon.displacement.terrestre || '-'}</div>
                      <div><span className="font-semibold">Nadar:</span> {viewingPokemon.displacement.nadar || '-'}</div>
                      <div><span className="font-semibold">Voar:</span> {viewingPokemon.displacement.voar || '-'}</div>
                      <div><span className="font-semibold">Cavar:</span> {viewingPokemon.displacement.cavar || '-'}</div>
                      <div><span className="font-semibold">Submerso:</span> {viewingPokemon.displacement.submerso || '-'}</div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-b-2xl flex justify-end`}>
                <button onClick={() => { setShowPokemonInfoModal(false); setViewingPokemon(null) }} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 font-semibold">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Tutoria de Golpes */}
        {showTutoriaModal && selectedPokemonForTutoria && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowTutoriaModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Tutoria de Golpes - {selectedPokemonForTutoria.nickname}
                  </h3>
                  <button onClick={() => setShowTutoriaModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* Golpes Selecionados */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Golpes Selecionados ({tutoriaSelectedGolpes.length}/8)
                  </label>
                  {tutoriaSelectedGolpes.length === 0 ? (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum golpe selecionado
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex flex-wrap gap-2`}>
                      {tutoriaSelectedGolpes.map((golpe, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded ${darkMode ? 'bg-orange-600 text-white' : 'bg-orange-500 text-white'}`}>
                          <span className="font-semibold">{golpe}</span>
                          <button onClick={() => handleRemoveGolpeFromSelected(golpe)} className="hover:bg-red-500 rounded p-1">
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Busca de Golpes */}
                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Busca de Golpes
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={tutoriaGolpesSearch}
                      onChange={(e) => setTutoriaGolpesSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome do golpe..."
                    />
                  </div>
                </div>

                {/* Golpes Disponíveis */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Golpes Disponíveis
                  </label>
                  <div className={`max-h-64 overflow-y-auto ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4 space-y-2`}>
                    {GOLPES_NAMES
                      .filter(golpe => golpe.toLowerCase().includes(tutoriaGolpesSearch.toLowerCase()))
                      .filter(golpe => !tutoriaSelectedGolpes.includes(golpe))
                      .map((golpe, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-3 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'} transition-colors`}>
                          <div className="flex-1">
                            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{golpe}</span>
                            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                              <span className="mr-3">Tipo: {GOLPES_DATA[golpe].tipo}</span>
                              <span className="mr-3">Aptidão: {GOLPES_DATA[golpe].aptidao}</span>
                              <span className="mr-3">Dano: {GOLPES_DATA[golpe].danoBasal || '-'}</span>
                              <span>Freq: {GOLPES_DATA[golpe].frequencia}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddGolpeToSelected(golpe)}
                            className={`ml-2 p-2 rounded ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowTutoriaModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveGolpes}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                    disabled={tutoriaSelectedGolpes.length < 1}
                  >
                    Salvar Golpes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Golpes do PC */}
        {showPCGolpesModal && selectedPokemonForPCGolpes && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPCGolpesModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Golpes - {selectedPokemonForPCGolpes.nickname}
                  </h3>
                  <button onClick={() => setShowPCGolpesModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-3">
                  {selectedPokemonForPCGolpes.golpes && selectedPokemonForPCGolpes.golpes.length > 0 ? (
                    selectedPokemonForPCGolpes.golpes.map((golpe, idx) => (
                      <div key={idx} className={`rounded-lg overflow-hidden ${TYPE_STYLES[GOLPES_DATA[golpe].tipo] || (darkMode ? 'bg-gray-700' : 'bg-gray-100')}`}>
                        <button
                          onClick={() => setExpandedGolpeInPC(expandedGolpeInPC === golpe ? null : golpe)}
                          className={`w-full p-4 text-left font-semibold text-white transition-colors flex items-center justify-between hover:opacity-80`}
                        >
                          <span>{golpe}</span>
                          <span className="text-sm">{expandedGolpeInPC === golpe ? '▼' : '▶'}</span>
                        </button>

                        {expandedGolpeInPC === golpe && (
                          <div className={`p-4 border-t-2 ${darkMode ? 'border-gray-600 text-white' : 'border-gray-300 text-gray-800'}`}>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tipo</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].tipo}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aptidão</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].aptidao}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dano Basal</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].danoBasal || '-'}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Acurácia</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].acuracia}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequência</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].frequencia}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Alcance</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].alcance}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Descritores</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].descritores || '-'}</div>
                              </div>
                              <div>
                                <div className={`text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tag Concurso</div>
                                <div className="font-bold">{GOLPES_DATA[golpe].tagConcurso}</div>
                              </div>
                            </div>
                            <div>
                              <div className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Efeito</div>
                              <div className="text-sm">{GOLPES_DATA[golpe].efeito}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className={`p-8 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Nenhum golpe selecionado. Use a Tutoria para adicionar golpes!
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setShowPCGolpesModal(false)}
                    className={`w-full py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE EDIÇÃO DE POKÉMON - PC */}
        {showEditPokemonPCModal && editingPokemon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditPokemonPCModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Edição de {editingPokemon.nickname} (PC)
                  </h3>
                  <button onClick={() => setShowEditPokemonPCModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* 1. NATUREZA */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>1. Natureza</label>
                  <input
                    type="text"
                    placeholder="Buscar natureza..."
                    value={natureSearch}
                    onChange={(e) => setNatureSearch(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg mb-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                  <select
                    value={pokemonEditForm.nature}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, nature: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecione uma natureza</option>
                    {natures
                      .filter(n => natureSearch === '' || n.nome.toLowerCase().includes(natureSearch.toLowerCase()))
                      .map((nature, idx) => (
                        <option key={idx} value={nature.nome}>
                          {nature.nome} {nature.up !== 'Nenhum' && `(↑${nature.up} ↓${nature.down})`}
                        </option>
                      ))
                    }
                  </select>
                  {pokemonEditForm.nature && (() => {
                    const selectedNature = natures.find(n => n.nome === pokemonEditForm.nature)
                    return selectedNature && (
                      <div className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <p><strong>Aumenta:</strong> {selectedNature.up}</p>
                        <p><strong>Diminui:</strong> {selectedNature.down}</p>
                      </div>
                    )
                  })()}
                </div>

                {/* 2. ATRIBUTOS */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2. Atributos</label>
                  <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Todos os atributos flutuam entre +2/-2, menos a saúde, ela flutuará entre +1/-1.
                  </p>
                  <div className="overflow-x-auto">
                    <table className={`w-full border-collapse ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                      <thead>
                        <tr className={darkMode ? 'bg-gray-600' : 'bg-gray-200'}>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributos</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Atributos Basais</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Basal + Natureza</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Pontos por Nível</th>
                          <th className={`border p-2 text-xs ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { label: 'Saúde', key: 'saude' },
                          { label: 'Ataque', key: 'ataque' },
                          { label: 'Defesa', key: 'defesa' },
                          { label: 'Ataque Especial', key: 'ataqueEspecial' },
                          { label: 'Defesa Especial', key: 'defesaEspecial' },
                          { label: 'Velocidade', key: 'velocidade' }
                        ].map(attr => {
                          const selectedNature = natures.find(n => n.nome === pokemonEditForm.nature)
                          const isIncreased = selectedNature?.up === attr.label
                          const isDecreased = selectedNature?.down === attr.label
                          const baseVal = parseInt(pokemonEditForm.baseAttributes[attr.key]) || 0
                          const natureBonus = attr.key === 'saude' ? 1 : 2
                          const natureVal = isIncreased ? natureBonus : isDecreased ? -natureBonus : 0
                          const levelVal = parseInt(pokemonEditForm.levelPoints[attr.key]) || 0
                          const total = baseVal + natureVal + levelVal

                          return (
                            <tr key={attr.key} className={
                              isIncreased ? (darkMode ? 'bg-green-900/30' : 'bg-green-50') :
                              isDecreased ? (darkMode ? 'bg-red-900/30' : 'bg-red-50') : ''
                            }>
                              <td className={`border p-2 text-xs font-semibold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {attr.label}
                              </td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                <input
                                  type="number"
                                  min="1"
                                  max="100"
                                  value={pokemonEditForm.baseAttributes[attr.key]}
                                  onChange={(e) => setPokemonEditForm({
                                    ...pokemonEditForm,
                                    baseAttributes: {...pokemonEditForm.baseAttributes, [attr.key]: e.target.value}
                                  })}
                                  className={`w-full px-2 py-1 text-xs text-center border rounded ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'border-gray-300'}`}
                                />
                              </td>
                              <td className={`border p-2 text-xs text-center ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {baseVal + natureVal}
                              </td>
                              <td className={`border p-2 ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                                <input
                                  type="number"
                                  value={pokemonEditForm.levelPoints[attr.key]}
                                  onChange={(e) => setPokemonEditForm({
                                    ...pokemonEditForm,
                                    levelPoints: {...pokemonEditForm.levelPoints, [attr.key]: e.target.value}
                                  })}
                                  className={`w-full px-2 py-1 text-xs text-center border rounded ${darkMode ? 'bg-gray-600 text-white border-gray-500' : 'border-gray-300'}`}
                                />
                              </td>
                              <td className={`border p-2 text-xs text-center font-bold ${darkMode ? 'border-gray-500 text-white' : 'border-gray-300'}`}>
                                {total}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3 e 4. SABORES */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>3. Sabor Predileto</label>
                    <input
                      type="text"
                      value={natures.find(n => n.nome === pokemonEditForm.nature)?.gosto || 'Nenhum'}
                      disabled
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>4. Sabor que Não Gosta</label>
                    <input
                      type="text"
                      value={natures.find(n => n.nome === pokemonEditForm.nature)?.desgosto || 'Nenhum'}
                      disabled
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'}`}
                    />
                  </div>
                </div>

                {/* 5. GÊNERO */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>5. Gênero</label>
                  <select
                    value={pokemonEditForm.gender}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, gender: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    <option value="">Selecione...</option>
                    <option value="Macho">Macho</option>
                    <option value="Fêmea">Fêmea</option>
                    <option value="Assexuado">Assexuado</option>
                  </select>
                </div>

                {/* 6. DESLOCAMENTO */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>6. Deslocamento</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {['terrestre', 'nadar', 'voar', 'cavar', 'submerso'].map(type => (
                      <div key={type}>
                        <label className={`block text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'} capitalize`}>{type}</label>
                        <input
                          type="text"
                          value={pokemonEditForm.displacement[type]}
                          onChange={(e) => setPokemonEditForm({
                            ...pokemonEditForm,
                            displacement: {...pokemonEditForm.displacement, [type]: e.target.value}
                          })}
                          className={`w-full px-3 py-2 border-2 rounded-lg text-sm ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. PESO E ALTURA */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>7. Peso (Kg)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={pokemonEditForm.weight}
                      onChange={(e) => setPokemonEditForm({...pokemonEditForm, weight: e.target.value})}
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Altura (M)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={pokemonEditForm.height}
                      onChange={(e) => setPokemonEditForm({...pokemonEditForm, height: e.target.value})}
                      className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                  </div>
                </div>

                {/* 8. LEALDADE */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>8. Lealdade</label>
                  <input
                    type="text"
                    value={pokemonEditForm.loyalty}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, loyalty: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                {/* 9. CAPACIDADES */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>9. Capacidades</label>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Força (1-10)</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={pokemonEditForm.capacities.forca}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, forca: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Inteligência (1-7)</label>
                      <input
                        type="number"
                        min="1"
                        max="7"
                        value={pokemonEditForm.capacities.inteligencia}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, inteligencia: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Salto (1-10)</label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={pokemonEditForm.capacities.salto}
                        onChange={(e) => setPokemonEditForm({
                          ...pokemonEditForm,
                          capacities: {...pokemonEditForm.capacities, salto: e.target.value}
                        })}
                        className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className={`block text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Outras Capacidades</label>
                      <button
                        onClick={() => {
                          setPokemonEditForm({
                            ...pokemonEditForm,
                            capacities: {
                              ...pokemonEditForm.capacities,
                              others: [...pokemonEditForm.capacities.others, '']
                            }
                          })
                        }}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm font-semibold"
                      >
                        Outros +
                      </button>
                    </div>

                    <div className="space-y-2">
                      {pokemonEditForm.capacities.others.map((capacity, idx) => (
                        <div key={idx} className="flex gap-2">
                          <select
                            value={capacity}
                            onChange={(e) => {
                              const newOthers = [...pokemonEditForm.capacities.others]
                              newOthers[idx] = e.target.value
                              setPokemonEditForm({
                                ...pokemonEditForm,
                                capacities: {...pokemonEditForm.capacities, others: newOthers}
                              })
                            }}
                            className={`flex-1 px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                          >
                            <option value="">Selecione uma capacidade</option>
                            {CAPACIDADES_NAMES.map((cap, i) => (
                              <option key={i} value={cap}>{cap}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => {
                              const newOthers = pokemonEditForm.capacities.others.filter((_, i) => i !== idx)
                              setPokemonEditForm({
                                ...pokemonEditForm,
                                capacities: {...pokemonEditForm.capacities, others: newOthers}
                              })
                            }}
                            className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÕES */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setShowEditPokemonPCModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveEditPokemon}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar Edições
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE HELD ITEM - PC */}
        {showHeldItemPCModal && selectedPokemonForHeldItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHeldItemPCModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-2xl w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Held Item - {selectedPokemonForHeldItem.nickname} (PC)
                  </h3>
                  <button onClick={() => setShowHeldItemPCModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nome do Item
                  </label>
                  <input
                    type="text"
                    value={heldItemName}
                    onChange={(e) => setHeldItemName(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Digite o nome do item..."
                  />
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Descrição / Efeito
                  </label>
                  <textarea
                    value={heldItemDescription}
                    onChange={(e) => setHeldItemDescription(e.target.value)}
                    className={`w-full px-4 py-2 border-2 rounded-lg min-h-[120px] ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    placeholder="Digite a descrição e efeito do item..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowHeldItemPCModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveHeldItem}
                    className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 font-semibold"
                  >
                    Salvar Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE CUSTOM POKEBALL 2 OPTIONS (PC) */}
        {showCustomPokeball2Options && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4" onClick={handleCancelCustomPokeball2}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-md w-full shadow-2xl`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    Custom Pokeball
                  </h3>
                  <button onClick={handleCancelCustomPokeball2} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Escolha como adicionar a imagem
                  </label>
                  <div className="flex gap-3 mb-4">
                    <button
                      onClick={() => setCustomPokeball2UploadType('link')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        customPokeball2UploadType === 'link'
                          ? darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                          : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Link
                    </button>
                    <button
                      onClick={() => setCustomPokeball2UploadType('file')}
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                        customPokeball2UploadType === 'file'
                          ? darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                          : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Upload
                    </button>
                  </div>

                  {customPokeball2UploadType === 'link' ? (
                    <div>
                      <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        URL da Imagem
                      </label>
                      <input
                        type="text"
                        value={customPokeball2Link}
                        onChange={(e) => setCustomPokeball2Link(e.target.value)}
                        className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                        placeholder="https://exemplo.com/pokeball.png"
                      />
                      {customPokeball2Link && (
                        <div className="mt-3 p-3 rounded-lg border-2 border-dashed border-gray-500 flex justify-center">
                          <img src={customPokeball2Link} alt="Preview" className="w-20 h-20 object-contain" onError={(e) => e.target.style.display = 'none'} />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Selecionar Arquivo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCustomPokeball2File(e.target.files[0])}
                        className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      />
                      {customPokeball2File && (
                        <div className="mt-3 p-3 rounded-lg border-2 border-dashed border-gray-500 flex justify-center">
                          <img src={URL.createObjectURL(customPokeball2File)} alt="Preview" className="w-20 h-20 object-contain" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleCancelCustomPokeball2}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleConfirmCustomPokeball2}
                    className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-semibold"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL POKÉBOLA DE CAPTURA PC */}
        {showPokeballPCModal && selectedPokemonForPokeball && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPokeballPCModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    Pokébola de Captura PC - {selectedPokemonForPokeball.nickname}
                  </h3>
                  <button onClick={() => setShowPokeballPCModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buscar Pokébola
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={pokeballSearch}
                      onChange={(e) => setPokeballSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome da pokébola..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pokébolas Disponíveis
                  </label>
                  <div className={`max-h-96 overflow-y-auto rounded-lg p-4 grid grid-cols-2 md:grid-cols-3 gap-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {POKEBALLS_PC_LIST
                      .filter(ball => ball.toLowerCase().includes(pokeballSearch.toLowerCase()))
                      .map((ball, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectPokeballPC(ball)}
                          className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all border-2 ${
                            selectedPokeball === ball || (selectedPokeball === 'Custom Pokeball 2' && ball === 'Custom Pokeball 2')
                              ? darkMode ? 'bg-purple-600 border-purple-400' : 'bg-purple-200 border-purple-500'
                              : darkMode ? 'bg-gray-600 hover:bg-gray-500 border-transparent' : 'bg-white hover:bg-gray-50 border-transparent'
                          }`}
                        >
                          <img
                            src={ball === 'Custom Pokeball 2' ? `/pokeballs/custompokeball.png` : `/pokeballs/${ball.toLowerCase().replace(/\s+/g, '')}.png`}
                            alt={ball}
                            className="w-16 h-16 object-contain"
                          />
                          <span className={`text-xs font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {ball.replace(' 2', '')}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPokeballPCModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSavePokeball}
                    className="flex-1 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-semibold"
                    disabled={!selectedPokeball}
                  >
                    Salvar Pokébola
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE HABILIDADES - PC */}
        {showHabilidadesPCModal && selectedPokemonForHabilidades && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowHabilidadesPCModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                    Selecionar Habilidades - {selectedPokemonForHabilidades.nickname} (PC)
                  </h3>
                  <button onClick={() => setShowHabilidadesPCModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Habilidades Selecionadas ({habilidadesSelectedList.length}/2)
                  </label>
                  {habilidadesSelectedList.length === 0 ? (
                    <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                      Nenhuma habilidade selecionada
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg flex flex-wrap gap-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {habilidadesSelectedList.map((hab, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded ${darkMode ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'}`}>
                          <button
                            onClick={() => {
                              setSelectedHabilidadeForDetail(hab)
                              setShowHabilidadeDetailModal(true)
                            }}
                            className="font-semibold hover:underline"
                          >
                            {hab}
                          </button>
                          <button
                            onClick={() => handleRemoveHabilidadeFromSelected(hab)}
                            className="hover:bg-red-500 rounded p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buscar Habilidades
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={habilidadesSearch}
                      onChange={(e) => setHabilidadesSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome da habilidade..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Habilidades Disponíveis
                  </label>
                  <div className={`max-h-64 overflow-y-auto rounded-lg p-4 space-y-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {HABILIDADES_NAMES
                      .filter(hab => hab.toLowerCase().includes(habilidadesSearch.toLowerCase()))
                      .filter(hab => !habilidadesSelectedList.includes(hab))
                      .map((hab, idx) => (
                        <div key={idx} className={`flex items-center justify-between p-3 rounded transition-colors ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-white hover:bg-gray-50'}`}>
                          <div className="flex-1">
                            <button
                              onClick={() => {
                                setSelectedHabilidadeForDetail(hab)
                                setShowHabilidadeDetailModal(true)
                              }}
                              className={`font-semibold hover:underline text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}
                            >
                              {hab}
                            </button>
                            <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              <span className="mr-3">Ativação: {HABILIDADES_DATA[hab].ativacao}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleAddHabilidadeToSelected(hab)}
                            className={`ml-2 p-2 rounded text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowHabilidadesPCModal(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveHabilidades}
                    className="flex-1 bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 font-semibold"
                    disabled={habilidadesSelectedList.length < 1}
                  >
                    Salvar Habilidades
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL NAME RATER PC */}
        {showNameRaterPCModal && nameRaterPCIndex !== null && pcPokemon[nameRaterPCIndex] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowNameRaterPCModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Name Rater PC</h3>
                <button onClick={() => setShowNameRaterPCModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>
              <div className="mb-4">
                <p className={`text-center mb-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Ele tem um nome feio mesmo, quer algumas dicas?
                </p>
                <input
                  type="text"
                  value={nameRaterPCNickname}
                  onChange={e => setNameRaterPCNickname(e.target.value)}
                  placeholder="Novo nome do Pokémon"
                  className={`w-full px-4 py-3 border-2 rounded-lg text-center text-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                  maxLength={30}
                />
              </div>
              <button
                onClick={() => {
                  if (nameRaterPCNickname.trim()) {
                    const updatedPC = [...pcPokemon]
                    updatedPC[nameRaterPCIndex] = {
                      ...updatedPC[nameRaterPCIndex],
                      nickname: nameRaterPCNickname.trim()
                    }
                    setPcPokemon(updatedPC)
                    setShowNameRaterPCModal(false)
                    setNameRaterPCIndex(null)
                    setNameRaterPCNickname('')
                  }
                }}
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 font-semibold"
              >
                Renomear
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA DA POKÉDEX
  if (currentUser.type === 'treinador' && currentArea === 'Pokédex') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Pokédex ({pokedex.length})</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Pokédex' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Pokémon Registrados</h3>
              <div className={`flex gap-4 text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-500' : 'bg-blue-50 border border-blue-400'} ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Escaneados: {pokedex.length}
                </span>
                <span className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-green-900/30 border border-green-500' : 'bg-green-50 border border-green-400'} ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Capturados: {pokedex.filter(p => p.isCaptured).length}
                </span>
              </div>
            </div>
            {pokedex.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p className="text-lg">Nenhum Pokémon registrado ainda</p>
                <p className="text-sm mt-2">Adicione ou escaneie Pokémon para preencher sua Pokédex</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {pokedex.sort((a, b) => a.species.localeCompare(b.species)).map((entry, idx) => {
                  const fullData = entry.isExotic ? entry.exoticData : fullPokedexData.find(p => p.nome === entry.species)
                  return (
                    <div key={idx} className={`p-3 rounded-lg border-2 transition-all hover:shadow-lg relative ${entry.isCaptured ? (darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-50 border-green-400') : (darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300')}`}>
                      <button
                        onClick={() => removeFromPokedex(entry.species)}
                        className={`absolute top-1 right-1 p-1 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-red-900/50 text-red-400 hover:bg-red-800' : 'bg-red-100 text-red-600 hover:bg-red-200'}`}
                        title="Remover da Pokédex"
                      >
                        <Trash2 size={14} />
                      </button>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          onClick={() => !entry.isCaptured && openCaptureModal(entry.species)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${entry.isCaptured ? 'cursor-default' : 'hover:scale-110 cursor-pointer'}`}
                          title={entry.isCaptured ? 'Capturado' : 'Capturar Pokémon'}
                        >
                          <img
                            src="/pokeball-icon.png"
                            alt="Pokébola"
                            className={`w-8 h-8 ${!entry.isCaptured ? 'grayscale opacity-50' : ''}`}
                          />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedPokedexEntry({ ...entry, fullData })
                            setShowPokedexDetailModal(true)
                          }}
                          className={`font-bold text-sm text-center hover:underline ${darkMode ? 'text-white' : 'text-gray-800'}`}
                        >
                          {entry.species}
                        </button>
                        <p className={`text-xs ${entry.isCaptured ? (darkMode ? 'text-green-400' : 'text-green-600') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}>
                          {entry.isCaptured ? '✓ Capturado' : '○ Escaneado'}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* MODAL DE DETALHES DA POKÉDEX */}
        {showPokedexDetailModal && selectedPokedexEntry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPokedexDetailModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {selectedPokedexEntry.fullData ? `#${String(selectedPokedexEntry.fullData.dexNumber).padStart(3, '0')} - ` : ''}{selectedPokedexEntry.species}
                </h3>
                <button onClick={() => setShowPokedexDetailModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              {selectedPokedexEntry.fullData ? (
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Altura</h4>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{selectedPokedexEntry.fullData.altura}m</p>
                    </div>
                    <div>
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Peso</h4>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{selectedPokedexEntry.fullData.peso}kg</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tipos</h4>
                    <div className="flex gap-2">
                      {selectedPokedexEntry.fullData.tipos.map((tipo, i) => (
                        <span key={i} className={`px-3 py-1 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'}`}>
                          {tipo}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Habitats</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {selectedPokedexEntry.fullData.habitats.join(', ')}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Catch Rate</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{selectedPokedexEntry.fullData.catchRate}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Experiência Base</h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{selectedPokedexEntry.fullData.baseExp}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Status Base</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Saúde:</span> {selectedPokedexEntry.fullData.statusBasais.saude}
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Ataque:</span> {selectedPokedexEntry.fullData.statusBasais.ataque}
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Defesa:</span> {selectedPokedexEntry.fullData.statusBasais.defesa}
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Atq. Esp.:</span> {selectedPokedexEntry.fullData.statusBasais.ataqueEspecial}
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Def. Esp.:</span> {selectedPokedexEntry.fullData.statusBasais.defesaEspecial}
                      </div>
                      <div className={`p-2 rounded ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                        <span className="font-semibold">Velocidade:</span> {selectedPokedexEntry.fullData.statusBasais.velocidade}
                      </div>
                    </div>
                  </div>

                  {selectedPokedexEntry.fullData.evolucao && (
                    <div className="mb-4">
                      <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Evolução</h4>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        Evolui para {fullPokedexData.find(p => p.dexNumber === selectedPokedexEntry.fullData.evolucao)?.nome || '?'}
                        {selectedPokedexEntry.fullData.evolucaoNivel && ` no nível ${selectedPokedexEntry.fullData.evolucaoNivel}`}
                        {selectedPokedexEntry.fullData.evolucaoItem && ` usando ${selectedPokedexEntry.fullData.evolucaoItem}`}
                      </p>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Status</h4>
                    <p className={`font-semibold ${selectedPokedexEntry.isCaptured ? (darkMode ? 'text-green-400' : 'text-green-600') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}>
                      {selectedPokedexEntry.isCaptured ? '✓ Capturado' : '○ Escaneado'}
                    </p>
                  </div>

                  {!selectedPokedexEntry.isCaptured && (
                    <button
                      onClick={() => {
                        setShowPokedexDetailModal(false)
                        openCaptureModal(selectedPokedexEntry.species)
                      }}
                      className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold mt-4"
                    >
                      Capturar este Pokémon
                    </button>
                  )}
                </div>
              ) : (
                <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Carregando informações...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MODAL DE CAPTURA */}
        {showCaptureModal && pokemonToCapture && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowCaptureModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Capturar {pokemonToCapture}</h3>
                <button onClick={() => setShowCaptureModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Nome do Pokémon *
                  </label>
                  <input
                    type="text"
                    value={captureForm.nickname}
                    onChange={(e) => setCaptureForm({ ...captureForm, nickname: e.target.value })}
                    placeholder="Digite um nome para seu Pokémon"
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Nível (1-100)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={captureForm.level}
                    onChange={(e) => setCaptureForm({ ...captureForm, level: Math.max(1, Math.min(100, parseInt(e.target.value) || 1)) })}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                <button
                  onClick={handleCapturePokemon}
                  className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                >
                  Confirmar Captura
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL DE DADOS EXÓTICOS */}
        {showExoticDataModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Dados do Pokémon Exótico: {pokemonForm.exoticSpecies}
                </h3>
                <button onClick={() => setShowExoticDataModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Número da Pokédex</label>
                    <input type="number" value={exoticDataForm.dexNumber} onChange={(e) => setExoticDataForm({...exoticDataForm, dexNumber: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Gênero</label>
                    <input type="text" value={exoticDataForm.genero} onChange={(e) => setExoticDataForm({...exoticDataForm, genero: e.target.value})} placeholder="Macho/Fêmea/Sem Gênero" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Altura (m) *</label>
                    <input type="number" step="0.1" value={exoticDataForm.altura} onChange={(e) => setExoticDataForm({...exoticDataForm, altura: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Peso (kg) *</label>
                    <input type="number" step="0.1" value={exoticDataForm.peso} onChange={(e) => setExoticDataForm({...exoticDataForm, peso: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Tipos * (separados por Enter)</label>
                  {exoticDataForm.tipos.map((tipo, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={tipo} onChange={(e) => {
                        const newTipos = [...exoticDataForm.tipos]
                        newTipos[idx] = e.target.value
                        setExoticDataForm({...exoticDataForm, tipos: newTipos})
                      }} placeholder={`Tipo ${idx + 1}`} className={`flex-1 px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                      {idx > 0 && <button onClick={() => setExoticDataForm({...exoticDataForm, tipos: exoticDataForm.tipos.filter((_, i) => i !== idx)})} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"><Minus size={16} /></button>}
                    </div>
                  ))}
                  {exoticDataForm.tipos.length < 3 && <button onClick={() => setExoticDataForm({...exoticDataForm, tipos: [...exoticDataForm.tipos, '']})} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Plus size={16} className="inline" /> Adicionar Tipo</button>}
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Habitats</label>
                  {exoticDataForm.habitats.map((habitat, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input type="text" value={habitat} onChange={(e) => {
                        const newHabitats = [...exoticDataForm.habitats]
                        newHabitats[idx] = e.target.value
                        setExoticDataForm({...exoticDataForm, habitats: newHabitats})
                      }} placeholder={`Habitat ${idx + 1}`} className={`flex-1 px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                      {idx > 0 && <button onClick={() => setExoticDataForm({...exoticDataForm, habitats: exoticDataForm.habitats.filter((_, i) => i !== idx)})} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"><Minus size={16} /></button>}
                    </div>
                  ))}
                  <button onClick={() => setExoticDataForm({...exoticDataForm, habitats: [...exoticDataForm.habitats, '']})} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Plus size={16} className="inline" /> Adicionar Habitat</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Catch Rate</label>
                    <input type="number" value={exoticDataForm.catchRate} onChange={(e) => setExoticDataForm({...exoticDataForm, catchRate: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Experiência Base</label>
                    <input type="number" value={exoticDataForm.baseExp} onChange={(e) => setExoticDataForm({...exoticDataForm, baseExp: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Status Base</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Saúde</label>
                      <input type="number" value={exoticDataForm.statusBasais.saude} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, saude: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Ataque</label>
                      <input type="number" value={exoticDataForm.statusBasais.ataque} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, ataque: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Defesa</label>
                      <input type="number" value={exoticDataForm.statusBasais.defesa} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, defesa: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Ataque Especial</label>
                      <input type="number" value={exoticDataForm.statusBasais.ataqueEspecial} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, ataqueEspecial: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Defesa Especial</label>
                      <input type="number" value={exoticDataForm.statusBasais.defesaEspecial} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, defesaEspecial: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div>
                      <label className={`block text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Velocidade</label>
                      <input type="number" value={exoticDataForm.statusBasais.velocidade} onChange={(e) => setExoticDataForm({...exoticDataForm, statusBasais: {...exoticDataForm.statusBasais, velocidade: e.target.value}})} className={`w-full px-3 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Evolução (Opcional)</h4>
                  <div className="space-y-3">
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Evolui para</label>
                      <input type="text" value={exoticDataForm.evolucao} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucao: e.target.value})} placeholder="Nome do Pokémon" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Nível de Evolução</label>
                        <input type="number" value={exoticDataForm.evolucaoNivel} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucaoNivel: e.target.value})} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Item de Evolução</label>
                        <input type="text" value={exoticDataForm.evolucaoItem} onChange={(e) => setExoticDataForm({...exoticDataForm, evolucaoItem: e.target.value})} placeholder="Nome do item" className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'border-gray-300'}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button onClick={() => setShowExoticDataModal(false)} className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
                    Cancelar
                  </button>
                  <button onClick={handleSaveExoticData} className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold">
                    Salvar e Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA DA MOCHILA
  if (currentUser.type === 'treinador' && currentArea === 'Mochila') {
    const filteredKeyItems = KEY_ITEMS_LIST.filter(item =>
      item.toLowerCase().includes(keyItemSearch.toLowerCase())
    )

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Mochila</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Mochila' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Pokémoedas */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6 mb-6`}>
            <div className="flex justify-between items-center">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Pokémoedas</h3>
              <button
                onClick={() => setShowPokemonedasModal(true)}
                className={`text-4xl font-bold ${darkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'} transition-colors cursor-pointer`}
                title="Clique para editar Pokémoedas"
              >
                ₽{pokemonedas.toLocaleString()}
              </button>
            </div>
          </div>

          {/* Itens Chave */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6 mb-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Itens Chave ({keyItems.length})</h3>
              <button
                onClick={() => setShowAddKeyItemModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-800 font-semibold flex items-center gap-2"
              >
                <Plus size={20} />
                Adicionar Item
              </button>
            </div>

            {keyItems.length === 0 ? (
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p>Nenhum item chave na mochila</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {keyItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex flex-col items-center p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} relative group`}
                  >
                    {/* Botão de excluir */}
                    <button
                      onClick={() => handleOpenDeleteConfirm(item.name, 'keyItem')}
                      className="absolute top-1 right-1 text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Excluir item"
                    >
                      <Trash2 size={16} />
                    </button>

                    {/* Imagem do item */}
                    <div className="w-16 h-16 mb-2 flex items-center justify-center">
                      <img
                        src={getItemImage(item.name)}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>

                    {/* Nome do item */}
                    <h4 className={`font-bold text-sm text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'} max-w-[120px]`}>
                      {item.name}
                    </h4>

                    {/* Controles de quantidade */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDecrementKeyItem(item.name)}
                        className={`p-1 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                        title="Diminuir quantidade"
                      >
                        <Minus size={14} />
                      </button>
                      <span
                        onClick={() => handleOpenEditKeyItemQuantity(item)}
                        className={`font-bold text-lg cursor-pointer ${darkMode ? 'text-white' : 'text-gray-800'} px-2 py-1 rounded ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'} min-w-[40px] text-center`}
                        title="Clique para editar quantidade"
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrementKeyItem(item.name)}
                        className={`p-1 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                        title="Aumentar quantidade"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Itens Customizados */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-6`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Itens Customizados ({customItems.length})</h3>
              <button
                onClick={() => setShowAddCustomItemModal(true)}
                className="bg-gradient-to-r from-green-600 to-teal-700 text-white px-6 py-2 rounded-lg hover:from-green-700 hover:to-teal-800 font-semibold flex items-center gap-2"
              >
                <Plus size={20} />
                Criar Item
              </button>
            </div>

            {customItems.length === 0 ? (
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <p>Nenhum item customizado criado</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className={`w-full ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <thead>
                    <tr className={`border-b-2 ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                      <th className="p-3 text-left font-bold">Nome</th>
                      <th className="p-3 text-center font-bold">Quantidade</th>
                      <th className="p-3 text-left font-bold">Descrição</th>
                      <th className="p-3 text-center font-bold">Editar</th>
                      <th className="p-3 text-center font-bold">Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customItems.map((item, idx) => (
                      <tr key={idx} className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setSelectedItemToGive(item)
                                setShowGiveItemModal(true)
                              }}
                              className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                              title="Dar item para Pokémon"
                            >
                              <ArrowBigLeftDash size={20} />
                            </button>
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-3 text-center">
                          <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{item.quantity}</span>
                        </td>
                        <td className="p-3">
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</span>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleOpenEditCustomItem(item, idx)}
                            className={`${darkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-600 hover:text-yellow-700'}`}
                            title="Editar item"
                          >
                            <Wrench size={18} />
                          </button>
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => handleOpenDeleteConfirm(idx, 'customItem')}
                            className="text-red-500 hover:text-red-600"
                            title="Excluir item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Modal Adicionar Item Chave */}
        {showAddKeyItemModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddKeyItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adicionar Item Chave</h3>

              <input
                type="text"
                placeholder="Buscar item..."
                value={keyItemSearch}
                onChange={(e) => setKeyItemSearch(e.target.value)}
                className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
              />

              <div className="mb-4 max-h-60 overflow-y-auto">
                {filteredKeyItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedKeyItem(item)}
                    className={`w-full p-3 rounded-lg mb-2 text-left ${
                      selectedKeyItem === item
                        ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
                        : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quantidade</label>
                <input
                  type="number"
                  min="1"
                  value={keyItemQuantity}
                  onChange={(e) => setKeyItemQuantity(parseInt(e.target.value) || 1)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddKeyItemModal(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddKeyItem}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-800 font-semibold"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Adicionar Item Customizado */}
        {showAddCustomItemModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowAddCustomItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Criar Item Customizado</h3>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Nome do Item</label>
                <input
                  type="text"
                  value={customItemName}
                  onChange={(e) => setCustomItemName(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  placeholder="Ex: Espada Mágica"
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quantidade</label>
                <input
                  type="number"
                  min="1"
                  value={customItemQuantity}
                  onChange={(e) => setCustomItemQuantity(parseInt(e.target.value) || 1)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Descrição</label>
                <textarea
                  value={customItemDescription}
                  onChange={(e) => setCustomItemDescription(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  rows="3"
                  placeholder="Descreva o efeito do item..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddCustomItemModal(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAddCustomItem}
                  className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-teal-800 font-semibold"
                >
                  Criar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Editar Quantidade */}
        {showEditKeyItemQuantityModal && selectedKeyItemForEdit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditKeyItemQuantityModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Editar Quantidade - {selectedKeyItemForEdit.name}
              </h3>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quantidade</label>
                <input
                  type="number"
                  min="1"
                  value={editKeyItemQuantity}
                  onChange={(e) => setEditKeyItemQuantity(parseInt(e.target.value) || 1)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowEditKeyItemQuantityModal(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEditKeyItemQuantity}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-800 font-semibold"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Confirmar Exclusão */}
        {showDeleteConfirmModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowDeleteConfirmModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Confirmar Exclusão</h3>

              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Tem certeza que deseja excluir este item?
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirmModal(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Dar Item para Pokémon */}
        {showGiveItemModal && selectedItemToGive && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowGiveItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Dar Item - {selectedItemToGive.name}
              </h3>

              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedItemToGive.description}
              </p>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Selecione o Pokémon
                </label>
                {mainTeam.length === 0 ? (
                  <p className={`text-center py-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Nenhum Pokémon no time principal
                  </p>
                ) : (
                  <select
                    value={selectedPokemonToReceiveItem || ''}
                    onChange={(e) => setSelectedPokemonToReceiveItem(e.target.value)}
                    className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  >
                    <option value="">Escolha um Pokémon...</option>
                    {mainTeam.map((pokemon) => (
                      <option key={pokemon.id} value={pokemon.id}>
                        {pokemon.nickname} (Lv. {pokemon.level})
                        {pokemon.heldItem ? ` - Já tem: ${pokemon.heldItem.name}` : ''}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {selectedPokemonToReceiveItem && mainTeam.find(p => p.id === parseInt(selectedPokemonToReceiveItem))?.heldItem && (
                <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-yellow-900/30 border border-yellow-600' : 'bg-yellow-50 border border-yellow-400'}`}>
                  <p className={`text-sm ${darkMode ? 'text-yellow-400' : 'text-yellow-700'}`}>
                    ⚠️ Este Pokémon já possui um item. O item atual será substituído.
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowGiveItemModal(false)
                    setSelectedItemToGive(null)
                    setSelectedPokemonToReceiveItem(null)
                  }}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleGiveItemToPokemon}
                  disabled={mainTeam.length === 0}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    mainTeam.length === 0
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-teal-700 text-white hover:from-green-700 hover:to-teal-800'
                  }`}
                >
                  Dar Item
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Editar Item Customizado */}
        {showEditCustomItemModal && selectedCustomItemForEdit !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditCustomItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Editar Item Customizado</h3>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Nome do Item</label>
                <input
                  type="text"
                  value={editCustomItemName}
                  onChange={(e) => setEditCustomItemName(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  placeholder="Ex: Espada Mágica"
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quantidade</label>
                <input
                  type="number"
                  min="1"
                  value={editCustomItemQuantity}
                  onChange={(e) => setEditCustomItemQuantity(parseInt(e.target.value) || 1)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                />
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Descrição</label>
                <textarea
                  value={editCustomItemDescription}
                  onChange={(e) => setEditCustomItemDescription(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  rows="3"
                  placeholder="Descreva o efeito do item..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowEditCustomItemModal(false)
                    setSelectedCustomItemForEdit(null)
                    setEditCustomItemName('')
                    setEditCustomItemQuantity(1)
                    setEditCustomItemDescription('')
                  }}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEditCustomItem}
                  className="flex-1 bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-3 rounded-lg hover:from-yellow-700 hover:to-orange-800 font-semibold"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Pokémoedas */}
        {showPokemonedasModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowPokemonedasModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Gerenciar Pokémoedas
              </h3>

              <div className="mb-2">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  Saldo atual: <span className={`font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>₽{pokemonedas.toLocaleString()}</span>
                </p>
              </div>

              <div className="mb-6">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Valor</label>
                <input
                  type="number"
                  min="0"
                  value={pokemonedasValue}
                  onChange={(e) => setPokemonedasValue(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  placeholder="Digite o valor..."
                />
              </div>

              <div className="flex gap-3 mb-3">
                <button
                  onClick={handlePerdeuPokemonedas}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold"
                  title="Subtrair valor do saldo atual"
                >
                  Perdeu
                </button>
                <button
                  onClick={handleSaldoPokemonedas}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  title="Definir como novo saldo"
                >
                  Saldo
                </button>
                <button
                  onClick={handleAcheiPokemonedas}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                  title="Adicionar valor ao saldo atual"
                >
                  Achei
                </button>
              </div>

              <button
                onClick={() => {
                  setShowPokemonedasModal(false)
                  setPokemonedasValue('')
                }}
                className={`w-full py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA DA POKÉLOJA
  if (currentUser.type === 'treinador' && currentArea === 'Pokéloja') {
    // Carregar itens ocultos pelo mestre
    const mestreConfig = localStorage.getItem('mestre_config')
    const hiddenItems = mestreConfig ? JSON.parse(mestreConfig).hiddenPokelojaItems || [] : []

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>PokéLoja</h2>
                <span className={`text-xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  ₽{pokemonedas.toLocaleString()}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Pokéloja' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {Object.entries(POKELOJA_DATA).map(([corredor, items]) => {
            // Filtrar itens ocultos
            const visibleItems = items.filter(item => !hiddenItems.includes(item.name))

            // Se não houver itens visíveis, não mostrar o corredor
            if (visibleItems.length === 0) return null

            return (
            <div key={corredor} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl mb-6 overflow-hidden`}>
              {/* Header do Corredor */}
              <button
                onClick={() => toggleCorredor(corredor)}
                className={`w-full p-6 flex justify-between items-center ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors`}
              >
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {corredor}
                </h3>
                {expandedCorredores[corredor] ? (
                  <ChevronDown size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
                ) : (
                  <ChevronRight size={24} className={darkMode ? 'text-white' : 'text-gray-800'} />
                )}
              </button>

              {/* Items do Corredor */}
              {expandedCorredores[corredor] && (
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {visibleItems.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} flex flex-col`}
                      >
                        {/* Imagem do Item */}
                        <div className="w-full h-20 mb-2 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>

                        {/* Nome do Item */}
                        <h4 className={`font-bold text-base mb-1 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {item.name}
                        </h4>

                        {/* Preço */}
                        <p className={`text-center mb-2 text-lg font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                          ₽{item.price.toLocaleString()}
                        </p>

                        {/* Botões */}
                        <div className="flex gap-1.5 mt-auto">
                          <button
                            onClick={() => handleOpenItemDescription(item)}
                            className={`flex-1 py-1.5 rounded-lg ${darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'} font-semibold flex items-center justify-center gap-1`}
                            title="Ver descrição"
                          >
                            <Info size={14} />
                          </button>
                          <button
                            onClick={() => handleOpenBuyItemModal(item)}
                            className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white py-1.5 rounded-lg hover:from-green-700 hover:to-teal-800 font-semibold text-sm"
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            )
          })}
        </div>

        {/* Modal Descrição do Item */}
        {showItemDescriptionModal && selectedItemForDescription && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowItemDescriptionModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              {/* Imagem */}
              <div className="w-full h-32 mb-4 flex items-center justify-center">
                <img
                  src={selectedItemForDescription.image}
                  alt={selectedItemForDescription.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className={`text-2xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {selectedItemForDescription.name}
              </h3>

              <p className={`text-center mb-4 text-xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                ₽{selectedItemForDescription.price.toLocaleString()}
              </p>

              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedItemForDescription.description}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowItemDescriptionModal(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setShowItemDescriptionModal(false)
                    handleOpenBuyItemModal(selectedItemForDescription)
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-teal-700 text-white py-3 rounded-lg hover:from-green-700 hover:to-teal-800 font-semibold"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Comprar Item */}
        {showBuyItemModal && selectedItemToBuy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowBuyItemModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Comprar {selectedItemToBuy.name}
              </h3>

              <div className="mb-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  Preço unitário: <span className={`font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>₽{selectedItemToBuy.price.toLocaleString()}</span>
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  Seu saldo: <span className={`font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>₽{pokemonedas.toLocaleString()}</span>
                </p>
              </div>

              <div className="mb-4">
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quantidade</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setBuyItemQuantity(Math.max(1, buyItemQuantity - 1))}
                    className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    <Minus size={20} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={buyItemQuantity}
                    onChange={(e) => setBuyItemQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className={`flex-1 p-3 rounded-lg text-center font-bold text-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                  />
                  <button
                    onClick={() => setBuyItemQuantity(buyItemQuantity + 1)}
                    className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Total: <span className={`font-bold text-2xl ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    ₽{(selectedItemToBuy.price * buyItemQuantity).toLocaleString()}
                  </span>
                </p>
              </div>

              {pokemonedas < (selectedItemToBuy.price * buyItemQuantity) && (
                <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-red-900/30 border border-red-600' : 'bg-red-50 border border-red-400'}`}>
                  <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-700'}`}>
                    ⚠️ Pokémoedas insuficientes!
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowBuyItemModal(false)
                    setSelectedItemToBuy(null)
                    setBuyItemQuantity(1)
                  }}
                  className={`flex-1 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleBuyItem}
                  disabled={pokemonedas < (selectedItemToBuy.price * buyItemQuantity)}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    pokemonedas < (selectedItemToBuy.price * buyItemQuantity)
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-teal-700 text-white hover:from-green-700 hover:to-teal-800'
                  }`}
                >
                  Confirmar Compra
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ÁREA CARACTERÍSTICAS & TALENTOS
  if (currentUser.type === 'treinador' && currentArea === 'Características & Talentos') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Características & Talentos</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Características & Talentos' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>

            {/* LEGENDA DE SÍMBOLOS */}
            <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border ${darkMode ? 'border-gray-600' : 'border-blue-200'}`}>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>Legenda de Ações</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-blue-600">C</span>
                  <span>= Contínuo</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-green-600">P</span>
                  <span>= Ação Padrão</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-yellow-600">L</span>
                  <span>= Ação Livre</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-red-600">I</span>
                  <span>= Ação de Interrupção</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-purple-600">E</span>
                  <span>= Ação Estendida</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-green-600">V</span>
                  <span>= Legal (oficial)</span>
                </div>
                <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="font-bold text-red-600">X</span>
                  <span>= Ilegal (oficial)</span>
                </div>
              </div>
            </div>

            {/* CARACTERÍSTICAS */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Características de Classe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(() => {
                  // Obter características das classes/subclasses do usuário
                  const userCaracteristicas = []
                  classes.forEach(className => {
                    if (className && CARACTERISTICAS_DATA[className]) {
                      Object.entries(CARACTERISTICAS_DATA[className]).forEach(([name, data]) => {
                        userCaracteristicas.push({ name, ...data, className })
                      })
                    }
                  })

                  if (userCaracteristicas.length === 0) {
                    return (
                      <div className={`col-span-2 text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <p>Nenhuma classe selecionada. Selecione suas classes na área "Treinador" para ver as características disponíveis.</p>
                      </div>
                    )
                  }

                  return userCaracteristicas.map((carac, idx) => {
                    const isExpanded = expandedCaracteristicas.includes(idx)
                    return (
                      <div key={idx} className={`rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}>
                        <button
                          onClick={() => {
                            if (isExpanded) {
                              setExpandedCaracteristicas(expandedCaracteristicas.filter(i => i !== idx))
                            } else {
                              // Calcular qual linha este item está (2 colunas)
                              const row = Math.floor(idx / 2)
                              // Remover outros itens expandidos da mesma linha
                              const newExpanded = expandedCaracteristicas.filter(i => {
                                const itemRow = Math.floor(i / 2)
                                return itemRow !== row
                              })
                              setExpandedCaracteristicas([...newExpanded, idx])
                            }
                          }}
                          className={`w-full p-4 flex items-center justify-between hover:opacity-80 transition-opacity`}
                        >
                          <div className="flex items-center gap-3">
                            {isExpanded ? <ChevronDown size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} /> : <ChevronRight size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />}
                            <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>{carac.name}</span>
                            <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>{carac.className}</span>
                          </div>
                          <span className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{carac.frequencia}</span>
                        </button>
                        {isExpanded && (
                          <div className={`px-4 pb-4 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <div className="mt-3 space-y-2">
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Referência: </span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{carac.referencia}</span>
                              </div>
                              {carac.alvo && (
                                <div>
                                  <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Alvo: </span>
                                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{carac.alvo}</span>
                                </div>
                              )}
                              {carac.gatilho && (
                                <div>
                                  <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Gatilho: </span>
                                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{carac.gatilho}</span>
                                </div>
                              )}
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Efeito: </span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{carac.efeito}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })
                })()}
              </div>
            </div>

            {/* BOTÕES DE TALENTOS E BOLSA */}
            <div className="flex gap-4 mb-6 items-center">
              <button
                onClick={() => setShowTalentosModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-lg font-semibold hover:opacity-90 shadow-lg"
              >
                <Plus size={20} />
                <span>Talento</span>
              </button>
              <button
                onClick={() => setShowBolsaTalentoModal(true)}
                className="p-3 bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-lg font-semibold hover:opacity-90 shadow-lg"
                title="Bolsa de Talento"
              >
                <Sparkles size={20} />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{bolsaTalento}</span>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => setBolsaTalento(bolsaTalento + 1)}
                    className={`p-1 rounded ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    <CornerRightUp size={16} />
                  </button>
                  <button
                    onClick={() => setBolsaTalento(Math.max(0, bolsaTalento - 1))}
                    className={`p-1 rounded ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                  >
                    <CornerLeftDown size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* TALENTOS SELECIONADOS */}
            {talentosSelected.length > 0 && (
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Talentos Selecionados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {talentosSelected.map((talentoNome, idx) => {
                    const isExpanded = expandedTalentos.includes(idx)

                    // Encontrar os dados completos do talento
                    let talentoData = null
                    let talentoClasse = ''

                    // Procurar nos talentos gerais
                    if (TALENTOS_DATA['Geral']) {
                      const found = TALENTOS_DATA['Geral'].find(t => t.nome === talentoNome)
                      if (found) {
                        talentoData = found
                        talentoClasse = 'Geral'
                      }
                    }

                    // Procurar nas classes do usuário
                    if (!talentoData) {
                      classes.forEach(className => {
                        if (className && TALENTOS_DATA[className]) {
                          const found = TALENTOS_DATA[className].find(t => t.nome === talentoNome)
                          if (found) {
                            talentoData = found
                            talentoClasse = className
                          }
                        }
                      })
                    }

                    return (
                      <div
                        key={idx}
                        className={`rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                      >
                        <div className={`p-3 flex items-start justify-between gap-2`}>
                          <button
                            onClick={() => {
                              if (isExpanded) {
                                setExpandedTalentos(expandedTalentos.filter(i => i !== idx))
                              } else {
                                // Calcular qual linha este item está (4 colunas em telas grandes)
                                const row = Math.floor(idx / 4)
                                // Remover outros itens expandidos da mesma linha
                                const newExpanded = expandedTalentos.filter(i => {
                                  const itemRow = Math.floor(i / 4)
                                  return itemRow !== row
                                })
                                setExpandedTalentos([...newExpanded, idx])
                              }
                            }}
                            className="flex-1 text-left"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {isExpanded ? <ChevronDown size={16} className={darkMode ? 'text-green-400' : 'text-green-600'} /> : <ChevronRight size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />}
                              <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>{talentoNome}</span>
                            </div>
                            {talentoClasse && (
                              <span className={`text-xs px-2 py-1 rounded ml-6 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                                {talentoClasse}
                              </span>
                            )}
                          </button>
                          <button
                            onClick={() => setTalentosSelected(talentosSelected.filter((_, i) => i !== idx))}
                            className={`flex-shrink-0 hover:opacity-70 ${darkMode ? 'text-red-400' : 'text-red-600'}`}
                          >
                            <X size={16} />
                          </button>
                        </div>

                        {isExpanded && talentoData && (
                          <div className={`px-3 pb-3 border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                            <div className="mt-2 space-y-1 text-xs">
                              {talentoData.requisitos && (
                                <div>
                                  <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Requisitos: </span>
                                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.requisitos}</span>
                                </div>
                              )}
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Frequência: </span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.frequencia}</span>
                              </div>
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Referência: </span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.referencia}</span>
                              </div>
                              {talentoData.alvo && (
                                <div>
                                  <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Alvo: </span>
                                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.alvo}</span>
                                </div>
                              )}
                              {talentoData.gatilho && (
                                <div>
                                  <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Gatilho: </span>
                                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.gatilho}</span>
                                </div>
                              )}
                              <div>
                                <span className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Efeito: </span>
                                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{talentoData.efeito}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* MODAL DE TALENTOS */}
        {showTalentosModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowTalentosModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                    Gerenciar Talentos
                  </h3>
                  <button onClick={() => setShowTalentosModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                {/* TALENTOS SELECIONADOS */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Talentos Selecionados ({talentosSelected.length})
                  </label>
                  {talentosSelected.length === 0 ? (
                    <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                      Nenhum talento selecionado
                    </div>
                  ) : (
                    <div className={`p-4 rounded-lg flex flex-wrap gap-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                      {talentosSelected.map((talento, idx) => (
                        <div key={idx} className={`flex items-center gap-2 px-3 py-2 rounded ${darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'}`}>
                          <span className="font-semibold">{talento}</span>
                          <button
                            onClick={() => setTalentosSelected(talentosSelected.filter((_, i) => i !== idx))}
                            className="hover:bg-red-500 rounded p-1"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* BUSCA DE TALENTOS */}
                <div className="mb-4">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Buscar Talentos
                  </label>
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                    <input
                      type="text"
                      value={talentosSearch}
                      onChange={(e) => setTalentosSearch(e.target.value)}
                      className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                      placeholder="Digite o nome do talento..."
                    />
                  </div>
                </div>

                {/* TALENTOS DISPONÍVEIS */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Talentos Disponíveis
                  </label>
                  <div className={`max-h-96 overflow-y-auto rounded-lg p-4 space-y-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {(() => {
                      // Filtrar talentos por classe do usuário + talentos gerais
                      const availableTalentos = []

                      // Adicionar talentos gerais
                      if (TALENTOS_DATA['Geral']) {
                        TALENTOS_DATA['Geral'].forEach(talento => {
                          availableTalentos.push({ ...talento, classe: 'Geral' })
                        })
                      }

                      // Adicionar talentos das classes do usuário
                      classes.forEach(className => {
                        if (className && TALENTOS_DATA[className]) {
                          TALENTOS_DATA[className].forEach(talento => {
                            availableTalentos.push({ ...talento, classe: className })
                          })
                        }
                      })

                      // Filtrar pela busca e remover os já selecionados
                      const filtered = availableTalentos
                        .filter(talento => talento.nome.toLowerCase().includes(talentosSearch.toLowerCase()))
                        .filter(talento => !talentosSelected.includes(talento.nome))

                      if (filtered.length === 0) {
                        return (
                          <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {talentosSearch ? 'Nenhum talento encontrado' : 'Nenhuma classe selecionada. Selecione suas classes na área "Treinador".'}
                          </div>
                        )
                      }

                      return filtered.map((talento, idx) => (
                        <div key={idx} className={`p-3 rounded transition-colors ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{talento.nome}</span>
                                <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                                  {talento.classe}
                                </span>
                              </div>
                              <div className={`text-xs space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {talento.requisitos && (
                                  <div>
                                    <span className="font-semibold">Requisitos: </span>
                                    <span>{talento.requisitos}</span>
                                  </div>
                                )}
                                <div>
                                  <span className="font-semibold">Frequência: </span>
                                  <span>{talento.frequencia}</span>
                                </div>
                                <div>
                                  <span className="font-semibold">Referência: </span>
                                  <span>{talento.referencia}</span>
                                </div>
                                {talento.alvo && (
                                  <div>
                                    <span className="font-semibold">Alvo: </span>
                                    <span>{talento.alvo}</span>
                                  </div>
                                )}
                                {talento.gatilho && (
                                  <div>
                                    <span className="font-semibold">Gatilho: </span>
                                    <span>{talento.gatilho}</span>
                                  </div>
                                )}
                                <div>
                                  <span className="font-semibold">Efeito: </span>
                                  <span>{talento.efeito}</span>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => setTalentosSelected([...talentosSelected, talento.nome])}
                              className={`flex-shrink-0 p-2 rounded text-white ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
                            >
                              <Plus size={20} />
                            </button>
                          </div>
                        </div>
                      ))
                    })()}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowTalentosModal(false)}
                    className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODAL BOLSA DE TALENTO */}
        {showBolsaTalentoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowBolsaTalentoModal(false)}>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full`} onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Bolsa de Talento
                  </h3>
                  <button onClick={() => setShowBolsaTalentoModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}>
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Valor da Bolsa de Talento
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setBolsaTalento(Math.max(0, bolsaTalento - 1))}
                      className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                      <CornerLeftDown size={24} />
                    </button>
                    <input
                      type="number"
                      min="0"
                      value={bolsaTalento}
                      onChange={(e) => setBolsaTalento(Math.max(0, parseInt(e.target.value) || 0))}
                      className={`flex-1 px-4 py-3 text-center text-2xl font-bold border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    />
                    <button
                      onClick={() => setBolsaTalento(bolsaTalento + 1)}
                      className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                      <CornerRightUp size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBolsaTalentoModal(false)}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    )
  }

  // ÁREA ENCICLOPÉDIA
  if (currentUser.type === 'treinador' && currentArea === 'Enciclopédia') {
    const encyclopediaSections = ['Golpedex', 'Descritordex', 'Tag de Concursodex', 'Períciadex']

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Enciclopédia</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Enciclopédia' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
            </div>
          </div>
        </div>

        {/* Navegação de Subáreas da Enciclopédia */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {encyclopediaSections.map(section => (
                <button
                  key={section}
                  onClick={() => setEncyclopediaSection(section)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    encyclopediaSection === section
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Golpedex */}
          {encyclopediaSection === 'Golpedex' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Golpedex
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Pesquise até 8 golpes simultaneamente para comparar suas características
              </p>

              {/* Grid 4x2 de Barras de Pesquisa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {golpedexSearches.map((search, index) => (
                  <div key={index} className="relative">
                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Golpe #{index + 1}
                    </label>
                    <div className="relative">
                      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
                      <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                          const newSearches = [...golpedexSearches]
                          newSearches[index] = e.target.value
                          setGolpedexSearches(newSearches)
                        }}
                        placeholder="Digite o nome do golpe..."
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 ${
                          darkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-purple-500'
                            : 'bg-white border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-500'
                        } focus:outline-none transition-all`}
                        list={`golpes-datalist-${index}`}
                      />
                      <datalist id={`golpes-datalist-${index}`}>
                        {GOLPES_NAMES.filter(nome =>
                          nome.toLowerCase().includes(search.toLowerCase())
                        ).slice(0, 50).map(nome => (
                          <option key={nome} value={nome} />
                        ))}
                      </datalist>
                      {search && (
                        <button
                          onClick={() => {
                            const newSearches = [...golpedexSearches]
                            newSearches[index] = ''
                            setGolpedexSearches(newSearches)
                          }}
                          className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                            darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>

                    {/* Exibir informações do golpe se selecionado */}
                    {search && GOLPES_DATA[search] && (
                      <div className={`mt-3 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${TYPE_STYLES[GOLPES_DATA[search].tipo] || 'bg-gray-500'} text-white`}>
                              {GOLPES_DATA[search].tipo}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-gray-700'}`}>
                              {GOLPES_DATA[search].aptidao}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Acurácia:</span>
                              <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].acuracia || 'N/A'}
                              </span>
                            </div>
                            <div>
                              <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dano:</span>
                              <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].danoBasal || 'N/A'}
                              </span>
                            </div>
                            <div>
                              <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Alcance:</span>
                              <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].alcance || 'N/A'}
                              </span>
                            </div>
                            <div>
                              <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequência:</span>
                              <span className={`ml-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].frequencia || 'N/A'}
                              </span>
                            </div>
                          </div>

                          {GOLPES_DATA[search].descritores && (
                            <div>
                              <span className={`font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Descritores:
                              </span>
                              <span className={`ml-2 text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].descritores}
                              </span>
                            </div>
                          )}

                          {GOLPES_DATA[search].tagConcurso && (
                            <div>
                              <span className={`font-semibold text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Tag Concurso:
                              </span>
                              <span className={`ml-2 text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                {GOLPES_DATA[search].tagConcurso}
                              </span>
                            </div>
                          )}

                          <div className={`pt-2 border-t ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              <span className="font-semibold">Efeito:</span> {GOLPES_DATA[search].efeito}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Descritordex */}
          {encyclopediaSection === 'Descritordex' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Descritordex
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Clique em um descritor para ver suas informações detalhadas
              </p>

              {/* Grid 5x4 de Descritores */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {DESCRITORES_DATA.map((descritor) => (
                  <div key={descritor.nome} className="relative">
                    <button
                      onClick={() => {
                        if (expandedDescritor === descritor.nome) {
                          setExpandedDescritor(null)
                        } else {
                          setExpandedDescritor(descritor.nome)
                        }
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        expandedDescritor === descritor.nome
                          ? darkMode
                            ? 'bg-purple-900 border-purple-500 shadow-lg'
                            : 'bg-purple-100 border-purple-500 shadow-lg'
                          : darkMode
                          ? 'bg-gray-700 border-gray-600 hover:bg-gray-650 hover:border-gray-500'
                          : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className={`font-bold text-lg ${
                          expandedDescritor === descritor.nome
                            ? darkMode ? 'text-purple-200' : 'text-purple-800'
                            : darkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                          {descritor.nome}
                        </h4>
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${
                            expandedDescritor === descritor.nome ? 'rotate-180' : ''
                          } ${
                            expandedDescritor === descritor.nome
                              ? darkMode ? 'text-purple-300' : 'text-purple-600'
                              : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Card Expandido */}
                    {expandedDescritor === descritor.nome && (
                      <div className={`mt-3 p-5 rounded-lg border-2 ${
                        darkMode
                          ? 'bg-gray-750 border-purple-600'
                          : 'bg-purple-50 border-purple-400'
                      } shadow-xl`}>
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-2 rounded-full ${
                            darkMode ? 'bg-purple-800' : 'bg-purple-200'
                          }`}>
                            <BookOpenText size={20} className={
                              darkMode ? 'text-purple-300' : 'text-purple-700'
                            } />
                          </div>
                          <div className="flex-1">
                            <h5 className={`font-bold text-xl mb-2 ${
                              darkMode ? 'text-purple-200' : 'text-purple-900'
                            }`}>
                              {descritor.nome}
                            </h5>
                          </div>
                        </div>

                        <div className={`pt-3 border-t ${
                          darkMode ? 'border-purple-700' : 'border-purple-300'
                        }`}>
                          <p className={`text-sm leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {descritor.efeito}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tag de Concursodex */}
          {encyclopediaSection === 'Tag de Concursodex' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Tag de Concursodex
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Clique em uma tag de concurso para ver suas informações detalhadas
              </p>

              {/* Grid 5x4 de Tags de Concurso */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {TAGS_CONCURSO_DATA.map((tag) => (
                  <div key={tag.nome} className="relative">
                    <button
                      onClick={() => {
                        if (expandedTagConcurso === tag.nome) {
                          setExpandedTagConcurso(null)
                        } else {
                          setExpandedTagConcurso(tag.nome)
                        }
                      }}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        expandedTagConcurso === tag.nome
                          ? darkMode
                            ? 'bg-pink-900 border-pink-500 shadow-lg'
                            : 'bg-pink-100 border-pink-500 shadow-lg'
                          : darkMode
                          ? 'bg-gray-700 border-gray-600 hover:bg-gray-650 hover:border-gray-500'
                          : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className={`font-bold text-lg ${
                            expandedTagConcurso === tag.nome
                              ? darkMode ? 'text-pink-200' : 'text-pink-800'
                              : darkMode ? 'text-white' : 'text-gray-800'
                          }`}>
                            {tag.nome}
                          </h4>
                          <p className={`text-xs mt-1 font-semibold ${
                            expandedTagConcurso === tag.nome
                              ? darkMode ? 'text-pink-300' : 'text-pink-600'
                              : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Pontuação: {tag.pontuacaoBasal}
                          </p>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`transition-transform flex-shrink-0 ml-2 ${
                            expandedTagConcurso === tag.nome ? 'rotate-180' : ''
                          } ${
                            expandedTagConcurso === tag.nome
                              ? darkMode ? 'text-pink-300' : 'text-pink-600'
                              : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Card Expandido */}
                    {expandedTagConcurso === tag.nome && (
                      <div className={`mt-3 p-5 rounded-lg border-2 ${
                        darkMode
                          ? 'bg-gray-750 border-pink-600'
                          : 'bg-pink-50 border-pink-400'
                      } shadow-xl`}>
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-2 rounded-full ${
                            darkMode ? 'bg-pink-800' : 'bg-pink-200'
                          }`}>
                            <Crown size={20} className={
                              darkMode ? 'text-pink-300' : 'text-pink-700'
                            } />
                          </div>
                          <div className="flex-1">
                            <h5 className={`font-bold text-xl mb-1 ${
                              darkMode ? 'text-pink-200' : 'text-pink-900'
                            }`}>
                              {tag.nome}
                            </h5>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                              darkMode ? 'bg-pink-700 text-pink-100' : 'bg-pink-200 text-pink-800'
                            }`}>
                              Pontuação Basal: {tag.pontuacaoBasal}
                            </div>
                          </div>
                        </div>

                        <div className={`pt-3 border-t ${
                          darkMode ? 'border-pink-700' : 'border-pink-300'
                        }`}>
                          <p className={`text-sm font-semibold mb-1 ${
                            darkMode ? 'text-pink-300' : 'text-pink-700'
                          }`}>
                            Efeito:
                          </p>
                          <p className={`text-sm leading-relaxed ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {tag.efeito}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Períciadex */}
          {encyclopediaSection === 'Períciadex' && (
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
              <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Períciadex
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Clique em um atributo para ver suas perícias
              </p>

              {/* Coluna de 6 Atributos */}
              <div className="space-y-4 max-w-4xl mx-auto">
                {ATRIBUTOS_PERICIAS_DATA.map((atributo) => (
                  <div key={atributo.nome} className="relative">
                    <button
                      onClick={() => {
                        if (expandedAtributo === atributo.nome) {
                          setExpandedAtributo(null)
                        } else {
                          setExpandedAtributo(atributo.nome)
                        }
                      }}
                      className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                        expandedAtributo === atributo.nome
                          ? darkMode
                            ? 'bg-blue-900 border-blue-500 shadow-lg'
                            : 'bg-blue-100 border-blue-500 shadow-lg'
                          : darkMode
                          ? 'bg-gray-700 border-gray-600 hover:bg-gray-650 hover:border-gray-500'
                          : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className={`font-bold text-2xl mb-2 ${
                            expandedAtributo === atributo.nome
                              ? darkMode ? 'text-blue-200' : 'text-blue-800'
                              : darkMode ? 'text-white' : 'text-gray-800'
                          }`}>
                            {atributo.nome}
                          </h4>
                          <p className={`text-sm leading-relaxed ${
                            expandedAtributo === atributo.nome
                              ? darkMode ? 'text-blue-100' : 'text-blue-700'
                              : darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {atributo.explicacao}
                          </p>
                        </div>
                        <ChevronRight
                          size={28}
                          className={`transition-transform flex-shrink-0 ml-4 ${
                            expandedAtributo === atributo.nome ? 'rotate-90' : ''
                          } ${
                            expandedAtributo === atributo.nome
                              ? darkMode ? 'text-blue-300' : 'text-blue-600'
                              : darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </button>

                    {/* Perícias expandidas em coluna */}
                    {expandedAtributo === atributo.nome && (
                      <div className={`mt-4 p-6 rounded-lg border-2 ${
                        darkMode
                          ? 'bg-gray-750 border-blue-600'
                          : 'bg-blue-50 border-blue-400'
                      } shadow-xl`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-full ${
                            darkMode ? 'bg-blue-800' : 'bg-blue-200'
                          }`}>
                            <Sparkles size={24} className={
                              darkMode ? 'text-blue-300' : 'text-blue-700'
                            } />
                          </div>
                          <h5 className={`font-bold text-xl ${
                            darkMode ? 'text-blue-200' : 'text-blue-900'
                          }`}>
                            Perícias de {atributo.nome}
                          </h5>
                        </div>

                        {/* Lista de Perícias em coluna */}
                        <div className="space-y-3">
                          {atributo.pericias.map((pericia, index) => (
                            <div
                              key={pericia.nome}
                              className={`p-4 rounded-lg ${
                                darkMode ? 'bg-gray-800' : 'bg-white'
                              } border ${
                                darkMode ? 'border-blue-700' : 'border-blue-300'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`mt-1 px-2 py-1 rounded-full text-xs font-bold ${
                                  darkMode ? 'bg-blue-700 text-blue-100' : 'bg-blue-200 text-blue-800'
                                }`}>
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h6 className={`font-bold text-lg mb-1 ${
                                    darkMode ? 'text-blue-200' : 'text-blue-900'
                                  }`}>
                                    {pericia.nome}
                                  </h6>
                                  <p className={`text-sm leading-relaxed ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                  }`}>
                                    {pericia.descricao}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default App
