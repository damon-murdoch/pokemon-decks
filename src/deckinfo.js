// getDeck(deck: String, format: String): Void
// Given a deck and the format, verifies the deck
// can be found and returns it from the json.
function getDeck(deck, format)
{
  // Check the format is valid
  data = getFormat(format);

  // If the format is not null
  if (data !== null)
  {
    // If the deck is found
    if (data.decks.hasOwnProperty(deck))
    {
      // Return the deck
      return data.decks[deck];
    }
  }

  // Either deck / format is not found

  // Return null
  return null;
}

// Given a deck object, returns all
// of the cards in the deck formatted
// as a string. This string can be 
// copied to the clipboard.
function exportDecklist(deck_object)
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
  for (let card of flattenCards(deck_object))
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

// Given a deck object, returns
// a flattened version of the 
// card list as a single list
// for easier processing.
function flattenCards(deck_object)
{
  // Empty array for storing cards
  cards = [];

  // Add the pokemon to the cards list
  cards = cards.concat(deck_object.pokemon);
  
  // Add the supporters to the cards list
  cards = cards.concat(deck_object.supporter);
  
  // Add the items to the cards list
  cards = cards.concat(deck_object.item);
  
  // Add the tools to the cards list
  cards = cards.concat(deck_object.tool);
  
  // Add the stadiums to the cards list
  cards = cards.concat(deck_object.stadium);
  
  // Add the energies to the cards list
  cards = cards.concat(deck_object.energy);

  // Return the cards list
  return cards;
}

// getCategoryProgress(category: list): Object
// Given a list of cards, returns the number of 
// obtained, missing and total cards found in
// the category.
function getCategoryProgress(category)
{
  // Object to return 
  let cards = {
    obtained: 0, // Obtained Cards
    missing: 0, // Missing Cards
    total: 0 // Total Cards
  }

  // Loop over all of the cards in the category
  for (let card of category)
  {
    // Add obtained cards to obtained total
    cards.obtained += card[2];

    // Add missing cards to missing total
    cards.missing += card[3];
    
    // Add newly found cards to total
    cards.total += card[2] + card[3];
  }

  // Return the cards object
  return cards;
}

// getFormat(format: String): Void
// Given a format, verifies the format 
// can be found and returns it from the json.
function getFormat(format)
{
  // If the format is found
  if (decks.hasOwnProperty(format))
  {
    // Return the format
    return decks[format];
  }
  else // Format is not found
  {
    // Return null
    return null;
  }
}

// getDeckProgress(deck: String, format: String): Void
// Given a deck and a format, retrieves the number of
// cards in the deck excluding missing cards.
function getDeckProgress(deck, format)
{
  // If it is valid, get the deck from the json
  let data = getDeck(deck, format);

  // Deck is retrieved
  if (data !== null)
  {
    // Get a flattened list of cards
    let list = flattenCards(data);

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
  else // No deck is found
  {
    // Return null
    return null;
  }
}

// getFormatProgress(format: String): Void
// Given a format, retrieves the completeness 
// of the format including total decks, completed decks
// and overall progress as a percentage.
function getFormatProgress(format)
{
  // If it is valid, get the format from the json
  data = getFormat(format);

  // If the data is not null
  if (data !== null)
  {
    // Total Decks 
    let total = 0;

    // Complete Decks
    let complete = 0;

    // Missing Cards
    let missing = 0;

    // Obtained Cards
    let obtained = 0;

    // Loop over each deck
    Object.keys(data.decks).forEach(deck => {

      // Get the progress of the current deck
      current = getDeckProgress(deck, format);

      // If there are exactly 60 cards in the deck
      // It is done, increment the complete counter
      if (current.missing == 0)
      {
        // Increment the complete counter
        complete++;
      }
      else // Some missing cards
      {
        // Add to missing card counter
        missing += current.missing;
      }

      // Increment the progress by the cards in the deck
      obtained += current.obtained;

      // Increment the deck counter
      total++;
    });

    // Return the calculated values
    return {
      // Total Decks
      total: total,
      // Decks Complete
      complete: complete,
      // Obtained Cards
      obtained: obtained,
      // Missing Cards
      missing: missing,      
      // Format Overall Progress
      progress: (obtained / total / 60 * 100),
    };
  }
  else // Data is null
  {
    console.log("Format '" + format + "' could not be found !");

    // Return empty object
    return null;
  }
}

// getDeckBuylist(deck: String, format: String): Object
// Given a deck and a format, retrieves the full list of
// cards in the deck which are missing.
function getDeckBuylist(deck, format)
{
  // Hashtable of cards
  let cards = {};

  // Get the format data
  data = getFormat(format);

  // Get all of the cards in the deck
  let decklist = flattenCards(data.decks[deck]);

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

function getFormatBuylist(format)
{
  // Hashtable of cards
  let cards = {};

  // Get the format data
  data = getFormat(format);

  // Loop over all of the decks
  for (let deck in data.decks)
  {
    // Get all of the cards in the deck
    let decklist = flattenCards(data.decks[deck]);

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
  }

  // Return the data object
  return cards;
}

// getBuylist(Void): Void
// Goes through all of the decks
// in every format, and adds up
// how many copies of each card
// are missing 
function getBuylist()
{
  // Hashtable of cards
  let cards = {};

  // Loop over all of the formats
  Object.keys(decks).forEach(format => {

    // Get the format data
    data = getFormat(format);

    // Loop over all of the decks
    for (let deck in data.decks)
    {
      // Get all of the cards in the deck
      let decklist = flattenCards(data.decks[deck]);

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
    }
  });

  // Return the table of missing cards
  return cards;
}

// getBuylistCount(buylist): int
// Returns the total number of cards
// missing from the provided buylist.
function getBuylistCount(buylist)
{
  // Total cards missing
  let count = 0;

  // Loop over all of the cards in the buylist
  Object.keys(buylist).forEach(card => {

    // Loop over all of the prints in the buylist
    Object.keys(buylist[card]).forEach(print => {

      // Add the number of the missing print to the count
      count += buylist[card][print];
    });
  });

  // Return the counter
  return count;
}

// getTotalProgress(Void): Void
function getTotalProgress()
{
  // Total Decks 
  let total = 0;

  // Complete Decks
  let complete = 0;

  // Obtained Cards
  let obtained = 0;

  // Missing Cards
  let missing = 0;

  // Overall progress
  let progress = 0;

  // Loop over each format
  // Calculates the total decks, 
  // completed decks, overall progress, 
  // and obtained missing and total prices
  // for the complete deck collection.
  Object.keys(decks).forEach(format => {

    // Get the progress for the format
    data = getFormatProgress(format);

    // Add to the total decks
    total += data.total;

    // Add to the total completed decks
    complete += data.complete;

    // Add to the total obtained
    obtained += data.obtained;

    // Add to the total missing
    missing += data.missing;

    // Add the progress (will be divided later)
    progress += data.progress;

  });

  // Return the results
  return {
    // Total decks
    total: total, 
    // Decks Complete
    complete: complete, 
    // Obtained Cards
    obtained: obtained,
    // Missing Cards
    missing: missing,
    // Overall Progress
    progress: (progress / Object.keys(decks).length)
  };
}