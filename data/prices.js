// USD/AUD Exchange Rate
const USDAUD = 1.38;

// Card Prices File
const prices = {

    // Is calculated via name -> set version

    // Pokemon

    "Joltik": { "PHF 26": 0.19 },
    "Pumpkaboo": { "PHF 44": 0.19 },
    "Lampent": { "PHF 42": 0.19 },
    "Shaymin Ex": { "ROS 77": 8.99 },
    "Mew": { "FCO 29": 2.29 },

    "Vileplume": { "": 0.29 }, 
    "Gloom": { "": 0.22 } ,
    "Oddish": { "": 0.19 }, 
    "Vespiquen": { "": 0.19 },
    "Combee": { "": 0.19 },

    "Talonflame": { "": 0.59 },
    "Greninja Break": { "": 9.99 },
    "Greninja": { "BKP": 1.29, "XY": 4.99 },
    "Frogadier": { "XY": .19 },
    "Froakie": { "XY": 0.19 },

    "M Audino Ex": { "": 2.49 },
    "Audino Ex": { "": 2.49 },
    "Hoopa Ex": { "": 3.29 },
    "Magearna Ex": { "": 2.49 },
    "Cobalion": { "": 0.19 },
    "Absol": { "": 0.89 },

    "M Manectric Ex": { "": 4.99 },
    "Manectric Ex": { "": 2.49 },
    "Wobbufet": { "": 0.39 },
    "Trubbish": { "": 0.49 },
    "Garbodor": { "": 0.49 },
    "Jolteon Ex": { "": 8.99 },

    "Lucario Ex": { "": 8.99 },
    "Zubat": { "": 0.19 },
    "Golbat": { "": 0.39 },
    "Crobat": { "": 0.59 },
    "Carbink": { "": 0.19 },
    "Carbink Break": { "": 2.39 },

    "Seismitoad Ex": {"": 3.49},
    "Manaphy Ex": {"": 2.99},
    "Glaceon Ex": {"": 6.99},
    "Articuno": {"": 1.29},

    "Volcanion Ex": {"": 2.49},
    "Volcanion": {"": 0.99},

    "Darkrai Ex": {"": 3.49},
    "Yveltal": {"": 0.39},

    // Supporters

    "Professor Sycamore": { "": 0.19 },
    "Lysandre": { "": 0.19 },
    "Hex Maniac": { "": 0.19 },
    "N (Supporter)": { "": 0.49 },
    "Teammates": { "": 0.19 },
    "Pokemon Ranger": { "": 0.19 },
    "AZ (Supporter)": { "": 0.19 },
    "Ace Trainer": { "": 0.19 },
    "Fisherman": { "": 0.19 },
    "Xerosic": { "": 0.19 },
    "Pokemon Center Lady": { "": 0.19 },
    "Olympia": { "": 0.19 },
    "Korrina": { "": 1.29 },
    "Team Flare Grunt": { "": 0.19 },
    "Blacksmith": { "": 2.29 },
    "Delinquent": { "": 2.29 },

    // Items

    "VS Seeker": { "": 1.59 },
    "Ultra Ball": { "": 0.19 },
    "Battle Compressor": { "": 3.79 },
    "Puzzle of Time": { "": 0.79 },
    "Trainers' Mail": { "": 0.99 },
    "Special Charge": { "": 0.19 },
    "Startling Megaphone": { "": 0.19 },
    "Target Whistle": { "": 0.19 },
    "Escape Rope": { "": 0.19 },
    "Acro Bike": { "": 0.29 },
    "Revitalizer": { "": 0.19 },
    "Dive Ball": { "": 1.09 },
    "Level Ball": { "": 0.89 },
    "Super Rod": { "": 0.49 },
    "Mega Turbo": { "": 0.89 },
    "Super Scoop Up": { "": 0.19 },
    "Max Elixir": { "": 3.49 },
    "Energy Switch": { "": 0.19 },
    "Energy Retrieval": { "": 0.19 },
    "Switch": { "": 0.19 },

    // Tools

    "Fighting Fury Belt": { "": 0.69 },
    "Float Stone": { "": 1.99 },
    "Bursting Balloon": { "": 0.19 },
    "Audino Spirit Link": { "": 0.19 },
    "Manectric Spirit Link": {"": 0.39},
    "Exp. Share": {"": 0.19},

    // Stadium

    "Dimension Valley": { "": 0.89 },
    "Forest of Giant Plants": { "": 0.29 },
    "Rough Seas": { "": 0.29 },
    "Parallel City": { "": 0.19 },
    "Fighting Stadium": { "": 0.19 },
    "Silent Lab": { "": 0.79 },

    // Enegy

    "Basic Psychic energy": { "": 0.01 },
    "Basic Lightning energy": { "": 0.01 },
    "Basic Fighting energy": { "": 0.01 },
    "Basic Metal energy": { "": 0.01 },
    "Basic Water energy": { "": 0.01 },
    "Basic Fire energy": { "": 0.01 },
    "Basic Darkness energy": { "": 0.01 },

    "Double Colorless energy": { "": 0.19 },
    "Splash energy": { "": 0.19 },
    "Strong energy": { "": 0.49 },
}