// Old Format Deck Collection
const decks = {

  // Name, Count, Missing, Price (USD)

  // 2016 Worlds
  // XY Base Set to XY Steam Siege
  "XY-STS": {
    "meta": {
      "start": "XY", 
      "end": "Steam_Siege"
    },
    "decks": {

      "Night March": {
        "meta": {
          "icons": [
            // Pokedex number for Joltik, Pumpkaboo, Lampent
          ]
        },
        "pokemon": [
          ["Joltik", "PHF 26", 4, 0],
          ["Pumpkaboo", "PHF 44", 4, 0],
          ["Lampent", "PHF 42", 4, 0],
          ["Shaymin-ex", "ROS 77", 0, 3],
          ["Mew", "FCO 29", 1, 0]
        ],
        "supporter": [
          ["Professor Sycamore", "", 3, 0],
          ["Lysandre", "", 2, 0],
          ["Hex Maniac", "", 0, 2],
          ["N (Supporter)", "", 1, 0],
          ["Teammates", "", 1, 0],
          ["Pokemon Ranger", "", 1, 0],
          ["AZ (Supporter)", "", 1, 0]
        ],
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 4, 0],
          ["Battle Compressor", "", 4, 0],
          ["Puzzle of Time", "", 0, 4],
          ["Trainers' Mail", "", 0, 3],
          ["Special Charge", "", 1, 0],
          ["Startling Megaphone", "", 1, 0],
          ["Target Whistle", "", 1, 0],
          ["Escape Rope", "", 1, 0]
        ],
        "tool": [
          ["Fighting Fury Belt", "", 2, 0]
        ],
        "stadium": [
          ["Dimension Valley", "", 3, 0]
        ],
        "energy": [
          ["Double Colorless Energy", "", 1, 3],
          ["Basic Psychic Energy", "", 1, 0]
        ]
      }, 
      "Vespiquen Vileplume": { 
        "pokemon": [
          ["Vileplume", "AOR 3", 4, 0], 
          ["Gloom", "AOR 2", 4, 0],
          ["Oddish", "AOR 1", 4, 0], 
          ["Vespiquen", "AOR 10", 4, 0],
          ["Combee", "AOR 9", 4, 0],
          ["Unown", "AOR 30", 4, 0],
          ["Shaymin-ex", "ROS 77", 0, 4]
        ], 
        "supporter": [
          ["Professor Sycamore", "", 0, 3],
          ["AZ (Supporter)", "", 0, 1], 
          ["Lysandre", "", 0, 1], 
        ], 
        "item": [
          ["Battle Compressor", "", 4, 0],
          ["Ultra Ball", "", 0, 4],
          ["Trainers' Mail", "", 0, 3, 1],
          ["Acro Bike", "", 3, 0],
          ["Revitalizer", "", 0, 2],
          ["Special Charge", "", 1, 0]
        ], 
        "tool": [
          ["Float Stone", "", 2, 0]
        ], 
        "stadium": [
          ["Forest of Giant Plants", "", 4, 0]
        ], 
        "energy": [
          ["Double Colorless Energy", "", 0, 4]
        ]
      },
      "Talonflame Greninja": { 
        "pokemon": [
          ["Talonflame", "STS 96", 0, 4],
          ["Greninja Break", "BKP 41", 3, 0],
          ["Greninja", "BKP 40", 3, 0],
          ["Greninja", "XY 41", 1, 0],
          ["Frogadier", "BKP 39", 4, 0],
          ["Froakie", "BKP 38", 3, 0]
        ], 
        "supporter": [
          ["Professor Sycamore", "", 0, 4],
          ["N (Supporter)", "", 0, 4],
          ["Ace Trainer", "", 1, 0],
          ["Fisherman", "", 1, 0],
          ["Pokemon Ranger", "", 1, 0]
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Dive Ball", "", 4, 0],
          ["Level Ball", "", 2, 0],
          ["Super Rod", "", 2, 0],
          ["Battle Compressor", "", 1, 0],
          ["Startling Megaphone", "", 1, 0]
        ], 
        "tool": [
          ["Bursting Balloon", "", 4, 0]
        ], 
        "stadium": [
          ["Rough Seas", "", 3, 0]
        ], 
        "energy": [
          ["Basic Water Energy", "", 8, 0],
          ["Splash Energy", "", 2, 0]
        ]
      },
      "Mega Audino": { 
        "pokemon": [
          ["M Audino-ex", "FCO 85", 3, 0],
          ["Audino-ex", "FCO 84", 4, 0],
          ["Hoopa-ex", "AOR 36", 0, 1],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Magearna-ex", "STS 110", 1, 0],
          ["Cobalion", "STS 74", 1, 0],
          ["Absol", "ROS 40", 0, 1],
        ], 
        "supporter": [
          ["Professor Sycamore", "", 0, 4],
          ["N (Supporter)", "", 0, 2],
          ["Lysandre", "", 0, 2],
          ["AZ (Supporter)", "", 2, 0],
          ["Hex Maniac", "", 1, 0],
          ["Xerosic", "", 1, 0],
          ["Pokemon Center Lady", "", 1, 0],
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Trainers' Mail", "", 0, 4],
          ["Mega Turbo", "", 1, 0],
          ["Escape Rope", "", 1, 0],
          ["Super Rod", "", 1, 0],
          ["Startling Megaphone", "", 1, 0],
        ], 
        "tool": [
          ["Audino Spirit Link", "", 4, 0],
          ["Float Stone", "", 2, 0],
        ], 
        "stadium": [
          ["Parallel City", "", 2, 0]
        ], 
        "energy": [
          ["Basic Metal Energy", "", 6, 0],
          ["Double Colorless Energy", "", 0, 4],
        ]
      },
      "Mega Manectric": { 
        "pokemon": [
          ["M Manectric-ex", "PHF 24", 0, 3],
          ["Manectric-ex", "PHF 23", 0, 3],
          ["Wobbuffet", "PHF 36", 3, 0],
          ["Garbodor", "BKP 57", 2, 0],
          ["Trubbish", "BKP 56", 2, 0],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Hoopa-ex", "AOR 36", 1, 0],
          ["Jolteon-ex", "GEN 28", 1, 0],
        ], 
        "supporter": [
          ["Professor Sycamore", "", 0, 4], 
          ["N (Supporter)", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Olympia", "", 1, 0],
          ["AZ (Supporter)", "", 1, 0],
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Trainers' Mail", "", 0, 3],
          ["Mega Turbo", "", 0, 2],
          ["Battle Compressor", "", 1, 0],
        ], 
        "tool": [
          ["Manectric Spirit Link", "", 0, 3],
          ["Float Stone", "", 3, 0],
        ], 
        "stadium": [
          ["Rough Seas", "", 3, 0]
        ], 
        "energy": [
          ["Basic Lightning Energy", "", 6, 0], 
          ["Basic Psychic Energy", "", 4, 0], 
        ]
      },
      "Lucario Crobat": { 
        "pokemon": [
          ["Lucario-ex", "FFI 107", 3, 0],
          ["Crobat", "PHF 33", 3, 0],
          ["Golbat", "PHF 32", 4, 0],
          ["Zubat", "PHF 31", 4, 0],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Carbink Break", "FCO 50", 1, 0],
          ["Carbink", "FCO 49", 2, 0]
        ], 
        "supporter": [
          ["Professor Sycamore", "", 3, 0], 
          ["N (Supporter)", "", 2, 0],
          ["Korrina", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Hex Maniac", "", 2, 0],
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Trainers' Mail", "", 0, 4],
          ["Super Scoop Up", "", 4, 0],
          ["Ultra Ball", "", 0, 4],
          ["Level Ball", "", 2, 0],
        ], 
        "tool": [
        ], 
        "stadium": [
          ["Fighting Stadium", "", 2, 0]
        ], 
        "energy": [
          ["Basic Fighting Energy", "", 6, 0],
          ["Strong Energy", "", 4, 0]
        ]
      },
      "Water Seismitoad": { 
        "pokemon": [
          ["Seismitoad-ex", "FFI 20", 4, 0],
          ["Manaphy-ex", "BKP 32", 1, 1],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Shaymin-ex", "PR-XY XY148", 0, 1],
          ["Glaceon-ex", "FCO 20", 1, 0],
          ["Hoopa-ex", "AOR 36", 0, 1],
          ["Articuno", "ROS 16", 0, 1]
        ], 
        "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 3, 0],
          ["Lysandre", "", 2, 0],
          ["AZ (Supporter)", "", 1, 0],
          ["Xerosic", "", 1, 0],
          ["Team Flare Grunt", "", 1, 0],
          ["Hex Maniac", "", 1, 0]
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Max Elixir", "", 0, 4],
          ["Energy Switch", "", 3, 0]
        ], 
        "tool": [
          ["Fighting Fury Belt", "", 3, 0]
        ], 
        "stadium": [
          ["Rough Seas", "", 3, 0],
          ["Parallel City", "", 1, 0],
        ], 
        "energy": [
          ["Double Colorless Energy", "", 0, 4],
          ["Basic Water Energy", "", 0, 9],
        ]
      },
      "Volcanion": { 
        "pokemon": [
          ["Volcanion-ex", "PR-XY XY173", 0, 4],
          ["Volcanion", "STS 25", 1, 3],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Hoopa-ex", "AOR 36", 0, 1],
        ], 
        "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 2, 0],
          ["Blacksmith", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Pokemon Ranger", "", 2, 0],
        ], 
        "item": [
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Acro Bike", "", 4, 0],
          ["Energy Retrieval", "", 4, 0],
          ["Trainers' Mail", "", 0, 2],
          ["Battle Compressor", "", 2, 0],
          ["Escape Rope", "", 2, 0],
        ], "tool": [
          ["Fighting Fury Belt", "", 3, 0]
        ], "stadium": [
  
        ], "energy": [
          ["Basic Fire Energy", "", 12, 0],
        ]
      }
    }
  },

  // Oceania Internationals 2017
  // XY Primal Clash to SM Base Set
  "PRC-SUM": {
    "meta": {
      "start": "Primal_Clash", 
      "end": "Sun_and_Moon"
    },
    "decks": {
      "Darkrai": { 
        "pokemon": [
          ["Darkrai-ex","BKP 74",4,0],
          ["Hoopa-ex","AOR 36",1,0],
          ["Shaymin-ex","ROS 77",3,0],
          ["Yveltal","BKT 94",2,0,0]
        ], 
        "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["Lysandre", "", 2, 0],
          ["N (Supporter)", "", 2, 0],
          ["Hex Maniac", "", 1, 0],
          ["Delinquent", "", 1, 0]
        ], 
        "item": [
          ["VS Seeker", "", 4, 0],
          ["Trainers' Mail", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Max Elixir", "", 4, 0],
          ["Escape Rope", "", 2, 0],
          ["Switch", "", 1, 0],
        ], 
        "tool": [
          ["Exp. Share", "", 3, 0],
          ["Fighting Fury Belt", "", 3, 0]
        ], 
        "stadium": [
          ["Silent Lab", "", 2, 0],
          ["Parallel City", "", 1, 0],
        ], 
        "energy": [
          ["Basic Darkness Energy", "", 12, 0]
        ]
      },
      "Decidueye Vileplume": { 
        "pokemon": [
          ["Decidueye-gx","SUM 12",4,0],
          ["Dartrix","SUM 11",4,0],
          ["Rowlet","SUM 10",4,0],
          ["Vileplume","AOR 3",2,0],
          ["Gloom","AOR 2",2,0],
          ["Oddish","AOR 1",2,0],
          ["Shaymin-ex","ROS 77",3,0],
          ["Lugia-ex","AOR 68",2,0],
          ["Meowth","FCO 74",1,0],
        ], "supporter": [
          ["Professor Sycamore","",4,0],
          ["N (Supporter)","",3,0],
          ["Lysandre","",2,0],
          ["Olympia","",1,0],
        ], "item": [
          ["Ultra Ball","",4,0],
          ["Trainers' Mail","",4,0],
          ["Level Ball","",2,0],
          ["Revitalizer","",2,0],
        ], "tool": [
          ["Float Stone","",2,0]
        ], "stadium": [
          ["Forest of Giant Plants","",4,0]
        ], "energy": [
          ["Double Colorless Energy","",4,0],
          ["Basic Grass Energy","",4,0]
        ]
      },
      "Volcanion": { 
        "pokemon": [
          ["Volcanion-ex", "STS 26", 4, 0],
          ["Volcanion", "STS 25", 3, 0],
          ["Hoopa-ex", "AOR 36", 1, 0],
          ["Shaymin-ex", "ROS 77", 2, 0],
          ["Salamence-ex", "PR-XY XY170", 1, 0],
        ], "supporter": [
          ["Professor Sycamore","",4,0],
          ["N (Supporter)","",2,0],
          ["Lysandre","",2,0],
          ["Olympia","",1,0],
        ], "item": [
          ["Ultra Ball","",4,0],
          ["Max Elixir","",4,0],
          ["VS Seeker","",4,0],
          ["Trainers' Mail","",4,0],
          ["Energy Retrieval","",2,0],
          ["Escape Rope","",2,0],
          ["Super Rod","",1,0],
        ], "tool": [
          ["Fighting Fury Belt","",2,0],
          ["Float Stone","",2,0],
        ], "stadium": [
          ["Scorched Earth", "", 2, 0],
          ["Sky Field", "", 1, 0]
        ], "energy": [
          ["Basic Fire Energy", "", 12, 0]
        ]
      },
      "Mega Mewtwo": { 
        "pokemon": [
          ["M Mewtwo-ex", "BKT 64", 3, 0],
          ["Mewtwo-ex", "BKT 62", 3, 0],
          ["Hoopa-ex", "AOR 36", 1, 0],
          ["Shaymin-ex", "ROS 77", 2, 0],
          ["Garbodor", "BKP 57", 2, 0],
          ["Trubbish", "BKP 56", 2, 0],
          ["Espeon-gx", "SUM 61", 1, 0],
          ["Eevee", "SUM 101", 1, 0],
          ["Wobbuffet", "PHF 36", 1, 0],
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Olympia", "", 1, 0],
        ], "item": [
          ["VS Seeker", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Trainers' Mail", "", 3, 0],
          ["Mega Turbo", "", 3, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Mewtwo Spirit Link", "", 3, 0],
          ["Float Stone", "", 3, 0]
        ], "stadium": [
          ["Shrine of Memories", "", 2, 0], 
          ["Parallel City", "", 1, 0]
        ], "energy": [
          ["Basic Psychic Energy", "", 7, 0],
          ["Double Colorless Energy", "", 4, 0]
        ]
      },
      "Mega Rayquaza": { 
        "pokemon": [
          ["M Rayquaza-ex", "", 3, 0],
          ["Rayquaza-ex", "", 3, 0],
          ["Hoopa-ex", "AOR 36", 2, 0],
          ["Shaymin-ex", "ROS 77", 4, 0],
          ["Dragonite-ex", "", 2, 0],
          ["Jolteon-ex", "", 1, 0],
          ["Jirachi-ex", "", 1, 0],
        ], "supporter": [
          ["Professor Sycamore", "", 3, 0],
          ["N (Supporter)", "", 1, 0],
          ["Lysandre", "", 1, 0],
          ["Skyla", "", 1, 0],
          ["Delinquent", "", 1, 0],
          ["Hex Maniac", "", 1, 0],
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["VS Seeker", "", 4, 0],
          ["Puzzle of Time", "", 4, 0],
          ["Trainers' Mail", "", 3, 0],
          ["Mega Turbo", "", 3, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Rayquaza Spirit Link", "", 3, 0],
          ["Float Stone", "", 2, 0]
        ], "stadium": [
          ["Sky Field", "", 4, 0]
        ], "energy": [
          ["Basic Lightning Energy", "", 4, 0],
          ["Double Colorless Energy", "", 4, 0],
        ]
      },
      "Mega Gardevoir": { 
        "pokemon": [
          ["M Gardevoir-ex", "", 3, 0],
          ["Gardevoir-ex", "", 3, 0],
          ["Hoopa-ex", "AOR 36", 2, 0],
          ["Dragonite-ex", "", 2, 0],
          ["Shaymin-ex", "ROS 77", 4, 0],
          ["Ratatta", "", 2, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 3, 0],
          ["N (Supporter)", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Hex Maniac", "", 2, 0],
          ["Olympia", "", 1, 0],
        ], "item": [
          ["Trainers' Mail", "", 4, 0],
          ["VS Seeker", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Mega Turbo", "", 2, 0],
          ["Escape Rope", "", 2, 0],
          ["Switch", "", 1, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Gardevoir Spirit Link", "", 4, 0]
        ], "stadium": [
          ["Sky Field", "", 4, 0]
        ], "energy": [
          ["Basic Fairy Energy", "", 8, 0]
        ]
      },
      "Yveltal Garbodor": { 
        "pokemon": [
          ["Yveltal-ex", "", 3, 0],
          ["Garbodor", "BKP 57", 2, 0],
          ["Trubbish", "BKP 56", 2, 0],
          ["Yveltal", "", 2, 0],
          ["Tauros-gx", "", 1, 0],
          ["Shaymin-ex", "ROS 77", 1, 0],
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Olympia", "", 1, 0],
          ["Delinquent", "", 1, 0],
        ], "item": [
          ["VS Seeker", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Max Elixir", "", 4, 0],
          ["Trainers' Mail", "", 3, 0],
          ["Nest Ball", "", 1, 0],
          ["Super Rod", "", 1, 0],
        ], "tool": [
          ["Float Stone", "", 4, 0],
          ["Fighting Fury Belt", "", 3, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Basic Darkness Energy", "", 9, 0],
          ["Double Colorless Energy", "", 4, 0],
        ]
      },
      "Gyarados": { 
        "pokemon": [
          ["Gyarados", "", 3, 0],
          ["Magikarp", "", 4, 0],
          ["Octillery", "", 1, 0],
          ["Remoraid", "", 1, 0],
          ["Shaymin-ex", "ROS 77", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["Teammates", "", 2, 0],
          ["N (Supporter)", "", 1, 0],
          ["Lysandre", "", 1, 0],
          ["Professor Kukui", "", 1, 0]
        ], "item": [
          ["Dive Ball", "", 4, 0],
          ["Buddy-Buddy Rescue", "", 4, 0],
          ["Puzzle of Time", "", 4, 0],
          ["VS Seeker", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Trainers' Mail", "", 3, 0],
          ["Acro Bike", "", 2, 0],
          ["Level Ball", "", 1, 0],
          ["Town Map", "", 1, 0],
          ["Special Charge", "", 1, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Lucky Helmet", "", 3, 0],
          ["Float Stone", "", 1, 0]
        ], "stadium": [
          ["Team Magma's Secret Base", "", 4, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0]
        ]
      }
    }
  },
  
  // Post-Rotation 2017
  // XY Breakthrough to SM Guardians Rising
  "BKT-GRI": {
    "meta": {
      "start": "BREAKthrough", 
      "end": "Guardians_Rising"
    },
    "decks": {
      "Drampa Garbodor": { 
        "pokemon": [
          ["Trubbish", "BKP 56", 0, 4],
          ["Garbodor", "BKP", 2, 0],
          ["Garbodor", "GRI", 0, 2],
          ["Tapu Lele-gx", "GRI", 0, 3],
          ["Drampa-gx", "GRI", 2, 0],
          ["Espeon-gx", "GRI", 1, 0],
          ["Eevee", "GRI", 1, 0],
          ["Espeon-ex", "GRI", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Bridgette", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 0, 4],
          ["Field Blower", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 0, 4],
          ["Choice Band", "", 0, 4]
        ], "stadium": [
          ["Po Town", "", 4, 0]
        ], "energy": [
          ["Basic Psychic Energy", "", 6, 0],
          ["Double Colorless Energy", "", 0, 4],
          ["Rainbow Energy", "", 0, 2]
        ]
      },
      "Gardevoir": { 
        "pokemon": [
          ["Gardevoir-gx", "", 3, 0],
          ["Gallade", "", 1, 0],
          ["Kirlia", "", 3, 0],
          ["Diancie", "", 1, 0],
          ["Ralts", "", 4, 0],
          ["Tapu Lele-gx", "", 3, 0],
          ["Octillery", "", 1, 0],
          ["Remoraid", "", 1, 0],
          ["Vulpix", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 3, 0],
          ["Guzma", "", 3, 0],
          ["Brigette", "", 2, 0],
          ["Acerola", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Rare Candy", "", 4, 0],
          ["Field Blower", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 1, 0]
        ], "stadium": [
          ["Parallel City", "", 1, 0]
        ], "energy": [
          ["Basic Fairy Energy", "", 8, 0],
          ["Double Colorless Energy", "", 4, 0]
        ]
      },
      "Golisopod Garbodor": { 
        "pokemon": [
          ["Golisopod-gx", "", 3, 0],
          ["Wimpod", "", 4, 0],
          ["Garbodor", "BKP", 0, 2],
          ["Garbodor", "GRI", 0, 1],
          ["Trubbish", "BKP", 0, 3],
          ["Tapu Lele-gx", "", 0, 3],
          ["Tapu Koko", "", 1, 0],
          ["Tapu Fini-gx", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Acerola", "", 3, 0],
          ["Brigette", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Field Blower", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0],
          ["Heavy Ball", "", 1, 0],
        ], "tool": [
          ["Float Stone", "", 4, 0],
          ["Choice Band", "", 4, 0]
        ], "stadium": [
          ["Parallel City", "", 1, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 3, 0],
          ["Rainbow Energy", "", 3, 0],
          ["Basic Grass Energy", "", 3, 0],
        ]
      },
      "Zoroark Break": { 
        "pokemon": [
          ["Zoroark Break", "", 2, 1],
          ["Zoroark", "", 1, 3],
          ["Zorua", "", 4, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Drampa-gx", "", 0, 3],
          ["Oranguru", "", 1, 0],
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Brigette", "", 2, 0],
        ], "item": [
          ["Ultra Ball", "", 0, 4],
          ["Evosoda", "", 0, 2],
          ["Rescue Stretcher", "", 0, 2],
          ["Field Blower", "", 0, 2],
          ["Special Charge", "", 1, 0],
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 2, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0],
          ["Basic Darkness Energy", "", 3, 0],
          ["Rainbow Energy", "", 3, 0]
        ]
      },
      "Tapu Bulu Vikavolt": { 
        "pokemon": [
          ["Tapu Bulu-gx", "", 3, 0],
          ["Vikavolt", "", 3, 0],
          ["Charjabug", "", 1, 0],
          ["Grubbin", "", 3, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Tapu Koko", "", 1, 0],
          ["Mew", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Skyla", "", 2, 0],
          ["Brigette", "", 1, 0],
          ["Brock's Grit", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 0, 4],
          ["Rare Candy", "", 4, 0],
          ["Field Blower", "", 0, 2],
          ["Energy Recycler", "", 1, 0],
          ["Heavy Ball", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 2, 0]
        ], "stadium": [
          ["Aether Paradise Conservation Area", "", 2, 0]
        ], "energy": [
          ["Basic Grass Energy", "", 6, 0],
          ["Basic Lightning Energy", "", 4, 0],
        ]
      },
      "Metagross": { 
        "pokemon": [
          ["Metagross-gx", "", 4, 0],
          ["Metang", "", 3, 0],
          ["Beldum", "", 4, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Necrozma-gx", "", 1, 0],
          ["Vulpix", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Brigette", "", 2, 0],
          ["Skyla", "", 1, 0],
        ], "item": [
          ["Ultra Ball", "", 0, 4],
          ["Rare Candy", "", 0, 4],
          ["Max Potion", "", 3, 0],
          ["Field Blower", "", 0, 3],
          ["Rescue Stretcher", "", 1, 0],
        ], "tool": [
          ["Choice Band", "", 3, 0],
        ], "stadium": [
  
        ], "energy": [
          ["Basic Metal Energy", "", 7, 0],
          ["Basic Psychic Energy", "", 4, 0],
        ]
      },
      "Ho-oh Salazzle": { 
        "pokemon": [
          ["Ho-oh-gx", "", 3, 0],
          ["Salazzle-gx", "", 0, 2],
          ["Salandit", "", 2, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Volcanion-ex", "", 0, 2],
          ["Turtonator-gx", "", 1, 0],
          ["Oranguru", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 0, 4],
          ["Guzma", "", 4, 0],
          ["Kiawe", "", 3, 0],
          ["N (Supporter)", "", 2, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Max Elixir", "", 3, 0],
          ["Switch", "", 2, 0],
          ["Super Rod", "", 1, 0],
          ["Nest Ball", "", 1, 0],
          ["Field Blower", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 2, 0],
        ], "stadium": [
          ["Scorched Earth", "", 2, 0]
        ], "energy": [
          ["Basic Fire Energy", "", 14, 0]
        ]
      },
      "Xerneas Break": { 
        "pokemon": [
          ["Xerneas Break", "", 0, 3],
          ["Xerneas", "", 4, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Tapu Koko", "", 1, 0],
          ["Oranguru", "", 1, 0],
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 3, 0],
          ["Brigette", "", 2, 0],
        ], "item": [
          ["Ultra Ball", "", 0, 4],
          ["Max Elixir", "", 0, 4],
          ["Super Rod", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0],
        ], "tool": [
          ["Choice Band", "", 4, 0],
          ["Exp. Share", "", 3, 0],
        ], "stadium": [
          ["Fairy Garden", "", 2, 0]
        ], "energy": [
          ["Basic Fairy Energy", "", 12, 0],
          ["Double Colorless Energy", "", 0, 3]
        ]
      }
    }
  },

  // North American Internationals 2018
  // XY Breakthrough to SM Forbidden Light
  "BKT-FLI": {
    "meta": {
      "start": "BREAKthrough", 
      "end": "Forbidden_Light"
    },
    "decks": {
      "Buzzwole Lycanroc": { 
        "pokemon": [
          ["Buzzwole", "", 3, 0],
          ["Buzzwole-gx", "", 2, 0],
          ["Lycanroc-gx", "", 2, 0],
          ["Rockruff", "", 2, 0],
          ["Octillery", "", 2, 0],
          ["Remoraid", "", 2, 0],
          ["Diancie Prism Star", "", 1, 0],
          ["Tapu Lele-gx", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Cynthia", "", 2, 0],
          ["N (Supporter)", "", 2, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Max Elixir", "", 4, 0],
          ["Beast Ring", "", 3, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 2, 0]
        ], "stadium": [
          ["Brooklet Hill", "", 2, 0]
        ], "energy": [
          ["Basic Fighting Energy", "", 9, 0],
          ["Strong Energy", "", 4, 0],
          ["Beast Energy Prism Star", "", 1, 0]
        ]
      },
      "Zoroark Lycanroc": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Lycanroc-gx", "", 2, 0],
          ["Rockruff", "FLI", 2, 0],
          ["Rockruff", "GRI", 1, 0],
          ["Tapu Lele-gx", "", 3, 0],
          ["Mew-ex", "", 1, 0],
          ["Mewtwo", "", 1, 0],
          ["Buzzwole", "", 1, 0]
        ], "supporter": [
          ["N (Supporter)", "", 3, 0],
          ["Brigette", "", 3, 0],
          ["Guzma", "", 3, 0],
          ["Professor Sycamore", "", 1, 0],
          ["Mallow", "", 1, 0],
          ["Cynthia", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Puzzle of Time", "", 4, 0],
          ["Field Blower", "", 3, 0],
          ["Enhanced Hammer", "", 1, 0],
          ["Max Potion", "", 1, 0],
          ["Multi Switch", "", 1, 0],
          ["Evosoda", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 2, 0],
          ["Float Stone", "", 1, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0],
          ["Reverse Valley", "", 1, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0],
          ["Strong Energy", "", 4, 0]
        ]
      },
      "Zoroark Golisopod": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Golisopod-gx", "", 2, 0],
          ["Wimpod", "", 3, 0],
          ["Tapu Lele-gx", "", 3, 0],
          ["Mew-ex", "", 1, 0],
          ["Mewtwo", "", 1, 0],
          ["Latios", "", 1, 0],
          ["Oranguru", "", 1, 0]
        ], "supporter": [
          ["N (Supporter)", "", 3, 0],
          ["Guzma", "", 3, 0],
          ["Brigette", "", 3, 0],
          ["Professor Sycamore", "", 1, 0],
          ["Cynthia", "", 1, 0],
          ["Delinquent", "", 1, 0],
          ["Acerola", "", 1, 0]
        ], "item": [
          ["Ultra Ball", "", 4, 0],
          ["Puzzle of Time", "", 4, 0],
          ["Field Blower", "", 3, 0],
          ["Evosoda", "", 2, 0],
          ["Enhanced Hammer", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 2, 0],
          ["Choice Band", "", 2, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0],
          ["Basic Grass Energy", "", 3, 0],
        ]
      },
      "Malamar Necrozma": { 
        "pokemon": [
          ["Malamar", "", 4, 0],
          ["Inkay", "", 4, 0],
          ["Necrozma-gx", "", 2, 0],
          ["Dawn Wings Necrozma-gx", "", 2, 0],
          ["Tapu Lele-gx", "", 2, 0],
          ["Marshadow-gx", "", 1, 0],
          ["Mewtwo-gx", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["Cynthia", "", 3, 0],
          ["N (Supporter)", "", 2, 0],
          ["Brigette", "", 1, 0]
        ], "item": [
          ["Mysterious Treasure", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Max Elixir", "", 3, 0],
          ["Field Blower", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 4, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Basic Psychic Energy", "", 10, 0]
        ]
      },
      "Zoroark Garbodor": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Tapu Lele-gx", "", 3, 0],
          ["Garbodor", "GRI", 2, 0],
          ["Garbodor", "BKP", 1, 0],
          ["Tribbish", "BKP", 3, 0],
          ["Kartana-gx", "", 1, 0],
          ["Latios", "", 1, 0]
        ], "supporter": [
          ["N (Supporter)", "", 4, 0],
          ["Guzma", "", 3, 0],
          ["Brigette", "", 2, 0],
          ["Professor Sycamore", "", 1, 0],
          ["Cynthia", "", 1, 0],
          ["Acerola", "", 1, 0],
        ], "item": [
          ["Puzzle of Time", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Field Blower", "", 3, 0],
          ["Mysterious Treasure", "", 1, 0],
          ["Enhanced Hammer", "", 1, 0],
          ["Evosoda", "", 1, 0],
          ["Rescue Stretcher", "", 1, 0],
        ], "tool": [
          ["Float Stone", "", 3, 0],
          ["Choice Band", "", 2, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0],
          ["Unit Energy LPM", "", 3, 0],
        ]
      },
      "Zoroark Control": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Tapu Lele-gx", "", 4, 0],
          ["Mew-ex", "", 1, 0],
          ["Oranguru", "", 1, 0]
        ], "supporter": [
          ["N (Supporter)", "", 3, 0],
          ["Guzma", "", 3, 0],
          ["Brigette", "", 3, 0],
          ["Professor Sycamore", "", 1, 0],
          ["Cynthia", "", 1, 0],
          ["Mallow", "", 1, 0],
          ["Acerola", "", 1, 0],
          ["Team Flare Grunt", "", 1, 0],
          ["Delinquent", "", 1, 0]
        ], "item": [
          ["Puzzle of Time", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Evosoda", "", 3, 0],
          ["Enhanced Hammer", "", 3, 0],
          ["Field Blower", "", 2, 0],
          ["Counter Catcher", "", 2, 0],
          ["Max Potion", "", 2, 0],
          ["Rescue Stretcher", "", 1, 0]
        ], "tool": [
          ["Weakness Policy", "", 2, 0],
          ["Float Stone", "", 1, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0],
          ["Reverse Valley", "", 1, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0]
        ]
      },
      "Zoroark Lucario": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Lucario-gx", "", 2, 0],
          ["Riolu", "", 3, 0],
          ["Tapu Lele-gx", "", 0, 3],
          ["Diancie Prism Star", "", 1, 0],
          ["Mew-ex", "", 0, 1],
          ["Mewtwo", "", 1, 0]
        ], "supporter": [
          ["Guzma", "", 3, 0],
          ["Brigette", "", 3, 0],
          ["N (Supporter)", "", 3, 0],
          ["Cynthia", "", 1, 0],
          ["Acerola", "", 1, 0],
          ["Professor Sycamore", "", 1, 0]
        ], "item": [
          ["Puzzle of Time", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Field Blower", "", 0, 3],
          ["Evosoda", "", 2, 0],
          ["Enhanced Hammer", "", 1, 0]
        ], "tool": [
          ["Choice Band", "", 3, 0],
          ["Float Stone", "", 2, 0]
        ], "stadium": [
          ["Parallel City", "", 2, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 0, 4],
          ["Strong Energy", "", 0, 4],
        ]
      },
      "Ultra Malamar": { 
        "pokemon": [
          ["Malamar", "", 4, 0],
          ["Inkay", "", 4, 0],
          ["Ultra Necrozma-gx", "", 2, 0],
          ["Dawn Wings Necrozma-gx", "", 0, 2],
          ["Tapu Lele-gx", "", 0, 2],
          ["Mew", "", 1, 0]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0],
          ["Guzma", "", 3, 0],
          ["Cynthia", "", 3, 0],
          ["N (Supporter)", "", 2, 0],
          ["Brigette", "", 1, 0]
        ], "item": [
          ["Mysterious Treasure", "", 4, 0],
          ["Ultra Ball", "", 3, 0],
          ["Field Blower", "", 3, 0],
          ["Beast Ring", "", 2, 0],
          ["Professor's Letter", "", 2, 0],
          ["Super Rod", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 3, 0],
          ["Choice Band", "", 2, 0],
        ], "stadium": [

        ], "energy": [
          ["Basic Psychic Energy", "", 8, 0],
          ["Basic Metal Energy", "", 3, 0],
          ["Beast Energy Prism Star", "", 1, 0],
        ]
      }
    }
  },

  // Pre-Puzzle Ban-expanded
  // BW Base Set to SM Forbidden Light
  "BLW-FLI": {
    "meta": {
      "start": "Black_and_White", 
      "end": "Forbidden_Light"
    },
    "decks": {
      "Trevenant Break": { 
        "pokemon": [
          ["Trevenant Break", "", 3, 0],
          ["Trevenant", "", 4, 0],
          ["Phantump", "", 4, 0],
          ["Tapu Lele-gx", "", 2, 0],
          ["Espeon-ex", "", 1, 0],
        ], "supporter": [
          ["N (Supporter)", "", 3, 0],
          ["Wally", "", 2, 0],
          ["Cynthia", "", 2, 0],
          ["Professor Juniper", "", 2, 0],
          ["Guzma", "", 1, 0]
        ], "item": [
          ["Mysterious Treasure", "", 4, 0],
          ["Trainers' Mail", "", 4, 0],
          ["VS Seeker", "", 4, 0],
          ["Enhanced Hammer", "", 3, 0],
          ["Ultra Ball", "", 3, 0],
          ["Counter Catcher", "", 1, 0],
          ["Super Rod", "", 1, 0],
          ["Scoop Up Cyclone Ace Spec", "", 1, 0]
        ], "tool": [
          ["Rescue Scarf", "", 2, 0]
        ], "stadium": [
          ["Dimension Valley", "", 4, 0]
        ], "energy": [
          ["Basic Psychic Energy", "", 5, 0],
          ["Mystery Energy", "", 4, 0]
        ]
      },
      "Zoroark Sky Field": { 
        "pokemon": [
          ["Zoroark-gx", "", 4, 0],
          ["Zorua", "", 4, 0],
          ["Shaymin-ex", "ROS 77", 3, 0],
          ["Exeggcute", "", 3, 0],
          ["Tapu Lele-gx", "", 2, 0],
          ["Mewtwo-ex", "", 1, 0],
          ["Mr. Mime", "", 1, 0],
          ["Oranguru", "", 1, 0],
          ["Sudowoodo", "", 1, 0]
        ], "supporter": [
          ["Colress", "", 3, 0],
          ["Brigette", "", 2, 0],
          ["Hex Maniac", "", 2, 0],
          ["Guzma", "", 1, 0]
        ], "item": [
          ["VS Seeker", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["Puzzle of Time", "", 4, 0],
          ["Battle Compressor", "", 2, 0],
          ["Red Card", "", 2, 0],
          ["Field Blower", "", 1, 0],
          ["Pokemon Communication", "", 1, 0],
          ["Counter Catcher", "", 1, 0],
          ["Rescue Stretcher", "", 1, 0],
          ["Computer Search", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 2, 0],
          ["Choice Band", "", 2, 0]
        ], "stadium": [
          ["Sky Field", "", 3, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0]
        ]
      },
      "Night March": { 
        "pokemon": [
          ["Joltik", "", 4, 0],
          ["Pumpkaboo", "", 4, 0],
          ["Lampent", "", 4, 0],
          ["Shaymin-ex", "ROS 77", 3, 0],
          ["Marshadow-gx", "", 1, 0],
          ["Mew", "", 1, 0],
          ["Mr. Mime", "", 1, 0],
          ["Oranguru", "", 1, 0],
        ], "supporter": [
          ["Professor Juniper", "", 2, 0],
          ["N (Supporter)", "", 1, 0],
          ["Teammates", "", 1, 0],
          ["Guzma", "", 1, 0],
          ["Hex Maniac", "", 1, 0],
          ["Ghetsis", "", 1, 0],
        ], "item": [
          ["Puzzle of Time", "", 4, 0],
          ["Battle Compressor", "", 4, 0],
          ["Ultra Ball", "", 4, 0],
          ["VS Seeker", "", 4, 0],
          ["Trainers' Mail", "", 4, 0],
          ["Field Blower", "", 1, 0],
          ["Special Charge", "", 1, 0],
          ["Target Whistle", "", 1, 0],
          ["Dowsing Machine Ace Spec", "", 1, 0],
        ], "tool": [
          ["Choice Band", "", 2, 0],
          ["Fighting Fury Belt", "", 1, 0],
          ["Float Stone", "", 1, 0]
        ], "stadium": [
          ["Dimension Valley", "", 2, 0]
        ], "energy": [
          ["Double Colorless Energy", "", 4, 0]
        ]
      },
      "Sableye Control": { 
        "pokemon": [
          ["Sableye", "", 0, 4],
          ["Garbodor", "BKP 57", 2, 0],
          ["Trubbish", "BKP 56", 0, 2],
          ["Shaymin-ex", "ROS 77", 0, 2]
        ], "supporter": [
          ["Professor Sycamore", "", 4, 0], 
          ["N (Supporter)", "", 2, 0],
          ["Lysandre", "", 2, 0],
          ["Team Flare Grunt", "", 2, 0],
          ["Pokemon Center Lady", "", 1, 0],
          ["Team Rocket's Handiwork", "", 1, 0],
          ["Xerosic", "", 1, 0],
          ["Hex Maniac", "", 1, 0],
          ["Delinquent", "", 1, 0],
          ["AZ (Supporter)", "", 1, 0]
        ], "item": [
          ["Trainers' Mail", "", 0, 4],
          ["Crushing Hammer", "", 3, 0],
          ["Puzzle of Time", "", 0, 3],
          ["Ultra Ball", "", 0, 3],
          ["VS Seeker", "", 3, 0],
          ["Trick Shovel", "", 2, 0],
          ["Enhanced Hammer", "", 1, 0],
          ["Super Rod", "", 1, 0],
          ["Target Whistle", "", 1, 0],
          ["Field Blower", "", 1, 0]
        ], "tool": [
          ["Float Stone", "", 2, 0],
          ["Head Ringer", "", 1, 0],
          ["Life Dew Ace Spec", "", 1, 0]
        ], "stadium": [
          ["Parallel City", "", 1, 0],
          ["Team Aqua's Secret Base", "", 0, 1]
        ], "energy": [
          ["Basic Darkness Energy", "", 6, 0]
        ]
      },
      "Seismitoad": { 
        "pokemon": [
          ["Seismitoad-ex", "", 4, 0],
          ["Shaymin-ex", "ROS 77", 0, 2],
          ["Tapu Lele-gx", "", 0, 1],
          ["Hoopa-ex", "AOR 36", 0, 1],
          ["Jirachi-ex", "", 1, 0],
          ["Keldeo-ex", "", 0, 1],
          ["Mewtwo-ex", "", 0, 1],
          ["Sudowoodo", "", 1, 0],
          ["Giratina", "", 1, 0],
        ], "supporter": [
          ["Professor Juniper", "", 2, 0],
          ["N (Supporter)", "", 2, 0],
          ["Lusamine", "", 2, 0],
          ["Acerola", "", 2, 0],
          ["Colress", "", 2, 0],
          ["Team Skull Grunt", "", 1, 0],
          ["Team Flare Grunt", "", 1, 0],
          ["Shadow Triad", "", 1, 0],
          ["Cynthia", "", 1, 0],
          ["Guzma", "", 1, 0],
          ["Karen", "", 1, 0],
        ], "item": [
          ["Hypnotoxic Lazer", "", 4, 0],
          ["VS Seeker", "", 0, 4],
          ["Ultra Ball", "", 0, 4],
          ["Enhanced Hammer", "", 3, 0],
          ["Field Blower", "", 0, 1],
          ["Special Charge", "", 1, 0],
        ], "tool": [
          ["Fighting Fury Belt", "", 3, 0],
          ["Float Stone", "", 2, 0],
          ["Rock Guard Ace Spec", "", 1, 0]
        ], "stadium": [
          ["Virbank City Gym", "", 3, 0],
          ["Parallel City", "", 1, 0],
        ], "energy": [
          ["Double Colorless Energy", "", 0, 4]
        ]
      },
      "Buzzwole Lycanroc": { 
        "pokemon": [
          ["Buzzwole-gx", "", 0, 3],
          ["Lycanroc-gx", "", 0, 2],
          ["Rockruff", "", 2, 0],
          ["Buzzwole", "", 1, 0],
          ["Diancie Prism Star", "", 1, 0],
          ["Octillery", "", 1, 0],
          ["Remoraid", "", 1, 0],
          ["Sudowoodo", "", 1, 0],
          ["Tapu Lele-gx", "", 0, 1]
        ], "supporter": [
          ["Professor Juniper", "", 4, 0],
          ["Guzma", "", 4, 0],
          ["N (Supporter)", "", 2, 0],
          ["Korrina", "", 0, 2],
          ["Colress", "", 2, 0],
          ["Ultra Ball", "", 0, 4],
          ["Max Elixir", "", 0, 3],
          ["Beast Ring", "", 3, 0]
        ], "item": [
          ["Float Stone", "", 2, 0],
          ["Muscle Band", "", 2, 0],
          ["Choice Band", "", 1, 0]
        ], "tool": [
          ["Super Rod", "", 1, 0],
          ["Scramble Switch", "", 1, 0],
        ], "stadium": [
          ["Brooklet Hill", "", 3, 0]
        ], "energy": [
          ["Basic Fighting Energy", "", 9, 0],
          ["Strong Energy", "", 3, 0],
          ["Beast Energy Prism Star", "", 1, 0]
        ]
      }
    }
  },

  // Brisbane Regionals 2019
  // SM Ultra Prism to SM Cosmic Eclipse
  "UPR-CEC": {
    "meta": {
      "start": "Ultra_Prism", 
      "end": "Cosmic_Eclipse"
    },
    "decks": {
      "Mewtwo & Mew": { 
        "pokemon": [
          ["Jirachi", "", 4, 0],
          ["Mewtwo & Mew Tag Team-gx", "", 3, 0],
          ["Dedenne-gx", "", 2, 0],
          ["Lopunny & Jigglypuff Tag Team-gx", "", 1, 0],
          ["Charizard & Braixen Tag Team-gx", "", 1, 0],
          ["Espeon & Deoxys Tag Team-gx", "", 1, 0],
          ["Charizard-gx", "", 1, 0],
          ["Naganadel-gx", "", 1, 0],
          ["Greninja-gx", "", 1, 0],
          ["Solgaleo-gx", "", 1, 0],
          ["Latios-gx", "", 1, 0],
          ["Marshadow", "", 1, 0]
        ], "supporter": [
          ["Welder", "", 4, 0],
          ["Guzma & Hala Tag Team", "", 2, 0],
          ["Mallow & Lana Tag Team", "", 2, 0]
        ], "item": [
          ["Cherish Ball", "", 4, 0],
          ["Tag Call", "", 3, 0],
          ["Great Catcher", "", 3, 0],
          ["Switch", "", 2, 0],
          ["Mysterious Treasure", "", 2, 0],
          ["Reset Stamp", "", 2, 0],
        ], "tool": [
          ["Escape Board", "", 2, 0],
          ["Stealthy Hood", "", 1, 0],
        ], "stadium": [
          ["Giant Hearth", "", 3, 0]
        ], "energy": [
          ["Basic Fire Energy", "", 8, 0],
          ["Rainbow Energy", "", 3, 0],
          ["Weakness Guard Energy", "", 1, 0],
        ]
      },
      "ADP Keldeo": { 
        "pokemon": [
          ["Jirachi", "", 4, 0],
          ["Arceus, Dialga & Palkia Tag Team-gx", "", 2, 0],
          ["Keldeo-gx", "", 2, 0],
          ["Cryogonal", "", 2, 0],
          ["Absol", "", 1, 0],
          ["Girafarig", "", 1, 0],
        ], "supporter": [
          ["Cynthia", "", 4, 0],
          ["Cynthia & Caitlyn Tag Team", "", 2, 0],
          ["Mallow & Lana Tag Team", "", 2, 0],
          ["Guzma & Hala Tag Team", "", 1, 0],
          ["Rosa", "", 1, 0],
        ], "item": [
          ["Tag Call", "", 4, 0],
          ["Custom Catcher", "", 4, 0],
          ["Switch", "", 3, 0],
          ["Reset Stamp", "", 3, 0],
          ["Pokemon Communication", "", 2, 0],
          ["Cherish Ball", "", 2, 0],
          ["Great Catcher", "", 1, 0],
        ], "tool": [
          ["Escape Board", "", 2, 0],
          ["Counter Gain", "", 1, 0],
        ], "stadium": [
          ["Chaotic Swell", "", 3, 0]
        ], "energy": [
          ["Basic Water Energy", "", 6, 0],
          ["Basic Metal Energy", "", 5, 0],
          ["Rainbow Energy", "", 2, 0],
        ]
      },
      "Gardevoir & Sylveon": { 
        "pokemon": [
          ["Gardevoir & Sylveon Tag Team-gx", "", 4, 0],
          ["Lugia-gx", "", 1, 0]
        ], "supporter": [
          ["Green's-exploration", "", 4, 0],
          ["Coach Trainer", "", 4, 0],
          ["Cynthia & Caitlyn Tag Team", "", 3, 0],
          ["Mallow & Lana Tag Team", "", 2, 0],
          ["Faba", "", 1, 0]
        ], "item": [
          ["Pokegear 3.0", "", 4, 0],
          ["Switch", "", 4, 0],
          ["Custom Catcher", "", 4, 0],
          ["Reset Stamp", "", 3, 0],
          ["Tag Call", "", 3, 0],
          ["Tag Switch", "", 2, 0],
          ["Energy Spinner", "", 2, 0],
          ["Great Catcher", "", 1, 0]
        ], "tool": [
          ["Fairy Charm Lightning", "", 2, 0],
          ["Fairy Charm Psychic", "", 2, 0]
        ], "stadium": [
          ["Power Plant", "", 4, 0],
          ["Wondrous Labyrinth Prism Star", "", 1, 0]
        ], "energy": [
          ["Basic Fairy Energy", "", 9, 0]
        ]
      },
      "Pidgeotto Control": { 
        "pokemon": [
          ["Pidgeotto", "", 4, 0],
          ["Pidgey", "SHL 122", 3, 0],
          ["Pidgey", "SHL 121", 1, 0],
          ["Ditto Prism Star", "", 1, 0],
          ["Oranguru", "", 4, 0],
          ["Articuno-gx", "", 2, 0],
          ["Girafarig", "", 1, 0],
          ["Mew", "", 1, 0],
        ], "supporter": [
          ["Professor Elm's Lecture", "", 4, 0],
          ["Tate & Liza", "", 2, 0],
          ["Hapu", "", 2, 0],
          ["Mars", "", 2, 0],
          ["Lt. Surge's Strategy", "", 2, 0],
          ["Bellelba & Brycen Man", "", 2, 0],
          ["Misty & Lorelei", "", 1, 0],
          ["Faba", "", 1, 0],
          ["Jesse & James", "", 1, 0],
        ], "item": [
          ["Pokegear 3.0", "", 4, 0],
          ["Crushing Hammer", "", 4, 0],
          ["Acro Bike", "", 3, 0],
          ["Custom Catcher", "", 3, 0],
          ["Chip Chip Ice Axe", "", 2, 0],
          ["Pal Pad", "", 1, 0]
        ], "tool": [
          ["U-Turn Board", "", 1, 0]
        ], "stadium": [
          ["Power Plant", "", 2, 0],
          ["Sky Pillar", "", 1, 0]
        ], "energy": [
          ["Basic Water Energy", "", 4, 0],
          ["Recycle Energy", "", 1, 0],
        ]
      },
      "Pikachu & Zekrom": { 
        "pokemon": [
          ["Jirachi", "", 4, 0],
          ["Pikachu & Zekrom Tag Team-gx", "", 2, 0],
          ["Dedenne-gx", "", 2, 0],
          ["Raichu & Alolan Raichu Tag Team-gx", "", 1, 0],
          ["Zeraora-gx", "", 1, 0],
          ["Tapu Koko Prism Star", "", 1, 0],
          ["Absol", "", 1, 0],
          ["Marshadow", "", 1, 0],
        ], "supporter": [
          ["Volkner", "", 4, 0],
          ["Cynthia", "", 4, 0],
        ], "item": [
          ["Custom Catcher", "", 4, 0],
          ["Electropower", "", 4, 0],
          ["Switch", "", 3, 0],
          ["Pokemon Communication", "", 3, 0], 
          ["Reset Stamp", "", 2, 0],
          ["Electromagnetic Radar", "", 2, 0],
          ["Energy Switch", "", 2, 0],
          ["Great Catcher", "", 1, 0],
          ["Stadium Nav", "", 1, 0],
          ["Tag Switch", "", 1, 0],
        ], "tool": [
          ["Escape Board", "", 2, 0]
        ], "stadium": [
          ["Power Plant", "", 2, 0],
          ["Thunder Mountain Prism Star", "", 1, 0]
        ], "energy": [
          ["Basic Lightning Energy", "", 11, 0],
        ]
      },
      "Reshiram & Charizard": { 
        "pokemon": [
          ["Jirachi", "", 4, 0],
          ["Dedenne-gx", "", 3, 0],
          ["Ninetales", "", 2, 0],
          ["Vulpix", "", 2, 0],
          ["Zebstrika", "", 1, 0],
          ["Ditto Prism Star", "", 1, 0],
          ["Reshiram & Charizard Tag Team-gx", "", 1, 0],
          ["Mega Lopunny & Jigglypuff Tag Team-gx", "", 1, 0],
          ["Heatran-gx", "", 1, 0],
          ["Victini Prism Star", "", 1, 0],
          ["Turtonator", "", 1, 0]
        ], "supporter": [
          ["Welder", "", 4, 0]
        ], "item": [
          ["Pokemon Communication", "", 4, 0],
          ["Cherish Ball", "", 4, 0],
          ["Switch", "", 4, 0],
          ["Escape Board", "", 2, 0],
          ["Fiery Flint", "", 1, 0],
          ["Pal Pad", "", 1, 0]
        ], "tool": [
  
        ], "stadium": [
          ["Giant Hearth", "", 3, 0],
          ["Heat Factory Prism Star", "", 1, 0]
        ], "energy": [
          ["Basic Fire Energy", "", 18, 0]
        ]
      },
      "Malamar Spread": { 
        "pokemon": [
          ["Malamar", "", 4, 0],
          ["Inkay", "", 4, 0],
          ["Jirachi", "", 4, 0],
          ["Ditto Prism Star", "", 1, 0],
          ["Giratina", "", 2, 0],
          ["Blacephalon", "", 1, 0],
          ["Nihilego", "", 1, 0],
          ["Mew", "", 1, 0],
          ["Espurr", "", 1, 0],
        ], "supporter": [
          ["Lillie", "", 4, 0],
          ["Cynthia", "", 4, 0],
        ], "item": [
          ["Mysterious Treasure", "", 4, 0],
          ["Pokemon Communication", "", 4, 0],
          ["Acro Bike", "", 4, 0],
          ["Switch", "", 4, 0],
        ], "tool": [
          ["Spell Tag", "", 3, 0],
          ["Escape Board", "", 2, 0]
        ], "stadium": [
          ["Viridian Forest", "", 4, 0]
        ], "energy": [
          ["Basic Psychic Energy", "", 7, 0],
          ["Recycle Energy", "", 1, 0]
        ]
      },
      "Pidgeotto Blacephalon": { 
        "pokemon": [
          ["Blacephalon", "", 4, 0],
          ["Pidgeotto", "", 4, 0],
          ["Pidgey", "", 4, 0],
          ["Jirachi", "", 4, 0],
          ["Victini Prism Star", "", 1, 0],
          ["Ditto Prism Star", "", 1, 0]
        ], "supporter": [
          ["Professor Elm's Lecture", "", 4, 0],
          ["Welder", "", 4, 0]
        ], "item": [
          ["Pokegear 3.0", "", 4, 0],
          ["Fire Crystal", "", 4, 0],
          ["Fiery Flint", "", 1, 3],
          ["Escape Board", "", 2, 0],
          ["Great Catcher", "", 2, 0],
          ["Pal Pad", "", 1, 0],
        ], "tool": [
  
        ], "stadium": [
          ["Ultra Space", "", 2, 0],
          ["Heat Factory Prism Star", "", 1, 0]
        ], "energy": [
          ["Basic Fire Energy", "", 14, 0]
        ]
      }
    }
  },

  // Current Standard Format
  // SWSH Base Set to SWSH Evolving Skies
  "Standard": {
    "meta": {
      "start": "Sword_and_Shield", 
      "end": "Evolving_Skies"
    },
    "decks": {
      "Zacian Inteleon": { 
        "pokemon": [
          ["Inteleon", "CRE", 2, 1],
          ["Inteleon", "SSH", 1, 0],
          ["Drizzile", "SSH", 4, 0],
          ["Sobble", "CRE", 4, 0],
          ["Zacian V", "", 4, 0],
          ["Zamazenta V", "", 1, 0],
          ["Medicham V", "", 1, 0],
          ["Crobat V", "", 1, 0]
        ], "supporter": [
          ["Professor's Research", "", 4, 0],
          ["Boss's Orders", "", 2, 0],
          ["Marnie", "", 2, 0],
          ["Raihan", "", 1, 0]
        ], "item": [
          ["Metal Saucer", "", 4, 0],
          ["Level Ball", "", 4, 0],
          ["Quick Ball", "", 4, 0],
          ["Evolution Incense", "", 2, 0],
          ["Switch", "", 2, 0],
          ["Escape Rope", "", 1, 0],
          ["Energy Switch", "", 1, 0]
        ], "tool": [
          ["Rusted Sword", "", 2, 0],
          ["Cape of Toughness", "", 1, 0]
        ], "stadium": [
          
        ], "energy": [
          ["Basic Metal Energy", "", 11, 0]
        ]
      },
      "Rapid Strike Inteleon": { 
        "pokemon": [
          ["Inteleon", "CRE", 2, 1],
          ["Inteleon", "SSH", 1, 0],
          ["Drizzile", "SSH", 4, 0],
          ["Sobble", "CRE", 4, 0],
          ["Rapid Strike Urshifu Vmax", "CRE", 3, 0],
          ["Rapid Strike Urshifu V", "CRE", 4, 0],
          ["Medicham V", "CRE", 1, 0],
          ["Crobat V", "CRE", 1, 0],
          ["Passimian", "CRE", 1, 0]
        ], "supporter": [
          ["Professor's Research", "", 4, 0],
          ["Marnie", "", 3, 0],
          ["Raihan", "", 1, 1],
          ["Boss's Orders", "", 1, 0],
          ["Bird Catcher", "", 1, 0]
        ], "item": [
          ["Level Ball", "", 4, 0],
          ["Quick Ball", "", 4, 0],
          ["Evolution Incense", "", 4, 0],
          ["Escape Rope", "", 2, 0],
          ["Energy Search", "", 1, 0],
          ["Air Balloon", "", 1, 0],
          ["Switch", "", 1, 0]
        ], "tool": [
  
        ], "stadium": [
          ["Tower of Waters", "", 2, 0]
        ], "energy": [
          ["Rapid Strike Energy", "", 4, 0],
          ["Basic Fighting Energy", "", 4, 0]
        ]
      }
    }
  }
}