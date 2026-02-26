const pokedex = [
  
  //KantoDex 001 - 151
  
  // Linha do Bulbassauro
  {"dexNumber":1,"nome":"Bulbassauro","altura":0.7,"peso":6.9,"genero":"87_12","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva"],"catchRate":20,"baseExp":15,"evolucao":2,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":2,"nome":"Ivyssauro","altura":1.0,"peso":13.0,"genero":"87_12","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":30,"evolucao":3,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":3,"nome":"Venussauro","altura":2.0,"peso":100.0,"genero":"87_12","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":8}},

  // Linha do Charmander
  {"dexNumber":4,"nome":"Charmander","altura":0.6,"peso":8.5,"genero":"87_12","tipos":["Fogo"],"habitats":["montanha","caverna"],"catchRate":20,"baseExp":15,"evolucao":5,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":5,"nome":"Charmeleon","altura":1.1,"peso":19.0,"genero":"87_12","tipos":["Fogo"],"habitats":["montanha","caverna"],"catchRate":10,"baseExp":30,"evolucao":6,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":8}},
  {"dexNumber":6,"nome":"Charizard","altura":1.7,"peso":90.5,"genero":"87_12","tipos":["Fogo","Voador"],"habitats":["montanha","caverna"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":11,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":10}},

  // Linha do Squirtle
  {"dexNumber":7,"nome":"Squirtle","altura":0.5,"peso":9.0,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","oceano","praia"],"catchRate":20,"baseExp":15,"evolucao":8,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":8,"nome":"Wartortle","altura":1.0,"peso":22.5,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","oceano","praia"],"catchRate":10,"baseExp":30,"evolucao":9,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":9,"nome":"Blastoise","altura":1.6,"peso":85.5,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","oceano","praia"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":11,"ataqueEspecial":9,"defesaEspecial":12,"velocidade":8}},

  // Linha do Caterpie
  {"dexNumber":10,"nome":"Caterpie","altura":0.3,"peso":2.9,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta"],"catchRate":45,"baseExp":5,"evolucao":11,"evolucaoNivel":7,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":4,"ataqueEspecial":2,"defesaEspecial":2,"velocidade":5}},
  {"dexNumber":11,"nome":"Metapod","altura":0.7,"peso":9.9,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta"],"catchRate":30,"baseExp":10,"evolucao":12,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":2,"defesa":6,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
  {"dexNumber":12,"nome":"Butterfree","altura":1.1,"peso":32.0,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":7}},

  // Linha do Weedle
  {"dexNumber":13,"nome":"Weedle","altura":0.3,"peso":3.2,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta"],"catchRate":45,"baseExp":5,"evolucao":14,"evolucaoNivel":7,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":3,"ataqueEspecial":2,"defesaEspecial":2,"velocidade":5}},
  {"dexNumber":14,"nome":"Kakuna","altura":0.6,"peso":10.0,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta"],"catchRate":30,"baseExp":10,"evolucao":15,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":5,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":15,"nome":"Beedrill","altura":1.0,"peso":29.5,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":4,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":8}},

  // Linha do Pidgey
  {"dexNumber":16,"nome":"Pidgey","altura":0.3,"peso":1.8,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","cidade"],"catchRate":25,"baseExp":15,"evolucao":17,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":17,"nome":"Pidgeotto","altura":1.1,"peso":30.0,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta"],"catchRate":20,"baseExp":30,"evolucao":18,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":18,"nome":"Pidgeot","altura":1.5,"peso":39.5,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},

  // Linha do Rattata
  {"dexNumber":19,"nome":"Rattata","altura":0.3,"peso":3.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria","montanha","caverna","cidade"],"catchRate":40,"baseExp":10,"evolucao":20,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":6,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":20,"nome":"Raticate","altura":0.7,"peso":18.5,"genero":"50_50","tipos":["Normal"],"habitats":["caverna","floresta","pradaria","montanha"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":10}},

  // Linha do Spearow
  {"dexNumber":21,"nome":"Spearow","altura":0.3,"peso":2.0,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","pradaria","montanha","cidade"],"catchRate":40,"baseExp":10,"evolucao":22,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":7}},
  {"dexNumber":22,"nome":"Fearow","altura":1.2,"peso":38.0,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","pradaria","montanha"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},

  // Linha do Ekans
  {"dexNumber":23,"nome":"Ekans","altura":2.0,"peso":6.9,"genero":"50_50","tipos":["Veneno"],"habitats":["pradaria","pantano"],"catchRate":25,"baseExp":15,"evolucao":24,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":24,"nome":"Arbok","altura":3.5,"peso":65.0,"genero":"50_50","tipos":["Veneno"],"habitats":["pradaria"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":7,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":8}},

  // Linha do Pikachu
  {"dexNumber":25,"nome":"Pikachu","altura":0.4,"peso":6.0,"genero":"50_50","tipos":["Elétrico"],"habitats":["floresta","pradaria","cidade"],"catchRate":15,"baseExp":15,"evolucao":26,"evolucaoNivel":null,"evolucaoItem":"thunderstone","statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":26,"nome":"Raichu","altura":0.8,"peso":30.0,"genero":"50_50","tipos":["Elétrico"],"habitats":["floresta"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":11}},

  // Linha do Sandshrew
  {"dexNumber":27,"nome":"Sandshrew","altura":0.6,"peso":12.0,"genero":"50_50","tipos":["Terra"],"habitats":["pradaria","caverna","deserto"],"catchRate":15,"baseExp":10,"evolucao":28,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":9,"ataqueEspecial":2,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":28,"nome":"Sandslash","altura":1.0,"peso":29.5,"genero":"50_50","tipos":["Terra"],"habitats":["pradaria","caverna","deserto"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":11,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":7}},

  // Linha do Nidoran F
  {"dexNumber":29,"nome":"Nidoran F","altura":0.4,"peso":7.0,"genero":"0_100","tipos":["Veneno"],"habitats":["pradaria"],"catchRate":25,"baseExp":15,"evolucao":30,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":30,"nome":"Nidorina","altura":0.8,"peso":20.0,"genero":"0_100","tipos":["Veneno"],"habitats":["pradaria"],"catchRate":15,"baseExp":30,"evolucao":31,"evolucaoNivel":null,"evolucaoItem":"moonstone","statusBasais":{"saude":7,"ataque":6,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":31,"nome":"Nidoqueen","altura":1.3,"peso":60.0,"genero":"0_100","tipos":["Veneno","Terra"],"habitats":["pradaria","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":9,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":8}},

  // Linha do Nidoran M
  {"dexNumber":32,"nome":"Nidoran M","altura":0.5,"peso":9.0,"genero":"100_0","tipos":["Veneno"],"habitats":["pradaria","montanha"],"catchRate":25,"baseExp":15,"evolucao":33,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":33,"nome":"Nidorino","altura":0.9,"peso":20.0,"genero":"100_0","tipos":["Veneno"],"habitats":["pradaria"],"catchRate":15,"baseExp":30,"evolucao":34,"evolucaoNivel":null,"evolucaoItem":"moonstone","statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":34,"nome":"Nidoking","altura":1.3,"peso":60.0,"genero":"100_0","tipos":["Veneno","Terra"],"habitats":["pradaria","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":8,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":9}},

  // Linha do Clefairy
  {"dexNumber":35,"nome":"Clefairy","altura":0.6,"peso":7.5,"genero":"25_75","tipos":["Fada"],"habitats":["montanha","caverna"],"catchRate":20,"baseExp":15,"evolucao":36,"evolucaoNivel":null,"evolucaoItem":"moonstone","statusBasais":{"saude":7,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":4}},
  {"dexNumber":36,"nome":"Clefable","altura":1.3,"peso":40.0,"genero":"25_75","tipos":["Fada"],"habitats":["montanha","caverna"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":6}},

  // Linha do Vulpix
  {"dexNumber":37,"nome":"Vulpix","altura":0.6,"peso":9.9,"genero":"25_75","tipos":["Fogo"],"habitats":["pradaria","montanha","floresta"],"catchRate":25,"baseExp":10,"evolucao":38,"evolucaoNivel":null,"evolucaoItem":"firestone","statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":7}},
  {"dexNumber":38,"nome":"Ninetales","altura":1.0,"peso":19.9,"genero":"25_75","tipos":["Fogo"],"habitats":["pradaria","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":8,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":10}},

  // Linha do Jigglypuff
  {"dexNumber":39,"nome":"Jigglypuff","altura":0.5,"peso":5.5,"genero":"25_75","tipos":["Normal","Fada"],"habitats":["pradaria","caverna","cidade"],"catchRate":20,"baseExp":15,"evolucao":40,"evolucaoNivel":null,"evolucaoItem":"moonstone","statusBasais":{"saude":12,"ataque":5,"defesa":2,"ataqueEspecial":5,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":40,"nome":"Wigglytuff","altura":1.0,"peso":12.0,"genero":"25_75","tipos":["Normal","Fada"],"habitats":["pradaria","caverna"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":7,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":5}},

  // Linha do Zubat
  {"dexNumber":41,"nome":"Zubat","altura":0.8,"peso":7.5,"genero":"50_50","tipos":["Veneno","Voador"],"habitats":["caverna"],"catchRate":15,"baseExp":15,"evolucao":42,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":42,"nome":"Golbat","altura":1.6,"peso":55.0,"genero":"50_50","tipos":["Veneno","Voador"],"habitats":["caverna"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":7,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":9}},

  // Linha do Oddish
  {"dexNumber":43,"nome":"Oddish","altura":0.5,"peso":5.4,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva","pantano"],"catchRate":25,"baseExp":15,"evolucao":44,"evolucaoNivel":21,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":3}},
  {"dexNumber":44,"nome":"Gloom","altura":0.8,"peso":8.6,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva","pantano"],"catchRate":15,"baseExp":30,"evolucao":45,"evolucaoNivel":null,"evolucaoItem":"leafstone","statusBasais":{"saude":6,"ataque":7,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":4}},
  {"dexNumber":45,"nome":"Vileplume","altura":1.2,"peso":18.6,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva","pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":9,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":5}},

  // Linha do Paras
  {"dexNumber":46,"nome":"Paras","altura":0.3,"peso":5.4,"genero":"50_50","tipos":["Inseto","Planta"],"habitats":["selva","caverna"],"catchRate":20,"baseExp":10,"evolucao":47,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":7,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":47,"nome":"Parasect","altura":1.0,"peso":29.5,"genero":"50_50","tipos":["Inseto","Planta"],"habitats":["selva","caverna"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":3}},

  // Linha do Venonat
  {"dexNumber":48,"nome":"Venonat","altura":1.0,"peso":30.0,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta","selva"],"catchRate":20,"baseExp":15,"evolucao":49,"evolucaoNivel":31,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":49,"nome":"Venomoth","altura":1.5,"peso":12.5,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta","selva"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":9}},

  // Linha do Diglett
  {"dexNumber":50,"nome":"Diglett","altura":0.2,"peso":0.8,"genero":"50_50","tipos":["Terra"],"habitats":["pradaria","caverna","deserto"],"catchRate":30,"baseExp":10,"evolucao":51,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":1,"ataque":6,"defesa":3,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":10}},
  {"dexNumber":51,"nome":"Dugtrio","altura":0.7,"peso":33.3,"genero":"50_50","tipos":["Terra"],"habitats":["pradaria","caverna","deserto"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":5,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":12}},

  // Linha do Meowth
  {"dexNumber":52,"nome":"Meowth","altura":0.4,"peso":4.2,"genero":"50_50","tipos":["Normal"],"habitats":["cidade"],"catchRate":25,"baseExp":15,"evolucao":53,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":9}},
  {"dexNumber":53,"nome":"Persian","altura":1.0,"peso":33.0,"genero":"50_50","tipos":["Normal"],"habitats":["cidade"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":12}},

  // Linha do Psyduck
  {"dexNumber":54,"nome":"Psyduck","altura":0.8,"peso":19.6,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce"],"catchRate":25,"baseExp":10,"evolucao":55,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":55,"nome":"Golduck","altura":1.7,"peso":76.4,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce","praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":9}},

  // Linha do Mankey
  {"dexNumber":56,"nome":"Mankey","altura":0.5,"peso":28.0,"genero":"50_50","tipos":["Lutador"],"habitats":["floresta","pradaria","selva","montanha"],"catchRate":25,"baseExp":10,"evolucao":57,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":4,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":57,"nome":"Primeape","altura":1.0,"peso":32.0,"genero":"50_50","tipos":["Lutador"],"habitats":["floresta","pradaria","selva","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":6,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":10}},

  // Linha do Growlithe
  {"dexNumber":58,"nome":"Growlithe","altura":0.7,"peso":19.0,"genero":"75_25","tipos":["Fogo"],"habitats":["pradaria","montanha"],"catchRate":25,"baseExp":10,"evolucao":59,"evolucaoNivel":null,"evolucaoItem":"firestone","statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":59,"nome":"Arcanine","altura":1.9,"peso":155.0,"genero":"75_25","tipos":["Fogo"],"habitats":["pradaria","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":10}},

  // Linha do Poliwag
  {"dexNumber":60,"nome":"Poliwag","altura":0.6,"peso":12.4,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce","pantano"],"catchRate":25,"baseExp":15,"evolucao":61,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":9}},
  {"dexNumber":61,"nome":"Poliwhirl","altura":1.0,"peso":20.0,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce","pantano"],"catchRate":15,"baseExp":30,"evolucao":62,"evolucaoNivel":null,"evolucaoItem":"waterstone","statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":62,"nome":"Poliwrath","altura":1.3,"peso":54.0,"genero":"50_50","tipos":["Água","Lutador"],"habitats":["agua_doce","pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":10,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":7}},

  // Linha do Abra
  {"dexNumber":63,"nome":"Abra","altura":0.9,"peso":19.5,"genero":"75_25","tipos":["Psíquico"],"habitats":["floresta","cidade"],"catchRate":15,"baseExp":15,"evolucao":64,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":2,"defesa":2,"ataqueEspecial":11,"defesaEspecial":6,"velocidade":9}},
  {"dexNumber":64,"nome":"Kadabra","altura":1.3,"peso":56.5,"genero":"75_25","tipos":["Psíquico"],"habitats":["floresta","cidade"],"catchRate":15,"baseExp":30,"evolucao":65,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":4,"ataque":4,"defesa":3,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":11}},
  {"dexNumber":65,"nome":"Alakazam","altura":1.5,"peso":48.0,"genero":"75_25","tipos":["Psíquico"],"habitats":["floresta","cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":12}},

  // Linha do Machop
  {"dexNumber":66,"nome":"Machop","altura":0.8,"peso":19.5,"genero":"75_25","tipos":["Lutador"],"habitats":["montanha","caverna"],"catchRate":25,"baseExp":15,"evolucao":67,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":67,"nome":"Machoke","altura":1.5,"peso":70.5,"genero":"75_25","tipos":["Lutador"],"habitats":["montanha","caverna"],"catchRate":15,"baseExp":30,"evolucao":68,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":8,"ataque":10,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":68,"nome":"Machamp","altura":1.6,"peso":130.0,"genero":"75_25","tipos":["Lutador"],"habitats":["montanha","caverna"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":6}},

  // Linha do Bellsprout
  {"dexNumber":69,"nome":"Bellsprout","altura":0.7,"peso":4.0,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","selva","pantano"],"catchRate":25,"baseExp":15,"evolucao":70,"evolucaoNivel":21,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":4,"ataqueEspecial":7,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":70,"nome":"Weepinbell","altura":1.0,"peso":6.4,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","selva","pantano"],"catchRate":15,"baseExp":30,"evolucao":71,"evolucaoNivel":null,"evolucaoItem":"leafstone","statusBasais":{"saude":6,"ataque":9,"defesa":5,"ataqueEspecial":8,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":71,"nome":"Victreebel","altura":1.7,"peso":15.5,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","selva","pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":7}},

  // Linha do Tentacool
  {"dexNumber":72,"nome":"Tentacool","altura":0.9,"peso":45.5,"genero":"50_50","tipos":["Água","Veneno"],"habitats":["oceano","praia"],"catchRate":25,"baseExp":10,"evolucao":73,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":5,"defesaEspecial":10,"velocidade":7}},
  {"dexNumber":73,"nome":"Tentacruel","altura":1.6,"peso":55.0,"genero":"50_50","tipos":["Água","Veneno"],"habitats":["oceano","praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":8,"defesaEspecial":12,"velocidade":10}},
  
  // Família Geodude
  {"dexNumber":74,"nome":"Geodude","altura":0.4,"peso":20,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":35,"baseExp":15,"evolucao":75,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":10,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":75,"nome":"Graveler","altura":1,"peso":105,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":20,"baseExp":30,"evolucao":76,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":6,"ataque":10,"defesa":12,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":76,"nome":"Golem","altura":1.4,"peso":300,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":13,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":5}},
     
  // Família Ponyta
  {"dexNumber":77,"nome":"Ponyta","altura":1,"peso":30,"genero":"50_50","tipos":["Fogo"],"habitats":["pradaria"],"catchRate":25,"baseExp":10,"evolucao":78,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":6,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":9}},
  {"dexNumber":78,"nome":"Rapidash","altura":1.7,"peso":95,"genero":"50_50","tipos":["Fogo"],"habitats":["pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":11}},
  
  // Família Slowpoke
  {"dexNumber":79,"nome":"Slowpoke","altura":1.2,"peso":36,"genero":"50_50","tipos":["Água","Psíquico"],"habitats":["agua_doce","praia"],"catchRate":25,"baseExp":15,"evolucao":80,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":7,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":80,"nome":"Slowbro","altura":1.6,"peso":78.5,"genero":"50_50","tipos":["Água","Psíquico"],"habitats":["agua_doce","praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":11,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":3}},
  
  // Família Magnemite
  {"dexNumber":81,"nome":"Magnemite","altura":0.3,"peso":6,"genero":"assexuado","tipos":["Elétrico","Aço"],"habitats":["cidade","montanha"],"catchRate":35,"baseExp":10,"evolucao":82,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":7,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":82,"nome":"Magneton","altura":1,"peso":60,"genero":"assexuado","tipos":["Elétrico","Aço"],"habitats":["cidade","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":10,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":7}},
  
  // Família Farfetch'd
  {"dexNumber":83,"nome":"Farfetch'd","altura":0.8,"peso":15,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["agua_doce","pantano","pradaria"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
  
  // Família Doduo
  {"dexNumber":84,"nome":"Doduo","altura":1.4,"peso":39.2,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["pradaria","deserto"],"catchRate":35,"baseExp":10,"evolucao":85,"evolucaoNivel":31,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":9,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":8}},
  {"dexNumber":85,"nome":"Dodrio","altura":1.8,"peso":85.2,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["pradaria","deserto"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},
  
  // Família Seel
  {"dexNumber":86,"nome":"Seel","altura":1.1,"peso":90,"genero":"50_50","tipos":["Água"],"habitats":["oceano","artico"],"catchRate":30,"baseExp":10,"evolucao":87,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":6,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":87,"nome":"Dewgong","altura":1.7,"peso":120,"genero":"50_50","tipos":["Água","Gelo"],"habitats":["oceano","artico"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":8,"ataqueEspecial":7,"defesaEspecial":10,"velocidade":7}},
  
  // Família Grimer (Poluição)
  {"dexNumber":88,"nome":"Grimer","altura":0.9,"peso":30,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade"],"catchRate":30,"baseExp":15,"evolucao":89,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":89,"nome":"Muk","altura":1.2,"peso":30,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":11,"defesa":8,"ataqueEspecial":7,"defesaEspecial":10,"velocidade":5}},
  
  // Família Shellder
  {"dexNumber":90,"nome":"Shellder","altura":0.3,"peso":4,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":91,"evolucaoNivel":null,"evolucaoItem":"waterstone","statusBasais":{"saude":3,"ataque":7,"defesa":10,"ataqueEspecial":5,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":91,"nome":"Cloyster","altura":1.5,"peso":132.5,"genero":"50_50","tipos":["Água","Gelo"],"habitats":["oceano","artico"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":18,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":7}},
  
  // Família Gastly
  {"dexNumber":92,"nome":"Gastly","altura":1.3,"peso":0.1,"genero":"50_50","tipos":["Fantasma","Veneno"],"habitats":["caverna","cidade"],"catchRate":25,"baseExp":15,"evolucao":93,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":3,"ataqueEspecial":10,"defesaEspecial":4,"velocidade":8}},
  {"dexNumber":93,"nome":"Haunter","altura":1.6,"peso":0.1,"genero":"50_50","tipos":["Fantasma","Veneno"],"habitats":["caverna","cidade"],"catchRate":15,"baseExp":30,"evolucao":94,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":12,"defesaEspecial":6,"velocidade":10}},
  {"dexNumber":94,"nome":"Gengar","altura":1.5,"peso":40.5,"genero":"50_50","tipos":["Fantasma","Veneno"],"habitats":["cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":13,"defesaEspecial":8,"velocidade":11}},
  
  // Família Onix
  {"dexNumber":95,"nome":"Onix","altura":8.8,"peso":210,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":16,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":7}},
  
  // Família Drowzee
  {"dexNumber":96,"nome":"Drowzee","altura":1,"peso":32.4,"genero":"50_50","tipos":["Psíquico"],"habitats":["pradaria","pantano"],"catchRate":30,"baseExp":10,"evolucao":97,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":9,"velocidade":4}},
  {"dexNumber":97,"nome":"Hypno","altura":1.6,"peso":75.6,"genero":"50_50","tipos":["Psíquico"],"habitats":["pradaria","pantano"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":7,"ataqueEspecial":7,"defesaEspecial":12,"velocidade":7}},
  
  // Família Krabby
  {"dexNumber":98,"nome":"Krabby","altura":0.4,"peso":6.5,"genero":"50_50","tipos":["Água"],"habitats":["praia"],"catchRate":30,"baseExp":10,"evolucao":99,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":11,"defesa":9,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":99,"nome":"Kingler","altura":1.3,"peso":60,"genero":"50_50","tipos":["Água"],"habitats":["praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":13,"defesa":12,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":8}},
  
  // Família Voltorb
  {"dexNumber":100,"nome":"Voltorb","altura":0.5,"peso":10.4,"genero":"assexuado","tipos":["Elétrico"],"habitats":["cidade"],"catchRate":40,"baseExp":15,"evolucao":101,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},
  {"dexNumber":101,"nome":"Electrode","altura":1.2,"peso":66.6,"genero":"assexuado","tipos":["Elétrico"],"habitats":["cidade"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":14}},
  
  // Família Exeggcute
  {"dexNumber":102,"nome":"Exeggcute","altura":0.4,"peso":2.5,"genero":"50_50","tipos":["Planta","Psíquico"],"habitats":["floresta","praia","selva"],"catchRate":20,"baseExp":20,"evolucao":103,"evolucaoNivel":null,"evolucaoItem":"leafstone","statusBasais":{"saude":6,"ataque":4,"defesa":8,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":103,"nome":"Exeggutor","altura":2,"peso":120,"genero":"50_50","tipos":["Planta","Psíquico"],"habitats":["floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":9,"ataqueEspecial":13,"defesaEspecial":7,"velocidade":6}},
  
  // Família Cubone
  {"dexNumber":104,"nome":"Cubone","altura":0.4,"peso":6.5,"genero":"50_50","tipos":["Terra"],"habitats":["caverna","cidade","montanha"],"catchRate":30,"baseExp":15,"evolucao":105,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":10,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":105,"nome":"Marowak","altura":1,"peso":45,"genero":"50_50","tipos":["Terra"],"habitats":["caverna","cidade","montanha"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":11,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":5}},
    
  // Família Tyrogue (Hitmon)
  {"dexNumber":106,"nome":"Hitmonlee","altura":1.5,"peso":49.8,"genero":"100_0","tipos":["Lutador"],"habitats":["cidade","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":12,"defesa":5,"ataqueEspecial":4,"defesaEspecial":11,"velocidade":8}},
  {"dexNumber":107,"nome":"Hitmonchan","altura":1.4,"peso":50.2,"genero":"100_0","tipos":["Lutador"],"habitats":["cidade","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":11,"defesa":8,"ataqueEspecial":4,"defesaEspecial":11,"velocidade":8}},
  
  // Família Lickitung
  {"dexNumber":108,"nome":"Lickitung","altura":1.2,"peso":65.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria","selva"],"catchRate":30,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":3}},
  
  // Família Koffing
  {"dexNumber":109,"nome":"Koffing","altura":0.6,"peso":1,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade","montanha","pantano"],"catchRate":30,"baseExp":15,"evolucao":110,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":7,"defesa":10,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":110,"nome":"Weezing","altura":1.2,"peso":1,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade","montanha","pantano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":12,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":6}},
  
  // Família Rhyhorn
  {"dexNumber":111,"nome":"Rhyhorn","altura":1,"peso":115,"genero":"50_50","tipos":["Terra","Pedra"],"habitats":["caverna","montanha","pradaria"],"catchRate":30,"baseExp":15,"evolucao":112,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":10,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
  {"dexNumber":112,"nome":"Rydon","altura":1.9,"peso":120,"genero":"50_50","tipos":["Terra","Pedra"],"habitats":["caverna","montanha","pradaria"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":12,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  
  // Família Chansey
  {"dexNumber":113,"nome":"Chansey","altura":1.1,"peso":34.6,"genero":"0_100","tipos":["Normal"],"habitats":["cidade","pradaria"],"catchRate":5,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":25,"ataque":1,"defesa":1,"ataqueEspecial":4,"defesaEspecial":11,"velocidade":5}},

  // Família Tangela
  {"dexNumber":114,"nome":"Tangela","altura":1,"peso":35,"genero":"50_50","tipos":["Planta"],"habitats":["floresta","montanha","pradaria","selva"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":12,"ataqueEspecial":10,"defesaEspecial":4,"velocidade":6}},

  // Família Kangaskhan
  {"dexNumber":115,"nome":"Kangaskhan","altura":2.2,"peso":80,"genero":"0_100","tipos":["Normal"],"habitats":["pradaria","selva"],"catchRate":10,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":10,"defesa":8,"ataqueEspecial":4,"defesaEspecial":9,"velocidade":9}},
  
  // Família Horsea
  {"dexNumber":116,"nome":"Horsea","altura":0.4,"peso":8,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":15,"evolucao":117,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":7,"ataqueEspecial":7,"defesaEspecial":3,"velocidade":6}},
  {"dexNumber":117,"nome":"Seadra","altura":1.2,"peso":25,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":10,"ataqueEspecial":10,"defesaEspecial":5,"velocidade":9}},
  
  // Família Goldeen
  {"dexNumber":118,"nome":"Goldeen","altura":0.6,"peso":15,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce"],"catchRate":30,"baseExp":10,"evolucao":119,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":119,"nome":"Seaking","altura":1.3,"peso":39,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":7,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":7}},
  
  // Família Staryu
  {"dexNumber":120,"nome":"Staryu","altura":0.8,"peso":34.5,"genero":"assexuado","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":121,"evolucaoNivel":null,"evolucaoItem":"waterstone","statusBasais":{"saude":3,"ataque":5,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":9}},
  {"dexNumber":121,"nome":"Starmie","altura":1.1,"peso":80,"genero":"assexuado","tipos":["Água","Psíquico"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":9,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":12}},
  
  // Família Mr. Mime
  {"dexNumber":122,"nome":"Mr. Mime","altura":1.3,"peso":54.5,"genero":"100_0","tipos":["Psíquico","Fada"],"habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":7,"ataqueEspecial":10,"defesaEspecial":12,"velocidade":9}},
  
  // Família Scyther
  {"dexNumber":123,"nome":"Scyther","altura":1.5,"peso":56,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":11}},
  
  // Família Jynx
  {"dexNumber":124,"nome":"Jynx","altura":1.4,"peso":40.6,"genero":"0_100","tipos":["Gelo","Psíquico"],"habitats":["cidade","taiga","tundra"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":4,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
  
  // Família Electabuzz
  {"dexNumber":125,"nome":"Electabuzz","altura":1.1,"peso":30,"genero":"75_25","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":5,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":11}},
  
  // Família Magmar
  {"dexNumber":126,"nome":"Magmar","altura":1.3,"peso":44.5,"genero":"75_25","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":10}},
  
  // Família Pinsir
  {"dexNumber":127,"nome":"Pinsir","altura":1.5,"peso":55,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta","selva"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":9}},
  
  // Família Tauros
  {"dexNumber":128,"nome":"Tauros","altura":1.4,"peso":88.4,"genero":"100_0","tipos":["Normal"],"habitats":["pradaria"],"catchRate":10,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":10,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":11}},
  
  // Família Magikarp
  {"dexNumber":129,"nome":"Magikarp","altura":0.9,"peso":10,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce","oceano"],"catchRate":75,"baseExp":5,"evolucao":130,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":2,"ataque":1,"defesa":6,"ataqueEspecial":2,"defesaEspecial":2,"velocidade":8}},
  {"dexNumber":130,"nome":"Gyarados","altura":6.5,"peso":235,"genero":"50_50","tipos":["Água","Voador"],"habitats":["agua_doce","oceano"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":8}},
  
  // Família Lapras
  {"dexNumber":131,"nome":"Lapras","altura":2.5,"peso":220,"genero":"50_50","tipos":["Água","Gelo"],"habitats":["oceano","artico"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":9,"defesa":8,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":6}},
  
  // Família Ditto
  {"dexNumber":132,"nome":"Ditto","altura":0.3,"peso":4,"genero":"assexuado","tipos":["Normal"],"habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
  
  // Família Eevee
  {"dexNumber":133,"nome":"Eevee","altura":0.3,"peso":6.5,"genero":"87_12","tipos":["Normal"],"habitats":["cidade","floresta","pradaria"],"catchRate":20,"baseExp":10,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":6}},
  {"dexNumber":134,"nome":"Vaporeon","altura":1,"peso":29,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":7,"defesa":6,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":7}},
  {"dexNumber":135,"nome":"Jolteon","altura":0.8,"peso":24.5,"genero":"87_12","tipos":["Elétrico"],"habitats":["cidade","floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":13}},
  {"dexNumber":136,"nome":"Flareon","altura":0.9,"peso":25,"genero":"87_12","tipos":["Fogo"],"habitats":["caverna","floresta","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":6,"ataqueEspecial":10,"defesaEspecial":11,"velocidade":7}},
  
  // Família Porygon
  {"dexNumber":137,"nome":"Porygon","altura":0.8,"peso":36.5,"genero":"assexuado","tipos":["Normal"],"habitats":["cidade"],"catchRate":10,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":4}},
  
  // Família Omanyte
  {"dexNumber":138,"nome":"Omanyte","altura":0.4,"peso":7.5,"genero":"87_12","tipos":["Pedra","Água"],"habitats":["caverna","oceano"],"catchRate":15,"baseExp":20,"evolucao":139,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":10,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":139,"nome":"Omastar","altura":1,"peso":35,"genero":"87_12","tipos":["Pedra","Água"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":13,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":6}},
  
  // Família Kabuto
  {"dexNumber":140,"nome":"Kabuto","altura":0.5,"peso":11.5,"genero":"87_12","tipos":["Pedra","Água"],"habitats":["oceano"],"catchRate":15,"baseExp":20,"evolucao":141,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":8,"defesa":9,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":141,"nome":"Kabutops","altura":1.3,"peso":40.5,"genero":"87_12","tipos":["Pedra","Água"],"habitats":["caverna","oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":12,"defesa":11,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":9}},
  
  // Família Aerodactyl
  {"dexNumber":142,"nome":"Aerodactyl","altura":1.8,"peso":59,"genero":"87_12","tipos":["Pedra","Voador"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":13}},
 
  // Família Snorlax
  {"dexNumber":143,"nome":"Snorlax","altura":2.1,"peso":460,"genero":"87_12","tipos":["Normal"],"habitats":["cidade","floresta","montanha","taiga"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":17,"ataque":11,"defesa":7,"ataqueEspecial":7,"defesaEspecial":12,"velocidade":3}},
  // Família Articuno
  {"dexNumber":144,"nome":"Articuno","altura":1.7,"peso":55.4,"genero":"assexuado","tipos":["Gelo","Voador"],"habitats":["artico","taiga","tundra"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":10,"ataqueEspecial":10,"defesaEspecial":13,"velocidade":9}},
  
  // Família Zapdos
  {"dexNumber":145,"nome":"Zapdos","altura":1.6,"peso":52.6,"genero":"assexuado","tipos":["Elétrico","Voador"],"habitats":["cidade","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":10}},
  
  // Família Moltres
  {"dexNumber":146,"nome":"Moltres","altura":2.0,"peso":60.0,"genero":"assexuado","tipos":["Fogo","Voador"],"habitats":["caverna","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":9}},
  
  // Família Dratini
  {"dexNumber":147,"nome":"Dratini","altura":1.8,"peso":3.3,"genero":"50_50","tipos":["Dragão"],"habitats":["agua_doce","caverna"],"catchRate":15,"baseExp":15,"evolucao":148,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
  {"dexNumber":148,"nome":"Dragonair","altura":4.0,"peso":16.5,"genero":"50_50","tipos":["Dragão"],"habitats":["agua_doce","caverna"],"catchRate":5,"baseExp":30,"evolucao":149,"evolucaoNivel":55,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":7}},
  {"dexNumber":149,"nome":"Dragonite","altura":2.2,"peso":210.0,"genero":"50_50","tipos":["Dragão","Voador"],"habitats":["agua_doce","caverna","montanha"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":8}},
  
  // Família Mewtwo
  {"dexNumber":150,"nome":"Mewtwo","altura":2.0,"peso":122.0,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":11,"defesa":9,"ataqueEspecial":15,"defesaEspecial":9,"velocidade":13}},
  
  // Família Mew
  {"dexNumber":151,"nome":"Mew","altura":0.4,"peso":4.0,"genero":"assexuado","tipos":["Psíquico"],"habitats":["floresta","montanha","selva"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},

  //JohtoDex 152 - 251
  
  // Família Chikorita
  {"dexNumber":152,"nome":"Chikorita","altura":0.9,"peso":6.4,"genero":"87_12","tipos":["Planta"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":15,"evolucao":153,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":7,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":153,"nome":"Bayleef","altura":1.2,"peso":15.8,"genero":"87_12","tipos":["Planta"],"habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":154,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":154,"nome":"Meganium","altura":1.8,"peso":100.5,"genero":"87_12","tipos":["Planta"],"habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":10,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":8}},
  
  // Família Cyndaquil
  {"dexNumber":155,"nome":"Cyndaquil","altura":0.5,"peso":7.9,"genero":"87_12","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":20,"baseExp":15,"evolucao":156,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":156,"nome":"Quilava","altura":0.9,"peso":19.0,"genero":"87_12","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":10,"baseExp":30,"evolucao":157,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":8}},
  {"dexNumber":157,"nome":"Typhlosion","altura":1.7,"peso":79.5,"genero":"87_12","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":10}},
  
  // Família Totodile
  {"dexNumber":158,"nome":"Totodile","altura":0.6,"peso":9.5,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","pantano","praia"],"catchRate":20,"baseExp":15,"evolucao":159,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":159,"nome":"Croconaw","altura":1.1,"peso":25.0,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","pantano","praia"],"catchRate":10,"baseExp":30,"evolucao":160,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":160,"nome":"Feraligatr","altura":2.3,"peso":88.8,"genero":"87_12","tipos":["Água"],"habitats":["agua_doce","pantano","praia"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":10,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":8}},
  
  // Família Sentret
  {"dexNumber":161,"nome":"Sentret","altura":0.8,"peso":6.0,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":162,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":3,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":2}},
  {"dexNumber":162,"nome":"Furret","altura":1.8,"peso":32.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":9}},
  
  // Família Hoothoot
  {"dexNumber":163,"nome":"Hoothoot","altura":0.7,"peso":21.2,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta"],"catchRate":40,"baseExp":10,"evolucao":164,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":3,"defesa":3,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":164,"nome":"Noctowl","altura":1.6,"peso":40.8,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":5,"defesa":5,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":7}},
  
  // Família Ledyba
  {"dexNumber":165,"nome":"Ledyba","altura":1.0,"peso":10.8,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta","selva"],"catchRate":40,"baseExp":10,"evolucao":166,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":2,"defesa":3,"ataqueEspecial":4,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":166,"nome":"Ledian","altura":1.4,"peso":35.6,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta","selva"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":5,"ataqueEspecial":6,"defesaEspecial":11,"velocidade":9}},
  
  // Família Spinarak
  {"dexNumber":167,"nome":"Spinarak","altura":0.5,"peso":8.5,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta","selva"],"catchRate":40,"baseExp":10,"evolucao":168,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":168,"nome":"Ariados","altura":1.1,"peso":33.5,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["caverna","floresta","selva"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":4}},
  
  // Família Crobat
  {"dexNumber":169,"nome":"Crobat","altura":1.8,"peso":75.0,"genero":"50_50","tipos":["Veneno","Voador"],"habitats":["caverna"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":13}},
  
  // Família Chinchou
  {"dexNumber":170,"nome":"Chinchou","altura":0.5,"peso":12.0,"genero":"50_50","tipos":["Água","Elétrico"],"habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":171,"evolucaoNivel":27,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":4,"defesa":4,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":171,"nome":"Lanturn","altura":1.2,"peso":22.5,"genero":"50_50","tipos":["Água","Elétrico"],"habitats":["oceano"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":7}},
  
  // Família Pichu
  {"dexNumber":172,"nome":"Pichu","altura":0.3,"peso":2.0,"genero":"50_50","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":50,"baseExp":5,"evolucao":25,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":2,"ataque":4,"defesa":2,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  
  // Família Cleffa
  {"dexNumber":173,"nome":"Cleffa","altura":0.3,"peso":3.0,"genero":"25_75","tipos":["Fada"],"habitats":["caverna","montanha"],"catchRate":50,"baseExp":5,"evolucao":35,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":5,"ataque":3,"defesa":3,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":2}},
  
  // Família Igglybuff
  {"dexNumber":174,"nome":"Igglybuff","altura":0.3,"peso":1.0,"genero":"25_75","tipos":["Normal","Fada"],"habitats":["caverna","cidade","pradaria"],"catchRate":20,"baseExp":15,"evolucao":39,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":9,"ataque":3,"defesa":2,"ataqueEspecial":4,"defesaEspecial":2,"velocidade":2}},
  
  // Família Togepi
  {"dexNumber":175,"nome":"Togepi","altura":0.3,"peso":1.5,"genero":"87_12","tipos":["Fada"],"habitats":["floresta","selva"],"catchRate":35,"baseExp":5,"evolucao":176,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":4,"ataque":2,"defesa":7,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":2}},
  {"dexNumber":176,"nome":"Togetic","altura":0.6,"peso":3.2,"genero":"87_12","tipos":["Fada","Voador"],"habitats":["floresta","selva"],"catchRate":10,"baseExp":25,"evolucao":468,"evolucaoNivel":null,"evolucaoItem":"shinystone","statusBasais":{"saude":6,"ataque":4,"defesa":9,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":4}},
  
  // Família Natu
  {"dexNumber":177,"nome":"Natu","altura":0.2,"peso":2.0,"genero":"50_50","tipos":["Psíquico","Voador"],"habitats":["caverna","floresta"],"catchRate":30,"baseExp":10,"evolucao":178,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":178,"nome":"Xatu","altura":1.5,"peso":15.0,"genero":"50_50","tipos":["Psíquico","Voador"],"habitats":["caverna","floresta"],"catchRate":30,"baseExp":10,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":10}},
  
  // Família Mareep
  {"dexNumber":179,"nome":"Mareep","altura":0.6,"peso":7.8,"genero":"50_50","tipos":["Elétrico"],"habitats":["pradaria"],"catchRate":40,"baseExp":15,"evolucao":180,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":4,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":180,"nome":"Flaaffy","altura":0.8,"peso":13.3,"genero":"50_50","tipos":["Elétrico"],"habitats":["pradaria"],"catchRate":20,"baseExp":30,"evolucao":181,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":181,"nome":"Ampharos","altura":1.4,"peso":61.5,"genero":"50_50","tipos":["Elétrico"],"habitats":["montanha","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":9,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":6}},
  
  // Família Bellossom
  {"dexNumber":182,"nome":"Bellossom","altura":0.4,"peso":5.8,"genero":"50_50","tipos":["Planta"],"habitats":["pantano","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":10,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":5}},
  
  // Família Marill
  {"dexNumber":183,"nome":"Marill","altura":0.4,"peso":8.5,"genero":"25_75","tipos":["Água","Fada"],"habitats":["agua_doce"],"catchRate":40,"baseExp":15,"evolucao":184,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":2,"defesa":5,"ataqueEspecial":2,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":184,"nome":"Azumarill","altura":0.8,"peso":28.5,"genero":"25_75","tipos":["Água","Fada"],"habitats":["agua_doce"],"catchRate":25,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":5,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":5}},
  
  // Família Sudowoodo
  {"dexNumber":185,"nome":"Sudowoodo","altura":1.2,"peso":38.0,"genero":"50_50","tipos":["Pedra"],"habitats":["floresta","taiga"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":12,"ataqueEspecial":3,"defesaEspecial":7,"velocidade":3}},
  
  // Família Politoed
  {"dexNumber":186,"nome":"Politoed","altura":1.1,"peso":33.9,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce","pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":8,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":7}},
  
  // Família Hoppip
  {"dexNumber":187,"nome":"Hoppip","altura":0.4,"peso":0.5,"genero":"50_50","tipos":["Planta","Voador"],"habitats":["floresta","pradaria"],"catchRate":45,"baseExp":5,"evolucao":188,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":188,"nome":"Skiploom","altura":0.6,"peso":1.0,"genero":"50_50","tipos":["Planta","Voador"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":15,"evolucao":189,"evolucaoNivel":27,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":189,"nome":"Jumpluff","altura":0.8,"peso":3.0,"genero":"50_50","tipos":["Planta","Voador"],"habitats":["floresta","pradaria"],"catchRate":5,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":6,"defesa":7,"ataqueEspecial":6,"defesaEspecial":10,"velocidade":11}},
  
  // Família Aipom
  {"dexNumber":190,"nome":"Aipom","altura":0.8,"peso":11.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","selva"],"catchRate":25,"baseExp":20,"evolucao":424,"evolucaoNivel":null,"evolucaoItem":"duplochoque","statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":9}},
  
  // Família Sunkern
  {"dexNumber":191,"nome":"Sunkern","altura":0.3,"peso":1.8,"genero":"50_50","tipos":["Planta"],"habitats":["floresta","pradaria"],"catchRate":25,"baseExp":10,"evolucao":192,"evolucaoNivel":null,"evolucaoItem":"sunstone","statusBasais":{"saude":3,"ataque":3,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
  {"dexNumber":192,"nome":"Sunflora","altura":0.8,"peso":8.5,"genero":"50_50","tipos":["Planta"],"habitats":["pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":6,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":3}},
  
  // Família Yanma
  {"dexNumber":193,"nome":"Yanma","altura":1.2,"peso":38.0,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta","pantano"],"catchRate":25,"baseExp":20,"evolucao":469,"evolucaoNivel":null,"evolucaoItem":"movimento ancientpower","statusBasais":{"saude":7,"ataque":7,"defesa":5,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":10}},
  
  // Família Wooper
  {"dexNumber":194,"nome":"Wooper","altura":0.4,"peso":8.5,"genero":"50_50","tipos":["Água","Terra"],"habitats":["agua_doce","pantano"],"catchRate":30,"baseExp":10,"evolucao":195,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":195,"nome":"Quagsire","altura":1.4,"peso":75.0,"genero":"50_50","tipos":["Água","Terra"],"habitats":["agua_doce"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":9,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":4}},
  
  // Família Espeon
  {"dexNumber":196,"nome":"Espeon","altura":0.9,"peso":26.5,"genero":"87_12","tipos":["Psíquico"],"habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":11}},
  
  // Família Umbreon
  {"dexNumber":197,"nome":"Umbreon","altura":1.0,"peso":27.0,"genero":"87_12","tipos":["Noturno"],"habitats":["caverna","cidade","floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":11,"ataqueEspecial":6,"defesaEspecial":13,"velocidade":7}},
  
  // Família Murkrow
  {"dexNumber":198,"nome":"Murkrow","altura":0.5,"peso":2.1,"genero":"50_50","tipos":["Noturno","Voador"],"habitats":["cidade","floresta","pantano"],"catchRate":15,"baseExp":15,"evolucao":430,"evolucaoNivel":null,"evolucaoItem":"duskstone","statusBasais":{"saude":6,"ataque":9,"defesa":4,"ataqueEspecial":9,"defesaEspecial":4,"velocidade":9}},
  
  // Família Slowking
  {"dexNumber":199,"nome":"Slowking","altura":2.0,"peso":79.5,"genero":"50_50","tipos":["Água","Psíquico"],"habitats":["agua_doce","praia"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":8,"ataqueEspecial":10,"defesaEspecial":11,"velocidade":3}},
  
  // Família Misdreavus
  {"dexNumber":200,"nome":"Misdreavus","altura":0.7,"peso":1.0,"genero":"50_50","tipos":["Fantasma"],"habitats":["caverna","cidade","floresta"],"catchRate":15,"baseExp":20,"evolucao":429,"evolucaoNivel":null,"evolucaoItem":"duskstone","statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":9}},
  
  // Família Unown
  {"dexNumber":201,"nome":"Unown","altura":0.5,"peso":1.0,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna","cidade"],"catchRate":25,"baseExp":5,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":5}},
  
  // Família Wobbuffet
  {"dexNumber":202,"nome":"Wobbuffet","altura":1.3,"peso":28.5,"genero":"50_50","tipos":["Psíquico"],"habitats":["caverna","montanha","pradaria"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":19,"ataque":3,"defesa":6,"ataqueEspecial":3,"defesaEspecial":6,"velocidade":3}},
  
  // Família Girafarig
  {"dexNumber":203,"nome":"Girafarig","altura":1.5,"peso":41.5,"genero":"50_50","tipos":["Normal","Psíquico"],"habitats":["montanha","pradaria"],"catchRate":15,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":9}},
  
  // Família Pineco
  {"dexNumber":204,"nome":"Pineco","altura":0.6,"peso":7.2,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta"],"catchRate":25,"baseExp":10,"evolucao":205,"evolucaoNivel":31,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":9,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":205,"nome":"Forretress","altura":1.2,"peso":125.8,"genero":"50_50","tipos":["Inseto","Aço"],"habitats":["floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":14,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":4}},
  
  // Família Dunsparce
  {"dexNumber":206,"nome":"Dunsparce","altura":1.5,"peso":14.0,"genero":"50_50","tipos":["Normal"],"habitats":["caverna","deserto","floresta","pradaria"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},
  
  // Família Gligar
  {"dexNumber":207,"nome":"Gligar","altura":1.1,"peso":64.8,"genero":"50_50","tipos":["Terra","Voador"],"habitats":["caverna","deserto","floresta","montanha"],"catchRate":20,"baseExp":25,"evolucao":472,"evolucaoNivel":null,"evolucaoItem":"razor fang noite","statusBasais":{"saude":7,"ataque":8,"defesa":11,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":9}},
  
  // Família Steelix
  {"dexNumber":208,"nome":"Steelix","altura":9.2,"peso":400.0,"genero":"50_50","tipos":["Aço","Terra"],"habitats":["caverna","deserto","montanha"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":20,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":3}},
  
  // Família Snubbull
  {"dexNumber":209,"nome":"Snubbull","altura":0.6,"peso":7.8,"genero":"25_75","tipos":["Fada"],"habitats":["cidade","floresta"],"catchRate":15,"baseExp":15,"evolucao":210,"evolucaoNivel":23,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":210,"nome":"Granbull","altura":1.4,"peso":48.7,"genero":"25_75","tipos":["Fada"],"habitats":["cidade","floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},
  
  // Família Qwilfish
  {"dexNumber":211,"nome":"Qwilfish","altura":0.5,"peso":3.9,"genero":"50_50","tipos":["Água","Veneno"],"habitats":["oceano"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":9}},
  
  // Família Scizor
  {"dexNumber":212,"nome":"Scizor","altura":1.8,"peso":118.0,"genero":"50_50","tipos":["Inseto","Aço"],"habitats":["montanha","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":7}},
  
  // Família Shuckle
  {"dexNumber":213,"nome":"Shuckle","altura":0.6,"peso":20.5,"genero":"50_50","tipos":["Inseto","Pedra"],"habitats":["caverna","floresta","montanha","selva"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":2,"ataque":1,"defesa":23,"ataqueEspecial":1,"defesaEspecial":23,"velocidade":1}},
  
  // Família Heracross
  {"dexNumber":214,"nome":"Heracross","altura":1.5,"peso":54.0,"genero":"50_50","tipos":["Inseto","Lutador"],"habitats":["floresta","selva"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":8,"ataqueEspecial":4,"defesaEspecial":10,"velocidade":9}},
  
  // Família Sneasel
  {"dexNumber":215,"nome":"Sneasel","altura":0.9,"peso":28.0,"genero":"50_50","tipos":["Noturno","Gelo"],"habitats":["caverna","taiga","tundra"],"catchRate":20,"baseExp":30,"evolucao":461,"evolucaoNivel":null,"evolucaoItem":"Pedra afiada noite","statusBasais":{"saude":6,"ataque":10,"defesa":6,"ataqueEspecial":4,"defesaEspecial":8,"velocidade":12}},
  
  // Família Teddiursa
  {"dexNumber":216,"nome":"Teddiursa","altura":0.6,"peso":8.8,"genero":"50_50","tipos":["Normal"],"habitats":["caverna","montanha","taiga"],"catchRate":30,"baseExp":15,"evolucao":217,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":217,"nome":"Ursaring","altura":1.8,"peso":125.8,"genero":"50_50","tipos":["Normal"],"habitats":["caverna","montanha","taiga"],"catchRate":10,"baseExp":40,"evolucao":901,"evolucaoNivel":null,"evolucaoItem":"peat block","statusBasais":{"saude":9,"ataque":13,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":6}},
  
  // Família Slugma
  {"dexNumber":218,"nome":"Slugma","altura":0.7,"peso":35.0,"genero":"50_50","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":25,"baseExp":10,"evolucao":219,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":219,"nome":"Magcargo","altura":0.8,"peso":55.0,"genero":"50_50","tipos":["Fogo","Pedra"],"habitats":["caverna","montanha"],"catchRate":10,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":12,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":3}},

  // Família Swinub
  {"dexNumber":220,"nome":"Swinub","altura":0.4,"peso":6.5,"genero":"50_50","tipos":["Gelo","Terra"],"habitats":["caverna","taiga","tundra"],"catchRate":35,"baseExp":10,"evolucao":221,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":221,"nome":"Piloswine","altura":1.1,"peso":55.4,"genero":"50_50","tipos":["Gelo","Terra"],"habitats":["caverna","taiga","tundra"],"catchRate":15,"baseExp":30,"evolucao":473,"evolucaoNivel":null,"evolucaoItem":"move ancientpower","statusBasais":{"saude":10,"ataque":10,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},

  // Família Corsola
  {"dexNumber":222,"nome":"Corsola","altura":0.6,"peso":5.0,"genero":"25_75","tipos":["Água","Pedra"],"habitats":["oceano"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":9,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":4}},

  // Família Remoraid
  {"dexNumber":223,"nome":"Remoraid","altura":0.6,"peso":12.0,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":224,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":7,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":224,"nome":"Octillery","altura":0.9,"peso":28.5,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":8,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":5}},

  // Família Delibird
  {"dexNumber":225,"nome":"Delibird","altura":0.9,"peso":16.0,"genero":"50_50","tipos":["Gelo","Voador"],"habitats":["montanha","taiga","tundra"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":8}},

  // Família Mantine
  {"dexNumber":226,"nome":"Mantine","altura":2.1,"peso":220.0,"genero":"50_50","tipos":["Água","Voador"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":4,"defesa":7,"ataqueEspecial":8,"defesaEspecial":14,"velocidade":7}},

  // Família Skarmory
  {"dexNumber":227,"nome":"Skarmory","altura":1.7,"peso":50.5,"genero":"50_50","tipos":["Aço","Voador"],"habitats":["montanha"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":14,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":7}},

  // Família Houndour
  {"dexNumber":228,"nome":"Houndour","altura":0.6,"peso":10.8,"genero":"50_50","tipos":["Noturno","Fogo"],"habitats":["caverna","montanha"],"catchRate":25,"baseExp":10,"evolucao":229,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":3,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":229,"nome":"Houndoom","altura":1.4,"peso":35.0,"genero":"50_50","tipos":["Noturno","Fogo"],"habitats":["caverna","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":11,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":9}},

  // Família Kingdra
  {"dexNumber":230,"nome":"Kingdra","altura":1.8,"peso":152.0,"genero":"50_50","tipos":["Água","Dragão"],"habitats":["oceano"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":10,"ataqueEspecial":10,"defesaEspecial":5,"velocidade":9}},

  // Família Phanpy
  {"dexNumber":231,"nome":"Phanpy","altura":0.5,"peso":33.5,"genero":"50_50","tipos":["Terra"],"habitats":["floresta","montanha"],"catchRate":35,"baseExp":10,"evolucao":232,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":6,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":232,"nome":"Donphan","altura":1.1,"peso":120.0,"genero":"50_50","tipos":["Terra"],"habitats":["deserto","montanha"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":12,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},

  // Família Porygon2
  {"dexNumber":233,"nome":"Porygon2","altura":0.6,"peso":32.5,"genero":"assexuado","tipos":["Normal"],"habitats":["cidade"],"catchRate":5,"baseExp":30,"evolucao":474,"evolucaoNivel":null,"evolucaoItem":"dubious disc","statusBasais":{"saude":9,"ataque":8,"defesa":9,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":6}},

  // Família Stantler
  {"dexNumber":234,"nome":"Stantler","altura":1.4,"peso":71.2,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","taiga"],"catchRate":20,"baseExp":30,"evolucao":899,"evolucaoNivel":null,"evolucaoItem":"use psyshield 20 times","statusBasais":{"saude":7,"ataque":10,"defesa":6,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":9}},

  // Família Smeargle
  {"dexNumber":235,"nome":"Smeargle","altura":1.2,"peso":58.0,"genero":"50_50","tipos":["Normal"],"habitats":["caverna","cidade","floresta","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":2,"defesa":4,"ataqueEspecial":2,"defesaEspecial":5,"velocidade":8}},

  // Família Tyrogue
  {"dexNumber":236,"nome":"Tyrogue","altura":0.7,"peso":21.0,"genero":"100_0","tipos":["Lutador"],"habitats":["cidade","montanha"],"catchRate":30,"baseExp":10,"evolucao":237,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":237,"nome":"Hitmontop","altura":1.4,"peso":48.0,"genero":"100_0","tipos":["Lutador"],"habitats":["cidade","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":10,"ataqueEspecial":4,"defesaEspecial":11,"velocidade":7}},

  // Família Smoochum
  {"dexNumber":238,"nome":"Smoochum","altura":0.4,"peso":6.0,"genero":"0_100","tipos":["Gelo","Psíquico"],"habitats":["cidade","taiga","tundra"],"catchRate":10,"baseExp":10,"evolucao":124,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":2,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":7}},

  // Família Elekid
  {"dexNumber":239,"nome":"Elekid","altura":0.6,"peso":23.5,"genero":"75_25","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":125,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":4,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},

  // Família Magby
  {"dexNumber":240,"nome":"Magby","altura":0.7,"peso":21.4,"genero":"75_25","tipos":["Fogo"],"habitats":["caverna","montanha"],"catchRate":30,"baseExp":10,"evolucao":126,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":4,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},

  // Família Miltank
  {"dexNumber":241,"nome":"Miltank","altura":1.2,"peso":75.5,"genero":"0_100","tipos":["Normal"],"habitats":["pradaria"],"catchRate":10,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":11,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":10}},

  // Família Blissey
  {"dexNumber":242,"nome":"Blissey","altura":1.5,"peso":46.8,"genero":"0_100","tipos":["Normal"],"habitats":["cidade","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":26,"ataque":1,"defesa":1,"ataqueEspecial":8,"defesaEspecial":14,"velocidade":6}},

  // Família Raikou
  {"dexNumber":243,"nome":"Raikou","altura":1.9,"peso":178.0,"genero":"assexuado","tipos":["Elétrico"],"habitats":["montanha","pradaria"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":8,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":12}},

  // Família Entei
  {"dexNumber":244,"nome":"Entei","altura":2.1,"peso":198.0,"genero":"assexuado","tipos":["Fogo"],"habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":9,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":10}},

  // Família Suicune
  {"dexNumber":245,"nome":"Suicune","altura":2.0,"peso":187.0,"genero":"assexuado","tipos":["Água"],"habitats":["pradaria"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":12,"ataqueEspecial":9,"defesaEspecial":12,"velocidade":9}},

  // Família Larvitar
  {"dexNumber":246,"nome":"Larvitar","altura":0.6,"peso":72.0,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":15,"baseExp":15,"evolucao":247,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":247,"nome":"Pupitar","altura":1.2,"peso":152.0,"genero":"50_50","tipos":["Pedra","Terra"],"habitats":["caverna","montanha"],"catchRate":15,"baseExp":15,"evolucao":248,"evolucaoNivel":55,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":248,"nome":"Tyranitar","altura":2.0,"peso":202.0,"genero":"50_50","tipos":["Pedra","Noturno"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":11,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":6}},

  // Família Lugia
  {"dexNumber":249,"nome":"Lugia","altura":5.2,"peso":216.0,"genero":"assexuado","tipos":["Psíquico","Voador"],"habitats":["artico","oceano"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":9,"defesa":13,"ataqueEspecial":9,"defesaEspecial":15,"velocidade":9}},

  // Família Ho-oh
  {"dexNumber":250,"nome":"Ho-oh","altura":3.8,"peso":199.0,"genero":"assexuado","tipos":["Fogo","Voador"],"habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":9,"ataqueEspecial":11,"defesaEspecial":15,"velocidade":9}},

  // Família Celebi
  {"dexNumber":251,"nome":"Celebi","altura":0.6,"peso":5.0,"genero":"assexuado","tipos":["Psíquico","Planta"],"habitats":["floresta","selva"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
  
  //HoennDex 252 - 386

  // Família Treecko
  {"dexNumber":252,"nome":"Treecko","altura":0.5,"peso":5.0,"genero":"87_12","tipos":["Planta"],"habitats":["selva"],"catchRate":20,"baseExp":15,"evolucao":253,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":253,"nome":"Grovyle","altura":0.9,"peso":21.6,"genero":"87_12","tipos":["Planta"],"habitats":["selva"],"catchRate":10,"baseExp":30,"evolucao":254,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":254,"nome":"Sceptile","altura":1.7,"peso":52.2,"genero":"87_12","tipos":["Planta"],"habitats":["selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":12}},

  // Família Torchic
  {"dexNumber":255,"nome":"Torchic","altura":0.4,"peso":2.5,"genero":"87_12","tipos":["Fogo"],"habitats":["pradaria"],"catchRate":20,"baseExp":15,"evolucao":256,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":5}},
  {"dexNumber":256,"nome":"Combusken","altura":0.9,"peso":19.5,"genero":"87_12","tipos":["Fogo","Lutador"],"habitats":["pradaria"],"catchRate":10,"baseExp":30,"evolucao":257,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":257,"nome":"Blaziken","altura":1.9,"peso":52.0,"genero":"87_12","tipos":["Fogo","Lutador"],"habitats":["pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":8}},

  // Família Mudkip
  {"dexNumber":258,"nome":"Mudkip","altura":0.4,"peso":7.6,"genero":"87_12","tipos":["Água"],"habitats":["pantano"],"catchRate":20,"baseExp":15,"evolucao":259,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":259,"nome":"Marshtomp","altura":0.7,"peso":28.0,"genero":"87_12","tipos":["Água","Terra"],"habitats":["pantano"],"catchRate":10,"baseExp":30,"evolucao":260,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":260,"nome":"Swampert","altura":1.5,"peso":81.9,"genero":"87_12","tipos":["Água","Terra"],"habitats":["pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":10,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":6}},

  // Família Poochyena
  {"dexNumber":261,"nome":"Poochyena","altura":0.5,"peso":13.6,"genero":"50_50","tipos":["Noturno"],"habitats":["floresta","pradaria"],"catchRate":25,"baseExp":10,"evolucao":262,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":262,"nome":"Mightyena","altura":1.0,"peso":37.0,"genero":"50_50","tipos":["Noturno"],"habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},

  // Família Zigzagoon
  {"dexNumber":263,"nome":"Zigzagoon","altura":0.4,"peso":17.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":264,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":264,"nome":"Linoone","altura":0.5,"peso":32.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":10}},

  // Família Wurmple
  {"dexNumber":265,"nome":"Wurmple","altura":0.3,"peso":3.6,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta","selva"],"catchRate":45,"baseExp":5,"evolucao":266,"evolucaoNivel":7,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":2,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":266,"nome":"Silcoon","altura":0.6,"peso":10.0,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta","selva"],"catchRate":15,"baseExp":10,"evolucao":267,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":6,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":267,"nome":"Beautifly","altura":1.0,"peso":28.4,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":10,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":268,"nome":"Cascoon","altura":0.7,"peso":11.5,"genero":"50_50","tipos":["Inseto"],"habitats":["floresta","selva"],"catchRate":15,"baseExp":10,"evolucao":269,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":6,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":269,"nome":"Dustox","altura":1.2,"peso":31.6,"genero":"50_50","tipos":["Inseto","Veneno"],"habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":7}},

  // Família Lotad
  {"dexNumber":270,"nome":"Lotad","altura":0.5,"peso":2.6,"genero":"50_50","tipos":["Água","Planta"],"habitats":["agua_doce"],"catchRate":25,"baseExp":15,"evolucao":271,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":3,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":271,"nome":"Lombre","altura":1.2,"peso":32.5,"genero":"50_50","tipos":["Água","Planta"],"habitats":["agua_doce"],"catchRate":20,"baseExp":30,"evolucao":272,"evolucaoNivel":null,"evolucaoItem":"water stone","statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":272,"nome":"Ludicolo","altura":1.5,"peso":55.0,"genero":"50_50","tipos":["Água","Planta"],"habitats":["agua_doce","floresta"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":7}},

  // Família Seedot
  {"dexNumber":273,"nome":"Seedot","altura":0.5,"peso":4.0,"genero":"50_50","tipos":["Planta"],"habitats":["floresta","selva"],"catchRate":25,"baseExp":15,"evolucao":274,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
  {"dexNumber":274,"nome":"Nuzleaf","altura":1.0,"peso":28.0,"genero":"50_50","tipos":["Planta","Noturno"],"habitats":["floresta","selva"],"catchRate":20,"baseExp":30,"evolucao":275,"evolucaoNivel":null,"evolucaoItem":"leaf stone","statusBasais":{"saude":7,"ataque":7,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":275,"nome":"Shiftry","altura":1.3,"peso":59.6,"genero":"50_50","tipos":["Planta","Noturno"],"habitats":["floresta","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":6,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":8}},

  // Família Taillow
  {"dexNumber":276,"nome":"Taillow","altura":0.3,"peso":2.3,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":277,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":9}},
  {"dexNumber":277,"nome":"Swellow","altura":0.7,"peso":19.8,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":13}},

  // Família Wingull
  {"dexNumber":278,"nome":"Wingull","altura":0.6,"peso":9.5,"genero":"50_50","tipos":["Água","Voador"],"habitats":["praia"],"catchRate":25,"baseExp":10,"evolucao":279,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":3,"ataqueEspecial":6,"defesaEspecial":3,"velocidade":9}},
  {"dexNumber":279,"nome":"Pelipper","altura":1.2,"peso":28.0,"genero":"50_50","tipos":["Água","Voador"],"habitats":["praia"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":7}},

  // Família Ralts
  {"dexNumber":280,"nome":"Ralts","altura":0.4,"peso":6.6,"genero":"50_50","tipos":["Psíquico","Fada"],"habitats":["cidade","floresta"],"catchRate":40,"baseExp":15,"evolucao":281,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":3,"defesa":3,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":281,"nome":"Kirlia","altura":0.8,"peso":20.2,"genero":"50_50","tipos":["Psíquico","Fada"],"habitats":["cidade","floresta"],"catchRate":35,"baseExp":15,"evolucao":282,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":5}},
  {"dexNumber":282,"nome":"Gardevoir","altura":1.6,"peso":48.4,"genero":"50_50","tipos":["Psíquico","Fada"],"habitats":["cidade","floresta"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":13,"defesaEspecial":12,"velocidade":8}},

  // Família Surskit
  {"dexNumber":283,"nome":"Surskit","altura":0.5,"peso":1.7,"genero":"50_50","tipos":["Inseto","Água"],"habitats":["agua_doce"],"catchRate":40,"baseExp":10,"evolucao":284,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":3,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":284,"nome":"Masquerain","altura":0.8,"peso":3.6,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["agua_doce"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":6}},

  // Família Shroomish
  {"dexNumber":285,"nome":"Shroomish","altura":0.4,"peso":4.5,"genero":"50_50","tipos":["Planta"],"habitats":["pantano","selva"],"catchRate":30,"baseExp":10,"evolucao":286,"evolucaoNivel":23,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":6,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":286,"nome":"Breloom","altura":1.2,"peso":39.2,"genero":"50_50","tipos":["Planta","Lutador"],"habitats":["floresta","pantano","selva"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":13,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},

  // Família Slakoth
  {"dexNumber":287,"nome":"Slakoth","altura":0.8,"peso":24.0,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","selva","taiga"],"catchRate":50,"baseExp":15,"evolucao":288,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":288,"nome":"Vigoroth","altura":1.4,"peso":46.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","selva","taiga"],"catchRate":20,"baseExp":40,"evolucao":289,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":9}},
  {"dexNumber":289,"nome":"Slaking","altura":2.0,"peso":130.5,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","selva","taiga"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":16,"defesa":10,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":10}},

  // Família Nincada
  {"dexNumber":290,"nome":"Nincada","altura":0.5,"peso":5.5,"genero":"50_50","tipos":["Inseto","Terra"],"habitats":["deserto","floresta"],"catchRate":35,"baseExp":10,"evolucao":291,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":5,"defesa":9,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":291,"nome":"Ninjask","altura":0.8,"peso":12.0,"genero":"50_50","tipos":["Inseto","Voador"],"habitats":["deserto","floresta"],"catchRate":5,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":16}},
  {"dexNumber":292,"nome":"Shedinja","altura":0.8,"peso":1.2,"genero":"assexuado","tipos":["Inseto","Fantasma"],"habitats":["deserto","floresta"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":0,"ataque":9,"defesa":5,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},

  // Família Whismur
  {"dexNumber":293,"nome":"Whismur","altura":0.6,"peso":16.3,"genero":"50_50","tipos":["Normal"],"habitats":["caverna"],"catchRate":45,"baseExp":15,"evolucao":294,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":2,"ataqueEspecial":5,"defesaEspecial":2,"velocidade":3}},
  {"dexNumber":294,"nome":"Loudred","altura":1.0,"peso":40.5,"genero":"50_50","tipos":["Normal"],"habitats":["caverna"],"catchRate":30,"baseExp":10,"evolucao":295,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":295,"nome":"Exploud","altura":1.5,"peso":84.0,"genero":"50_50","tipos":["Normal"],"habitats":["caverna"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":6,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":7}},

  // Família Makuhita
  {"dexNumber":296,"nome":"Makuhita","altura":1.0,"peso":86.4,"genero":"75_25","tipos":["Lutador"],"habitats":["caverna","montanha"],"catchRate":30,"baseExp":10,"evolucao":297,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":3,"ataqueEspecial":2,"defesaEspecial":3,"velocidade":3}},
  {"dexNumber":297,"nome":"Hariyama","altura":2.3,"peso":253.8,"genero":"75_25","tipos":["Lutador"],"habitats":["caverna","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":12,"defesa":6,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},

  // Família Azurill
  {"dexNumber":298,"nome":"Azurill","altura":0.2,"peso":2.0,"genero":"25_75","tipos":["Normal","Fada"],"habitats":["agua_doce"],"catchRate":60,"baseExp":5,"evolucao":183,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":5,"ataque":2,"defesa":4,"ataqueEspecial":2,"defesaEspecial":4,"velocidade":2}},

  // Família Nosepass
  {"dexNumber":299,"nome":"Nosepass","altura":1.0,"peso":97.0,"genero":"50_50","tipos":["Pedra"],"habitats":["caverna","montanha","praia"],"catchRate":20,"baseExp":20,"evolucao":476,"evolucaoNivel":null,"evolucaoItem":"nivelar em area magnetic field","statusBasais":{"saude":3,"ataque":5,"defesa":14,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":4}},

  // Família Skitty
  {"dexNumber":300,"nome":"Skitty","altura":0.6,"peso":11.0,"genero":"25_75","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":301,"evolucaoNivel":null,"evolucaoItem":"moon stone","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":301,"nome":"Delcatty","altura":1.1,"peso":32.6,"genero":"25_75","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},

  // Família Sableye
  {"dexNumber":302,"nome":"Sableye","altura":0.5,"peso":11.0,"genero":"50_50","tipos":["Noturno","Fantasma"],"habitats":["caverna","montanha","ruina"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},

  // Família Mawile
  {"dexNumber":303,"nome":"Mawile","altura":0.6,"peso":11.5,"genero":"50_50","tipos":["Aço","Fada"],"habitats":["caverna","floresta","montanha"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":7,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},

  // Família Aron
  {"dexNumber":304,"nome":"Aron","altura":0.4,"peso":60.0,"genero":"50_50","tipos":["Aço","Pedra"],"habitats":["caverna","montanha"],"catchRate":25,"baseExp":15,"evolucao":305,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":10,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":305,"nome":"Lairon","altura":0.9,"peso":120.0,"genero":"50_50","tipos":["Aço","Pedra"],"habitats":["caverna","montanha"],"catchRate":25,"baseExp":25,"evolucao":306,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":14,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":306,"nome":"Aggron","altura":2.1,"peso":360.0,"genero":"50_50","tipos":["Aço","Pedra"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":18,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},

  // Família Meditite
  {"dexNumber":307,"nome":"Meditite","altura":0.6,"peso":11.2,"genero":"50_50","tipos":["Lutador","Psíquico"],"habitats":["caverna","montanha"],"catchRate":30,"baseExp":10,"evolucao":308,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":6,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":308,"nome":"Medicham","altura":1.3,"peso":31.5,"genero":"50_50","tipos":["Lutador","Psíquico"],"habitats":["caverna","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

  // Família Electrike
  {"dexNumber":309,"nome":"Electrike","altura":0.6,"peso":15.2,"genero":"50_50","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":310,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":310,"nome":"Manectric","altura":1.5,"peso":40.2,"genero":"50_50","tipos":["Elétrico"],"habitats":["floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":11,"defesaEspecial":6,"velocidade":11}},

  // Família Plusle
  {"dexNumber":311,"nome":"Plusle","altura":0.4,"peso":4.2,"genero":"50_50","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":4,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":10}},

  // Família Minun
  {"dexNumber":312,"nome":"Minun","altura":0.4,"peso":4.2,"genero":"50_50","tipos":["Elétrico"],"habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":5,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":10}},

  // Família Volbeat
  {"dexNumber":313,"nome":"Volbeat","altura":0.7,"peso":17.7,"genero":"100_0","tipos":["Inseto"],"habitats":["floresta","pradaria","selva"],"catchRate":30,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":9}},

  // Família Illumise
  {"dexNumber":314,"nome":"Illumise","altura":0.6,"peso":17.7,"genero":"0_100","tipos":["Inseto"],"habitats":["floresta","pradaria","selva"],"catchRate":30,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":6,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":9}},

  // Família Roselia
  {"dexNumber":315,"nome":"Roselia","altura":0.3,"peso":2.0,"genero":"50_50","tipos":["Planta","Veneno"],"habitats":["floresta","pradaria","selva"],"catchRate":25,"baseExp":25,"evolucao":407,"evolucaoNivel":null,"evolucaoItem":"shiny stone","statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":7}},

  // Família Gulpin
  {"dexNumber":316,"nome":"Gulpin","altura":0.4,"peso":10.3,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade","pantano","pradaria"],"catchRate":30,"baseExp":15,"evolucao":317,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":4,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":317,"nome":"Swalot","altura":1.7,"peso":80.0,"genero":"50_50","tipos":["Veneno"],"habitats":["cidade","pantano","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":6}},

  // Família Carvanha
  {"dexNumber":318,"nome":"Carvanha","altura":0.8,"peso":20.8,"genero":"50_50","tipos":["Água","Noturno"],"habitats":["agua_doce","oceano"],"catchRate":30,"baseExp":10,"evolucao":319,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":2,"ataqueEspecial":7,"defesaEspecial":2,"velocidade":7}},
  {"dexNumber":319,"nome":"Sharpedo","altura":1.8,"peso":88.8,"genero":"50_50","tipos":["Água","Noturno"],"habitats":["agua_doce","oceano"],"catchRate":20,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":5,"ataqueEspecial":10,"defesaEspecial":5,"velocidade":10}},

  // Família Wailmer
  {"dexNumber":320,"nome":"Wailmer","altura":2.0,"peso":130.0,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":15,"evolucao":321,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":7,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":321,"nome":"Wailord","altura":14.5,"peso":398.0,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":17,"ataque":9,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":6}},

  // Família Numel
  {"dexNumber":322,"nome":"Numel","altura":0.7,"peso":24.0,"genero":"50_50","tipos":["Fogo","Terra"],"habitats":["deserto","montanha"],"catchRate":25,"baseExp":10,"evolucao":323,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":4,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":323,"nome":"Camerupt","altura":1.9,"peso":220.0,"genero":"50_50","tipos":["Fogo","Terra"],"habitats":["deserto","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":4}},

  // Família Torkoal
  {"dexNumber":324,"nome":"Torkoal","altura":0.5,"peso":80.4,"genero":"50_50","tipos":["Fogo"],"habitats":["caverna","deserto","montanha"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":14,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":2}},

  // Família Spoink
  {"dexNumber":325,"nome":"Spoink","altura":0.7,"peso":30.6,"genero":"50_50","tipos":["Psíquico"],"habitats":["floresta","pradaria","taiga"],"catchRate":30,"baseExp":10,"evolucao":326,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":3,"defesa":4,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":326,"nome":"Grumpig","altura":0.9,"peso":71.5,"genero":"50_50","tipos":["Psíquico"],"habitats":["floresta","pradaria","taiga"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":5,"defesa":7,"ataqueEspecial":9,"defesaEspecial":11,"velocidade":8}},

  // Família Spinda
  {"dexNumber":327,"nome":"Spinda","altura":1.1,"peso":5.0,"genero":"50_50","tipos":["Normal"],"habitats":["floresta","pradaria"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},

  // Família Trapinch
  {"dexNumber":328,"nome":"Trapinch","altura":0.7,"peso":15.0,"genero":"50_50","tipos":["Terra"],"habitats":["deserto"],"catchRate":35,"baseExp":10,"evolucao":329,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":1}},
  {"dexNumber":329,"nome":"Vibrava","altura":1.1,"peso":15.3,"genero":"50_50","tipos":["Terra","Dragão"],"habitats":["deserto"],"catchRate":25,"baseExp":35,"evolucao":330,"evolucaoNivel":45,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":330,"nome":"Flygon","altura":2.0,"peso":82.0,"genero":"50_50","tipos":["Terra","Dragão"],"habitats":["deserto","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":10}},

  // Família Cacnea
  {"dexNumber":331,"nome":"Cacnea","altura":0.4,"peso":51.3,"genero":"50_50","tipos":["Planta"],"habitats":["deserto"],"catchRate":30,"baseExp":10,"evolucao":332,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":4,"ataqueEspecial":9,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":332,"nome":"Cacturne","altura":1.3,"peso":77.4,"genero":"50_50","tipos":["Planta","Noturno"],"habitats":["deserto"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":6,"ataqueEspecial":12,"defesaEspecial":6,"velocidade":6}},

  // Família Swablu
  {"dexNumber":333,"nome":"Swablu","altura":0.4,"peso":1.2,"genero":"50_50","tipos":["Normal","Voador"],"habitats":["floresta","selva"],"catchRate":40,"baseExp":10,"evolucao":334,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":6,"ataqueEspecial":4,"defesaEspecial":8,"velocidade":5}},
  {"dexNumber":334,"nome":"Altaria","altura":1.1,"peso":20.6,"genero":"50_50","tipos":["Dragão","Voador"],"habitats":["floresta","selva"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":9,"ataqueEspecial":7,"defesaEspecial":11,"velocidade":8}},

  // Família Zangoose
  {"dexNumber":335,"nome":"Zangoose","altura":1.3,"peso":40.3,"genero":"50_50","tipos":["Normal"],"habitats":["deserto","floresta","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":9}},

  // Família Seviper
  {"dexNumber":336,"nome":"Seviper","altura":2.7,"peso":52.2,"genero":"50_50","tipos":["Veneno"],"habitats":["deserto","floresta","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":7}},

  // Família Lunatone
  {"dexNumber":337,"nome":"Lunatone","altura":1.0,"peso":168.0,"genero":"assexuado","tipos":["Pedra","Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":9}},

  // Família Solrock
  {"dexNumber":338,"nome":"Solrock","altura":1.2,"peso":154.0,"genero":"assexuado","tipos":["Pedra","Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":7}},

  // Família Barboach
  {"dexNumber":339,"nome":"Barboach","altura":0.4,"peso":1.9,"genero":"50_50","tipos":["Água","Terra"],"habitats":["agua_doce","pantano"],"catchRate":30,"baseExp":10,"evolucao":340,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":340,"nome":"Whiscash","altura":0.9,"peso":23.6,"genero":"50_50","tipos":["Água","Terra"],"habitats":["agua_doce","pantano"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":6}},

  // Família Corphish
  {"dexNumber":341,"nome":"Corphish","altura":0.6,"peso":11.5,"genero":"50_50","tipos":["Água"],"habitats":["oceano","pantano"],"catchRate":30,"baseExp":10,"evolucao":342,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":7,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":342,"nome":"Crawdaunt","altura":1.1,"peso":32.8,"genero":"50_50","tipos":["Água","Noturno"],"habitats":["oceano","pantano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":12,"defesa":9,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":6}},

  // Família Baltoy
  {"dexNumber":343,"nome":"Baltoy","altura":0.5,"peso":21.5,"genero":"assexuado","tipos":["Terra","Psíquico"],"habitats":["caverna","ruina"],"catchRate":20,"baseExp":15,"evolucao":344,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":6,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":6}},
  {"dexNumber":344,"nome":"Claydol","altura":1.5,"peso":108.0,"genero":"assexuado","tipos":["Terra","Psíquico"],"habitats":["caverna","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":11,"ataqueEspecial":7,"defesaEspecial":12,"velocidade":8}},

  // Família Lileep
  {"dexNumber":345,"nome":"Lileep","altura":1.0,"peso":23.8,"genero":"87_12","tipos":["Pedra","Planta"],"habitats":["caverna","oceano"],"catchRate":15,"baseExp":20,"evolucao":346,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":4,"defesa":8,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":2}},
  {"dexNumber":346,"nome":"Cradily","altura":1.5,"peso":60.4,"genero":"87_12","tipos":["Pedra","Planta"],"habitats":["caverna","oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":10,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":4}},

  // Família Anorith
  {"dexNumber":347,"nome":"Anorith","altura":0.7,"peso":12.5,"genero":"87_12","tipos":["Pedra","Inseto"],"habitats":["caverna","oceano"],"catchRate":15,"baseExp":20,"evolucao":348,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":8}},
  {"dexNumber":348,"nome":"Armaldo","altura":1.5,"peso":68.2,"genero":"87_12","tipos":["Pedra","Inseto"],"habitats":["caverna"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":10,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":5}},

  // Família Feebas
  {"dexNumber":349,"nome":"Feebas","altura":0.6,"peso":7.4,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce"],"catchRate":75,"baseExp":5,"evolucao":350,"evolucaoNivel":null,"evolucaoItem":"beauty condition","statusBasais":{"saude":2,"ataque":2,"defesa":2,"ataqueEspecial":1,"defesaEspecial":6,"velocidade":8}},
  {"dexNumber":350,"nome":"Milotic","altura":6.2,"peso":162.0,"genero":"50_50","tipos":["Água"],"habitats":["agua_doce"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":6,"defesa":8,"ataqueEspecial":10,"defesaEspecial":13,"velocidade":8}},

  // Família Castform
  {"dexNumber":351,"nome":"Castform","altura":0.3,"peso":0.8,"genero":"50_50","tipos":["Normal"],"habitats":["cidade","floresta"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":7}},

  // Família Kecleon
  {"dexNumber":352,"nome":"Kecleon","altura":1.0,"peso":22.0,"genero":"50_50","tipos":["Normal"],"habitats":["floresta"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":12,"velocidade":4}},

  // Família Shuppet
  {"dexNumber":353,"nome":"Shuppet","altura":0.6,"peso":2.3,"genero":"50_50","tipos":["Fantasma"],"habitats":["caverna","cidade","ruina"],"catchRate":30,"baseExp":10,"evolucao":354,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":4,"ataqueEspecial":6,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":354,"nome":"Banette","altura":1.1,"peso":12.5,"genero":"50_50","tipos":["Fantasma"],"habitats":["caverna","cidade","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":12,"defesa":7,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":7}},

  // Família Duskull
  {"dexNumber":355,"nome":"Duskull","altura":0.8,"peso":15.0,"genero":"50_50","tipos":["Fantasma"],"habitats":["caverna","floresta","montanha","ruina"],"catchRate":25,"baseExp":15,"evolucao":356,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":2,"ataque":4,"defesa":9,"ataqueEspecial":3,"defesaEspecial":9,"velocidade":3}},
  {"dexNumber":356,"nome":"Dusclops","altura":1.6,"peso":30.6,"genero":"50_50","tipos":["Fantasma"],"habitats":["caverna","floresta","montanha","ruina"],"catchRate":10,"baseExp":40,"evolucao":477,"evolucaoNivel":null,"evolucaoItem":"reaper cloth","statusBasais":{"saude":4,"ataque":7,"defesa":13,"ataqueEspecial":6,"defesaEspecial":13,"velocidade":3}},

  // Família Tropius
  {"dexNumber":357,"nome":"Tropius","altura":2.0,"peso":100.0,"genero":"50_50","tipos":["Planta","Voador"],"habitats":["floresta","pantano","selva"],"catchRate":25,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":5}},

  // Família Chimecho
  {"dexNumber":358,"nome":"Chimecho","altura":0.6,"peso":1.0,"genero":"50_50","tipos":["Psíquico"],"habitats":["caverna","cidade"],"catchRate":25,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":5,"defesa":8,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":7}},

  // Família Absol
  {"dexNumber":359,"nome":"Absol","altura":1.2,"peso":47.0,"genero":"50_50","tipos":["Noturno"],"habitats":["floresta","montanha","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":8}},

  // Família Wynaut
  {"dexNumber":360,"nome":"Wynaut","altura":0.6,"peso":14.0,"genero":"50_50","tipos":["Psíquico"],"habitats":["caverna","montanha","pradaria"],"catchRate":25,"baseExp":5,"evolucao":202,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":2,"defesa":5,"ataqueEspecial":2,"defesaEspecial":5,"velocidade":2}},
  
  // Família Snorunt
  {"dexNumber":361,"nome":"Snorunt","altura":0.7,"peso":16.8,"genero":"50_50","tipos":["Gelo"],"habitats":["taiga","tundra"],"catchRate":30,"baseExp":10,"evolucao":362,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
  {"dexNumber":362,"nome":"Glalie","altura":1.5,"peso":256.5,"genero":"50_50","tipos":["Gelo"],"habitats":["caverna","taiga","tundra"],"catchRate":0,"baseExp":100,"evolucao":478,"evolucaoNivel":null,"evolucaoItem":"dusk stone","statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":8}},

  // Família Spheal
  {"dexNumber":363,"nome":"Spheal","altura":0.8,"peso":39.5,"genero":"50_50","tipos":["Gelo","Água"],"habitats":["artico","oceano","tundra"],"catchRate":40,"baseExp":15,"evolucao":364,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":4,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":364,"nome":"Sealeo","altura":1.1,"peso":87.6,"genero":"50_50","tipos":["Gelo","Água"],"habitats":["artico","oceano","tundra"],"catchRate":20,"baseExp":35,"evolucao":365,"evolucaoNivel":44,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":5}},
  {"dexNumber":365,"nome":"Walrein","altura":1.4,"peso":150.6,"genero":"50_50","tipos":["Gelo","Água"],"habitats":["artico","oceano","tundra"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":9,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":7}},

  // Família Clamperl
  {"dexNumber":366,"nome":"Clamperl","altura":0.4,"peso":52.5,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":367,"evolucaoNivel":null,"evolucaoItem":"deep sea tooth","statusBasais":{"saude":4,"ataque":7,"defesa":9,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":367,"nome":"Huntail","altura":1.7,"peso":27.0,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":11,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":5}},
  {"dexNumber":368,"nome":"Gorebyss","altura":1.8,"peso":22.6,"genero":"50_50","tipos":["Água"],"habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":11,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":5}},

  // Família Relicanth
  {"dexNumber":369,"nome":"Relicanth","altura":1.0,"peso":23.4,"genero":"50_50","tipos":["Água","Pedra"],"habitats":["oceano"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":13,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":6}},

  // Família Luvdisc
  {"dexNumber":370,"nome":"Luvdisc","altura":0.6,"peso":8.7,"genero":"25_75","tipos":["Água"],"habitats":["oceano"],"catchRate":40,"baseExp":10,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":6,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":6}},

  // Família Bagon
  {"dexNumber":371,"nome":"Bagon","altura":0.6,"peso":42.1,"genero":"87_12","tipos":["Dragão"],"habitats":["caverna","montanha"],"catchRate":15,"baseExp":15,"evolucao":372,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":6,"ataqueEspecial":4,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":372,"nome":"Shelgon","altura":1.1,"peso":110.5,"genero":"87_12","tipos":["Dragão"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":30,"evolucao":373,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":10,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":5}},
  {"dexNumber":373,"nome":"Salamence","altura":1.5,"peso":102.6,"genero":"87_12","tipos":["Dragão","Voador"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":14,"defesa":8,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":10}},

  // Família Beldum
  {"dexNumber":374,"nome":"Beldum","altura":0.6,"peso":95.2,"genero":"assexuado","tipos":["Aço","Psíquico"],"habitats":["caverna"],"catchRate":15,"baseExp":15,"evolucao":375,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":8,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":375,"nome":"Metang","altura":1.2,"peso":202.5,"genero":"assexuado","tipos":["Aço","Psíquico"],"habitats":["caverna"],"catchRate":5,"baseExp":30,"evolucao":376,"evolucaoNivel":45,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":10,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":5}},
  {"dexNumber":376,"nome":"Metagross","altura":1.6,"peso":550.0,"genero":"assexuado","tipos":["Aço","Psíquico"],"habitats":["caverna","montanha"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":14,"defesa":13,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":7}},

  // Família Regirock
  {"dexNumber":377,"nome":"Regirock","altura":1.7,"peso":230.0,"genero":"assexuado","tipos":["Pedra"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":20,"ataqueEspecial":5,"defesaEspecial":10,"velocidade":5}},

  // Família Regice
  {"dexNumber":378,"nome":"Regice","altura":1.8,"peso":175.0,"genero":"assexuado","tipos":["Gelo"],"habitats":["taiga","tundra","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":5,"defesa":10,"ataqueEspecial":10,"defesaEspecial":20,"velocidade":5}},

  // Família Registeel
  {"dexNumber":379,"nome":"Registeel","altura":1.9,"peso":205.0,"genero":"assexuado","tipos":["Aço"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":15,"ataqueEspecial":8,"defesaEspecial":15,"velocidade":5}},

  // Família Latias
  {"dexNumber":380,"nome":"Latias","altura":1.4,"peso":40.0,"genero":"0_100","tipos":["Dragão","Psíquico"],"habitats":["floresta","montanha","oceano","pradaria","praia"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":9,"ataqueEspecial":11,"defesaEspecial":13,"velocidade":11}},

  // Família Latios
  {"dexNumber":381,"nome":"Latios","altura":2.0,"peso":60.0,"genero":"100_0","tipos":["Dragão","Psíquico"],"habitats":["floresta","montanha","oceano","pradaria","praia"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":8,"ataqueEspecial":13,"defesaEspecial":11,"velocidade":11}},

  // Família Kyogre
  {"dexNumber":382,"nome":"Kyogre","altura":4.5,"peso":352.0,"genero":"assexuado","tipos":["Água"],"habitats":["artico","oceano"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":9,"ataqueEspecial":15,"defesaEspecial":14,"velocidade":9}},

  // Família Groudon
  {"dexNumber":383,"nome":"Groudon","altura":3.5,"peso":950.0,"genero":"assexuado","tipos":["Terra"],"habitats":["caverna","deserto","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":15,"defesa":14,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":9}},

  // Família Rayquaza
  {"dexNumber":384,"nome":"Rayquaza","altura":7.0,"peso":206.5,"genero":"assexuado","tipos":["Dragão","Voador"],"habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":15,"defesa":9,"ataqueEspecial":15,"defesaEspecial":9,"velocidade":10}},

  // Família Jirachi
  {"dexNumber":385,"nome":"Jirachi","altura":0.3,"peso":1.1,"genero":"assexuado","tipos":["Aço","Psíquico"],"habitats":["caverna","floresta","montanha","selva","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},

  // Família Deoxys
  {"dexNumber":386,"nome":"Deoxys","altura":1.7,"peso":60.8,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":15,"defesa":5,"ataqueEspecial":15,"defesaEspecial":5,"velocidade":15}},
  
  // Formas Deoxys

  {"dexNumber":10001,"nome":"Deoxys (Ataque)","altura":1.7,"peso":60.8,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":18,"defesa":2,"ataqueEspecial":18,"defesaEspecial":2,"velocidade":15}},
  {"dexNumber":10002,"nome":"Deoxys (Defesa)","altura":1.7,"peso":60.8,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":16,"ataqueEspecial":7,"defesaEspecial":16,"velocidade":9}},
  {"dexNumber":10003,"nome":"Deoxys (Velocidade)","altura":1.7,"peso":60.8,"genero":"assexuado","tipos":["Psíquico"],"habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":18}},
  
  //SinnohDex 387 - 493
  
  // Família Turtwig
  {"dexNumber":387,"nome":"Turtwig","tipos":["Planta"],"altura":0.4,"peso":10.2,"genero":"87_12","habitats":["floresta","pantano","selva"],"catchRate":20,"baseExp":15,"evolucao":388,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":388,"nome":"Grotle","tipos":["Planta"],"altura":1.1,"peso":97.0,"genero":"87_12","habitats":["floresta","pantano","selva"],"catchRate":10,"baseExp":30,"evolucao":389,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":4}},
  {"dexNumber":389,"nome":"TorTerra","tipos":["Planta", "Terra"],"altura":2.2,"peso":310.0,"genero":"87_12","habitats":["floresta","pantano","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":11,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":4}},

  // Família Chimchar
  {"dexNumber":390,"nome":"Chimchar","tipos":["Fogo"],"altura":0.5,"peso":6.2,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":20,"baseExp":15,"evolucao":391,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":391,"nome":"Monferno","tipos":["Fogo", "Lutador"],"altura":0.9,"peso":22.0,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":10,"baseExp":30,"evolucao":392,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":8}},
  {"dexNumber":392,"nome":"Infernape","tipos":["Fogo", "Lutador"],"altura":1.2,"peso":55.0,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":10}},

  // Família Piplup
  {"dexNumber":393,"nome":"Piplup","tipos":["Água"],"altura":0.4,"peso":5.2,"genero":"87_12","habitats":["praia","taiga","tundra"],"catchRate":20,"baseExp":15,"evolucao":394,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":394,"nome":"Prinplup","tipos":["Água"],"altura":0.8,"peso":23.0,"genero":"87_12","habitats":["praia","taiga","tundra"],"catchRate":10,"baseExp":30,"evolucao":395,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":7,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":5}},
  {"dexNumber":395,"nome":"Empoleon","tipos":["Água", "Aço"],"altura":1.7,"peso":84.5,"genero":"87_12","habitats":["praia","taiga","tundra"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":9,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":6}},

  // Família Starly
  {"dexNumber":396,"nome":"Starly","tipos":["Normal", "Voador"],"altura":0.3,"peso":2.0,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":397,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":6}},
  {"dexNumber":397,"nome":"Staravia","tipos":["Normal", "Voador"],"altura":0.6,"peso":15.5,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":398,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":8}},
  {"dexNumber":398,"nome":"Staraptor","tipos":["Normal", "Voador"],"altura":1.2,"peso":24.9,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":10}},

  // Família Bidoof
  {"dexNumber":399,"nome":"Bidoof","tipos":["Normal"],"altura":0.5,"peso":20.0,"genero":"50_50","habitats":["floresta","pantano","pradaria"],"catchRate":40,"baseExp":10,"evolucao":400,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":400,"nome":"Bibarel","tipos":["Normal", "Água"],"altura":1.0,"peso":31.5,"genero":"50_50","habitats":["floresta","pantano","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},

  // Família Kricketot
  {"dexNumber":401,"nome":"Kricketot","tipos":["Inseto"],"altura":0.3,"peso":2.2,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":402,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":402,"nome":"Kricketune","tipos":["Inseto"],"altura":1.0,"peso":25.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":30,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},

  // Família Shinx
  {"dexNumber":403,"nome":"Shinx","tipos":["Elétrico"],"altura":0.5,"peso":9.5,"genero":"50_50","habitats":["caverna","pradaria"],"catchRate":45,"baseExp":10,"evolucao":404,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":3,"ataqueEspecial":4,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":404,"nome":"Luxio","tipos":["Elétrico"],"altura":0.9,"peso":30.5,"genero":"50_50","habitats":["caverna","pradaria"],"catchRate":25,"baseExp":25,"evolucao":405,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":405,"nome":"Luxray","tipos":["Elétrico"],"altura":1.4,"peso":42.0,"genero":"50_50","habitats":["caverna","montanha","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":7}},

  // Família Budew
  {"dexNumber":406,"nome":"Budew","tipos":["Planta", "Veneno"],"altura":0.2,"peso":1.2,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":25,"baseExp":15,"evolucao":315,"evolucaoNivel":null,"evolucaoItem":"amizade dia","statusBasais":{"saude":4,"ataque":3,"defesa":4,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":6}},

  // Família Roserade
  {"dexNumber":407,"nome":"Roserade","tipos":["Planta", "Veneno"],"altura":0.9,"peso":14.5,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":7,"ataqueEspecial":13,"defesaEspecial":11,"velocidade":9}},

  // Família Cranidos
  {"dexNumber":408,"nome":"Cranidos","tipos":["Pedra"],"altura":0.9,"peso":31.5,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":15,"baseExp":20,"evolucao":409,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":6}},
  {"dexNumber":409,"nome":"Rampardos","tipos":["Pedra"],"altura":1.6,"peso":102.5,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":17,"defesa":6,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":6}},

  // Família Shieldon
  {"dexNumber":410,"nome":"Shieldon","tipos":["Pedra", "Aço"],"altura":0.5,"peso":57.0,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":15,"baseExp":20,"evolucao":411,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":12,"ataqueEspecial":4,"defesaEspecial":9,"velocidade":3}},
  {"dexNumber":411,"nome":"Bastiodon","tipos":["Pedra", "Aço"],"altura":1.3,"peso":149.5,"genero":"87_12","habitats":["caverna","montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":17,"ataqueEspecial":5,"defesaEspecial":14,"velocidade":3}},

  // Família Burmy
  {"dexNumber":412,"nome":"Burmy","tipos":["Inseto"],"altura":0.2,"peso":3.4,"genero":"50_50","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":413,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":413,"nome":"Wormadam","tipos":["Inseto", "Planta"],"altura":0.5,"peso":6.5,"genero":"0_100","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":9,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":4}},
  {"dexNumber":414,"nome":"Mothim","tipos":["Inseto", "Voador"],"altura":0.9,"peso":23.3,"genero":"100_0","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":7}},

  //Formas Burmy
  {"dexNumber":10034,"nome":"Burmy Forma Areia","tipos":["Inseto"],"altura":0.2,"peso":3.4,"genero":"50_50","habitats":["deserto"],"catchRate":25,"baseExp":10,"evolucao":413,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":10035,"nome":"Burmy Forma Urbana","tipos":["Inseto"],"altura":0.2,"peso":3.4,"genero":"50_50","habitats":["cidade"],"catchRate":25,"baseExp":10,"evolucao":413,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":4}},
 
    //Formas Wormadam
  {"dexNumber":10004,"nome":"Wormadam Capa Areia","tipos":["Terra", "Inseto"],"altura":0.5,"peso":6.5,"genero":"0_100","habitats":["deserto"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":11,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":4}},
  {"dexNumber":10005,"nome":"Wormadam Capa Urbana","tipos":["Aço", "Inseto"],"altura":0.5,"peso":6.5,"genero":"0_100","habitats":["cidade"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":10,"ataqueEspecial":7,"defesaEspecial":11,"velocidade":4}},

  //Formas Mothim
  {"dexNumber":10269,"nome":"Mothim Forma Areia","tipos":["Inseto", "Voador"],"altura":0.9,"peso":23.3,"genero":"100_0","habitats":["deserto"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":10270,"nome":"Mothim Forma Urbana","tipos":["Inseto", "Voador"],"altura":0.9,"peso":23.3,"genero":"100_0","habitats":["cidade"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":7}},

  // Família Combee
  {"dexNumber":415,"nome":"Combee","tipos":["Inseto", "Voador"],"altura":0.3,"peso":5.5,"genero":"87_12","habitats":["floresta"],"catchRate":25,"baseExp":10,"evolucao":416,"evolucaoNivel":21,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":3,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":416,"nome":"Vespiquen","tipos":["Inseto", "Voador"],"altura":1.2,"peso":38.5,"genero":"0_100","habitats":["floresta"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":10,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":4}},

  // Família Pachirisu
  {"dexNumber":417,"nome":"Pachirisu","tipos":["Elétrico"],"altura":0.4,"peso":3.9,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":30,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":10}},

  // Família Buizel
  {"dexNumber":418,"nome":"Buizel","tipos":["Água"],"altura":0.7,"peso":29.5,"genero":"50_50","habitats":["agua_doce","pradaria"],"catchRate":30,"baseExp":10,"evolucao":419,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":4,"ataqueEspecial":6,"defesaEspecial":3,"velocidade":9}},
  {"dexNumber":419,"nome":"Floatzel","tipos":["Água"],"altura":1.1,"peso":33.5,"genero":"50_50","habitats":["agua_doce","pradaria"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":6,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":12}},

  // Família Cherubi
  {"dexNumber":420,"nome":"Cherubi","tipos":["Planta"],"altura":0.4,"peso":3.3,"genero":"50_50","habitats":["floresta","selva"],"catchRate":30,"baseExp":10,"evolucao":421,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":421,"nome":"Cherrim","tipos":["Planta"],"altura":0.5,"peso":9.3,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":9}},

  // Família Shellos
  {"dexNumber":422,"nome":"Shellos","tipos":["Água"],"altura":0.3,"peso":6.3,"genero":"50_50","habitats":["oceano","praia"],"catchRate":30,"baseExp":10,"evolucao":423,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":423,"nome":"Gastrodon","tipos":["Água", "Terra"],"altura":0.9,"peso":29.9,"genero":"50_50","habitats":["oceano","praia"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":4}},

  // Família Ambipom
  {"dexNumber":424,"nome":"Ambipom","tipos":["Normal"],"altura":1.2,"peso":20.3,"genero":"50_50","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":12}},

  // Família Drifloon
  {"dexNumber":425,"nome":"Drifloon","tipos":["Fantasma", "Voador"],"altura":0.4,"peso":1.2,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":25,"baseExp":10,"evolucao":426,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":5,"defesa":3,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":426,"nome":"Drifblim","tipos":["Fantasma", "Voador"],"altura":1.2,"peso":15.0,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":8,"defesa":4,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":8}},

  // Família Buneary
  {"dexNumber":427,"nome":"Buneary","tipos":["Normal"],"altura":0.4,"peso":5.5,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":428,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":6,"ataque":7,"defesa":4,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":9}},
  {"dexNumber":428,"nome":"Lopunny","tipos":["Normal"],"altura":1.2,"peso":33.3,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":8,"ataqueEspecial":5,"defesaEspecial":10,"velocidade":11}},

  // Família Mismagius
  {"dexNumber":429,"nome":"Mismagius","tipos":["Fantasma"],"altura":0.9,"peso":4.4,"genero":"50_50","habitats":["caverna","floresta","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":11,"defesaEspecial":11,"velocidade":11}},

  // Família Honchkrow
  {"dexNumber":430,"nome":"Honchkrow","tipos":["Noturno", "Voador"],"altura":0.9,"peso":27.3,"genero":"50_50","habitats":["floresta","pantano","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":5,"ataqueEspecial":11,"defesaEspecial":5,"velocidade":7}},

  // Família Glameow
  {"dexNumber":431,"nome":"Glameow","tipos":["Normal"],"altura":0.5,"peso":3.9,"genero":"25_75","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":432,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":9}},
  {"dexNumber":432,"nome":"Purugly","tipos":["Normal"],"altura":1.0,"peso":43.8,"genero":"25_75","habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":11}},

  // Família Chingling
  {"dexNumber":433,"nome":"Chingling","tipos":["Psíquico"],"altura":0.2,"peso":0.6,"genero":"50_50","habitats":["caverna","cidade"],"catchRate":30,"baseExp":10,"evolucao":358,"evolucaoNivel":null,"evolucaoItem":"amizade noite","statusBasais":{"saude":5,"ataque":3,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":5}},

  // Família Stunky
  {"dexNumber":434,"nome":"Stunky","tipos":["Veneno", "Noturno"],"altura":0.4,"peso":19.2,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":435,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":435,"nome":"Skuntank","tipos":["Veneno", "Noturno"],"altura":1.0,"peso":38.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":7,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},

  // Família Bronzor
  {"dexNumber":436,"nome":"Bronzor","tipos":["Aço", "Psíquico"],"altura":0.5,"peso":60.5,"genero":"assexuado","habitats":["caverna","floresta","montanha","ruina"],"catchRate":25,"baseExp":15,"evolucao":437,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":2,"defesa":9,"ataqueEspecial":2,"defesaEspecial":9,"velocidade":2}},
  {"dexNumber":437,"nome":"Bronzong","tipos":["Aço", "Psíquico"],"altura":1.3,"peso":187.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":12,"ataqueEspecial":8,"defesaEspecial":12,"velocidade":3}},

  // Família Bonsly
  {"dexNumber":438,"nome":"Bonsly","tipos":["Pedra"],"altura":0.5,"peso":15.0,"genero":"50_50","habitats":["floresta","pradaria","selva","taiga"],"catchRate":30,"baseExp":10,"evolucao":185,"evolucaoNivel":null,"evolucaoItem":"Pedra folha","statusBasais":{"saude":5,"ataque":8,"defesa":10,"ataqueEspecial":1,"defesaEspecial":5,"velocidade":1}},

  // Família Mime Jr.
  {"dexNumber":439,"nome":"Mime Jr.","tipos":["Psíquico", "Fada"],"altura":0.6,"peso":13.0,"genero":"100_0","habitats":["cidade"],"catchRate":35,"baseExp":10,"evolucao":122,"evolucaoNivel":null,"evolucaoItem":"movimento mimico","statusBasais":{"saude":2,"ataque":3,"defesa":5,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":6}},

  // Família Happiny
  {"dexNumber":440,"nome":"Happiny","tipos":["Normal"],"altura":0.6,"peso":24.4,"genero":"0_100","habitats":["pradaria","cidade"],"catchRate":45,"baseExp":15,"evolucao":113,"evolucaoNivel":null,"evolucaoItem":"Pedra oval","statusBasais":{"saude":10,"ataque":1,"defesa":1,"ataqueEspecial":2,"defesaEspecial":7,"velocidade":3}},

  // Família Chatot
  {"dexNumber":441,"nome":"Chatot","tipos":["Normal", "Voador"],"altura":0.5,"peso":1.9,"genero":"50_50","habitats":["floresta","selva"],"catchRate":30,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":5,"ataqueEspecial":9,"defesaEspecial":4,"velocidade":9}},

  // Família Spiritomb
  {"dexNumber":442,"nome":"Spiritomb","tipos":["Fantasma", "Noturno"],"altura":1.0,"peso":108.0,"genero":"50_50","habitats":["caverna","floresta","cidade","ruina"],"catchRate":10,"baseExp":45,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":11,"ataqueEspecial":9,"defesaEspecial":11,"velocidade":4}},

  // Família Gible
  {"dexNumber":443,"nome":"Gible","tipos":["Dragão", "Terra"],"altura":0.7,"peso":20.5,"genero":"50_50","habitats":["caverna","deserto"],"catchRate":15,"baseExp":15,"evolucao":444,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":444,"nome":"Gabite","tipos":["Dragão", "Terra"],"altura":1.4,"peso":56.0,"genero":"50_50","habitats":["caverna","deserto"],"catchRate":5,"baseExp":30,"evolucao":445,"evolucaoNivel":48,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":8}},
  {"dexNumber":445,"nome":"Garchomp","tipos":["Dragão", "Terra"],"altura":1.9,"peso":95.0,"genero":"50_50","habitats":["caverna","montanha","deserto"],"catchRate":5,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":10,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":10}},

  // Família Munchlax
  {"dexNumber":446,"nome":"Munchlax","tipos":["Normal"],"altura":0.6,"peso":105.0,"genero":"87_12","habitats":["montanha","floresta","taiga","cidade"],"catchRate":25,"baseExp":15,"evolucao":143,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":14,"ataque":9,"defesa":4,"ataqueEspecial":4,"defesaEspecial":9,"velocidade":1}},

  // Família Riolu
  {"dexNumber":447,"nome":"Riolu","tipos":["Lutador"],"altura":0.7,"peso":20.2,"genero":"87_12","habitats":["montanha","caverna"],"catchRate":25,"baseExp":10,"evolucao":448,"evolucaoNivel":null,"evolucaoItem":"amizade dia","statusBasais":{"saude":4,"ataque":7,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},

  // Família Lucario
  {"dexNumber":448,"nome":"Lucario","tipos":["Lutador", "Aço"],"altura":1.2,"peso":54.0,"genero":"87_12","habitats":["montanha","floresta","caverna"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":7,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":9}},

  // Família Hippopotas
  {"dexNumber":449,"nome":"Hippopotas","tipos":["Terra"],"altura":0.8,"peso":49.5,"genero":"50_50","habitats":["caverna","deserto"],"catchRate":30,"baseExp":10,"evolucao":450,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":8,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":450,"nome":"Hippowdon","tipos":["Terra"],"altura":2.0,"peso":300.0,"genero":"50_50","habitats":["caverna","deserto"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":12,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},

  // Família Skorupi
  {"dexNumber":451,"nome":"Skorupi","tipos":["Veneno", "Inseto"],"altura":0.8,"peso":12.0,"genero":"50_50","habitats":["caverna","selva","pantano"],"catchRate":30,"baseExp":15,"evolucao":452,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":9,"ataqueEspecial":3,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":452,"nome":"Drapion","tipos":["Veneno", "Noturno"],"altura":1.3,"peso":61.5,"genero":"50_50","habitats":["floresta","selva","pantano"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":11,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":9}},

  // Família Croagunk
  {"dexNumber":453,"nome":"Croagunk","tipos":["Veneno", "Lutador"],"altura":0.7,"peso":23.0,"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":30,"baseExp":15,"evolucao":454,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":454,"nome":"Toxicroak","tipos":["Veneno", "Lutador"],"altura":1.3,"peso":44.4,"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":9}},

  // Família Carnivine
  {"dexNumber":455,"nome":"Carnivine","tipos":["Planta"],"altura":1.4,"peso":27.0,"genero":"50_50","habitats":["selva","pantano"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":5}},

  // Família Finneon
  {"dexNumber":456,"nome":"Finneon","tipos":["Água"],"altura":0.4,"peso":7.0,"genero":"50_50","habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":457,"evolucaoNivel":31,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":457,"nome":"Lumineon","tipos":["Água"],"altura":1.2,"peso":24.0,"genero":"50_50","habitats":["oceano"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":9}},

  // Família Mantyke
  {"dexNumber":458,"nome":"Mantyke","tipos":["Água", "Voador"],"altura":1.0,"peso":65.0,"genero":"50_50","habitats":["oceano"],"catchRate":30,"baseExp":15,"evolucao":226,"evolucaoNivel":null,"evolucaoItem":"Remoraid no party","statusBasais":{"saude":5,"ataque":2,"defesa":5,"ataqueEspecial":6,"defesaEspecial":12,"velocidade":5}},

  // Família Snover
  {"dexNumber":459,"nome":"Snover","tipos":["Planta", "Gelo"],"altura":1.0,"peso":50.5,"genero":"50_50","habitats":["taiga"],"catchRate":20,"baseExp":20,"evolucao":460,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":460,"nome":"Abomasnow","tipos":["Planta", "Gelo"],"altura":2.2,"peso":135.5,"genero":"50_50","habitats":["taiga"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":8,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":6}},

  // Família Weavile
  {"dexNumber":461,"nome":"Weavile","tipos":["Noturno", "Gelo"],"altura":1.1,"peso":34.0,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":7,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":13}},

  // Família Magnezone
  {"dexNumber":462,"nome":"Magnezone","tipos":["Elétrico", "Aço"],"altura":1.2,"peso":180.0,"genero":"assexuado","habitats":["montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":12,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":6}},

  // Família Lickilicky
  {"dexNumber":463,"nome":"Lickilicky","tipos":["Normal"],"altura":1.7,"peso":140.0,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":9,"defesa":10,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":5}},

  // Família Rhyperior
  {"dexNumber":464,"nome":"Rhyperior","tipos":["Terra", "Pedra"],"altura":2.4,"peso":282.8,"genero":"50_50","habitats":["montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":14,"defesa":13,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":4}},

  // Família Tangrowth
  {"dexNumber":465,"nome":"Tangrowth","tipos":["Planta"],"altura":2.0,"peso":128.5,"genero":"50_50","habitats":["selva","pantano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":13,"ataqueEspecial":11,"defesaEspecial":5,"velocidade":5}},

  // Família Electivire
  {"dexNumber":466,"nome":"Electivire","tipos":["Elétrico"],"altura":1.8,"peso":138.6,"genero":"75_25","habitats":["floresta","pradaria","cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":7,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":10}},

  // Família Magmortar
  {"dexNumber":467,"nome":"Magmortar","tipos":["Fogo"],"altura":1.6,"peso":68.0,"genero":"75_25","habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":7,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":8}},

  // Família Togekiss
  {"dexNumber":468,"nome":"Togekiss","tipos":["Fada", "Voador"],"altura":1.5,"peso":38.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":8}},

  // Família Yanmega
  {"dexNumber":469,"nome":"Yanmega","tipos":["Inseto", "Voador"],"altura":1.9,"peso":51.5,"genero":"50_50","habitats":["floresta","pantano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":9,"ataqueEspecial":12,"defesaEspecial":6,"velocidade":10}},

  // Família Leafeon
  {"dexNumber":470,"nome":"Leafeon","tipos":["Planta"],"altura":1.0,"peso":25.5,"genero":"87_12","habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":13,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":10}},

  // Família Glaceon
  {"dexNumber":471,"nome":"Glaceon","tipos":["Gelo"],"altura":0.8,"peso":25.9,"genero":"87_12","habitats":["taiga","tundra"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":11,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":7}},

  // Família Gliscor
  {"dexNumber":472,"nome":"Gliscor","tipos":["Terra", "Voador"],"altura":2.0,"peso":42.5,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":13,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":10}},

  // Família Mamoswine
  {"dexNumber":473,"nome":"Mamoswine","tipos":["Gelo", "Terra"],"altura":2.5,"peso":291.0,"genero":"50_50","habitats":["tundra"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":8,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},

  // Família Porygon-Z
  {"dexNumber":474,"nome":"Porygon Z","tipos":["Normal"],"altura":0.9,"peso":34.0,"genero":"assexuado","habitats":["cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":7,"ataqueEspecial":14,"defesaEspecial":8,"velocidade":9}},

  // Família Gallade
  {"dexNumber":475,"nome":"Gallade","tipos":["Psíquico", "Lutador"],"altura":1.6,"peso":52.0,"genero":"100_0","habitats":["floresta","cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":7,"ataqueEspecial":7,"defesaEspecial":12,"velocidade":8}},

  // Família Probopass
  {"dexNumber":476,"nome":"Probopass","tipos":["Pedra", "Aço"],"altura":1.4,"peso":340.0,"genero":"50_50","habitats":["montanha","ruina"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":15,"ataqueEspecial":8,"defesaEspecial":15,"velocidade":4}},

  // Família Dusknoir
  {"dexNumber":477,"nome":"Dusknoir","tipos":["Fantasma"],"altura":2.2,"peso":106.6,"genero":"50_50","habitats":["caverna","montanha","floresta","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":14,"ataqueEspecial":7,"defesaEspecial":14,"velocidade":5}},

  // Família Froslass
  {"dexNumber":478,"nome":"Froslass","tipos":["Gelo", "Fantasma"],"altura":1.3,"peso":26.6,"genero":"0_100","habitats":["taiga","tundra"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":11}},

  // Família Rotom
  {"dexNumber":479,"nome":"Rotom","tipos":["Elétrico", "Fantasma"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":9}},

  //Formas Rotom 
  {"dexNumber":10008,"nome":"Rotom Calor","tipos":["Fogo", "Elétrico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10009,"nome":"Rotom Lavagem","tipos":["Água", "Elétrico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10010,"nome":"Rotom Frio","tipos":["Gelo", "Elétrico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10011,"nome":"Rotom Vento","tipos":["Voador", "Elétrico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10012,"nome":"Rotom Corte","tipos":["Planta", "Elétrico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["cidade"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},

  // Família Uxie
  {"dexNumber":480,"nome":"Uxie","tipos":["Psíquico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":13,"ataqueEspecial":8,"defesaEspecial":13,"velocidade":10}},

  // Família Mesprit
  {"dexNumber":481,"nome":"Mesprit","tipos":["Psíquico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":11,"ataqueEspecial":11,"defesaEspecial":11,"velocidade":8}},

  // Família Azelf
  {"dexNumber":482,"nome":"Azelf","tipos":["Psíquico"],"altura":0.3,"peso":0.3,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":7,"ataqueEspecial":13,"defesaEspecial":7,"velocidade":12}},

  // Família Dialga
  {"dexNumber":483,"nome":"Dialga","tipos":["Aço", "Dragão"],"altura":5.4,"peso":683.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":12,"ataqueEspecial":15,"defesaEspecial":10,"velocidade":9}},

  // Família Palkia
  {"dexNumber":484,"nome":"Palkia","tipos":["Água", "Dragão"],"altura":4.2,"peso":336.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":10,"ataqueEspecial":15,"defesaEspecial":12,"velocidade":10}},

  // Família Heatran
  {"dexNumber":485,"nome":"Heatran","tipos":["Fogo", "Aço"],"altura":1.7,"peso":430.0,"genero":"50_50","habitats":["montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":11,"ataqueEspecial":13,"defesaEspecial":11,"velocidade":8}},

  // Família Regigigas
  {"dexNumber":486,"nome":"Regigigas","tipos":["Normal"],"altura":3.7,"peso":420.0,"genero":"assexuado","habitats":["caverna","montanha","tundra","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":16,"defesa":11,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":10}},

  // Família Giratina
  {"dexNumber":487,"nome":"Giratina","tipos":["Fantasma", "Dragão"],"altura":4.5,"peso":750.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":9}},
  {"dexNumber":10007,"nome":"Giratina Origin","tipos":["Fantasma", "Dragão"],"altura":6.9,"peso":650.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":10,"defesa":8,"ataqueEspecial":14,"defesaEspecial":10,"velocidade":12}},

  // Família Cresselia
  {"dexNumber":488,"nome":"Cresselia","tipos":["Psíquico"],"altura":1.5,"peso":85.6,"genero":"0_100","habitats":["floresta","selva"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":7,"defesa":12,"ataqueEspecial":8,"defesaEspecial":13,"velocidade":9}},

  // Família Phione
  {"dexNumber":489,"nome":"Phione","tipos":["Água"],"altura":0.4,"peso":3.1,"genero":"assexuado","habitats":["oceano"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":8}},

  // Família Manaphy
  {"dexNumber":490,"nome":"Manaphy","tipos":["Água"],"altura":0.3,"peso":1.4,"genero":"assexuado","habitats":["oceano"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},

  // Família Darkrai
  {"dexNumber":491,"nome":"Darkrai","tipos":["Noturno"],"altura":1.5,"peso":50.5,"genero":"assexuado","habitats":["floresta","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":9,"ataqueEspecial":14,"defesaEspecial":9,"velocidade":13}},

  // Família Shaymin
  {"dexNumber":492,"nome":"Shaymin","tipos":["Planta"],"altura":0.2,"peso":2.1,"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10006,"nome":"Shaymin Céu","tipos":["Planta", "Voador"],"altura":0.4,"peso":5.2,"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":8,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":12}}, 

  // Família Arceus
  {"dexNumber":493,"nome":"Arceus","tipos":["Normal"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},

    // Formas do Arceus
  {"dexNumber":493,"nome":"Arceus (Placa Chama)","tipos":["Fogo"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Espelho)","tipos":["Água"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Trovão)","tipos":["Elétrico"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Folha)","tipos":["Planta"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Geada)","tipos":["Gelo"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Punho)","tipos":["Lutador"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Veneno)","tipos":["Veneno"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Terra)","tipos":["Terra"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Céu)","tipos":["Voador"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Mente)","tipos":["Psíquico"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Inseto)","tipos":["Inseto"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Rocha)","tipos":["Pedra"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Fantasma)","tipos":["Fantasma"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Dragão)","tipos":["Dragão"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Noturna)","tipos":["Noturno"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Ferro)","tipos":["Aço"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  {"dexNumber":493,"nome":"Arceus (Placa Fada)","tipos":["Fada"],"altura":3.2,"peso":320.0,"genero":"assexuado","habitats":["extradimensional","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":12,"ataqueEspecial":12,"defesaEspecial":12,"velocidade":12}},
  
  // Formas de Hisui

  // Família Growlithe de Hisui
  {"dexNumber":10229,"nome":"Growlithe de Hisui","tipos":["Fogo", "Pedra"],"altura":0.8,"peso":22.7,"genero":"75_25","habitats":["montanha","pradaria"],"catchRate":35,"baseExp":50,"evolucao":59,"evolucaoNivel":null,"evolucaoItem":"fire_stone","statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":10230,"nome":"Arcanine de Hisui","tipos":["Fogo", "Pedra"],"altura":2.0,"peso":168.0,"genero":"75_25","habitats":["montanha","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":9}},

  // Família Voltorb de Hisui
  {"dexNumber":10231,"nome":"Voltorb de Hisui","tipos":["Elétrico", "Planta"],"altura":0.5,"peso":13.0,"genero":"assexuado","habitats":["montanha","pradaria"],"catchRate":35,"baseExp":50,"evolucao":101,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":10}},
  {"dexNumber":10232,"nome":"Electrode de Hisui","tipos":["Elétrico", "Planta"],"altura":1.2,"peso":71.0,"genero":"assexuado","habitats":["montanha","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":15}},

  // Família Typhlosion de Hisui
  {"dexNumber":10233,"nome":"Typhlosion de Hisui","tipos":["Fogo", "Fantasma"],"altura":1.6,"peso":69.8,"genero":"87_12","habitats":["montanha","pradaria","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":10}},

  // Família Qwilfish de Hisui
  {"dexNumber":10234,"nome":"Qwilfish de Hisui","tipos":["Veneno", "Noturno"],"altura":0.5,"peso":3.9,"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":904,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":9,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":8}},

  // Família Sneasel de Hisui
  {"dexNumber":10235,"nome":"Sneasel de Hisui","tipos":["Lutador", "Veneno"],"altura":0.9,"peso":27.0,"genero":"50_50","habitats":["montanha","tundra"],"catchRate":60,"baseExp":50,"evolucao":903,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":11}},

  // Família Samurott de Hisui
  {"dexNumber":10236,"nome":"Samurott de Hisui","tipos":["Água", "Noturno"],"altura":1.5,"peso":58.2,"genero":"87_12","habitats":["agua_doce","oceano"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":9,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":7}},

  // Família Lilligant de Hisui
  {"dexNumber":10237,"nome":"Lilligant de Hisui","tipos":["Planta", "Lutador"],"altura":1.2,"peso":19.2,"genero":"0_100","habitats":["pradaria","floresta","ruina"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":8,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":9}},

  // Família Zorua de Hisui
  {"dexNumber":10238,"nome":"Zorua de Hisui","tipos":["Normal", "Fantasma"],"altura":0.7,"peso":12.5,"genero":"87_12","habitats":["floresta","montanha"],"catchRate":75,"baseExp":50,"evolucao":571,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":7,"defesa":4,"ataqueEspecial":8,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":10239,"nome":"Zoroark de Hisui","tipos":["Normal", "Fantasma"],"altura":1.6,"peso":73.0,"genero":"87_12","habitats":["floresta","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":6,"ataqueEspecial":12,"defesaEspecial":6,"velocidade":11}},

  // Família Braviary de Hisui
  {"dexNumber":10240,"nome":"Braviary de Hisui","tipos":["Psíquico", "Voador"],"altura":1.7,"peso":43.4,"genero":"100_0","habitats":["montanha","tundra","ruina"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":6}},

  // Família Sliggoo de Hisui
  {"dexNumber":10241,"nome":"Sliggoo de Hisui","tipos":["Aço", "Dragão"],"altura":0.7,"peso":17.5,"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":706,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":5,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":6}},
  {"dexNumber":10242,"nome":"Goodra de Hisui","tipos":["Aço", "Dragão"],"altura":1.7,"peso":334.1,"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":7,"ataqueEspecial":11,"defesaEspecial":15,"velocidade":8}},

  // Família Avalugg de Hisui
  {"dexNumber":10243,"nome":"Avalugg de Hisui","tipos":["Gelo", "Pedra"],"altura":1.4,"peso":262.4,"genero":"50_50","habitats":["tundra","artico"],"catchRate":55,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":18,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},

  // Família Decidueye de Hisui
  {"dexNumber":10244,"nome":"Decidueye de Hisui","tipos":["Planta", "Lutador"],"altura":1.6,"peso":37.0,"genero":"87_12","habitats":["floresta","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":8,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":7}},

    //UnovaDex 494 - 649

      // Família Victini
    {"dexNumber":494,"nome":"Victini","tipos":["Psíquico","Fogo"],"altura":0.4,"peso":4.0,"genero":"assexuado","habitats":["cidade","floresta"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},

    // Família Snivy
    {"dexNumber":495,"nome":"Snivy","tipos":["Planta"],"altura":0.6,"peso":8.1,"genero":"87_12","habitats":["floresta","selva"],"catchRate":20,"baseExp":15,"evolucao":496,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":496,"nome":"Servine","tipos":["Planta"],"altura":0.8,"peso":16.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":497,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},
    {"dexNumber":497,"nome":"Serperior","tipos":["Planta"],"altura":3.3,"peso":63.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":10,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":11}},

    // Família Tepig
    {"dexNumber":498,"nome":"Tepig","tipos":["Fogo"],"altura":0.5,"peso":9.9,"genero":"87_12","habitats":["floresta","pradaria","montanha"],"catchRate":20,"baseExp":15,"evolucao":499,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":499,"nome":"Pignite","tipos":["Fogo","Lutador"],"altura":1.0,"peso":55.5,"genero":"87_12","habitats":["floresta","pradaria","montanha"],"catchRate":10,"baseExp":30,"evolucao":500,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":500,"nome":"Emboar","tipos":["Fogo","Lutador"],"altura":1.6,"peso":150.0,"genero":"87_12","habitats":["floresta","pradaria","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":12,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":7}},

    // Família Oshawott
    {"dexNumber":501,"nome":"Oshawott","tipos":["Água"],"altura":0.5,"peso":5.9,"genero":"87_12","habitats":["oceano","praia"],"catchRate":20,"baseExp":15,"evolucao":502,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":502,"nome":"Dewott","tipos":["Água"],"altura":0.8,"peso":24.5,"genero":"87_12","habitats":["oceano","praia"],"catchRate":10,"baseExp":30,"evolucao":503,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":503,"nome":"Samurott","tipos":["Água"],"altura":1.5,"peso":94.6,"genero":"87_12","habitats":["oceano","praia"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":9,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":7}},

    // Família Patrat
    {"dexNumber":504,"nome":"Patrat","tipos":["Normal"],"altura":0.5,"peso":11.6,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":505,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
    {"dexNumber":505,"nome":"Watchog","tipos":["Normal"],"altura":1.1,"peso":27.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":8}},

    // Família Lillipup
    {"dexNumber":506,"nome":"Lillipup","tipos":["Normal"],"altura":0.4,"peso":4.1,"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":20,"baseExp":15,"evolucao":507,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":507,"nome":"Herdier","tipos":["Normal"],"altura":0.9,"peso":14.7,"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":10,"baseExp":30,"evolucao":508,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":6}},
    {"dexNumber":508,"nome":"Stoutland","tipos":["Normal"],"altura":1.2,"peso":61.0,"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":9,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":8}},

    // Família Purrloin
    {"dexNumber":509,"nome":"Purrloin","tipos":["Noturno"],"altura":0.4,"peso":10.1,"genero":"50_50","habitats":["floresta","pradaria","selva","cidade"],"catchRate":25,"baseExp":15,"evolucao":510,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":510,"nome":"Liepard","tipos":["Noturno"],"altura":1.1,"peso":37.5,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":11}},

    // Família Pansage
    {"dexNumber":511,"nome":"Pansage","tipos":["Planta"],"altura":0.6,"peso":10.1,"genero":"87_12","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":512,"evolucaoNivel":null,"evolucaoItem":"Pedra folha","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":512,"nome":"Simisage","tipos":["Planta"],"altura":1.1,"peso":30.5,"genero":"87_12","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":10}},

    // Família Pansear
    {"dexNumber":513,"nome":"Pansear","tipos":["Fogo"],"altura":0.6,"peso":11.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":514,"evolucaoNivel":null,"evolucaoItem":"Pedra Fogo","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":514,"nome":"Simisear","tipos":["Fogo"],"altura":1.0,"peso":28.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":10}},

    // Família Panpour
    {"dexNumber":515,"nome":"Panpour","tipos":["Água"],"altura":0.6,"peso":13.5,"genero":"87_12","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":516,"evolucaoNivel":null,"evolucaoItem":"Pedra Água","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":516,"nome":"Simipour","tipos":["Água"],"altura":1.0,"peso":29.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":10}},

    // Família Munna
    {"dexNumber":517,"nome":"Munna","tipos":["Psíquico"],"altura":0.6,"peso":23.3,"genero":"50_50","habitats":["floresta"],"catchRate":25,"baseExp":10,"evolucao":518,"evolucaoNivel":null,"evolucaoItem":"Pedra lua","statusBasais":{"saude":8,"ataque":3,"defesa":5,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":2}},
    {"dexNumber":518,"nome":"Musharna","tipos":["Psíquico"],"altura":1.1,"peso":60.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":6,"defesa":9,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":3}},

    // Família Pidove
    {"dexNumber":519,"nome":"Pidove","tipos":["Normal","Voador"],"altura":0.3,"peso":2.1,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":520,"evolucaoNivel":21,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":3,"velocidade":4}},
    {"dexNumber":520,"nome":"Tranquill","tipos":["Normal","Voador"],"altura":0.6,"peso":15.0,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":521,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":521,"nome":"Unfezant","tipos":["Normal","Voador"],"altura":1.2,"peso":29.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":9}},

    // Família Blitzle
    {"dexNumber":522,"nome":"Blitzle","tipos":["Elétrico"],"altura":0.8,"peso":29.8,"genero":"50_50","habitats":["pradaria"],"catchRate":25,"baseExp":10,"evolucao":523,"evolucaoNivel":27,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":3,"ataqueEspecial":5,"defesaEspecial":3,"velocidade":8}},
    {"dexNumber":523,"nome":"Zebstrika","tipos":["Elétrico"],"altura":1.6,"peso":79.5,"genero":"50_50","habitats":["pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":12}},

    // Família Roggenrola
    {"dexNumber":524,"nome":"Roggenrola","tipos":["Pedra"],"altura":0.4,"peso":18.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":35,"baseExp":15,"evolucao":525,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":9,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
    {"dexNumber":525,"nome":"Boldore","tipos":["Pedra"],"altura":0.9,"peso":102.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":20,"baseExp":30,"evolucao":526,"evolucaoNivel":null,"evolucaoItem":"troca","statusBasais":{"saude":7,"ataque":11,"defesa":11,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":2}},
    {"dexNumber":526,"nome":"Gigalith","tipos":["Pedra"],"altura":1.7,"peso":260.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":14,"defesa":13,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":3}},

    // Família Woobat
    {"dexNumber":527,"nome":"Woobat","tipos":["Psíquico","Voador"],"altura":0.4,"peso":2.1,"genero":"50_50","habitats":["caverna"],"catchRate":25,"baseExp":10,"evolucao":528,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":6,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":528,"nome":"Swoobat","tipos":["Psíquico","Voador"],"altura":0.9,"peso":10.5,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":11}},

    // Família Drilbur
    {"dexNumber":529,"nome":"Drilbur","tipos":["Terra"],"altura":0.3,"peso":8.5,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":25,"baseExp":10,"evolucao":530,"evolucaoNivel":31,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":4,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":530,"nome":"Excadrill","tipos":["Terra","Aço"],"altura":0.7,"peso":40.4,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":6,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":9}},

    // Família Audino
    {"dexNumber":531,"nome":"Audino","tipos":["Normal"],"altura":1.1,"peso":31.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":35,"baseExp":null,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":6,"defesa":9,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":5}},

    // Família Timburr
    {"dexNumber":532,"nome":"Timburr","tipos":["Lutador"],"altura":0.6,"peso":12.5,"genero":"75_25","habitats":["cidade","montanha"],"catchRate":35,"baseExp":15,"evolucao":533,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":6,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":4}},
    {"dexNumber":533,"nome":"Gurdurr","tipos":["Lutador"],"altura":1.2,"peso":40.0,"genero":"75_25","habitats":["cidade","montanha"],"catchRate":20,"baseExp":30,"evolucao":534,"evolucaoNivel":null,"evolucaoItem":"troca","statusBasais":{"saude":9,"ataque":11,"defesa":9,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":534,"nome":"Conkeldurr","tipos":["Lutador"],"altura":1.5,"peso":97.0,"genero":"75_25","habitats":["montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":10,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":5}},

    // Família Tympole
    {"dexNumber":535,"nome":"Tympole","tipos":["Água"],"altura":0.5,"peso":4.1,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":15,"baseExp":null,"evolucao":536,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":536,"nome":"Palpitoad","tipos":["Água","Terra"],"altura":0.8,"peso":17.0,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":10,"baseExp":30,"evolucao":537,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":7}},
    {"dexNumber":537,"nome":"Seismitoad","tipos":["Água","Terra"],"altura":1.5,"peso":62.0,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":10,"defesa":8,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":7}},

    // Família Throh
    {"dexNumber":538,"nome":"Throh","tipos":["Lutador"],"altura":1.3,"peso":55.5,"genero":"100_0","habitats":["caverna","cidade","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":10,"defesa":9,"ataqueEspecial":3,"defesaEspecial":9,"velocidade":5}},

    // Família Sawk
    {"dexNumber":539,"nome":"Sawk","tipos":["Lutador"],"altura":1.4,"peso":51.0,"genero":"100_0","habitats":["caverna","cidade","montanha"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":8,"ataqueEspecial":3,"defesaEspecial":8,"velocidade":9}},

    // Família Sewaddle
    {"dexNumber":540,"nome":"Sewaddle","tipos":["Inseto","Planta"],"altura":0.3,"peso":2.5,"genero":"50_50","habitats":["floresta"],"catchRate":45,"baseExp":5,"evolucao":541,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":7,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":4}},
    {"dexNumber":541,"nome":"Swadloon","tipos":["Inseto","Planta"],"altura":0.5,"peso":7.3,"genero":"50_50","habitats":["floresta"],"catchRate":30,"baseExp":10,"evolucao":542,"evolucaoNivel":null,"evolucaoItem":"amizade","statusBasais":{"saude":6,"ataque":6,"defesa":9,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":4}},
    {"dexNumber":542,"nome":"Leavanny","tipos":["Inseto","Planta"],"altura":1.2,"peso":20.5,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":9}},

    // Família Venipede
    {"dexNumber":543,"nome":"Venipede","tipos":["Inseto","Veneno"],"altura":0.4,"peso":5.3,"genero":"50_50","habitats":["floresta"],"catchRate":45,"baseExp":5,"evolucao":544,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":5,"defesa":6,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":544,"nome":"Whirlipede","tipos":["Inseto","Veneno"],"altura":1.2,"peso":58.5,"genero":"50_50","habitats":["floresta"],"catchRate":30,"baseExp":10,"evolucao":545,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":10,"ataqueEspecial":4,"defesaEspecial":8,"velocidade":5}},
    {"dexNumber":545,"nome":"Scolipede","tipos":["Inseto","Veneno"],"altura":2.5,"peso":200.5,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":11}},

    // Família Cottonee
    {"dexNumber":546,"nome":"Cottonee","tipos":["Planta","Fada"],"altura":0.3,"peso":0.6,"genero":"50_50","habitats":["pradaria"],"catchRate":25,"baseExp":10,"evolucao":547,"evolucaoNivel":null,"evolucaoItem":"Pedra sol","statusBasais":{"saude":4,"ataque":3,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":547,"nome":"Whimsicott","tipos":["Planta","Fada"],"altura":0.7,"peso":6.6,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":9,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":12}},

    // Família Petilil
    {"dexNumber":548,"nome":"Petilil","tipos":["Planta"],"altura":0.5,"peso":6.6,"genero":"0_100","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":549,"evolucaoNivel":null,"evolucaoItem":"Pedra sol","statusBasais":{"saude":5,"ataque":4,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":3}},
    {"dexNumber":549,"nome":"Lilligant","tipos":["Planta"],"altura":1.1,"peso":16.3,"genero":"0_100","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":8,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":9}},

    // Família Basculin
    {"dexNumber":550,"nome":"Basculin","tipos":["Água"],"altura":1.0,"peso":18.0,"genero":"50_50","habitats":["oceano"],"catchRate":30,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":10}},

    // Família Sandile
    {"dexNumber":551,"nome":"Sandile","tipos":["Terra","Noturno"],"altura":0.7,"peso":15.2,"genero":"50_50","habitats":["deserto","praia"],"catchRate":20,"baseExp":15,"evolucao":552,"evolucaoNivel":29,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":552,"nome":"Krokorok","tipos":["Terra","Noturno"],"altura":1.0,"peso":33.4,"genero":"50_50","habitats":["deserto","praia"],"catchRate":10,"baseExp":30,"evolucao":553,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":553,"nome":"Krookodile","tipos":["Terra","Noturno"],"altura":1.5,"peso":96.3,"genero":"50_50","habitats":["deserto","praia"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":9}},

    // Família Darumaka
    {"dexNumber":554,"nome":"Darumaka","tipos":["Fogo"],"altura":0.6,"peso":37.5,"genero":"50_50","habitats":["caverna","deserto","montanha"],"catchRate":25,"baseExp":10,"evolucao":555,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":5,"ataqueEspecial":2,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":555,"nome":"Darmanitan","tipos":["Fogo"],"altura":1.3,"peso":92.9,"genero":"50_50","habitats":["caverna","deserto","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":6,"ataqueEspecial":3,"defesaEspecial":6,"velocidade":10}},

    // Família Maractus
    {"dexNumber":556,"nome":"Maractus","tipos":["Planta"],"altura":1.0,"peso":28.0,"genero":"50_50","habitats":["deserto","montanha"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":7,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":6}},

    // Família Dwebble
    {"dexNumber":557,"nome":"Dwebble","tipos":["Inseto","Pedra"],"altura":0.3,"peso":14.5,"genero":"50_50","habitats":["caverna","deserto","montanha","pradaria"],"catchRate":30,"baseExp":10,"evolucao":558,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":9,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":558,"nome":"Crustle","tipos":["Inseto","Pedra"],"altura":1.4,"peso":200.0,"genero":"50_50","habitats":["caverna","deserto","montanha","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":13,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":5}},

    // Família Scraggy
    {"dexNumber":559,"nome":"Scraggy","tipos":["Noturno","Lutador"],"altura":0.6,"peso":11.2,"genero":"50_50","habitats":["deserto","montanha"],"catchRate":25,"baseExp":10,"evolucao":560,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":7,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":5}},
    {"dexNumber":560,"nome":"Scrafty","tipos":["Noturno","Lutador"],"altura":1.1,"peso":30.0,"genero":"50_50","habitats":["deserto","montanha"],"catchRate":25,"baseExp":10,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":12,"ataqueEspecial":5,"defesaEspecial":12,"velocidade":6}},

    // Família Sigilyph
    {"dexNumber":561,"nome":"Sigilyph","tipos":["Psíquico","Voador"],"altura":1.4,"peso":14.0,"genero":"50_50","habitats":["deserto","ruina"],"catchRate":15,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":10}},

    // Família Yamask
    {"dexNumber":562,"nome":"Yamask","tipos":["Fantasma"],"altura":0.5,"peso":1.5,"genero":"50_50","habitats":["deserto","ruina"],"catchRate":25,"baseExp":15,"evolucao":563,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":3}},
    {"dexNumber":563,"nome":"Cofagrigus","tipos":["Fantasma"],"altura":1.7,"peso":76.5,"genero":"50_50","habitats":["deserto","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":15,"ataqueEspecial":10,"defesaEspecial":11,"velocidade":3}},

    // Família Tirtouga
    {"dexNumber":564,"nome":"Tirtouga","tipos":["Água","Pedra"],"altura":0.7,"peso":16.5,"genero":"87_12","habitats":["oceano"],"catchRate":15,"baseExp":20,"evolucao":565,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":10,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":2}},
    {"dexNumber":565,"nome":"CarrAçosta","tipos":["Água","Pedra"],"altura":1.2,"peso":82.0,"genero":"87_12","habitats":["oceano"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":13,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":3}},

    // Família Archen
    {"dexNumber":566,"nome":"Archen","tipos":["Pedra","Voador"],"altura":0.6,"peso":9.5,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":15,"baseExp":20,"evolucao":567,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":5,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":567,"nome":"Archeops","tipos":["Pedra","Voador"],"altura":1.4,"peso":32.0,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":14,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":11}},

    // Família Trubbish
    {"dexNumber":568,"nome":"Trubbish","tipos":["Veneno"],"altura":0.6,"peso":31.0,"genero":"50_50","habitats":["cidade"],"catchRate":30,"baseExp":15,"evolucao":569,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":7}},
    {"dexNumber":569,"nome":"Garbodor","tipos":["Veneno"],"altura":1.9,"peso":107.4,"genero":"50_50","habitats":["cidade","pantano","pradaria","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

    // Família Zorua
    {"dexNumber":570,"nome":"Zorua","tipos":["Noturno"],"altura":0.7,"peso":12.5,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":15,"baseExp":15,"evolucao":571,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":7,"defesa":4,"ataqueEspecial":8,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":571,"nome":"Zoroark","tipos":["Noturno"],"altura":1.6,"peso":81.1,"genero":"87_12","habitats":["floresta"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":6,"ataqueEspecial":12,"defesaEspecial":6,"velocidade":11}},

    // Família Minccino
    {"dexNumber":572,"nome":"Minccino","tipos":["Normal"],"altura":0.4,"peso":5.8,"genero":"25_75","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":573,"evolucaoNivel":null,"evolucaoItem":"Pedra brilhante","statusBasais":{"saude":6,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":8}},
    {"dexNumber":573,"nome":"Cinccino","tipos":["Normal"],"altura":0.5,"peso":7.5,"genero":"25_75","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":12}},

    {"dexNumber":574,"nome":"Gothita","tipos":["Psíquico"],"altura":0.4,"peso":5.8,"genero":"25_75","habitats":["cidade","floresta"],"catchRate":20,"baseExp":15,"evolucao":575,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":5,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":5}},
    {"dexNumber":575,"nome":"Gothorita","tipos":["Psíquico"],"altura":0.7,"peso":18.0,"genero":"25_75","habitats":["cidade","floresta"],"catchRate":10,"baseExp":30,"evolucao":576,"evolucaoNivel":41,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":6}},
    {"dexNumber":576,"nome":"Gothitelle","tipos":["Psíquico"],"altura":1.5,"peso":44.0,"genero":"25_75","habitats":["cidade","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":10,"ataqueEspecial":10,"defesaEspecial":11,"velocidade":7}},

    {"dexNumber":577,"nome":"Solosis","tipos":["Psíquico"],"altura":0.3,"peso":1.0,"genero":"50_50","habitats":["caverna","floresta"],"catchRate":20,"baseExp":15,"evolucao":578,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":4,"ataqueEspecial":11,"defesaEspecial":5,"velocidade":2}},
    {"dexNumber":578,"nome":"Duosion","tipos":["Psíquico"],"altura":0.6,"peso":8.0,"genero":"50_50","habitats":["caverna","floresta"],"catchRate":10,"baseExp":30,"evolucao":579,"evolucaoNivel":41,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":4,"defesa":5,"ataqueEspecial":13,"defesaEspecial":6,"velocidade":3}},
    {"dexNumber":579,"nome":"Reuniclus","tipos":["Psíquico"],"altura":1.0,"peso":20.1,"genero":"50_50","habitats":["caverna","floresta","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":7,"defesa":8,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":3}},

    {"dexNumber":580,"nome":"Ducklett","tipos":["Água","Voador"],"altura":0.5,"peso":5.5,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":25,"baseExp":10,"evolucao":581,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":581,"nome":"Swanna","tipos":["Água","Voador"],"altura":1.3,"peso":24.2,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":6,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":10}},

    {"dexNumber":582,"nome":"Vanillite","tipos":["Gelo"],"altura":0.4,"peso":5.7,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":20,"baseExp":15,"evolucao":583,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":583,"nome":"Vanillish","tipos":["Gelo"],"altura":1.1,"peso":41.0,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":10,"baseExp":30,"evolucao":584,"evolucaoNivel":47,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":7,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":6}},
    {"dexNumber":584,"nome":"Vanilluxe","tipos":["Gelo"],"altura":1.3,"peso":57.5,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":9,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":8}},

    {"dexNumber":585,"nome":"Deerling","tipos":["Normal","Planta"],"altura":0.6,"peso":19.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":586,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":8}},
    {"dexNumber":586,"nome":"Sawsbuck","tipos":["Normal","Planta"],"altura":1.9,"peso":92.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":10}},

    {"dexNumber":587,"nome":"Emolga","tipos":["Elétrico","Voador"],"altura":0.4,"peso":5.0,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":30,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":10}},

    {"dexNumber":588,"nome":"Karrablast","tipos":["Inseto"],"altura":0.5,"peso":5.9,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":40,"baseExp":10,"evolucao":589,"evolucaoNivel":null,"evolucaoItem":"troca com Shelmet","statusBasais":{"saude":5,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":589,"nome":"Escavalier","tipos":["Inseto","Aço"],"altura":1.0,"peso":33.0,"genero":"50_50","habitats":["floresta","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":14,"defesa":11,"ataqueEspecial":6,"defesaEspecial":11,"velocidade":2}},

    {"dexNumber":590,"nome":"Foongus","tipos":["Planta","Veneno"],"altura":0.2,"peso":1.0,"genero":"50_50","habitats":["caverna","floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":591,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":2}},
    {"dexNumber":591,"nome":"Amoonguss","tipos":["Planta","Veneno"],"altura":0.6,"peso":10.5,"genero":"50_50","habitats":["caverna","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":9,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":3}},

    {"dexNumber":592,"nome":"Frillish","tipos":["Água","Fantasma"],"altura":1.2,"peso":33.0,"genero":"50_50","habitats":["oceano","ruina"],"catchRate":25,"baseExp":10,"evolucao":593,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":5,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":4}},
    {"dexNumber":593,"nome":"Jellicent","tipos":["Água","Fantasma"],"altura":2.2,"peso":135.0,"genero":"50_50","habitats":["oceano","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":6,"defesa":7,"ataqueEspecial":9,"defesaEspecial":11,"velocidade":6}},

    {"dexNumber":594,"nome":"Alomomola","tipos":["Água"],"altura":1.2,"peso":31.6,"genero":"50_50","habitats":["oceano"],"catchRate":15,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":17,"ataque":8,"defesa":8,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":7}},

    {"dexNumber":595,"nome":"Joltik","tipos":["Inseto","Elétrico"],"altura":0.1,"peso":0.6,"genero":"50_50","habitats":["caverna","floresta","ruina"],"catchRate":40,"baseExp":10,"evolucao":596,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":596,"nome":"Galvantula","tipos":["Inseto","Elétrico"],"altura":0.8,"peso":14.3,"genero":"50_50","habitats":["caverna","floresta"],"catchRate":30,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":11}},

    {"dexNumber":597,"nome":"Ferroseed","tipos":["Aço","Planta"],"altura":0.6,"peso":18.8,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":10,"evolucao":598,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":9,"ataqueEspecial":2,"defesaEspecial":9,"velocidade":1}},
    {"dexNumber":598,"nome":"Ferrothorn","tipos":["Aço","Planta"],"altura":1.0,"peso":110.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":13,"ataqueEspecial":5,"defesaEspecial":12,"velocidade":2}},

    {"dexNumber":599,"nome":"Klink","tipos":["Aço"],"altura":0.3,"peso":21.0,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":35,"baseExp":15,"evolucao":600,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
    {"dexNumber":600,"nome":"Klang","tipos":["Aço"],"altura":0.6,"peso":51.0,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":25,"baseExp":30,"evolucao":601,"evolucaoNivel":49,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":10,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":5}},
    {"dexNumber":601,"nome":"Klinklang","tipos":["Aço"],"altura":0.6,"peso":81.0,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":12,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":9}},

    {"dexNumber":602,"nome":"Tynamo","tipos":["Elétrico"],"altura":0.2,"peso":0.3,"genero":"50_50","habitats":["agua_doce","caverna"],"catchRate":35,"baseExp":15,"evolucao":603,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":603,"nome":"Eelektrik","tipos":["Elétrico"],"altura":1.2,"peso":22.0,"genero":"50_50","habitats":["agua_doce","caverna"],"catchRate":25,"baseExp":30,"evolucao":604,"evolucaoNivel":null,"evolucaoItem":"Pedra trovão","statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":4}},
    {"dexNumber":604,"nome":"Eelektross","tipos":["Elétrico"],"altura":2.1,"peso":80.5,"genero":"50_50","habitats":["agua_doce","caverna"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":5}},

    {"dexNumber":605,"nome":"Elgyem","tipos":["Psíquico"],"altura":0.5,"peso":9.0,"genero":"50_50","habitats":["cidade","montanha","ruina"],"catchRate":35,"baseExp":10,"evolucao":606,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":3}},
    {"dexNumber":606,"nome":"Beheeyem","tipos":["Psíquico"],"altura":1.0,"peso":34.5,"genero":"50_50","habitats":["montanha","ruina"],"catchRate":25,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":4}},

    {"dexNumber":607,"nome":"Litwick","tipos":["Fantasma","Fogo"],"altura":0.3,"peso":3.1,"genero":"50_50","habitats":["caverna","cidade","ruina"],"catchRate":35,"baseExp":15,"evolucao":608,"evolucaoNivel":41,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":3,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":2}},
    {"dexNumber":608,"nome":"Lampent","tipos":["Fantasma","Fogo"],"altura":0.6,"peso":13.0,"genero":"50_50","habitats":["caverna","cidade","ruina"],"catchRate":25,"baseExp":30,"evolucao":609,"evolucaoNivel":null,"evolucaoItem":"Pedra amora","statusBasais":{"saude":6,"ataque":4,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":609,"nome":"Chandelure","tipos":["Fantasma","Fogo"],"altura":1.0,"peso":34.2,"genero":"50_50","habitats":["caverna","cidade","ruina"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":9,"ataqueEspecial":15,"defesaEspecial":9,"velocidade":8}},

    {"dexNumber":610,"nome":"Axew","tipos":["Dragão"],"altura":0.6,"peso":18.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":15,"evolucao":611,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":6,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":611,"nome":"Fraxure","tipos":["Dragão"],"altura":1.0,"peso":36.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":30,"evolucao":612,"evolucaoNivel":48,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":7,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":612,"nome":"Haxorus","tipos":["Dragão"],"altura":1.8,"peso":105.5,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":30,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":15,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":10}},

    {"dexNumber":613,"nome":"Cubchoo","tipos":["Gelo"],"altura":0.5,"peso":8.5,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":35,"baseExp":10,"evolucao":614,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":4}},
    {"dexNumber":614,"nome":"Beartic","tipos":["Gelo"],"altura":2.6,"peso":260.0,"genero":"50_50","habitats":["caverna","taiga","tundra"],"catchRate":30,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":5}},

    {"dexNumber":615,"nome":"Cryogonal","tipos":["Gelo"],"altura":1.1,"peso":148.0,"genero":"assexuado","habitats":["caverna","tundra"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":3,"ataqueEspecial":10,"defesaEspecial":14,"velocidade":11}},

    {"dexNumber":616,"nome":"Shelmet","tipos":["Inseto"],"altura":0.4,"peso":7.7,"genero":"50_50","habitats":["floresta","pantano"],"catchRate":35,"baseExp":10,"evolucao":617,"evolucaoNivel":null,"evolucaoItem":"troca com Karrablast","statusBasais":{"saude":5,"ataque":4,"defesa":9,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":3}},
    {"dexNumber":617,"nome":"Accelgor","tipos":["Inseto"],"altura":0.8,"peso":25.3,"genero":"50_50","habitats":["floresta"],"catchRate":35,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":4,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":15}},

    {"dexNumber":618,"nome":"Stunfisk","tipos":["Terra","Elétrico"],"altura":0.7,"peso":11.0,"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":7,"defesa":8,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":3}},

    {"dexNumber":619,"nome":"Mienfoo","tipos":["Lutador"],"altura":0.9,"peso":20.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":35,"baseExp":10,"evolucao":620,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":620,"nome":"Mienshao","tipos":["Lutador"],"altura":1.4,"peso":35.5,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":30,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":11}},

    {"dexNumber":621,"nome":"Druddigon","tipos":["Dragão"],"altura":1.6,"peso":139.0,"genero":"50_50","habitats":["caverna","ruina"],"catchRate":35,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":9,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":5}},

    {"dexNumber":622,"nome":"Golett","tipos":["Terra","Fantasma"],"altura":1.0,"peso":92.0,"genero":"assexuado","habitats":["deserto","montanha","ruina"],"catchRate":35,"baseExp":20,"evolucao":623,"evolucaoNivel":43,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":623,"nome":"Golurk","tipos":["Terra","Fantasma"],"altura":2.8,"peso":330.0,"genero":"assexuado","habitats":["deserto","montanha","ruina"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":6}},

    {"dexNumber":624,"nome":"Pawniard","tipos":["Noturno","Aço"],"altura":0.5,"peso":10.2,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":15,"evolucao":625,"evolucaoNivel":52,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":9,"defesa":7,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":625,"nome":"Bisharp","tipos":["Noturno","Aço"],"altura":1.6,"peso":70.4,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":25,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":7}},

    {"dexNumber":626,"nome":"Bouffalant","tipos":["Normal"],"altura":1.6,"peso":94.5,"genero":"50_50","habitats":["pradaria"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":10,"ataqueEspecial":4,"defesaEspecial":10,"velocidade":6}},

    {"dexNumber":627,"nome":"Rufflet","tipos":["Normal","Voador"],"altura":0.5,"peso":10.5,"genero":"100_0","habitats":["caverna","floresta","montanha"],"catchRate":35,"baseExp":10,"evolucao":628,"evolucaoNivel":54,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":628,"nome":"Braviary","tipos":["Normal","Voador"],"altura":1.5,"peso":41.0,"genero":"100_0","habitats":["floresta","montanha"],"catchRate":25,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

    {"dexNumber":629,"nome":"Vullaby","tipos":["Noturno","Voador"],"altura":0.5,"peso":9.0,"genero":"0_100","habitats":["caverna","deserto","montanha"],"catchRate":35,"baseExp":10,"evolucao":630,"evolucaoNivel":54,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":8,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":6}},
    {"dexNumber":630,"nome":"Mandibuzz","tipos":["Noturno","Voador"],"altura":1.2,"peso":39.5,"genero":"0_100","habitats":["deserto","montanha"],"catchRate":35,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":7,"defesa":11,"ataqueEspecial":6,"defesaEspecial":10,"velocidade":8}},

    {"dexNumber":631,"nome":"Heatmor","tipos":["Fogo"],"altura":1.4,"peso":58.0,"genero":"50_50","habitats":["caverna","deserto","montanha"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":7}},

    {"dexNumber":632,"nome":"Durant","tipos":["Inseto","Aço"],"altura":0.3,"peso":33.0,"genero":"50_50","habitats":["caverna","deserto","montanha"],"catchRate":35,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":11,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":11}},

    {"dexNumber":633,"nome":"Deino","tipos":["Noturno","Dragão"],"altura":0.8,"peso":17.3,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":15,"evolucao":634,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":634,"nome":"Zweilous","tipos":["Noturno","Dragão"],"altura":1.4,"peso":50.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":25,"baseExp":30,"evolucao":635,"evolucaoNivel":64,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":6}},
    {"dexNumber":635,"nome":"Hydreigon","tipos":["Noturno","Dragão"],"altura":1.8,"peso":160.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":15,"baseExp":55,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":10}},
        
    // Família Larvesta
    {"dexNumber":636,"nome":"Larvesta","tipos":["Inseto","Fogo"],"altura":1.1,"peso":28.8,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":35,"baseExp":15,"evolucao":637,"evolucaoNivel":59,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":637,"nome":"Volcarona","tipos":["Inseto","Fogo"],"altura":1.6,"peso":46.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":7,"ataqueEspecial":14,"defesaEspecial":11,"velocidade":10}},

    // Lendários - Espadas da Justiça
    {"dexNumber":638,"nome":"Cobalion","tipos":["Aço","Lutador"],"altura":2.1,"peso":250.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":13,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":11}},
    {"dexNumber":639,"nome":"Terrakion","tipos":["Pedra","Lutador"],"altura":1.9,"peso":260.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":9,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":11}},
    {"dexNumber":640,"nome":"Virizion","tipos":["Planta","Lutador"],"altura":2.0,"peso":200.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":7,"ataqueEspecial":9,"defesaEspecial":13,"velocidade":11}},

    // Lendários - Forças da Natureza
    {"dexNumber":641,"nome":"Tornadus","tipos":["Voador"],"altura":1.5,"peso":63.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":7,"ataqueEspecial":13,"defesaEspecial":8,"velocidade":11}},
    {"dexNumber":641,"nome":"Tornadus Totêmico","tipos":["Voador"],"altura":1.4,"peso":63.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":8,"ataqueEspecial":14,"defesaEspecial":9,"velocidade":11}},
    {"dexNumber":642,"nome":"Thundurus","tipos":["Elétrico","Voador"],"altura":1.5,"peso":61.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":7,"ataqueEspecial":13,"defesaEspecial":8,"velocidade":11}},
    {"dexNumber":642,"nome":"Thundurus Totêmico","tipos":["Elétrico","Voador"],"altura":3.0,"peso":61.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":8,"ataqueEspecial":14,"defesaEspecial":9,"velocidade":11}},
    {"dexNumber":643,"nome":"Reshiram","tipos":["Dragão","Fogo"],"altura":3.2,"peso":330.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":10,"ataqueEspecial":15,"defesaEspecial":12,"velocidade":9}},
    {"dexNumber":644,"nome":"Zekrom","tipos":["Dragão","Elétrico"],"altura":2.9,"peso":345.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":15,"defesa":12,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":9}},
    {"dexNumber":645,"nome":"Landorus","tipos":["Terra","Voador"],"altura":1.5,"peso":68.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":9,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":10}},
    {"dexNumber":645,"nome":"Landorus Totêmico","tipos":["Terra","Voador"],"altura":1.3,"peso":68.0,"genero":"100_0","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":14,"defesa":9,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":10}},
    {"dexNumber":646,"nome":"Kyurem","tipos":["Dragão","Gelo"],"altura":3.0,"peso":325.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":13,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":10}},

    // Lendários - Keldeo
    {"dexNumber":647,"nome":"Keldeo","tipos":["Água","Lutador"],"altura":1.4,"peso":48.5,"genero":"assexuado","habitats":["caverna","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":11}},
    {"dexNumber":647,"nome":"Keldeo Resoluto","tipos":["Água","Lutador"],"altura":1.4,"peso":48.5,"genero":"assexuado","habitats":["caverna","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":11}},

    // Lendários - Meloetta
    {"dexNumber":648,"nome":"Meloetta","tipos":["Normal","Psíquico"],"altura":0.6,"peso":6.5,"genero":"assexuado","habitats":["floresta","selva"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":8,"ataqueEspecial":13,"defesaEspecial":13,"velocidade":9}},
    {"dexNumber":648,"nome":"Meloetta Dança","tipos":["Normal","Lutador"],"altura":0.6,"peso":6.5,"genero":"assexuado","habitats":["floresta","selva"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":9,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":13}},

    // Lendários - Genesect
    {"dexNumber":649,"nome":"Genesect","tipos":["Inseto","Aço"],"altura":1.5,"peso":82.5,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":649,"nome":"Genesect Disco Água","tipos":["Inseto","Aço"],"altura":1.5,"peso":82.5,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":649,"nome":"Genesect Disco Raio","tipos":["Inseto","Aço"],"altura":1.5,"peso":82.5,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":649,"nome":"Genesect Disco Fogo","tipos":["Inseto","Aço"],"altura":1.5,"peso":82.5,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":649,"nome":"Genesect Disco Gelo","tipos":["Inseto","Aço"],"altura":1.5,"peso":82.5,"genero":"assexuado","habitats":["caverna","cidade","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":10}},
 
//KalosDex 650 - 721

      // Família Chespin
    {"dexNumber":650,"nome":"Chespin","tipos":["Planta"],"altura":0.7,"peso":29.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":15,"baseExp":15,"evolucao":651,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":7,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":651,"nome":"Quilladin","tipos":["Planta"],"altura":0.7,"peso":29.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":652,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":10,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":652,"nome":"Chesnaught","tipos":["Planta", "Lutador"],"altura":1.6,"peso":90.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":12,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":6}},

    // Família Fennekin
    {"dexNumber":653,"nome":"Fennekin","tipos":["Fogo"],"altura":0.4,"peso":9.4,"genero":"87_12","habitats":["floresta","montanha","pradaria"],"catchRate":15,"baseExp":15,"evolucao":654,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":654,"nome":"Braixen","tipos":["Fogo"],"altura":1.0,"peso":14.5,"genero":"87_12","habitats":["floresta","montanha","pradaria"],"catchRate":10,"baseExp":30,"evolucao":655,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":7}},
    {"dexNumber":655,"nome":"Delphox","tipos":["Fogo", "Psíquico"],"altura":1.5,"peso":39.0,"genero":"87_12","habitats":["floresta","montanha","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":10}},

    // Família Froakie
    {"dexNumber":656,"nome":"Froakie","tipos":["Água"],"altura":0.3,"peso":7.0,"genero":"87_12","habitats":["agua_doce","pantano","selva"],"catchRate":15,"baseExp":15,"evolucao":657,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":657,"nome":"Frogadier","tipos":["Água"],"altura":0.6,"peso":10.9,"genero":"87_12","habitats":["agua_doce","pantano","selva"],"catchRate":10,"baseExp":30,"evolucao":658,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":10}},
    {"dexNumber":658,"nome":"Greninja","tipos":["Água", "Noturno"],"altura":1.5,"peso":40.0,"genero":"87_12","habitats":["agua_doce","pantano","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":12}},

    // Família Bunnelby
    {"dexNumber":659,"nome":"Bunnelby","tipos":["Normal"],"altura":0.4,"peso":9.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":35,"baseExp":10,"evolucao":660,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":660,"nome":"Diggersby","tipos":["Normal", "Terra"],"altura":1.0,"peso":42.4,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":8,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":8}},

    // Família Fletchling
    {"dexNumber":661,"nome":"Fletchling","tipos":["Normal", "Voador"],"altura":0.3,"peso":1.7,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":35,"baseExp":15,"evolucao":662,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":662,"nome":"Fletchinder","tipos":["Fogo", "Voador"],"altura":0.7,"peso":16.0,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":25,"baseExp":25,"evolucao":663,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":8}},
    {"dexNumber":663,"nome":"Talonflame","tipos":["Fogo", "Voador"],"altura":1.2,"peso":24.5,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":13}},

    // Família Scatterbug
    {"dexNumber":664,"nome":"Scatterbug","tipos":["Inseto"],"altura":0.3,"peso":2.5,"genero":"50_50","habitats":["floresta"],"catchRate":35,"baseExp":5,"evolucao":665,"evolucaoNivel":9,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
    {"dexNumber":665,"nome":"Spewpa","tipos":["Inseto"],"altura":0.3,"peso":8.4,"genero":"50_50","habitats":["floresta"],"catchRate":30,"baseExp":10,"evolucao":666,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":2,"defesa":6,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
    {"dexNumber":666,"nome":"Vivillon","tipos":["Inseto", "Voador"],"altura":1.2,"peso":17.0,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":5,"defesa":5,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":9}},

    // Família Litleo
    {"dexNumber":667,"nome":"Litleo","tipos":["Fogo", "Normal"],"altura":0.6,"peso":13.5,"genero":"50_50","habitats":["montanha","pradaria"],"catchRate":25,"baseExp":10,"evolucao":668,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":6,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":7}},
    {"dexNumber":668,"nome":"Pyroar","tipos":["Fogo", "Normal"],"altura":1.5,"peso":81.5,"genero":"50_50","habitats":["montanha","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":11}},

    // Família Flabébé
    {"dexNumber":669,"nome":"Flabébé","tipos":["Fada"],"altura":0.1,"peso":0.1,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":10,"evolucao":670,"evolucaoNivel":19,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":4}},
    {"dexNumber":670,"nome":"Floette","tipos":["Fada"],"altura":0.2,"peso":0.9,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":25,"evolucao":671,"evolucaoNivel":null,"evolucaoItem":"shiny_stone","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":5}},
    {"dexNumber":671,"nome":"Florges","tipos":["Fada"],"altura":1.1,"peso":10.0,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":11,"defesaEspecial":15,"velocidade":8}},

    // Família Skiddo
    {"dexNumber":672,"nome":"Skiddo","tipos":["Planta"],"altura":0.9,"peso":31.0,"genero":"50_50","habitats":["montanha","pradaria"],"catchRate":20,"baseExp":20,"evolucao":673,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
    {"dexNumber":673,"nome":"Gogoat","tipos":["Planta"],"altura":1.7,"peso":91.0,"genero":"50_50","habitats":["montanha","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":7}},

    // Família Pancham
    {"dexNumber":674,"nome":"Pancham","tipos":["Lutador"],"altura":0.6,"peso":8.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":10,"evolucao":675,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":675,"nome":"Pangoro","tipos":["Lutador", "Noturno"],"altura":2.1,"peso":136.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":6}},

    // Família Furfrou
    {"dexNumber":676,"nome":"Furfrou","tipos":["Normal"],"altura":1.2,"peso":28.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":6,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":10}},

    // Família Espurr
    {"dexNumber":677,"nome":"Espurr","tipos":["Psíquico"],"altura":0.3,"peso":3.5,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":30,"baseExp":10,"evolucao":678,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":7}},
    {"dexNumber":678,"nome":"Meowstic","tipos":["Psíquico"],"altura":0.6,"peso":8.5,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":10}},

    // Família Honedge
    {"dexNumber":679,"nome":"Honedge","tipos":["Aço", "Fantasma"],"altura":0.8,"peso":2.0,"genero":"50_50","habitats":["caverna","montanha","pradaria","ruina"],"catchRate":25,"baseExp":15,"evolucao":680,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":10,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
    {"dexNumber":680,"nome":"Doublade","tipos":["Aço", "Fantasma"],"altura":0.8,"peso":4.5,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":10,"baseExp":30,"evolucao":681,"evolucaoNivel":null,"evolucaoItem":"dusk_stone","statusBasais":{"saude":6,"ataque":11,"defesa":15,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":681,"nome":"Aegislash","tipos":["Aço", "Fantasma"],"altura":1.7,"peso":53.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":15,"ataqueEspecial":5,"defesaEspecial":15,"velocidade":6}},

    // Família Spritzee
    {"dexNumber":682,"nome":"Spritzee","tipos":["Fada"],"altura":0.2,"peso":0.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":683,"evolucaoNivel":null,"evolucaoItem":"sachet","statusBasais":{"saude":8,"ataque":5,"defesa":6,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":2}},
    {"dexNumber":683,"nome":"Aromatisse","tipos":["Fada"],"altura":0.8,"peso":15.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":3}},

    // Família Swirlix
    {"dexNumber":684,"nome":"Swirlix","tipos":["Fada"],"altura":0.4,"peso":3.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":685,"evolucaoNivel":null,"evolucaoItem":"whipped_dream","statusBasais":{"saude":6,"ataque":5,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":685,"nome":"Slurpuff","tipos":["Fada"],"altura":0.8,"peso":5.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":9,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":7}},

    // Família Inkay
    {"dexNumber":686,"nome":"Inkay","tipos":["Noturno", "Psíquico"],"altura":0.4,"peso":3.5,"genero":"50_50","habitats":["oceano","praia"],"catchRate":15,"baseExp":15,"evolucao":687,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":687,"nome":"Malamar","tipos":["Noturno", "Psíquico"],"altura":1.5,"peso":47.0,"genero":"50_50","habitats":["oceano","praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":9,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":7}},

    // Família Binacle
    {"dexNumber":688,"nome":"Binacle","tipos":["Pedra", "Água"],"altura":0.5,"peso":31.0,"genero":"50_50","habitats":["praia"],"catchRate":20,"baseExp":20,"evolucao":689,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":7,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":689,"nome":"Barbaracle","tipos":["Pedra", "Água"],"altura":1.3,"peso":96.0,"genero":"50_50","habitats":["praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":12,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":7}},

    // Família Skrelp
    {"dexNumber":690,"nome":"Skrelp","tipos":["Veneno", "Água"],"altura":0.5,"peso":7.3,"genero":"50_50","habitats":["oceano"],"catchRate":20,"baseExp":15,"evolucao":691,"evolucaoNivel":48,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":3}},
    {"dexNumber":691,"nome":"Dragalge","tipos":["Veneno", "Dragão"],"altura":1.8,"peso":81.5,"genero":"50_50","habitats":["oceano"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":9,"ataqueEspecial":10,"defesaEspecial":12,"velocidade":4}},

    // Família Clauncher
    {"dexNumber":692,"nome":"Clauncher","tipos":["Água"],"altura":0.5,"peso":8.3,"genero":"50_50","habitats":["oceano"],"catchRate":30,"baseExp":10,"evolucao":693,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":693,"nome":"Clawitzer","tipos":["Água"],"altura":1.3,"peso":35.3,"genero":"50_50","habitats":["oceano","praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":9,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":6}},

    // Família Helioptile
    {"dexNumber":694,"nome":"Helioptile","tipos":["Elétrico", "Normal"],"altura":0.5,"peso":6.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":25,"baseExp":10,"evolucao":695,"evolucaoNivel":null,"evolucaoItem":"sun_stone","statusBasais":{"saude":4,"ataque":4,"defesa":3,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":695,"nome":"Heliolisk","tipos":["Elétrico", "Normal"],"altura":1.0,"peso":21.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":11}},

    // Família Tyrunt
    {"dexNumber":696,"nome":"Tyrunt","tipos":["Pedra", "Dragão"],"altura":0.8,"peso":26.0,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":15,"baseExp":20,"evolucao":697,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":8,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":697,"nome":"Tyrantrum","tipos":["Pedra", "Dragão"],"altura":2.5,"peso":270.0,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":12,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":7}},

    // Família Amaura
    {"dexNumber":698,"nome":"Amaura","tipos":["Pedra", "Gelo"],"altura":1.3,"peso":25.2,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":15,"baseExp":20,"evolucao":699,"evolucaoNivel":39,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":6,"defesa":5,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":699,"nome":"Aurorus","tipos":["Pedra", "Gelo"],"altura":2.7,"peso":225.0,"genero":"87_12","habitats":["montanha","ruina"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":8,"defesa":7,"ataqueEspecial":10,"defesaEspecial":9,"velocidade":6}},

    // Família Sylveon
    {"dexNumber":700,"nome":"Sylveon","tipos":["Fada"],"altura":1.0,"peso":23.5,"genero":"87_12","habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":7,"ataqueEspecial":11,"defesaEspecial":13,"velocidade":6}},

    // Família Hawlucha
    {"dexNumber":701,"nome":"Hawlucha","tipos":["Lutador", "Voador"],"altura":0.8,"peso":21.5,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":15,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":8,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":12}},

    // Família Dedenne
    {"dexNumber":702,"nome":"Dedenne","tipos":["Elétrico", "Fada"],"altura":0.4,"peso":2.2,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":30,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":10}},

    // Família Carbink
    {"dexNumber":703,"nome":"Carbink","tipos":["Pedra", "Fada"],"altura":0.3,"peso":5.7,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":15,"ataqueEspecial":5,"defesaEspecial":15,"velocidade":5}},
    
    // Família Goomy
    {"dexNumber":704,"nome":"Goomy","tipos":["Dragão"],"altura":0.3,"peso":2.8,"genero":"50_50","habitats":["pantano"],"catchRate":15,"baseExp":15,"evolucao":705,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":4}},
    {"dexNumber":705,"nome":"Sliggoo","tipos":["Dragão"],"altura":0.8,"peso":17.5,"genero":"50_50","habitats":["pantano"],"catchRate":5,"baseExp":30,"evolucao":706,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":5,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":6}},
    {"dexNumber":706,"nome":"Goodra","tipos":["Dragão"],"altura":2.0,"peso":150.0,"genero":"50_50","habitats":["pantano"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":7,"ataqueEspecial":11,"defesaEspecial":15,"velocidade":8}},

    // Família Klefki
    {"dexNumber":707,"nome":"Klefki","tipos":["Metálico","Fada"],"altura":0.2,"peso":3.0,"genero":"50_50","habitats":["cidade","ruina"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":9,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":8}},

    // Família Phantump
    {"dexNumber":708,"nome":"Phantump","tipos":["Fantasma","Planta"],"altura":0.4,"peso":7.0,"genero":"50_50","habitats":["floresta"],"catchRate":25,"baseExp":15,"evolucao":709,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":4,"ataque":7,"defesa":5,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":4}},
    {"dexNumber":709,"nome":"Trevenant","tipos":["Fantasma","Planta"],"altura":1.5,"peso":71.0,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":8,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":6}},

    // Família Pumpkaboo
    {"dexNumber":710,"nome":"Pumpkaboo","tipos":["Fantasma","Planta"],"altura":0.8,"peso":15.0,"genero":"50_50","habitats":["floresta"],"catchRate":25,"baseExp":15,"evolucao":711,"evolucaoNivel":null,"evolucaoItem":"trade","statusBasais":{"saude":5,"ataque":7,"defesa":7,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":711,"nome":"Gourgeist","tipos":["Fantasma","Planta"],"altura":1.7,"peso":39.0,"genero":"50_50","habitats":["floresta"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":12,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":7}},

    // Família Bergmite
    {"dexNumber":712,"nome":"Bergmite","tipos":["Gelo"],"altura":1.0,"peso":99.5,"genero":"50_50","habitats":["artico","taiga","tundra"],"catchRate":30,"baseExp":10,"evolucao":713,"evolucaoNivel":37,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":9,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
    {"dexNumber":713,"nome":"Avalugg","tipos":["Gelo"],"altura":2.0,"peso":505.0,"genero":"50_50","habitats":["artico","taiga","tundra"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":18,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},

    // Família Noibat
    {"dexNumber":714,"nome":"Noibat","tipos":["Voador","Dragão"],"altura":0.5,"peso":8.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":20,"baseExp":20,"evolucao":715,"evolucaoNivel":48,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":715,"nome":"Noivern","tipos":["Voador","Dragão"],"altura":1.5,"peso":85.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":12}},

    // Lendários
    {"dexNumber":716,"nome":"Xerneas","tipos":["Fada"],"altura":3.0,"peso":215.0,"genero":"assexuado","habitats":["floresta"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":13,"defesa":10,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":717,"nome":"Yveltal","tipos":["Noturno","Voador"],"altura":5.8,"peso":203.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":13,"defesa":10,"ataqueEspecial":13,"defesaEspecial":10,"velocidade":10}},
    
    // Formas Zygarde    
    {"dexNumber":10118,"nome":"Zygarde 10%","tipos":["Dragão", "Terra"],"altura":1.2,"peso":33.5,"genero":"assexuado","habitats":["montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":13}},
    {"dexNumber":718,"nome":"Zygarde 50%","tipos":["Dragão", "Terra"],"altura":4.5,"peso":610.0,"genero":"assexuado","habitats":["montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":10,"defesa":12,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":10120,"nome":"Zygarde Completo","tipos":["Dragão", "Terra"],"altura":4.2,"peso":610.0,"genero":"assexuado","habitats":["montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":11,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":9}},

    // Lendários II
    {"dexNumber":719,"nome":"Diancie","tipos":["Pedra","Fada"],"altura":1.1,"peso":27.8,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":10,"defesa":15,"ataqueEspecial":10,"defesaEspecial":15,"velocidade":5}},
    {"dexNumber":720,"nome":"Hoopa","tipos":["Psíquico", "Fantasma"],"altura":0.5,"peso":9.0,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":6,"ataqueEspecial":14,"defesaEspecial":10,"velocidade":7}},
    {"dexNumber":10086,"nome":"Hoopa Desconfinado","tipos":["Psíquico", "Noturno"],"altura":6.5,"peso":490.0,"genero":"assexuado","habitats":["caverna","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":16,"defesa":6,"ataqueEspecial":17,"defesaEspecial":13,"velocidade":8}}, 
    {"dexNumber":721,"nome":"Volcanion","tipos":["Fogo","Água"],"altura":1.7,"peso":195.0,"genero":"assexuado","habitats":["caverna","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":12,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":7}},

    //AlolaDex 722 - 809

    // Família Rowlet
    {"dexNumber":722,"nome":"Rowlet","tipos":["Planta","Voador"],"altura":0.3,"peso":1.5,"genero":"87_12","habitats":["floresta","selva"],"catchRate":20,"baseExp":15,"evolucao":723,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":723,"nome":"Dartrix","tipos":["Planta","Voador"],"altura":0.7,"peso":16.0,"genero":"87_12","habitats":["floresta","selva"],"catchRate":10,"baseExp":30,"evolucao":724,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},
    {"dexNumber":724,"nome":"Decidueye","tipos":["Planta","Fantasma"],"altura":1.6,"peso":36.6,"genero":"87_12","habitats":["floresta","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":8,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":7}},

    // Família Litten
    {"dexNumber":725,"nome":"Litten","tipos":["Fogo"],"altura":0.4,"peso":4.3,"genero":"87_12","habitats":["cidade","pradaria"],"catchRate":20,"baseExp":15,"evolucao":726,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":7}},
    {"dexNumber":726,"nome":"Torracat","tipos":["Fogo"],"altura":0.7,"peso":25.0,"genero":"87_12","habitats":["cidade","pradaria"],"catchRate":10,"baseExp":30,"evolucao":727,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":5,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":9}},
    {"dexNumber":727,"nome":"Incineroar","tipos":["Fogo","Noturno"],"altura":1.8,"peso":83.0,"genero":"87_12","habitats":["cidade","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":9,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":6}},

    // Família Popplio
    {"dexNumber":728,"nome":"Popplio","tipos":["Água"],"altura":0.4,"peso":7.5,"genero":"87_12","habitats":["oceano","praia"],"catchRate":20,"baseExp":15,"evolucao":729,"evolucaoNivel":17,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":4}},
    {"dexNumber":729,"nome":"Brionne","tipos":["Água"],"altura":0.6,"peso":17.5,"genero":"87_12","habitats":["oceano","praia"],"catchRate":10,"baseExp":30,"evolucao":730,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":5}},
    {"dexNumber":730,"nome":"Primarina","tipos":["Água","Fada"],"altura":1.8,"peso":44.0,"genero":"87_12","habitats":["oceano","praia"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":13,"defesaEspecial":12,"velocidade":6}},

    // Família Pikipek
    {"dexNumber":731,"nome":"Pikipek","tipos":["Normal","Voador"],"altura":0.3,"peso":1.2,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":15,"evolucao":732,"evolucaoNivel":14,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":8,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":7}},
    {"dexNumber":732,"nome":"Trumbeak","tipos":["Normal","Voador"],"altura":0.6,"peso":14.8,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":20,"baseExp":30,"evolucao":733,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":8}},
    {"dexNumber":733,"nome":"Toucannon","tipos":["Normal","Voador"],"altura":1.1,"peso":26.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":6}},

    // Família Yungoos
    {"dexNumber":734,"nome":"Yungoos","tipos":["Normal"],"altura":0.4,"peso":6.0,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":40,"baseExp":10,"evolucao":735,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":3}},
    {"dexNumber":735,"nome":"Gumshoos","tipos":["Normal"],"altura":0.7,"peso":14.2,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":20,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":5}},

    // Família Grubbin
    {"dexNumber":736,"nome":"Grubbin","tipos":["Inseto"],"altura":0.4,"peso":4.4,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":40,"baseExp":10,"evolucao":737,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":737,"nome":"Charjabug","tipos":["Inseto","Elétrico"],"altura":0.5,"peso":10.5,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":20,"baseExp":15,"evolucao":738,"evolucaoNivel":null,"evolucaoItem":"thunder_stone","statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},
    {"dexNumber":738,"nome":"Vikavolt","tipos":["Inseto","Elétrico"],"altura":1.5,"peso":45.0,"genero":"50_50","habitats":["floresta","montanha","pradaria"],"catchRate":10,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":9,"ataqueEspecial":15,"defesaEspecial":8,"velocidade":4}},

    // Família Crabrawler
    {"dexNumber":739,"nome":"Crabrawler","tipos":["Lutador"],"altura":0.6,"peso":7.0,"genero":"50_50","habitats":["praia"],"catchRate":15,"baseExp":15,"evolucao":740,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":740,"nome":"Crabominable","tipos":["Lutador","Gelo"],"altura":1.7,"peso":180.0,"genero":"50_50","habitats":["montanha"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":8,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":4}},

    // Família Oricorio
    {"dexNumber":741,"nome":"Oricorio","tipos":["Fogo","Voador"],"altura":0.6,"peso":3.4,"genero":"25_75","habitats":["pradaria"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":9}},
    {"dexNumber":741,"nome":"Oricorio Pompa","tipos":["Elétrico","Voador"],"altura":0.6,"peso":3.4,"genero":"25_75","habitats":["pradaria"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":9}},
    {"dexNumber":741,"nome":"Oricorio Pa'u","tipos":["Psíquico","Voador"],"altura":0.6,"peso":3.4,"genero":"25_75","habitats":["floresta"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":9}},
    {"dexNumber":741,"nome":"Oricorio Sensu","tipos":["Fantasma","Voador"],"altura":0.6,"peso":3.4,"genero":"25_75","habitats":["floresta"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":9}},

    // Família Cutiefly
    {"dexNumber":742,"nome":"Cutiefly","tipos":["Inseto","Fada"],"altura":0.1,"peso":0.2,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":30,"baseExp":10,"evolucao":743,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":8}},
    {"dexNumber":743,"nome":"Ribombee","tipos":["Inseto","Fada"],"altura":0.2,"peso":0.5,"genero":"50_50","habitats":["floresta","pradaria","selva"],"catchRate":10,"baseExp":35,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":12}},

    // Família Rockruff
    {"dexNumber":744,"nome":"Rockruff","tipos":["Pedra"],"altura":0.5,"peso":9.2,"genero":"50_50","habitats":["caverna","floresta","montanha","pradaria"],"catchRate":20,"baseExp":15,"evolucao":745,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":6}},
    {"dexNumber":745,"nome":"Lycanroc (Diurna)","tipos":["Pedra"],"altura":0.8,"peso":25.0,"genero":"50_50","habitats":["caverna","floresta","montanha","pradaria"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":11}},
    {"dexNumber":745,"nome":"Lycanroc (Crepuscular)","tipos":["Pedra"],"altura":0.8,"peso":25.0,"genero":"50_50","habitats":["caverna","floresta","montanha","pradaria"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":6,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":11}},
    {"dexNumber":745,"nome":"Lycanroc (Noturna)","tipos":["Pedra"],"altura":0.8,"peso":25.0,"genero":"50_50","habitats":["caverna","floresta","montanha","pradaria"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

    // Família Wishiwashi
    {"dexNumber":746,"nome":"Wishiwashi (Solitário)","tipos":["Água"],"altura":0.2,"peso":0.3,"genero":"50_50","habitats":["oceano"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":2,"defesa":2,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
    {"dexNumber":746,"nome":"Wishiwashi (Cardume)","tipos":["Água"],"altura":6.0,"peso":300.0,"genero":"50_50","habitats":["oceano"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":14,"defesa":14,"ataqueEspecial":14,"defesaEspecial":14,"velocidade":3}},

    // Família Mareanie
    {"dexNumber":747,"nome":"Mareanie","tipos":["Água","Veneno"],"altura":0.4,"peso":8.0,"genero":"50_50","habitats":["artico","oceano","praia"],"catchRate":20,"baseExp":15,"evolucao":748,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":748,"nome":"Toxapex","tipos":["Água","Veneno"],"altura":0.7,"peso":14.5,"genero":"50_50","habitats":["artico","oceano","praia"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":15,"ataqueEspecial":5,"defesaEspecial":14,"velocidade":4}},

    // Família Mudbray
    {"dexNumber":749,"nome":"Mudbray","tipos":["Terra"],"altura":1.0,"peso":110.0,"genero":"50_50","habitats":["pradaria"],"catchRate":20,"baseExp":15,"evolucao":750,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":5}},
    {"dexNumber":750,"nome":"Mudsdale","tipos":["Terra"],"altura":2.5,"peso":920.0,"genero":"50_50","habitats":["pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":4}},

    // Família Dewpider
    {"dexNumber":751,"nome":"Dewpider","tipos":["Água","Inseto"],"altura":0.3,"peso":4.0,"genero":"50_50","habitats":["agua_doce"],"catchRate":15,"baseExp":20,"evolucao":752,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":3}},
    {"dexNumber":752,"nome":"Araquanid","tipos":["Água","Inseto"],"altura":1.8,"peso":82.0,"genero":"50_50","habitats":["agua_doce"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":9,"ataqueEspecial":5,"defesaEspecial":13,"velocidade":4}},

    // Família Fomantis
    {"dexNumber":753,"nome":"Fomantis","tipos":["Planta"],"altura":0.3,"peso":1.5,"genero":"50_50","habitats":["floresta","selva"],"catchRate":25,"baseExp":10,"evolucao":754,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":4}},
    {"dexNumber":754,"nome":"Lurantis","tipos":["Planta"],"altura":0.9,"peso":18.5,"genero":"50_50","habitats":["floresta","selva"],"catchRate":15,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":9,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":5}},
    
    // Família Morelull
    {"dexNumber":755,"nome":"Morelull","tipos":["Planta","Fada"],"altura":0.2,"peso":1.5,"genero":"50_50","habitats":["floresta","selva"],"catchRate":20,"baseExp":15,"evolucao":756,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":6,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":2}},
    {"dexNumber":756,"nome":"Shiinotic","tipos":["Planta","Fada"],"altura":1.0,"peso":11.5,"genero":"50_50","habitats":["floresta","selva"],"catchRate":15,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":8,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":3}},

    // Família Salandit
    {"dexNumber":757,"nome":"Salandit","tipos":["Veneno","Fogo"],"altura":0.6,"peso":4.8,"genero":"87_12","habitats":["caverna","deserto","montanha"],"catchRate":20,"baseExp":15,"evolucao":758,"evolucaoNivel":33,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":4,"ataqueEspecial":7,"defesaEspecial":4,"velocidade":8}},
    {"dexNumber":758,"nome":"Salazzle","tipos":["Veneno","Fogo"],"altura":1.2,"peso":22.2,"genero":"0_100","habitats":["caverna","deserto","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":11,"defesaEspecial":6,"velocidade":12}},

    // Família Stufful
    {"dexNumber":759,"nome":"Stufful","tipos":["Normal","Lutador"],"altura":0.5,"peso":6.8,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":20,"baseExp":15,"evolucao":760,"evolucaoNivel":27,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":760,"nome":"Bewear","tipos":["Normal","Lutador"],"altura":2.1,"peso":135.0,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":13,"defesa":8,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},

    // Família Bounsweet
    {"dexNumber":761,"nome":"Bounsweet","tipos":["Planta"],"altura":0.3,"peso":3.2,"genero":"0_100","habitats":["floresta","pradaria","selva"],"catchRate":20,"baseExp":15,"evolucao":762,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
    {"dexNumber":762,"nome":"Steenee","tipos":["Planta"],"altura":0.7,"peso":8.2,"genero":"0_100","habitats":["floresta","pradaria","selva"],"catchRate":25,"baseExp":25,"evolucao":763,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
    {"dexNumber":763,"nome":"Tsareena","tipos":["Planta"],"altura":1.2,"peso":21.4,"genero":"0_100","habitats":["floresta","pradaria","selva"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":10,"ataqueEspecial":5,"defesaEspecial":10,"velocidade":7}},

    // Família Comfey
    {"dexNumber":764,"nome":"Comfey","tipos":["Fada"],"altura":0.7,"peso":0.3,"genero":"25_75","habitats":["floresta","pradaria","selva"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":9,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":10}},

    // Família Oranguru
    {"dexNumber":765,"nome":"Oranguru","tipos":["Normal","Psíquico"],"altura":1.5,"peso":76.0,"genero":"50_50","habitats":["floresta","selva"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":8,"ataqueEspecial":9,"defesaEspecial":11,"velocidade":6}},

    // Família Passimian
    {"dexNumber":766,"nome":"Passimian","tipos":["Lutador"],"altura":2.0,"peso":82.8,"genero":"50_50","habitats":["floresta","selva"],"catchRate":15,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":9,"ataqueEspecial":4,"defesaEspecial":6,"velocidade":8}},

    // Família Wimpod
    {"dexNumber":767,"nome":"Wimpod","tipos":["Inseto","Água"],"altura":0.5,"peso":12.0,"genero":"50_50","habitats":["oceano","praia"],"catchRate":40,"baseExp":5,"evolucao":768,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":4,"ataqueEspecial":2,"defesaEspecial":3,"velocidade":8}},
    {"dexNumber":768,"nome":"Golisopod","tipos":["Inseto","Água"],"altura":2.0,"peso":108.0,"genero":"50_50","habitats":["oceano","praia"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":14,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":4}},

    // Família Sandygast
    {"dexNumber":769,"nome":"Sandygast","tipos":["Fantasma","Terra"],"altura":0.5,"peso":70.0,"genero":"50_50","habitats":["praia"],"catchRate":20,"baseExp":15,"evolucao":770,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":2}},
    {"dexNumber":770,"nome":"Palossand","tipos":["Fantasma","Terra"],"altura":1.3,"peso":250.0,"genero":"50_50","habitats":["praia"],"catchRate":10,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":11,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":4}},

    // Família Pyukumuku
    {"dexNumber":771,"nome":"Pyukumuku","tipos":["Água"],"altura":0.3,"peso":1.2,"genero":"50_50","habitats":["oceano","praia"],"catchRate":20,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":13,"ataqueEspecial":3,"defesaEspecial":13,"velocidade":1}},

    // Família Type: Null
    {"dexNumber":772,"nome":"Type: Null","tipos":["Normal"],"altura":1.9,"peso":120.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":10,"baseExp":30,"evolucao":773,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":6}},
    {"dexNumber":773,"nome":"Silvally","tipos":["Normal"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Água","tipos":["Água"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Dragão","tipos":["Dragão"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Elétrico","tipos":["Elétrico"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Fada","tipos":["Fada"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Fantasma","tipos":["Fantasma"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Fogo","tipos":["Fogo"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Gelo","tipos":["Gelo"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Inseto","tipos":["Inseto"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Lutador","tipos":["Lutador"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Metálico","tipos":["Metálico"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Normal","tipos":["Normal"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Pedra","tipos":["Pedra"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Psíquico","tipos":["Psíquico"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Noturno","tipos":["Noturno"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Terra","tipos":["Terra"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Tóxico","tipos":["Veneno"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Voador","tipos":["Voador"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},
    {"dexNumber":773,"nome":"Silvally Planta","tipos":["Planta"],"altura":2.3,"peso":100.5,"genero":"assexuado","habitats":["caverna","cidade","floresta","montanha"],"catchRate":5,"baseExp":40,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":10,"defesaEspecial":10,"velocidade":10}},

    // Família Minior
    {"dexNumber":774,"nome":"Minior (Protegido)","tipos":["Pedra","Voador"],"altura":0.3,"peso":40.0,"genero":"assexuado","habitats":["caverna","montanha"],"catchRate":15,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":10,"ataqueEspecial":6,"defesaEspecial":10,"velocidade":6}},
    {"dexNumber":774,"nome":"Minior (Núcleo)","tipos":["Pedra","Voador"],"altura":0.3,"peso":40.0,"genero":"assexuado","habitats":["caverna","montanha"],"catchRate":15,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":12}},

    // Família Komala
    {"dexNumber":775,"nome":"Komala","tipos":["Normal"],"altura":0.4,"peso":19.9,"genero":"50_50","habitats":["floresta","selva"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":7,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":7}},

    // Família Turtonator
    {"dexNumber":776,"nome":"Turtonator","tipos":["Fogo","Dragão"],"altura":2.0,"peso":212.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":20,"baseExp":20,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":14,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":4}},

    // Família Togedemaru
    {"dexNumber":777,"nome":"Togedemaru","tipos":["Elétrico","Metálico"],"altura":0.3,"peso":3.3,"genero":"50_50","habitats":["cidade","floresta"],"catchRate":30,"baseExp":15,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":6,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":10}},

    // Família Mimikyu
    {"dexNumber":778,"nome":"Mimikyu","tipos":["Fantasma","Fada"],"altura":0.2,"peso":0.7,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":8,"ataqueEspecial":5,"defesaEspecial":11,"velocidade":10}},
    {"dexNumber":778,"nome":"Mimikyu Despedaçado","tipos":["Fantasma","Fada"],"altura":0.2,"peso":0.7,"genero":"50_50","habitats":["cidade","floresta","pradaria"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":8,"ataqueEspecial":5,"defesaEspecial":11,"velocidade":10}},

    // Família Bruxish
    {"dexNumber":779,"nome":"Bruxish","tipos":["Água","Psíquico"],"altura":0.9,"peso":19.0,"genero":"50_50","habitats":["oceano"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":9}},

    // Família Drampa
    {"dexNumber":780,"nome":"Drampa","tipos":["Normal","Dragão"],"altura":3.0,"peso":185.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":20,"baseExp":25,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":9,"ataqueEspecial":14,"defesaEspecial":9,"velocidade":4}},

    // Família Dhelmise
    {"dexNumber":781,"nome":"Dhelmise","tipos":["Fantasma","Planta"],"altura":3.9,"peso":210.0,"genero":"assexuado","habitats":["oceano"],"catchRate":10,"baseExp":30,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":10,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":4}},

    // Família Jangmo-O
    {"dexNumber":782,"nome":"Jangmo-O","tipos":["Dragão"],"altura":0.6,"peso":29.7,"genero":"50_50","habitats":["caverna","montanha","pradaria"],"catchRate":15,"baseExp":15,"evolucao":783,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":7,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
    {"dexNumber":783,"nome":"Hakamo-O","tipos":["Dragão","Lutador"],"altura":1.2,"peso":47.0,"genero":"50_50","habitats":["caverna","montanha","pradaria"],"catchRate":30,"baseExp":30,"evolucao":784,"evolucaoNivel":45,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":9,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":7}},
    {"dexNumber":784,"nome":"Kommo-O","tipos":["Dragão","Lutador"],"altura":1.6,"peso":78.2,"genero":"50_50","habitats":["caverna","montanha","pradaria"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":13,"ataqueEspecial":10,"defesaEspecial":11,"velocidade":9}},

    // Lendários e Ultra-Bestas
    {"dexNumber":785,"nome":"Tapu Koko","tipos":["Elétrico","Fada"],"altura":1.8,"peso":20.5,"genero":"assexuado","habitats":["floresta","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":9,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":13}},
    {"dexNumber":786,"nome":"Tapu Lele","tipos":["Psíquico","Fada"],"altura":1.2,"peso":18.5,"genero":"assexuado","habitats":["floresta","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":8,"ataqueEspecial":13,"defesaEspecial":12,"velocidade":10}},
    {"dexNumber":787,"nome":"Tapu Bulu","tipos":["Planta","Fada"],"altura":1.9,"peso":45.5,"genero":"assexuado","habitats":["floresta","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":12,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":8}},
    {"dexNumber":788,"nome":"Tapu Fini","tipos":["Água","Fada"],"altura":1.3,"peso":21.2,"genero":"assexuado","habitats":["floresta","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":12,"ataqueEspecial":10,"defesaEspecial":13,"velocidade":9}},
    {"dexNumber":789,"nome":"Cosmog","tipos":["Psíquico"],"altura":0.2,"peso":0.1,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":790,"evolucaoNivel":43,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":4}},
    {"dexNumber":790,"nome":"Cosmoem","tipos":["Psíquico"],"altura":0.1,"peso":999.9,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":791,"evolucaoNivel":53,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":13,"ataqueEspecial":3,"defesaEspecial":13,"velocidade":4}},
    {"dexNumber":791,"nome":"Solgaleo","tipos":["Psíquico","Metálico"],"altura":3.4,"peso":230.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":14,"defesa":11,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":10}},
    {"dexNumber":792,"nome":"Lunala","tipos":["Psíquico","Fantasma"],"altura":4.0,"peso":129.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":11,"defesa":9,"ataqueEspecial":14,"defesaEspecial":11,"velocidade":10}},
    {"dexNumber":793,"nome":"Nihilego","tipos":["Pedra","Veneno"],"altura":1.2,"peso":55.5,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":5,"defesa":5,"ataqueEspecial":13,"defesaEspecial":13,"velocidade":10}},
    {"dexNumber":794,"nome":"Buzzwole","tipos":["Inseto","Lutador"],"altura":2.4,"peso":333.6,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":14,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":8}},    {"dexNumber":795,"nome":"Pheromosa","altura":1.8,"peso":25.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":14,"defesa":4,"ataqueEspecial":14,"defesaEspecial":4,"velocidade":15}},
    {"dexNumber":796,"nome":"Xurkitree","tipos":["Elétrico"],"altura":3.8,"peso":100.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":7,"ataqueEspecial":17,"defesaEspecial":7,"velocidade":8}},
    {"dexNumber":797,"nome":"Celesteela","tipos":["Aço","Voador"],"altura":9.2,"peso":999.9,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":10,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":6}},
    {"dexNumber":798,"nome":"Kartana","tipos":["Planta","Aço"],"altura":0.3,"peso":0.1,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":18,"defesa":13,"ataqueEspecial":6,"defesaEspecial":3,"velocidade":11}},
    {"dexNumber":799,"nome":"Guzzlord","tipos":["Noturno","Dragão"],"altura":5.5,"peso":888.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":22,"ataque":10,"defesa":5,"ataqueEspecial":10,"defesaEspecial":5,"velocidade":4}},
    {"dexNumber":800,"nome":"Necrozma (Base)","tipos":["Psíquico"],"altura":2.4,"peso":230.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":10,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":8}},
    {"dexNumber":800,"nome":"Necrozma (Solar)","tipos":["Psíquico","Aço"],"altura":3.8,"peso":460.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":16,"defesa":13,"ataqueEspecial":11,"defesaEspecial":11,"velocidade":8}},
    {"dexNumber":800,"nome":"Necrozma (Lunar)","tipos":["Psíquico","Fantasma"],"altura":4.2,"peso":350.0,"genero":"assexuado","habitats":["montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":11,"defesa":11,"ataqueEspecial":16,"defesaEspecial":13,"velocidade":8}},
    {"dexNumber":800,"nome":"Necrozma (Ultra)","tipos":["Psíquico","Dragão"],"altura":7.5,"peso":230.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":17,"defesa":10,"ataqueEspecial":17,"defesaEspecial":10,"velocidade":13}},
    {"dexNumber":801,"nome":"Magearna","tipos":["Aço","Fada"],"altura":1.0,"peso":80.5,"genero":"assexuado","habitats":["cidade","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":12,"ataqueEspecial":13,"defesaEspecial":12,"velocidade":7}},
    {"dexNumber":802,"nome":"Marshadow","tipos":["Lutador","Fantasma"],"altura":0.7,"peso":22.2,"genero":"assexuado","habitats":["floresta"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":8,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":13}},
    {"dexNumber":803,"nome":"Poipole","tipos":["Veneno"],"altura":0.6,"peso":1.8,"genero":"assexuado","habitats":["extradimensional"],"catchRate":5,"baseExp":80,"evolucao":804,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":7}},
    {"dexNumber":804,"nome":"Naganadel","tipos":["Veneno","Dragão"],"altura":3.6,"peso":150.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":13,"defesaEspecial":7,"velocidade":12}},
    {"dexNumber":805,"nome":"Stakataka","tipos":["Pedra","Aço"],"altura":5.5,"peso":820.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":13,"defesa":21,"ataqueEspecial":5,"defesaEspecial":10,"velocidade":1}},
    {"dexNumber":806,"nome":"Blacephalon","tipos":["Fogo","Fantasma"],"altura":1.8,"peso":13.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":13,"defesa":5,"ataqueEspecial":15,"defesaEspecial":8,"velocidade":11}},
    {"dexNumber":807,"nome":"Zeraora","tipos":["Elétrico"],"altura":1.5,"peso":44.5,"genero":"assexuado","habitats":["cidade","floresta","montanha"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":14}},
    {"dexNumber":808,"nome":"Meltan","tipos":["Aço"],"altura":0.2,"peso":8.0,"genero":"assexuado","habitats":["cidade","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":809,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":7,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":3}},
    {"dexNumber":809,"nome":"Melmetal","tipos":["Aço"],"altura":2.5,"peso":800.0,"genero":"assexuado","habitats":["cidade","montanha","ruina"],"catchRate":0,"baseExp":100,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":14,"defesa":12,"ataqueEspecial":9,"defesaEspecial":9,"velocidade":4}},    
    
    // Formas de Alola - Pokémon da 1ª Geração

  {"dexNumber":10091,"nome":"Rattata de Alola","tipos":["Noturno","Normal"],"altura":0.3,"peso":3.8,"genero":"50_50","habitats":["cidade","pradaria"],"catchRate":40,"baseExp":51,"evolucao":20,"evolucaoNivel":20,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":3,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":7}},
  {"dexNumber":10092,"nome":"Raticate de Alola","tipos":["Noturno","Normal"],"altura":0.7,"peso":25.5,"genero":"50_50","habitats":["cidade"],"catchRate":20,"baseExp":145,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":8,"ataque":7,"defesa":6,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":8}},
  
  {"dexNumber":10100,"nome":"Raichu de Alola","tipos":["Elétrico","Psíquico"],"altura":0.7,"peso":21.0,"genero":"50_50","habitats":["praia"],"catchRate":5,"baseExp":218,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":6,"ataque":9,"defesa":6,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":11}},
  
  {"dexNumber":10101,"nome":"Sandshrew de Alola","tipos":["Gelo","Aço"],"altura":0.7,"peso":40.0,"genero":"50_50","habitats":["montanha","artico","taiga","tundras"],"catchRate":15,"baseExp":60,"evolucao":28,"evolucaoNivel":null,"evolucaoItem":"ice_stone","regiao":"alola","statusBasais":{"saude":5,"ataque":8,"defesa":9,"ataqueEspecial":2,"defesaEspecial":3,"velocidade":4}},
  {"dexNumber":10102,"nome":"Sandslash de Alola","tipos":["Gelo","Aço"],"altura":1.2,"peso":55.0,"genero":"50_50","habitats":["montanha","artico","taiga","tundras"],"catchRate":15,"baseExp":158,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":8,"ataque":10,"defesa":12,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":7}},
  
  {"dexNumber":10103,"nome":"Vulpix de Alola","tipos":["Gelo"],"altura":0.6,"peso":9.9,"genero":"25_75","habitats":["artico","taiga","tundras"],"catchRate":10,"baseExp":60,"evolucao":38,"evolucaoNivel":null,"evolucaoItem":"ice_stone","regiao":"alola","statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":7}},
  {"dexNumber":10104,"nome":"Ninetales de Alola","tipos":["Gelo","Fada"],"altura":1.1,"peso":19.9,"genero":"25_75","habitats":["ruinas","artico","taiga"],"catchRate":40,"baseExp":177,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":7,"ataque":7,"defesa":8,"ataqueEspecial":9,"defesaEspecial":10,"velocidade":11}},
  
  {"dexNumber":10105,"nome":"Diglett de Alola","tipos":["Terra","Aço"],"altura":0.2,"peso":1.0,"genero":"50_50","habitats":["caverna","montanha","pradarias"],"catchRate":30,"baseExp":53,"evolucao":51,"evolucaoNivel":26,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":1,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":9}},
  {"dexNumber":10106,"nome":"Dugtrio de Alola","tipos":["Terra","Aço"],"altura":0.7,"peso":66.6,"genero":"50_50","habitats":["caverna","montanha","pradarias"],"catchRate":10,"baseExp":149,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":4,"ataque":10,"defesa":6,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":11}},
  
  {"dexNumber":10107,"nome":"Meowth de Alola","tipos":["Noturno"],"altura":0.4,"peso":4.2,"genero":"50_50","habitats":["cidade"],"catchRate":10,"baseExp":58,"evolucao":53,"evolucaoNivel":28,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":9}},
  {"dexNumber":10108,"nome":"Persian de Alola","tipos":["Noturno"],"altura":1.1,"peso":33.0,"genero":"50_50","habitats":["cidade"],"catchRate":10,"baseExp":154,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":12}},
  
  {"dexNumber":10109,"nome":"Geodude de Alola","tipos":["Pedra","Elétrico"],"altura":0.4,"peso":20.3,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":35,"baseExp":60,"evolucao":75,"evolucaoNivel":25,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":4,"ataque":8,"defesa":10,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}},
  {"dexNumber":10110,"nome":"Graveler de Alola","tipos":["Pedra","Elétrico"],"altura":1.0,"peso":110.0,"genero":"50_50","habitats":["caverna","montanha"],"catchRate":20,"baseExp":137,"evolucao":76,"evolucaoNivel":null,"evolucaoItem":"trade","regiao":"alola","statusBasais":{"saude":6,"ataque":10,"defesa":12,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":10111,"nome":"Golem de Alola","tipos":["Pedra","Elétrico"],"altura":1.7,"peso":316.0,"genero":"50_50","habitats":["ruinas","caverna","montanha"],"catchRate":5,"baseExp":223,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":8,"ataque":12,"defesa":14,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":5}},
  
  {"dexNumber":10112,"nome":"Grimer de Alola","tipos":["Veneno","Noturno"],"altura":0.7,"peso":42.0,"genero":"50_50","habitats":["cidade"],"catchRate":35,"baseExp":65,"evolucao":89,"evolucaoNivel":38,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":8,"ataque":8,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":10113,"nome":"Muk de Alola","tipos":["Veneno","Noturno"],"altura":1.0,"peso":52.0,"genero":"50_50","habitats":["cidade"],"catchRate":10,"baseExp":175,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":11,"ataque":11,"defesa":8,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":5}},
  
  {"dexNumber":10114,"nome":"Exeggutor de Alola","tipos":["Planta","Dragão"],"altura":10.9,"peso":415.6,"genero":"50_50","habitats":["praia","selva"],"catchRate":10,"baseExp":186,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":10,"ataque":11,"defesa":9,"ataqueEspecial":14,"defesaEspecial":6,"velocidade":5}},
  
  {"dexNumber":10115,"nome":"Marowak de Alola","tipos":["Fogo","Fantasma"],"altura":1.0,"peso":34.0,"genero":"50_50","habitats":["ruinas","caverna","cidade","montanha"],"catchRate":15,"baseExp":149,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"regiao":"alola","statusBasais":{"saude":6,"ataque":8,"defesa":11,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":5}},

  //GalarDex 810 - 898

  // Família Grookey
  {"dexNumber":810,"nome":"Grookey","tipos":["Planta"],"altura":0.3,"peso":5.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":811,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":811,"nome":"Thwackey","tipos":["Planta"],"altura":0.7,"peso":14.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":812,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":812,"nome":"Rillaboom","tipos":["Planta"],"altura":2.1,"peso":90.0,"genero":"87_12","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":8}},
  
  // Família Scorbunny
  {"dexNumber":813,"nome":"Scorbunny","tipos":["Fogo"],"altura":0.3,"peso":4.5,"genero":"87_12","habitats":["pradaria","cidade"],"catchRate":45,"baseExp":50,"evolucao":814,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":814,"nome":"Raboot","tipos":["Fogo"],"altura":0.6,"peso":9.0,"genero":"87_12","habitats":["pradaria","cidade"],"catchRate":45,"baseExp":50,"evolucao":815,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":815,"nome":"Cinderace","tipos":["Fogo"],"altura":1.4,"peso":33.0,"genero":"87_12","habitats":["pradaria","cidade"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":12}},
  
  // Família Sobble
  {"dexNumber":816,"nome":"Sobble","tipos":["Água"],"altura":0.3,"peso":4.0,"genero":"87_12","habitats":["agua_doce","pradaria"],"catchRate":45,"baseExp":50,"evolucao":817,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":4,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":817,"nome":"Drizzile","tipos":["Água"],"altura":0.7,"peso":11.5,"genero":"87_12","habitats":["agua_doce","pradaria"],"catchRate":45,"baseExp":50,"evolucao":818,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":9}},
  {"dexNumber":818,"nome":"Inteleon","tipos":["Água"],"altura":1.9,"peso":45.2,"genero":"87_12","habitats":["agua_doce","pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":12}},
   
  // Família Skwovet
  {"dexNumber":819,"nome":"Skwovet","altura":0.3,"peso":2.5,"tipos":["Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":255,"baseExp":50,"evolucao":820,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":820,"nome":"Greedent","altura":0.6,"peso":6.0,"tipos":["Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":10,"defesa":8,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":4}},

  // Família Rookidee
  {"dexNumber":821,"nome":"Rookidee","altura":0.2,"peso":1.8,"tipos":["Voador"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":255,"baseExp":50,"evolucao":822,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":6}},
  {"dexNumber":822,"nome":"Corvisquire","altura":0.8,"peso":16.0,"tipos":["Voador"],"genero":"50_50","habitats":["floresta","montanha"],"catchRate":120,"baseExp":50,"evolucao":823,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":8}},
  {"dexNumber":823,"nome":"Corviknight","altura":2.2,"peso":75.0,"tipos":["Voador","Aço"],"genero":"50_50","habitats":["floresta","montanha","cidade"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":12,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":7}},

  // Família Blipbug
  {"dexNumber":824,"nome":"Blipbug","tipos":["Inseto"],"altura":0.4,"peso":8.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":255,"baseExp":50,"evolucao":820,"evolucaoNivel":10,"evolucaoItem":null,"statusBasais":{"saude":2,"ataque":3,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":825,"nome":"Dottler","tipos":["Inseto","Psíquico"],"altura":0.4,"peso":19.5,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":120,"baseExp":50,"evolucao":821,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":4,"defesa":8,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":3}},
  {"dexNumber":826,"nome":"Orbeetle","tipos":["Inseto","Psíquico"],"altura":0.4,"peso":40.8,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":11,"ataqueEspecial":8,"defesaEspecial":12,"velocidade":9}},
  
  // Família Nickit
  {"dexNumber":827,"nome":"Nickit","tipos":["Noturno"],"altura":0.6,"peso":8.9,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":255,"baseExp":50,"evolucao":823,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":828,"nome":"Thievul","tipos":["Noturno"],"altura":1.2,"peso":19.9,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":127,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":9}},

  // Família Gossifleur
  {"dexNumber":829,"nome":"Gossifleur","tipos":["Planta"],"altura":0.4,"peso":2.2,"genero":"50_50","habitats":["pradaria"],"catchRate":35,"baseExp":50,"evolucao":825,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":2}},
  {"dexNumber":830,"nome":"Eldegoss","tipos":["Planta"],"altura":0.5,"peso":2.5,"genero":"50_50","habitats":["pradaria"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":9,"ataqueEspecial":8,"defesaEspecial":12,"velocidade":6}},

  // Família Wooloo
  {"dexNumber":831,"nome":"Wooloo","tipos":["Normal"],"altura":0.6,"peso":6.0,"genero":"50_50","habitats":["pradaria"],"catchRate":255,"baseExp":50,"evolucao":827,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":5,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":832,"nome":"Dubwool","tipos":["Normal"],"altura":1.3,"peso":43.0,"genero":"50_50","habitats":["pradaria"],"catchRate":127,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":9,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":8}},

  // Família Chewtle
  {"dexNumber":833,"nome":"Chewtle","tipos":["Água"],"altura":0.3,"peso":8.5,"genero":"50_50","habitats":["agua_doce","pradaria"],"catchRate":255,"baseExp":50,"evolucao":829,"evolucaoNivel":22,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":834,"nome":"Drednaw","tipos":["Água","Pedra"],"altura":1.0,"peso":115.5,"genero":"50_50","habitats":["agua_doce","pradaria"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":9,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":7}},

  // Família Yamper
  {"dexNumber":835,"nome":"Yamper","tipos":["Elétrico"],"altura":0.3,"peso":13.5,"genero":"50_50","habitats":["pradaria"],"catchRate":255,"baseExp":50,"evolucao":831,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":6}},
  {"dexNumber":836,"nome":"Boltund","tipos":["Elétrico"],"altura":1.0,"peso":34.0,"genero":"50_50","habitats":["pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":6,"ataqueEspecial":8,"defesaEspecial":6,"velocidade":12}},

  // Família Rolycoly
  {"dexNumber":837,"nome":"Rolycoly","tipos":["Pedra"],"altura":0.3,"peso":12.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":255,"baseExp":50,"evolucao":833,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":4,"defesa":9,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":1}},
  {"dexNumber":838,"nome":"Carkol","tipos":["Pedra","Fogo"],"altura":1.1,"peso":78.0,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":120,"baseExp":50,"evolucao":834,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":6,"defesa":10,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":839,"nome":"Coalossal","tipos":["Pedra","Fogo"],"altura":2.8,"peso":310.5,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":12,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":3}},

  // Família Applin
  {"dexNumber":840,"nome":"Applin","tipos":["Planta","Dragão"],"altura":0.2,"peso":0.5,"genero":"50_50","habitats":["floresta"],"catchRate":255,"baseExp":50,"evolucao":836,"evolucaoNivel":null,"evolucaoItem":"tart_apple","statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":841,"nome":"Flapple","tipos":["Planta","Dragão"],"altura":0.3,"peso":1.0,"genero":"50_50","habitats":["floresta"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":8,"ataqueEspecial":9,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":842,"nome":"Appletun","tipos":["Planta","Dragão"],"altura":0.4,"peso":13.0,"genero":"50_50","habitats":["floresta"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":2}},

  // Família Silicobra
  {"dexNumber":843,"nome":"Silicobra","tipos":["Terra"],"altura":2.2,"peso":7.6,"genero":"50_50","habitats":["deserto"],"catchRate":255,"baseExp":50,"evolucao":839,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":7,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":844,"nome":"SandAçonda","tipos":["Terra"],"altura":3.8,"peso":65.5,"genero":"50_50","habitats":["deserto"],"catchRate":120,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":12,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":3}},

  // Família Cramorant
  {"dexNumber":845,"nome":"Cramorant","tipos":["Voador","Água"],"altura":0.8,"peso":18.0,"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":6,"ataqueEspecial":8,"defesaEspecial":5,"velocidade":5}},

  // Família Arrokuda
  {"dexNumber":846,"nome":"Arrokuda","tipos":["Água"],"altura":0.5,"peso":1.0,"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":255,"baseExp":50,"evolucao":842,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":7}},
  {"dexNumber":847,"nome":"Barraskewda","tipos":["Água"],"altura":1.3,"peso":30.0,"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":12,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":13}},

  // Família Toxel
  {"dexNumber":848,"nome":"Toxel","tipos":["Elétrico","Veneno"],"altura":0.4,"peso":11.0,"genero":"50_50","habitats":["montanha","caverna"],"catchRate":75,"baseExp":50,"evolucao":844,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":849,"nome":"Toxtricity Ampolado","tipos":["Elétrico","Veneno"],"altura":1.6,"peso":40.0,"genero":"50_50","habitats":["montanha","caverna"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":8}},
  {"dexNumber":849,"nome":"Toxtricity Baixa Tensão","tipos":["Elétrico","Veneno"],"altura":1.6,"peso":40.0,"genero":"50_50","habitats":["montanha","caverna"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":9,"defesa":7,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":9}},

  // Família Sizzlipede
  {"dexNumber":850,"nome":"Sizzlipede","tipos":["Fogo","Inseto"],"altura":0.7,"peso":1.0,"genero":"50_50","habitats":["montanha","caverna"],"catchRate":35,"baseExp":50,"evolucao":846,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":6,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":851,"nome":"Centiskorch","tipos":["Fogo","Inseto"],"altura":3.0,"peso":120.0,"genero":"50_50","habitats":["montanha","caverna"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":7}},

  // Família Clobbopus
  {"dexNumber":852,"nome":"Clobbopus","tipos":["Lutador"],"altura":0.6,"peso":4.0,"genero":"50_50","habitats":["oceano","praia"],"catchRate":180,"baseExp":50,"evolucao":848,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":853,"nome":"Grapploct","tipos":["Lutador"],"altura":1.6,"peso":39.0,"genero":"50_50","habitats":["oceano","praia"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":9,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":4}},

  // Família Sinistea
  {"dexNumber":854,"nome":"Sinistea","tipos":["Fantasma"],"altura":0.1,"peso":0.2,"genero":"assexuado","habitats":["cidade","ruina"],"catchRate":120,"baseExp":50,"evolucao":850,"evolucaoNivel":null,"evolucaoItem":"cracked_pot","statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":855,"nome":"Polteageist","tipos":["Fantasma"],"altura":0.2,"peso":0.4,"genero":"assexuado","habitats":["cidade","ruina"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":7}},
   
  // Família Hatenna
  {"dexNumber":856,"nome":"Hatenna","tipos":["Psíquico"],"altura":0.4,"peso":3.4,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":235,"baseExp":50,"evolucao":852,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":857,"nome":"Hattrem","tipos":["Psíquico"],"altura":0.6,"peso":4.8,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":120,"baseExp":50,"evolucao":853,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":6,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":4}},
  {"dexNumber":858,"nome":"Hatterene","tipos":["Psíquico","Fada"],"altura":2.1,"peso":5.1,"genero":"0_100","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":9,"ataqueEspecial":13,"defesaEspecial":11,"velocidade":3}},

  // Família Impidimp
  {"dexNumber":859,"nome":"Impidimp","tipos":["Noturno","Fada"],"altura":0.4,"peso":5.5,"genero":"100_0","habitats":["floresta","caverna","ruina"],"catchRate":255,"baseExp":50,"evolucao":855,"evolucaoNivel":32,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":860,"nome":"Morgrem","tipos":["Noturno","Fada"],"altura":0.8,"peso":12.5,"genero":"100_0","habitats":["floresta","caverna","ruina"],"catchRate":120,"baseExp":50,"evolucao":856,"evolucaoNivel":42,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":6,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":861,"nome":"Grimmsnarl","tipos":["Noturno","Fada"],"altura":1.5,"peso":61.0,"genero":"100_0","habitats":["floresta","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":6,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":6}},

  // Família Obstagoon
  {"dexNumber":862,"nome":"Obstagoon","tipos":["Noturno","Normal"],"altura":1.6,"peso":46.0,"genero":"50_50","habitats":["pradaria","cidade","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":10,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":9}},

  // Família Perrserker
  {"dexNumber":863,"nome":"Perrserker","tipos":["Aço"],"altura":0.8,"peso":28.0,"genero":"50_50","habitats":["cidade","montanha","ruina"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":10,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":5}},

  // Família Cursola
  {"dexNumber":864,"nome":"Cursola","tipos":["Fantasma"],"altura":1.0,"peso":0.4,"genero":"25_75","habitats":["oceano","praia","ruina"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":5,"ataqueEspecial":14,"defesaEspecial":13,"velocidade":3}},

  // Família Sirfetch'd
  {"dexNumber":865,"nome":"Sirfetch'd","tipos":["Lutador"],"altura":0.8,"peso":15.0,"genero":"50_50","habitats":["pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":13,"defesa":10,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":6}},
  
  // Família Mr. Rime
  {"dexNumber":866,"nome":"Mr. Rime","tipos":["Gelo","Psíquico"],"altura":1.5,"peso":58.2,"genero":"50_50","habitats":["montanha","tundra"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":7,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":7}},

  // Família Runerigus
  {"dexNumber":867,"nome":"Runerigus","tipos":["Terra","Fantasma"],"altura":1.6,"peso":66.6,"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":12,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":3}},

  // Família Milcery
  {"dexNumber":868,"nome":"Milcery","tipos":["Fada"],"altura":0.2,"peso":0.3,"genero":"0_100","habitats":["pradaria","cidade"],"catchRate":200,"baseExp":50,"evolucao":871,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":869,"nome":"Alcremie","tipos":["Fada"],"altura":0.3,"peso":0.5,"genero":"0_100","habitats":["pradaria","cidade"],"catchRate":100,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":8,"ataqueEspecial":11,"defesaEspecial":12,"velocidade":6}},
  
  // Família Falinks
  {"dexNumber":870,"nome":"Falinks","altura":3.0,"peso":62.0,"tipos":["Lutador"],"genero":"assexuado","habitats":["pradaria","montanha"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":10,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":8}},

  // Família Pincurchin
  {"dexNumber":871,"nome":"Pincurchin","altura":0.3,"peso":1.0,"tipos":["Elétrico"],"genero":"50_50","habitats":["oceano","praia"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":9,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":1}},

  // Família Snom
  {"dexNumber":872,"nome":"Snom","altura":0.3,"peso":3.8,"tipos":["Gelo","Inseto"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":35,"baseExp":50,"evolucao":875,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":3,"defesa":3,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":873,"nome":"Frosmoth","altura":1.3,"peso":42.0,"tipos":["Gelo","Inseto"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":75,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":6,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":6}},

  // Família Stonjourner
  {"dexNumber":874,"nome":"Stonjourner","altura":2.5,"peso":520.0,"tipos":["Pedra"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":14,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":7}},

  // Família Eiscue
  {"dexNumber":875,"nome":"Eiscue","altura":1.4,"peso":89.0,"tipos":["Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":11,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":5}},
  {"dexNumber":875,"nome":"Eiscue Sem Gelo","altura":1.4,"peso":89.0,"tipos":["Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":12,"defesa":5,"ataqueEspecial":11,"defesaEspecial":9,"velocidade":13}},

  // Família Indeedee
  {"dexNumber":876,"nome":"Indeedee","altura":0.9,"peso":28.0,"tipos":["Psíquico","Normal"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":9}},

  // Família Morpeko
  {"dexNumber":877,"nome":"Morpeko","altura":0.3,"peso":3.0,"tipos":["Elétrico","Noturno"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":180,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},
  {"dexNumber":877,"nome":"Morpeko-Barriguita Cheia","altura":0.3,"peso":3.0,"tipos":["Elétrico","Noturno"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":180,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},
  {"dexNumber":877,"nome":"Morpeko-Barriguita Vazia","altura":0.3,"peso":3.0,"tipos":["Elétrico","Noturno"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":180,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":10,"defesa":6,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":10}},

  // Família Cufant
  {"dexNumber":878,"nome":"Cufant","altura":1.2,"peso":100.0,"tipos":["Aço"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":35,"baseExp":50,"evolucao":881,"evolucaoNivel":34,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":7,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":879,"nome":"Copperajah","altura":3.0,"peso":650.0,"tipos":["Aço"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":13,"defesa":9,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":3}},

  // Família DrAçozolt
  {"dexNumber":880,"nome":"DrAçozolt","altura":1.8,"peso":190.0,"tipos":["Elétrico","Dragão"],"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":9,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":8}},

  // Família Arctozolt
  {"dexNumber":881,"nome":"Arctozolt","altura":2.3,"peso":150.0,"tipos":["Elétrico","Gelo"],"genero":"assexuado","habitats":["tundra","artico"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":9,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":6}},

  // Família DrAçovish
  {"dexNumber":882,"nome":"DrAçovish","altura":2.3,"peso":215.0,"tipos":["Água","Dragão"],"genero":"assexuado","habitats":["oceano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":10,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

  // Família Arctovish
  {"dexNumber":883,"nome":"Arctovish","altura":2.0,"peso":175.0,"tipos":["Água","Gelo"],"genero":"assexuado","habitats":["oceano","artico"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":9,"defesa":10,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":6}},

  // Família Duraludon
  {"dexNumber":884,"nome":"Duraludon","altura":1.8,"peso":40.0,"tipos":["Aço","Dragão"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":12,"ataqueEspecial":9,"defesaEspecial":5,"velocidade":9}},

  // Família Dreepy
  {"dexNumber":885,"nome":"Dreepy","altura":0.5,"peso":2.0,"tipos":["Dragão","Fantasma"],"genero":"50_50","habitats":["oceano","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":888,"evolucaoNivel":50,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":5,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":8}},
  {"dexNumber":886,"nome":"Drakloak","altura":1.4,"peso":11.0,"tipos":["Dragão","Fantasma"],"genero":"50_50","habitats":["oceano","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":889,"evolucaoNivel":60,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":8}},
  {"dexNumber":887,"nome":"Dragapult","altura":3.0,"peso":50.0,"tipos":["Dragão","Fantasma"],"genero":"50_50","habitats":["oceano","montanha","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":14}},

  // Família Zacian
  {"dexNumber":888,"nome":"Zacian","altura":2.8,"peso":110.0,"tipos":["Fada"],"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":12,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":14}},
  {"dexNumber":888,"nome":"Zacian Espada Soberana","altura":2.8,"peso":110.0,"tipos":["Fada","Aço"],"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":17,"defesa":12,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":14}},

  // Família Zamazenta
  {"dexNumber":889,"nome":"Zamazenta","altura":2.9,"peso":210.0,"tipos":["Lutador"],"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":14,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":9}},
  {"dexNumber":889,"nome":"Zamazenta Escudo Soberano","altura":2.9,"peso":210.0,"tipos":["Lutador","Aço"],"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":17,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":9}},
  
  // Família Eternatus
  {"dexNumber":890,"nome":"Eternatus","altura":20.0,"peso":950.0,"tipos":["Veneno","Dragão"],"genero":"assexuado","habitats":["extradimensional"],"catchRate":255,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":14,"ataque":9,"defesa":8,"ataqueEspecial":14,"defesaEspecial":8,"velocidade":10}},

  // Família Kubfu
  {"dexNumber":891,"nome":"Kubfu","altura":0.6,"peso":12.0,"tipos":["Lutador"],"genero":"87_12","habitats":["montanha"],"catchRate":0,"baseExp":50,"evolucao":894,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":7,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":892,"nome":"Urshifu Estilo Batalha Único","altura":1.9,"peso":105.0,"tipos":["Lutador","Noturno"],"genero":"87_12","habitats":["montanha"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":9}},
  {"dexNumber":892,"nome":"Urshifu Estilo Batalha Água","altura":1.9,"peso":105.0,"tipos":["Lutador","Água"],"genero":"87_12","habitats":["montanha"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":10,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":9}},

  // Família Zarude
  {"dexNumber":893,"nome":"Zarude","altura":1.8,"peso":70.0,"tipos":["Noturno","Planta"],"genero":"assexuado","habitats":["selva","floresta"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":12,"defesa":11,"ataqueEspecial":8,"defesaEspecial":9,"velocidade":11}},

  // Família Regieleki
  {"dexNumber":894,"nome":"Regieleki","altura":1.2,"peso":145.0,"tipos":["Elétrico"],"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":20}},

  // Família Regidrago
  {"dexNumber":895,"nome":"Regidrago","altura":2.1,"peso":200.0,"tipos":["Dragão"],"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":20,"ataque":10,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":8}},

  // Família Glastrier
  {"dexNumber":896,"nome":"Glastrier","altura":2.2,"peso":800.0,"tipos":["Gelo"],"genero":"assexuado","habitats":["tundra","artico"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":15,"defesa":13,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":3}},

  // Família Spectrier
  {"dexNumber":897,"nome":"Spectrier","altura":2.0,"peso":44.5,"tipos":["Fantasma"],"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":13}},

  // Família Calyrex
  {"dexNumber":898,"nome":"Calyrex","altura":1.1,"peso":7.7,"tipos":["Psíquico","Planta"],"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":8}},
  {"dexNumber":898,"nome":"Calyrex Cavaleiro Espectral","altura":2.4,"peso":53.6,"tipos":["Psíquico","Fantasma"],"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":10,"ataqueEspecial":16,"defesaEspecial":10,"velocidade":15}},
  {"dexNumber":898,"nome":"Calyrex Cavaleiro Glacial","altura":2.4,"peso":809.1,"tipos":["Psíquico","Gelo"],"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":16,"defesa":10,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":15}},

   // Família Wyrdeer (Hisui)
  {"dexNumber":899,"nome":"Wyrdeer","altura":1.8,"peso":95.1,"tipos":["Normal","Psíquico"],"genero":"50_50","habitats":["floresta","montanha"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":7,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":10}},

  // Família Kleavor (Hisui)
  {"dexNumber":900,"nome":"Kleavor","altura":1.8,"peso":89.0,"tipos":["Inseto","Pedra"],"genero":"50_50","habitats":["floresta","montanha"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":14,"defesa":10,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":9}},

  // Família Ursaluna (Hisui)
  {"dexNumber":901,"nome":"Ursaluna","altura":2.4,"peso":290.0,"tipos":["Terra","Normal"],"genero":"50_50","habitats":["pantano","pradaria"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":14,"defesa":11,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":5}},

  // Família Basculegion (Hisui)
  {"dexNumber":902,"nome":"Basculegion","altura":3.0,"peso":110.0,"tipos":["Água","Fantasma"],"genero":"50_50","habitats":["rio","lago"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":12,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":9}},

  // Família Sneasler (Hisui)
  {"dexNumber":903,"nome":"Sneasler","altura":1.3,"peso":43.0,"tipos":["Lutador","Veneno"],"genero":"50_50","habitats":["montanha","floresta"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":6,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":13}},
  
  // Qwilfish de Hisui -> Overqwil
  {"dexNumber":904, "nome":"Overqwil", "altura":2.5, "peso":60.5, "tipos":["Noturno", "Veneno"], "genero":"50_50","habitats":["oceano"], "catchRate":45, "baseExp":null, "evolucao":null, "evolucaoNivel":null, "evolucaoItem":null, "statusBasais":{"saude":8, "ataque":11, "defesa":9, "ataqueEspecial":7, "defesaEspecial":6, "velocidade":8}},

  // Uma das Forças da Natureza de Hisui
  {"dexNumber":905, "nome":"Enamorus", "altura":1.6, "peso":48.0, "tipos":["Fada", "Voador"], "genero":"Sem_Gênero","habitats":["pradaria"], "catchRate":3, "baseExp":null, "evolucao":null, "evolucaoNivel":null, "evolucaoItem":null, "statusBasais":{"saude":7, "ataque":8, "defesa":7, "ataqueEspecial":12, "defesaEspecial":9, "velocidade":10}},

  // Formas de Galar (continuam com os mesmos números mas nomes diferentes)
{"dexNumber": 10161, "nome": "Meowth de Galar", "altura": 0.4, "peso": 7.5, "tipos": ["Aço"], "genero": "50_50", "habitats": ["cidade", "montanha", "ruina"], "catchRate": 255, "baseExp": 50, "evolucao": 863, "evolucaoNivel": 28, "evolucaoItem": null, "statusBasais": {"saude": 5, "ataque": 6, "defesa": 5, "ataqueEspecial": 4, "defesaEspecial": 4, "velocidade": 4}},
{"dexNumber": 10162, "nome": "Ponyta de Galar", "altura": 0.8, "peso": 24.0, "tipos": ["Psíquico"], "genero": "50_50", "habitats": ["pradaria", "floresta"], "catchRate": 35, "baseExp": 50, "evolucao": 78, "evolucaoNivel": 40, "evolucaoItem": null, "statusBasais": {"saude": 5, "ataque": 9, "defesa": 6, "ataqueEspecial": 7, "defesaEspecial": 6, "velocidade": 9}},
{"dexNumber": 10163, "nome": "Rapidash de Galar", "altura": 1.7, "peso": 80.0, "tipos": ["Psíquico", "Fada"], "genero": "50_50", "habitats": ["pradaria", "floresta"], "catchRate": 60, "baseExp": 50, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 7, "ataque": 10, "defesa": 7, "ataqueEspecial": 9, "defesaEspecial": 8, "velocidade": 11}},
{"dexNumber": 10164, "nome": "Slowpoke de Galar", "altura": 1.2, "peso": 36.0, "tipos": ["Psíquico"], "genero": "50_50", "habitats": ["praia", "oceano"], "catchRate": 190, "baseExp": 63, "evolucao": 10170, "evolucaoNivel": null, "evolucaoItem": "galarica-cuff", "statusBasais": {"saude": 9, "ataque": 6, "defesa": 7, "ataqueEspecial": 4, "defesaEspecial": 5, "velocidade": 2}},
{"dexNumber": 10165, "nome": "Slowbro de Galar", "altura": 1.6, "peso": 70.5, "tipos": ["Veneno", "Psíquico"], "genero": "50_50", "habitats": ["praia", "oceano"], "catchRate": 75, "baseExp": 172, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 9, "ataque": 8, "defesa": 11, "ataqueEspecial": 10, "defesaEspecial": 8, "velocidade": 3}},
{"dexNumber": 10166, "nome": "Farfetch'd de Galar", "altura": 0.8, "peso": 15.0, "tipos": ["Lutador"], "genero": "50_50", "habitats": ["pradaria"], "catchRate": 45, "baseExp": 50, "evolucao": 865, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 5, "ataque": 9, "defesa": 6, "ataqueEspecial": 5, "defesaEspecial": 6, "velocidade": 6}},
{"dexNumber": 10167, "nome": "Weezing de Galar", "altura": 3.0, "peso": 16.0, "tipos": ["Veneno", "Fada"], "genero": "50_50", "habitats": ["cidade", "montanha", "ruina"], "catchRate": 60, "baseExp": 50, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 7, "ataque": 8, "defesa": 12, "ataqueEspecial": 9, "defesaEspecial": 11, "velocidade": 6}},
{"dexNumber": 10168, "nome": "Mr. Mime de Galar", "altura": 1.4, "peso": 56.8, "tipos": ["Gelo", "Psíquico"], "genero": "50_50", "habitats": ["montanha", "tundra"], "catchRate": 45, "baseExp": 50, "evolucao": 866, "evolucaoNivel": 42, "evolucaoItem": null, "statusBasais": {"saude": 5, "ataque": 6, "defesa": 7, "ataqueEspecial": 9, "defesaEspecial": 10, "velocidade": 8}},
{"dexNumber": 10169, "nome": "Articuno de Galar", "altura": 1.7, "peso": 50.9, "tipos": ["Psíquico", "Voador"], "genero": "genderless", "habitats": ["montanha"], "catchRate": 3, "baseExp": 290, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 9, "ataque": 8, "defesa": 8, "ataqueEspecial": 12, "defesaEspecial": 11, "velocidade": 11}},
{"dexNumber": 10170, "nome": "Zapdos de Galar", "altura": 1.6, "peso": 58.2, "tipos": ["Lutador", "Voador"], "genero": "genderless", "habitats": ["pradaria"], "catchRate": 3, "baseExp": 290, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 9, "ataque": 12, "defesa": 9, "ataqueEspecial": 8, "defesaEspecial": 8, "velocidade": 11}},
{"dexNumber": 10171, "nome": "Moltres de Galar", "altura": 2.0, "peso": 66.0, "tipos": ["Noturno", "Voador"], "genero": "genderless", "habitats": ["montanha"], "catchRate": 3, "baseExp": 290, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 9, "ataque": 8, "defesa": 9, "ataqueEspecial": 12, "defesaEspecial": 10, "velocidade": 10}},
{"dexNumber": 10172, "nome": "Slowking de Galar", "altura": 1.8, "peso": 79.5, "tipos": ["Veneno", "Psíquico"], "genero": "50_50", "habitats": ["praia", "oceano"], "catchRate": 75, "baseExp": 172, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 9, "ataque": 7, "defesa": 8, "ataqueEspecial": 11, "defesaEspecial": 10, "velocidade": 3}},
{"dexNumber": 10173, "nome": "Corsola de Galar", "altura": 0.6, "peso": 0.5, "tipos": ["Fantasma"], "genero": "25_75", "habitats": ["oceano", "praia", "ruina"], "catchRate": 35, "baseExp": 50, "evolucao": 864, "evolucaoNivel": 38, "evolucaoItem": null, "statusBasais": {"saude": 6, "ataque": 6, "defesa": 8, "ataqueEspecial": 7, "defesaEspecial": 9, "velocidade": 2}},
{"dexNumber": 10174, "nome": "Zigzagoon de Galar", "altura": 0.4, "peso": 17.5, "tipos": ["Noturno", "Normal"], "genero": "50_50", "habitats": ["pradaria", "cidade"], "catchRate": 255, "baseExp": 50, "evolucao": 263, "evolucaoNivel": 20, "evolucaoItem": null, "statusBasais": {"saude": 4, "ataque": 4, "defesa": 4, "ataqueEspecial": 3, "defesaEspecial": 4, "velocidade": 6}},
{"dexNumber": 10175, "nome": "Linoone de Galar", "altura": 0.5, "peso": 32.5, "tipos": ["Noturno", "Normal"], "genero": "50_50", "habitats": ["pradaria", "cidade"], "catchRate": 90, "baseExp": 50, "evolucao": 862, "evolucaoNivel": 35, "evolucaoItem": null, "statusBasais": {"saude": 8, "ataque": 7, "defesa": 6, "ataqueEspecial": 5, "defesaEspecial": 6, "velocidade": 10}},
{"dexNumber": 10176, "nome": "Darumaka de Galar", "altura": 0.7, "peso": 40.0, "tipos": ["Gelo"], "genero": "50_50", "habitats": ["montanha", "tundra"], "catchRate": 120, "baseExp": 63, "evolucao": 10177, "evolucaoNivel": 35, "evolucaoItem": null, "statusBasais": {"saude": 7, "ataque": 9, "defesa": 5, "ataqueEspecial": 3, "defesaEspecial": 5, "velocidade": 5}},
{"dexNumber": 10177, "nome": "Darmanitan de Galar", "altura": 1.7, "peso": 120.0, "tipos": ["Gelo"], "genero": "50_50", "habitats": ["montanha", "tundra"], "catchRate": 60, "baseExp": 168, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 11, "ataque": 14, "defesa": 6, "ataqueEspecial": 4, "defesaEspecial": 6, "velocidade": 6}},
{"dexNumber": 10178, "nome": "Darmanitan de Galar (Modo Zen)", "altura": 1.7, "peso": 120.0, "tipos": ["Gelo", "Fogo"], "genero": "50_50", "habitats": ["montanha", "tundra"], "catchRate": 60, "baseExp": 189, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 11, "ataque": 16, "defesa": 6, "ataqueEspecial": 4, "defesaEspecial": 6, "velocidade": 6}},
{"dexNumber": 10179, "nome": "Yamask de Galar", "altura": 0.5, "peso": 1.5, "tipos": ["Terra", "Fantasma"], "genero": "50_50", "habitats": ["caverna", "montanha", "ruina"], "catchRate": 35, "baseExp": 61, "evolucao": 867, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 4, "ataque": 6, "defesa": 9, "ataqueEspecial": 4, "defesaEspecial": 7, "velocidade": 3}},
{"dexNumber": 10180, "nome": "Stunfisk de Galar", "altura": 0.7, "peso": 20.5, "tipos": ["Terra", "Aço"], "genero": "50_50", "habitats": ["pantano", "pradaria"], "catchRate": 75, "baseExp": 165, "evolucao": null, "evolucaoNivel": null, "evolucaoItem": null, "statusBasais": {"saude": 11, "ataque": 8, "defesa": 9, "ataqueEspecial": 8, "defesaEspecial": 10, "velocidade": 3}},

  //PaldeaDex (906-1025)

    // Família Sprigatito
  {"dexNumber":906,"nome":"Sprigatito","altura":0.4,"peso":4.1,"tipos":["Planta"],"genero":"87_12","habitats":["pradaria","floresta"],"catchRate":20,"baseExp":50,"evolucao":907,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":7}},
  {"dexNumber":907,"nome":"Floragato","altura":0.9,"peso":12.2,"tipos":["Planta"],"genero":"87_12","habitats":["pradaria","floresta"],"catchRate":15,"baseExp":50,"evolucao":908,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":6,"ataqueEspecial":7,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":908,"nome":"Meowscarada","altura":1.5,"peso":31.2,"tipos":["Planta","Noturno"],"genero":"87_12","habitats":["pradaria","floresta"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":12}},

  // Família Fuecoco
  {"dexNumber":909,"nome":"Fuecoco","altura":0.4,"peso":9.8,"tipos":["Fogo"],"genero":"87_12","habitats":["deserto","montanha"],"catchRate":20,"baseExp":50,"evolucao":910,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":910,"nome":"Crocalor","altura":1.0,"peso":30.7,"tipos":["Fogo"],"genero":"87_12","habitats":["deserto","montanha"],"catchRate":15,"baseExp":50,"evolucao":911,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":7,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":4}},
  {"dexNumber":911,"nome":"Skeledirge","altura":1.6,"peso":326.5,"tipos":["Fogo","Fantasma"],"genero":"87_12","habitats":["deserto","montanha"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":10,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":7}},

  // Família Quaxly
  {"dexNumber":912,"nome":"Quaxly","altura":0.5,"peso":6.1,"tipos":["Água"],"genero":"87_12","habitats":["agua_doce","praia"],"catchRate":20,"baseExp":50,"evolucao":913,"evolucaoNivel":16,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":5}},
  {"dexNumber":913,"nome":"Quaxwell","altura":1.2,"peso":21.5,"tipos":["Água"],"genero":"87_12","habitats":["agua_doce","praia"],"catchRate":15,"baseExp":50,"evolucao":914,"evolucaoNivel":36,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":8,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},
  {"dexNumber":914,"nome":"Quaquaval","altura":1.8,"peso":61.9,"tipos":["Água","Lutador"],"genero":"87_12","habitats":["agua_doce","praia"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":9}},

  // Família Lechonk
  {"dexNumber":915,"nome":"Lechonk","altura":0.5,"peso":10.2,"tipos":["Normal"],"genero":"50_50","habitats":["pradaria","floresta"],"catchRate":75,"baseExp":50,"evolucao":916,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":916,"nome":"Oinkologne","altura":1.0,"peso":120.0,"tipos":["Normal"],"genero":"50_50","habitats":["pradaria","floresta"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":10,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":7}},

  // Família Tarountula
  {"dexNumber":917,"nome":"Tarountula","altura":0.3,"peso":4.0,"tipos":["Inseto"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":55,"baseExp":50,"evolucao":918,"evolucaoNivel":15,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":5,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":2}},
  {"dexNumber":918,"nome":"Spidops","altura":1.0,"peso":16.5,"tipos":["Inseto"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":9,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":3}},

  // Família Nymble
  {"dexNumber":919,"nome":"Nymble","altura":0.2,"peso":1.0,"tipos":["Inseto"],"genero":"50_50","habitats":["pradaria","floresta"],"catchRate":45,"baseExp":50,"evolucao":920,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":5,"defesa":3,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":5}},
  {"dexNumber":920,"nome":"Lokix","altura":1.0,"peso":17.5,"tipos":["Inseto","Noturno"],"genero":"50_50","habitats":["pradaria","floresta"],"catchRate":20,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":8,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":9}},

  // Família Pawmi
  {"dexNumber":921,"nome":"Pawmi","altura":0.3,"peso":2.5,"tipos":["Elétrico"],"genero":"50_50","habitats":["pradaria","montanha"],"catchRate":35,"baseExp":45,"evolucao":922,"evolucaoNivel":18,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":922,"nome":"Pawmo","altura":0.4,"peso":6.5,"tipos":["Elétrico","Lutador"],"genero":"50_50","habitats":["pradaria","montanha"],"catchRate":30,"baseExp":50,"evolucao":923,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":8}},
  {"dexNumber":923,"nome":"Pawmot","altura":0.9,"peso":41.0,"tipos":["Elétrico","Lutador"],"genero":"50_50","habitats":["pradaria","montanha"],"catchRate":15,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":11,"defesa":7,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":11}},

  // Família Tandemaus
  {"dexNumber":924,"nome":"Tandemaus","altura":0.3,"peso":1.8,"tipos":["Normal"],"genero":"assexuado","habitats":["cidade","pradaria"],"catchRate":45,"baseExp":50,"evolucao":925,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":7}},
  {"dexNumber":925,"nome":"Maushold","altura":0.3,"peso":2.3,"tipos":["Normal"],"genero":"assexuado","habitats":["cidade","pradaria"],"catchRate":20,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":7,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":11}},

  // Família Fidough
  {"dexNumber":926,"nome":"Fidough","altura":0.3,"peso":10.9,"tipos":["Fada"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":30,"baseExp":50,"evolucao":927,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":927,"nome":"Dachsbun","altura":0.5,"peso":14.9,"tipos":["Fada"],"genero":"50_50","habitats":["pradaria","cidade"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":8,"defesa":11,"ataqueEspecial":5,"defesaEspecial":9,"velocidade":9}},

  // Família Smoliv
  {"dexNumber":928,"nome":"Smoliv","altura":0.3,"peso":6.5,"tipos":["Planta","Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":50,"baseExp":50,"evolucao":929,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":929,"nome":"Dolliv","altura":0.6,"peso":11.9,"tipos":["Planta","Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":35,"baseExp":50,"evolucao":930,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":4}},
  {"dexNumber":930,"nome":"Arboliva","altura":1.4,"peso":48.2,"tipos":["Planta","Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":9,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":4}},

  // Família Squawkabilly
  {"dexNumber":931,"nome":"Squawkabilly","altura":0.6,"peso":2.4,"tipos":["Normal","Voador"],"genero":"50_50","habitats":["floresta","cidade"],"catchRate":35,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":10,"defesa":6,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":9}},

  // Família Nacli
  {"dexNumber":932,"nome":"Nacli","altura":0.4,"peso":16.0,"tipos":["Pedra"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":40,"baseExp":50,"evolucao":933,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":7,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":933,"nome":"Naclstack","altura":0.6,"peso":105.0,"tipos":["Pedra"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":35,"baseExp":50,"evolucao":934,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":10,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":3}},
  {"dexNumber":934,"nome":"Garganacl","altura":2.3,"peso":240.0,"tipos":["Pedra"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":20,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":10,"defesa":13,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":4}},

  // Família Charcadet
  {"dexNumber":935,"nome":"Charcadet","altura":0.6,"peso":10.5,"tipos":["Fogo"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":90,"baseExp":50,"evolucao":936,"evolucaoNivel":null,"evolucaoItem":"auspicious_armor","statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":936,"nome":"Armarouge","altura":1.5,"peso":85.0,"tipos":["Fogo","Psíquico"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":7,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":6}},
  {"dexNumber":937,"nome":"Ceruledge","altura":1.6,"peso":62.0,"tipos":["Fogo","Fantasma"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":9}},

  // Família Tadbulb
  {"dexNumber":938,"nome":"Tadbulb","altura":0.3,"peso":0.4,"tipos":["Elétrico"],"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":50,"baseExp":50,"evolucao":939,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":4,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":939,"nome":"Bellibolt","altura":1.2,"peso":113.0,"tipos":["Elétrico"],"genero":"50_50","habitats":["agua_doce","pantano"],"catchRate":35,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":9,"ataqueEspecial":9,"defesaEspecial":8,"velocidade":4}},

  // Família Wattrel
  {"dexNumber":940,"nome":"Wattrel","altura":0.4,"peso":3.6,"tipos":["Elétrico","Voador"],"genero":"50_50","habitats":["oceano","praia"],"catchRate":40,"baseExp":50,"evolucao":941,"evolucaoNivel":25,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":6,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":941,"nome":"Kilowattrel","altura":1.4,"peso":38.6,"tipos":["Elétrico","Voador"],"genero":"50_50","habitats":["oceano","praia"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":7,"defesa":6,"ataqueEspecial":11,"defesaEspecial":6,"velocidade":13}},

  // Família Maschiff
  {"dexNumber":942,"nome":"Maschiff","altura":0.5,"peso":16.0,"tipos":["Noturno"],"genero":"50_50","habitats":["floresta","montanha"],"catchRate":45,"baseExp":50,"evolucao":943,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":7,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":943,"nome":"Mabosstiff","altura":1.1,"peso":61.0,"tipos":["Noturno"],"genero":"50_50","habitats":["floresta","montanha"],"catchRate":20,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":4}},

  // Família Shroodle
  {"dexNumber":944,"nome":"Shroodle","altura":0.2,"peso":0.7,"tipos":["Veneno","Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":40,"baseExp":50,"evolucao":945,"evolucaoNivel":28,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":945,"nome":"Grafaiai","altura":0.7,"peso":27.2,"tipos":["Veneno","Normal"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":8,"defesa":6,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":11}},

  // Família Bramblin
  {"dexNumber":946,"nome":"Bramblin","altura":0.6,"peso":0.6,"tipos":["Planta","Fantasma"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":45,"baseExp":50,"evolucao":947,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":5,"defesa":4,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":947,"nome":"Brambleghast","altura":1.2,"peso":6.0,"tipos":["Planta","Fantasma"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":11,"defesa":7,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":10}},

  // Família Toedscool
  {"dexNumber":948,"nome":"Toedscool","altura":0.9,"peso":33.0,"tipos":["Terra","Planta"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":40,"baseExp":50,"evolucao":949,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":4,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":9}},
  {"dexNumber":949,"nome":"Toedscruel","altura":1.9,"peso":58.0,"tipos":["Terra","Planta"],"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":6,"defesa":6,"ataqueEspecial":8,"defesaEspecial":10,"velocidade":10}},

  // Família Klawf
  {"dexNumber":950,"nome":"Klawf","altura":1.3,"peso":79.0,"tipos":["Pedra"],"genero":"50_50","habitats":["montanha","caverna"],"catchRate":40,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":11,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":5}},

  // Família Capsakid
  {"dexNumber":951,"nome":"Capsakid","altura":0.3,"peso":3.0,"tipos":["Planta"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":40,"baseExp":50,"evolucao":952,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":4,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":952,"nome":"Scovillain","altura":0.9,"peso":15.0,"tipos":["Planta","Fogo"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":6,"ataqueEspecial":10,"defesaEspecial":6,"velocidade":6}},

  // Família Rellor
  {"dexNumber":953,"nome":"Rellor","altura":0.2,"peso":1.0,"tipos":["Inseto"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":35,"baseExp":50,"evolucao":954,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":3,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":954,"nome":"Rabsca","altura":0.3,"peso":3.5,"tipos":["Inseto","Psíquico"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":8,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":8}},

  // Família Flittle
  {"dexNumber":955,"nome":"Flittle","altura":0.2,"peso":1.5,"tipos":["Psíquico"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":40,"baseExp":50,"evolucao":956,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":3,"defesa":3,"ataqueEspecial":5,"defesaEspecial":4,"velocidade":5}},
  {"dexNumber":956,"nome":"Espathra","altura":1.9,"peso":90.0,"tipos":["Psíquico"],"genero":"50_50","habitats":["deserto","pradaria"],"catchRate":20,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":6,"defesa":6,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":11}},

    // Família Tinkatink
  {"dexNumber":957,"nome":"Tinkatink","altura":0.4,"peso":8.9,"tipos":["Fada","Aço"],"genero":"0_100","habitats":["montanha","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":958,"evolucaoNivel":24,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":958,"nome":"Tinkatuff","altura":0.7,"peso":59.1,"tipos":["Fada","Aço"],"genero":"0_100","habitats":["montanha","caverna","ruina"],"catchRate":35,"baseExp":50,"evolucao":959,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":8,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":4}},
  {"dexNumber":959,"nome":"Tinkaton","altura":0.7,"peso":112.8,"tipos":["Fada","Aço"],"genero":"0_100","habitats":["montanha","caverna","ruina"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":9,"ataqueEspecial":7,"defesaEspecial":10,"velocidade":9}},

  // Família Wiglett
  {"dexNumber":960,"nome":"Wiglett","altura":1.2,"peso":1.8,"tipos":["Água"],"genero":"50_50","habitats":["praia","oceano"],"catchRate":50,"baseExp":50,"evolucao":961,"evolucaoNivel":26,"evolucaoItem":null,"statusBasais":{"saude":1,"ataque":5,"defesa":3,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":6}},
  {"dexNumber":961,"nome":"Wugtrio","altura":1.2,"peso":5.4,"tipos":["Água"],"genero":"50_50","habitats":["praia","oceano"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":3,"ataque":10,"defesa":5,"ataqueEspecial":5,"defesaEspecial":5,"velocidade":12}},

  // Família Bombirdier
  {"dexNumber":962,"nome":"Bombirdier","altura":1.5,"peso":42.9,"tipos":["Voador","Noturno"],"genero":"50_50","habitats":["montanha","caverna"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":7,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":8}},

  // Família Finizen
  {"dexNumber":963,"nome":"Finizen","altura":1.3,"peso":60.2,"tipos":["Água"],"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":45,"baseExp":50,"evolucao":964,"evolucaoNivel":38,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":5,"defesa":5,"ataqueEspecial":6,"defesaEspecial":5,"velocidade":4}},
  {"dexNumber":964,"nome":"Palafin","altura":1.3,"peso":60.2,"tipos":["Água"],"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":7,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},

  // Família Varoom
  {"dexNumber":965,"nome":"Varoom","altura":1.0,"peso":35.0,"tipos":["Aço","Veneno"],"genero":"50_50","habitats":["cidade","montanha"],"catchRate":40,"baseExp":50,"evolucao":966,"evolucaoNivel":40,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":6,"defesa":6,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":966,"nome":"Revavroom","altura":1.8,"peso":120.0,"tipos":["Aço","Veneno"],"genero":"50_50","habitats":["cidade","montanha"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":8}},

  // Família Cyclizar
  {"dexNumber":967,"nome":"Cyclizar","altura":1.6,"peso":63.0,"tipos":["Dragão","Normal"],"genero":"50_50","habitats":["pradaria","montanha"],"catchRate":40,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":12}},

  // Família Orthworm
  {"dexNumber":968,"nome":"Orthworm","altura":2.5,"peso":310.0,"tipos":["Aço"],"genero":"50_50","habitats":["deserto","montanha"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":9,"defesa":14,"ataqueEspecial":4,"defesaEspecial":7,"velocidade":6}},

  // Família Glimmet
  {"dexNumber":969,"nome":"Glimmet","altura":0.7,"peso":8.0,"tipos":["Pedra","Veneno"],"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":50,"baseExp":50,"evolucao":970,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":5,"defesa":6,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":3}},
  {"dexNumber":970,"nome":"Glimmora","altura":1.5,"peso":45.0,"tipos":["Pedra","Veneno"],"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":8,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":8}},

  // Família Greavard
  {"dexNumber":971,"nome":"Greavard","altura":0.6,"peso":35.0,"tipos":["Fantasma"],"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":35,"baseExp":50,"evolucao":972,"evolucaoNivel":30,"evolucaoItem":null,"statusBasais":{"saude":5,"ataque":6,"defesa":5,"ataqueEspecial":3,"defesaEspecial":4,"velocidade":3}},
  {"dexNumber":972,"nome":"Houndstone","altura":2.0,"peso":15.0,"tipos":["Fantasma"],"genero":"50_50","habitats":["caverna","montanha","ruina"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":10,"defesa":10,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":7}},

  // Família Flamigo
  {"dexNumber":973,"nome":"Flamigo","altura":1.6,"peso":37.0,"tipos":["Voador","Lutador"],"genero":"50_50","habitats":["pradaria","agua_doce"],"catchRate":100,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":7,"ataqueEspecial":7,"defesaEspecial":6,"velocidade":9}},

  // Família Cetoddle
  {"dexNumber":974,"nome":"Cetoddle","altura":1.2,"peso":45.0,"tipos":["Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":150,"baseExp":50,"evolucao":975,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":7,"defesa":6,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":975,"nome":"Cetitan","altura":4.5,"peso":700.0,"tipos":["Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":50,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":17,"ataque":11,"defesa":9,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":3}},

  // Família Veluza
  {"dexNumber":976,"nome":"Veluza","altura":2.5,"peso":90.0,"tipos":["Água","Psíquico"],"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":100,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":6,"ataqueEspecial":9,"defesaEspecial":6,"velocidade":7}},

  // Família Dondozo
  {"dexNumber":977,"nome":"Dondozo","altura":12.0,"peso":220.0,"tipos":["Água"],"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":10,"defesa":11,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":4}},

  // Família Tatsugiri
  {"dexNumber":978,"nome":"Tatsugiri","altura":0.3,"peso":8.0,"tipos":["Dragão","Água"],"genero":"50_50","habitats":["oceano","agua_doce"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":8,"ataqueEspecial":10,"defesaEspecial":7,"velocidade":8}},

  // Família Annihilape
  {"dexNumber":979,"nome":"Annihilape","altura":1.2,"peso":56.0,"tipos":["Lutador","Fantasma"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":12,"defesa":8,"ataqueEspecial":6,"defesaEspecial":7,"velocidade":9}},

  // Família Clodsire
  {"dexNumber":980,"nome":"Clodsire","altura":1.8,"peso":223.0,"tipos":["Veneno","Terrestre"],"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":90,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":13,"ataque":8,"defesa":6,"ataqueEspecial":6,"defesaEspecial":9,"velocidade":2}},

  // Família Farigiraf
  {"dexNumber":981,"nome":"Farigiraf","altura":3.2,"peso":160.0,"tipos":["Normal","Psíquico"],"genero":"50_50","habitats":["pradaria","floresta"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":9,"defesa":8,"ataqueEspecial":11,"defesaEspecial":7,"velocidade":6}},

  // Família Dudunsparce
  {"dexNumber":982,"nome":"Dudunsparce","altura":3.6,"peso":39.2,"tipos":["Normal"],"genero":"50_50","habitats":["caverna","montanha"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":10,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":5}},

  // Família Kingambit
  {"dexNumber":983,"nome":"Kingambit","altura":2.0,"peso":120.0,"tipos":["Noturno","Aço"],"genero":"50_50","habitats":["montanha","caverna","ruina"],"catchRate":25,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":12,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":5}},

  // Família Great Tusk
  {"dexNumber":984,"nome":"Great Tusk","altura":2.2,"peso":320.0,"tipos":["Terrestre","Lutador"],"genero":"assexuado","habitats":["deserto","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":13,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":8}},

  // Família Scream Tail
  {"dexNumber":985,"nome":"Scream Tail","altura":1.2,"peso":8.0,"tipos":["Fada","Psíquico"],"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":6,"defesa":7,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":11}},

  // Família Brute Bonnet
  {"dexNumber":986,"nome":"Brute Bonnet","altura":1.2,"peso":21.0,"tipos":["Planta","Noturno"],"genero":"assexuado","habitats":["floresta","pantano"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":13,"defesa":9,"ataqueEspecial":5,"defesaEspecial":8,"velocidade":5}},

  // Família Flutter Mane
  {"dexNumber":987,"nome":"Flutter Mane","altura":1.4,"peso":4.0,"tipos":["Fantasma","Fada"],"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":14,"defesaEspecial":11,"velocidade":13}},

  // Família Slither Wing
  {"dexNumber":988,"nome":"Slither Wing","altura":3.2,"peso":92.0,"tipos":["Inseto","Lutador"],"genero":"assexuado","habitats":["deserto","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":9,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":8}},

  // Família Sandy Shocks
  {"dexNumber":989,"nome":"Sandy Shocks","altura":2.3,"peso":60.0,"tipos":["Elétrico","Terrestre"],"genero":"assexuado","habitats":["deserto","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":8,"ataqueEspecial":12,"defesaEspecial":7,"velocidade":10}},

  // Família Iron Treads
  {"dexNumber":990,"nome":"Iron Treads","altura":0.9,"peso":240.0,"tipos":["Terrestre","Aço"],"genero":"assexuado","habitats":["deserto","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":11,"defesa":12,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},

  // Família Iron Bundle
  {"dexNumber":991,"nome":"Iron Bundle","altura":0.6,"peso":11.0,"tipos":["Gelo","Água"],"genero":"assexuado","habitats":["tundra","artico"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":6,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":13}},

  // Família Iron Hands
  {"dexNumber":992,"nome":"Iron Hands","altura":1.8,"peso":380.0,"tipos":["Lutador","Elétrico"],"genero":"assexuado","habitats":["montanha","caverna"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":15,"ataque":14,"defesa":10,"ataqueEspecial":5,"defesaEspecial":7,"velocidade":5}},

  // Família Iron Jugulis
  {"dexNumber":993,"nome":"Iron Jugulis","altura":1.3,"peso":111.0,"tipos":["Noturno","Voador"],"genero":"assexuado","habitats":["montanha","caverna"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":8,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":10}},

  // Família Iron Moth
  {"dexNumber":994,"nome":"Iron Moth","altura":1.2,"peso":36.0,"tipos":["Fogo","Veneno"],"genero":"assexuado","habitats":["deserto","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":7,"ataqueEspecial":14,"defesaEspecial":8,"velocidade":9}},

  // Família Iron Thorns
  {"dexNumber":995,"nome":"Iron Thorns","altura":1.6,"peso":303.0,"tipos":["Pedra","Elétrico"],"genero":"assexuado","habitats":["montanha","caverna"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":11,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":6}},

  // Família Frigibax
  {"dexNumber":996,"nome":"Frigibax","altura":0.5,"peso":17.0,"tipos":["Dragão","Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":45,"baseExp":50,"evolucao":997,"evolucaoNivel":35,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":6,"defesa":5,"ataqueEspecial":4,"defesaEspecial":4,"velocidade":4}},
  {"dexNumber":997,"nome":"Arctibax","altura":0.8,"peso":30.0,"tipos":["Dragão","Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":25,"baseExp":50,"evolucao":998,"evolucaoNivel":54,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":7,"ataqueEspecial":6,"defesaEspecial":6,"velocidade":6}},
  {"dexNumber":998,"nome":"Baxcalibur","altura":2.1,"peso":210.0,"tipos":["Dragão","Gelo"],"genero":"50_50","habitats":["tundra","artico"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":9,"ataqueEspecial":8,"defesaEspecial":7,"velocidade":8}},

  // Família Gimmighoul
  {"dexNumber":999,"nome":"Gimmighoul","altura":0.3,"peso":5.0,"tipos":["Fantasma"],"genero":"assexuado","habitats":["cidade","ruina"],"catchRate":45,"baseExp":50,"evolucao":1000,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":3,"defesa":5,"ataqueEspecial":4,"defesaEspecial":5,"velocidade":3}},
  {"dexNumber":1000,"nome":"Gholdengo","altura":1.2,"peso":30.0,"tipos":["Fantasma","Aço"],"genero":"assexuado","habitats":["cidade","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":9,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":8}},

  // Família Wo-Chien
  {"dexNumber":1001,"nome":"Wo-Chien","tipos":["Noturno","Planta"],"altura":1.5,"peso":74.2,"genero":"assexuado","habitats":["floresta","pantano"],"catchRate":6,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":10,"ataqueEspecial":10,"defesaEspecial":13,"velocidade":4}},

  // Família Chien-Pao
  {"dexNumber":1002,"nome":"Chien-Pao","tipos":["Noturno","Gelo"],"altura":1.9,"peso":152.2,"genero":"assexuado","habitats":["tundra","artico"],"catchRate":6,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":13,"defesa":8,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":13}},

  // Família Ting-Lu
  {"dexNumber":1003,"nome":"Ting-Lu","tipos":["Noturno","Terra"],"altura":2.7,"peso":699.7,"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":6,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":16,"ataque":11,"defesa":14,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":4}},

  // Família Chi-Yu
  {"dexNumber":1004,"nome":"Chi-Yu","tipos":["Noturno","Fogo"],"altura":0.4,"peso":4.9,"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":6,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":9,"defesa":8,"ataqueEspecial":14,"defesaEspecial":11,"velocidade":10}},

  // Família Roaring Moon
  {"dexNumber":1005,"nome":"Roaring Moon","tipos":["Dragão","Noturno"],"altura":2.0,"peso":380.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":14,"defesa":9,"ataqueEspecial":7,"defesaEspecial":8,"velocidade":12}},

  // Família Iron Valiant
  {"dexNumber":1006,"nome":"Iron Valiant","tipos":["Fada","Lutador"],"altura":1.4,"peso":35.0,"genero":"assexuado","habitats":["caverna","montanha","ruina"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":13,"defesa":9,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":11}},

  // Família Koraidon
  {"dexNumber":1007,"nome":"Koraidon","tipos":["Lutador","Dragão"],"altura":2.5,"peso":303.0,"genero":"assexuado","habitats":["montanha","pradaria","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":13,"defesa":9,"ataqueEspecial":8,"defesaEspecial":8,"velocidade":13}},

  // Família Miraidon
  {"dexNumber":1008,"nome":"Miraidon","tipos":["Elétrico","Dragão"],"altura":3.5,"peso":240.0,"genero":"assexuado","habitats":["montanha","pradaria","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":8,"defesa":8,"ataqueEspecial":13,"defesaEspecial":9,"velocidade":13}},

  // Família Walking Wake
  {"dexNumber":1009,"nome":"Walking Wake","tipos":["Água","Dragão"],"altura":3.5,"peso":280.0,"genero":"assexuado","habitats":["agua_doce","oceano"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":8,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":11}},

  // Família Iron Leaves
  {"dexNumber":1010,"nome":"Iron Leaves","tipos":["Planta","Psíquico"],"altura":1.5,"peso":125.0,"genero":"assexuado","habitats":["floresta","pradaria"],"catchRate":10,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":9,"ataqueEspecial":10,"defesaEspecial":8,"velocidade":11}},

  // Família Archaludon (evolução de Duraludon)
  {"dexNumber":1018,"nome":"Archaludon","tipos":["Aço","Dragão"],"altura":2.0,"peso":60.0,"genero":"50_50","habitats":["montanha","cidade","ruina"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":10,"defesa":13,"ataqueEspecial":11,"defesaEspecial":8,"velocidade":6}},

  // Família Hydrapple (evolução de Dipplin)
  {"dexNumber":1019,"nome":"Hydrapple","tipos":["Planta","Dragão"],"altura":1.8,"peso":93.0,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":8,"defesa":10,"ataqueEspecial":12,"defesaEspecial":9,"velocidade":4}},

  // Família Gouging Fire (Paradox Pokémon)
  {"dexNumber":1020,"nome":"Gouging Fire","tipos":["Fogo","Dragão"],"altura":3.5,"peso":590.0,"genero":"assexuado","habitats":["montanha","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":11,"ataque":14,"defesa":11,"ataqueEspecial":7,"defesaEspecial":9,"velocidade":8}},

  // Família Raging Bolt (Paradox Pokémon)
  {"dexNumber":1021,"nome":"Raging Bolt","tipos":["Elétrico","Dragão"],"altura":5.2,"peso":480.0,"genero":"assexuado","habitats":["montanha","pradaria"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":12,"ataque":9,"defesa":10,"ataqueEspecial":14,"defesaEspecial":8,"velocidade":7}},

  // Família Iron Boulder (Paradox Pokémon)
  {"dexNumber":1022,"nome":"Iron Boulder","tipos":["Pedra","Psíquico"],"altura":1.5,"peso":162.5,"genero":"assexuado","habitats":["montanha","caverna"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":13,"defesa":12,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":11}},

  // Família Iron Crown (Paradox Pokémon)
  {"dexNumber":1023,"nome":"Iron Crown","tipos":["Aço","Psíquico"],"altura":1.6,"peso":156.0,"genero":"assexuado","habitats":["montanha","caverna"],"catchRate":30,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":11,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":9}},

  // Família Terapagos
  {"dexNumber":1024,"nome":"Terapagos","tipos":["Normal"],"altura":0.2,"peso":6.5,"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":7,"defesa":7,"ataqueEspecial":9,"defesaEspecial":7,"velocidade":6}},

  // Forma Terastal de Terapagos
  {"dexNumber":10276,"nome":"Terapagos Terastal","tipos":["Normal"],"altura":1.7,"peso":77.0,"genero":"assexuado","habitats":["montanha","caverna","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":10,"ataque":9,"defesa":10,"ataqueEspecial":11,"defesaEspecial":10,"velocidade":7}},
  // Forma Estelar de Terapagos
  {"dexNumber":10277,"nome":"Terapagos Estelar","tipos":["Normal"],"altura":1.7,"peso":77.0,"genero":"assexuado","habitats":["extradimensional"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":16,"ataque":12,"defesa":12,"ataqueEspecial":15,"defesaEspecial":13,"velocidade":9}},
  
  //Familia Pecharunt
  {"dexNumber":1025,"nome":"Pecharunt","tipos":["Veneno","Fantasma"],"altura":0.3,"peso":3.1,"genero":"assexuado","habitats":["floresta","cidade"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":9,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":8}},

  // Novas formas/evoluções da DLC
  {"dexNumber":1011,"nome":"Dipplin","tipos":["Planta","Dragão"],"altura":0.4,"peso":4.4,"genero":"50_50","habitats":["floresta","pradaria"],"catchRate":45,"baseExp":50,"evolucao":1012,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":8,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":4}},

  {"dexNumber":1012,"nome":"Poltchageist","tipos":["Fantasma","Planta"],"altura":0.1,"peso":1.1,"genero":"assexuado","habitats":["floresta","cidade","ruina"],"catchRate":45,"baseExp":50,"evolucao":1021,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":4,"ataque":4,"defesa":5,"ataqueEspecial":5,"defesaEspecial":6,"velocidade":3}},

  {"dexNumber":1013,"nome":"Sinistcha","tipos":["Fantasma","Planta"],"altura":0.2,"peso":2.2,"genero":"assexuado","habitats":["floresta","cidade","ruina"],"catchRate":60,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":7,"ataque":6,"defesa":7,"ataqueEspecial":12,"defesaEspecial":10,"velocidade":7}},

  {"dexNumber":1014,"nome":"Okidogi","tipos":["Veneno","Lutador"],"altura":1.8,"peso":92.0,"genero":"100_0","habitats":["montanha","pradaria","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":12,"defesa":10,"ataqueEspecial":6,"defesaEspecial":8,"velocidade":8}},

  {"dexNumber":1015,"nome":"Munkidori","tipos":["Veneno","Psíquico"],"altura":1.0,"peso":12.2,"genero":"100_0","habitats":["floresta","montanha","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":7,"defesa":6,"ataqueEspecial":12,"defesaEspecial":8,"velocidade":11}},

  {"dexNumber":1016,"nome":"Fezandipiti","tipos":["Veneno","Fada"],"altura":1.4,"peso":30.1,"genero":"0_100","habitats":["floresta","montanha","ruina"],"catchRate":0,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":9,"ataque":8,"defesa":7,"ataqueEspecial":8,"defesaEspecial":11,"velocidade":9}},

  {"dexNumber":1017,"nome":"Ogerpon","tipos":["Planta"],"altura":1.2,"peso":39.8,"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},
  
  // Formas Ogerpon
  {"dexNumber":10273,"nome":"Ogerpon Máscara de Água","tipos":["Planta","Água"],"altura":1.2,"peso":39.8,"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":10,"ataqueEspecial":7,"defesaEspecial":10,"velocidade":10}},
  {"dexNumber":10274,"nome":"Ogerpon Máscara de Fogo","tipos":["Planta","Fogo"],"altura":1.2,"peso":39.8,"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":14,"defesa":8,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},
  {"dexNumber":10275,"nome":"Ogerpon Máscara de Pedra","tipos":["Planta","Pedra"],"altura":1.2,"peso":39.8,"genero":"assexuado","habitats":["floresta","montanha","ruina"],"catchRate":5,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":12,"defesa":12,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":10}},

  // FORMAS DE PALDEA

  // Família Tauros de Paldea (Combat Breed)
  {"dexNumber":10250,"nome":"Tauros de Paldea","tipos":["Lutador"],"altura":1.4,"peso":88.4,"genero":"100_0","habitats":["pradaria","montanha"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":9,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":11}},

  // Família Tauros de Paldea (Blaze Breed) - Fogo
  {"dexNumber":10251,"nome":"Tauros de Paldea (Chama)","tipos":["Lutador","Fogo"],"altura":1.4,"peso":85.0,"genero":"100_0","habitats":["pradaria","montanha"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":9,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":11}},

  // Família Tauros de Paldea (Aqua Breed) - Água
  {"dexNumber":10252,"nome":"Tauros de Paldea (Água)","tipos":["Lutador","Água"],"altura":1.4,"peso":110.0,"genero":"100_0","habitats":["pradaria","montanha"],"catchRate":45,"baseExp":50,"evolucao":null,"evolucaoNivel":null,"evolucaoItem":null,"statusBasais":{"saude":8,"ataque":11,"defesa":9,"ataqueEspecial":7,"defesaEspecial":7,"velocidade":11}},

  // Família Wooper de Paldea
  {"dexNumber":10253,"nome":"Wooper de Paldea","tipos":["Veneno","Terra"],"altura":0.4,"peso":11.0,"genero":"50_50","habitats":["pantano","agua_doce"],"catchRate":255,"baseExp":50,"evolucao":980,"evolucaoNivel":20,"evolucaoItem":null,"statusBasais":{"saude":6,"ataque":5,"defesa":5,"ataqueEspecial":3,"defesaEspecial":3,"velocidade":2}}

];

export default pokedex;
export const POKEMON_DIET_MAP = {
  'Bulbassauro': 'Fotossintetizante e Herbívoro',
  'Ivyssauro': 'Fotossintetizante e Onívoro',
  'Venussauro': 'Fotossintetizante e Onívoro',
  'Charmander': 'Herbívoro',
  'Charmeleon': 'Carnívoro',
  'Charizard': 'Carnívoro',
  'Squirtle': 'Herbívoro',
  'Wartortle': 'Onívoro',
  'Blastoise': 'Onívoro',
  'Caterpie': 'Herbívoro',
  'Metapod': 'Autônomo',
  'Butterfree': 'Herbívoro',
  'Weedle': 'Herbívoro',
  'Kakuna': 'Autônomo',
  'Beedrill': 'Herbívoro',
  'Pidgey': 'Herbívoro',
  'Pidgeotto': 'Carnívoro',
  'Pidgeot': 'Carnívoro',
  'Rattata': 'Onívoro',
  'Raticate': 'Onívoro',
  'Spearow': 'Onívoro',
  'Ekans': 'Carnívoro',
  'Arbok': 'Carnívoro',
  'Pikachu': 'Herbívoro',
  'Raichu': 'Herbívoro',
  'Sandshrew': 'Herbívoro',
  'Nidoran F': 'Herbívoro',
  'Nidorina': 'Herbívoro',
  'Nidoqueen': 'Onívoro',
  'Nidoran M': 'Herbívoro',
  'Nidorino': 'Onívoro',
  'Nidoking': 'Onívoro',
  'Clefairy': 'Herbívoro',
  'Clefable': 'Herbívoro',
  'Vulpix': 'Herbívoro',
  'Ninetales': 'Onívoro',
  'Jigglypuff': 'Herbívoro',
  'Wigglytuff': 'Herbívoro',
  'Zubat': 'Carnívoro',
  'Golbat': 'Carnívoro',
  'Oddish': 'Fotossintetizante',
  'Gloom': 'Fotossintetizante',
  'Vileplume': 'Fotossintetizante',
  'Paras': 'Fotossintetizante e Herbívoro',
  'Parasect': 'Fotossintetizante',
  'Venonat': 'Herbívoro',
  'Venomoth': 'Herbívoro',
  'Diglett': 'Herbívoro',
  'Dugtrio': 'Herbívoro',
  'Meowth': 'Carnívoro',
  'Persian': 'Carnívoro',
  'Psyduck': 'Herbívoro',
  'Golduck': 'Onívoro',
  'Mankey': 'Onívoro',
  'Primeape': 'Onívoro',
  'Growlithe': 'Carnívoro',
  'Arcanine': 'Carnívoro',
  'Poliwag': 'Herbívoro',
  'Poliwhirl': 'Herbívoro',
  'Poliwrath': 'Herbívoro',
  'Abra': 'Onívoro',
  'Kadabra': 'Onívoro',
  'Alakazam': 'Onívoro',
  'Machop': 'Onívoro',
  'Machoke': 'Onívoro',
  'Machamp': 'Onívoro',
  'Bellsprout': 'Fotossintetizante',
  'Weepinbell': 'Carnívoro e Fotossintetizante',
  'Victreebel': 'Carnívoro e Fotossintetizante',
  'Tentacool': 'Carnívoro',
  'Tentacruel': 'Carnívoro',
  'Geodude': 'Minerávoro',
  'Graveler': 'Minerávoro',
  'Golem': 'Minerávoro',
  'Ponyta': 'Herbívoro',
  'Rapidash': 'Herbívoro',
  'Slowpoke': 'Herbívoro',
  'Slowbro': 'Herbívoro',
  'Magnemite': 'Eletrizante',
  'Magneton': 'Eletrizante',
  "Farfetch'd": 'Herbívoro',
  'Doduo': 'Herbívoro',
  'Dodrio': 'Herbívoro',
  'Seel': 'Carnívoro',
  'Dewgong': 'Carnívoro',
  'Grimer': 'Minerávoro',
  'Muk': 'Minerávoro',
  'Shellder': 'Herbívoro',
  'Cloyster': 'Herbívoro',
  'Gastly': 'Autônomo',
  'Haunter': 'Autônomo',
  'Gengar': 'Autônomo',
  'Onix': 'Minerávoro',
  'Drowzee': 'Herbívoro',
  'Hypno': 'Herbívoro',
  'Krabby': 'Carnívoro',
  'Kingler': 'Carnívoro',
  'Voltorb': 'Eletrizante',
  'Electrode': 'Eletrizante',
  'Exeggcute': 'Fotossintetizante',
  'Exeggutor': 'Fotossintetizante',
  'Cubone': 'Herbívoro',
  'Marowak': 'Herbívoro',
  'Hitmonlee': 'Onívoro',
  'Hitmonchan': 'Onívoro',
  'Lickitung': 'Onívoro',
  'Koffing': 'Autônomo',
  'Weezing': 'Autônomo',
  'Rhyhorn': 'Herbívoro',
  'Rydon': 'Herbívoro',
  'Chansey': 'Herbívoro',
  'Tangela': 'Fotossintetizante',
  'Kangaskhan': 'Herbívoro',
  'Horsea': 'Herbívoro',
  'Seadra': 'Herbívoro',
  'Goldeen': 'Herbívoro',
  'Seaking': 'Herbívoro',
  'Staryu': 'Herbívoro',
  'Starmie': 'Herbívoro',
  'Mr. Mime': 'Onívoro',
  'Scyther': 'Carnívoro',
  'Jynx': 'Onívoro',
  'Electabuzz': 'Eletrizante e Onívoro',
  'Magmar': 'Onívoro',
  'Pinsir': 'Herbívoro',
  'Tauros': 'Herbívoro',
  'Magikarp': 'Herbívoro',
  'Gyarados': 'Carnívoro',
  'Lapras': 'Onívoro',
  'Ditto': 'Herbívoro',
  'Eevee': 'Herbívoro',
  'Vaporeon': 'Onívoro',
  'Jolteon': 'Onívoro',
  'Flareon': 'Onívoro',
  'Porygon': 'Autônomo',
  'Omanyte': 'Herbívoro',
  'Omastar': 'Onívoro',
  'Kabuto': 'Herbívoro',
  'Kabutops': 'Onívoro',
  'Aerodactyl': 'Carnívoro',
  'Snorlax': 'Onívoro',
  'Articuno': 'Onívoro',
  'Zapdos': 'Onívoro',
  'Moltres': 'Onívoro',
  'Dratini': 'Onívoro',
  'Dragonair': 'Onívoro',
  'Dragonite': 'Onívoro',
  'Mewtwo': 'Onívoro',
  'Mew': 'Onívoro',
  'Chikorita': 'Fotossintetizante e Herbívoro',
  'Bayleef': 'Fotossintetizante e Herbívoro',
  'Meganium': 'Fotossintetizante e Herbívoro',
  'Cyndaquil': 'Herbívoro',
  'Quilava': 'Carnívoro',
  'Typhlosion': 'Carnívoro',
  'Totodile': 'Carnívoro',
  'Croconaw': 'Carnívoro',
  'Feraligatr': 'Carnívoro',
  'Sentret': 'Herbívoro',
  'Furret': 'Herbívoro',
  'Hoothoot': 'Herbívoro',
  'Noctowl': 'Carnívoro',
  'Ledyba': 'Herbívoro',
  'Ledian': 'Herbívoro',
  'Spinarak': 'Carnívoro',
  'Ariados': 'Carnívoro',
  'Crobat': 'Carnívoro',
  'Chinchou': 'Herbívoro',
  'Lanturn': 'Herbívoro',
  'Pichu': 'Herbívoro',
  'Cleffa': 'Herbívoro',
  'Igglybuff': 'Herbívoro',
  'Togepi': 'Herbívoro',
  'Togetic': 'Herbívoro',
  'Natu': 'Herbívoro',
  'Xatu': 'Herbívoro',
  'Mareep': 'Herbívoro',
  'Flaaffy': 'Herbívoro',
  'Ampharos': 'Herbívoro',
  'Bellossom': 'Fotossintetizante',
  'Marill': 'Herbívoro',
  'Azumarill': 'Herbívoro',
  'Sudowoodo': 'Fotossintetizante',
  'Politoed': 'Herbívoro',
  'Hoppip': 'Fotossintetizante',
  'Skiploom': 'Fotossintetizante',
  'Jumpluff': 'Fotossintetizante',
  'Aipom': 'Onívoro',
  'Sunkern': 'Fotossintetizante',
  'Sunflora': 'Fotossintetizante',
  'Yanma': 'Carnívoro',
  'Wooper': 'Herbívoro',
  'Quagsire': 'Herbívoro',
  'Espeon': 'Onívoro',
  'Umbreon': 'Onívoro',
  'Murkrow': 'Onívoro',
  'Slowking': 'Herbívoro',
  'Misdreavus': 'Autônomo',
  'Unown': 'Autônomo',
  'Wobbuffet': 'Herbívoro',
  'Girafarig': 'Herbívoro',
  'Pineco': 'Herbívoro',
  'Forretress': 'Herbívoro',
  'Dunsparce': 'Herbívoro',
  'Gligar': 'Carnívoro',
  'Steelix': 'Minerávoro',
  'Snubbull': 'Carnívoro',
  'Granbull': 'Carnívoro',
  'Qwilfish': 'Herbívoro',
  'Scizor': 'Carnívoro',
  'Shuckle': 'Herbívoro',
  'Heracross': 'Herbívoro',
  'Sneasel': 'Onívoro',
  'Teddiursa': 'Onívoro',
  'Ursaring': 'Onívoro',
  'Slugma': 'Herbívoro',
  'Magcargo': 'Herbívoro',
  'Swinub': 'Herbívoro',
  'Piloswine': 'Herbívoro',
  'Corsola': 'Fotossintetizante',
  'Remoraid': 'Herbívoro',
  'Octillery': 'Onívoro',
  'Delibird': 'Herbívoro',
  'Mantine': 'Onívoro',
  'Skarmory': 'Carnívoro',
  'Houndour': 'Carnívoro',
  'Houndoom': 'Carnívoro',
  'Kingdra': 'Herbívoro',
  'Phanpy': 'Herbívoro',
  'Donphan': 'Herbívoro',
  'Porygon2': 'Autônomo',
  'Stantler': 'Herbívoro',
  'Smeargle': 'Onívoro',
  'Tyrogue': 'Onívoro',
  'Hitmontop': 'Onívoro',
  'Smoochum': 'Onívoro',
  'Elekid': 'Eletrizante e Herbívoro',
  'Magby': 'Herbívoro',
  'Miltank': 'Herbívoro',
  'Blissey': 'Herbívoro',
  'Raikou': 'Onívoro',
  'Entei': 'Onívoro',
  'Suicune': 'Onívoro',
  'Larvitar': 'Minerávoro',
  'Pupitar': 'Minerávoro',
  'Tyranitar': 'Carnívoro e Minerávoro',
  'Lugia': 'Onívoro',
  'Ho-oh': 'Onívoro',
  'Celebi': 'Fotossintetizante',
  'Treecko': 'Herbívoro',
  'Grovyle': 'Herbívoro',
  'Sceptile': 'Onívoro',
  'Torchic': 'Herbívoro',
  'Combusken': 'Onívoro',
  'Blaziken': 'Onívoro',
  'Mudkip': 'Herbívoro',
  'Marshtomp': 'Herbívoro',
  'Swampert': 'Herbívoro',
  'Poochyena': 'Carnívoro',
  'Mightyena': 'Carnívoro',
  'Zigzagoon': 'Herbívoro',
  'Linoone': 'Onívoro',
  'Wurmple': 'Herbívoro',
  'Silcoon': 'Autônomo',
  'Beautifly': 'Herbívoro',
  'Cascoon': 'Autônomo',
  'Dustox': 'Herbívoro',
  'Lotad': 'Herbívoro',
  'Lombre': 'Herbívoro',
  'Ludicolo': 'Herbívoro',
  'Seedot': 'Herbívoro',
  'Nuzleaf': 'Herbívoro',
  'Shiftry': 'Herbívoro',
  'Taillow': 'Onívoro',
  'Swellow': 'Carnívoro',
  'Wingull': 'Onívoro',
  'Pelipper': 'Onívoro',
  'Ralts': 'Onívoro',
  'Kirlia': 'Onívoro',
  'Gardevoir': 'Onívoro',
  'Surskit': 'Herbívoro',
  'Masquerain': 'Herbívoro',
  'Shroomish': 'Fotossintetizante',
  'Breloom': 'Fotossintetizante e Herbívoro',
  'Slakoth': 'Herbívoro',
  'Vigoroth': 'Herbívoro',
  'Slaking': 'Onívoro',
  'Nincada': 'Herbívoro',
  'Ninjask': 'Herbívoro',
  'Shedinja': 'Autônomo',
  'Whismur': 'Herbívoro',
  'Loudred': 'Herbívoro',
  'Exploud': 'Herbívoro',
  'Makuhita': 'Onívoro',
  'Hariyama': 'Onívoro',
  'Azurill': 'Herbívoro',
  'Nosepass': 'Minerávoro',
  'Skitty': 'Onívoro',
  'Delcatty': 'Onívoro',
  'Sableye': 'Minerávoro',
  'Mawile': 'Carnívoro',
  'Aron': 'Minerávoro',
  'Lairon': 'Minerávoro',
  'Aggron': 'Minerávoro',
  'Meditite': 'Onívoro',
  'Medicham': 'Onívoro',
  'Electrike': 'Carnívoro',
  'Manectric': 'Carnívoro',
  'Plusle': 'Herbívoro',
  'Minun': 'Herbívoro',
  'Volbeat': 'Herbívoro',
  'Illumise': 'Herbívoro',
  'Roselia': 'Fotossintetizante',
  'Gulpin': 'Onívoro',
  'Swalot': 'Onívoro',
  'Carvanha': 'Carnívoro',
  'Sharpedo': 'Carnívoro',
  'Wailmer': 'Herbívoro',
  'Wailord': 'Herbívoro',
  'Numel': 'Herbívoro',
  'Camerupt': 'Herbívoro',
  'Torkoal': 'Herbívoro',
  'Spoink': 'Herbívoro',
  'Grumpig': 'Herbívoro',
  'Spinda': 'Herbívoro',
  'Trapinch': 'Carnívoro',
  'Vibrava': 'Carnívoro',
  'Flygon': 'Carnívoro',
  'Cacnea': 'Fotossintetizante',
  'Cacturne': 'Fotossintetizante',
  'Swablu': 'Herbívoro',
  'Altaria': 'Herbívoro',
  'Zangoose': 'Carnívoro',
  'Seviper': 'Carnívoro',
  'Lunatone': 'Fotossintetizante',
  'Solrock': 'Fotossintetizante',
  'Barboach': 'Herbívoro',
  'Whiscash': 'Herbívoro',
  'Corphish': 'Carnívoro',
  'Crawdaunt': 'Carnívoro',
  'Baltoy': 'Minerávoro',
  'Claydol': 'Minerávoro',
  'Lileep': 'Fotossintetizante',
  'Cradily': 'Fotossintetizante',
  'Anorith': 'Onívoro',
  'Armaldo': 'Onívoro',
  'Feebas': 'Herbívoro',
  'Milotic': 'Onívoro',
  'Castform': 'Fotossintetizante',
  'Kecleon': 'Herbívoro',
  'Shuppet': 'Autônomo',
  'Banette': 'Autônomo',
  'Duskull': 'Autônomo',
  'Dusclops': 'Autônomo',
  'Tropius': 'Fotossintetizante e Herbívoro',
  'Chimecho': 'Herbívoro',
  'Absol': 'Onívoro',
  'Wynaut': 'Herbívoro',
  'Snorunt': 'Herbívoro',
  'Glalie': 'Herbívoro',
  'Spheal': 'Herbívoro',
  'Sealeo': 'Onívoro',
  'Walrein': 'Onívoro',
  'Clamperl': 'Herbívoro',
  'Huntail': 'Carnívoro',
  'Gorebyss': 'Herbívoro',
  'Relicanth': 'Herbívoro',
  'Luvdisc': 'Herbívoro',
  'Bagon': 'Carnívoro',
  'Shelgon': 'Carnívoro',
  'Salamence': 'Carnívoro',
  'Beldum': 'Onívoro',
  'Metang': 'Onívoro',
  'Metagross': 'Onívoro',
  'Regirock': 'Autônomo',
  'Regice': 'Autônomo',
  'Registeel': 'Autônomo',
  'Latias': 'Onívoro',
  'Latios': 'Onívoro',
  'Kyogre': 'Onívoro',
  'Groudon': 'Onívoro',
  'Rayquaza': 'Onívoro',
  'Jirachi': 'Autônomo',
  'Deoxys': 'Autônomo',
  'Turtwig': 'Fotossintetizante e Herbívoro',
  'Grotle': 'Fotossintetizante e Herbívoro',
  'TorTerra': 'Fotossintetizante e Herbívoro',
  'Chimchar': 'Onívoro',
  'Monferno': 'Onívoro',
  'Infernape': 'Onívoro',
  'Piplup': 'Herbívoro',
  'Prinplup': 'Onívoro',
  'Empoleon': 'Onívoro',
  'Starly': 'Herbívoro',
  'Staravia': 'Carnívoro',
  'Staraptor': 'Carnívoro',
  'Bidoof': 'Herbívoro',
  'Bibarel': 'Herbívoro',
  'Kricketot': 'Herbívoro',
  'Kricketune': 'Herbívoro',
  'Shinx': 'Carnívoro',
  'Luxio': 'Carnívoro',
  'Luxray': 'Carnívoro',
  'Budew': 'Fotossintetizante',
  'Roserade': 'Fotossintetizante',
  'Cranidos': 'Herbívoro',
  'Rampardos': 'Herbívoro',
  'Shieldon': 'Herbívoro',
  'Bastiodon': 'Herbívoro',
  'Burmy': 'Herbívoro',
  'Wormadam': 'Herbívoro',
  'Mothim': 'Herbívoro',
  'Combee': 'Herbívoro',
  'Vespiquen': 'Herbívoro',
  'Pachirisu': 'Herbívoro',
  'Buizel': 'Onívoro',
  'Floatzel': 'Onívoro',
  'Cherubi': 'Fotossintetizante',
  'Cherrim': 'Fotossintetizante',
  'Shellos': 'Herbívoro',
  'Gastrodon': 'Herbívoro',
  'Ambipom': 'Onívoro',
  'Drifloon': 'Autônomo',
  'Drifblim': 'Autônomo',
  'Buneary': 'Herbívoro',
  'Lopunny': 'Herbívoro',
  'Mismagius': 'Autônomo',
  'Honchkrow': 'Onívoro',
  'Glameow': 'Carnívoro',
  'Purugly': 'Carnívoro',
  'Chingling': 'Herbívoro',
  'Stunky': 'Herbívoro',
  'Skuntank': 'Herbívoro',
  'Bronzor': 'Autônomo',
  'Bronzong': 'Autônomo',
  'Bonsly': 'Fotossintetizante',
  'Mime Jr.': 'Onívoro',
  'Happiny': 'Herbívoro',
  'Chatot': 'Onívoro',
  'Spiritomb': 'Autônomo',
  'Gible': 'Carnívoro',
  'Gabite': 'Carnívoro',
  'Garchomp': 'Carnívoro',
  'Munchlax': 'Onívoro',
  'Riolu': 'Onívoro',
  'Lucario': 'Onívoro',
  'Hippopotas': 'Herbívoro',
  'Hippowdon': 'Herbívoro',
  'Skorupi': 'Carnívoro',
  'Drapion': 'Carnívoro',
  'Croagunk': 'Herbívoro',
  'Toxicroak': 'Herbívoro',
  'Carnivine': 'Carnívoro e Fotossintetizante',
  'Finneon': 'Herbívoro',
  'Lumineon': 'Herbívoro',
  'Mantyke': 'Onívoro',
  'Snover': 'Fotossintetizante',
  'Abomasnow': 'Fotossintetizante',
  'Weavile': 'Onívoro',
  'Magnezone': 'Eletrizante',
  'Lickilicky': 'Onívoro',
  'Rhyperior': 'Herbívoro',
  'Tangrowth': 'Fotossintetizante',
  'Electivire': 'Eletrizante e Onívoro',
  'Magmortar': 'Onívoro',
  'Togekiss': 'Herbívoro',
  'Yanmega': 'Carnívoro',
  'Leafeon': 'Fotossintetizante e Herbívoro',
  'Glaceon': 'Onívoro',
  'Gliscor': 'Carnívoro',
  'Mamoswine': 'Herbívoro',
  'Porygon Z': 'Autônomo',
  'Gallade': 'Onívoro',
  'Probopass': 'Minerávoro',
  'Dusknoir': 'Autônomo',
  'Froslass': 'Autônomo',
  'Rotom': 'Eletrizante',
  'Uxie': 'Herbívoro',
  'Mesprit': 'Herbívoro',
  'Azelf': 'Herbívoro',
  'Dialga': 'Onívoro',
  'Palkia': 'Onívoro',
  'Heatran': 'Minerávoro',
  'Regigigas': 'Autônomo',
  'Giratina': 'Onívoro',
  'Cresselia': 'Herbívoro',
  'Phione': 'Herbívoro',
  'Manaphy': 'Herbívoro',
  'Darkrai': 'Autônomo',
  'Shaymin': 'Fotossintetizante',
  'Arceus (Placa Fada)': 'Autônomo',
  'Victini': 'Herbívoro',
  'Snivy': 'Herbívoro',
  'Servine': 'Fotossintetizante e Herbívoro',
  'Serperior': 'Fotossintetizante e Herbívoro',
  'Tepig': 'Herbívoro',
  'Pignite': 'Herbívoro',
  'Emboar': 'Onívoro',
  'Oshawott': 'Herbívoro',
  'Dewott': 'Herbívoro',
  'Samurott': 'Herbívoro',
  'Patrat': 'Carnívoro',
  'Watchog': 'Carnívoro',
  'Lillipup': 'Onívoro',
  'Herdier': 'Onívoro',
  'Stoutland': 'Onívoro',
  'Pansage': 'Onívoro',
  'Simisage': 'Onívoro',
  'Pansear': 'Onívoro',
  'Simisear': 'Onívoro',
  'Panpour': 'Onívoro',
  'Simipour': 'Onívoro',
  'Munna': 'Herbívoro',
  'Musharna': 'Herbívoro',
  'Pidove': 'Herbívoro',
  'Tranquill': 'Carnívoro',
  'Unfezant': 'Carnívoro',
  'Blitzle': 'Herbívoro',
  'Zebstrika': 'Herbívoro',
  'Roggenrola': 'Minerávoro',
  'Boldore': 'Minerávoro',
  'Gigalith': 'Minerávoro',
  'Woobat': 'Herbívoro',
  'Swoobat': 'Herbívoro',
  'Drilbur': 'Herbívoro',
  'Excadrill': 'Herbívoro',
  'Audino': 'Herbívoro',
  'Timburr': 'Onívoro',
  'Gurdurr': 'Onívoro',
  'Conkeldurr': 'Onívoro',
  'Tympole': 'Herbívoro',
  'Palpitoad': 'Herbívoro',
  'Seismitoad': 'Herbívoro',
  'Throh': 'Onívoro',
  'Sawk': 'Onívoro',
  'Sewaddle': 'Herbívoro',
  'Swadloon': 'Herbívoro',
  'Leavanny': 'Herbívoro',
  'Venipede': 'Herbívoro',
  'Whirlipede': 'Herbívoro',
  'Scolipede': 'Herbívoro',
  'Cottonee': 'Fotossintetizante',
  'Whimsicott': 'Fotossintetizante',
  'Petilil': 'Fotossintetizante',
  'Lilligant': 'Fotossintetizante',
  'Basculin': 'Herbívoro',
  'Sandile': 'Carnívoro',
  'Krokorok': 'Carnívoro',
  'Krookodile': 'Carnívoro',
  'Darumaka': 'Herbívoro',
  'Darmanitan': 'Onívoro',
  'Maractus': 'Fotossintetizante',
  'Dwebble': 'Herbívoro',
  'Crustle': 'Herbívoro',
  'Scraggy': 'Herbívoro',
  'Scrafty': 'Herbívoro',
  'Sigilyph': 'Herbívoro',
  'Yamask': 'Minerávoro',
  'Cofagrigus': 'Minerávoro',
  'Tirtouga': 'Herbívoro',
  'CarrAçosta': 'Herbívoro',
  'Archen': 'Carnívoro',
  'Archeops': 'Carnívoro',
  'Trubbish': 'Minerávoro',
  'Garbodor': 'Minerávoro',
  'Zorua': 'Herbívoro',
  'Zoroark': 'Onívoro',
  'Minccino': 'Herbívoro',
  'Cinccino': 'Herbívoro',
  'Gothita': 'Herbívoro',
  'Gothorita': 'Herbívoro',
  'Gothitelle': 'Herbívoro',
  'Solosis': 'Herbívoro',
  'Duosion': 'Onívoro',
  'Reuniclus': 'Onívoro',
  'Ducklett': 'Herbívoro',
  'Swanna': 'Herbívoro',
  'Vanillite': 'Minerávoro',
  'Vanillish': 'Minerávoro',
  'Vanilluxe': 'Minerávoro',
  'Deerling': 'Herbívoro',
  'Sawsbuck': 'Herbívoro',
  'Emolga': 'Herbívoro',
  'Karrablast': 'Herbívoro',
  'Escavalier': 'Herbívoro',
  'Foongus': 'Fotossintetizante',
  'Amoonguss': 'Fotossintetizante',
  'Frillish': 'Carnívoro',
  'Jellicent': 'Carnívoro',
  'Alomomola': 'Herbívoro',
  'Joltik': 'Herbívoro',
  'Galvantula': 'Carnívoro',
  'Ferroseed': 'Fotossintetizante e Minerávoro',
  'Ferrothorn': 'Fotossintetizante e Minerávoro',
  'Klink': 'Eletrizante e Minerávoro',
  'Klang': 'Eletrizante e Minerávoro',
  'Klinklang': 'Eletrizante e Minerávoro',
  'Tynamo': 'Eletrizante',
  'Eelektrik': 'Eletrizante',
  'Eelektross': 'Eletrizante',
  'Elgyem': 'Autônomo',
  'Beheeyem': 'Autônomo',
  'Litwick': 'Autônomo',
  'Lampent': 'Autônomo',
  'Chandelure': 'Autônomo',
  'Axew': 'Onívoro',
  'Fraxure': 'Onívoro',
  'Haxorus': 'Onívoro',
  'Cubchoo': 'Onívoro',
  'Beartic': 'Onívoro',
  'Cryogonal': 'Minerávoro',
  'Shelmet': 'Herbívoro',
  'Accelgor': 'Herbívoro',
  'Stunfisk': 'Herbívoro',
  'Mienfoo': 'Onívoro',
  'Mienshao': 'Onívoro',
  'Druddigon': 'Carnívoro e Minerávoro',
  'Golett': 'Minerávoro',
  'Golurk': 'Minerávoro',
  'Pawniard': 'Onívoro',
  'Bisharp': 'Onívoro',
  'Bouffalant': 'Herbívoro',
  'Rufflet': 'Carnívoro',
  'Braviary': 'Carnívoro',
  'Vullaby': 'Carnívoro',
  'Mandibuzz': 'Carnívoro',
  'Heatmor': 'Onívoro',
  'Durant': 'Carnívoro',
  'Deino': 'Carnívoro',
  'Zweilous': 'Carnívoro',
  'Hydreigon': 'Carnívoro',
  'Larvesta': 'Herbívoro',
  'Volcarona': 'Herbívoro',
  'Cobalion': 'Onívoro',
  'Terrakion': 'Onívoro',
  'Virizion': 'Onívoro',
  'Tornadus Totêmico': 'Onívoro',
  'Thundurus Totêmico': 'Onívoro',
  'Reshiram': 'Onívoro',
  'Zekrom': 'Onívoro',
  'Landorus Totêmico': 'Onívoro',
  'Kyurem': 'Onívoro',
  'Keldeo Resoluto': 'Onívoro',
  'Meloetta Dança': 'Herbívoro',
  'Genesect Disco Gelo': 'Autônomo',
  'Chespin': 'Herbívoro',
  'Quilladin': 'Herbívoro',
  'Chesnaught': 'Herbívoro',
  'Fennekin': 'Onívoro',
  'Braixen': 'Onívoro',
  'Delphox': 'Onívoro',
  'Froakie': 'Herbívoro',
  'Frogadier': 'Herbívoro',
  'Greninja': 'Herbívoro',
  'Bunnelby': 'Herbívoro',
  'Diggersby': 'Herbívoro',
  'Fletchling': 'Herbívoro',
  'Fletchinder': 'Herbívoro',
  'Talonflame': 'Herbívoro',
  'Scatterbug': 'Herbívoro',
  'Spewpa': 'Herbívoro',
  'Vivillon': 'Herbívoro',
  'Litleo': 'Carnívoro',
  'Pyroar': 'Carnívoro',
  'Flabébé': 'Herbívoro',
  'Floette': 'Herbívoro',
  'Florges': 'Herbívoro',
  'Skiddo': 'Herbívoro',
  'Gogoat': 'Herbívoro',
  'Pancham': 'Herbívoro',
  'Pangoro': 'Herbívoro',
  'Furfrou': 'Onívoro',
  'Espurr': 'Herbívoro',
  'Meowstic': 'Herbívoro',
  'Honedge': 'Autônomo',
  'Doublade': 'Autônomo',
  'Aegislash': 'Autônomo',
  'Spritzee': 'Herbívoro',
  'Aromatisse': 'Herbívoro',
  'Swirlix': 'Herbívoro',
  'Slurpuff': 'Herbívoro',
  'Inkay': 'Onívoro',
  'Malamar': 'Onívoro',
  'Binacle': 'Herbívoro',
  'Barbaracle': 'Herbívoro',
  'Skrelp': 'Herbívoro',
  'Dragalge': 'Onívoro',
  'Clauncher': 'Carnívoro',
  'Clawitzer': 'Carnívoro',
  'Helioptile': 'Eletrizante e Fotossintetizante',
  'Heliolisk': 'Eletrizante e Fotossintetizante',
  'Tyrunt': 'Carnívoro',
  'Tyrantrum': 'Carnívoro',
  'Amaura': 'Herbívoro',
  'Aurorus': 'Herbívoro',
  'Sylveon': 'Herbívoro',
  'Hawlucha': 'Onívoro',
  'Dedenne': 'Herbívoro',
  'Carbink': 'Minerávoro',
  'Goomy': 'Carnívoro',
  'Sliggoo': 'Carnívoro',
  'Goodra': 'Carnívoro',
  'Klefki': 'Autônomo',
  'Phantump': 'Fotossintetizante',
  'Trevenant': 'Fotossintetizante',
  'Pumpkaboo': 'Fotossintetizante',
  'Gourgeist': 'Fotossintetizante',
  'Bergmite': 'Minerávoro',
  'Avalugg': 'Minerávoro',
  'Noibat': 'Onívoro',
  'Noivern': 'Onívoro',
  'Xerneas': 'Herbívoro',
  'Yveltal': 'Carnívoro',
  'Zygarde 50%': 'Carnívoro',
  'Diancie': 'Minerávoro',
  'Hoopa': 'Onívoro',
  'Volcanion': 'Onívoro',
  'Rowlet': 'Fotossintetizante e Herbívoro',
  'Dartrix': 'Fotossintetizante e Herbívoro',
  'Decidueye': 'Fotossintetizante e Herbívoro',
  'Litten': 'Carnívoro',
  'Torracat': 'Carnívoro',
  'Incineroar': 'Carnívoro',
  'Popplio': 'Herbívoro',
  'Brionne': 'Onívoro',
  'Pikipek': 'Herbívoro',
  'Trumbeak': 'Herbívoro',
  'Toucannon': 'Herbívoro',
  'Yungoos': 'Carnívoro',
  'Gumshoos': 'Carnívoro',
  'Grubbin': 'Herbívoro',
  'Charjabug': 'Herbívoro',
  'Vikavolt': 'Herbívoro',
  'Crabrawler': 'Herbívoro',
  'Crabominable': 'Herbívoro',
  'Oricorio Sensu': 'Herbívoro',
  'Cutiefly': 'Herbívoro',
  'Ribombee': 'Herbívoro',
  'Rockruff': 'Carnívoro',
  'Lycanroc (Noturna)': 'Carnívoro',
  'Wishiwashi (Cardume)': 'Herbívoro',
  'Mareanie': 'Carnívoro e Minerávoro',
  'Toxapex': 'Carnívoro e Minerávoro',
  'Mudbray': 'Herbívoro',
  'Mudsdale': 'Herbívoro',
  'Dewpider': 'Carnívoro',
  'Araquanid': 'Carnívoro',
  'Fomantis': 'Fotossintetizante e Herbívoro',
  'Lurantis': 'Fotossintetizante e Herbívoro',
  'Morelull': 'Fotossintetizante',
  'Shiinotic': 'Fotossintetizante',
  'Salandit': 'Onívoro',
  'Salazzle': 'Onívoro',
  'Stufful': 'Herbívoro',
  'Bewear': 'Herbívoro',
  'Bounsweet': 'Fotossintetizante',
  'Steenee': 'Fotossintetizante',
  'Tsareena': 'Fotossintetizante',
  'Comfey': 'Fotossintetizante',
  'Oranguru': 'Herbívoro',
  'Passimian': 'Herbívoro',
  'Wimpod': 'Herbívoro',
  'Golisopod': 'Herbívoro',
  'Sandygast': 'Onívoro',
  'Palossand': 'Onívoro',
  'Pyukumuku': 'Herbívoro',
  'Type: Null': 'Onívoro',
  'Silvally Planta': 'Onívoro',
  'Minior (Núcleo)': 'Minerávoro',
  'Komala': 'Herbívoro',
  'Turtonator': 'Carnívoro e Minerávoro',
  'Togedemaru': 'Herbívoro',
  'Mimikyu Despedaçado': 'Autônomo',
  'Bruxish': 'Herbívoro',
  'Drampa': 'Herbívoro',
  'Dhelmise': 'Herbívoro e Minerávoro',
  'Jangmo-O': 'Onívoro',
  'Hakamo-O': 'Onívoro',
  'Kommo-O': 'Onívoro',
  'Tapu Koko': 'Eletrizante',
  'Tapu Lele': 'Herbívoro',
  'Tapu Bulu': 'Herbívoro',
  'Tapu Fini': 'Herbívoro',
  'Cosmog': 'Autônomo',
  'Cosmoem': 'Autônomo',
  'Solgaleo': 'Carnívoro',
  'Lunala': 'Carnívoro',
  'Nihilego': 'Onívoro',
  'Buzzwole': 'Onívoro',
  'Pheromosa': 'Onívoro',
  'Xurkitree': 'Eletrizante',
  'Celesteela': 'Minerávoro',
  'Kartana': 'Herbívoro',
  'Guzzlord': 'Onívoro',
  'Necrozma (Ultra)': 'Onívoro',
  'Magearna': 'Eletrizante',
  'Marshadow': 'Autônomo',
  'Poipole': 'Onívoro',
  'Naganadel': 'Onívoro',
  'Stakataka': 'Minerávoro',
  'Blacephalon': 'Onívoro',
  'Zeraora': 'Eletrizante',
}
