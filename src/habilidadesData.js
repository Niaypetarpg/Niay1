// Dados de Habilidades Pokémon
const HABILIDADES_DATA = {
  "Absorção de Água": {
    ativacao: "Constante",
    efeito: "dano de Água cura este pokémon. Calcule o dano que seria sofrido como se a Defesa e a Defesa Especial do pokémon fosse zero, e cure metade do resultado do dano que seria sofrido."
  },
  "Absorção de Chamas": {
    ativacao: "Constante",
    efeito: "o pokémon é imune a dano de Fogo e à Congelamento. Se sofreria dano de Fogo por alguma razão, ele, em vez disso, adiciona metade de seu Bônus Elemental ao próximo Golpe de Fogo que usar."
  },
  "Absorção de Seiva": {
    ativacao: "Constante",
    efeito: "o pokémon é imune a dano de Planta. Uma vez por rodada, se sofreria dano de Planta por alguma razão, ele, em vez disso, ele eleva uma Fase de Ataque."
  },
  "Absorção de Voltagem": {
    ativacao: "Constante",
    efeito: "dano Elétrico cura este pokémon. Calcule o dano que seria sofrido como se a Defesa e a Defesa Especial do pokémon fosse zero, e cure metade do resultado do dano que seria sofrido."
  },
  "Aclimatação": {
    ativacao: "Ativação Horária",
    efeito: "o clima se torna ameno se o pokémon com Aclimatação tiver Nível maior que o pokémon que causar a mudança climática."
  },
  "Adaptabilidade": {
    ativacao: "Constante",
    efeito: "dobre o Bônus Elemental do pokémon."
  },
  "Adiamento": {
    ativacao: "Constante",
    efeito: "este pokémon é sempre o último a agir em todas as rodadas, independente se qualquer Talento, Habilidade ou Golpe disser o contrário. A iniciativa deste pokémon só é relevante quando há mais de um pokémon com Adiamento."
  },
  "Aeração": {
    ativacao: "Constante",
    efeito: "os Golpes Normais do pokémon são agora do Tipo Voador e recebem o Bônus Elemental dobrado."
  },
  "Agonista": {
    ativacao: "Constante",
    efeito: "se o pokémon perder uma ou mais Fases por qualquer razão que não por seus próprios Golpes ou por suas próprias Habilidades, ele eleva duas Fases em Ataque para cada Fase que perder."
  },
  "Agrupamento": {
    ativacao: "Gatilho: estar em perigo",
    efeito: "ao assumir sua forma Completa, recupera todos os seus Pontos de Vida."
  },
  "Alcance Remoto": {
    ativacao: "Constante",
    efeito: "este pokémon nunca precisa fazer contato com alvos para usar Golpes: quaisquer Golpes que antes eram Corpo a Corpo agora são À Distância de 10 metros."
  },
  "Alquimia": {
    ativacao: "Gatilho À Vontade: um aliado fica inconsciente",
    efeito: "o pokémon pode substituir esta Habilidade pela Habilidade do aliado até o fim do encontro."
  },
  "Alucinógeno": {
    ativacao: "Constante",
    efeito: "quando este pokémon recebe Veneno, eleve duas Fases do Ataque dele. Se ele for curado da Condição, ele perde as duas Fases do Ataque."
  },
  "Amarelar": {
    ativacao: "Gatilho Constante: estar abaixo de metade dos PV máximos",
    efeito: "o pokémon imediatamente começa a fugir, recebendo +20 a todos os seus Deslocamentos. Se o dono não convocar o pokémon de volta à pokébola em seu próximo turno, a Lealdade do pokémon será reduzida."
  },
  "Amor de Mãe": {
    ativacao: "Gatilho À Vontade: usar um Golpe causador de dano (mas sem o Descritor Saraivada) e nenhum inimigo ter sido reduzido a zero Pontos de Vida ou menos por isso",
    efeito: "o pokémon usa imediatamente o Golpe de novo contra o mesmo alvo, ou, se era uma Explosão, na mesma área. O segundo Golpe é representado pela filhota, por isso não aplica o Dano Basal, apenas o resto do dano."
  },
  "Análise": {
    ativacao: "Ativação Horária",
    efeito: "pelas próximas cinco rodadas, se o turno do pokémon vier imediatamente depois de um inimigo que for alvo dele, ele adiciona às rolagens de dano uma quantidade igual a seu Bônus Elemental."
  },
  "Anátema": {
    ativacao: "Gatilho Horário: ser acertado por um Golpe",
    efeito: "o Golpe é afetado pelos efeitos de Desabilitar automaticamente. Esta Habilidade só entra em vigor depois dos efeitos do Golpe que ativou o Gatilho, mas ela funciona mesmo que o pokémon Anátema fique inconsciente pelo Golpe sofrido."
  },
  "Antecipação": {
    ativacao: "Ativação Horária",
    efeito: "durante um encontro, você pode usar esta Habilidade em um oponente, que revelará se possui algum Golpe superefetivo contra você. Além disso, role 1d20. Se o resultado for 11 ou mais, o alvo revelará até 3 Golpes dele que são superefetivos contra você. Se o resultado for 16 ou mais, ele revelará até 5 Golpes dele que são superefetivos contra você e a Dificuldade de Acurácia destes cinco Golpes é aumentada em 1 quando são usados contra você."
  },
  "Arena de Areia": {
    ativacao: "Ativação Diária",
    efeito: "uma grande parede de areia de 10 metros de altura cerca o encontro. O diâmetro da Arena de Areia pode ser escolhido, a um mínimo de 10 metros e um máximo de 40 metros. Deve haver solo suficiente a ser manipulado para que esta Habilidade seja usada. As paredes se unem em cima para formar o teto, de modo que é impossível deixar a área por cima. Caso destruídas, as paredes são restauradas instantaneamente. Se o pokémon ativador de Arena de Areia fica inconsciente ou é convocado de volta para a pokébola, a Arena de Areia se desmancha."
  },
  "Arenoso": {
    ativacao: "Ativação Diária",
    efeito: "enquanto o clima for uma Tempestade de Areia, o pokémon pode ativar esta Habilidade, cujo efeito permanece até o fim do encontro. Arenoso torna o pokémon imune aos efeitos de Tempestades de Areia e o faz adicionar uma quantidade igual a seu Bônus Elemental às rolagens de dano de Golpes Metálicos, de Pedra e de Terra."
  },
  "Armadura": {
    ativacao: "Constante",
    efeito: "imunidade a Críticos."
  },
  "Arrogância": {
    ativacao: "Gatilho Constante: este pokémon deixa outro pokémon inconsciente usando um Golpe",
    efeito: "eleve uma Fase de Ataque."
  },
  "Asas de Vendavais": {
    ativacao: "Ativação Horária",
    efeito: "o pokémon pode usar um Golpe Voador como uma Ação de Interrupção."
  },
  "Aspereza": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante perde um oitavo de seus PV máximos. Não aplique vulnerabilidades ou resistências nem Atributos a este dano."
  },
  "Aura de Trevas": {
    ativacao: "Ativação Horária",
    efeito: "pelo resto do encontro, Golpes de Trevas adicionam às rolagens de dano uma quantidade igual ao dobro do Bônus Elemental do usuário do Golpe. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não Golpes de Trevas e se acumula com o próprio Bônus Elemental se houver."
  },
  "Aura Feérica": {
    ativacao: "Ativação Horária",
    efeito: "pelo resto do encontro, Golpes do Tipo Fada adicionam às rolagens de dano uma quantidade igual ao dobro do Bônus Elemental do usuário do Golpe. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não Golpes do Tipo Fada e se acumula com o próprio Bônus Elemental se houver."
  },
  "Barbárie": {
    ativacao: "Gatilho Constante: os Pontos de Vida do pokémon são reduzidos abaixo da metade de seus PV máximos",
    efeito: "eleve duas Fases de Ataque Especial dele."
  },
  "Bateria": {
    ativacao: "Ativação Horária",
    efeito: "eleve uma Fase de Ataque Especial de todos os aliados adjacentes."
  },
  "Bazuca": {
    ativacao: "Constante",
    efeito: "este pokémon adiciona uma quantidade igual ao dobro do Bônus Elemental dele às rolagens de dano dos seguintes Golpes: Esfera da Aura, Pulso d'Água, Pulso de Cura, Pulso do Dragão, Pulso Primitivo, Pulso Sombrio. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não aqueles Golpes."
  },
  "Bicudo": {
    ativacao: "Constante",
    efeito: "imunidade a perda de Fases de Defesa."
  },
  "Bisbilhoteiro": {
    ativacao: "Ativação Horária",
    efeito: "o alvo adjacente revela seu Item Mantido."
  },
  "Blindagem": {
    ativacao: "Constante",
    efeito: "imunidade aos seguintes Golpes: Barragem, Bomba Ácida, Bico Explosivo, Bomba de Lama, Bomba de Lodo, Bomba de Sementes, Bomba Magnética, Canhão Elétrico, Demolição, Esfera Climática, Esfera da Aura, Esfera de Energia, Esfera de Gelo, Esfera de Névoa, Esfera de Sombras, Esfera Elétrica, Expansão da Aura, Girobola, Ovo Bomba, Pólen Fofo, Polvo Canhão, Semente Bala, Tiro Escaldante."
  },
  "Bloqueio Celeste": {
    ativacao: "Ativação Horária",
    efeito: "o clima se torna ameno. Isso é sustentado indefinidamente enquanto for a vontade do pokémon."
  },
  "Bochechudo": {
    ativacao: "Gatilho Horário: o pokémon come uma fruta",
    efeito: "além dos efeitos normais da fruta, o pokémon recupera 15 Pontos de Vida."
  },
  "Bolha d'Água": {
    ativacao: "Gatilho Constante: sofrer dano de Fogo",
    efeito: "independente de vulnerabilidades e resistências, o pokémon é tratado como se possuísse uma resistência a dano de Fogo. Além disso, como um benefício Constante, o pokémon é imune a Queimaduras."
  },
  "Cabeça Dura": {
    ativacao: "Constante",
    efeito: "este pokémon não perde nenhum Ponto de Vida por usar qualquer um dos seguintes Golpes: Afrochoque, Carga Selvagem, Derrubada, Faca de Dois Gumes, Fúria dos Pássaros, Investida de Cabeça, Investida Trovão, Martelo de Madeira, Submissão."
  },
  "Cacofonia": {
    ativacao: "Constante",
    efeito: "imunidade a Golpes com o Descritor Som."
  },
  "Carapaça": {
    ativacao: "Constante",
    efeito: "imunidade a dano por efeitos climáticos e também aos seguintes Golpes: Esporos, Esporos de Algodão, Esporos Paralisantes, Pólvora, Pó Irritante, Pó Sonífero, Pó Venenoso."
  },
  "Cardume": {
    ativacao: "Constante",
    efeito: "desde que o pokémon possua pelo menos Nível 20, esteja próximo a um grande corpo de água e possua pelo menos metade de seus Pontos de Vida máximo, ele assume sua forma para a forma de Cardume."
  },
  "Catagem": {
    ativacao: "Gatilho Horário: um encontro acaba",
    efeito: "role 1d20 e consulte a Tabela a seguir para determinar o que você encontra: 1 a 5: Nenhum; 6 a 8: Um dos seguintes itens determinado aleatoriamente: X-Ataque, X-Defesa, X-Ataque Especial, X-Defesa Especial, X-Velocidade, X-Acurácia, Golpe Atroz, Guarda Especial; 9 ou 10: Uma fruta determinada aleatoriamente; 11 ou 12: Uma pokébola determinada aleatoriamente; 13 a 16: Um item que restaura Pontos de Vida ou Condições determinado aleatoriamente; 17: Uma Pedra Elemental determinada aleatoriamente; 18: Uma Vitamina determinada aleatoriamente; 19: Um Item Mantido determinado aleatoriamente; 20: Um Registro determinado aleatoriamente."
  },
  "Climatologia": {
    ativacao: "Gatilho Constante: o clima mudar",
    efeito: "o Tipo e a aparência do pokémon mudam de acordo com o Clima: Ameno = Normal, Chuvoso = Água, Ensolarado = Fogo, Granizo/Neve = Gelo."
  },
  "Clorofila": {
    ativacao: "Ativação Horária",
    efeito: "desde que o Clima esteja Ensolarado, ativar Clorofila dobra o Atributo Velocidade do pokémon."
  },
  "Colheita": {
    ativacao: "Gatilho Constante: ao se alimentar de uma fruta",
    efeito: "jogue um dado. Se o resultado for par, o pokémon produz outra fruta exatamente da mesma variedade do item Mantido, que ele poderá usar a partir da próxima rodada. Se for ímpar nada acontece. Se o clima for Ensolarado, não haverá necessidade de jogar o dado, pois a fruta sempre será produzida com sucesso."
  },
  "Coloração": {
    ativacao: "Gatilho Constante: sofrer dano",
    efeito: "o Tipo do pokémon muda para o Tipo do dano sofrido."
  },
  "Coma": {
    ativacao: "Constante",
    efeito: "o pokémon está sempre na Condição Sono, e pode agir como se não estivesse com esta Condição."
  },
  "Companheirismo": {
    ativacao: "Ativação Diária",
    efeito: "pelo resto do encontro, quando um aliado adjacente ao pokémon sofreria dano por Golpes, o inimigo não adiciona nenhum Bônus Elemental à rolagem de dano."
  },
  "Competição": {
    ativacao: "Constante",
    efeito: "se o pokémon perder uma ou mais Fases por qualquer razão que não por seus próprios Golpes ou por suas próprias Habilidades, ele eleva duas Fases em Ataque Especial para cada Fase que perder."
  },
  "Concha": {
    ativacao: "Constante",
    efeito: "imunidade a Críticos."
  },
  "Contrário": {
    ativacao: "Constante",
    efeito: "o pokémon inverte elevações de Fases e perdas de Fases, de modo que todas as vezes que fosse perder uma Fase, ele eleva aquela Fase e todas as vezes que fosse elevar uma Fase ele a perda."
  },
  "Convocar Areia": {
    ativacao: "Ativação Diária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Tempestade de Areia."
  },
  "Convocar Neve": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Granizo."
  },
  "Cor da Alma": {
    ativacao: "Gatilho Constante",
    efeito: "quando alguém fica inconsciente a até 50 metros, o pokémon eleva uma Fase de Ataque Especial."
  },
  "Corrente Aérea": {
    ativacao: "Ativação À Vontade",
    efeito: "como uma Ação Livre, o clima é automaticamente convertido a ameno. Enquanto o pokémon com Corrente Aérea estiver presente, qualquer tentativa de alterar o Clima automaticamente falha. Durante este mesmo tempo, qualquer rolagem de dano que seria superefetiva contra pokémons Voadores causará dano neutro."
  },
  "Corrosão": {
    ativacao: "Constante",
    efeito: "Pokémons com Corrosão podem causar a Condição Veneno em pokémons Metálicos e Venenosos, que normalmente são imunes a serem envenenados."
  },
  "Covardia": {
    ativacao: "Gatilho Constante: sofrer dano de um dos seguintes Tipos: Fantasma, Inseto ou Noturno",
    efeito: "eleva uma Fase de Velocidade."
  },
  "Cura": {
    ativacao: "Ativação Horária",
    efeito: "restaura um alvo adjacente de todas as Condições que o afligirem."
  },
  "Dança": {
    ativacao: "Gatilho Horário: o pokémon está a até 10 metros de um pokémon que usa um Golpe com o Descritor Dança",
    efeito: "o pokémon com Dança pode usar imediatamente o mesmo Golpe, escolhendo um novo alvo se for necessário escolher alvos para aquele Golpe."
  },
  "Derrotável": {
    ativacao: "Gatilho Constante: estar abaixo da metade dos PV máximos",
    efeito: "este pokémon tem suas Fases de Ataque e de Ataque Especial diretamente reduzidas a três Fases negativas. As Fases não podem ser elevadas acima disso a menos que ele recupere seus Pontos de Vida acima da metade dos PV máximos."
  },
  "Desastrado": {
    ativacao: "Constante",
    efeito: "o pokémon Desastrado pode soltar itens Mantidos À Vontade como uma Ação Livre, mesmo que sob efeito de Condições, incluindo Sono. Ele pode também carregar um item Mantido ignorando os efeitos do item."
  },
  "Desatenção": {
    ativacao: "Constante",
    efeito: "quando este pokémon ataca ou é atacado, ignore todas as Fases positivas e negativas em vigor sobre todos os pokémons envolvidos, incluindo as próprias Fases do próprio pokémon Desatento."
  },
  "Desgrenhado": {
    ativacao: "Constante",
    efeito: "Golpes que o pokémon use contra criaturas do Tipo Fantasma acertam automaticamente e ignoram resistências, imunidades e vulnerabilidades."
  },
  "Deslumbrante": {
    ativacao: "Constante",
    efeito: "ninguém pode usar Golpes com o Descritor Interrupção a até 20 metros do pokémon Deslumbrante."
  },
  "Desmanchar": {
    ativacao: "Gatilho Horário: ser acertado por um Golpe de Água",
    efeito: "eleve três Fases de Velocidade."
  },
  "Desolação": {
    ativacao: "Ativação À Vontade",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Dia de Sol."
  },
  "Desprotegido": {
    ativacao: "Gatilho Constante: ser reduzido à metade dos PV ou a menos que isso",
    efeito: "assume a forma Nuclear."
  },
  "Disfarce": {
    ativacao: "Gatilho Constante: o pokémon sofre dano por um Golpe pela primeira vez em um encontro",
    efeito: "o pokémon não sofre o dano e nenhum outro efeito associado ao Golpe."
  },
  "Download": {
    ativacao: "Constante",
    efeito: "quando o pokémon com Download é alvo de um Golpe causador de dano, o atacante deve revelar qual Atributo é o menor Atributo dele entre a Defesa e a Defesa Especial. Quando o pokémon com Download ataca um inimigo, ele é considerado com uma Fase a mais em Ataque se a Defesa do alvo é menor que a Defesa Especial dele. Quando o pokémon com Download ataca um inimigo, ele é considerado com uma Fase a mais em Ataque Especial se a Defesa Especial do alvo é menor que a Defesa dele."
  },
  "Drenagem": {
    ativacao: "Constante",
    efeito: "o pokémon é imune a dano de Água. Se sofreria dano de Água por alguma razão, ele, em vez disso, eleva uma Fase de Ataque Especial. Além disso, se qualquer criatura a até 25 metros usar um Golpe À Distância de Água, este Golpe é redirecionado ao pokémon com Drenagem e o acertará automaticamente, ignorando os efeitos dos Golpes Leitura Mental e Mira."
  },
  "Elasticidade": {
    ativacao: "Constante",
    efeito: "imunidade a Paralisia."
  },
  "Eletricidade Estática": {
    ativacao: "Gatilho Diário: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante está Paralisado."
  },
  "Eletrogênese": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Campo Elétrico."
  },
  "Encantação": {
    ativacao: "Constante",
    efeito: "os Golpes Normais do pokémon são agora do Tipo Fada e recebem o Bônus Elemental dobrado."
  },
  "Conquista": {
    ativacao: "Constante",
    efeito: "o pokémon vive com uma Fase elevada de Ataque o tempo todo, contudo todos os Golpes Físicos dele têm suas Dificuldades de Acurácia aumentadas em 2."
  },
  "Escama Maravilhosa": {
    ativacao: "Constante",
    efeito: "quando este pokémon recebe Congelamento, Paralisia, Queimadura, Sono ou Veneno, eleve duas Fases da Defesa Especial dele. Se ele for curado da Condição, ele perde as duas Fases da Defesa Especial."
  },
  "Escrita": {
    ativacao: "Ativação Semanal",
    efeito: "1d2 Unown aparecem. Eles não são hostis."
  },
  "Escudo Espectral": {
    ativacao: "Gatilho Constante: sofrer dano quando antes estava com seus Pontos de Vida completos",
    efeito: "reduza o dano à metade depois da aplicação de vulnerabilidades e resistências e da aplicação de Defesa ou Defesa Especial."
  },
  "Espículas Metálicas": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante perde um oitavo de seus PV máximos. Não aplique vulnerabilidades ou resistências nem Atributos a este dano."
  },
  "Espículas Venenosas": {
    ativacao: "Gatilho Diário: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante é Envenenado."
  },
  "Espírito Vigoroso": {
    ativacao: "Constante",
    efeito: "imunidade a Sono."
  },
  "Esporulação": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe Corpo a Corpo",
    efeito: "role 1d20. Se o resultado for 15 ou 16, o atacante está Envenenado. Se o resultado for 17 ou 18, ele está Paralisado. Se o resultado for 19 ou 20, ele sofre Sono."
  },
  "Estrela da Vitória": {
    ativacao: "Constante",
    efeito: "as Dificuldades de Acurácia de todos os aliados são reduzidas em 2."
  },
  "Explosão de Velocidade": {
    ativacao: "Ativação Horária",
    efeito: "até o fim do encontro, eleve uma Fase de Velocidade a cada rodada."
  },
  "Fedor": {
    ativacao: "Gatilho Constante: usar um Golpe causador de dano",
    efeito: "os alvos do Golpe ficam Atordoados se o resultado do Teste de Acurácia for 19 ou 20. Se o Golpe já possuía uma chance de Atordoar condicionada à obtenção de determinado número mínimo no Teste de Acurácia, reduza em 2 o resultado mínimo no Teste de Acurácia para ter sucesso em Atordoar."
  },
  "Ferro Puro": {
    ativacao: "Constante",
    efeito: "este pokémon adiciona uma quantidade igual ao dobro do Bônus Elemental dele às rolagens de dano de Golpes Metálicos. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não aqueles Golpes."
  },
  "Filtro": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe superefetivo",
    efeito: "reduza a quantidade de Pontos de Vida perdidos a três quartos da quantidade que seria perdida."
  },
  "Firmeza": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe causador de dano",
    efeito: "eleve uma Fase de Defesa do pokémon após o dano ser sofrido."
  },
  "Foco Interior": {
    ativacao: "Constante",
    efeito: "imunidade a Atordoamento."
  },
  "Força Bruta": {
    ativacao: "Ativação Diária",
    efeito: "até o final do encontro, quando um Golpe tem algum efeito que só se ativa se o pokémon tiver um resultado a partir de um determinado número no Teste de Acurácia, não há nenhuma chance de o efeito se ativar. Em troca, se o Golpe acertar, ele causa dano adicional em uma quantidade igual ao dobro do Bônus Elemental do pokémon (independente se o Bônus Elemental do pokémon abrange ou não Golpes do Tipo usado)."
  },
  "Força Neural": {
    ativacao: "Gatilho Constante: acertar um Golpe causador de dano superefetivo",
    efeito: "+3d20 à rolagem de dano."
  },
  "Flamejante": {
    ativacao: "Gatilho Diário: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante está com Queimadura."
  },
  "Fragmentado": {
    ativacao: "Constante",
    efeito: "este pokémon ignora as imunidades do Tipo Fantasma contra dano Normal e Lutador."
  },
  "Franco-Atirador": {
    ativacao: "Gatilho Constante: causar um Crítico",
    efeito: "adicione um dado rolado de dano idêntico ao dado de dano usado para causar dano conforme descrito na rolagem do Golpe."
  },
  "Fraqueza": {
    ativacao: "Gatilho À Vontade: ser acertado por um Golpe Físico",
    efeito: "o pokémon pode voluntariamente perder uma Fase de Defesa para elevar uma Fase de Velocidade."
  },
  "Frenesi": {
    ativacao: "Gatilho",
    efeito: "quando o pokémon sofre um Crítico, eleve seis Fases de Ataque."
  },
  "Friorento": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver de Granizo, este pokémon recupera 1/16 de seus PV máximos no início de cada rodada."
  },
  "Frondoso": {
    ativacao: "Constante",
    efeito: "enquanto estiver em um terreno Gramado, o pokémon eleva duas Fases da Defesa."
  },
  "Fuga": {
    ativacao: "Constante",
    efeito: "imunidade aos efeitos de Prisões. Além disso, o pokémon recebe +2 a todos os seus Deslocamentos e não pode perder Fases de Velocidade de modo a ficar com uma Fase de Velocidade negativa."
  },
  "Fumaça": {
    ativacao: "Constante",
    efeito: "as Fases deste pokémon não podem ser reduzidas."
  },
  "Galvanização": {
    ativacao: "Constante",
    efeito: "os Golpes Normais do pokémon são agora do Tipo Elétrico e recebem o Bônus Elemental dobrado."
  },
  "Garoa": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Dança da Chuva."
  },
  "Garras Duras": {
    ativacao: "Gatilho Constante: acertar um Golpe Corpo a Corpo causador de dano",
    efeito: "+15 à rolagem de dano."
  },
  "Gatuno": {
    ativacao: "Gatilho Diário: acertar um oponente que possui um item Mantido com um Golpe Corpo a Corpo",
    efeito: "o pokémon obtém o item para si, desde que não possua nenhum item Mantido."
  },
  "Gordura": {
    ativacao: "Gatilho Constante: sofrer dano de Fogo ou de Gelo",
    efeito: "independente de vulnerabilidades e resistências, o pokémon é tratado como se possuísse uma resistência a dano de Fogo e de Gelo."
  },
  "Graça Serena": {
    ativacao: "Constante",
    efeito: "quando um Golpe tem algum efeito que só se ativa se o pokémon tiver um resultado a partir de um determinado número no Teste de Acurácia, reduza o número necessário em 3 para ter sucesso em ativar aquele efeito. Isso não afeta se o Golpe foi um Crítico ou não."
  },
  "Guarda Baixa": {
    ativacao: "Ativação À Vontade",
    efeito: "até o fim do encontro, todos os Golpes que o pokémon usar e todos os Golpe que ele receber acertarão automaticamente."
  },
  "Gula": {
    ativacao: "Constante",
    efeito: "quando o pokémon possui um item consumível como um item Mantido, ele imediatamente o come, e todos os efeitos do item são dobrados."
  },
  "Herbogênese": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon uso o Golpe Campo Gramado."
  },
  "Hidratação": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver Chuvoso, o usuário é imune a Congelamento, Paralisia, Queimadura, Sono e Veneno. Se o clima for mudado para Chuvoso, o alvo é instantaneamente curado destas Condições."
  },
  "Hipercorte": {
    ativacao: "Constante",
    efeito: "o pokémon não perde Fases de Ataque."
  },
  "Humor Variável": {
    ativacao: "Gatilho Constante: um encontro começa",
    efeito: "após 1d4+1 rodadas do início do encontro, role 1d10 e depois outro 1d10 separadamente, e então consulte as tabelas adiante: Primeiro 1d10: 1 ou 2 = Eleve duas Fases de Ataque; 3 ou 4 = Eleve duas Fases de Defesa; 5 ou 6 = Eleve duas Fases de Ataque Especial; 7 ou 8 = Eleve duas Fases de Defesa Especial; 9 ou 10 = Eleve duas Fases de Velocidade. Segundo 1d10: 1 ou 2 = Perca uma Fase de Ataque; 3 ou 4 = Perca uma Fase de Defesa; 5 ou 6 = Perca uma Fase de Ataque Especial; 7 ou 8 = Perca uma Fase de Defesa Especial; 9 ou 10 = Perca uma Fase de Velocidade."
  },
  "Identificação": {
    ativacao: "Ativação Diária",
    efeito: "o alvo adjacente está Preso. Ele ainda pode se deslocar, mas não para mais longe do que 20 metros do pokémon que usou Identificação."
  },
  "Iluminação": {
    ativacao: "Constante",
    efeito: "Golpes que tenham este pokémon como alvo têm a Dificuldade de Acurácia aumentada em 2."
  },
  "Impiedoso": {
    ativacao: "Gatilho Constante: acertar um alvo Envenenado",
    efeito: "o Golpe é um Crítico."
  },
  "Imprudência": {
    ativacao: "Constante",
    efeito: "este pokémon adiciona uma quantidade igual ao dobro do Bônus Elemental dele às rolagens de dano dos seguintes Golpes: Afrochoque, Carga Selvagem, Derrubada, Faca de Dois Gumes, Fúria dos Pássaros, Investida de Cabeça, Investida Trovão, Martelo de Madeira, Submissão, Supervoadora, Voadora. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não aqueles Golpes."
  },
  "Ilusão": {
    ativacao: "Ativação À Vontade",
    efeito: "o pokémon pode desejar aparentar com qualquer coisa que ele queira: uma pedra, uma parede, uma pessoa específica (com todos os seus equipamentos) ou um pokémon específico. Isso não é real, é apenas ilusório, e a ilusão pode ser dissipada quando o pokémon quiser. A critério deste pokémon, ele pode já sair da pokébola com a Ilusão em vigor, aparentando ser outro pokémon desde o início."
  },
  "Ímã": {
    ativacao: "Ativação Horária",
    efeito: "um pokémon alvo do Tipo Metálico não poderá se deslocar para mais longe do que 20 metros do pokémon com Ímã. A critério do pokémon, ele pode impor que o pokémon Metálico alvo não possa se aproximar para mais perto do que 20 metros dele."
  },
  "Impostor": {
    ativacao: "Ativação Diária",
    efeito: "quando Ditto é enviado para fora da pokébola, ele pode usar Transformação como uma Ação Livre. Se o alvo desta Transformação possui quaisquer Fases modificadas para mais ou para menos, aplique as mesmas Fases ao Ditto. Uma das Habilidades do alvo será aleatoriamente determinada e copiada pelo Ditto. Isso perdura até que o Ditto use Transformação de novo."
  },
  "Inabalável": {
    ativacao: "Gatilho Constante: ser Atordoado",
    efeito: "eleva uma Fase de Velocidade."
  },
  "Infiltração": {
    ativacao: "Constante",
    efeito: "o pokémon ignora Ameaças, Barreiras e Coberturas."
  },
  "Inflamável": {
    ativacao: "Constante",
    efeito: "quando este pokémon recebe Queimadura, eleve duas Fases do Ataque Especial dele. Se ele for curado da Queimadura, ele perde as duas Fases do Ataque Especial."
  },
  "Insônia": {
    ativacao: "Constante",
    efeito: "imunidade a Sono."
  },
  "Intimidar": {
    ativacao: "Ativação Horária",
    efeito: "um alvo perde uma Fase de Ataque."
  },
  "Isolamento Térmico": {
    ativacao: "Constante",
    efeito: "o pokémon sofre apenas metade do dano que sofreria por dano de Fogo."
  },
  "Justiceiro": {
    ativacao: "Gatilho Constante: sofrer dano de Trevas",
    efeito: "eleva uma Fase de Ataque."
  },
  "Lentidão": {
    ativacao: "Gatilho Constante: um encontro começa",
    efeito: "pelas três primeiras rodadas, o Ataque e a Velocidade do pokémon são reduzidos à metade."
  },
  "Leveza": {
    ativacao: "Gatilho Constante: consumir um item Mantido",
    efeito: "eleve duas Fases de Velocidade."
  },
  "Levitação": {
    ativacao: "Constante",
    efeito: "imunidade a Golpes de Terra."
  },
  "Ligação": {
    ativacao: "Gatilho Constante: usar um Golpe com o Descritor Saraivada",
    efeito: "o Golpe pode ser usado pelo maior número de vezes possível, mesmo que haja falhas em acertar."
  },
  "Ligeiro": {
    ativacao: "Constante",
    efeito: "quando este pokémon recebe Congelamento, Queimadura, Sono ou Veneno, eleve duas Fases da Velocidade dele. Se ele for curado da Condição, ele perde as duas Fases de Velocidade. Quando este pokémon recebe Paralisia, eleve quatro Fases da Velocidade dele. Se for curado da Paralisia, ele perde as quatro Fases da Velocidade."
  },
  "Lodo": {
    ativacao: "Gatilho Constante: sofrer dano por um destes Golpes: Absorção, Chifre Sanguessuga, Gigadreno, Megadreno, Sanguessuga, Semente Sanguessuga, Soco de Drenagem",
    efeito: "após calcular a quantidade de Pontos de Vida que o atacante recuperaria usando o Golpe, ele sofre esta quantidade de dano, em vez de recuperar PV. Não aplique resistências e vulnerabilidades nem Atributos."
  },
  "Maciez": {
    ativacao: "Gatilho Constante: sofrer dano Físico",
    efeito: "o pokémon sofre apenas metade do dano, salvo o Tipo do dano for Fogo, caso em que o pokémon sofre o dobro do dano."
  },
  "Madrugar": {
    ativacao: "Constante",
    efeito: "quando o pokémon faz Testes de Sono, o contador para acordar começa em 11, e não em 16. Ele é reduzido normalmente e atinge o mínimo no mesmo valor."
  },
  "Mágica": {
    ativacao: "Gatilho À Vontade: acertar um oponente que possui um item Mantido com um Golpe À Distância",
    efeito: "o pokémon obtém o item para si, desde que não possua nenhum item Mantido."
  },
  "Mais": {
    ativacao: "Constante",
    efeito: "enquanto houver pelo menos um aliado com a Habilidade Menos a até 10 metros, todos os pokémons aliados com Mais e Menos até 10 metros elevam duas Fases de Ataque Especial. Mesmo que haja múltiplos pokémons com Mais e Menos, apenas duas Fases são elevadas."
  },
  "Majestade": {
    ativacao: "Constante",
    efeito: "ninguém pode usar Golpes com o Descritor Interrupção a até 20 metros da Majestade."
  },
  "Mandíbula": {
    ativacao: "Constante",
    efeito: "este pokémon adiciona uma quantidade igual ao Bônus Elemental dele às rolagens de dano dos seguintes Golpes: Hiperpresa, Mastigada, Mordida, Picada e qualquer Golpe que comece com a palavra 'presa'. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não aqueles Golpes."
  },
  "Manto de Areia": {
    ativacao: "Ativação Horária",
    efeito: "desde que o clima seja uma Tempestade de Areia, o pokémon pode criar um bolsão de clima ameno ao seu redor e também ao redor de qualquer alvo que esteja a menos de 15 metros de distância (e dentro da Tempestade de Areia). Qualquer Golpe contra um alvo dentro de um destes bolsões tem a Dificuldade de Acurácia aumentada em 2. Os bolsões permanecem enquanto o pokémon quiser e estiver consciente."
  },
  "Manto de Neve": {
    ativacao: "Ativação Horária",
    efeito: "desde que o clima seja de Granizo, o pokémon pode criar um bolsão de clima ameno ao seu redor e também ao redor de qualquer alvo que ele deseje a menos de 15 metros de distância (e dentro do Granizo). Qualquer Golpe contra um alvo dentro de um destes bolsões tem a Dificuldade de Acurácia aumentada em 2. Os bolsões permanecem enquanto o pokémon quiser e estiver consciente."
  },
  "Mediocridade": {
    ativacao: "Gatilho Constante: elevar uma ou mais Fases ou perder uma ou mais Fases",
    efeito: "dobre o número de Fases elevadas ou perdidas."
  },
  "Mel": {
    ativacao: "Ativação Diária",
    efeito: "o pokémon acha Mel se ele não estiver com nenhum item Mantido. Se esta Habilidade for ativada durante um encontro, o pokémon não errará os próximos três Golpes, desde que tenha como alvo um pokémon selvagem."
  },
  "Menos": {
    ativacao: "Constante",
    efeito: "enquanto houver pelo menos um aliado com a Habilidade Mais a até 10 metros, todos os pokémons aliados com Mais e Menos até 10 metros elevam duas Fases de Ataque Especial. Mesmo que haja múltiplos pokémons com Mais e Menos, apenas duas Fases são elevadas."
  },
  "Metabolização": {
    ativacao: "Constante",
    efeito: "imunidade a Venenos."
  },
  "Metal Leve": {
    ativacao: "Constante",
    efeito: "este pokémon é considerado mais leve em duas Categorias de Peso. Aumente os Deslocamentos dele em 3 e a Capacidade Salto em 1."
  },
  "Metal Pesado": {
    ativacao: "Constante",
    efeito: "este pokémon é considerado mais pesado em duas Categorias de Peso. Ele não pode ser Empurrado."
  },
  "Metal Precioso": {
    ativacao: "Constante",
    efeito: "as Fases deste pokémon não podem ser reduzidas, salvo por Condições."
  },
  "Metamorfose": {
    ativacao: "Ativação Horária",
    efeito: "pelo resto do encontro, quando o pokémon usar um Golpe, ele imediatamente muda seu Tipo para o Tipo do Golpe usado antes de rolar o dano pelo Golpe."
  },
  "Motorização": {
    ativacao: "Constante",
    efeito: "o pokémon é imune a dano Elétrico. Se sofreria dano Elétrico por alguma razão, ele, em vez disso, ele eleva uma Fase de Velocidade."
  },
  "Múltiplas Escamas": {
    ativacao: "Gatilho Constante: sofrer dano quando antes estava com seus Pontos de Vida completos",
    efeito: "reduza o dano à metade antes da aplicação de vulnerabilidades e resistências e antes da aplicação de Defesa ou Defesa Especial."
  },
  "Multitipo": {
    ativacao: "Ativação À Vontade",
    efeito: "Arceus pode mudar seu Tipo a qualquer um dos Tipos elementais. Especial: a Habilidade Multitipo não pode ser copiada, trocada ou desativada de nenhuma forma."
  },
  "Múmia": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante substitui uma das Habilidades dele por Múmia por 1d6+2 rodadas."
  },
  "Nebulogênese": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Campo Enevoado."
  },
  "Normalização": {
    ativacao: "Ativação À Vontade",
    efeito: "até o fim do encontro, todos os Golpes do pokémon são considerados Normais."
  },
  "Obtusidade": {
    ativacao: "Constante",
    efeito: "imunidade à Paixão e ao Golpe Provocação."
  },
  "Oceano Primitivo": {
    ativacao: "Ativação À Vontade",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Dança da Chuva."
  },
  "Olhos Cromados": {
    ativacao: "Gatilho Constante: este pokémon causa dano a um alvo que resiste àquele Tipo de dano",
    efeito: "dobre o dano causado."
  },
  "Olhos Compostos": {
    ativacao: "Constante",
    efeito: "o pokémon reduz todas as suas Dificuldades de Acurácia em 3."
  },
  "Pararraios": {
    ativacao: "Constante",
    efeito: "o pokémon é imune a dano Elétrico. Se sofreria dano Elétrico por alguma razão, ele, em vez disso, eleva uma Fase de Ataque Especial. Além disso, se qualquer outra criatura a até 25 metros usar um Golpe Elétrico À Distância, o Golpe é redirecionado ao pokémon com Pararraios e o acertará automaticamente, ignorando os efeitos dos Golpes Leitura Mental e Mira."
  },
  "Pegajoso": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe Corpo a Corpo",
    efeito: "o atacante perde uma Fase de Velocidade."
  },
  "Pele Perfeita": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe À Distância que inflige uma Condição ou algo semelhante (incluindo Desabilitar)",
    efeito: "jogue um dado. Se o resultado for par, o pokémon ignora aquilo que seria infligido a ele."
  },
  "Peludo": {
    ativacao: "Constante",
    efeito: "o pokémon sofre apenas metade do dano por todos os Golpes Físicos."
  },
  "Pesadelos": {
    ativacao: "Constante",
    efeito: "qualquer criaturas que esteja dormindo a até 30 metros do pokémon perde um oitavo de seus Pontos de Vida máximos no início de cada rodada."
  },
  "Pés Laçados": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe À Distância",
    efeito: "eleve uma Fase da Velocidade."
  },
  "Poder Gigantesco": {
    ativacao: "Constante",
    efeito: "o Atributo Basal de Ataque do pokémon é dobrado. Caso a Natureza do pokémon afete seu Ataque, Poder Gigantesco será calculado após definir o Atributo Basal conforme a Natureza. Se o Ataque do pokémon for modificado por Vitaminas, recalcule o benefício de Poder Gigantesco. Não recalcule em outras modificações."
  },
  "Poder Puro": {
    ativacao: "Constante",
    efeito: "o Atributo Basal de Ataque do pokémon é dobrado. Caso a Natureza do pokémon afete seu Ataque, Poder Puro será calculado após definir o Atributo Basal conforme a Natureza. Se o Ataque do pokémon for modificado por Vitaminas, recalcule o benefício de Poder Puro. Não recalcule em outras modificações."
  },
  "Poder Solar": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver Ensolarado, este pokémon recupera um oitavo de seus PV máximos no início de cada rodada e eleva duas Fases de Ataque Especial."
  },
  "Polvilhar": {
    ativacao: "Gatilho Constante: ser acertado por um Golpe causador de dano",
    efeito: "este pokémon sofre apenas o dano do Golpe, sem nenhum outro efeito associado."
  },
  "Posturas": {
    ativacao: "Constante",
    efeito: "todas as vezes que Aegislash usar um Golpe causador de dano, troque seus valores de Ataque e Defesa um pelo outro e também seus valores de Ataque Especial e Defesa Especial um pelo outro. Os valores assim permanecem até que Aegislash use um Golpe com o Descritor Interceptação."
  },
  "Prato de Chuva": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver Chuvoso, este pokémon recupera 1/16 de seus PV máximos no início de cada rodada."
  },
  "Prazer": {
    ativacao: "Constante",
    efeito: "adicione o Descritor Interrupção a todos os Golpes conhecidos que curam Pontos de Vida ou Condições."
  },
  "Preguiça": {
    ativacao: "Gatilho Constante: tentar usar um Golpe ou tentar se deslocar",
    efeito: "role 1d20. Se o resultado for menor que 9, o pokémon não fará absolutamente nada durante toda a rodada. Se o resultado for maior que 8, o pokémon agirá normalmente durante aquela rodada."
  },
  "Premonição": {
    ativacao: "Ativação Horária",
    efeito: "o Golpe com maior Dano Basal conhecido pelo alvo é revelado. Se há um empate entre mais de um Golpe nestas condições, todos são revelados. Todos os Golpes revelados por este Talento têm sua Dificuldade de Acurácia aumentada em 2."
  },
  "Presente das Flores": {
    ativacao: "Ativação Horária",
    efeito: "desde que o clima esteja Ensolarado, o pokémon pode criar uma Explosão com 4 metros de raio. Ele e todos os aliados nesta área elevam duas Fases de Defesa Especial e de Ataque."
  },
  "Pressão": {
    ativacao: "Ativação Diária",
    efeito: "se algum efeito havia permitido usar um Golpe mais frequentemente que a Frequência original dele, o efeito é anulado assim que Pressão for ativada. Além disso, qualquer Golpe que poderia ser usado À Vontade, agora só pode ser usado Rodada Sim Rodada Não."
  },
  "Prisma": {
    ativacao: "Gatilho Constante: ser acertado um Golpe superefetivo",
    efeito: "Necrozma sofre dano neutro pelo Golpe, como se não fosse superefetivo."
  },
  "Proteção Mágica": {
    ativacao: "Constante",
    efeito: "quando este pokémon perderia Pontos de Vida por qualquer razão que não seja o resultado de uma rolagem de dano, ele não perde os PV. Isso inclui (mas não se limita a) efeitos climáticos, Condições, armadilhas, dano causado a si próprio em virtude de Golpes, Semente Sanguessuga, e outros."
  },
  "Proteção Vegetal": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver Ensolarado, o usuário é imune a Congelamento, Paralisia, Queimadura, Sono e Veneno. Se o clima for mudado para Ensolarado, o alvo é instantaneamente curado destas Condições."
  },
  "Psicogênese": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Campo Psíquico."
  },
  "Punho de Ferro": {
    ativacao: "Constante",
    efeito: "este pokémon adiciona uma quantidade igual ao dobro do Bônus Elemental dele às rolagens de dano dos seguintes Golpes: Braço Martelo, Gancho, Megassoco, Meteoro e qualquer Golpe que comece com a palavra 'soco'. Isso ocorre de maneira independente do Bônus Elemental do pokémon abranger ou não aqueles Golpes."
  },
  "Quebra Moldes": {
    ativacao: "Ativação Horária",
    efeito: "as Habilidades do alvo é desativada até o fim do encontro."
  },
  "Receptor": {
    ativacao: "Gatilho À Vontade: um aliado fica inconsciente",
    efeito: "o pokémon pode substituir esta Habilidade pela Habilidade do aliado até o fim do encontro."
  },
  "Recuperação": {
    ativacao: "Ativação Horária",
    efeito: "o pokémon é curado das seguintes Condições: Congelamento, Paralisia, Queimadura, Sono e Veneno."
  },
  "Reflexo Mágico": {
    ativacao: "Gatilho Horário: ser atingido por um Golpe não causador de dano",
    efeito: "o Golpe é refletido de volta ao atacante. É possível refletir a imposição de Ameaças que estejam sendo posicionadas a até 10 metros do pokémon."
  },
  "Refrigeração": {
    ativacao: "Constante",
    efeito: "os Golpes Normais do pokémon são agora do Tipo Gelo e recebem o Bônus Elemental dobrado."
  },
  "Regeneração": {
    ativacao: "Ativação Horária",
    efeito: "o pokémon recupera um quarto de seus PV máximos."
  },
  "Resquício": {
    ativacao: "Gatilho Constante: quando o pokémon for reduzido a zero Pontos de Vida ou menos",
    efeito: "ocorre uma Explosão de cinco metros. Tudo dentro da área perde um quarto dos Pontos de Vida máximos, sem aplicar resistências ou vulnerabilidades nem aplicar Atributos."
  },
  "Ressecado": {
    ativacao: "Constante",
    efeito: "enquanto o clima estiver Ensolarado, este pokémon perde um oitavo de seus PV máximos no início de cada rodada. Enquanto o clima estiver Chuvoso, este pokémon recupera um oitavo de seus PV máximos no início de cada rodada. O pokémon Ressecado sofre Golpes de Fogo como se o Ataque e o Ataque Especial do pokémon que está usando o Golpe estivessem com uma Fase a mais. Golpes de Água curam pokémons Ressecados. Calcule o dano como se o pokémon Ressecado possuísse uma resistência ao Golpe e então cure o resultado do dano que seria sofrido."
  },
  "Revestimento Magmático": {
    ativacao: "Constante",
    efeito: "imunidade a Congelamento."
  },
  "Ritmo Próprio": {
    ativacao: "Constante",
    efeito: "imunidade a Confusão."
  },
  "Rivalidade": {
    ativacao: "Gatilho Por Encontro: estar batalhando contra um pokémon do mesmo sexo que o pokémon com Rivalidade",
    efeito: "eleva duas Fases de Ataque."
  },
  "Robustez": {
    ativacao: "Constante",
    efeito: "imunidade aos seguintes Golpes: Chifre Broca, Fissura, Guilhotina, Zero Absoluto. Se este pokémon estiver com todos os seus Pontos de Vida e um Golpe reduzir seus Pontos de Vida a zero ou menos, ele, em vez disso, é deixado com 1 Ponto de Vida."
  },
  "Rompimento de Aura": {
    ativacao: "Constante",
    efeito: "se as Habilidades Aura de Trevas ou Aura Feérica estiverem ativas, os efeitos delas são invertidos, penalizando as rolagens de dano em vez de beneficiá-los."
  },
  "Saída de Emergência": {
    ativacao: "Gatilho Constante: estar abaixo de metade dos PV máximos",
    efeito: "o pokémon imediatamente começa a fugir, recebendo +20 a todos os seus Deslocamentos. Se o dono não convocar o pokémon de volta à pokébola em seu próximo turno, a Lealdade do pokémon será reduzida."
  },
  "Seca": {
    ativacao: "Ativação Horária",
    efeito: "como uma Ação Livre, o pokémon usa o Golpe Dia de Sol."
  },
  "Sem Alma": {
    ativacao: "Constante",
    efeito: "imunidade a todos os Golpes que não sejam superefetivos causadores de dano. É impossível aumentar a Saúde deste pokémon. Os Pontos de Vida máximos dele serão sempre 1, e ele não pode receber Pontos de Vida temporários. Shedinja nunca precisa fazer Testes de Morte. Shedinja jamais poderá se beneficiar de qualquer uma das Características de Classe do Inquebrável. Shedinja nunca pode receber a Habilidade Solidez. Especial: a Habilidade Sem Alma não pode ser copiada ou trocada de nenhuma forma, a menos que Arceus a esteja copiando para si."
  },
  "Simbiose": {
    ativacao: "Ativação À Vontade",
    efeito: "o pokémon dá seu item Mantido a um alvo adjacente, desde que este não possua um item Mantido."
  },
  "Sincronizar": {
    ativacao: "Gatilho Horário: um oponente impõe uma das seguintes Condições ao pokémon com Sincronizar: Congelamento, Paralisia, Queimadura, Sono ou Veneno",
    efeito: "o oponente recebe a mesma Condição que ele causou."
  },
  "Sistema": {
    ativacao: "Ativação À Vontade",
    efeito: "como uma Ação Livre e desde que possua um Disco de Memória como item Mantido, o pokémon pode mudar seu Tipo para o Tipo associado ao Disco de Memória que possui como item Mantido."
  },
  "Solidez": {
    ativacao: "Constante",
    efeito: "este pokémon sofre metade do dano dos Golpes superefetivos."
  },
  "Sorte": {
    ativacao: "Constante",
    efeito: "este pokémon reduz em dois pontos o valor mínimo necessário obtido no Teste de Acurácia para que o Golpe seja um Crítico (normalmente isso significa que o Golpe será um Crítico em um resultado no mínimo 18, a menos que o Golpe possua uma margem maior)."
  },
  "Surfista": {
    ativacao: "Ativação Diária",
    efeito: "desde que esteja em um Campo Elétrico, eleve quatro Fases de Velocidade. Este aumento de Fases de Velocidade não aumenta a Evasão do pokémon."
  },
  "Técnica": {
    ativacao: "Gatilho À Vontade: usar um Golpe causador de dano cujo Dano Basal não pode alcançar pelo menos 30, mesmo que todos os dados tenham os melhores resultados",
    efeito: "+2d10 à rolagem de dano. Se o Golpe possui o Descritor Saraivada, só aplique o dano extra uma vez."
  },
  "Telepatia": {
    ativacao: "Gatilho À Vontade: ser um dos possíveis atingidos por um Golpe cujo atacante é um aliado",
    efeito: "o atacante avisa o pokémon telepaticamente sobre o Golpe, de modo que o pokémon telepata não sofre nenhum dos efeitos do Golpe se não quiser."
  },
  "Tenacidade": {
    ativacao: "Constante",
    efeito: "quando este pokémon recebe Congelamento, Paralisia, Queimadura, Sono ou Veneno, eleve duas Fases do Ataque dele. Se ele for curado da Condição, ele perde as duas Fases do Ataque."
  },
  "Tensão": {
    ativacao: "Constante",
    efeito: "enquanto você tiver linha de visão a um inimigo em combate, este inimigo não poderá comer ou beber nada."
  },
  "Tentação": {
    ativacao: "Gatilho Diário: um pokémon do sexo oposto ataca o pokémon Adorável",
    efeito: "o atacante é afetado por Paixão."
  },
  "Teravoltagem": {
    ativacao: "Ativação Horária",
    efeito: "as Habilidades do alvo é desativada até o fim do encontro."
  },
  "Toque Tóxico": {
    ativacao: "Constante",
    efeito: "os Golpes Físicos causadores de dano deste pokémon Envenenam os alvos se o resultado do Teste de Acurácia for 15 ou mais. Se algum destes Golpes já Envenenaria o alvo, mas com uma probabilidade menor, ajuste conforme Toque Tóxico."
  },
  "Transparência": {
    ativacao: "Constante",
    efeito: "as Fases deste pokémon não podem ser reduzidas, salvo por Condições."
  },
  "Travessura": {
    ativacao: "Ativação Diária",
    efeito: "pelo resto do encontro, qualquer Golpe não causador de dano que o pokémon conheça recebe o Descritor Interrupção. Travessura não afeta Golpes que reduzem inimigos diretamente a zero Pontos de Vida."
  },
  "Troca de Pele": {
    ativacao: "Ativação Horária",
    efeito: "o pokémon se cura de Congelamento, Paralisia, Queimadura, Sono e Veneno."
  },
  "Turbochama": {
    ativacao: "Ativação Horária",
    efeito: "as Habilidades do alvo é desativada até o fim do encontro."
  },
  "Última Chance": {
    ativacao: "Gatilho Constante: os Pontos de Vida do pokémon são reduzidos a um terço dos PV máximos ou menos",
    efeito: "dobre o Bônus Elemental do pokémon para o Tipo determinado quando Última Chance foi escolhida. Última Chance continua associada ao mesmo Tipo de quando for escolhida, mesmo que o Tipo do pokémon mude temporária ou permanentemente. Especial: esta Habilidade pode ser escolhida até duas vezes. Seus efeitos não se acumulam. Cada vez que ela é escolhida, ele é aplicada a um Tipo diferente."
  },
  "Ultrabesta": {
    ativacao: "Gatilho Constante: este pokémon deixa outro pokémon inconsciente",
    efeito: "eleve uma Fase do maior Atributo do pokémon, descontando Saúde da lista de Atributos."
  },
  "Umidade": {
    ativacao: "Constante",
    efeito: "a Habilidade Resquício e os Golpes Autodestruição e Explosão não podem ser usados ou ativados a até 20 metros do pokémon com Umidade."
  },
  "Veneno Curador": {
    ativacao: "Constante",
    efeito: "quando está Envenenado, o pokémon recupera um oitavo de seus PV máximos a cada rodada, e não perde nenhum PV pelos efeitos do Veneno. Ele também não tem suas Fases reduzidas por estar Envenenado."
  },
  "Ventosas": {
    ativacao: "Constante",
    efeito: "imunidade a Empurrões e também aos Golpes Rajada de Vento e Rugido."
  },
  "Vestígio": {
    ativacao: "Ativação Horária",
    efeito: "o pokémon copia a Habilidade de um alvo a até 10 metros de si. Ele a mantém para si por tempo indefinido, mas as seguintes situações o fazem perder a Habilidade copiada: ficar inconsciente ou ser convocado de volta à pokébola."
  },
  "Véu Aromático": {
    ativacao: "Constante",
    efeito: "o pokémon e seus aliados adjacentes são imunes aos seguintes Golpes: Atração, Bis, Bloquear Cura, Desabilitar, Provocação, Tormento."
  },
  "Véu Doce": {
    ativacao: "Constante",
    efeito: "o pokémon e seus aliados adjacentes são imunes a Sono."
  },
  "Véu Florido": {
    ativacao: "Constante",
    efeito: "o pokémon e seus aliados do Tipo Planta são imunes a Confusão e Paixão e não podem ter seus Atributos diminuídos."
  },
  "Vigília": {
    ativacao: "Gatilho Diário: o pokémon usa um Golpe causador de dano contra um alvo que acabou de sair da pokébola",
    efeito: "o Golpe causa dano dobrado após serem aplicadas vulnerabilidades e resistências."
  },
  "Vínculo Profundo": {
    ativacao: "Ativação Diária",
    efeito: "o pokémon pode ignorar a necessidade da Megapedra para megaevoluir."
  },
  "Visão Aguçada": {
    ativacao: "Constante",
    efeito: "este pokémon não pode ter as Dificuldades de Acurácia afetadas negativamente (mas a Evasão do oponente se aplica normalmente)."
  },
  "Vísceras Extensíveis": {
    ativacao: "Gatilho Constante: ficar inconsciente em virtude de um Golpe Corpo a Corpo causador de dano",
    efeito: "causa ao atacante uma quantidade de dano idêntica à quantidade de Pontos de Vida que possuía. Não aplique vulnerabilidades ou resistências a este dano."
  },
  "Viscosidade": {
    ativacao: "Constante",
    efeito: "os itens Mantidos do pokémon não podem ser roubados, trocados, destruídos ou soltos."
  },
  "Velocidade na Água": {
    ativacao: "Ativação Horária",
    efeito: "desde que o Clima esteja Chuvoso, ativar esta Habilidade eleva quatro Fases de Velocidade."
  },
  "Velocidade na Neve": {
    ativacao: "Ativação Diária",
    efeito: "desde que o Clima esteja de Granizo, ativar esta Habilidade eleva quatro Fases de Velocidade e torna o pokémon imune ao dano pelo Granizo até o fim do encontro. Este aumento de Fases de Velocidade não aumenta a Evasão do pokémon."
  },
  "Velocidade na Terra": {
    ativacao: "Ativação Diária",
    efeito: "desde que o Clima esteja de Tempestade de Areia, ativar esta Habilidade eleva quatro Fases de Velocidade e torna o pokémon imune ao dano pela Tempestade de Areia até o fim do encontro. Este aumento de Fases de Velocidade não aumenta a Evasão do pokémon."
  },
  "Voz Líquida": {
    ativacao: "Constante",
    efeito: "quando usar um Golpe com o Descritor Som, o Tipo do Golpe é mudado para Água."
  },
  "Zen": {
    ativacao: "Constante",
    efeito: "Darmanitan possui dois conjuntos de Atributos Basais diferentes para seus Atributos, gerando duas Relações Basais distintas: uma para sua Forma Padrão e uma para sua Forma Zen. Ele deve manter o valor de seu Atributo Saúde igual em ambas as Formas. Desde que esteja com menos da metade de seus Pontos de Vida máximos, Darmanitan pode, uma vez por encontro, usar uma Ação Livre para mudar para a Forma Zen, alterando todo o conjunto de Atributos para o da Forma Zen. Uma vez tendo assumido a Forma Zen, ele poderá voltar à Forma Padrão usando uma Ação Livre, o que torna seus Atributos como normalmente são. A Forma Zen do Darmanitan recebe o Tipo Psíquico em adição ao Tipo Fogo que é o padrão do Darmanitan. Se algum efeito aumentar ou reduzir Atributos ou Atributos Basais, os Atributos ou Atributos Basais de ambas as formas são alterados. Isso inclui Fases."
  }
}

const HABILIDADES_NAMES = Object.keys(HABILIDADES_DATA).sort()

export { HABILIDADES_DATA, HABILIDADES_NAMES }
export default HABILIDADES_DATA
