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

// Sanitizar todas as chaves recursivamente (incluindo objetos aninhados)
const sanitizeKeysRecursive = (obj) => {
  if (obj === null || obj === undefined) return obj
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeKeysRecursive(item))
  }
  if (typeof obj === 'object') {
    const result = {}
    for (const key in obj) {
      const sanitizedKey = sanitizeKey(key)
      result[sanitizedKey] = sanitizeKeysRecursive(obj[key])
    }
    return result
  }
  return obj
}

// Restaurar todas as chaves recursivamente
const unsanitizeKeysRecursive = (obj) => {
  if (obj === null || obj === undefined) return obj
  if (Array.isArray(obj)) {
    return obj.map(item => unsanitizeKeysRecursive(item))
  }
  if (typeof obj === 'object') {
    const result = {}
    for (const key in obj) {
      const unsanitizedKey = unsanitizeKey(key)
      result[unsanitizedKey] = unsanitizeKeysRecursive(obj[key])
    }
    return result
  }
  return obj
}

// ==================== FUNÇÕES GENÉRICAS ====================

// Salvar dados no Firebase (remove undefined e sanitiza chaves automaticamente)
export const saveToFirebase = async (path, data) => {
  try {
    const cleanedData = removeUndefined(data)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)
    await set(ref(database, path), sanitizedData)
    return true
  } catch (error) {
    console.error('Erro ao salvar no Firebase:', error)
    return false
  }
}

// Carregar dados do Firebase (uma vez) e restaura chaves sanitizadas
export const loadFromFirebase = async (path, defaultValue = null) => {
  try {
    const snapshot = await get(ref(database, path))
    if (snapshot.exists()) {
      const data = snapshot.val()
      return unsanitizeKeysRecursive(data)
    }
    return defaultValue
  } catch (error) {
    console.error('Erro ao carregar do Firebase:', error)
    return defaultValue
  }
}

// Escutar mudanças em tempo real e restaura chaves sanitizadas
export const subscribeToFirebase = (path, callback) => {
  const dbRef = ref(database, path)
  onValue(dbRef, (snapshot) => {
    const data = snapshot.exists() ? snapshot.val() : null
    callback(data ? unsanitizeKeysRecursive(data) : null)
  })
  // Retorna função para cancelar a inscrição
  return () => off(dbRef)
}

// ==================== FUNÇÕES ESPECÍFICAS ====================

// --- TREINADORES ---

// Salvar dados do treinador (salva cada campo separadamente para evitar "Write too large")
export const saveTrainerData = async (username, data) => {
  try {
    const basePath = `trainers/${username}`
    const cleanedData = removeUndefined(data)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)

    // Salvar cada campo individualmente e logar tamanho + erros por campo
    const results = await Promise.allSettled(
      Object.entries(sanitizedData).map(async ([key, value]) => {
        const size = JSON.stringify(value).length
        const sizeMB = (size / (1024 * 1024)).toFixed(2)
        if (size > 1000000) {
          console.warn(`[Firebase] Campo "${key}" tem ${sizeMB} MB`)
        }
        try {
          await set(ref(database, `${basePath}/${key}`), value)
        } catch (err) {
          console.error(`[Firebase] ERRO ao salvar campo "${key}" (${sizeMB} MB):`, err.message || err)
          throw err
        }
      })
    )

    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase] ${failed.length} campo(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar dados do treinador:', error)
    return false
  }
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

// Salvar configuração do mestre (salva cada campo separadamente para evitar "Write too large")
export const saveMestreConfig = async (data) => {
  try {
    const basePath = 'mestre/config'
    const cleanedData = removeUndefined(data)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)

    const results = await Promise.allSettled(
      Object.entries(sanitizedData).map(async ([key, value]) => {
        const size = JSON.stringify(value).length
        const sizeMB = (size / (1024 * 1024)).toFixed(2)
        if (size > 1000000) {
          console.warn(`[Firebase Mestre] Campo "${key}" tem ${sizeMB} MB`)
        }
        try {
          await set(ref(database, `${basePath}/${key}`), value)
        } catch (err) {
          console.error(`[Firebase Mestre] ERRO ao salvar campo "${key}" (${sizeMB} MB):`, err.message || err)
          throw err
        }
      })
    )

    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase Mestre] ${failed.length} campo(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar configuração do mestre:', error)
    return false
  }
}

// Carregar configuração do mestre
export const loadMestreConfig = async () => {
  return loadFromFirebase('mestre/config', null)
}

// --- NPCs ---

// Salvar NPCs do mestre (salva cada NPC individualmente para evitar "Write too large")
export const saveNpcTrainers = async (username, npcs) => {
  try {
    const basePath = `npcTrainers/${username}`
    const cleanedData = removeUndefined(npcs)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)

    // Se o array é pequeno (< 500KB), salvar de uma vez
    const totalSize = JSON.stringify(sanitizedData).length
    if (totalSize < 500000) {
      return saveToFirebase(basePath, sanitizedData)
    }

    // Se é grande, salvar cada NPC individualmente
    console.warn(`[Firebase NPC] Array grande (${(totalSize / (1024 * 1024)).toFixed(2)} MB), salvando individualmente...`)

    // Primeiro, limpar o path inteiro para remover NPCs removidos
    await set(ref(database, basePath), null)

    const results = await Promise.allSettled(
      sanitizedData.map(async (npc, index) => {
        try {
          await set(ref(database, `${basePath}/${index}`), npc)
        } catch (err) {
          console.error(`[Firebase NPC] ERRO ao salvar NPC ${index}:`, err.message || err)
          throw err
        }
      })
    )

    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase NPC] ${failed.length} NPC(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar NPCs:', error)
    return false
  }
}

// Carregar NPCs do mestre
export const loadNpcTrainers = async (username) => {
  return loadFromFirebase(`npcTrainers/${username}`, [])
}

// Escutar mudanças nos NPCs do mestre (tempo real)
export const subscribeToNpcTrainers = (username, callback) => {
  return subscribeToFirebase(`npcTrainers/${username}`, (data) => {
    callback(data || [])
  })
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

// Salvar dados de batalha (salva cada campo separadamente para evitar "Write too large")
export const saveBattleData = async (data) => {
  try {
    const basePath = 'battle'
    const cleanedData = removeUndefined(data)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)

    const results = await Promise.allSettled(
      Object.entries(sanitizedData).map(async ([key, value]) => {
        try {
          await set(ref(database, `${basePath}/${key}`), value)
        } catch (err) {
          const size = JSON.stringify(value).length
          const sizeMB = (size / (1024 * 1024)).toFixed(2)
          console.error(`[Firebase Battle] ERRO ao salvar campo "${key}" (${sizeMB} MB):`, err.message || err)
          throw err
        }
      })
    )

    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase Battle] ${failed.length} campo(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar dados de batalha:', error)
    return false
  }
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

// --- BATALHA GAME BOY ---

export const saveGBBattle = async (data) => {
  return saveToFirebase('gbBattle', removeUndefined(data))
}

export const loadGBBattle = async () => {
  return loadFromFirebase('gbBattle', {})
}

export const subscribeToGBBattle = (callback) => {
  return subscribeToFirebase('gbBattle', (data) => {
    callback(data || {})
  })
}

export const saveGBChatMessages = async (messages) => {
  return saveToFirebase('gbChat/messages', messages)
}

export const subscribeToGBChatMessages = (callback) => {
  return subscribeToFirebase('gbChat/messages', (data) => {
    callback(data || [])
  })
}

// --- TIMES NPC ---

export const saveNpcTeams = async (teams) => {
  return saveToFirebase('npcTeams', removeUndefined(teams))
}

export const loadNpcTeams = async () => {
  return loadFromFirebase('npcTeams', [])
}

export const subscribeToNpcTeams = (callback) => {
  return subscribeToFirebase('npcTeams', (data) => {
    callback(data || [])
  })
}

// --- CENÁRIOS DA SESSÃO ---

export const saveSessionScenarios = async (scenarios) => {
  return saveToFirebase('sessionScenarios', removeUndefined(scenarios))
}

export const loadSessionScenarios = async () => {
  return loadFromFirebase('sessionScenarios', [])
}

export const subscribeToSessionScenarios = (callback) => {
  return subscribeToFirebase('sessionScenarios', (data) => {
    callback(data || [])
  })
}

export const saveScenarioDisplay = async (display) => {
  return saveToFirebase('scenarioDisplay', display)
}

export const subscribeToScenarioDisplay = (callback) => {
  return subscribeToFirebase('scenarioDisplay', (data) => {
    callback(data)
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

// --- XP & CAPTURAS ---

// Salvar dados de XP & Capturas do treinador
export const saveXpCapturas = async (username, data) => {
  return saveToFirebase(`xpCapturas/${username}`, data)
}

// Carregar dados de XP & Capturas do treinador
export const loadXpCapturas = async (username) => {
  return loadFromFirebase(`xpCapturas/${username}`, { xpList: [], capturaList: [] })
}

// Escutar mudanças em XP & Capturas do treinador (tempo real)
export const subscribeToXpCapturas = (username, callback) => {
  return subscribeToFirebase(`xpCapturas/${username}`, (data) => {
    callback(data || { xpList: [], capturaList: [] })
  })
}

// Escutar mudanças em XP & Capturas de TODOS os treinadores (para o mestre)
export const subscribeToAllXpCapturas = (callback) => {
  return subscribeToFirebase('xpCapturas', (data) => {
    callback(data || {})
  })
}

// --- SAFARI ---

export const saveSafariData = async (data) => {
  return saveToFirebase('safari', data)
}

export const loadSafariData = async () => {
  return loadFromFirebase('safari', {
    runAreas: {},
    runPermissions: {},
    runEncounters: {},
    runPaidUsers: {}
  })
}

export const subscribeToSafari = (callback) => {
  return subscribeToFirebase('safari', (data) => {
    callback(data || {
      runAreas: {},
      runPermissions: {},
      runEncounters: {},
      runPaidUsers: {}
    })
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

// --- HUB DE TROCA ---

// Salvar dados do Hub de Troca
export const saveTradeHub = async (data) => {
  try {
    const basePath = 'tradeHub'
    const cleanedData = removeUndefined(data)
    const sanitizedData = sanitizeKeysRecursive(cleanedData)

    const results = await Promise.allSettled(
      Object.entries(sanitizedData).map(async ([key, value]) => {
        try {
          await set(ref(database, `${basePath}/${key}`), value)
        } catch (err) {
          const size = JSON.stringify(value).length
          const sizeMB = (size / (1024 * 1024)).toFixed(2)
          console.error(`[Firebase TradeHub] ERRO ao salvar campo "${key}" (${sizeMB} MB):`, err.message || err)
          throw err
        }
      })
    )

    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase TradeHub] ${failed.length} campo(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar Hub de Troca:', error)
    return false
  }
}

// Carregar dados do Hub de Troca
export const loadTradeHub = async () => {
  return loadFromFirebase('tradeHub', { trades: [], completedTrades: {} })
}

// Escutar mudanças no Hub de Troca (tempo real)
export const subscribeToTradeHub = (callback) => {
  return subscribeToFirebase('tradeHub', (data) => {
    callback(data || { trades: [], completedTrades: {} })
  })
}

// --- APRICORN TREES ---

// Salvar árvores de apricorn geradas
export const saveGeneratedApricornTrees = async (trees) => {
  return saveToFirebase('apricornTrees/generated', trees)
}

// Carregar árvores de apricorn geradas
export const loadGeneratedApricornTrees = async () => {
  return loadFromFirebase('apricornTrees/generated', [])
}

// Escutar mudanças nas árvores de apricorn geradas (tempo real)
export const subscribeToGeneratedApricornTrees = (callback) => {
  return subscribeToFirebase('apricornTrees/generated', (data) => {
    callback(data || [])
  })
}

// --- BACKUPS ---

// Salvar backups no Firebase (salva cada seção de cada backup separadamente para evitar "Write too large")
export const saveBackups = async (backups) => {
  try {
    const results = await Promise.allSettled(
      backups.map(async (backup, index) => {
        const basePath = `backups/${index}`
        const cleanedData = removeUndefined(backup)
        const sanitizedData = sanitizeKeysRecursive(cleanedData)

        // Salvar metadados (timestamp, version) diretamente
        const { data, ...metadata } = sanitizedData
        const metaResults = await Promise.allSettled(
          Object.entries(metadata).map(async ([key, value]) => {
            await set(ref(database, `${basePath}/${key}`), value)
          })
        )

        // Salvar cada seção de data separadamente (trainers, mestreConfig, npcTrainers, etc.)
        let dataResults = []
        if (data && typeof data === 'object') {
          dataResults = await Promise.allSettled(
            Object.entries(data).map(async ([section, value]) => {
              try {
                await set(ref(database, `${basePath}/data/${section}`), value)
              } catch (err) {
                const size = JSON.stringify(value).length
                const sizeMB = (size / (1024 * 1024)).toFixed(2)
                console.error(`[Firebase Backup] ERRO ao salvar seção "${section}" do backup ${index} (${sizeMB} MB):`, err.message || err)
                throw err
              }
            })
          )
        }

        const allFailed = [...metaResults, ...dataResults].filter(r => r.status === 'rejected')
        if (allFailed.length > 0) throw new Error(`${allFailed.length} seção(ões) falharam`)
      })
    )
    // Remover slots extras (caso a lista tenha encolhido)
    const currentCount = backups.length
    for (let i = currentCount; i < 5; i++) {
      try {
        await set(ref(database, `backups/${i}`), null)
      } catch (_) {
        break
      }
    }
    const failed = results.filter(r => r.status === 'rejected')
    if (failed.length > 0) {
      console.error(`[Firebase] ${failed.length} backup(s) falharam ao salvar`)
      return false
    }
    return true
  } catch (error) {
    console.error('Erro ao salvar backups:', error)
    return false
  }
}

// Carregar backups do Firebase (reconstrói array a partir de slots individuais)
export const loadBackups = async () => {
  const data = await loadFromFirebase('backups', null)
  if (!data) return []
  // Se for array (formato antigo), retornar diretamente
  if (Array.isArray(data)) return data
  // Se for objeto (novo formato com chaves numéricas), converter para array
  const backups = []
  const keys = Object.keys(data).sort((a, b) => Number(a) - Number(b))
  for (const key of keys) {
    if (data[key]) backups.push(data[key])
  }
  return backups
}

// Escutar mudanças nos backups (tempo real)
export const subscribeToBackups = (callback) => {
  return subscribeToFirebase('backups', (data) => {
    if (!data) return callback([])
    if (Array.isArray(data)) return callback(data)
    // Converter objeto com chaves numéricas para array
    const backups = []
    const keys = Object.keys(data).sort((a, b) => Number(a) - Number(b))
    for (const key of keys) {
      if (data[key]) backups.push(data[key])
    }
    callback(backups)
  })
}

// --- QUESTS (Central Niaypeta Rio Corp™) ---

export const saveQuests = async (quests) => {
  return saveToFirebase('quests', removeUndefined(quests))
}

export const loadQuests = async () => {
  return loadFromFirebase('quests', [])
}

export const subscribeToQuests = (callback) => {
  return subscribeToFirebase('quests', (data) => {
    callback(data || [])
  })
}

// --- SMART POKEFONE ---

export const saveSmartPokefoneMessages = async (username, messages) => {
  return saveToFirebase(`smartPokefone/${username}`, messages)
}

export const loadSmartPokefoneMessages = async (username) => {
  return loadFromFirebase(`smartPokefone/${username}`, [])
}

export const subscribeToSmartPokefoneMessages = (username, callback) => {
  return subscribeToFirebase(`smartPokefone/${username}`, (data) => {
    callback(data || [])
  })
}

// --- TRIUNFOS ---

export const saveTriunfosGerais = async (triunfos) => {
  return saveToFirebase('triunfos/gerais', removeUndefined(triunfos))
}

export const subscribeToTriunfosGerais = (callback) => {
  return subscribeToFirebase('triunfos/gerais', (data) => {
    callback(Array.isArray(data) ? data : Object.values(data || {}))
  })
}

export const saveTriunfosIndividuais = async (individuais) => {
  return saveToFirebase('triunfos/individuais', removeUndefined(individuais))
}

export const subscribeToTriunfosIndividuais = (callback) => {
  return subscribeToFirebase('triunfos/individuais', (data) => {
    callback(data || {})
  })
}

export const saveMostrarTriunfos = async (data) => {
  return saveToFirebase('triunfos/mostrar', data)
}

export const subscribeToMostrarTriunfos = (callback) => {
  return subscribeToFirebase('triunfos/mostrar', callback)
}

// --- POKE AGENDA ---

export const saveAnotacoes = async (username, anotacoes) => {
  return saveToFirebase(`anotacoes/${username}`, removeUndefined(anotacoes))
}

export const subscribeToAnotacoes = (username, callback) => {
  return subscribeToFirebase(`anotacoes/${username}`, (data) => {
    callback(Array.isArray(data) ? data : Object.values(data || {}))
  })
}
