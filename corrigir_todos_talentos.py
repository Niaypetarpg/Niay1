#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re

def normalize_name(name):
    """Normaliza o nome do talento para comparação"""
    return name.strip().lower()

def main():
    # Ler o arquivo JSON com os talentos corretos
    print("Lendo talentos_extraidos.json...")
    with open('talentos_extraidos.json', 'r', encoding='utf-8') as f:
        talentos_json = json.load(f)

    # Criar dicionário de talentos com nome normalizado como chave
    talentos_dict = {}
    for key, talento in talentos_json.items():
        nome_normalizado = normalize_name(talento['nome'])
        talentos_dict[nome_normalizado] = talento

    print(f"Total de talentos no JSON: {len(talentos_dict)}")

    # Ler o arquivo JavaScript
    print("Lendo src/caracteristicasETalentosData.js...")
    with open('src/caracteristicasETalentosData.js', 'r', encoding='utf-8') as f:
        js_content = f.read()

    # Encontrar todos os talentos no JavaScript
    # Padrão: { nome: "...", requisitos: '...', ... }
    pattern = r"(\{\s*nome:\s*['\"]([^'\"]+)['\"],\s*requisitos:\s*['\"])([^'\"]*?)(['\"],)"

    correcoes = []
    talentos_encontrados = set()

    def substituir_requisitos(match):
        indent = match.group(1)
        nome = match.group(2)
        requisitos_antigo = match.group(3)
        closing = match.group(4)

        nome_normalizado = normalize_name(nome)
        talentos_encontrados.add(nome_normalizado)

        if nome_normalizado in talentos_dict:
            talento_correto = talentos_dict[nome_normalizado]
            requisitos_novo = talento_correto['requisitos']

            if requisitos_antigo != requisitos_novo:
                correcoes.append({
                    'nome': nome,
                    'antigo': requisitos_antigo,
                    'novo': requisitos_novo
                })
                return f"{indent}{requisitos_novo}{closing}"

        # Retorna o original se não encontrar correspondência
        return match.group(0)

    # Substituir todos os requisitos
    js_content_novo = re.sub(pattern, substituir_requisitos, js_content)

    # Salvar o arquivo modificado
    print("Salvando src/caracteristicasETalentosData.js...")
    with open('src/caracteristicasETalentosData.js', 'w', encoding='utf-8') as f:
        f.write(js_content_novo)

    # Gerar relatório
    print("\n" + "="*80)
    print(f"RELATÓRIO DE CORREÇÃO DE TALENTOS")
    print("="*80)
    print(f"Total de talentos corrigidos: {len(correcoes)}")
    print(f"Total de talentos encontrados no JS: {len(talentos_encontrados)}")
    print(f"Total de talentos no JSON: {len(talentos_dict)}")

    if correcoes:
        print(f"\n20 PRIMEIROS EXEMPLOS DE CORREÇÕES:")
        print("-" * 80)
        for i, correcao in enumerate(correcoes[:20], 1):
            print(f"\n{i}. {correcao['nome']}")
            print(f"   Antigo: '{correcao['antigo']}'")
            print(f"   Novo:   '{correcao['novo']}'")

    # Salvar relatório completo
    with open('relatorio_correcao_talentos.txt', 'w', encoding='utf-8') as f:
        f.write("="*80 + "\n")
        f.write("RELATÓRIO COMPLETO DE CORREÇÃO DE TALENTOS\n")
        f.write("="*80 + "\n\n")
        f.write(f"Total de talentos corrigidos: {len(correcoes)}\n")
        f.write(f"Total de talentos encontrados no JS: {len(talentos_encontrados)}\n")
        f.write(f"Total de talentos no JSON: {len(talentos_dict)}\n\n")

        if correcoes:
            f.write("TODAS AS CORREÇÕES:\n")
            f.write("-" * 80 + "\n\n")
            for i, correcao in enumerate(correcoes, 1):
                f.write(f"{i}. {correcao['nome']}\n")
                f.write(f"   Antigo: '{correcao['antigo']}'\n")
                f.write(f"   Novo:   '{correcao['novo']}'\n\n")

    print(f"\nRelatório completo salvo em: relatorio_correcao_talentos.txt")
    print("\nConcluído com sucesso!")

if __name__ == "__main__":
    main()
