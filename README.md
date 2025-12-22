# Niaypeta Corp™ - Sistema de Gerenciamento RPG Pokémon

## 🎮 Sobre o Projeto

Sistema profissional de gerenciamento para RPG Pokémon desenvolvido com React + Vite + Tailwind CSS.

## 📋 Funcionalidades

### 🔐 Sistema de Login
- **6 contas** com cores personalizadas:
  - **Mestre** - Dourado
  - **Alocin** - Azul Marinho & Preto
  - **Lila** - Roxo & Vermelho
  - **Ludovic** - Vermelho & Preto
  - **Noryat** - Preto & Branco
  - **Pedro** - Azul & Verde

### 👤 Área do Treinador
- Upload de imagem (computador ou URL)
- Sistema de níveis (0-50) com botões +/-
- 4 slots de Classes & Subclasses coloridas
- Contadores de Time Principal (0/6), PC (0/1000) e Pokédex
- Navegação por abas no topo

### 📚 Classes & Subclasses
Todas as 80+ classes organizadas por cores com coroas para classes mestras:
- Artista (Azul Claro)
- Captor (Laranja)
- Criador (Rosa)
- Guerreiro (Amarelo Escuro)
- Místico (Roxo)
- Pesquisador (Azul Escuro)
- Psíquico (Marrom)
- Ranger (Verde)
- Treinador (Vermelho)

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. **Extraia o projeto**
```bash
cd niaypeta-vite-project
```

2. **Instale as dependências**
```bash
npm install
```

3. **Rode o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:5173
```

## 📦 Deploy no Netlify

### Opção 1: Via GitHub Desktop + Netlify

1. **GitHub Desktop**
   - File → Add Local Repository
   - Selecione a pasta `niaypeta-vite-project`
   - Publish repository

2. **Netlify**
   - Login em [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Selecione o repositório
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy!

### Opção 2: Arrastar e Soltar

1. **Build local**
```bash
npm run build
```

2. **Upload no Netlify**
   - Arraste a pasta `dist` para o Netlify
   - Pronto!

## 📁 Estrutura do Projeto

```
niaypeta-vite-project/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React (futuro)
│   ├── styles/          # Estilos adicionais (futuro)
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais + Tailwind
├── index.html           # HTML base
├── package.json         # Dependências
├── vite.config.js       # Configuração Vite
├── tailwind.config.js   # Configuração Tailwind
└── README.md            # Este arquivo
```

## 🛠️ Tecnologias

- **React 18** - Framework UI
- **Vite** - Build tool super rápido
- **Tailwind CSS** - Estilos utilitários
- **Lucide React** - Ícones modernos
- **LocalStorage** - Persistência de dados

## 💾 Persistência de Dados

Todos os dados são salvos automaticamente no navegador usando LocalStorage. Cada treinador tem seu próprio espaço de armazenamento.

## 🎨 Customizações

### Adicionar novas cores
Edite `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'custom-blue': '#123456'
    }
  }
}
```

### Adicionar novas classes
Edite o array `classes` em `src/App.jsx`

## 📝 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## 🐛 Troubleshooting

**Página em branco?**
- Verifique se rodou `npm install`
- Limpe o cache: `npm run build -- --force`

**Erros de dependências?**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Niaypeta Corp™** © 2024 - Todos os direitos reservados
