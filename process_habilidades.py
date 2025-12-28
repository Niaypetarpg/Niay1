import json

# Todas as habilidades em formato estruturado
habilidades_raw = """
Absorção de Água|Constante|dano de Água cura este pokémon. Calcule o dano que seria sofrido como se a Defesa e a Defesa Especial do pokémon fosse zero, e cure metade do resultado do dano que seria sofrido.
Absorção de Chamas|Constante|o pokémon é imune a dano de Fogo e à Congelamento. Se sofreria dano de Fogo por alguma razão, ele, em vez disso, adiciona metade de seu Bônus Elemental ao próximo Golpe de Fogo que usar.
Absorção de Seiva|Constante|o pokémon é imune a dano de Planta. Uma vez por rodada, se sofreria dano de Planta por alguma razão, ele, em vez disso, ele eleva uma Fase de Ataque.
Absorção de Voltagem|Constante|dano Elétrico cura este pokémon. Calcule o dano que seria sofrido como se a Defesa e a Defesa Especial do pokémon fosse zero, e cure metade do resultado do dano que seria sofrido.
Aclimatação|Ativação Horária|o clima se torna ameno se o pokémon com Aclimatação tiver Nível maior que o pokémon que causar a mudança climática.
Adaptabilidade|Constante|dobre o Bônus Elemental do pokémon.
Adiamento|Constante|este pokémon é sempre o último a agir em todas as rodadas, independente se qualquer Talento, Habilidade ou Golpe disser o contrário. A iniciativa deste pokémon só é relevante quando há mais de um pokémon com Adiamento.
Aeração|Constante|os Golpes Normais do pokémon são agora do Tipo Voador e recebem o Bônus Elemental dobrado.
Agonista|Constante|se o pokémon perder uma ou mais Fases por qualquer razão que não por seus próprios Golpes ou por suas próprias Habilidades, ele eleva duas Fases em Ataque para cada Fase que perder.
Agrupamento|Gatilho: estar em perigo|ao assumir sua forma Completa, recupera todos os seus Pontos de Vida.
Alcance Remoto|Constante|este pokémon nunca precisa fazer contato com alvos para usar Golpes: quaisquer Golpes que antes eram Corpo a Corpo agora são À Distância de 10 metros.
Alquimia|Gatilho À Vontade: um aliado fica inconsciente|o pokémon pode substituir esta Habilidade pela Habilidade do aliado até o fim do encontro.
Alucinógeno|Constante|quando este pokémon recebe Veneno, eleve duas Fases do Ataque dele. Se ele for curado da Condição, ele perde as duas Fases do Ataque.
Amarelar|Gatilho Constante: estar abaixo de metade dos PV máximos|o pokémon imediatamente começa a fugir, recebendo +20 a todos os seus Deslocamentos. Se o dono não convocar o pokémon de volta à pokébola em seu próximo turno, a Lealdade do pokémon será reduzida.
"""

# Processar e criar JSON
habilidades = {}
for line in habilidades_raw.strip().split('\n'):
    if '|' in line:
        parts = line.split('|')
        if len(parts) == 3:
            nome, ativacao, efeito = parts
            habilidades[nome] = {
                "ativacao": ativacao,
                "efeito": efeito
            }

print(f"Processadas {len(habilidades)} habilidades")
print(json.dumps(habilidades, ensure_ascii=False, indent=2)[:500])
