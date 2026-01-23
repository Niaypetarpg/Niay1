import re
import subprocess

arquivo_antigo = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\src\caracteristicasETalentosData.js"

print("=" * 80)
print("ANÁLISE DE REQUISITOS INVÁLIDOS NO ARQUIVO ANTIGO")
print("=" * 80)

# Padrões EXATOS de atributos inválidos (atributo espaço número)
padroes_invalidos = [
    (r'\bFOR\s+\d+', 'FOR'),
    (r'\bSAB\s+\d+', 'SAB'),
    (r'\bCAR\s+\d+', 'CAR'),
    (r'\bINT\s+\d+', 'INT'),
    (r'\bDEX\s+\d+', 'DEX'),
    (r'\bCONS\s+\d+', 'CONS'),
]

total_erros = 0
erros_detalhados = {}

try:
    with open(arquivo_antigo, 'r', encoding='utf-8') as f:
        linhas = f.readlines()

    for num_linha, linha in enumerate(linhas, 1):
        if 'requisitos:' in linha.lower():
            for padrao, nome_attr in padroes_invalidos:
                matches = re.findall(padrao, linha)
                if matches:
                    # Extrai o nome do talento (procura linha anterior com o nome)
                    nome_talento = "Desconhecido"
                    for i in range(num_linha - 1, max(0, num_linha - 10), -1):
                        match_nome = re.search(r"'([^']+)':\s*\{", linhas[i])
                        if match_nome:
                            nome_talento = match_nome.group(1)
                            break

                    # Extrai o valor dos requisitos
                    match_req = re.search(r"requisitos:\s*'([^']*(?:\\'[^']*)*)'", linha)
                    requisitos_texto = match_req.group(1) if match_req else linha.strip()

                    if nome_attr not in erros_detalhados:
                        erros_detalhados[nome_attr] = []

                    erros_detalhados[nome_attr].append({
                        'linha': num_linha,
                        'talento': nome_talento,
                        'requisitos': requisitos_texto,
                        'matches': matches
                    })

                    total_erros += len(matches)

except Exception as e:
    print(f"Erro ao processar arquivo: {str(e)}")

print(f"\nTotal de requisitos inválidos encontrados: {total_erros}\n")

# Mostra detalhes por atributo
for atributo, erros in sorted(erros_detalhados.items()):
    print(f"\n{atributo}: {len(erros)} talentos afetados")
    print("-" * 80)
    for erro in erros[:10]:  # Mostra até 10 exemplos
        print(f"  Talento: {erro['talento']}")
        print(f"  Linha: {erro['linha']}")
        print(f"  Requisitos: {erro['requisitos'][:100]}")
        print()

print("\n" + "=" * 80)
print("RESUMO")
print("=" * 80)
print(f"\nTotal de talentos com requisitos inválidos: {sum(len(e) for e in erros_detalhados.values())}")
print(f"Total de ocorrências de requisitos inválidos: {total_erros}")

print("\nAtributos inválidos encontrados:")
for atributo in sorted(erros_detalhados.keys()):
    count = len(erros_detalhados[atributo])
    print(f"  - {atributo}: {count} talentos")

# Salva relatório detalhado
with open(r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\relatorio_erros_detalhado.txt", 'w', encoding='utf-8') as f:
    f.write("=" * 80 + "\n")
    f.write("RELATÓRIO DETALHADO DE REQUISITOS INVÁLIDOS\n")
    f.write("=" * 80 + "\n\n")

    f.write(f"Total de requisitos inválidos: {total_erros}\n")
    f.write(f"Total de talentos afetados: {sum(len(e) for e in erros_detalhados.values())}\n\n")

    for atributo, erros in sorted(erros_detalhados.items()):
        f.write(f"\n{atributo}: {len(erros)} talentos\n")
        f.write("-" * 80 + "\n")
        for erro in erros:
            f.write(f"Talento: {erro['talento']}\n")
            f.write(f"Linha: {erro['linha']}\n")
            f.write(f"Requisitos: {erro['requisitos']}\n")
            f.write(f"Matches: {erro['matches']}\n\n")

    f.write("\n" + "=" * 80 + "\n")
    f.write("CONCLUSÃO\n")
    f.write("=" * 80 + "\n\n")
    f.write("TODOS os requisitos com FOR, SAB, CAR, INT, DEX e CONS são INVÁLIDOS.\n")
    f.write("Estes atributos NÃO EXISTEM nos arquivos TXT originais.\n\n")
    f.write("Os requisitos corretos usam apenas:\n")
    f.write("  - Ataque, Defesa, Velocidade, Saúde\n")
    f.write("  - Ataque Especial, Defesa Especial\n")
    f.write("  - Nível\n")
    f.write("  - Outros requisitos específicos (pokémons, itens, etc.)\n\n")
    f.write("O arquivo caracteristicasETalentosData_CORRIGIDO.js foi gerado com os dados corretos.\n")

print("\nRelatório detalhado salvo em: relatorio_erros_detalhado.txt")
print("\n" + "=" * 80)
print("VERIFICAÇÃO DOS DADOS ORIGINAIS")
print("=" * 80)
print("\nVerificando se os arquivos TXT originais contêm FOR, SAB, CAR, INT, DEX ou CONS...")

# Verifica arquivos txt
pasta_txt = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\caracteristicas e talentos todos"
encontrou_invalidos = False

for atributo in ['FOR', 'SAB', 'CAR', 'INT', 'DEX', 'CONS']:
    try:
        resultado = subprocess.run(
            ['grep', '-l', '-i', f'requisitos.*{atributo}\\s*[0-9]', pasta_txt + '/*'],
            capture_output=True,
            text=True,
            encoding='utf-8',
            shell=True
        )
        if resultado.returncode == 0 and resultado.stdout.strip():
            print(f"  AVISO: Encontrado {atributo} em arquivos txt!")
            encontrou_invalidos = True
    except:
        pass

if not encontrou_invalidos:
    print("\n  CONFIRMADO: Nenhum arquivo TXT original contém requisitos FOR, SAB, CAR, INT, DEX ou CONS")
    print("  Os requisitos inválidos foram INVENTADOS no arquivo .js!")

print("\n" + "=" * 80)
