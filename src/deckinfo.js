// getPGFQuery(name: String, set: String): String
// Given a card name and set number, generates a link which
// can be followed to find the given card (or relevant results)
// on the PokeGoldfish website.
function getPGFQuery(name, set)
{
  // Generate the search query, should be card name followed by set number
  let query = "https://www.pokegoldfish.com/q?query_string=" + encodeURIComponent(name) + " " + encodeURIComponent(set); 

  // Sanitise the query, replacing any spaces with plus signs
  query = query.replace(" ", "+");

  // Sanitise the query, replacing any ' with %27
  // For some reason, encodeURIComponent does not do this
  // and it breaks the PokeGoldfish search queries
  query = query.replace("'", "%27")

  // Return the generated query to the calling process
  return query;
}

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

// mergeCards(a: CardsList, b: CardsList): CardsList
// Given two cards lists, merges them and returns the 
// combined list. Indexes with negative card counts will
// be removed from the total, and if the total number of
// a card becomes equal to zero it will be removed from 
// the list.
function mergeCards(a, b)
{
  // Merged list of card
  cards_merged = [];

  // Loop over the card in the deck object
  // for(let card of deck_object.card)
  for(let i = 0; i < a.length; i++)
  {
    // Dereference the card object
    let card = a[i];

    // Check if the list is in the variant
    let in_variant = 0;

    // Loop over the card in the variant object
    // for(let card_v of variant_object.card)
    for(let j = 0; j < b.length; j++)
    {
      // Dereference the variable card object
      let card_v = b[j];

      if (
        // Name of card is the same
        card[0] == card_v[0] && 
        // Set number of card is the same
        card[1] == card_v[1]
      )
      {
        // Card is in the variant
        in_variant = 1;

        // Combine the object
        let card_new = [
          card[0], // Card Name
          card[1], // Card Set / Set Number
          card[2] + card_v[2], // Card Count (Have)
          card[3] + card_v[3], // Card Count (Missing)
        ];

        // If the obtained card number is negative
        if (card_new[2] < 0)
        {
          // Add the obtained card number from
          // the deducted card number
          card_new[3] += card_new[2];

          // Set the obtained card number to zero
          card_new[2] = 0;
        }

        // If there is AT LEAST one card obtained or missing
        if(card_new[2] > 0 || card_new[3] > 0)
        {
          cards_merged.push(card_new);
        }

        // Remove it from the list
        b.splice(j, 1);
        
        // Break the loop
        break;
      }
    }

    // Variant has not been modified
    if (!in_variant)
    {
      // Add it to the list
      cards_merged.push(card);
    }
  }

  // Loop over the remaining cards
  for(let card of b)
  {
    // Add the pokemon to the merged list
    cards_merged.push(card);
  }

  // Return the merged cards object
  return cards_merged;
}

// Given a deck object and a variant, merges
// the cards in the deck object with the variant
// and returns the combined deck list.
function getVariant(deck_object, variant)
{
  // Get the deck list object for the given variant

  // Creates a clone of the variant object, so the original is not modified
  variant_object = JSON.parse(JSON.stringify(deck_object.variants[variant]));

  // Create a clone of the deck object 
  new_object = JSON.parse(JSON.stringify(deck_object));

  // Merge the pokemon cards list
  new_object.pokemon = mergeCards(
    deck_object.pokemon, variant_object.pokemon);

  // Merge the supporter cards list
  new_object.supporter = mergeCards(
    deck_object.supporter, variant_object.supporter);

  // Merge the item cards list
  new_object.item = mergeCards(
    deck_object.item, variant_object.item);

  // Merge the tool cards list
  new_object.tool = mergeCards(
    deck_object.tool, variant_object.tool);

  // Merge the stadium cards list
  new_object.stadium = mergeCards(
    deck_object.stadium, variant_object.stadium);

  // Merge the energy cards list
  new_object.energy = mergeCards(
    deck_object.energy, variant_object.energy);

  // Return the modified object
  return new_object;
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
  }

  // Loop over all of the cards in the category
  for (let card of category)
  {
    // Obtained count greater than 0
    if (card[2] > 0)
    {
      // Add obtained cards to obtained total
      cards.obtained += card[2];  
    }
    
    // Missing count greater than 0
    if (card[3] > 0)
    {
      // Add missing cards to missing total
      cards.missing += card[3];
    }
  }

  // Return the cards object
  return cards;
}

// getDeckProgress(deck: String, format: String): Void
// Given a deck and a format, retrieves the number of 
// missing and obtained cards for that deck.
function getDeckProgress(deck, format, variant = null)
{
  // If it is valid, get the deck from the json
  let data = getDeck(deck, format);

  // If a variant is specified
  if (variant)
  {
    // Get the specific deck variant
    data = getVariant(data, variant);
  }

  // Deck is retrieved
  if (data !== null)
  {
    // Get a flattened list of cards
    let list = flattenCards(data);

    // Progress data object
    let progress = {

      // Main Deck
      deck: getCategoryProgress(list), 
      
      // Deck Variants
      variant: {
        complete: 0, // Number of complete deck variants
        obtained: 0, // Obtained cards in variants
        missing: 0, // Missing cards in variants
        total: 0, // Number of deck variants
      }
    }

    // Loop over all of the variants in the progress
    Object.keys(data.variants).forEach(variant => {

      // Get the selected variant from the selected deck
      let variant_data = getDeck(deck, format).variants[variant];
    
      // If data is retrieved
      if (variant_data !== null)
      {
        // Get the flattened list of cards
        let variant_list = flattenCards(variant_data);

        // Get the progress of the variant
        let variant_progress = getCategoryProgress(variant_list);

        // Add to the total variant progress

        // Obtained cards
        progress.variant.obtained += variant_progress.obtained;

        // Missing cards
        progress.variant.missing += variant_progress.missing;

        // If there are no cards missing, variant is complete
        if (variant_progress.missing == 0)
        {
          // Increment the complete variant counter
          progress.variant.complete++;
        }

        // Increment the total variant counter
        progress.variant.total++;
      }
    });

    // Return the merged progress object
    return progress;
  }
  else // No deck is found
  {
    // Return null  
    return null;
  }
}

// getFormatProgress(format: String): Void
// Given a format, retrieves the completeness 
// of the variants within the format including 
// total variants, completed variants and overall 
// variant progress as a percentage.
function getFormatProgress(format)
{
  // If it is valid, get the format from the json
  data = getFormat(format);

  // If the data is not null
  if (data !== null)
  {
    // Object to return
    let result = {

      deck: { // Complete Decks

        total: 0, // Total Decks 
      
        complete: 0, // Complete Decks
        
        missing: 0, // Missing Cards
        
        obtained: 0 // Obtained Cards
      }, 
      variant: { // Deck Variants

        total: 0, // Total Variants 
      
        complete: 0, // Complete Variants
        
        missing: 0, // Missing Cards
        
        obtained: 0 // Obtained Cards
      }
    }

    // Loop over each deck
    Object.keys(data.decks).forEach(deck => {

      // Get the progress of the current deck
      current = getDeckProgress(deck, format);

      // If there are exactly 60 cards in the deck
      // It is done, increment the complete counter
      if (current.deck.missing == 0)
      {
        // Increment the complete counter
        result.deck.complete++;
      }
      else // Some missing cards
      {
        // Add to missing card counter
        result.deck.missing += current.deck.missing;
      }

      // Increment the progress by the cards in the deck
      result.deck.obtained += current.deck.obtained;

      // Increment the variant total by the variants in the deck
      result.variant.total += current.variant.total;
      
      // Increment the complete total by the complete variants
      result.variant.complete += current.variant.complete;
      
      // Increment the missing total by the missing cards
      result.variant.missing += current.variant.missing;

      // Increment the obtained total by the obtained cards
      result.variant.obtained += current.variant.obtained;

      // Increment the deck counter
      result.deck.total++;
    });

    // Return result
    return result;
  }
  else // Data is null
  {
    console.log("Format '" + format + "' could not be found !");

    // Return empty object
    return null;
  }
}

// getCardSummary(cardList: List)
// Given a list of all appearances
// of a given card, returns the total
// number of the given card (both obtained
// and missing) and returns them to the calling
// process.
function getCardSummary(cardList)
{
  // Card summary
  let info = {

    // Total cards obtained
    obtained: 0, 

    // Total cards missing
    missing: 0
  }

  // Loop over each instance of the card
  cardList.forEach(card => {

    // Increment the number of obtained cards
    info.obtained += card.obtained;

    // Increment the number of missing cards
    info.missing += card.missing;
  }); 

  // Return the info object
  return info;
}

// getCardObject(deck: String, format: String, variant: String, cardName: String, cardSet: String, obtained: Number, missing: Number)
function getCardObject(deck, format, variant, cardName, cardSet, obtained, missing)
{
  return {
    'deck': deck, // Deck Name
    'format': format, // Format Name
    'variant': variant, // Variant Name
    'cardName': cardName, // Card Name
    'cardSet': cardSet, // Card Set / Set Number
    'obtained': obtained, // Obtained Card Count
    'missing': missing // Missing Card Count
  };
}

// getCardDeckCount(deck: String, format: String, cardName: String, cardSet: String): Object
function getDeckCardInfo(deck, format, cardName, cardSet)
{
  // Collection card info
  let list = [];

  // Get the deck data from the decks object
  let data = getDeck(deck, format);

  // If data is not null
  if (data !== null)
  {
    // Flatten the cards in the deck
    let cards = flattenCards(data);
    
    // Loop over all of the cards in the list
    cards.forEach(card => {

      // If the card requested matches the card
      if (card[0] == cardName && card[1] == cardSet)
      {
        // Add the card info to the list
        list.push(
          getCardObject(deck, format, "-", 
            cardName, cardSet, card[2], card[3]
          )
        );
      }
    });

    // Loop over all of the variants in the list
    Object.keys(data.variants).forEach(variant => {

      // Get all of the unique cards from the variant
      variant_cards = flattenCards(data.variants[variant]);

      // Loop over all of the cards in the list
      variant_cards.forEach(card => {

        // If the card requested matches the card
        if (card[0] == cardName && card[1] == cardSet)
        {
          // Add the card info to the list
          list.push(
            getCardObject(deck, format, variant, 
              cardName, cardSet, card[2], card[3]
            )
          );
        }
      });
    });

    // Return the card list
    return list;
  }
  else // Data is null
  {
    // Return null
    return null;
  }
}

// getCardDeckCount(deck: String, format: String, cardName: String, cardSet: String): Object
function getFormatCardInfo(format, cardName, cardSet)
{
  // Collection card info
  let info = [];

  // Get the format from the decks object
  let data = getFormat(format);

  // If data is not null
  if (data !== null)
  {
    // Loop over all of the formats in the deck
    Object.keys(data.decks).forEach(deck => {

      // Get the card info for the current format
      let deck_info = getDeckCardInfo(deck, format, cardName, cardSet);

      // Merge the new card info with the new info
      info = info.concat(deck_info);
    }); 

    // Return the info object
    return info;
  }
  else // Data is null
  {
    // Return null
    return null;
  }
}

// getCardInfo(cardName: String, cardSet: String): Void
// Given a card name and a card set, finds all of the 
// decks in the collection which contain this card and 
// returns them as a list, containing both the number 
// present and the number missing.
function getCardInfo(cardName, cardSet)
{
  // Collection card info
  let info = [];

  // Loop over all of the formats in the deck
  Object.keys(decks).forEach(format => {

    // Get the card info for the current format
    let format_info = getFormatCardInfo(format, cardName, cardSet);
    
    // Merge the new card info with the new info
    info = info.concat(format_info);
  }); 

  // Return the info object
  return info;
}

// mergeBuylist(a: Buylist, b: Buylist)
// Given two buylists, merges them and 
// returns the combined result.
function mergeBuylist(a, b)
{
  // Starting buylist is 
  // clone of first argument
  let c = a;

  // Loop over the different cards
  for (let card in b)
  {
    // Card is in the buylist
    if (c.hasOwnProperty(card))
    {
      // Loop over the set numbers
      for(let num in b[card])
      {
        // If the set number is in the buylist
        if (c[card].hasOwnProperty(num))
        {
          // Increment the number
          c[card][num] += b[card][num];
        }
        else // Set number is not in the buylist
        {
          // Assign the value 
          c[card][num] = b[card][num];
        }
      }
    }
    else // If the card is not in the buylist
    {
      // Add it to the buylist
      c[card] = b[card];
    }
  }

  // Return the combined list
  return c;
}

// Given a deck object, returns all of
// the cards missing from the deck and
// returns them as a table.
function getObjectBuylist(deckObject)
{
  // Empty cards table
  let cards = {};

  // Get the list of all of the cards
  decklist = flattenCards(deckObject);

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

  // Return the buylist
  return cards;
}

// getDeckBuylist(deck: String, format: String): Void
// Given a deck and a format, gets all of the cards
// missing from the deck and returns them as a table.
function getDeckBuylist(deck, format)
{
  // Get the deck data
  let data = getDeck(deck, format);

  // Get the buylist for the deck
  cards = getObjectBuylist(data);

  // Loop over the variants in the deck
  Object.keys(data.variants).forEach(variantName => {

    // Dereference the variant
    let variant = data.variants[variantName];

    // Get the buylist for the variant and merge it with the list
    cards = mergeBuylist(cards, getObjectBuylist(variant));
  });

  // Return the cards list
  return cards;
}

// getFormatBuylist(format: String): Void
// Given a format, gets all of the cards missing
// from the format and returns them as a table.
function getFormatBuylist(format)
{
  // Hashtable of cards
  let cards = {};

  // Get the format data
  data = getFormat(format);

  Object.keys(data.decks).forEach(deck => {

    // Get the deck buylist
    let buylist = getDeckBuylist(deck, format);

    // Merge the current buylist with the deck buylist
    cards = mergeBuylist(cards, buylist);
  });

  // Return the data object
  return cards;
}

// getBuylist(Void): Void
// Returns the total cards missing
// from all formats in the decks list
// and returns them as a table.
function getBuylist()
{
  // Hashtable of cards
  let cards = {};

  // Loop over all of the formats
  Object.keys(decks).forEach(format => {

    // Get the format buylist
    let buylist = getFormatBuylist(format);

    // Merge the current buylist with the format buylist
    cards = mergeBuylist(cards, buylist);
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

// 
function getTotalProgress()
{
  // Overall progress object
  let progress = {

    // Unique Decks
    deck: {
      total: 0, 
      complete: 0,
      obtained: 0,
      missing: 0
    },

    // Deck Variants
    variant: {
      total: 0, 
      complete: 0,
      obtained: 0,
      missing: 0
    }
  }

  // Loop over each format
  // Calculates the total decks, 
  // completed decks, overall progress, 
  // and obtained missing and total prices
  // for the complete deck collection.
  Object.keys(decks).forEach(format => {

    // Get the progress for the format
    data = getFormatProgress(format);

    progress.deck.total += data.deck.total;
    progress.deck.complete += data.deck.complete;
    progress.deck.obtained += data.deck.obtained;
    progress.deck.missing += data.deck.missing;
    
    progress.variant.total += data.variant.total;
    progress.variant.complete += data.variant.complete;
    progress.variant.obtained += data.variant.obtained;
    progress.variant.missing += data.variant.missing;
  });

  // Return the progress
  return progress;
}