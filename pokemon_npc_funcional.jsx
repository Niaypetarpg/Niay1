import { useState, useEffect } from 'react'
import { Camera, Plus, Minus, Crown, X, Moon, Sun, User, Lock, Sword, Heart, Search, Trash2, Smile } from 'lucide-react'
import pokedexData from './pokemonData'

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
  'Fogo': 'bg-gradient-to-r from-orange-500 to-red-600',
  'Água': 'bg-blue-900',
  'Planta': 'bg-green-700',
  'Elétrico': 'bg-yellow-400 text-gray-900',
  'Gelo': 'bg-blue-300 text-gray-900',
  'Lutador': 'bg-gradient-to-r from-pink-400 to-yellow-700',
  'Veneno': 'bg-gradient-to-r from-green-500 to-purple-600',
  'Terra': 'bg-yellow-700',
  'Voador': 'bg-gradient-to-r from-blue-400 to-white',
  'Psíquico': 'bg-gradient-to-r from-purple-300 to-purple-700',
  'Inseto': 'bg-gradient-to-r from-purple-500 to-green-500',
  'Pedra': 'bg-gray-500',
  'Fantasma': 'bg-gradient-to-r from-purple-700 to-black',
  'Dragão': 'bg-gradient-to-r from-blue-600 to-orange-500',
  'Sombrio': 'bg-black',
  'Metal': 'bg-gradient-to-r from-blue-400 to-gray-400',
  'Fada': 'bg-gradient-to-r from-pink-400 via-purple-400 via-purple-300 to-yellow-300'
}

// Lista de espécies Pokémon - gerada dinamicamente do pokemonData
const POKEMON_SPECIES = pokedexData.map(p => p.nome).sort()

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

  // Estado para visualização de informações do Pokémon
  const [showPokemonInfoModal, setShowPokemonInfoModal] = useState(false)
  const [viewingPokemon, setViewingPokemon] = useState(null)

  // Estado para modal de Dano/Cura de Pokémon
  const [showPokemonHPModal, setShowPokemonHPModal] = useState(false)
  const [selectedPokemonHP, setSelectedPokemonHP] = useState(null)
  const [selectedPokemonHPIndex, setSelectedPokemonHPIndex] = useState(null)
  const [hpAmount, setHpAmount] = useState('')

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

  const mestreAreas = ['Gerador Pokémon', 'Treinador NPC', 'Pokémon NPC', 'Enciclopédia M', 'Treinadores']
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
      isExotic: pokemonForm.isExotic
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
      isExotic: true
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
      isExotic: false
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
    pokemon.currentHP = Math.max(0, (pokemon.currentHP || 0) - damage)

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

  // Função para adicionar Pokémon gerado à lista de NPCs
  const addToNpcList = (pokemonId) => {
    const pokemon = npcPokemonList.find(p => p.id === pokemonId)
    if (pokemon && !pokemon.addedToNpc) {
      setNpcPokemon(prev => [...prev, pokemon])
      setNpcPokemonList(prev => prev.map(p =>
        p.id === pokemonId ? { ...p, addedToNpc: true } : p
      ))
    }
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
        } catch (e) {
          console.error('Erro ao carregar:', e)
        }
      }
      // Definir área inicial como Treinador
      setCurrentArea('Treinador')
    }
  }, [currentUser])

  // Salvar no LocalStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const key = `trainer_${currentUser.username}`
      const data = {
        level, image, classes, attributes, skills, currentHP,
        mainTeam, pcPokemon, pokedex
      }
      localStorage.setItem(key, JSON.stringify(data))
    }
  }, [level, image, classes, attributes, skills, currentHP, mainTeam, pcPokemon, pokedex, currentUser])

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
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyPress={e => e.key === 'Enter' && selectedUser && password === 'DnD7MarPkm' && (setCurrentUser(selectedUser), setSelectedUser(null), setPassword(''))} placeholder="Digite a senha" disabled={!selectedUser} className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800'} ${!selectedUser ? 'opacity-50 cursor-not-allowed' : ''}`} />
            </div>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">{error}</div>}
            <button onClick={() => password === 'DnD7MarPkm' ? (setCurrentUser(selectedUser), setSelectedUser(null), setPassword('')) : setError('Senha incorreta!')} disabled={!selectedUser || !password} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Entrar</button>
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
                    className={`p-4 rounded-lg border-2 ${
                      pokemon.addedToNpc
                        ? darkMode ? 'bg-green-900/30 border-green-600' : 'bg-green-50 border-green-400'
                        : darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    }`}
                  >
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
                      <div className="flex gap-1">
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
                    <button onClick={() => setShowHPModal(true)} className="flex items-center gap-1 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"><Sword size={14} /><Heart size={14} />Dano/Cura</button>
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
                  return <button key={idx} onClick={() => { setCurrentSlot(idx); setShowClassModal(true) }} className="p-4 rounded-lg border-2 hover:shadow-lg transition-all text-center font-semibold" style={{ backgroundColor: cls ? ci?.color + '40' : darkMode ? '#374151' : '#f3f4f6', color: cls ? ci?.color : darkMode ? '#9ca3af' : '#6b7280', borderColor: cls ? ci?.color : darkMode ? '#4b5563' : '#d1d5db' }}>{cls || 'Classe & Subclasse'}</button>
                })}
              </div>
            </div>

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
                            {pokemonImages[pokemon.id] && (
                              <img src={pokemonImages[pokemon.id]} alt={pokemon.nickname} className="w-20 h-20 object-cover rounded-lg border-2 border-blue-500" />
                            )}
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

                {/* 5. DESLOCAMENTO */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>5. Deslocamento</label>
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

                {/* 6. PESO E ALTURA */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>6. Peso (Kg)</label>
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

                {/* 7. LEALDADE */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>7. Lealdade</label>
                  <input
                    type="text"
                    value={pokemonEditForm.loyalty}
                    onChange={(e) => setPokemonEditForm({...pokemonEditForm, loyalty: e.target.value})}
                    className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                {/* 8. CAPACIDADES */}
                <div className="mb-6">
                  <label className={`block text-sm font-bold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>8. Capacidades</label>

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
                    <div><span className="font-semibold">Natureza:</span> {viewingPokemon.nature || '-'}</div>
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
                      <div><span className="font-semibold">Sabor Predileto:</span> {natures.find(n => n.nome === viewingPokemon.nature)?.sabor || '-'}</div>
                      <div><span className="font-semibold">Sabor que Não Gosta:</span> {natures.find(n => n.nome === viewingPokemon.nature)?.naoGosta || '-'}</div>
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
                        </div>
                        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{pokemon.species}</p>

                        <div className="flex gap-2 flex-wrap">
                          <button onClick={() => openEditPokemonModal(pokemon, 'pc', idx)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm font-semibold" title="Editar Pokémon">
                            Edição Pkm
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
                    <div><span className="font-semibold">Natureza:</span> {viewingPokemon.nature || '-'}</div>
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
                      <div><span className="font-semibold">Sabor Predileto:</span> {natures.find(n => n.nome === viewingPokemon.nature)?.sabor || '-'}</div>
                      <div><span className="font-semibold">Sabor que Não Gosta:</span> {natures.find(n => n.nome === viewingPokemon.nature)?.naoGosta || '-'}</div>
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
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                #{String(pokemon.dexNumber).padStart(4, '0')} • {pokemon.species} {pokemon.shiny && '✨'}
                              </p>
                              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Nível {pokemon.level}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeNpcPokemon(pokemon.id)}
                            className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600"
                            title="Remover NPC"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {/* Tipos */}
                        <div className="mb-2">
                          <h4 className={`text-xs font-semibold mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Tipos</h4>
                          <div className="flex gap-1">
                            {pokemon.types.map((type, idx) => (
                              <span key={idx} className="px-2 py-0.5 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold">
                                {type}
                              </span>
                            ))}
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
                          <div>
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pontos de Vida</p>
                            <p className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{pokemon.hp} PV</p>
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
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    )
  }

  // OUTRAS ÁREAS
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentArea}</h2>
            <div className="flex gap-2">
              <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
              <button onClick={() => { setCurrentUser(null); setCurrentArea('') }} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {(currentUser.type === 'mestre' ? mestreAreas : treinadorAreas).map(area => <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === currentArea ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>)}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Esta área está em desenvolvimento...</p>
        </div>
      </div>
    </div>
  )
}

export default App
