import { useState, useEffect } from 'react'
import { Camera, Plus, Minus, Crown, X, Moon, Sun, User, Lock, Sword, Heart, Search } from 'lucide-react'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentArea, setCurrentArea] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  // Estado do treinador - SIMPLES
  const [level, setLevel] = useState(1)
  const [image, setImage] = useState('')
  const [classes, setClasses] = useState(['', '', '', ''])
  const [attributes, setAttributes] = useState({
    saude: 10,
    ataque: 10,
    defesa: 10,
    ataqueEspecial: 10,
    defesaEspecial: 10,
    velocidade: 10
  })
  const [skills, setSkills] = useState({
    saude: [],
    ataque: [],
    defesa: [],
    ataqueEspecial: [],
    defesaEspecial: [],
    velocidade: []
  })
  const [currentHP, setCurrentHP] = useState(44)

  // Modais
  const [showLevelModal, setShowLevelModal] = useState(false)
  const [showClassModal, setShowClassModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [showHPModal, setShowHPModal] = useState(false)
  const [currentSlot, setCurrentSlot] = useState(null)
  const [tempLevel, setTempLevel] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [classSearch, setClassSearch] = useState('')
  const [hpValue, setHpValue] = useState('')

  const users = [
    { username: 'Mestre', type: 'mestre', gradient: 'linear-gradient(135deg, #FFD700, #FFA500, #FF8C00)' },
    { username: 'Alocin', type: 'treinador', gradient: 'linear-gradient(135deg, #000080, #4169E1, #87CEEB, #FFFFFF)' },
    { username: 'Lila', type: 'treinador', gradient: 'linear-gradient(135deg, #800080, #9370DB, #FF1493, #FF69B4)' },
    { username: 'Ludovic', type: 'treinador', gradient: 'linear-gradient(135deg, #8B0000, #DC143C, #FF6347, #2F4F4F)' },
    { username: 'Noryat', type: 'treinador', gradient: 'linear-gradient(135deg, #000000, #404040, #808080, #FFFFFF)' },
    { username: 'Pedro', type: 'treinador', gradient: 'linear-gradient(135deg, #0000CD, #4169E1, #00CED1, #32CD32)' }
  ]

  const mestreAreas = ['Treinador NPC', 'Pokémon NPC', 'Enciclopédia M', 'Treinadores']
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
    { name: 'Guerreiro', color: '#B8860B', isMaster: true }, { name: 'Artista Marcial', color: '#F5F5DC' },
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

  // SELEÇÃO DE ÁREA
  if (!currentArea) {
    const areas = currentUser.type === 'mestre' ? mestreAreas : treinadorAreas
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

  // ÁREA DO TREINADOR - RECONSTRUÍDA DO ZERO
  if (currentUser.type === 'treinador' && currentArea === 'Treinador') {
    const maxHP = getMaxHP()
    const displacement = getDisplacement()
    const evasion = getEvasion()
    const hpPercent = maxHP > 0 ? (currentHP / maxHP) * 100 : 0

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-900 via-purple-900 to-red-900'}`}>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{currentUser.username}</h2>
              <div className="flex gap-2">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => setCurrentArea('')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Voltar</button>
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
                <button onClick={() => setShowImageModal(true)} className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"><Camera size={20} /></button>
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
            <div className="grid md:grid-cols-2 gap-8">
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
          </div>
        </div>

        {/* MODAIS */}
        {showLevelModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Definir Nível (0-50)</h3>
              <button onClick={() => setShowLevelModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            <input type="number" min="0" max="50" value={tempLevel} onChange={e => setTempLevel(e.target.value)} className={`w-full px-4 py-3 border-2 rounded-lg mb-4 text-center text-2xl font-bold ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} />
            <button onClick={() => { const n = parseInt(tempLevel); if (n >= 0 && n <= 50) { setLevel(n); setShowLevelModal(false); setTempLevel('') } }} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">Confirmar</button>
          </div>
        </div>}

        {showHPModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
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

        {showImageModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-md w-full`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Adicionar Imagem</h3>
              <button onClick={() => setShowImageModal(false)} className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'}><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <div><label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Do Computador</label><input type="file" accept="image/*" onChange={e => { const f = e.target.files[0]; if (f) { const r = new FileReader(); r.onloadend = () => { setImage(r.result); setShowImageModal(false) }; r.readAsDataURL(f) } }} className={`w-full px-4 py-2 border-2 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`} /></div>
              <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>OU</div>
              <div><label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>URL da Imagem</label><input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://exemplo.com/img.jpg" className={`w-full px-4 py-2 border-2 rounded-lg mb-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-500' : 'border-gray-300'}`} /><button onClick={() => { if (imageUrl) { setImage(imageUrl); setShowImageModal(false); setImageUrl('') } }} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Usar URL</button></div>
            </div>
          </div>
        </div>}

        {showClassModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`}>
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
              <button onClick={() => setCurrentArea('')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Voltar</button>
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
