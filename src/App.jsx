import { useState, useEffect } from 'react'
import { User, Lock, LogOut, Camera, Crown, Plus, Minus, Trash2, Heart, Moon, Sun } from 'lucide-react'

function App() {
  // Estados principais
  const [currentUser, setCurrentUser] = useState(null)
  const [selectedUsername, setSelectedUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [currentArea, setCurrentArea] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  
  // Estados do treinador
  const [trainerData, setTrainerData] = useState({
    image: '',
    level: 1,
    hp: { current: 50, max: 50 },
    classes: ['', '', '', ''],
    attributes: {
      forca: 0,
      destreza: 0,
      constituicao: 0,
      inteligencia: 0,
      sabedoria: 0,
      carisma: 0
    },
    mainTeam: [],
    pcPokemon: 0,
    pokedexCount: 0
  })

  // Modais
  const [showLevelModal, setShowLevelModal] = useState(false)
  const [showHPModal, setShowHPModal] = useState(false)
  const [showClassModal, setShowClassModal] = useState(false)
  const [showAddPokemonModal, setShowAddPokemonModal] = useState(false)
  const [currentSlot, setCurrentSlot] = useState(null)
  const [tempLevel, setTempLevel] = useState('')
  const [hpAction, setHpAction] = useState('')
  const [hpValue, setHpValue] = useState('')
  const [pokemonForm, setPokemonForm] = useState({
    nickname: '',
    species: '',
    level: 1,
    pokeball: ''
  })

  const users = [
    { username: 'Mestre', type: 'mestre' },
    { username: 'Alocin', type: 'treinador' },
    { username: 'Lila', type: 'treinador' },
    { username: 'Ludovic', type: 'treinador' },
    { username: 'Noryat', type: 'treinador' },
    { username: 'Pedro', type: 'treinador' }
  ]

  const correctPassword = 'DnD7MarPkm'

  const mestreAreas = ['Treinador NPC', 'Pokémon NPC', 'Enciclopédia M', 'Treinadores']
  const treinadorAreas = ['Treinador', 'PC', 'Pokédex', 'Mochila', 'Características & Talentos', 'Pokéloja', 'Enciclopédia']

  const classes = [
    { name: 'Ace Trainer', color: '#FFD700', isMaster: true },
    { name: 'Acrobata', color: '#FF1493', isMaster: false },
    { name: 'Alpinista', color: '#8B4513', isMaster: false },
    { name: 'Artista Marcial', color: '#DC143C', isMaster: true },
    { name: 'Boxeador', color: '#FF4500', isMaster: false },
    { name: 'Lutador de Caratê', color: '#FF6347', isMaster: false },
    { name: 'Campeão de Kalos', color: '#4169E1', isMaster: true },
    { name: 'Capturista', color: '#32CD32', isMaster: true },
    { name: 'Caçador de Bugs', color: '#9ACD32', isMaster: false },
    { name: 'Collector', color: '#FFD700', isMaster: false },
    { name: 'Coordenador', color: '#FF69B4', isMaster: true },
    { name: 'Dançarino', color: '#DA70D6', isMaster: false },
    { name: 'Idol', color: '#FFB6C1', isMaster: false },
    { name: 'Especialista', color: '#8A2BE2', isMaster: true },
    { name: 'Pescador', color: '#4682B4', isMaster: false },
    { name: 'Nadador', color: '#00CED1', isMaster: false }
  ]

  // Carregar dados do localStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const saved = localStorage.getItem(`trainer_${currentUser.username}`)
      if (saved) {
        setTrainerData(JSON.parse(saved))
      }
    }
  }, [currentUser])

  // Salvar dados no localStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      localStorage.setItem(`trainer_${currentUser.username}`, JSON.stringify(trainerData))
    }
  }, [trainerData, currentUser])

  const handleLogin = () => {
    if (password === correctPassword) {
      const user = users.find(u => u.username === selectedUsername)
      setCurrentUser(user)
      setError('')
      setPassword('')
    } else {
      setError('Senha incorreta!')
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setCurrentArea('')
    setSelectedUsername('')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTrainerData(prev => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const updateLevel = (change) => {
    setTrainerData(prev => ({
      ...prev,
      level: Math.max(1, Math.min(50, prev.level + change))
    }))
  }

  const setLevel = () => {
    const newLevel = parseInt(tempLevel)
    if (newLevel >= 1 && newLevel <= 50) {
      setTrainerData(prev => ({ ...prev, level: newLevel }))
      setShowLevelModal(false)
      setTempLevel('')
    }
  }

  const handleHPAction = () => {
    const value = parseInt(hpValue)
    if (value && value > 0) {
      setTrainerData(prev => {
        let newHP = prev.hp.current
        if (hpAction === 'damage') {
          newHP = Math.max(0, newHP - value)
        } else {
          newHP = Math.min(prev.hp.max, newHP + value)
        }
        return { ...prev, hp: { ...prev.hp, current: newHP } }
      })
      setShowHPModal(false)
      setHpValue('')
    }
  }

  const selectClass = (className) => {
    setTrainerData(prev => {
      const newClasses = [...prev.classes]
      newClasses[currentSlot] = className
      return { ...prev, classes: newClasses }
    })
    setShowClassModal(false)
  }

  const addPokemon = () => {
    if (pokemonForm.species && trainerData.mainTeam.length < 6) {
      setTrainerData(prev => ({
        ...prev,
        mainTeam: [...prev.mainTeam, { ...pokemonForm }]
      }))
      setPokemonForm({ nickname: '', species: '', level: 1, pokeball: '' })
      setShowAddPokemonModal(false)
    }
  }

  const getModifier = (value) => {
    const mod = Math.floor((value - 10) / 2)
    return mod >= 0 ? `+${mod}` : `${mod}`
  }

  const calculateDisplacement = (dex) => {
    const mod = Math.floor((dex - 10) / 2)
    return {
      caminhada: 6 + mod,
      natacao: Math.floor((6 + mod) / 2),
      escalada: Math.floor((6 + mod) / 2)
    }
  }

  const calculateEvasion = (dex) => {
    const mod = Math.floor((dex - 10) / 2)
    return {
      fisica: 10 + mod,
      especial: 10 + mod,
      velocidade: 10 + mod
    }
  }

  const displacements = calculateDisplacement(trainerData.attributes.destreza)
  const evasions = calculateEvasion(trainerData.attributes.destreza)

  // Tela de Login
  if (!currentUser) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} flex items-center justify-center p-4`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 w-full max-w-md`}>
          <div className="text-center mb-8">
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Niaypeta Corp™</h1>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Sistema de Gerenciamento RPG Pokémon</p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 flex items-center`}>
                <User className="inline mr-2" size={16} />
                Selecione o Usuário
              </label>
              <select
                value={selectedUsername}
                onChange={(e) => setSelectedUsername(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                } focus:border-blue-500 focus:outline-none`}
              >
                <option value="">Escolha uma conta...</option>
                {users.map(user => (
                  <option key={user.username} value={user.username}>
                    {user.username} {user.type === 'mestre' && '👑'}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 flex items-center`}>
                <Lock className="inline mr-2" size={16} />
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                placeholder="Digite a senha"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                } focus:border-blue-500 focus:outline-none`}
              />
            </div>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <button
            onClick={handleLogin}
            disabled={!selectedUsername || !password}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Entrar
          </button>
        </div>
      </div>
    )
  }

  // Tela de seleção de área
  if (!currentArea) {
    const areas = currentUser.type === 'mestre' ? mestreAreas : treinadorAreas
    
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} p-4`}>
        <div className="max-w-6xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
                  {currentUser.type === 'mestre' && <Crown className="inline mr-2 text-yellow-500" />}
                  {currentUser.username}
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  Conta: {currentUser.type === 'mestre' ? 'Mestre' : 'Treinador'}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <LogOut size={20} />
                  Sair
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setCurrentArea(area)}
                  className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span className="text-xl font-semibold">{area}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Área do Treinador (simplificada - vou criar componentes separados depois)
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} p-4`}>
      <div className="max-w-7xl mx-auto">
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {currentArea}
            </h2>
            <button
              onClick={() => setCurrentArea('')}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Voltar
            </button>
          </div>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Área em desenvolvimento...
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
