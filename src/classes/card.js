// Class for a single card
class Card {

  // Card class constructor
  constructor(card)
  {
    // Card name, set number
    this.name = card[0];
    this.set = card[1];

    // Obtaine/Missing Copies
    this.obtained = card[2];
    this.missing = card[3];
  }

  // getPGFQuery(): String
  // Generates a link which can be followed to find 
  // the given card (or relevant results) on the 
  // PokeGoldfish website.
  getPGFQuery()
  {
    // Generate the search query, should be card name followed by set number
    let query = "https://www.pokegoldfish.com/q?query_string=" + 
      encodeURIComponent(this.name) + " " + 
      encodeURIComponent(this.set); 

    // Sanitise the query, replacing any spaces with plus signs
    query = query.replace(" ", "+");

    // Sanitise the query, replacing any ' with %27
    // For some reason, encodeURIComponent does not do this
    // and it breaks the PokeGoldfish search queries
    query = query.replace("'", "%27")

    // Return the generated query to the calling process
    return query;
  }
}