import json
import re

# Carregar talentos extraídos dos txt
with open('talentos_extraidos.json', 'r', encoding='utf-8') as f:
    talentos_corretos = json.load(f)

# Ler o arquivo caracteristicasETalentosData.js
with open('src/caracteristicasETalentosData.js', 'r', encoding='utf-8') as f:
    codigo_atual = f.read()

# Encontrar todos os talentos no código atual
# Padrão: { nome: '...', requisitos: '...', referencia: '...', ... }
padrao_talento = r"\{\s*nome:\s*['\"]([^'\"]+)['\"]"

talentos_no_codigo = re.findall(padrao_talento, codigo_atual)

print(f"Talentos no código: {len(talentos_no_codigo)}")
print(f"Talentos nos arquivos txt: {len(talentos_corretos)}")

# Requisitos inválidos que devem ser removidos
requisitos_invalidos_patterns = ['FOR ', 'SAB ', 'CAR ', 'INT ', 'DEX ', 'CONS ']

# Encontrar diferenças
diferencas = []

for nome_talento in talentos_no_codigo:
    if nome_talento in talentos_corretos:
        talento_correto = talentos_corretos[nome_talento]

        # Extrair talento do código atual
        # Buscar o bloco completo do talento
        inicio = codigo_atual.find(f"nome: '{nome_talento}'")
        if inicio == -1:
            inicio = codigo_atual.find(f'nome: "{nome_talento}"')

        if inicio != -1:
            # Encontrar o fim do objeto (próximo }),)
            fim = codigo_atual.find('},', inicio)
            if fim == -1:
                fim = codigo_atual.find('}]', inicio)

            if fim != -1:
                bloco_codigo = codigo_atual[inicio:fim+1]

                # Extrair requisitos do código
                match_req = re.search(r"requisitos:\s*['\"]([^'\"]*)['\"]", bloco_codigo)
                req_codigo = match_req.group(1) if match_req else 'N/A'

                req_correto = talento_correto['requisitos']

                # Verificar se tem requisito inválido
                tem_invalido = any(inv in req_codigo for inv in requisitos_invalidos_patterns)

                if tem_invalido or req_codigo != req_correto:
                    diferencas.append({
                        'nome': nome_talento,
                        'requisitos_codigo': req_codigo,
                        'requisitos_correto': req_correto,
                        'tem_invalido': tem_invalido
                    })

print(f"\nEncontradas {len(diferencas)} diferenças nos requisitos")

# Gerar relatório
with open('relatorio_diferencas.txt', 'w', encoding='utf-8') as f:
    f.write("RELATÓRIO DE DIFERENÇAS NOS REQUISITOS DOS TALENTOS\n")
    f.write("=" * 100 + "\n\n")

    for diff in diferencas:
        f.write(f"Talento: {diff['nome']}\n")
        f.write(f"Requisitos no CÓDIGO: {diff['requisitos_codigo']}\n")
        f.write(f"Requisitos CORRETOS:  {diff['requisitos_correto']}\n")
        if diff['tem_invalido']:
            f.write("⚠️  ATENÇÃO: Contém requisito inválido (FOR/SAB/CAR/INT/DEX/CONS)\n")
        f.write("-" * 100 + "\n\n")

    f.write(f"\n\nTOTAL DE TALENTOS COM DIFERENÇAS: {len(diferencas)}\n")

print("Relatório salvo em: relatorio_diferencas.txt")

# Contar quantos têm requisitos inválidos
com_invalidos = sum(1 for d in diferencas if d['tem_invalido'])
print(f"Talentos com requisitos inválidos: {com_invalidos}")
