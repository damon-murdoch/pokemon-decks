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
    if (data.hasOwnProperty(deck))
    {
      // Return the deck
      return data[deck];
    }
  }

  // Either deck / format is not found

  // Return null
  return null;
}

// getPrice(card: String, set: String): Float
// Given a card and the set it is from, finds 
// the card and returns the price in the prices
// data file. If it cannot be found, -1 is returned
// to warn the user no price is recorded.
function getPrice(card, set)
{
  // If the card is in the database
  if (prices.hasOwnProperty(card))
  {
    // If the set number is in the database
    if (prices[card].hasOwnProperty(set))
    {
      // Return the price for that card and set number
      return prices[card][set];
    }
  }

  // Either missing card / set number
  return -1;
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
  data = getDeck(deck, format);

  // Deck is retrieved
  if (data !== null)
  {
    // Get a flattened list of cards
    list = flattenCards(data);

    // Price and count 
    // for obtained cards
    obtained =  {
      count: 0,
      price: 0
    }

    // Price and count
    // for missing cards
    missing = {
      count: 0,
      price: 0
    }

    // Prices assumed valid by default
    // Asterisk will be added to price
    // And un-valued card will be logged
    // to console if any prices are unset.
    valid = true;

    // Loop over the cards
    list.forEach(card => {

      // 0: Name
      // 1: Set Number
      // 2: Number Have
      // 3: Number Missing

      // Attempt to get the value of the card
      price = getPrice(card[0], card[1]);

      // If no price was found
      if (price === -1)
      {
        // Log the missing price
        // console.log('Missing price for card "',card[0],'" with set "' + card[1] + '".')

        // Set valid to false
        valid = false;
      }
      else // Price is found
      {
        // If there are cards of this type obtained
        if (card[2]) // Avoids multiplying if none are obtained
          obtained.price += (price * card[2]); // Add to the obtained price


        // If there are cards of this type missing
        if (card[3]) // Avoids multiplying if none are missing
          missing.price += (price * card[3]); // Add to the missing price
      }

      // Add to the card count
      obtained.count += card[2];

      // Add to the missing count
      missing.count += card[3];

    });

    // Return the total cards minus the missing cards

    return {
      // Obtained count / price
      obtained: obtained,
      
      // Missing count / price
      missing: missing, 

      // Total count / price
      total: {
        count: obtained.count + missing.count,
        price: obtained.price + missing.price
      },

      // Price validity
      valid: valid
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
    total = 0;

    // Complete Decks
    complete = 0;

    // Overall progress
    progress = 0;

    value = {
      obtained: 0,
      missing: 0,
      valid: true
    }

    // Loop over each deck
    Object.keys(data).forEach(deck => {

      // Get the progress of the current deck
      current = getDeckProgress(deck, format);

      // If there are exactly 60 cards in the deck
      // It is done, increment the complete counter
      if (current.obtained.count === current.total.count)
      {
        // Increment the complete counter
        complete++;
      }

      // If the current deck's price is invalid
      if (current.valid === false)
      {
        // Set format price validity to false
        value.valid = false;
      }

      // Add the price of the obtained cards to the obtained value
      value.obtained += current.obtained.price;

      // Add the price of the missing cards to the missing value
      value.missing += current.missing.price;

      // Increment the progress by the cards in the deck
      progress += current.obtained.count;

      // Increment the deck counter
      total++;
    });

    // Return the calculated values
    return {
      // Total Decks
      total: total,
      // Decks Complete
      complete: complete,
      // Format Overall Progress
      progress: (progress / total / 60 * 100),
      // Format obtained / missing value
      value: value
    };
  }
  else // Data is null
  {
    console.log("Format '" + format + "' could not be found !");
  }
}

// getTotalProgress(Void): Void
function getTotalProgress()
{
  // Total Decks 
  total = 0;

  // Complete Decks
  complete = 0;

  // Overall progress
  progress = 0;

  // Card values
  value = {
    obtained: 0,
    missing: 0,
    valid: true
  }

  // Loop over each format
  // Calculates the total decks, 
  // completed decks, overall progress, 
  // and obtained missing and total prices
  // for the complete deck collection.
  Object.keys(decks).forEach(format => {

    // Get the progress for the format
    data = getFormatProgress(format);

  });

  // Return the results
  return {
    // Total decks
    total: total, 
    // Decks Complete
    complete: complete, 
    // Overall Progress
    progress: (progress / total), 
    // Card Values
    value: value
  };
}