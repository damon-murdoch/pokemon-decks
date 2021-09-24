// Old Format Deck Collection
const decks = {

  // Name, Count, Missing, Price (USD)

  // 2016 Worlds
  // XY Base Set to XY Steam Siege
  "XY-STS": {
    "Night March": {
      "Pokemon": [
        ["Joltik", "PHF 26", 4, 0, 0.2],
        ["Pumpkaboo", "PHF 44", 4, 0, 0.2],
        ["Lampent", "PHF 42", 4, 0, 0.2],
        ["Shaymin Ex", "ROS 77", 0, 3, 9.0],
        ["Mew", "FCO 29", 1, 0, 2.29]
      ],
      "Supporter": [
        ["Professor Sycamore", "", 3, 0, 0.2],
        ["Lysandre", "", 2, 0, 0.2],
        ["Hex Maniac", "", 0, 2, 0.2],
        ["N (Supporter)", "", 1, 0, 0.49],
        ["Teammates", "", 1, 0, 0.2],
        ["Pokemon Ranger", "", 1, 0, 0.2],
        ["AZ (Supporter)", "", 1, 0, 0.2]
      ],
      "Item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 4, 0, 0.2],
        ["Battle Compressor", "", 4, 0, 3.79],
        ["Puzzle of Time", "", 0, 4, 0.79],
        ["Trainers' Mail", "", 0, 3, 1.0],
        ["Special Charge", "", 1, 0, 0.2],
        ["Startling Megaphone", "", 1, 0, 0.2],
        ["Target Whistle", "", 1, 0, 0.2],
        ["Escape Rope", "", 1, 0, 0.2]
      ],
      "Tool": [
        ["Fighting Fury Belt", "", 2, 0, 0.68]
      ],
      "Stadium": [
        ["Dimension Valley", "", 3, 0, 0.88]
      ],
      "Energy": [
        ["Double Colorless Energy", "", 1, 3, 0.2],
        ["Basic Psychic Energy", "", 1, 0, 0.01]
      ]
    }, 
    "Vespiquen Vileplume": { 
      "Pokemon": [
        ["Vileplume", "", 4, 0, 0.3], 
        ["Gloom", "", 4, 0, 0.22],
        ["Oddish", "", 4, 0, 0.2], 
        ["Vespiquen", "", 4, 0, 0.2],
        ["Combee", "", 4, 0, 0.2],
        ["Shaymin Ex", "ROS 77", 0, 4, 9.0]
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 0, 3, 0.2],
        ["AZ (Supporter)", 0, 1, 0.2], 
        ["Lysandre", 0, 1, 0.2], 
      ], 
      "Item": [
        ["Battle Compressor", "", 4, 0, 3.79],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 3, 1],
        ["Acro Bike", "", 3, 0, 0.34],
        ["Revitalizer", "", 0, 2, 0.2],
        ["Special Charge", "", 1, 0, 0.2]
      ], 
      "Tool": [
        ["Float Stone", "", 2, 0, 2.0]
      ], 
      "Stadium": [
        ["Forest of Giant Plants", "", 4, 0, 0.35]
      ], 
      "Energy": [
        ["Double Colorless Energy", "", 0, 4, 0.2]
      ]
    },
    "Talonflame Greninja": { 
      "Pokemon": [
        ["Talonflame", "", 0, 4, 0.62],
        ["Greninja Break", "", 3, 0, 9.99],
        ["Greninja", "BKP", "", 3, 0, 1.29],
        ["Greninja", "XY", "", 1, 0, 4.99],
        ["Frogadier", "XY", "", 4, 0, 0.2],
        ["Froakie", "XY", "", 3, 0, 0.2]
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2],
        ["N (Supporter)", "", 0, 4, 0.5],
        ["Ace Trainer", "", 1, 0, 0.2],
        ["Fisherman", "", 1, 0, 0.2],
        ["Pokemon Ranger", "", 1, 0, 0.2]
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.66],
        ["Dive Ball", "", 4, 0, 1.08],
        ["Level Ball", "", 2, 0, 0.88],
        ["Super Rod", "", 2, 0, 0.49],
        ["Battle Compressor", "", 1, 0, 3.79],
        ["Startling Megaphone", "", 1, 0, 0.35]
      ], 
      "Tool": [
        ["Bursting Balloon", "", 4, 0, 0.2]
      ], 
      "Stadium": [
        ["Rough Seas", "", 3, 0, 0.3]
      ], 
      "Energy": [
        ["Basic Water Energy", "", 8, 0, 0.01],
        ["Splash Energy", "", 2, 0, 0.2]
      ]
    },
    "Mega Audino": { 
      "Pokemon": [
        ["M Audino Ex", "", 3, 0, 2.49],
        ["Audino Ex", "", 4, 0, 2.49],
        ["Hoopa Ex", "", 0, 1, 3.3],
        ["Shaymin Ex", "", 0, 2, 9.0],
        ["Magearna Ex", "", 1, 0, 2.49],
        ["Cobalion", "", 1, 0, 0.2],
        ["Absol", "", 0, 1, 0.88],
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2],
        ["N (Supporter)", "", 0, 2, 0.49],
        ["Lysandre", "", 0, 2, 0.2],
        ["AZ (Supporter)", "", 2, 0, 0.2],
        ["Hex Maniac", "", 1, 0, 0.2],
        ["Xerosic", "", 1, 0, 0.2],
        ["Pokemon Center Lady", "", 1, 0, 0.2],
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 4, 1.00],
        ["Mega Turbo", "", 1, 0, 0.88],
        ["Escape Rope", "", 1, 0, 0.2],
        ["Super Rod", "", 1, 0, 0.49],
        ["Startling Megaphone", "", 1, 0, 0.2],
      ], 
      "Tool": [
        ["Audino Spirit Link", "", 4, 0, 0.2],
        ["Float Stone", "", 2, 0, 1.66],
      ], 
      "Stadium": [
        ["Parallel City", "", 2, 0, 0.2]
      ], 
      "Energy": [
        ["Basic Metal Energy", "", 6, 0, 0.01],
        ["Double Colorless Energy", "", 0, 4, 0.2],
      ]
    },
    "Mega Manectric": { 
      "Pokemon": [
        ["M Manectric Ex", "", 0, 3, 4.89],
        ["Manectric Ex", "", 0, 3, 2.49],
        ["Wobbufet", "", 3, 0, 0.35],
        ["Trubbish", "", 2, 0, 0.49],
        ["Garbodor", "", 2, 0, 0.49],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Hoopa Ex", "", 1, 0, 8.99],
        ["Jolteon Ex", "", 1, 0, 8.99],
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2], 
        ["N (Supporter)", "", 2, 0, 0.49],
        ["Lysandre", "", 2, 0, 0.2],
        ["Olympia", "", 1, 0, 0.2],
        ["AZ", "", 1, 0, 0.2],
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 3, 1.0],
        ["Mega Turbo", "", 0, 2, 0.88],
        ["Battle Compressor", "", 1, 0, 3.45],
      ], 
      "Tool": [
        ["Manectric Spirit Link", "", 0, 3, 0.35],
        ["Float Stone", "", 3, 0, 2.0],
      ], 
      "Stadium": [
        ["Rough Seas", "", 3, 0, 0.35]
      ], 
      "Energy": [
        ["Basic Lightning Energy", "", 6, 0, 0.01], 
        ["Basic Psychic Energy", "", 4, 0, 0.01], 
      ]
    },
    "Lucario Crobat": { 
      "Pokemon": [
        ["Lucario Ex", "", 3, 0, 8.99],
        ["Zubat", "", 4, 0, 0.2],
        ["Golbat", "", 4, 0, 0.35],
        ["Crobat", "", 3, 0, 0.59],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Carbink", "", 2, 0, 0.2],
        ["Carbink Break", "", 1, 0, 2.36],
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 3, 0, 0.2], 
        ["N (Supporter)", "", 2, 0, 0.49],
        ["Korrina", "", 2, 0, 1.28],
        ["Lysandre", "", 2, 0, 0.2],
        ["Hex Maniac", "", 2, 0, 0.2],
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.64],
        ["Trainers' Mail", "", 0, 4, 1.00],
        ["Super Scoop Up", "", 4, 0, 0.2],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Level Ball", "", 2, 0, 0.89],
      ], 
      "Tool": [

      ], 
      "Stadium": [
        ["Fighting Stadium", "", 2, 0, 0.2]
      ], 
      "Energy": [
        ["Basic Fighting Energy", "", 6, 0, 0.01],
        ["Strong Energy", "", 4, 0, 0.49]
      ]
    },
    "Water Seismitoad": { 
      "Pokemon": [
        ["Seismitoad Ex", "", 4, 0, 3.45],
        ["Manaphy Ex", "", 1, 1, 2.99],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Shaymin Ex", "", 0, 1, 8.99],
        ["Glaceon Ex", "", 1, 0, 6.99],
        ["Hoopa Ex", "", 0, 1, 3.99],
        ["Articuno", "", 0, 1, 1.25]
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["N (Supporter)", "", 3, 0, 0.49],
        ["Lysandre", "", 2, 0, 0.2],
        ["AZ (Supporter)", "", 1, 0, 0.2],
        ["Xerosic", "", 1, 0, 0.2],
        ["Team Flare Grunt", "", 1, 0, 0.2],
        ["Hex Maniac", "", 1, 0, 0.2]
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.59],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Max Elixir", "", 0, 3, 3.49],
        ["Energy Switch", "", 3, 0, 0.2]
      ], 
      "Tool": [
        ["Fighting Fury Belt", "", 3, 0, 0.59]
      ], 
      "Stadium": [
        ["Rough Seas", "", 3, 0, 0.35],
        ["Parallel City", "", 1, 0, 0.2],
      ], 
      "Energy": [
        ["Double Colorless Energy", "", 0, 4, 0.2],
        ["Basic Water Energy", "", 0, 9, 0.01],
      ]
    },
    "Volcanion": { 
      "Pokemon": [
        ["Volcanion Ex", "", 0, 4, 2.49],
        ["Volcanion", "", 1, 3, 0.99],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Hoopa Ex", "", 0, 1, 3.99],
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["N (Supporter)", "", 2, 0, 0.49],
        ["Blacksmith", "", 2, 0, 2.29],
        ["Lysandre", "", 2, 0, 0.2],
        ["Pokemon Ranger", "", 2, 0, 0.2],
      ], 
      "Item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Acro Bike", "", 4, 0, 0.2],
        ["Energy Retrieval", "", 4, 0, 0.2],
        ["Trainers' Mail", "", 0, 2, 1.0],
        ["Battle Compressor", "", 2, 0, 2.99],
      ], "Tool": [
        ["Escape Rope", "", 2, 0, 0.2],
        ["Fighting Fury Belt", "", 3, 0, 0.59]
      ], "Stadium": [

      ], "Energy": [
        ["Basic Fire Energy", "", 12, 0, 0.01],
      ]
    }
  },

  // Oceania Internationals 2017
  // XY Primal Clash to SM Base Set
  "PRC-SUM": {
    "Darkrai": { 
      "Pokemon": [
        ["Darkrai Ex","",4,0,3.5],
        ["Hoopa Ex","",1,0,3.3],
        ["Shaymin Ex","",3,0,8.99],
        ["Yveltal","",2,0,0.39]
      ], 
      "Supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["Lysandre", "", 2, 0, 0.2],
        ["N (Supporter)", "", 2, 0, 0.49],
        ["Hex Maniac", "", 1, 0, 0.2],
        ["Delinquent", "", 1, 0, 0.2]
      ], 
      "Item": [
        ["VS Seeker", "", 4, 0, 1.64],
        ["Trainers' Mail", "", 4, 0, 1.0],
        ["Ultra Ball", "", 4, 0, 0.2],
        ["Max Elixir", "", 4, 0, 3.45],
        ["Escape Rope", "", 2, 0, 0.2],
        ["Switch", "", 1, 0, 0.2],
      ], 
      "Tool": [
        ["Exp. Share", "", 4, 0, 0.2],
        ["Fighting Fury Belt", "", 4, 0, 0.59]
      ], 
      "Stadium": [
        ["Silent Lab", "", 2, 0, 0.77],
        ["Parallel City", "", 1, 0, 0.2],
      ], 
      "Energy": [
        ["Basic Darkness Energy", "", 12, 0, 0.01]
      ]
    },
    "Decidueye Vileplume": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Volcanion": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Mega Mewtwo": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Mega Rayquaza": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Mega Gardevoir": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Yveltal Garbodor": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Gyarados": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  },
  
  // Post-Rotation 2017
  // XY Breakthrough to SM Guardians Rising
  "BKT-GRI": {
    "Drampa Garbodor": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Gardevoir": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Golisopod Garbodor": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Break": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Tapu Bulu Vikavolt": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Metagross": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Ho-oh Salazzle": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Xerneas Break": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  },

  // North American Internationals 2018
  // XY Breakthrough to SM Forbidden Light
  "BKT-FLI": {
    "Buzzwole Lycanroc": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Lycanroc": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Golisopod": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Malamar Necrozma": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Garbodor": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Control": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Lucario": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Ultra Malamar": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  },

  // Pre-Puzzle Ban Expanded
  // BW Base Set to SM Forbidden Light
  "BLW-FLI": {
    "Trevenant Break": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Zoroark Sky Field": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Night March": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Sableye Control": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Seismitoad": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Buzzwole Lycanroc": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  },

  // Brisbane Regionals 2019
  // SM Ultra Prism to SM Cosmic Eclipse
  "UPR-CEC": {
    "Mewtwo & Mew": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "ADP Keldeo": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Gardevoir & Sylveon": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Pidgeotto Control": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Pikachu & Zekrom": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Reshiram & Charizard": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Malamar Spread": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Pidgeotto Blacephalon": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  },

  // Current Standard Format
  // SWSH Base Set to SWSH Evolving Skies
  "Standard": {
    "Zacian Inteleon": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    },
    "Rapid Strike Inteleon": { 
      "Pokemon": [], "Supporter": [], "Item": [], "Tool": [], "Stadium": [], "Energy": []
    }
  }
}