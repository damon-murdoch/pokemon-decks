// Class for a single deck,
// consisting of a number of cards
class Deck {

  // Deck Class Constructor
  constructor(deck)
  {
    // Deck metadata
    this.meta = meta;

    // Deck Pokemon
    this.pokemon = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.pokemon){this.pokemon.push(new Card(card))}

    // Deck Supporters
    this.supporter = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.supporter){this.supporter.push(new Card(card))}

    // Deck Items
    this.item = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.item){this.item.push(new Card(card))}

    // Deck Tools
    this.tool = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.tool){this.tool.push(new Card(card))}

    // Deck Stadiums
    this.stadium = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.stadium){this.stadium.push(new Card(card))}

    // Deck Energy
    this.energy = [];

    // Create a card object for each card, insert it into the list
    for (card of deck.energy){this.energy.push(new Card(card))}
  }

  // Returns a flattened version 
  // of the card list as a single 
  // list for easier processing.
  getCards()
  {
    // Empty array for storing cards
    cards = [];

    // Add the pokemon to the cards list
    cards = cards.concat(this.pokemon);
    
    // Add the supporters to the cards list
    cards = cards.concat(this.supporter);
    
    // Add the items to the cards list
    cards = cards.concat(this.item);
    
    // Add the tools to the cards list
    cards = cards.concat(this.tool);
    
    // Add the stadiums to the cards list
    cards = cards.concat(this.stadium);
    
    // Add the energies to the cards list
    cards = cards.concat(this.energy);

    // Return the cards list
    return cards;
  }

  // getDeckProgress(): Object
  // Given a deck and a format, retrieves the number of
  // cards in the deck excluding missing cards.
  getProgress()
  {
    // Get a flattened list of cards
    let list = this.getCards();

    // Price and count 
    // for obtained cards
    let obtained = 0;

    // Price and count
    // for missing cards
    let missing = 0;

    // Loop over the cards
    list.forEach(card => {

      // 0: Name
      // 1: Set Number
      // 2: Number Have
      // 3: Number Missing

      // Add to the card count
      obtained += card[2];

      // Add to the missing count
      missing += card[3];
    });

    // Return the total cards minus the missing cards

    return {
      // Obtained count / price
      obtained: obtained,
        
      // Missing count / price
      missing: missing
    }
  }

  // getBuylist(): Object
  // Retrieves the full list of cards
  // in the deck which are missing.
  getBuylist()
  {
    // Hashtable of cards
    let cards = {};

    // Get the format data
    data = getFormat(format);

    // Get all of the cards in the deck
    let decklist = this.getCards()

    // Loop over all of the cards in the deck
    decklist.forEach(card => {
      
      // If the card is missing (any number)
      if (card[3] > 0)
      {
        // If the card is not in the cards list
        if (!cards.hasOwnProperty(card[0]))
        {
          // Add the card to the cards list
          cards[card[0]] = {}; 
        }

        // If the set is not in the card sets list
        if (!cards[card[0]].hasOwnProperty(card[1]))
        {
          // Create a new value for it and assign it to zero
          cards[card[0]][card[1]] = 0;
        }

        // Add the new number of missing cards to the existing number
        cards[card[0]][card[1]] += card[3];
      }
    });

    // Return the cards list
    return cards;
  }
  
  // Given a deck object, returns all
  // of the cards in the deck formatted
  // as a string. This string can be 
  // copied to the clipboard.
  toString()
  {
    // Process each card name, removing
    // '-' from the name and ensuring
    // the first letter of each word is 
    // capitalised.
    function toCapitalCase(name)
    {
      // Convert dashes to spaces, and split on them
      let words = name.replace('-', ' ').split(' ');

      // Loop over each word in the new split
      for (let word=0; word < words.length; word++)
      {
        // Un-Capitalise the letters in the word
        words[word] = words[word].toLowerCase();

        // Capitalise the first letter of the word
        // words[word][0] = words[word][0].toUpperCase();
        words[word] = words[word][0].toUpperCase() + words[word].substr(1);
      }

      // Return the joined array on the space
      return words.join(" ");
    }

    // Will contain deck list string
    let decklist = "";

    // Get all of the cards in the deck as a list
    for (let card of this.getCards())
    {
      // Add the card info to the string
      // Card Quantity (Missing + Obtained) + Card Name + Card Set / Set Number + newline
      // E.g. 4 Shaymin-ex ROS 77
      decklist += "" + (card[2] + card[3]).toString() + // Card Quantity
        " " + toCapitalCase(card[0]) + // Card Name in capital case
        " " + card[1] + "\n"; // Card Set Number + newline
    }

    // Return decklist to the caller
    return decklist;
  }
}