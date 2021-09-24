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

  // Either deck / 
  // format is not found

  // Return null
  return null;
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
    // Total number of cards in the deck
    cards = 0;

    // Loop over the pokemon
    data.pokemon.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Loop over the supporters
    data.supporter.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Loop over the items
    data.item.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Loop over the tools
    data.tool.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Loop over the stadiums
    data.stadium.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Loop over the energies
    data.energy.forEach(card => {

      // Add to the card count
      cards += card[2];
    });

    // Return the total cards minus the missing cards
    return cards;
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

    // Loop over each deck
    Object.keys(data).forEach(deck => {

      // Get the progress of the current deck
      current = getDeckProgress(deck, format);

      // If there are exactly 60 cards in the deck
      // It is done, increment the complete counter
      if (current === 60)
      {
        // Increment the complete counter
        complete++;
      }

      // Increment the progress by the cards in the deck
      progress += current;

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
      progress: (progress / total / 60 * 100)
    };
  }
  else // Data is null
  {
    console.log("Format '" + format + "' could not be found !");
  }
}

function getDeckPrices(deck, format)
{
  // If it is valid, get the deck from the json
  data = getDeck(deck, format);
}

function getFormatPrices(format)
{
  // If it is valid, get the format from the json
  data = getFormat(format);
}