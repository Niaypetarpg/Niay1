import json
import re

print("=" * 80)
print("CORREÇÃO AUTOMÁTICA DE TALENTOS")
print("=" * 80)

# Carregar talentos corretos extraídos dos txt
with open('talentos_extraidos.json', 'r', encoding='utf-8') as f:
    talentos_corretos = json.load(f)

# Ler o arquivo atual
with open('src/caracteristicasETalentosData.js', 'r', encoding='utf-8') as f:
    codigo = f.read()

# Contador de correções
correcoes_feitas = 0
talentos_corrigidos = []

# Para cada talento correto, buscar e corrigir no código
for nome_talento, dados_corretos in talentos_corretos.items():
    # Ignorar títulos de seções
    if 'Características' in nome_talento or 'Talentos' in nome_talento:
        continue

    # Buscar o talento no código (pode estar com aspas simples ou duplas)
    padrao = rf"(\{{\s*nome:\s*['\"]){re.escape(nome_talento)}(['\"],[\s\S]*?requisitos:\s*['\"])([^'\"]*?)(['\"])"

    match = re.search(padrao, codigo)

    if match:
        req_antigo = match.group(3)
        req_correto = dados_corretos['requisitos']

        # Se os requisitos são diferentes, corrigir
        if req_antigo != req_correto:
            # Substituir apenas esta ocorrência específica
            texto_antigo = match.group(0)
            texto_novo = match.group(1) + nome_talento + match.group(2) + req_correto + match.group(4)

            codigo = codigo.replace(texto_antigo, texto_novo, 1)
            correcoes_feitas += 1
            talentos_corrigidos.append({
                'nome': nome_talento,
                'antigo': req_antigo,
                'novo': req_correto
            })

            if correcoes_feitas <= 10:  # Mostrar primeiras 10 correções
                print(f"\n✓ {nome_talento}")
                print(f"  Antes: '{req_antigo}'")
                print(f"  Depois: '{req_correto}'")

print(f"\n\n{'='*80}")
print(f"TOTAL DE CORREÇÕES: {correcoes_feitas}")
print(f"{'='*80}")

# Salvar arquivo corrigido
with open('src/caracteristicasETalentosData_CORRIGIDO.js', 'w', encoding='utf-8') as f:
    f.write(codigo)

print(f"\n✓ Arquivo corrigido salvo em: src/caracteristicasETalentosData_CORRIGIDO.js")

# Salvar relatório detalhado
with open('relatorio_correcao.txt', 'w', encoding='utf-8') as f:
    f.write("RELATÓRIO DE CORREÇÕES APLICADAS\n")
    f.write("=" * 100 + "\n\n")

    for item in talentos_corrigidos:
        f.write(f"Talento: {item['nome']}\n")
        f.write(f"  ANTES: {item['antigo']}\n")
        f.write(f"  DEPOIS: {item['novo']}\n")
        f.write("-" * 100 + "\n\n")

    f.write(f"\n\nTOTAL DE CORREÇÕES: {correcoes_feitas}\n")

print(f"✓ Relatório detalhado salvo em: relatorio_correcao.txt")

# Verificar quais talentos com requisitos inválidos foram corrigidos
invalidos_corrigidos = [
    t for t in talentos_corrigidos
    if any(inv in t['antigo'] for inv in ['FOR ', 'SAB ', 'CAR ', 'INT ', 'DEX ', 'CONS '])
]

print(f"\n✓ Talentos com requisitos inválidos corrigidos: {len(invalidos_corrigidos)}")

if invalidos_corrigidos:
    print("\nTalentos com requisitos inválidos que foram corrigidos:")
    for t in invalidos_corrigidos:
        print(f"  - {t['nome']}: '{t['antigo']}' → '{t['novo']}'")
