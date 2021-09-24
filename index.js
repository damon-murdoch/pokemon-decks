// showPageHome(Void): Void
// Shows the home page, listing 
// all formats and other basic info
function showPageHome()
{
  // Get the list of deck formats
  formats = Object.keys(decks);

  // Create a table element
  table = document.createElement('table');

  // Specify the table classes
  table.className = "table table-dark bg-dark";

  // Create a table row for the header
  thead = document.createElement('thead');

  // Specify the header classes
  thead.className = "";

  // Assign the columns in the table header
  thead.innerHTML = "<tr><th> Format </th>" + 
    "<th scope='col'> Decks (Total) </th>" + 
    "<th scope='col'> Decks (Completed) </th>" + 
    "<th scope='col'> Progress </th>" + 
    "<th scope='col'> Price (Obtained) </th>" + 
    "<th scope='col'> Price (Missing) </th>" + 
    "<th scope='col'> Price (Total) </th></tr>";
    
  // Add the table head to the table
  table.appendChild(thead);

  // Create the table body
  tbody = document.createElement('tbody');

  // Loop over all of the formats
  formats.forEach(format => {

    // Create the table row for the row
    trow = document.createElement('tr');

    // Set the contents for the row
    trow.innerHTML = 
      // Deck Format
      "<th scope='row'>" + format + "</th>";

    // Add the row to the table
    tbody.appendChild(trow);
  });

  // Add the table body to the table
  table.appendChild(tbody);

  // Get the main element from the page
  const main = document.getElementById('main');

  // Add the table to the main element
  main.appendChild(table);
}

// showPageFormat(Format: String): Void
// Given a format, shows a page that lists
// all of the decks in that format as well as 
// a little bit of information about each deck.
function showPageFormat(format)
{

}

// showPageDeck(Deck: String, Format: String): Void
// Given a deck and a format, shows a page that lists
// all of the cards in that deck, as well as their info
// such as how many we have, how many we need, their
// value, and other information about the deck.
function showPageDeck(deck, format)
{

}

// Runs once the page loads
$(document).ready(function(){

  // Get the page's query string
  const query = window.location.search;

  // Retrieve the params from the string
  const params = new URLSearchParams(query);

  // Check if a format is selected
  if (params.has('format'))
  {
    // Check if a deck is selected
    if (params.has('deck'))
    {
      // Show the page for the deck, given the deck and format
      showPageDeck(params.get('deck'), params.get('format'));
    }
    else // No deck is selected
    {
      // Show the page for the format
      showPageFormat(params.get('format'));
    }
  }
  else // No format is selected
  {
    // Show the home page
    showPageHome();
  }
});