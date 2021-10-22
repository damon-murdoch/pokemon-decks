// getPageLink(deck: String, format: String): String
// Given an (optional) deck and format string, gets a link
// to the page which links to you to the requested page.
function getPageLink(format = null, deck = null)
{
  // Default home page url
  var url = new URL(window.location.href);

  // If the format is set
  if (format)
  {
    // If the deck is set
    if (deck)
    {
      // Add the deck to the link
      url.searchParams.set('deck', deck);
    } 
    else // Deck is not set
    {
      // Remove it from the url
      url.searchParams.delete('deck');
    }

    // Add the format to the link
    url.searchParams.set('format', format);
  }
  else // Format is not set
  {
    // Remove deck and format from the url
    url.searchParams.delete('deck');
    url.searchParams.delete('format');
  }

  // Return the url reference
  return url.href;
}

// getFormatLogo(start: String, end: String): Object
// Given a start and end format, gets the 
// path of the start and end sprites and 
// returns them to the calling process.
function getFormatLogos(start, end)
{
  // getLogoPath(path: String): String
  // Given a logo name, returns the file
  // path of the logo.
  function getLogoPath(path)
  {
    // Retrn the path to the 30px sprite for the format
    return "img/symbol/30px/30px-SetSymbol" + path + ".webp";
  }

  // Return the start and end sprite paths
  return {
    // Format Starting Sprite
    start: getLogoPath(start),

    // Formad Ending Sprite
    end: getLogoPath(end)
  };
}

// showPageHome(Void): Void
// Shows the home page, listing 
// all formats and other basic info
function showPageHome()
{
  // Set the page title
  document.getElementById('pagetitle').innerHTML = "Home Page"; 

  // Get the list of deck formats
  let formats = Object.keys(decks);

  // Create a table element
  let table = document.createElement('table');

  // Specify the table classes
  table.className = "table table-dark bg-dark";

  // Create a table row for the header
  let thead = document.createElement('thead');

  // Specify the header classes
  thead.className = "";

  // Assign the columns in the table header
  thead.innerHTML = "<tr><th> Format </th>" + 
    "<th scope='col'> Total Decks </th>" + 
    "<th scope='col'> Completed Decks </th>" + 
    "<th scope='col'> Obtained Cards </th>" + 
    "<th scope='col'> Missing Cards </th>" + 
    "<th scope='col'> Progress </th>" + 
    "</tr>"
    
  // Add the table head to the table
  table.appendChild(thead);

  // Create the table body
  let tbody = document.createElement('tbody');

  // Create table row for the summary
  let title = document.createElement('tr');

  // Get the overall collection summary
  let summary = getTotalProgress();

  // Create the standard parts of the title heading
  title.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
  "<th style='color: rgb(0, 255, 0)'>" + summary.total + "</th>";

  // Calculate the colour for the progress
  let deckcolor = getProgressColor(summary.complete / summary.total);

  // Calculate the style which should be applied to the completed decks
  let deckstyle = 'color: rgb(' + deckcolor.r + ',' + deckcolor.g + ',' + deckcolor.b + ')';

  // Add the number of completed decks to the form
  title.innerHTML += "<th style='" + deckstyle + "'>" + summary.complete + "</th>";

  // Percentage of total cards obtained (0-1)
  let total = summary.obtained / (summary.obtained + summary.missing);

  // Calculate the colour for the progress
  let color = getProgressColor(total);

  // Calculate the style to apply to the text
  let style = 'color: rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

  // Display the progress bar in red colouring
  
  title.innerHTML += "<th style='" + style + "'>" + summary.obtained + "</th>";
  title.innerHTML += "<th style='" + style + "'>" + summary.missing + "</th>";
  title.innerHTML += "<th style='" + style + "'>" + summary.progress.toFixed(2) + "% </th>";

  tbody.appendChild(title);

  // Loop over all of the formats
  formats.forEach(format => {

    // Create the table row for the row
    let trow = document.createElement('tr');

    // Get the format progress information
    let progress = getFormatProgress(format);

    // Get the format sprite information
    let sprites = getFormatLogos(decks[format].meta.start, decks[format].meta.end);

    // Set the contents for the row
    trow.innerHTML = 
      // Deck Format
      "<th scope='row' class='d-flex justify-content-center'><img src='" + sprites.start + "'>" + 
      "</img><a href='" + getPageLink(format) + "' class='text-light px-2'>" + format + "</a>" + 
      "<img src='" + sprites.end + "'>" + 
      "</img></th><td style='color: rgb(0, 255, 0)'>" + progress.total + "</td>"; 
      
      // Calculate the colour for the progress
      let deckcolor = getProgressColor(progress.complete / progress.total);

      // Calculate the style which should be applied to the completed decks
      let deckstyle = 'color: rgb(' + deckcolor.r + ',' + deckcolor.g + ',' + deckcolor.b + ')';

      // Add the number of completed decks to the form
      trow.innerHTML += "<td style='" + deckstyle + "'>" + progress.complete + "</td>";

    // Percentage of deck cards obtained (0-1)
    total = progress.obtained / (progress.obtained + progress.missing);

    // Calculate the colour for the progress
    color = getProgressColor(total);

    // Calculate the style to apply to the text
    style = 'color: rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

    // Display the progress text in red
    trow.innerHTML += "<td style='" + style + "'>" + progress.obtained + "</td>";
    trow.innerHTML += "<th style='" + style + "'>" + progress.missing + "</th>";
    trow.innerHTML += "<th style='" + style + "'>" + progress.progress.toFixed(2) + "% </th>";

    // Add the row to the table
    tbody.appendChild(trow);
  });

  // Add the table body to the table
  table.appendChild(tbody);

  // Get the main element from the page
  let main = document.getElementById('main');

  // Add the table to the main element
  main.appendChild(table);
}

// showPageFormat(Format: String): Void
// Given a format, shows a page that lists
// all of the decks in that format as well as 
// a little bit of information about each deck.
function showPageFormat(format)
{
  // Get the format sprite information
  sprites = getFormatLogos(decks[format].meta.start, decks[format].meta.end);

  // Set the page title
  document.getElementById('pagetitle').innerHTML = "<th scope='row' class='d-flex justify-content-center'><img src='" + sprites.start + "'>" + 
  "</img><a href='#' class='text-light px-2'>" + format + "</a>" + 
  "<img src='" + sprites.end + "'>";

  // Get the list of deck formats
  decklist = Object.keys(decks[format].decks);

  // Create a table element
  table = document.createElement('table');

  // Specify the table classes
  table.className = "table table-dark bg-dark";

  // Create a table row for the header
  thead = document.createElement('thead');

  // Specify the header classes
  thead.className = "";

  // Assign the columns in the table header
  thead.innerHTML = "<tr><th> Deck </th>" + 
    "<th scope='col'> Total Cards </th>" + 
    "<th scope='col'> Obtained Cards </th>" + 
    "<th scope='col'> Missing Cards </th>" + 
    "<th scope='col'> Progress </th>" + 
    "</tr>"
    
  // Add the table head to the table
  table.appendChild(thead);

  // Create the table body
  tbody = document.createElement('tbody');

  // Get the overall format info
  summary = getFormatProgress(format);

  // Create table row for the summary
  title = document.createElement('tr');

  // Create the standard parts of the title heading
  title.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
  "<th class='text-light'>-</th>" + 
  "<th class='text-light'>-</th>" + 
  "<th class='text-light'>-</th>";

  // Percentage of total cards obtained (0-1)
  let total = summary.obtained / (summary.obtained + summary.missing);

  // Calculate the colour for the progress
  let color = getProgressColor(total);

  // Calculate the style to apply to the text
  let style = 'color: rgb(' + color.r + ',' + color.g + ',' + color.b + ')';

  // Calculate the colour for the progress

  // Display the progress bar in red colouring
  title.innerHTML += "<th style='" + style + "'>" + summary.progress.toFixed(2) + "% </th>";

  tbody.appendChild(title);

  // Loop over all of the formats
  decklist.forEach(deck => {

    // Create the table row for the row
    let trow = document.createElement('tr');

    // Get the format progress information
    let progress = getDeckProgress(deck, format);

    // Set the contents for the row
    trow.innerHTML = 
    // Deck Format
    "<th scope='row'><a href='" + getPageLink(format, deck) +
    "' class='text-light'>" + deck + "</a></th>";

    // Get the percentage of cards remaining
    let percentage = (progress.obtained / (progress.obtained + progress.missing) * 100).toFixed(2);

    // If the deck has 60 cards (as required)
    if ((progress.obtained + progress.missing) == 60)
    {
      // Show the text in green
      trow.innerHTML += "<td style='color: rgb(0, 255, 0)'>" + (progress.obtained + progress.missing) + "</td>";
    }
    else // Deck has more or less than 60 cards
    {
      // Show the text in red
      trow.innerHTML += "<td style='color: rgb(255, 0, 0)'>" + (progress.obtained + progress.missing) + "</td>";
    }
    
    // Percentage of total cards obtained (0-1)
    let total = progress.obtained / (progress.obtained + progress.missing);

    // Calculate the colour for the progress
    let color = getProgressColor(total);
    
    // Calculate the style to apply to the text
    let style = 'color: rgb(' + color.r + ',' + color.g + ',' + color.b + ')';
    
    trow.innerHTML += "<td style='" + style + "'>" + progress.obtained + "</td>" + 
    "<td style='" + style + "'>" + progress.missing + "</td>" + 
    "<td style='" + style + "'>" + percentage + "%</td>";

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

// showPageDeck(Deck: String, Format: String): Void
// Given a deck and a format, shows a page that lists
// all of the cards in that deck, as well as their info
// such as how many we have, how many we need, their
// value, and other information about the deck.
function showPageDeck(deck, format)
{
  // Set the page title
  document.getElementById('pagetitle').innerHTML = format + ' - ' + deck; 

  // Get the list of deck formats
  //decklist = Object.keys(decks[format]);
  let decklist = getDeck(deck, format);

  // De-Categorise the cards list
  let cards = flattenCards(decklist);

  // If decklist is valid
  if (decklist)
  {
    // Create a table element
    let table = document.createElement('table');

    // Specify the table classes
    table.className = "table table-dark bg-dark";

    // Create a table row for the header
    let thead = document.createElement('thead');

    // Specify the header classes
    thead.className = "";

    // Assign the columns in the table header
    thead.innerHTML = "<tr>" + 
      "<th class='text-light' scope='col'> Card Name </th>" + 
      "<th class='text-light' scope='col'> Set Number </th>" + 
      "<th class='text-light' scope='col'> Copies Obtained </th>" + 
      "<th class='text-light' scope='col'> Copies Missing </th>" + 
      "<th class='text-light' scope='col'> Total </th>" + 
      "<th class='text-light' scope='col'> Details (PokeGoldfish) </th>" + 
      "</tr>";
      
    // Add the table head to the table
    table.appendChild(thead);    
  
    // Create the table body
    tbody = document.createElement('tbody');

    // Get the deck progress
    // For the title row
    let progress = getDeckProgress(deck, format);

    // Create a row for storing the deck summary
    let summary = document.createElement('tr');

    summary.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
    "<th class='text-light'> - </th>" + 
    "<th class='text-light'>" + progress.obtained + "</th>" + 
    "<th class='text-light'>" + progress.missing + "</th>" + 
    "<th class='text-light'>" + (progress.obtained + progress.missing) + "</th>" + 
    "<th class='text-light'> - </th>";

    tbody.appendChild(summary);

    // Loop over all of the formats
    cards.forEach(card => {

      // Create the table row for the row
      let trow = document.createElement('tr');

      // Set the contents for the row
      trow.innerHTML = 
      // Deck Format
      "<th class='text-light' scope='row'>" + card[0] + "</th>" + 
      "<th class='text-light' scope='row'>" + card[1] + "</th>" + 
      "<td class='text-light'>" + card[2] + "</td>" + 
      "<td class='text-light'>" + card[3] + "</td>" + 
      "<td class='text-light'>" + (card[2] + card[3]) + "</td>" + 
      "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      tbody.appendChild(trow);
    });

    // Add the table body to the table
    table.appendChild(tbody);

    // Get the main element from the page
    const main = document.getElementById('main');

    // Add the table to the main element
    main.appendChild(table);
  }
  else // Buylist fails to return
  {
    // Return to the home page
    window.location = window.location.pathname;
  }
}

function showPageBuylist()
{
  // Set the page title
  document.getElementById('pagetitle').innerHTML = "Card Buylist";

  // Get all of the missing cards
  let buylist = getBuylist();

  // If the command is successful
  if (buylist)
  {
    // Create a table element
    let table = document.createElement('table');

    // Specify the table classes
    table.className = "table table-dark bg-dark";

    // Create a table row for the header
    let thead = document.createElement('thead');

    // Specify the header classes
    thead.className = "";

    // Assign the columns in the table header
    thead.innerHTML = "<tr>" + 
      "<th class='text-light' scope='col'> Card Name </th>" + 
      "<th class='text-light' scope='col'> Set Number </th>" + 
      "<th class='text-light' scope='col'> Copies Missing </th>" + 
      "<th class='text-light' scope='col'> Details (PokeGoldFish) </th>" + 
      "</tr>";
      
    // Add the table head to the table
    table.appendChild(thead);    
  
    // Create the table body
    tbody = document.createElement('tbody');

    // Get the deck progress
    // For the title row
    let progress = getTotalProgress();

    // Create a row for storing the deck summary
    let summary = document.createElement('tr');

    summary.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
    "<th class='text-light'> - </th>" + 
    "<th class='text-light'>" + progress.missing + "</th>" + 
    "<th class='text-light'> - </th>";

    tbody.appendChild(summary);


    //////////// TODO: BUILD THE REST OF THE TABLE
    
    // Loop over all of the cards in the buylist
    // Sort ensures card names will be alphabetical
    for(card of Object.keys(buylist).sort())
    {
      // Loop over all of the set numbers for the card
      // Sort ensures card names will be alphabetical
      for (number of Object.keys(buylist[card]).sort())
      {
        // Create the table row for the row
        let trow = document.createElement('tr');

        // Set the contents for the row
        trow.innerHTML = 
        // Card Info
        "<td class='text-light' scope='row'>" + card + "</td>" + 
        "<td class='text-light'>" + number + "</td>" + 
        "<td class='text-light'>" + buylist[card][number] + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card, number) + "'> Link </a></td>";

        tbody.appendChild(trow);
      }
    }
    
    // Add the table body to the table
    table.appendChild(tbody);

    // Get the main element from the page
    const main = document.getElementById('main');

    // Add the table to the main element
    main.appendChild(table);
  }
  else // Buylist fails to return
  {
    // Return to the home page
    window.location = window.location.pathname;
  }
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
  // If the buylist button is pressed
  else if (params.has('buylist'))
  {
    showPageBuylist();
  }
  else // No format is selected
  {
    // Show the home page
    showPageHome();
  }
});