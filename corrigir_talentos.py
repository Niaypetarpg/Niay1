import os
import re
import json

# Diretório com os arquivos txt
dir_talentos = "caracteristicas e talentos todos"

# Padrão para extrair talentos dos arquivos
def extrair_talentos(caminho_arquivo):
    """Extrai talentos de um arquivo txt"""
    with open(caminho_arquivo, 'r', encoding='utf-8') as f:
        conteudo = f.read()

    talentos = []
    # Dividir por linhas vazias ou por padrão de novo talento
    blocos = re.split(r'\n\s*\n', conteudo)

    talento_atual = {}
    for bloco in blocos:
        if not bloco.strip():
            continue

        linhas = bloco.strip().split('\n')
        primeira_linha = linhas[0].strip()

        # Se começa com título (sem ":" no início), é um novo talento
        if primeira_linha and not primeira_linha.startswith(('Requisitos:', 'Referência:', 'Frequência:', 'Alvo:', 'Efeito:', 'Gatilho:', 'Especial:')):
            # Salvar talento anterior se existir
            if talento_atual and 'nome' in talento_atual:
                talentos.append(talento_atual.copy())

            # Iniciar novo talento
            talento_atual = {
                'nome': primeira_linha,
                'requisitos': 'N/A',
                'referencia': 'N/A',
                'frequencia': 'N/A',
                'alvo': 'N/A',
                'efeito': 'N/A',
                'gatilho': 'N/A',
                'especial': 'N/A'
            }
            linhas = linhas[1:]  # Processar resto das linhas

        # Processar campos do talento
        campo_atual = None
        texto_campo = []

        for linha in linhas:
            linha = linha.strip()
            if not linha:
                continue

            # Verificar se é início de um campo
            if linha.startswith('Requisitos:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'requisitos'
                texto_campo = [linha.replace('Requisitos:', '').strip()]
            elif linha.startswith('Referência:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'referencia'
                texto_campo = [linha.replace('Referência:', '').strip()]
            elif linha.startswith('Frequência:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'frequencia'
                texto_campo = [linha.replace('Frequência:', '').strip()]
            elif linha.startswith('Alvo:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'alvo'
                texto_campo = [linha.replace('Alvo:', '').strip()]
            elif linha.startswith('Efeito:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'efeito'
                texto_campo = [linha.replace('Efeito:', '').strip()]
            elif linha.startswith('Gatilho:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'gatilho'
                texto_campo = [linha.replace('Gatilho:', '').strip()]
            elif linha.startswith('Especial:'):
                if campo_atual and texto_campo:
                    talento_atual[campo_atual] = ' '.join(texto_campo).strip()
                campo_atual = 'especial'
                texto_campo = [linha.replace('Especial:', '').strip()]
            else:
                # Continuação do campo atual
                if campo_atual:
                    texto_campo.append(linha)

        # Salvar último campo processado
        if campo_atual and texto_campo:
            talento_atual[campo_atual] = ' '.join(texto_campo).strip()

    # Salvar último talento
    if talento_atual and 'nome' in talento_atual:
        talentos.append(talento_atual)

    return talentos

# Processar todos os arquivos
todos_talentos = {}
arquivos_processados = []

for arquivo in os.listdir(dir_talentos):
    if arquivo.endswith('.txt'):
        caminho = os.path.join(dir_talentos, arquivo)
        print(f"Processando: {arquivo}")
        talentos = extrair_talentos(caminho)

        # Identificar tipo (classe ou geral)
        if 'gerais' in arquivo.lower():
            categoria = 'Gerais'
        else:
            categoria = arquivo.replace('Características ', '').replace('características ', '').replace('.txt', '')

        for talento in talentos:
            nome = talento['nome']
            if nome not in todos_talentos:
                todos_talentos[nome] = {
                    'categoria': categoria,
                    **talento
                }

        arquivos_processados.append(arquivo)
        print(f"  Encontrados {len(talentos)} talentos")

print(f"\n\nTotal de talentos únicos: {len(todos_talentos)}")
print(f"Arquivos processados: {len(arquivos_processados)}")

# Salvar resultado em JSON
with open('talentos_extraidos.json', 'w', encoding='utf-8') as f:
    json.dump(todos_talentos, f, ensure_ascii=False, indent=2)

print("\n✅ Talentos extraídos salvos em: talentos_extraidos.json")

# Criar relatório de correções necessárias
print("\n\n=== INICIANDO ANÁLISE DE CORREÇÕES ===\n")

# Lista de requisitos inválidos
requisitos_invalidos = ['FOR', 'SAB', 'CAR', 'INT', 'DEX', 'CONS']

correcoes = []
for nome, dados in todos_talentos.items():
    requisitos = dados.get('requisitos', 'N/A')

    # Verificar se tem requisitos inválidos
    for req_inv in requisitos_invalidos:
        if req_inv in requisitos:
            correcoes.append({
                'nome': nome,
                'categoria': dados['categoria'],
                'problema': f'Requisito inválido: {req_inv}',
                'requisitos_atuais': requisitos
            })

print(f"Encontrados {len(correcoes)} talentos com requisitos inválidos\n")

# Salvar relatório
with open('relatorio_correcoes_talentos.txt', 'w', encoding='utf-8') as f:
    f.write("RELATÓRIO DE TALENTOS COM REQUISITOS INVÁLIDOS\n")
    f.write("=" * 80 + "\n\n")

    for corr in correcoes:
        f.write(f"Talento: {corr['nome']}\n")
        f.write(f"Categoria: {corr['categoria']}\n")
        f.write(f"Problema: {corr['problema']}\n")
        f.write(f"Requisitos encontrados: {corr['requisitos_atuais']}\n")
        f.write("-" * 80 + "\n\n")

print("✅ Relatório salvo em: relatorio_correcoes_talentos.txt")
print(f"\n✅ Processamento concluído! {len(todos_talentos)} talentos extraídos.")
