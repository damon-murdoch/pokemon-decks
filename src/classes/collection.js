// Class for entire deck collection, 
// consisting of formats and decks
class Collection {

  // Collection class constructor
  constructor(collection)
  {
    // Empty format table
    this.formats = {};

    // Loop over all of the deck names
    for(let name in Object.keys(collection))
    {
      // Insert the format object to the formats table
      this.formats[name] = new Format(collection[format]);
    }
  }
}