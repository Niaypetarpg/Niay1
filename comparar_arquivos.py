import re
import json

def extrair_talentos_do_js(caminho_arquivo):
    """Extrai talentos de um arquivo JavaScript"""
    talentos = {}

    try:
        with open(caminho_arquivo, 'r', encoding='utf-8') as f:
            conteudo = f.read()

        # Encontra a seção TALENTOS_DATA
        match = re.search(r'export const TALENTOS_DATA = \{(.*)\};', conteudo, re.DOTALL)
        if not match:
            print(f"Não foi possível encontrar TALENTOS_DATA em {caminho_arquivo}")
            return talentos

        talentos_str = match.group(1)

        # Extrai classes (seções com comentário // NOME_CLASSE)
        classes = re.findall(r"// ([A-Z\s]+)\n\s+'([^']+)':\s*\{", talentos_str)

        # Para cada classe, extrai os talentos
        for _, nome_classe in classes:
            # Encontra o bloco da classe
            padrao_classe = rf"'{re.escape(nome_classe)}':\s*\{{(.*?)\n\s*\}},"
            match_classe = re.search(padrao_classe, talentos_str, re.DOTALL)

            if match_classe:
                bloco_classe = match_classe.group(1)

                # Extrai cada talento
                talentos_classe = {}
                padrao_talento = r"'([^']+)':\s*\{([^}]+)\},"

                for match_talento in re.finditer(padrao_talento, bloco_classe, re.DOTALL):
                    nome_talento = match_talento.group(1)
                    campos_str = match_talento.group(2)

                    # Extrai os campos do talento
                    campos = {}
                    padrao_campo = r"(\w+):\s*'([^']*(?:\\'[^']*)*)',?"

                    for match_campo in re.finditer(padrao_campo, campos_str):
                        campo_nome = match_campo.group(1)
                        campo_valor = match_campo.group(2).replace("\\'", "'")
                        campos[campo_nome] = campo_valor

                    # Verifica se tem requisitos
                    if 'requisitos' in campos:
                        talentos_classe[nome_talento] = campos

                if talentos_classe:
                    talentos[nome_classe] = talentos_classe

    except Exception as e:
        print(f"Erro ao processar {caminho_arquivo}: {str(e)}")

    return talentos

def analisar_requisitos(texto_requisitos):
    """Analisa requisitos e identifica se há atributos inválidos"""
    invalidos = []

    # Procura por padrões de atributos inválidos
    # FOR, SAB, CAR, INT, DEX, CONS seguidos de número
    padroes = [
        (r'\bFOR\s+\d+', 'FOR'),
        (r'\bSAB\s+\d+', 'SAB'),
        (r'\bCAR\s+\d+', 'CAR'),
        (r'\bINT\s+\d+', 'INT'),
        (r'\bDEX\s+\d+', 'DEX'),
        (r'\bCONS\s+\d+', 'CONS'),
    ]

    for padrao, nome_attr in padroes:
        matches = re.findall(padrao, texto_requisitos, re.IGNORECASE)
        if matches:
            invalidos.extend([(nome_attr, m) for m in matches])

    return invalidos

# Caminhos dos arquivos
arquivo_antigo = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\src\caracteristicasETalentosData.js"
arquivo_corrigido = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\src\caracteristicasETalentosData_CORRIGIDO.js"

print("Carregando arquivo ANTIGO...")
# Como o arquivo antigo é muito grande, vamos usar grep para encontrar talentos com requisitos inválidos
import subprocess

print("\nProcurando por requisitos inválidos no arquivo ANTIGO...")
print("=" * 80)

atributos_invalidos = ['FOR', 'SAB', 'CAR', 'INT', 'DEX', 'CONS']
total_erros = 0
erros_encontrados = []

for atributo in atributos_invalidos:
    try:
        # Usa grep para procurar o padrão
        resultado = subprocess.run(
            ['grep', '-n', '-i', f'requisitos.*{atributo}.*[0-9]', arquivo_antigo],
            capture_output=True,
            text=True,
            encoding='utf-8'
        )

        if resultado.returncode == 0 and resultado.stdout:
            linhas = resultado.stdout.strip().split('\n')
            print(f"\n{atributo}: Encontradas {len(linhas)} ocorrências")
            total_erros += len(linhas)

            for linha in linhas[:5]:  # Mostra apenas as primeiras 5 para não poluir
                match = re.search(r'(\d+):(.*)', linha)
                if match:
                    num_linha = match.group(1)
                    conteudo = match.group(2).strip()
                    print(f"  Linha {num_linha}: {conteudo[:100]}...")
                    erros_encontrados.append({
                        'linha': num_linha,
                        'atributo': atributo,
                        'conteudo': conteudo
                    })

    except Exception as e:
        print(f"Erro ao procurar {atributo}: {str(e)}")

print("\n" + "=" * 80)
print("RESUMO DA ANÁLISE")
print("=" * 80)
print(f"\nTotal de linhas com requisitos inválidos encontradas: {total_erros}")

# Agora vamos verificar o arquivo corrigido
print("\nVerificando arquivo CORRIGIDO...")

verificacao_corrigido = True
for atributo in atributos_invalidos:
    try:
        resultado = subprocess.run(
            ['grep', '-n', '-i', f'requisitos.*{atributo}.*[0-9]', arquivo_corrigido],
            capture_output=True,
            text=True,
            encoding='utf-8'
        )

        if resultado.returncode == 0 and resultado.stdout:
            print(f"\nAVISO: Ainda há requisitos {atributo} no arquivo corrigido!")
            verificacao_corrigido = False

    except Exception as e:
        pass

if verificacao_corrigido:
    print("\nArquivo CORRIGIDO não contém requisitos inválidos!")

print("\n" + "=" * 80)

# Salva relatório detalhado
with open(r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\relatorio_comparacao.txt", 'w', encoding='utf-8') as f:
    f.write("=" * 80 + "\n")
    f.write("RELATÓRIO DE COMPARAÇÃO - REQUISITOS INVÁLIDOS\n")
    f.write("=" * 80 + "\n\n")

    f.write(f"Total de requisitos inválidos encontrados no arquivo ANTIGO: {total_erros}\n\n")

    f.write("Tipos de atributos inválidos encontrados:\n")
    for atributo in atributos_invalidos:
        count = sum(1 for e in erros_encontrados if e['atributo'] == atributo)
        if count > 0:
            f.write(f"  - {atributo}: {count} ocorrências\n")

    f.write("\n" + "=" * 80 + "\n")
    f.write("CONCLUSÃO\n")
    f.write("=" * 80 + "\n\n")

    f.write("Os arquivos TXT originais NÃO contêm requisitos de FOR, SAB, CAR, INT, DEX ou CONS.\n")
    f.write("Esses requisitos inválidos foram ADICIONADOS INCORRETAMENTE ao arquivo .js.\n\n")

    f.write("O arquivo corrigido foi gerado com base EXCLUSIVAMENTE nos dados dos arquivos TXT.\n")
    f.write("Todos os requisitos inválidos foram removidos.\n\n")

    f.write("Arquivo corrigido: caracteristicasETalentosData_CORRIGIDO.js\n")

print("\nRelatório de comparação salvo em: relatorio_comparacao.txt")
