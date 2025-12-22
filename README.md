# Niaypeta Corp™ - Sistema de Gerenciamento RPG Pokémon

## 📋 Sobre o Projeto

Sistema completo de gerenciamento para RPG Pokémon com múltiplas contas de usuário, persistência de dados e interface responsiva.

## 🔐 Login

**Usuários disponíveis:**
- Mestre (conta master)
- Alocin (treinador)
- Lila (treinador)
- Ludovic (treinador)
- Noryat (treinador)
- Pedro (treinador)

**Senha para todas as contas:** `DnD7MarPkm`

## 🚀 Como Usar

### Opção 1: Netlify (Recomendado)

1. Faça login no [Netlify](https://netlify.com)
2. Arraste e solte a pasta do projeto no Netlify
3. Aguarde o deploy finalizar
4. Acesse o link gerado!

### Opção 2: GitHub + Netlify

1. Crie um novo repositório no GitHub
2. Adicione os arquivos do projeto ao repositório
3. No Netlify, conecte o repositório
4. Configure o build:
   - Build command: (deixe em branco)
   - Publish directory: `/`
5. Deploy!

### Opção 3: Local

1. Abra o arquivo `index.html` diretamente no navegador
2. Pronto! O sistema funcionará localmente

## ✨ Funcionalidades

### Conta Mestre
- Treinador NPC
- Pokémon NPC
- Enciclopédia M
- Treinadores

### Conta Treinador
- **Treinador**: Gestão completa do personagem
  - Upload de foto
  - Sistema de níveis (1-50)
  - HP com dano/cura
  - Classes e subclasses coloridas
  - Atributos e modificadores
  - Deslocamentos automáticos
  - Evasão calculada
  - Time principal (6 Pokémon)
  - PC e Pokédex
- **PC**: Armazenamento de Pokémon
- **Pokédex**: Enciclopédia de Pokémon
- **Mochila**: Inventário de itens
- **Características & Talentos**: Skills do treinador
- **Pokéloja**: Loja de itens
- **Enciclopédia**: Informações do mundo

## 💾 Persistência de Dados

Todos os dados do treinador são salvos automaticamente no navegador usando LocalStorage. Seus dados não serão perdidos ao fechar o navegador!

## 🎨 Temas

- Modo Claro
- Modo Escuro

## 📱 Responsivo

O sistema funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## 🛠️ Tecnologias Utilizadas

- React 18
- Tailwind CSS
- Lucide Icons
- LocalStorage API

## 📝 Estrutura de Arquivos

```
niaypeta-corp-v75/
├── index.html          # Página principal
├── app.jsx            # Lógica React
└── README.md          # Este arquivo
```

## 🔄 Atualizações Futuras

- [ ] Integração com Pokédex completa
- [ ] Sistema de PC expandido
- [ ] Mochila funcional
- [ ] Sistema de batalha
- [ ] Multiplayer

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Niaypeta Corp™** - Todos os direitos reservados
