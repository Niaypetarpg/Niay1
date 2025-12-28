# Niaypeta Corp™ - Sistema de Gerenciamento RPG Pokémon

## 🎮 Sobre o Projeto

Sistema profissional de gerenciamento para RPG Pokémon desenvolvido com React + Vite + Tailwind CSS.

## 📦 Estrutura do Projeto

```
niaypeta-vite-final/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React (para futuro)
│   ├── styles/          # Estilos adicionais (para futuro)
│   ├── App.jsx          # ✅ Componente principal (500+ linhas)
│   ├── main.jsx         # ✅ Entry point
│   └── index.css        # ✅ Estilos globais + Tailwind
├── index.html           # HTML base
├── package.json         # Dependências
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
├── postcss.config.js    # PostCSS
├── .gitignore           # Arquivos ignorados
└── README.md            # Este arquivo
```

## 🚀 Como Rodar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Rodar Servidor de Desenvolvimento
```bash
npm run dev
```

### 3. Abrir no Navegador
```
http://localhost:5173
```

## 📦 Build para Produção

```bash
npm run build
```

A pasta `dist/` será criada com os arquivos otimizados.

## 🌐 Deploy no Netlify

### Via GitHub:
1. Suba o projeto no GitHub Desktop
2. No Netlify: "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `dist`

### Via Arrastar:
1. `npm run build`
2. Arraste a pasta `dist` no Netlify

## ✨ Funcionalidades

- ✅ 6 contas com cores personalizadas
- ✅ Upload de imagem (arquivo ou URL)
- ✅ Sistema de níveis (0-50)
- ✅ 80+ classes coloridas
- ✅ LocalStorage automático
- ✅ Interface responsiva

## 🛠️ Tecnologias

- React 18
- Vite
- Tailwind CSS
- Lucide React

## 📚 Controle de Versão com Git

O projeto agora está sob controle de versão Git! Aqui estão os comandos mais úteis:

### Ver status dos arquivos
```bash
git status
```

### Ver histórico de commits
```bash
git log --oneline
```

### Adicionar mudanças
```bash
git add .                 # Adiciona todos os arquivos modificados
git add src/App.jsx       # Adiciona apenas um arquivo específico
```

### Fazer commit das mudanças
```bash
git commit -m "Descrição da mudança"
```

### Ver diferenças
```bash
git diff                  # Ver mudanças não commitadas
git diff HEAD~1           # Comparar com commit anterior
```

### Voltar para versão anterior
```bash
git checkout <commit-id> src/App.jsx    # Voltar arquivo específico
git reset --hard <commit-id>             # Voltar todo projeto (CUIDADO!)
```

### Criar branch para experimentar
```bash
git branch nova-feature              # Criar nova branch
git checkout nova-feature            # Mudar para a branch
git checkout -b nova-feature         # Criar e mudar em um comando
```

### Ver todas as branches
```bash
git branch
```

### Voltar para branch principal
```bash
git checkout master
```

---

**Niaypeta Corp™** © 2024
