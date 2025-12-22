const { useState, useEffect } = React;
const { User, Lock, LogOut, Camera, Crown, Sword, Heart, Moon, Sun, Plus, Minus, Trash2 } = lucide;

const App = () => {
  // Estados principais
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUsername, setSelectedUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentArea, setCurrentArea] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  // Estados do treinador
  const [trainerData, setTrainerData] = useState({
    image: '',
    level: 1,
    hp: { current: 50, max: 50 },
    classes: ['', '', '', ''],
    attributes: {
      forca: 0, destreza: 0, constituicao: 0,
      inteligencia: 0, sabedoria: 0, carisma: 0
    },
    mainTeam: [],
    pcPokemon: 0,
    pokedexCount: 0
  });

  // Modais
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [showHPModal, setShowHPModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [showAddPokemonModal, setShowAddPokemonModal] = useState(false);
  const [currentSlot, setCurrentSlot] = useState(null);
  const [tempLevel, setTempLevel] = useState('');
  const [hpAction, setHpAction] = useState('');
  const [hpValue, setHpValue] = useState('');
  const [pokemonForm, setPokemonForm] = useState({
    nickname: '',
    species: '',
    level: 1,
    pokeball: ''
  });

  const users = [
    { username: 'Mestre', type: 'mestre' },
    { username: 'Alocin', type: 'treinador' },
    { username: 'Lila', type: 'treinador' },
    { username: 'Ludovic', type: 'treinador' },
    { username: 'Noryat', type: 'treinador' },
    { username: 'Pedro', type: 'treinador' }
  ];

  const correctPassword = 'DnD7MarPkm';

  const mestreAreas = ['Treinador NPC', 'Pokémon NPC', 'Enciclopédia M', 'Treinadores'];
  const treinadorAreas = ['Treinador', 'PC', 'Pokédex', 'Mochila', 'Características & Talentos', 'Pokéloja', 'Enciclopédia'];

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
  ];

  // Carregar dados do localStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      const saved = localStorage.getItem(`trainer_${currentUser.username}`);
      if (saved) {
        setTrainerData(JSON.parse(saved));
      }
    }
  }, [currentUser]);

  // Salvar dados no localStorage
  useEffect(() => {
    if (currentUser?.type === 'treinador') {
      localStorage.setItem(`trainer_${currentUser.username}`, JSON.stringify(trainerData));
    }
  }, [trainerData, currentUser]);

  const handleLogin = () => {
    if (password === correctPassword) {
      const user = users.find(u => u.username === selectedUsername);
      setCurrentUser(user);
      setError('');
      setPassword('');
    } else {
      setError('Senha incorreta!');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentArea('');
    setSelectedUsername('');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTrainerData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateLevel = (change) => {
    setTrainerData(prev => ({
      ...prev,
      level: Math.max(1, Math.min(50, prev.level + change))
    }));
  };

  const setLevel = () => {
    const newLevel = parseInt(tempLevel);
    if (newLevel >= 1 && newLevel <= 50) {
      setTrainerData(prev => ({ ...prev, level: newLevel }));
      setShowLevelModal(false);
      setTempLevel('');
    }
  };

  const handleHPAction = () => {
    const value = parseInt(hpValue);
    if (value && value > 0) {
      setTrainerData(prev => {
        let newHP = prev.hp.current;
        if (hpAction === 'damage') {
          newHP = Math.max(0, newHP - value);
        } else {
          newHP = Math.min(prev.hp.max, newHP + value);
        }
        return { ...prev, hp: { ...prev.hp, current: newHP } };
      });
      setShowHPModal(false);
      setHpValue('');
    }
  };

  const selectClass = (className) => {
    setTrainerData(prev => {
      const newClasses = [...prev.classes];
      newClasses[currentSlot] = className;
      return { ...prev, classes: newClasses };
    });
    setShowClassModal(false);
  };

  const addPokemon = () => {
    if (pokemonForm.species && trainerData.mainTeam.length < 6) {
      setTrainerData(prev => ({
        ...prev,
        mainTeam: [...prev.mainTeam, { ...pokemonForm }]
      }));
      setPokemonForm({ nickname: '', species: '', level: 1, pokeball: '' });
      setShowAddPokemonModal(false);
    }
  };

  const getModifier = (value) => {
    const mod = Math.floor((value - 10) / 2);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  const calculateDisplacement = (dex) => {
    const mod = Math.floor((dex - 10) / 2);
    return {
      caminhada: 6 + mod,
      natacao: Math.floor((6 + mod) / 2),
      escalada: Math.floor((6 + mod) / 2)
    };
  };

  const calculateEvasion = (dex) => {
    const mod = Math.floor((dex - 10) / 2);
    return {
      fisica: 10 + mod,
      especial: 10 + mod,
      velocidade: 10 + mod
    };
  };

  const displacements = calculateDisplacement(trainerData.attributes.destreza);
  const evasions = calculateEvasion(trainerData.attributes.destreza);

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
    );
  }

  // Tela de seleção de área
  if (!currentArea) {
    const areas = currentUser.type === 'mestre' ? mestreAreas : treinadorAreas;
    
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
    );
  }

  // Área do Treinador
  if (currentUser.type === 'treinador' && currentArea === 'Treinador') {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'} p-4`}>
        <div className="max-w-7xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
            {/* Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b-2">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Treinador: {currentUser.username}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setCurrentArea('')}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                  Voltar
                </button>
              </div>
            </div>

            {/* Imagem e Vida */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b-2">
              <div>
                <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                  Foto do Treinador
                </label>
                <div className="relative">
                  {trainerData.image ? (
                    <img src={trainerData.image} alt="Treinador" className="w-full h-64 object-cover rounded-lg" />
                  ) : (
                    <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Camera size={48} className="text-gray-500" />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Nível: {trainerData.level}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateLevel(-1)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <Minus size={20} />
                    </button>
                    <button
                      onClick={() => {
                        setTempLevel(trainerData.level.toString());
                        setShowLevelModal(true);
                      }}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                      Lvl
                    </button>
                    <button
                      onClick={() => updateLevel(1)}
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      HP: {trainerData.hp.current}/{trainerData.hp.max}
                    </span>
                    <button
                      onClick={() => setShowHPModal(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <Heart size={20} />
                      HP
                    </button>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-6">
                    <div
                      className="bg-green-500 h-full rounded-full transition-all"
                      style={{ width: `${(trainerData.hp.current / trainerData.hp.max) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-4 rounded-lg text-center`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Time Principal</div>
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {trainerData.mainTeam.length}/6
                    </div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-green-100'} p-4 rounded-lg text-center`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>PC</div>
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {trainerData.pcPokemon}/1000
                    </div>
                  </div>
                  <div className={`${darkMode ? 'bg-gray-700' : 'bg-yellow-100'} p-4 rounded-lg text-center`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pokédex</div>
                    <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {trainerData.pokedexCount}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Classes */}
            <div className="mb-8 pb-8 border-b-2">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Classes & Subclasses
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trainerData.classes.map((cls, index) => {
                  const classInfo = classes.find(c => c.name === cls);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlot(index);
                        setShowClassModal(true);
                      }}
                      className="p-4 rounded-lg border-2 hover:border-blue-600 transition-colors"
                      style={{
                        backgroundColor: cls ? classInfo?.color + '20' : 'transparent',
                        color: cls ? classInfo?.color : darkMode ? '#fff' : '#000',
                        borderColor: cls ? classInfo?.color : '#d1d5db'
                      }}
                    >
                      {cls || 'Classe & Subclasse'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Atributos */}
            <div className="mb-8 pb-8 border-b-2">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Atributos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(trainerData.attributes).map(([key, value]) => (
                  <div key={key} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg`}>
                    <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2 capitalize`}>
                      {key}
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setTrainerData(prev => ({
                          ...prev,
                          attributes: { ...prev.attributes, [key]: Math.max(0, value - 1) }
                        }))}
                        className="p-1 bg-red-500 text-white rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {value} ({getModifier(value)})
                      </div>
                      <button
                        onClick={() => setTrainerData(prev => ({
                          ...prev,
                          attributes: { ...prev.attributes, [key]: value + 1 }
                        }))}
                        className="p-1 bg-green-500 text-white rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deslocamentos */}
            <div className="mb-8 pb-8 border-b-2">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Deslocamentos
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-600'} mb-2`}>Caminhada</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                    {displacements.caminhada}m
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-cyan-900' : 'bg-cyan-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-cyan-200' : 'text-cyan-600'} mb-2`}>Natação</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-cyan-800'}`}>
                    {displacements.natacao}m
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-indigo-200' : 'text-indigo-600'} mb-2`}>Escalada</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-indigo-800'}`}>
                    {displacements.escalada}m
                  </div>
                </div>
              </div>
            </div>

            {/* Evasão */}
            <div className="mb-8 pb-8 border-b-2">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Evasão
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className={`${darkMode ? 'bg-red-900' : 'bg-red-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-red-200' : 'text-red-600'} mb-2`}>Física</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-red-800'}`}>
                    {evasions.fisica}
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-purple-900' : 'bg-purple-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-purple-200' : 'text-purple-600'} mb-2`}>Especial</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-purple-800'}`}>
                    {evasions.especial}
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-green-900' : 'bg-green-100'} p-4 rounded-lg text-center`}>
                  <div className={`text-sm ${darkMode ? 'text-green-200' : 'text-green-600'} mb-2`}>Velocidade</div>
                  <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-green-800'}`}>
                    {evasions.velocidade}
                  </div>
                </div>
              </div>
            </div>

            {/* Time Principal */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Time Principal ({trainerData.mainTeam.length}/6)
                </h3>
                <button
                  onClick={() => setShowAddPokemonModal(true)}
                  disabled={trainerData.mainTeam.length >= 6}
                  className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed border-4 border-black"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-red-500 to-white border-4 border-black" />
                  <span className="text-gray-800">Adicionar Pkm</span>
                </button>
              </div>

              <div className="space-y-4">
                {[...Array(6)].map((_, index) => {
                  const pokemon = trainerData.mainTeam[index];
                  return (
                    <div
                      key={index}
                      className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg border-2 ${
                        pokemon ? 'border-blue-500' : 'border-gray-300'
                      }`}
                    >
                      {pokemon ? (
                        <div className="flex items-center justify-between">
                          <div>
                            <div className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {pokemon.nickname || pokemon.species}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {pokemon.species} - Lv. {pokemon.level} - {pokemon.pokeball}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setTrainerData(prev => ({
                                ...prev,
                                mainTeam: prev.mainTeam.filter((_, i) => i !== index)
                              }));
                            }}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ) : (
                        <div className={`text-center py-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          Slot Vazio
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Nível */}
        {showLevelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Definir Nível
              </h3>
              <input
                type="number"
                min="1"
                max="50"
                value={tempLevel}
                onChange={(e) => setTempLevel(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 text-center text-2xl font-bold"
              />
              <div className="flex gap-2">
                <button
                  onClick={setLevel}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => setShowLevelModal(false)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de HP */}
        {showHPModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Alterar HP
              </h3>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setHpAction('damage')}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    hpAction === 'damage' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Dano
                </button>
                <button
                  onClick={() => setHpAction('heal')}
                  className={`flex-1 py-3 rounded-lg font-semibold ${
                    hpAction === 'heal' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Cura
                </button>
              </div>
              <input
                type="number"
                min="1"
                value={hpValue}
                onChange={(e) => setHpValue(e.target.value)}
                placeholder="Valor"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 text-center text-2xl font-bold"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleHPAction}
                  disabled={!hpAction || !hpValue}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold disabled:opacity-50"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => {
                    setShowHPModal(false);
                    setHpAction('');
                    setHpValue('');
                  }}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Classes */}
        {showClassModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Selecionar Classe/Subclasse
              </h3>
              <div className="space-y-2">
                {classes.map((cls) => (
                  <button
                    key={cls.name}
                    onClick={() => selectClass(cls.name)}
                    className="w-full p-4 rounded-lg text-left font-semibold hover:opacity-80 transition-opacity flex items-center"
                    style={{ backgroundColor: cls.color + '40', color: cls.color }}
                  >
                    {cls.isMaster && <Crown className="inline mr-2" size={20} />}
                    {cls.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowClassModal(false)}
                className="w-full mt-4 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}

        {/* Modal Adicionar Pokémon */}
        {showAddPokemonModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                Adicionar Pokémon
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={pokemonForm.nickname}
                  onChange={(e) => setPokemonForm({...pokemonForm, nickname: e.target.value})}
                  placeholder="Apelido"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={pokemonForm.species}
                  onChange={(e) => setPokemonForm({...pokemonForm, species: e.target.value})}
                  placeholder="Espécie"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
                <input
                  type="number"
                  value={pokemonForm.level}
                  onChange={(e) => setPokemonForm({...pokemonForm, level: parseInt(e.target.value)})}
                  placeholder="Nível"
                  min="1"
                  max="100"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={pokemonForm.pokeball}
                  onChange={(e) => setPokemonForm({...pokemonForm, pokeball: e.target.value})}
                  placeholder="Pokébola"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={addPokemon}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold"
                >
                  Adicionar
                </button>
                <button
                  onClick={() => setShowAddPokemonModal(false)}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Outras áreas
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
            Esta área está em desenvolvimento...
          </p>
        </div>
      </div>
    </div>
  );
};

// Renderizar o app
ReactDOM.render(<App />, document.getElementById('root'));
