// Old Format Deck Collection
const decks = {

  // Name, Count, Missing, Price (USD)

  // 2016 Worlds
  // XY Base Set to XY Steam Siege
  "XY-STS": {
    "Night March": {
      "pokemon": [
        ["Joltik", "PHF 26", 4, 0, 0.2],
        ["Pumpkaboo", "PHF 44", 4, 0, 0.2],
        ["Lampent", "PHF 42", 4, 0, 0.2],
        ["Shaymin Ex", "ROS 77", 0, 3, 9.0],
        ["Mew", "FCO 29", 1, 0, 2.29]
      ],
      "supporter": [
        ["Professor Sycamore", "", 3, 0, 0.2],
        ["Lysandre", "", 2, 0, 0.2],
        ["Hex Maniac", "", 0, 2, 0.2],
        ["N (supporter)", "", 1, 0, 0.49],
        ["Teammates", "", 1, 0, 0.2],
        ["pokemon Ranger", "", 1, 0, 0.2],
        ["AZ (supporter)", "", 1, 0, 0.2]
      ],
      "item": [
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
      "tool": [
        ["Fighting Fury Belt", "", 2, 0, 0.68]
      ],
      "stadium": [
        ["Dimension Valley", "", 3, 0, 0.88]
      ],
      "energy": [
        ["Double Colorless energy", "", 1, 3, 0.2],
        ["Basic Psychic energy", "", 1, 0, 0.01]
      ]
    }, 
    "Vespiquen Vileplume": { 
      "pokemon": [
        ["Vileplume", "", 4, 0, 0.3], 
        ["Gloom", "", 4, 0, 0.22],
        ["Oddish", "", 4, 0, 0.2], 
        ["Vespiquen", "", 4, 0, 0.2],
        ["Combee", "", 4, 0, 0.2],
        ["Shaymin Ex", "ROS 77", 0, 4, 9.0]
      ], 
      "supporter": [
        ["Professor Sycamore", "", 0, 3, 0.2],
        ["AZ (supporter)", 0, 1, 0.2], 
        ["Lysandre", 0, 1, 0.2], 
      ], 
      "item": [
        ["Battle Compressor", "", 4, 0, 3.79],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 3, 1],
        ["Acro Bike", "", 3, 0, 0.34],
        ["Revitalizer", "", 0, 2, 0.2],
        ["Special Charge", "", 1, 0, 0.2]
      ], 
      "tool": [
        ["Float Stone", "", 2, 0, 2.0]
      ], 
      "stadium": [
        ["Forest of Giant Plants", "", 4, 0, 0.35]
      ], 
      "energy": [
        ["Double Colorless energy", "", 0, 4, 0.2]
      ]
    },
    "Talonflame Greninja": { 
      "pokemon": [
        ["Talonflame", "", 0, 4, 0.62],
        ["Greninja Break", "", 3, 0, 9.99],
        ["Greninja", "BKP", 3, 0, 1.29],
        ["Greninja", "XY", 1, 0, 4.99],
        ["Frogadier", "XY", 4, 0, 0.2],
        ["Froakie", "XY", 3, 0, 0.2]
      ], 
      "supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2],
        ["N (supporter)", "", 0, 4, 0.5],
        ["Ace Trainer", "", 1, 0, 0.2],
        ["Fisherman", "", 1, 0, 0.2],
        ["pokemon Ranger", "", 1, 0, 0.2]
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.66],
        ["Dive Ball", "", 4, 0, 1.08],
        ["Level Ball", "", 2, 0, 0.88],
        ["Super Rod", "", 2, 0, 0.49],
        ["Battle Compressor", "", 1, 0, 3.79],
        ["Startling Megaphone", "", 1, 0, 0.35]
      ], 
      "tool": [
        ["Bursting Balloon", "", 4, 0, 0.2]
      ], 
      "stadium": [
        ["Rough Seas", "", 3, 0, 0.3]
      ], 
      "energy": [
        ["Basic Water energy", "", 8, 0, 0.01],
        ["Splash energy", "", 2, 0, 0.2]
      ]
    },
    "Mega Audino": { 
      "pokemon": [
        ["M Audino Ex", "", 3, 0, 2.49],
        ["Audino Ex", "", 4, 0, 2.49],
        ["Hoopa Ex", "", 0, 1, 3.3],
        ["Shaymin Ex", "", 0, 2, 9.0],
        ["Magearna Ex", "", 1, 0, 2.49],
        ["Cobalion", "", 1, 0, 0.2],
        ["Absol", "", 0, 1, 0.88],
      ], 
      "supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2],
        ["N (supporter)", "", 0, 2, 0.49],
        ["Lysandre", "", 0, 2, 0.2],
        ["AZ (supporter)", "", 2, 0, 0.2],
        ["Hex Maniac", "", 1, 0, 0.2],
        ["Xerosic", "", 1, 0, 0.2],
        ["pokemon Center Lady", "", 1, 0, 0.2],
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 4, 1.00],
        ["Mega Turbo", "", 1, 0, 0.88],
        ["Escape Rope", "", 1, 0, 0.2],
        ["Super Rod", "", 1, 0, 0.49],
        ["Startling Megaphone", "", 1, 0, 0.2],
      ], 
      "tool": [
        ["Audino Spirit Link", "", 4, 0, 0.2],
        ["Float Stone", "", 2, 0, 1.66],
      ], 
      "stadium": [
        ["Parallel City", "", 2, 0, 0.2]
      ], 
      "energy": [
        ["Basic Metal energy", "", 6, 0, 0.01],
        ["Double Colorless energy", "", 0, 4, 0.2],
      ]
    },
    "Mega Manectric": { 
      "pokemon": [
        ["M Manectric Ex", "", 0, 3, 4.89],
        ["Manectric Ex", "", 0, 3, 2.49],
        ["Wobbufet", "", 3, 0, 0.35],
        ["Trubbish", "", 2, 0, 0.49],
        ["Garbodor", "", 2, 0, 0.49],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Hoopa Ex", "", 1, 0, 8.99],
        ["Jolteon Ex", "", 1, 0, 8.99],
      ], 
      "supporter": [
        ["Professor Sycamore", "", 0, 4, 0.2], 
        ["N (supporter)", "", 2, 0, 0.49],
        ["Lysandre", "", 2, 0, 0.2],
        ["Olympia", "", 1, 0, 0.2],
        ["AZ", "", 1, 0, 0.2],
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Trainers' Mail", "", 0, 3, 1.0],
        ["Mega Turbo", "", 0, 2, 0.88],
        ["Battle Compressor", "", 1, 0, 3.45],
      ], 
      "tool": [
        ["Manectric Spirit Link", "", 0, 3, 0.35],
        ["Float Stone", "", 3, 0, 2.0],
      ], 
      "stadium": [
        ["Rough Seas", "", 3, 0, 0.35]
      ], 
      "energy": [
        ["Basic Lightning energy", "", 6, 0, 0.01], 
        ["Basic Psychic energy", "", 4, 0, 0.01], 
      ]
    },
    "Lucario Crobat": { 
      "pokemon": [
        ["Lucario Ex", "", 3, 0, 8.99],
        ["Zubat", "", 4, 0, 0.2],
        ["Golbat", "", 4, 0, 0.35],
        ["Crobat", "", 3, 0, 0.59],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Carbink", "", 2, 0, 0.2],
        ["Carbink Break", "", 1, 0, 2.36],
      ], 
      "supporter": [
        ["Professor Sycamore", "", 3, 0, 0.2], 
        ["N (supporter)", "", 2, 0, 0.49],
        ["Korrina", "", 2, 0, 1.28],
        ["Lysandre", "", 2, 0, 0.2],
        ["Hex Maniac", "", 2, 0, 0.2],
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.64],
        ["Trainers' Mail", "", 0, 4, 1.00],
        ["Super Scoop Up", "", 4, 0, 0.2],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Level Ball", "", 2, 0, 0.89],
      ], 
      "tool": [

      ], 
      "stadium": [
        ["Fighting stadium", "", 2, 0, 0.2]
      ], 
      "energy": [
        ["Basic Fighting energy", "", 6, 0, 0.01],
        ["Strong energy", "", 4, 0, 0.49]
      ]
    },
    "Water Seismitoad": { 
      "pokemon": [
        ["Seismitoad Ex", "", 4, 0, 3.45],
        ["Manaphy Ex", "", 1, 1, 2.99],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Shaymin Ex", "", 0, 1, 8.99],
        ["Glaceon Ex", "", 1, 0, 6.99],
        ["Hoopa Ex", "", 0, 1, 3.99],
        ["Articuno", "", 0, 1, 1.25]
      ], 
      "supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["N (supporter)", "", 3, 0, 0.49],
        ["Lysandre", "", 2, 0, 0.2],
        ["AZ (supporter)", "", 1, 0, 0.2],
        ["Xerosic", "", 1, 0, 0.2],
        ["Team Flare Grunt", "", 1, 0, 0.2],
        ["Hex Maniac", "", 1, 0, 0.2]
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.59],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Max Elixir", "", 0, 3, 3.49],
        ["energy Switch", "", 3, 0, 0.2]
      ], 
      "tool": [
        ["Fighting Fury Belt", "", 3, 0, 0.59]
      ], 
      "stadium": [
        ["Rough Seas", "", 3, 0, 0.35],
        ["Parallel City", "", 1, 0, 0.2],
      ], 
      "energy": [
        ["Double Colorless energy", "", 0, 4, 0.2],
        ["Basic Water energy", "", 0, 9, 0.01],
      ]
    },
    "Volcanion": { 
      "pokemon": [
        ["Volcanion Ex", "", 0, 4, 2.49],
        ["Volcanion", "", 1, 3, 0.99],
        ["Shaymin Ex", "", 0, 2, 8.99],
        ["Hoopa Ex", "", 0, 1, 3.99],
      ], 
      "supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["N (supporter)", "", 2, 0, 0.49],
        ["Blacksmith", "", 2, 0, 2.29],
        ["Lysandre", "", 2, 0, 0.2],
        ["pokemon Ranger", "", 2, 0, 0.2],
      ], 
      "item": [
        ["VS Seeker", "", 0, 4, 1.63],
        ["Ultra Ball", "", 0, 4, 0.2],
        ["Acro Bike", "", 4, 0, 0.2],
        ["energy Retrieval", "", 4, 0, 0.2],
        ["Trainers' Mail", "", 0, 2, 1.0],
        ["Battle Compressor", "", 2, 0, 2.99],
      ], "tool": [
        ["Escape Rope", "", 2, 0, 0.2],
        ["Fighting Fury Belt", "", 3, 0, 0.59]
      ], "stadium": [

      ], "energy": [
        ["Basic Fire energy", "", 12, 0, 0.01],
      ]
    }
  },

  // Oceania Internationals 2017
  // XY Primal Clash to SM Base Set
  "PRC-SUM": {
    "Darkrai": { 
      "pokemon": [
        ["Darkrai Ex","",4,0,3.5],
        ["Hoopa Ex","",1,0,3.3],
        ["Shaymin Ex","",3,0,8.99],
        ["Yveltal","",2,0,0.39]
      ], 
      "supporter": [
        ["Professor Sycamore", "", 4, 0, 0.2],
        ["Lysandre", "", 2, 0, 0.2],
        ["N (supporter)", "", 2, 0, 0.49],
        ["Hex Maniac", "", 1, 0, 0.2],
        ["Delinquent", "", 1, 0, 0.2]
      ], 
      "item": [
        ["VS Seeker", "", 4, 0, 1.64],
        ["Trainers' Mail", "", 4, 0, 1.0],
        ["Ultra Ball", "", 4, 0, 0.2],
        ["Max Elixir", "", 4, 0, 3.45],
        ["Escape Rope", "", 2, 0, 0.2],
        ["Switch", "", 1, 0, 0.2],
      ], 
      "tool": [
        ["Exp. Share", "", 3, 0, 0.2],
        ["Fighting Fury Belt", "", 3, 0, 0.59]
      ], 
      "stadium": [
        ["Silent Lab", "", 2, 0, 0.77],
        ["Parallel City", "", 1, 0, 0.2],
      ], 
      "energy": [
        ["Basic Darkness energy", "", 12, 0, 0.01]
      ]
    },
    "Decidueye Vileplume": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Volcanion": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Mega Mewtwo": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Mega Rayquaza": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Mega Gardevoir": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Yveltal Garbodor": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Gyarados": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  },
  
  // Post-Rotation 2017
  // XY Breakthrough to SM Guardians Rising
  "BKT-GRI": {
    "Drampa Garbodor": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Gardevoir": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Golisopod Garbodor": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Break": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Tapu Bulu Vikavolt": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Metagross": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Ho-oh Salazzle": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Xerneas Break": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  },

  // North American Internationals 2018
  // XY Breakthrough to SM Forbidden Light
  "BKT-FLI": {
    "Buzzwole Lycanroc": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Lycanroc": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Golisopod": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Malamar Necrozma": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Garbodor": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Control": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Lucario": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Ultra Malamar": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  },

  // Pre-Puzzle Ban Expanded
  // BW Base Set to SM Forbidden Light
  "BLW-FLI": {
    "Trevenant Break": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Zoroark Sky Field": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Night March": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Sableye Control": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Seismitoad": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Buzzwole Lycanroc": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  },

  // Brisbane Regionals 2019
  // SM Ultra Prism to SM Cosmic Eclipse
  "UPR-CEC": {
    "Mewtwo & Mew": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "ADP Keldeo": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Gardevoir & Sylveon": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Pidgeotto Control": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Pikachu & Zekrom": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Reshiram & Charizard": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Malamar Spread": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Pidgeotto Blacephalon": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  },

  // Current Standard Format
  // SWSH Base Set to SWSH Evolving Skies
  "Standard": {
    "Zacian Inteleon": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    },
    "Rapid Strike Inteleon": { 
      "pokemon": [], "supporter": [], "item": [], "tool": [], "stadium": [], "energy": []
    }
  }
}