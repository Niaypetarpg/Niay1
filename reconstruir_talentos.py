import json

# Carregar talentos extraídos
with open('talentos_extraidos.json', 'r', encoding='utf-8') as f:
    talentos = json.load(f)

# Organizar por categoria
categorias = {}
for nome, dados in talentos.items():
    categoria = dados['categoria']
    if categoria not in categorias:
        categorias[categoria] = []
    categorias[categoria].append(dados)

# Gerar código JavaScript
codigo = "// Este arquivo foi gerado automaticamente a partir dos arquivos txt originais\n\n"

# Ordem das categorias (começando com Gerais, depois alfabética)
ordem_categorias = sorted(categorias.keys())
if 'Gerais' in ordem_categorias:
    ordem_categorias.remove('Gerais')
    ordem_categorias = ['Gerais'] + ordem_categorias

codigo += "export const CARACTERISTICAS_DATA = {\n"

for categoria in ordem_categorias:
    # Pular títulos de seções
    talentos_categoria = [t for t in categorias[categoria] if not (t['nome'].startswith('Características') or t['nome'].startswith('Talentos'))]

    if not talentos_categoria:
        continue

    codigo += f"  {categoria}: [\n"

    for talento in talentos_categoria:
        codigo += "    {\n"
        codigo += f"      nome: '{talento['nome']}',\n"
        codigo += f"      requisitos: '{talento['requisitos']}',\n"
        codigo += f"      referencia: '{talento['referencia']}',\n"
        codigo += f"      frequencia: '{talento['frequencia']}',\n"

        # Adicionar alvo se não for N/A
        if talento['alvo'] != 'N/A':
            codigo += f"      alvo: '{talento['alvo']}',\n"

        # Adicionar efeito
        codigo += f"      efeito: '{talento['efeito']}'\n"

        # Adicionar gatilho se não for N/A
        if talento['gatilho'] != 'N/A':
            codigo += f"      gatilho: '{talento['gatilho']}',\n"

        # Adicionar especial se não for N/A
        if talento['especial'] != 'N/A':
            codigo += f"      especial: '{talento['especial']}',\n"

        codigo += "    },\n"

    codigo += "  ],\n"

codigo += "}\n\n"
codigo += "export default CARACTERISTICAS_DATA\n"

# Salvar arquivo
with open('src/caracteristicasETalentosData_NOVO.js', 'w', encoding='utf-8') as f:
    f.write(codigo)

print("Arquivo reconstruido salvo em: src/caracteristicasETalentosData_NOVO.js")
print(f"Total de categorias: {len(ordem_categorias)}")
print(f"Total de talentos: {sum(len([t for t in categorias[c] if not (t['nome'].startswith('Características') or t['nome'].startswith('Talentos'))]) for c in ordem_categorias)}")
