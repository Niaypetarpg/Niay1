import pdfplumber, re

SECTION_WORDS = [
    'Capacidades','Deslocamentos','Golpes','Atributos','Tipo','Habilidades',
    'Evolu','Basais','Naturais','Herdados','Ensináveis','Outras',
    'Parte','PARTE','Incubação','Captura'
]

def clean_pokemon_name(name):
    for word in SECTION_WORDS:
        name = re.sub(r'\s+' + re.escape(word) + r'.*$', '', name, flags=re.IGNORECASE)
    return name.strip()

results = {}

with pdfplumber.open('livropkm.pdf') as pdf:
    for page_num, page in enumerate(pdf.pages):
        text = page.extract_text()
        if not text:
            continue
        lines = text.split('\n')
        for i, line in enumerate(lines):
            m = re.match(r'^(\d{3})\.\s+(.+)', line)
            if not m:
                m2 = re.search(r'(\d{3})\.\s+([A-Za-z\u00C0-\u00FF\'\.\-]+(?:\s+[A-Za-z\u00C0-\u00FF\'\.\-]+)*)', line)
                if m2:
                    m = m2
                else:
                    continue
            num = int(m.group(1))
            raw_name = m.group(2).strip()
            name = clean_pokemon_name(raw_name)
            if not name or len(name) < 2:
                continue
            window = lines[max(0,i-5):i+10]
            window_text = '\n'.join(window)
            forca = re.search(r'For.a\s+(\d+)', window_text)
            intel = re.search(r'Intelig.ncia\s+(\d+)', window_text)
            salto = re.search(r'Salto\s+(\d+)', window_text)
            if forca or intel or salto:
                if num not in results:
                    results[num] = {
                        'name': name,
                        'forca': int(forca.group(1)) if forca else '',
                        'inteligencia': int(intel.group(1)) if intel else '',
                        'salto': int(salto.group(1)) if salto else '',
                    }

NAME_MAP = {
    'Nidoran': 'Nidoran F',
    'Farfectch\u2019d': "Farfetch'd",
}

ALT_FORMS = [
    ('Nidoran M', 'Nidoran F'),
    # Formas Alolan
    ('Rattata de Alola', 'Rattata'),
    ('Raticate de Alola', 'Raticate'),
    ('Raichu de Alola', 'Raichu'),
    ('Sandshrew de Alola', 'Sandshrew'),
    ('Sandslash de Alola', 'Sandslash'),
    ('Vulpix de Alola', 'Vulpix'),
    ('Ninetales de Alola', 'Ninetales'),
    ('Diglett de Alola', 'Diglett'),
    ('Dugtrio de Alola', 'Dugtrio'),
    ('Meowth de Alola', 'Meowth'),
    ('Persian de Alola', 'Persian'),
    ('Geodude de Alola', 'Geodude'),
    ('Graveler de Alola', 'Graveler'),
    ('Golem de Alola', 'Golem'),
    ('Grimer de Alola', 'Grimer'),
    ('Muk de Alola', 'Muk'),
    ('Exeggutor de Alola', 'Exeggutor'),
    ('Marowak de Alola', 'Marowak'),
    # Formas Galarian
    ('Meowth de Galar', 'Meowth'),
    ('Ponyta de Galar', 'Ponyta'),
    ('Rapidash de Galar', 'Rapidash'),
    ("Farfetch'd de Galar", "Farfetch'd"),
    ('Weezing de Galar', 'Weezing'),
    ('Mr. Mime de Galar', 'Mr. Mime'),
    ('Corsola de Galar', 'Corsola'),
    ('Zigzagoon de Galar', 'Zigzagoon'),
    ('Linoone de Galar', 'Linoone'),
    ('Darumaka de Galar', 'Darumaka'),
    ('Darmanitan de Galar', 'Darmanitan'),
    ('Yamask de Galar', 'Yamask'),
    ('Stunfisk de Galar', 'Stunfisk'),
    # Rotom
    ('Rotom Calor', 'Rotom'),
    ('Rotom Lavar', 'Rotom'),
    ('Rotom Gelar', 'Rotom'),
    ('Rotom Girar', 'Rotom'),
    ('Rotom Cortar', 'Rotom'),
    # Arceus
    ('Arceus (Placa Chama)', 'Arceus'),
    ('Arceus (Placa Água)', 'Arceus'),
    ('Arceus (Placa Eletro)', 'Arceus'),
    ('Arceus (Placa Grama)', 'Arceus'),
    ('Arceus (Placa Gelo)', 'Arceus'),
    ('Arceus (Placa Luta)', 'Arceus'),
    ('Arceus (Placa Veneno)', 'Arceus'),
    ('Arceus (Placa Terra)', 'Arceus'),
    ('Arceus (Placa Voador)', 'Arceus'),
    ('Arceus (Placa Psíquico)', 'Arceus'),
    ('Arceus (Placa Inseto)', 'Arceus'),
    ('Arceus (Placa Pedra)', 'Arceus'),
    ('Arceus (Placa Fantasma)', 'Arceus'),
    ('Arceus (Placa Dragão)', 'Arceus'),
    ('Arceus (Placa Sombrio)', 'Arceus'),
    ('Arceus (Placa Metálico)', 'Arceus'),
    ('Arceus (Placa Fada)', 'Arceus'),
    # Wormadam
    ('Wormadam (Manto Arenoso)', 'Wormadam'),
    ('Wormadam (Manto de Lixo)', 'Wormadam'),
    # Lycanroc
    ('Lycanroc (Forma Noturna)', 'Lycanroc'),
    ('Lycanroc (Forma Crepuscular)', 'Lycanroc'),
    # Necrozma
    ('Necrozma Juba do Crepúsculo', 'Necrozma'),
    ('Necrozma Asas do Alvorecer', 'Necrozma'),
    ('Necrozma Ultra', 'Necrozma'),
    # Calyrex
    ('Calyrex (Corcel das Neves)', 'Calyrex'),
    ('Calyrex (Corcel das Sombras)', 'Calyrex'),
    # Urshifu
    ('Urshifu (Fluxo Rápido)', 'Urshifu'),
    ('Urshifu (Golpe Único)', 'Urshifu'),
    # Zacian/Zamazenta
    ('Zacian (Forma Coroada)', 'Zacian'),
    ('Zamazenta (Forma Coroada)', 'Zamazenta'),
    # Eternatus
    ('Eternatus (Eternamax)', 'Eternatus'),
    # Oricorio
    ('Oricorio (Estilo Pom-Pom)', 'Oricorio'),
    ("Oricorio (Estilo Pa'u)", 'Oricorio'),
    ('Oricorio (Estilo Sensu)', 'Oricorio'),
    # Wishiwashi
    ('Wishiwashi (Forma Cardume)', 'Wishiwashi'),
    # Silvally
    ('Silvally (Memória Chama)', 'Silvally'),
    ('Silvally (Memória Água)', 'Silvally'),
    ('Silvally (Memória Eletro)', 'Silvally'),
    ('Silvally (Memória Grama)', 'Silvally'),
    ('Silvally (Memória Gelo)', 'Silvally'),
    ('Silvally (Memória Luta)', 'Silvally'),
    ('Silvally (Memória Veneno)', 'Silvally'),
    ('Silvally (Memória Terra)', 'Silvally'),
    ('Silvally (Memória Voador)', 'Silvally'),
    ('Silvally (Memória Psíquico)', 'Silvally'),
    ('Silvally (Memória Inseto)', 'Silvally'),
    ('Silvally (Memória Pedra)', 'Silvally'),
    ('Silvally (Memória Fantasma)', 'Silvally'),
    ('Silvally (Memória Dragão)', 'Silvally'),
    ('Silvally (Memória Sombrio)', 'Silvally'),
    ('Silvally (Memória Metálico)', 'Silvally'),
    ('Silvally (Memória Fada)', 'Silvally'),
]

# Construir mapa por nome
name_to_cap = {}
for num, data in sorted(results.items()):
    name = NAME_MAP.get(data['name'], data['name'])
    name_to_cap[name] = {
        'forca': data['forca'],
        'inteligencia': data['inteligencia'],
        'salto': data['salto']
    }

# Adicionar Nidoran M
if 'Nidoran F' in name_to_cap and 'Nidoran M' not in name_to_cap:
    name_to_cap['Nidoran M'] = name_to_cap['Nidoran F']

# Resolver formas alternativas
for alt, base in ALT_FORMS:
    if base in name_to_cap and alt not in name_to_cap:
        name_to_cap[alt] = name_to_cap[base]

def js_key(name):
    if "'" in name:
        return f'"{name}"'
    return f"'{name}'"

def fmt_val(v):
    if v == '':
        return "''"
    return str(v)

# Gerar JS
lines_out = [
    '// Gerado automaticamente — capacidades extraídas do livropkm.pdf',
    'export const POKEMON_CAPACIDADE_MAP = {'
]

for name in sorted(name_to_cap.keys()):
    cap = name_to_cap[name]
    key = js_key(name)
    f = fmt_val(cap['forca'])
    i = fmt_val(cap['inteligencia'])
    s = fmt_val(cap['salto'])
    lines_out.append(f"  {key}: {{ forca: {f}, inteligencia: {i}, salto: {s} }},")

lines_out.append('}')
lines_out.append('')

js_content = '\n'.join(lines_out)
with open('src/pokemonCapacidades.js', 'w', encoding='utf-8') as fout:
    fout.write(js_content)

print(f'Gerado src/pokemonCapacidades.js com {len(name_to_cap)} entradas')
print('Primeiros 10:')
for name in sorted(list(name_to_cap.keys()))[:10]:
    print(f'  {name}: {name_to_cap[name]}')
print('...')
print('Nidoran F:', name_to_cap.get('Nidoran F'))
print('Nidoran M:', name_to_cap.get('Nidoran M'))
print("Farfetch'd:", name_to_cap.get("Farfetch'd"))
print('Arceus:', name_to_cap.get('Arceus'))
print('Arceus (Placa Chama):', name_to_cap.get('Arceus (Placa Chama)'))
