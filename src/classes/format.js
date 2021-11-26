// Class for a single format, 
// containing a number of decks
class Format {
  
  // Format class constructor
  constructor(format)
  {
    // Get the format metadata
    this.meta = format.meta;

    // Empty deck table
    this.decks = {}

    // Loop over all of the deck names
    for(let name in format.decks)
    {
      // Get the deck from the deck name
      let deck = format.decks[name];

      // Create a new deck object for the deck
      this.decks[name] = new Deck(deck);
    }
  }

  // getFormatProgress(): Void
  // Retrieves the completeness of the format 
  // including total decks, completed decks
  // and overall progress as a percentage.
  getProgress()
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
    Object.keys(this.decks).forEach(deck => {

      // Get the progress of the current deck
      let current = deck.getProgress();
  
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
}