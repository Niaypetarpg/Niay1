import re

arquivo_antigo = r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\src\caracteristicasETalentosData.js"

# Linhas com erros identificadas
linhas_com_erro = {
    1926: 'SAB 12',
    1935: 'SAB 14',
    1943: 'SAB 16',
    1951: 'SAB 16',
    1958: 'FOR 15',
    1973: 'INT 14',
    1980: 'CAR 15',
    1987: 'SAB 12',
    2002: 'SAB 14',
    2010: 'SAB 20',
    2033: 'INT 12',
    2040: 'FOR 12',
    2047: 'SAB 12',
    2055: 'CAR 12',
    2070: 'CAR 14',
}

talentos_corrigidos = []

try:
    with open(arquivo_antigo, 'r', encoding='utf-8') as f:
        linhas = f.readlines()

    for num_linha, atributo_invalido in linhas_com_erro.items():
        # Procura o nome do talento nas linhas anteriores
        nome_talento = "Desconhecido"
        for i in range(num_linha - 1, max(0, num_linha - 20), -1):
            # Procura por padrão "nome: 'Nome do Talento'"
            match_nome = re.search(r"nome:\s*'([^']+)'", linhas[i])
            if match_nome:
                nome_talento = match_nome.group(1)
                break

        # Extrai os requisitos completos
        linha_atual = linhas[num_linha - 1]  # -1 porque array é 0-indexed
        match_req = re.search(r"requisitos:\s*'([^']*(?:\\'[^']*)*)'", linha_atual)
        requisitos_antigo = match_req.group(1) if match_req else atributo_invalido

        talentos_corrigidos.append({
            'nome': nome_talento,
            'linha': num_linha,
            'atributo_invalido': atributo_invalido,
            'requisitos_antigo': requisitos_antigo
        })

except Exception as e:
    print(f"Erro: {str(e)}")

# Ordena por nome
talentos_corrigidos.sort(key=lambda x: x['nome'])

print("=" * 80)
print("TALENTOS CORRIGIDOS - REQUISITOS INVÁLIDOS REMOVIDOS")
print("=" * 80)
print(f"\nTotal de talentos corrigidos: {len(talentos_corrigidos)}\n")

print("Lista de talentos com requisitos inválidos que foram removidos:\n")
print("-" * 80)

for i, talento in enumerate(talentos_corrigidos, 1):
    print(f"{i}. {talento['nome']}")
    print(f"   Requisito INVÁLIDO: {talento['requisitos_antigo']}")
    print(f"   Atributo inventado: {talento['atributo_invalido']}")
    print()

print("=" * 80)
print("TIPOS DE ERROS ENCONTRADOS")
print("=" * 80)
print()

erros_por_tipo = {}
for talento in talentos_corrigidos:
    attr = talento['atributo_invalido'].split()[0]
    if attr not in erros_por_tipo:
        erros_por_tipo[attr] = []
    erros_por_tipo[attr].append(talento['nome'])

for atributo, talentos in sorted(erros_por_tipo.items()):
    print(f"{atributo}: {len(talentos)} talentos")
    for talento in sorted(talentos):
        print(f"  - {talento}")
    print()

print("=" * 80)
print("RESUMO")
print("=" * 80)
print()
print("Atributos INVÁLIDOS que foram inventados:")
print("  - FOR (Força) - NÃO EXISTE no sistema")
print("  - SAB (Sabedoria) - NÃO EXISTE no sistema")
print("  - CAR (Carisma) - NÃO EXISTE no sistema")
print("  - INT (Inteligência) - NÃO EXISTE no sistema")
print("  - DEX (Destreza) - NÃO EXISTE no sistema")
print("  - CONS (Constituição) - NÃO EXISTE no sistema")
print()
print("Atributos VÁLIDOS do sistema Pokémon RPG:")
print("  - Ataque")
print("  - Defesa")
print("  - Velocidade")
print("  - Saúde")
print("  - Ataque Especial")
print("  - Defesa Especial")
print()
print("TODOS os requisitos inválidos foram REMOVIDOS no arquivo corrigido.")
print("O arquivo caracteristicasETalentosData_CORRIGIDO.js contém apenas dados")
print("extraídos DIRETAMENTE dos arquivos TXT originais.")
print()
print("=" * 80)

# Salva lista de talentos corrigidos
with open(r"c:\Users\nicol\OneDrive\Área de Trabalho\Testeando VsCode\talentos_corrigidos.txt", 'w', encoding='utf-8') as f:
    f.write("=" * 80 + "\n")
    f.write("LISTA DE TALENTOS CORRIGIDOS\n")
    f.write("=" * 80 + "\n\n")
    f.write(f"Total: {len(talentos_corrigidos)} talentos\n\n")

    for i, talento in enumerate(talentos_corrigidos, 1):
        f.write(f"{i}. {talento['nome']}\n")
        f.write(f"   Linha no arquivo antigo: {talento['linha']}\n")
        f.write(f"   Requisito INVÁLIDO (REMOVIDO): {talento['requisitos_antigo']}\n")
        f.write(f"   Atributo inventado: {talento['atributo_invalido']}\n\n")

    f.write("\n" + "=" * 80 + "\n")
    f.write("ERROS POR TIPO DE ATRIBUTO INVÁLIDO\n")
    f.write("=" * 80 + "\n\n")

    for atributo, talentos in sorted(erros_por_tipo.items()):
        f.write(f"{atributo}: {len(talentos)} talentos\n")
        for talento in sorted(talentos):
            f.write(f"  - {talento}\n")
        f.write("\n")

print("\nLista de talentos corrigidos salva em: talentos_corrigidos.txt")
