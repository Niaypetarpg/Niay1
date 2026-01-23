// Firebase Service - Funções de persistência para o PokeApp RPG
import { database } from './firebase'
import { ref, set, get, onValue, off } from 'firebase/database'

// ==================== FUNÇÕES AUXILIARES ====================

// Remover valores undefined recursivamente de um objeto (Firebase não aceita undefined)
const removeUndefined = (obj) => {
  if (obj === null || obj === undefined) return null
  if (Array.isArray(obj)) {
    return obj.map(item => removeUndefined(item))
  }
  if (typeof obj === 'object') {
    const cleaned = {}
    for (const key in obj) {
      const value = obj[key]
      if (value !== undefined) {
        cleaned[key] = removeUndefined(value)
      }
    }
    return cleaned
  }
  return obj
}

// Sanitizar chave para Firebase (substitui caracteres inválidos)
const sanitizeKey = (key) => {
  return key.replace(/\./g, '_DOT_').replace(/\//g, '_SLASH_').replace(/#/g, '_HASH_').replace(/\$/g, '_DOLLAR_').replace(/\[/g, '_LBRACKET_').replace(/\]/g, '_RBRACKET_')
}

// Restaurar chave original (reverte sanitização)
const unsanitizeKey = (key) => {
  return key.replace(/_DOT_/g, '.').replace(/_SLASH_/g, '/').replace(/_HASH_/g, '#').replace(/_DOLLAR_/g, '$').replace(/_LBRACKET_/g, '[').replace(/_RBRACKET_/g, ']')
}

// Sanitizar todas as chaves de um objeto
const sanitizeKeys = (obj) => {
  if (!obj || typeof obj !== 'object') return obj
  const result = {}
  for (const key in obj) {
    result[sanitizeKey(key)] = obj[key]
  }
  return result
}

// Restaurar todas as chaves de um objeto
const unsanitizeKeys = (obj) => {
  if (!obj || typeof obj !== 'object') return obj
  const result = {}
  for (const key in obj) {
    result[unsanitizeKey(key)] = obj[key]
  }
  return result
}

// ==================== FUNÇÕES GENÉRICAS ====================

// Salvar dados no Firebase (remove undefined automaticamente)
export const saveToFirebase = async (path, data) => {
  try {
    const cleanedData = removeUndefined(data)
    await set(ref(database, path), cleanedData)
    return true
  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error)
    return false
  }
}

// Carregar dados do Firebase (uma vez)
export const loadFromFirebase = async (path, defaultValue = null) => {
  try {
    const snapshot = await get(ref(database, path))
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return defaultValue
  } catch (error) {
    console.error('Erro ao carregar do Firebase:', error)
    return defaultValue
  }
}

// Escutar mudanças em tempo real
export const subscribeToFirebase = (path, callback) => {
  const dbRef = ref(database, path)
  onValue(dbRef, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() : null)
  })
  // Retorna função para cancelar a inscrição
  return () => off(dbRef)
}

// ==================== FUNÇÕES ESPECÍFICAS ====================

// --- TREINADORES ---

// Salvar dados do treinador
export const saveTrainerData = async (username, data) => {
  return saveToFirebase(`trainers/${username}`, data)
}

// Carregar dados do treinador
export const loadTrainerData = async (username) => {
  return loadFromFirebase(`trainers/${username}`, null)
}

// Escutar mudanças no treinador
export const subscribeToTrainer = (username, callback) => {
  return subscribeToFirebase(`trainers/${username}`, callback)
}

// --- MESTRE ---

// Salvar configuração do mestre
export const saveMestreConfig = async (data) => {
  return saveToFirebase('mestre/config', data)
}

// Carregar configuração do mestre
export const loadMestreConfig = async () => {
  return loadFromFirebase('mestre/config', null)
}

// --- NPCs ---

// Salvar NPCs do mestre
export const saveNpcTrainers = async (username, npcs) => {
  return saveToFirebase(`npcTrainers/${username}`, npcs)
}

// Carregar NPCs do mestre
export const loadNpcTrainers = async (username) => {
  return loadFromFirebase(`npcTrainers/${username}`, [])
}

// --- ESPÉCIES EXÓTICAS ---

// Salvar espécies exóticas globais
export const saveGlobalExoticSpecies = async (species) => {
  return saveToFirebase('globalExoticSpecies', species)
}

// Carregar espécies exóticas globais
export const loadGlobalExoticSpecies = async () => {
  return loadFromFirebase('globalExoticSpecies', [])
}

// Escutar mudanças nas espécies exóticas
export const subscribeToGlobalExoticSpecies = (callback) => {
  return subscribeToFirebase('globalExoticSpecies', (data) => {
    callback(data || [])
  })
}

// --- BATALHA ---

// Salvar dados de batalha
export const saveBattleData = async (data) => {
  return saveToFirebase('battle', data)
}

// Carregar dados de batalha
export const loadBattleData = async () => {
  return loadFromFirebase('battle', {
    trainers: [],
    pokemon: [],
    currentTrainerTurn: 0,
    currentPokemonTurn: 0,
    pokemonConditions: {},
    trainerStages: {},
    pokemonStages: {}
  })
}

// Escutar mudanças na batalha (tempo real)
export const subscribeToBattle = (callback) => {
  return subscribeToFirebase('battle', (data) => {
    callback(data || {
      trainers: [],
      pokemon: [],
      currentTrainerTurn: 0,
      currentPokemonTurn: 0,
      pokemonConditions: {},
      trainerStages: {},
      pokemonStages: {}
    })
  })
}

// --- STAGES (separado para sincronização em tempo real) ---
// NOTA: As chaves são sanitizadas porque IDs contêm "." que é inválido no Firebase

// Salvar stages de pokémon (sanitiza chaves antes de salvar)
export const savePokemonStages = async (stages) => {
  return saveToFirebase('battleStages/pokemon', sanitizeKeys(stages))
}

// Salvar stages de treinador (sanitiza chaves antes de salvar)
export const saveTrainerStages = async (stages) => {
  return saveToFirebase('battleStages/trainer', sanitizeKeys(stages))
}

// Carregar stages de pokémon (restaura chaves após carregar)
export const loadPokemonStages = async () => {
  const data = await loadFromFirebase('battleStages/pokemon', {})
  return unsanitizeKeys(data)
}

// Carregar stages de treinador (restaura chaves após carregar)
export const loadTrainerStages = async () => {
  const data = await loadFromFirebase('battleStages/trainer', {})
  return unsanitizeKeys(data)
}

// Escutar mudanças nos stages de pokémon (tempo real, restaura chaves)
export const subscribeToPokemonStages = (callback) => {
  return subscribeToFirebase('battleStages/pokemon', (data) => {
    callback(unsanitizeKeys(data) || {})
  })
}

// Escutar mudanças nos stages de treinador (tempo real, restaura chaves)
export const subscribeToTrainerStages = (callback) => {
  return subscribeToFirebase('battleStages/trainer', (data) => {
    callback(unsanitizeKeys(data) || {})
  })
}

// --- CHAT ---

// Salvar mensagens do chat
export const saveChatMessages = async (messages) => {
  return saveToFirebase('chat/messages', messages)
}

// Carregar mensagens do chat
export const loadChatMessages = async () => {
  return loadFromFirebase('chat/messages', [])
}

// Escutar mudanças no chat (tempo real)
export const subscribeToChatMessages = (callback) => {
  return subscribeToFirebase('chat/messages', (data) => {
    callback(data || [])
  })
}

// --- INTERLÚDIO ---

// Salvar dados do interlúdio
export const saveInterludioData = async (data) => {
  return saveToFirebase('interludio', data)
}

// Carregar dados do interlúdio
export const loadInterludioData = async () => {
  return loadFromFirebase('interludio', {
    players: [],
    combateMode: false,
    combateVotes: {},
    concursoMode: false,
    concursoVotes: {}
  })
}

// Escutar mudanças no interlúdio (tempo real)
export const subscribeToInterludio = (callback) => {
  return subscribeToFirebase('interludio', (data) => {
    callback(data || {
      players: [],
      combateMode: false,
      combateVotes: {},
      concursoMode: false,
      concursoVotes: {}
    })
  })
}

// --- POKÉLOJA (itens ocultos) ---

// Salvar itens ocultos da Pokéloja
export const saveHiddenPokelojaItems = async (items) => {
  return saveToFirebase('pokeloja/hiddenItems', items)
}

// Carregar itens ocultos da Pokéloja
export const loadHiddenPokelojaItems = async () => {
  return loadFromFirebase('pokeloja/hiddenItems', [])
}

// Escutar mudanças nos itens ocultos da Pokéloja (tempo real)
export const subscribeToHiddenPokelojaItems = (callback) => {
  return subscribeToFirebase('pokeloja/hiddenItems', (data) => {
    callback(data || [])
  })
}

// --- POKÉLOJA (preços customizados) ---

// Salvar preços customizados da Pokéloja
export const saveCustomPrices = async (prices) => {
  return saveToFirebase('pokeloja/customPrices', prices)
}

// Carregar preços customizados da Pokéloja
export const loadCustomPrices = async () => {
  return loadFromFirebase('pokeloja/customPrices', {})
}

// Escutar mudanças nos preços customizados da Pokéloja (tempo real)
export const subscribeToCustomPrices = (callback) => {
  return subscribeToFirebase('pokeloja/customPrices', (data) => {
    callback(data || {})
  })
}

// --- VTT (Virtual Tabletop) ---

// Salvar dados do VTT
export const saveVTTData = async (data) => {
  return saveToFirebase('vtt/data', data)
}

// Carregar dados do VTT
export const loadVTTData = async () => {
  return loadFromFirebase('vtt/data', null)
}

// Escutar mudanças no VTT (tempo real)
export const subscribeToVTT = (callback) => {
  return subscribeToFirebase('vtt/data', (data) => {
    callback(data || {})
  })
}
