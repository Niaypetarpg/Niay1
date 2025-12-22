import { useState, useEffect } from 'react'
import { Camera, Plus, Minus, Crown, X, Moon, Sun, User, Lock } from 'lucide-react'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentArea, setCurrentArea] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const [trainerData, setTrainerData] = useState({
    image: '',
    level: 1,
    classes: ['', '', '', ''],
    mainTeam: [],
    pcPokemon: 0,
    pokedexCount: 0
  })

  const [showLevelModal, setShowLevelModal] = useState(false)
  const [showClassModal, setShowClassModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [currentSlot, setCurrentSlot] = useState(null)
  const [tempLevel, setTempLevel] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const correctPassword = 'DnD7MarPkm'

  const users = [
    { username: 'Mestre', type: 'mestre', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' },
    { username: 'Alocin', type: 'treinador', gradient: 'linear-gradient(90deg, #000080 0%, #000080 50%, #FFFFFF 50%, #FFFFFF 100%)' },
    { username: 'Lila', type: 'treinador', gradient: 'linear-gradient(90deg, #800080 0%, #800080 50%, #FF0000 50%, #FF0000 100%)' },
    { username: 'Ludovic', type: 'treinador', gradient: 'linear-gradient(90deg, #FF0000 0%, #FF0000 50%, #000000 50%, #000000 100%)' },
    { username: 'Noryat', type: 'treinador', gradient: 'linear-gradient(90deg, #000000 0%, #000000 50%, #FFFFFF 50%, #FFFFFF 100%)' },
    { username: 'Pedro', type: 'treinador', gradient: 'linear-gradient(90deg, #0000FF 0%, #0000FF 50%, #00FF00 50%, #00FF00 100%)' }
  ]

  const mestreAreas = ['Treinador NPC', 'Pokémon NPC', 'Enciclopédia M', 'Treinadores']
  const treinadorAreas = ['Treinador', 'PC', 'Pokédex', 'Mochila', 'Características & Talentos', 'Pokéloja', 'Enciclopédia']

  const classes = [
    { name: 'Artista', color: '#87CEEB', isMaster: true },
    { name: 'Beldade', color: '#87CEEB', isMaster: false },
    { name: 'Cativante', color: '#87CEEB', isMaster: false },
    { name: 'Coreógrafo', color: '#87CEEB', isMaster: false },
    { name: 'Descolado', color: '#87CEEB', isMaster: false },
    { name: 'Estilista', color: '#87CEEB', isMaster: false },
    { name: 'Nerd', color: '#87CEEB', isMaster: false },
    { name: 'Parrudo', color: '#87CEEB', isMaster: false },
    { name: 'Captor', color: '#FFA500', isMaster: true },
    { name: 'Artífice', color: '#FFA500', isMaster: false },
    { name: 'Colecionador', color: '#FFA500', isMaster: false },
    { name: 'Domador', color: '#FFA500', isMaster: false },
    { name: 'Engenheiro', color: '#FFA500', isMaster: false },
    { name: 'Ladrão', color: '#FFA500', isMaster: false },
    { name: 'Malabarista', color: '#FFA500', isMaster: false },
    { name: 'Pokébolista', color: '#FFA500', isMaster: false },
    { name: 'Criador', color: '#FFC0CB', isMaster: true },
    { name: 'Botânico', color: '#FFC0CB', isMaster: false },
    { name: 'Cozinheiro', color: '#FFC0CB', isMaster: false },
    { name: 'Cuidador', color: '#FFC0CB', isMaster: false },
    { name: 'Evolucionista', color: '#FFC0CB', isMaster: false },
    { name: 'Incubador', color: '#FFC0CB', isMaster: false },
    { name: 'Médico', color: '#FFC0CB', isMaster: false },
    { name: 'Tutor', color: '#FFC0CB', isMaster: false },
    { name: 'Guerreiro', color: '#B8860B', isMaster: true },
    { name: 'Artista Marcial', color: '#F5F5DC', isMaster: false },
    { name: 'Atleta', color: '#B8860B', isMaster: false },
    { name: 'Áugure', color: '#B8860B', isMaster: false },
    { name: 'Bandido', color: '#B8860B', isMaster: false },
    { name: 'Monge', color: '#B8860B', isMaster: false },
    { name: 'Ninja', color: '#B8860B', isMaster: false },
    { name: 'Soldado', color: '#B8860B', isMaster: false },
    { name: 'Místico', color: '#800080', isMaster: true },
    { name: 'Bardo', color: '#800080', isMaster: false },
    { name: 'Guardião', color: '#800080', isMaster: false },
    { name: 'Ilusionista', color: '#800080', isMaster: false },
    { name: 'Médium', color: '#800080', isMaster: false },
    { name: 'Orador', color: '#800080', isMaster: false },
    { name: 'Rúnico', color: '#800080', isMaster: false },
    { name: 'Xamã', color: '#800080', isMaster: false },
    { name: 'Pesquisador', color: '#00008B', isMaster: true },
    { name: 'Cientista', color: '#00008B', isMaster: false },
    { name: 'Fotógrafo', color: '#00008B', isMaster: false },
    { name: 'Hipnólogo', color: '#00008B', isMaster: false },
    { name: 'Observador', color: '#00008B', isMaster: false },
    { name: 'Ocultista', color: '#00008B', isMaster: false },
    { name: 'Petrologista', color: '#00008B', isMaster: false },
    { name: 'Professor', color: '#00008B', isMaster: false },
    { name: 'Psíquico', color: '#8B4513', isMaster: true },
    { name: 'Ardente', color: '#8B4513', isMaster: false },
    { name: 'Bruxo', color: '#8B4513', isMaster: false },
    { name: 'Célio', color: '#8B4513', isMaster: false },
    { name: 'Empático', color: '#8B4513', isMaster: false },
    { name: 'Nebuloso', color: '#8B4513', isMaster: false },
    { name: 'Terrulento', color: '#8B4513', isMaster: false },
    { name: 'Vidente', color: '#8B4513', isMaster: false },
    { name: 'Ranger', color: '#228B22', isMaster: true },
    { name: 'Aventureiro', color: '#228B22', isMaster: false },
    { name: 'Cavaleiro', color: '#228B22', isMaster: false },
    { name: 'Detetive', color: '#228B22', isMaster: false },
    { name: 'Guia', color: '#228B22', isMaster: false },
    { name: 'Oficial', color: '#228B22', isMaster: false },
    { name: 'Pactuário', color: '#228B22', isMaster: false },
    { name: 'Policial', color: '#228B22', isMaster: false },
    { name: 'Treinador', color: '#DC143C', isMaster: true },
    { name: 'Azarão', color: '#DC143C', isMaster: false },
    { name: 'Caçador', color: '#DC143C', isMaster: false },
    { name: 'Elementalista', color: '#DC143C', isMaster: false },
    { name: 'Especialista', color: '#DC143C', isMaster: false },
    { name: 'Estrategista', color: '#DC143C', isMaster: false },
    { name: 'Inquebrável', color: '#DC143C', isMaster: false },
    { name: 'Síncrono', color: '#DC143C', isMaster: false }
  ]

  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const saved = localStorage.getItem(`trainer_${currentUser.username}`)
      if (saved) setTrainerData(JSON.parse(saved))
    }
  }, [currentUser])

  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      localStorage.setItem(`trainer_${currentUser.username}`, JSON.stringify(trainerData))
    }
  }, [trainerData, currentUser])

  const handleUserSelect = (user) => {
    setSelectedUser(user)
    setError('')
  }

  const handleLogin = () => {
    if (password === correctPassword) {
      setCurrentUser(selectedUser)
      setSelectedUser(null)
      setPassword('')
      setError('')
    } else {
      setError('Senha incorreta!')
    }
  }

  const handleLogout = () => { 
    setCurrentUser(null)
    setCurrentArea('')
    setSelectedUser(null)
    setPassword('')
  }

  const updateLevel = (change) => setTrainerData(prev => ({ ...prev, level: Math.max(0, Math.min(50, prev.level + change)) }))
  
  const setLevel = () => {
    const newLevel = parseInt(tempLevel)
    if (newLevel >= 0 && newLevel <= 50) {
      setTrainerData(prev => ({ ...prev, level: newLevel }))
      setShowLevelModal(false)
      setTempLevel('')
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTrainerData(prev => ({ ...prev, image: reader.result }))
        setShowImageModal(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUrl = () => {
    if (imageUrl) {
      setTrainerData(prev => ({ ...prev, image: imageUrl }))
      setShowImageModal(false)
      setImageUrl('')
    }
  }

  // TELA DE LOGIN - BOTÕES MENORES, ANIMADOS, SENHA EMBAIXO
  if (!currentUser) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} flex items-center justify-center p-4`}>
        <style>{`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 3s ease infinite;
          }
        `}</style>
        
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8 w-full max-w-2xl`}>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2`}>Niaypeta Corp™</h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>O Professor Carvalho quer saber seu nome.</p>
          </div>

          <h2 className={`text-center text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Selecione o Usuário</h2>
          
          {/* BOTÕES MENORES E ANIMADOS - 2 COLUNAS */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {users.map((user) => (
              <button
                key={user.username}
                onClick={() => handleUserSelect(user)}
                className={`animated-gradient p-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center gap-2 ${
                  selectedUser?.username === user.username ? 'ring-4 ring-blue-400' : ''
                }`}
                style={{ background: user.gradient }}
              >
                <User size={20} />
                {user.username}
              </button>
            ))}
          </div>

          {/* SENHA EMBAIXO DOS BOTÕES */}
          <div>
            <h2 className={`text-center text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Senha</h2>
            <div className="relative mb-4">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && selectedUser && handleLogin()}
                placeholder="Digite a senha"
                disabled={!selectedUser}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 text-lg ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-800'
                } ${!selectedUser ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-center">
                {error}
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={!selectedUser || !password}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!currentArea) {
    const areas = currentUser.type === 'mestre' ? mestreAreas : treinadorAreas
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentUser.username} {currentUser.type === 'mestre' && '👑'}</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Sair</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button key={area} onClick={() => setCurrentArea(area)} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 text-sm font-semibold shadow-md">{area}</button>
              ))}
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

  if (currentUser.type === 'treinador' && currentArea === 'Treinador') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentUser.username}</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button onClick={() => setCurrentArea('')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Voltar</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {treinadorAreas.map((area) => (
                <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === 'Treinador' ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            <div className="flex items-start gap-6 mb-8">
              <div className="relative flex-shrink-0">
                {trainerData.image ? (
                  <img src={trainerData.image} alt="Treinador" className="w-32 h-32 object-cover rounded-lg border-4 border-blue-500" />
                ) : (
                  <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center border-4 border-gray-400">
                    <Camera size={48} className="text-gray-500" />
                  </div>
                )}
                <button onClick={() => setShowImageModal(true)} className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600">
                  <Camera size={20} />
                </button>
              </div>
              <div className="flex-1">
                <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>{currentUser.username}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Nível: {trainerData.level}</span>
                  <button onClick={() => updateLevel(-1)} className="p-1 bg-red-500 text-white rounded hover:bg-red-600"><Minus size={16} /></button>
                  <button onClick={() => { setTempLevel(trainerData.level.toString()); setShowLevelModal(true) }} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm font-semibold">Lvl</button>
                  <button onClick={() => updateLevel(1)} className="p-1 bg-green-500 text-white rounded hover:bg-green-600"><Plus size={16} /></button>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-lg"><div className="text-xs text-blue-600">Time Principal</div><div className="text-lg font-bold text-blue-800">{trainerData.mainTeam.length}/6</div></div>
                  <div className="bg-green-100 px-4 py-2 rounded-lg"><div className="text-xs text-green-600">PC</div><div className="text-lg font-bold text-green-800">{trainerData.pcPokemon}/1000</div></div>
                  <div className="bg-yellow-100 px-4 py-2 rounded-lg"><div className="text-xs text-yellow-600">Pokédex</div><div className="text-lg font-bold text-yellow-800">{trainerData.pokedexCount}</div></div>
                </div>
              </div>
            </div>
            <div>
              <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Classes & Subclasses</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trainerData.classes.map((cls, index) => {
                  const classInfo = classes.find(c => c.name === cls)
                  return (
                    <button key={index} onClick={() => { setCurrentSlot(index); setShowClassModal(true) }} className="p-4 rounded-lg border-2 hover:shadow-lg transition-all text-center font-semibold" style={{ backgroundColor: cls ? classInfo?.color + '40' : darkMode ? '#374151' : '#f3f4f6', color: cls ? classInfo?.color : darkMode ? '#9ca3af' : '#6b7280', borderColor: cls ? classInfo?.color : darkMode ? '#4b5563' : '#d1d5db' }}>
                      {cls || 'Classe & Subclasse'}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {showLevelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Definir Nível (0-50)</h3>
                <button onClick={() => setShowLevelModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <input type="number" min="0" max="50" value={tempLevel} onChange={(e) => setTempLevel(e.target.value)} className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-2xl font-bold ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
              <button onClick={setLevel} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">Confirmar</button>
            </div>
          </div>
        )}
        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adicionar Imagem</h3>
                <button onClick={() => setShowImageModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <div className="space-y-4">
                <div><label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Do Computador</label><input type="file" accept="image/*" onChange={handleImageUpload} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} /></div>
                <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>OU</div>
                <div><label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>URL da Imagem</label><input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://exemplo.com/imagem.jpg" className={`w-full px-4 py-2 border-2 rounded-lg mb-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`} /><button onClick={handleImageUrl} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Usar URL</button></div>
              </div>
            </div>
          </div>
        )}
        {showClassModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Selecionar Classe/Subclasse</h3>
                <button onClick={() => setShowClassModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
              </div>
              <div className="space-y-2">
                {classes.map((cls) => (
                  <button key={cls.name} onClick={() => selectClass(cls.name)} className="w-full p-3 rounded-lg text-left font-semibold hover:opacity-80 transition-opacity flex items-center gap-2" style={{ backgroundColor: cls.color + '60', color: cls.color, border: `2px solid ${cls.color}` }}>
                    {cls.isMaster && <Crown size={20} />}{cls.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const areas = currentUser.type === 'mestre' ? mestreAreas : treinadorAreas
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentArea}</h2>
            <div className="flex gap-2">
              <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setCurrentArea('')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Voltar</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {areas.map((area) => (
              <button key={area} onClick={() => setCurrentArea(area)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${area === currentArea ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white' : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{area}</button>
            ))}
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
