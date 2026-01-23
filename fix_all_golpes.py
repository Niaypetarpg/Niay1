import re
import json

# Ler o arquivo
with open('./src/golpesData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Definir as substituições
substitui

coes = {
    # Colisão Quente
    r'"Colisão Quente": \{\s*"tipo": "Fogo",\s*"aptidao": "Vigor",\s*"descritores": "Impacto",\s*"acuracia": "2",\s*"danoBasal": "Ver Efeito",\s*"alcance": "À Distância 10",\s*"frequencia": "Por Encontro",\s*"tagConcurso": "Incentivo",\s*"efeito": "[^"]*?Iguais: 1d10 Físico[^"]*?5d10\+16 Físico"\s*\},':
    '''"Colisão Quente": {
    "tipo": "Fogo",
    "aptidao": "Vigor",
    "descritores": "Impacto",
    "acuracia": "2",
    "danoBasal": "Ver Efeito",
    "alcance": "À Distância 10",
    "frequencia": "Por Encontro",
    "tagConcurso": "Incentivo",
    "efeito": {
      "descricao": "O alvo revela a Categoria de Peso dele. O Dano Basal da Colisão Quente varia conforme a diferença entre as Categorias de Peso do alvo e do usuário:",
      "tabela": [
        { "diferenca": "Iguais", "danoBasal": "1d10 Físico" },
        { "diferenca": "Usuário mais pesado em 1 Categoria", "danoBasal": "1d10+10 Físico" },
        { "diferenca": "Usuário mais pesado em 2 Categorias", "danoBasal": "2d12+12 Físico" },
        { "diferenca": "Usuário mais pesado em 3 Categorias", "danoBasal": "3d10+14 Físico" },
        { "diferenca": "Usuário mais pesado em 4+ Categorias", "danoBasal": "5d10+16 Físico" }
      ]
    }
  },'''
}

# Fazer substituições
count = 0
for pattern, replacement in substituicoes.items():
    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        count += 1
        print(f"✓ Substituição aplicada")
    else:
        print(f"✗ Padrão não encontrado")

# Salvar
with open('./src/golpesData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n✓ {count} substituições realizadas!")
