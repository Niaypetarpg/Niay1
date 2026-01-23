import os
import json
import re

# Caminho para a pasta com os arquivos txt
pasta_txt = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\caracteristicas e talentos todos"

# Estruturas de dados
caracteristicas_data = {}
talentos_data = {}

# Contadores para relatório
total_classes = 0
total_caracteristicas = 0
total_talentos = 0
erros_requisitos = []

def normalizar_nome_classe(nome_arquivo):
    """Extrai e normaliza o nome da classe do arquivo"""
    # Remove "Características" ou "Caraterísticas" e a extensão .txt
    nome = nome_arquivo.replace('Características ', '').replace('características ', '').replace('Caraterísticas ', '').replace('.txt', '').strip()
    # Capitaliza corretamente
    return nome

def extrair_campo(texto, linha_inicio, proxima_linha=None):
    """Extrai o valor de um campo do texto"""
    if proxima_linha:
        padrao = rf"{linha_inicio}:\s*(.*?)(?={proxima_linha}:|$)"
    else:
        padrao = rf"{linha_inicio}:\s*(.*?)(?=\n[A-Z]|$)"

    match = re.search(padrao, texto, re.DOTALL | re.IGNORECASE)
    if match:
        valor = match.group(1).strip()
        # Remove quebras de linha extras e espaços múltiplos
        valor = re.sub(r'\s+', ' ', valor)
        return valor if valor else "N/A"
    return "N/A"

def processar_caracteristica(texto, nome_classe):
    """Processa uma característica individual"""
    global total_caracteristicas

    linhas = texto.split('\n')
    nome = linhas[0].strip()

    # Remove "Característica" ou "Características" do nome se presente
    nome = nome.replace('Característica ', '').replace('Características ', '').strip()

    # Se o nome for apenas o nome da classe, pula
    if nome.lower() == nome_classe.lower():
        return None

    caracteristica = {}

    # Extrai frequência
    freq = extrair_campo(texto, 'Frequência')
    if freq != "N/A":
        caracteristica['frequencia'] = freq

    # Extrai referência
    ref = extrair_campo(texto, 'Referência')
    if ref != "N/A":
        caracteristica['referencia'] = ref

    # Extrai gatilho
    gatilho = extrair_campo(texto, 'Gatilho')
    if gatilho != "N/A":
        caracteristica['gatilho'] = gatilho

    # Extrai alvo
    alvo = extrair_campo(texto, 'Alvo')
    if alvo != "N/A":
        caracteristica['alvo'] = alvo

    # Extrai efeito
    efeito = extrair_campo(texto, 'Efeito')
    if efeito != "N/A":
        caracteristica['efeito'] = efeito

    if caracteristica:
        total_caracteristicas += 1
        return nome, caracteristica

    return None

def processar_talento(texto, nome_classe):
    """Processa um talento individual"""
    global total_talentos, erros_requisitos

    linhas = texto.split('\n')
    nome = linhas[0].strip()

    # Remove "Talento" ou "Talentos" do nome se presente
    nome = nome.replace('Talento ', '').replace('Talentos ', '').strip()

    talento = {}

    # Extrai requisitos
    requisitos = extrair_campo(texto, 'Requisitos')
    if requisitos != "N/A":
        # IMPORTANTE: Verifica se há requisitos inválidos de atributos
        requisitos_invalidos = re.findall(r'\b(FOR|SAB|CAR|INT|DEX|CONS)\s+\d+', requisitos, re.IGNORECASE)
        if requisitos_invalidos:
            erros_requisitos.append({
                'classe': nome_classe,
                'talento': nome,
                'requisitos_invalidos': requisitos_invalidos,
                'texto_original': requisitos
            })

        talento['requisitos'] = requisitos

    # Extrai frequência
    freq = extrair_campo(texto, 'Frequência')
    if freq != "N/A":
        talento['frequencia'] = freq

    # Extrai referência
    ref = extrair_campo(texto, 'Referência')
    if ref != "N/A":
        talento['referencia'] = ref

    # Extrai gatilho
    gatilho = extrair_campo(texto, 'Gatilho')
    if gatilho != "N/A":
        talento['gatilho'] = gatilho

    # Extrai alvo
    alvo = extrair_campo(texto, 'Alvo')
    if alvo != "N/A":
        talento['alvo'] = alvo

    # Extrai efeito
    efeito = extrair_campo(texto, 'Efeito')
    if efeito != "N/A":
        talento['efeito'] = efeito

    # Extrai especial
    especial = extrair_campo(texto, 'Especial')
    if especial != "N/A":
        talento['especial'] = especial

    if talento:
        total_talentos += 1
        return nome, talento

    return None

def processar_arquivo(caminho_arquivo):
    """Processa um arquivo txt completo"""
    global total_classes

    try:
        with open(caminho_arquivo, 'r', encoding='utf-8') as f:
            conteudo = f.read()

        nome_arquivo = os.path.basename(caminho_arquivo)
        nome_classe = normalizar_nome_classe(nome_arquivo)

        print(f"Processando: {nome_classe}")

        # Divide em seções de características e talentos
        # Procura por padrões como "Características X", "Talento X", "Talentos X"

        # Separa características
        if "Característica" in conteudo or "características" in conteudo:
            secoes_carac = re.split(r'\n(?=[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß][a-zàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ]+\s*\n)', conteudo)

            classe_caracteristicas = {}

            for secao in secoes_carac:
                if 'Frequência:' in secao and 'Talento' not in secao[:50]:
                    resultado = processar_caracteristica(secao, nome_classe)
                    if resultado:
                        nome, dados = resultado
                        classe_caracteristicas[nome] = dados

            if classe_caracteristicas:
                caracteristicas_data[nome_classe] = classe_caracteristicas

        # Separa talentos
        if "Talento" in conteudo or "talentos" in conteudo:
            # Encontra a posição onde começam os talentos
            match_talento = re.search(r'Talento[s]?\s+' + re.escape(nome_classe), conteudo, re.IGNORECASE)
            if match_talento:
                conteudo_talentos = conteudo[match_talento.end():]
            elif nome_classe.lower() == "gerais":
                conteudo_talentos = conteudo
            else:
                conteudo_talentos = ""

            if conteudo_talentos:
                secoes_tal = re.split(r'\n(?=[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß][^\n]*?\n)', conteudo_talentos)

                classe_talentos = {}

                for secao in secoes_tal:
                    if 'Frequência:' in secao or 'Requisitos:' in secao:
                        resultado = processar_talento(secao, nome_classe)
                        if resultado:
                            nome, dados = resultado
                            classe_talentos[nome] = dados

                if classe_talentos:
                    if nome_classe.lower() == "gerais":
                        talentos_data["Gerais"] = classe_talentos
                    else:
                        talentos_data[nome_classe] = classe_talentos

        total_classes += 1

    except Exception as e:
        print(f"Erro ao processar {caminho_arquivo}: {str(e)}")

def gerar_arquivo_js():
    """Gera o arquivo JavaScript com os dados processados"""

    js_content = """// Dados de Características e Talentos por Classe/Subclasse
// GERADO AUTOMATICAMENTE A PARTIR DOS ARQUIVOS TXT ORIGINAIS
// NÃO EDITAR MANUALMENTE - Use os arquivos txt como fonte da verdade

// Estrutura das características
export const CARACTERISTICAS_DATA = {
"""

    # Adiciona características
    for classe, caracteristicas in sorted(caracteristicas_data.items()):
        js_content += f"  // {classe.upper()}\n"
        js_content += f"  '{classe}': {{\n"

        for nome, dados in caracteristicas.items():
            js_content += f"    '{nome}': {{\n"
            for campo, valor in dados.items():
                # Escapa aspas simples no valor
                valor_escapado = str(valor).replace("'", "\\'").replace('\n', ' ')
                js_content += f"      {campo}: '{valor_escapado}',\n"
            js_content += "    },\n"

        js_content += "  },\n\n"

    js_content += "};\n\n"

    # Adiciona talentos
    js_content += "// Estrutura dos talentos\n"
    js_content += "export const TALENTOS_DATA = {\n"

    for classe, talentos in sorted(talentos_data.items()):
        js_content += f"  // {classe.upper()}\n"
        js_content += f"  '{classe}': {{\n"

        for nome, dados in talentos.items():
            js_content += f"    '{nome}': {{\n"
            for campo, valor in dados.items():
                # Escapa aspas simples no valor
                valor_escapado = str(valor).replace("'", "\\'").replace('\n', ' ')
                js_content += f"      {campo}: '{valor_escapado}',\n"
            js_content += "    },\n"

        js_content += "  },\n\n"

    js_content += "};\n"

    return js_content

def gerar_relatorio():
    """Gera relatório de processamento"""
    print("\n" + "="*80)
    print("RELATÓRIO DE PROCESSAMENTO")
    print("="*80)
    print(f"\nTotal de classes/subclasses processadas: {total_classes}")
    print(f"Total de características extraídas: {total_caracteristicas}")
    print(f"Total de talentos extraídos: {total_talentos}")

    if erros_requisitos:
        print(f"\n⚠️  REQUISITOS INVÁLIDOS ENCONTRADOS: {len(erros_requisitos)}")
        print("\nDetalhes dos requisitos inválidos:")
        print("-" * 80)

        for erro in erros_requisitos:
            print(f"\nClasse: {erro['classe']}")
            print(f"Talento: {erro['talento']}")
            print(f"Requisitos inválidos: {erro['requisitos_invalidos']}")
            print(f"Texto original: {erro['texto_original']}")
    else:
        print("\nNenhum requisito invalido encontrado nos arquivos txt originais")

    print("\n" + "="*80)

# Processa todos os arquivos
print("Iniciando processamento dos arquivos txt...")
print("="*80)

for arquivo in os.listdir(pasta_txt):
    if arquivo.endswith('.txt'):
        caminho_completo = os.path.join(pasta_txt, arquivo)
        processar_arquivo(caminho_completo)

# Gera o arquivo JavaScript
print("\nGerando arquivo JavaScript...")
js_code = gerar_arquivo_js()

# Salva o arquivo
output_path = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\src\caracteristicasETalentosData_CORRIGIDO.js"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_code)

print(f"\nArquivo gerado: {output_path}")

# Gera e exibe relatório
gerar_relatorio()

# Salva relatório em arquivo
relatorio_path = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\relatorio_correcao.txt"
with open(relatorio_path, 'w', encoding='utf-8') as f:
    f.write("="*80 + "\n")
    f.write("RELATÓRIO DE CORREÇÃO DE CARACTERÍSTICAS E TALENTOS\n")
    f.write("="*80 + "\n\n")
    f.write(f"Total de classes/subclasses processadas: {total_classes}\n")
    f.write(f"Total de características extraídas: {total_caracteristicas}\n")
    f.write(f"Total de talentos extraídos: {total_talentos}\n\n")

    if erros_requisitos:
        f.write(f"REQUISITOS INVÁLIDOS ENCONTRADOS: {len(erros_requisitos)}\n")
        f.write("-" * 80 + "\n\n")

        for erro in erros_requisitos:
            f.write(f"Classe: {erro['classe']}\n")
            f.write(f"Talento: {erro['talento']}\n")
            f.write(f"Requisitos inválidos: {erro['requisitos_invalidos']}\n")
            f.write(f"Texto original: {erro['texto_original']}\n\n")
    else:
        f.write("Nenhum requisito inválido encontrado nos arquivos txt originais\n")

print(f"\nRelatorio salvo: {relatorio_path}")
print("\nProcessamento concluído!")
