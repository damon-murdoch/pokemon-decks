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
    "<th scope='col'> Buylist </th>" + 
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
  title.innerHTML += "<th style='" + style + "'><a class='text-muted' href='index.html?buylist'> Buylist </th>";

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
    trow.innerHTML += "<th style='" + style + "'><a class='text-muted' href='index.html?buylist&format=" + format + "'> Buylist </th>";

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
    "<th scope='col'> Buylist </th>" + 
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
  title.innerHTML += "<th style='" + style + "'>" + summary.progress.toFixed(2) + "% </th>" + 
  "<td><a class='text-muted' href='index.html?buylist&format=" + format + "'> Format </a></td>";

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
    "<td style='" + style + "'>" + percentage + "%</td>" + 
    "<td><a class='text-muted' href='index.html?buylist&format=" + format + "&deck=" + deck + "'> Deck </a></td>";

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
  // Get the main element from the page
  let main = document.getElementById('main');

  // Set the page title
  document.getElementById('pagetitle').innerHTML = format + ' - ' + deck; 

  // Get the list of deck formats
  //decklist = Object.keys(decks[format]);
  let decklist = getDeck(deck, format);

  // Create a new div to serve as a container
  let container = document.createElement('div');

  // Set the class for the container
  container.className = 'container';

  // Create the row to store the container header
  let rowHead = document.createElement('div');

  // Set the class for the header
  rowHead.className = 'row';

  // Create the column to store the container header
  let colHead = document.createElement('div');

  // Assign the column header as a column
  colHead.className = 'col';

  // Populate the column header for the page
  // Contents: Overall deck information

  // Create a table element for the header
  let tableHead = document.createElement('table');

  // Specify the table classes
  tableHead.className = "table table-dark bg-dark";

  // Create a table row for the header
  let theadHead = document.createElement('thead');

  // Assign the columns in the table header
  theadHead.innerHTML = "<tr>" + 
    "<th class='text-light' scope='col'> Card Name </th>" + 
    "<th class='text-light' scope='col'> Set Number </th>" + 
    "<th class='text-light' scope='col'> Copies Obtained </th>" + 
    "<th class='text-light' scope='col'> Copies Missing </th>" + 
    "<th class='text-light' scope='col'> Total </th>" + 
    "<th class='text-light' scope='col'> Details </th>" + 
    "</tr>";

  // Add the table head to the table
  tableHead.appendChild(theadHead);    
  
  // Create the table body
  tbodyHead = document.createElement('tbody');

  // Get the deck progress
  // For the title row
  let progress = getDeckProgress(deck, format);

  // Create a row for storing the deck summary
  let summary = document.createElement('tr');

  // Generate the colour for the header
  let colorHead = getProgressColor(progress.obtained / (progress.obtained + progress.missing));

  // Generate the header info for the colour
  let styleHead = 'color: rgb(' + colorHead.r + ',' + colorHead.g + ',' + colorHead.b + ')';

  // Generate the html info for the row
  summary.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
    "<th scope='col'> - </th>" + 
    "<th scope='col' style='" + styleHead + "'>" + progress.obtained + "</th>" + 
    "<th scope='col' style='" + styleHead + "'>" + progress.missing + "</th>" + 
    "<th scope='col' style='" + styleHead + "'>" + (progress.obtained + progress.missing) + "</th>" + 
    "<th scope='col'> - </th>";

  // Add the table body to the column
  tableHead.appendChild(summary);

  // Add the table to the left-hand side
  colHead.appendChild(tableHead);

  // Add the left-hand side to the row
  rowHead.appendChild(colHead);

  // Add the row to the container
  container.appendChild(rowHead);

  // Create the row to store in the container
  let row = document.createElement('div');

  // Set the class for the row
  row.className = 'row';

  // Create the left-hand side element
  let left = document.createElement('div');

  // Assign the left element as a column
  left.className = 'col';

  // Populate the left-hand side of the page
  // Contents: Pokemon, Stadiums, Energies
  
  // Create a table element
  let tableLeft = document.createElement('table');

  // Specify the table classes
  tableLeft.className = "table table-dark bg-dark";

  // Create a table row for the header
  let theadLeft = document.createElement('thead');

  // Assign the columns in the table header
  theadLeft.innerHTML = "<tr>" + 
    "<th class='text-light' scope='col'> Card Name </th>" + 
    "<th class='text-light' scope='col'> Set Number </th>" + 
    "<th class='text-light' scope='col'> Copies Obtained </th>" + 
    "<th class='text-light' scope='col'> Copies Missing </th>" + 
    "<th class='text-light' scope='col'> Total </th>" + 
    "<th class='text-light' scope='col'> Details </th>" + 
    "</tr>";

  // Add the table head to the table
  tableLeft.appendChild(theadLeft);  

  // Create the table body
  tbodyLeft = document.createElement('tbody');

  // If there is at least one pokemon in the deck
  if (decklist.pokemon.length > 0)
  {
    // Add the pokemon summary
    let theadpkmn = document.createElement('tr');

    // Get the pokemon progress
    let tdatapkmn = getCategoryProgress(decklist.pokemon);

    // Get the colour for the progress
    let colorpkmn = getProgressColor(tdatapkmn.obtained / tdatapkmn.total);

    // Get the style for the progress
    let stylepkmn = 'color: rgb(' + colorpkmn.r + ',' + colorpkmn.g + ',' + colorpkmn.b + ')';

    // Assign the columns in the pokemon header
    theadpkmn.innerHTML = 
      "<th scope='col' style='" + stylepkmn + "'> Pokemon </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + stylepkmn + "'>" + tdatapkmn.obtained + "</th>" + 
      "<th scope='col' style='" + stylepkmn + "'>" + tdatapkmn.missing + "</th>" + 
      "<th scope='col' style='" + stylepkmn + "'>" + tdatapkmn.total + "</th>" + 
      "<th scope='col' class='text-light'></th>";

    // Add the pokemon header to the table
    tbodyLeft.appendChild(theadpkmn);

    // Loop over all of the pokemon
    for (let card of decklist.pokemon)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      // Add the row to the table
      tbodyLeft.appendChild(trow);
    }
  }

  // If there is at least one energy card in the deck
  if (decklist.energy.length > 0)
  {
    // Add the energy summary
    let theadnrgy = document.createElement('tr');

    // Get the pokemon progress
    let tdatanrgy = getCategoryProgress(decklist.energy);

    // Get the colour for the progress
    let colornrgy = getProgressColor(tdatanrgy.obtained / tdatanrgy.total);

    // Get the style for the progress
    let stylenrgy = 'color: rgb(' + colornrgy.r + ',' + colornrgy.g + ',' + colornrgy.b + ')';

    // Assign the columns in the pokemon header
    theadnrgy.innerHTML = 
      "<th scope='col' style='" + stylenrgy + "'> Energy </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + stylenrgy + "'>" + tdatanrgy.obtained + "</th>" + 
      "<th scope='col' style='" + stylenrgy + "'>" + tdatanrgy.missing + "</th>" + 
      "<th scope='col' style='" + stylenrgy + "'>" + tdatanrgy.total + "</th>" + 
      "<th class='text-light' scope='col'></th>";

    // Add the energy header to the table
    tbodyLeft.appendChild(theadnrgy);

    // Loop over all of the energy
    for (let card of decklist.energy)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      // Add the row to the table
      tbodyLeft.appendChild(trow);
    }
  }

  // Add the table body to the column
  tableLeft.appendChild(tbodyLeft);

  // Add the table to the left-hand side
  left.appendChild(tableLeft);

  // Add the left-hand side to the container
  row.appendChild(left);

  // Create the right-hand side element
  let right = document.createElement('div');

  // Assign the left element as a column
  right.className = 'col';

  // Populate the right-hand side of the page
  // Contents: Supporters, Items, Tools

  // Create a table element
  let tableRight = document.createElement('table');

  // Specify the table classes
  tableRight.className = "table table-dark bg-dark";

  // Create a table row for the header
  let theadRight = document.createElement('thead');

  // Assign the columns in the table header
  theadRight.innerHTML = "<tr>" + 
    "<th class='text-light' scope='col'> Card Name </th>" + 
    "<th class='text-light' scope='col'> Set Number </th>" + 
    "<th class='text-light' scope='col'> Copies Obtained </th>" + 
    "<th class='text-light' scope='col'> Copies Missing </th>" + 
    "<th class='text-light' scope='col'> Total </th>" + 
    "<th class='text-light' scope='col'> Details </th>" + 
    "</tr>";

  // Add the table head to the table
  tableRight.appendChild(theadRight);  

  // Create the table body
  tbodyRight = document.createElement('tbody');

  // If the deck has at least one supporter card
  if (decklist.supporter.length > 0)
  {
    // Add the pokemon summary
    let theadsupp = document.createElement('tr');

    // Get the pokemon progress
    let tdatasupp = getCategoryProgress(decklist.supporter);

    // Get the colour for the progress
    let colorsupp = getProgressColor(tdatasupp.obtained / tdatasupp.total);

    // Get the style for the progress
    let stylesupp = 'color: rgb(' + colorsupp.r + ',' + colorsupp.g + ',' + colorsupp.b + ')';

    // Assign the columns in the pokemon header
    theadsupp.innerHTML = 
      "<th scope='col' style='" + stylesupp + "'> Supporter </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + stylesupp + "'>" + tdatasupp.obtained + "</th>" + 
      "<th scope='col' style='" + stylesupp + "'>" + tdatasupp.missing + "</th>" + 
      "<th scope='col' style='" + stylesupp + "'>" + tdatasupp.total + "</th>" + 
      "<th class='text-light' scope='col'></th>";

    // Add the pokemon header to the table
    tbodyRight.appendChild(theadsupp);

    // Loop over all of the pokemon
    for (let card of decklist.supporter)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";
        
        // Add the row to the table
        tbodyRight.appendChild(trow);
    }
  }

  // If the deck has at least one item card
  if (decklist.item.length > 0)
  {
    // Add the item summary
    let theaditem = document.createElement('tr');

    // Get the item progress
    let tdataitem = getCategoryProgress(decklist.item);

    // Get the colour for the progress
    let coloritem = getProgressColor(tdataitem.obtained / tdataitem.total);

    // Get the style for the progress
    let styleitem = 'color: rgb(' + coloritem.r + ',' + coloritem.g + ',' + coloritem.b + ')';

    // Assign the columns in the item header
    theaditem.innerHTML = 
      "<th scope='col' style='" + styleitem + "'> Item </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + styleitem + "'>" + tdataitem.obtained + "</th>" + 
      "<th scope='col' style='" + styleitem + "'>" + tdataitem.missing + "</th>" + 
      "<th scope='col' style='" + styleitem + "'>" + tdataitem.total + "</th>" + 
      "<th class='text-light' scope='col'></th>";

    // Add the item header to the table
    tbodyRight.appendChild(theaditem);

    // Loop over all of the item
    for (let card of decklist.item)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      // Add the row to the table
      tbodyRight.appendChild(trow);
    }
  }

  // If the deck has at least one tool card
  if (decklist.tool.length > 0)
  {
    // Add the tool summary
    let theadtool = document.createElement('tr');

    // Get the tool progress
    let tdatatool = getCategoryProgress(decklist.tool);
    
    // Get the colour for the progress
    let colortool = getProgressColor(tdatatool.obtained / tdatatool.total);

    // Get the style for the progress
    let styletool = 'color: rgb(' + colortool.r + ',' + colortool.g + ',' + colortool.b + ')';

    // Assign the columns in the tool header
    theadtool.innerHTML = 
      "<th scope='col' style='" + styletool + "'> Tool </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + styletool + "'>" + tdatatool.obtained + "</th>" + 
      "<th scope='col' style='" + styletool + "'>" + tdatatool.missing + "</th>" + 
      "<th scope='col' style='" + styletool + "'>" + tdatatool.total + "</th>" + 
      "<th class='text-light' scope='col'></th>";

    // Add the tool header to the table
    tbodyRight.appendChild(theadtool);

    // Loop over all of the tool
    for (let card of decklist.tool)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      // Add the row to the table
      tbodyRight.appendChild(trow);
    }
  }

  // If the deck has at least one stadium card
  if (decklist.stadium.length > 0)
  {
    // Add the stadium summary
    let theadstad = document.createElement('tr');

    // Get the stadium progress
    let tdatastad = getCategoryProgress(decklist.stadium);
    
    // Get the colour for the progress
    let colorstad = getProgressColor(tdatastad.obtained / tdatastad.total);

    // Get the style for the progress
    let stylestad = 'color: rgb(' + colorstad.r + ',' + colorstad.g + ',' + colorstad.b + ')';

    // Assign the columns in the stadium header
    theadstad.innerHTML = 
      "<th scope='col' style='" + stylestad + "'> Stadium </th>" + 
      "<th scope='col' class='text-light'></th>" + 
      "<th scope='col' style='" + stylestad + "'>" + tdatastad.obtained + "</th>" + 
      "<th scope='col' style='" + stylestad + "'>" + tdatastad.missing + "</th>" + 
      "<th scope='col' style='" + stylestad + "'>" + tdatastad.total + "</th>" + 
      "<th class='text-light' scope='col'></th>";

    // Add the stadium header to the table
    tbodyRight.appendChild(theadstad);

    // Loop over all of the stadium
    for (let card of decklist.stadium)
    {
      // Create the table row for the row
      let trow = document.createElement('tr');

      // Get the colour for the progress
      let colorrow = getProgressColor(card[2] / (card[2] + card[3]));

      // Get the style for the progress
      let stylerow = 'color: rgb(' + colorrow.r + ',' + colorrow.g + ',' + colorrow.b + ')';

      // Set the contents for the row
      trow.innerHTML = 
        // Deck Format
        "<td class='text-light' scope='row'>" + card[0] + "</td>" + 
        "<td class='text-light' scope='row'>" + card[1] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[2] + "</td>" + 
        "<td style='" + stylerow + "'>" + card[3] + "</td>" + 
        "<td style='" + stylerow + "'>" + (card[2] + card[3]) + "</td>" + 
        "<td class='text-light'><a target='_blank' href='" + getPGFQuery(card[0], card[1]) + "'> Link </a></td>";

      // Add the row to the table
      tbodyRight.appendChild(trow);
    }
  }

  // Add the table body to the column
  tableRight.appendChild(tbodyRight);

  // Add the table to the left-hand side
  right.appendChild(tableRight);

  // Add the right-hand side to the container
  row.appendChild(right);

  // Add the row to the container
  container.appendChild(row);

  // Add the container to the main
  main.appendChild(container);
}

function showPageBuylist(format = null, deck = null)
{
  // Get the page title object
  let pagetitle = document.getElementById('pagetitle');

  // Set the page title
  pagetitle.innerHTML = "Card Buylist"; 

  // Buylist placeholder
  let buylist;

  // If a format is specified
  if (format !== null)
  {
    // Add it to the title
    pagetitle.innerHTML += " - " + format;

    // If a deck is specified
    if (deck !== null)
    {
      // Add it to the title
      pagetitle.innerHTML += " - " + deck;

      // Get the deck specific buylist
      buylist = getDeckBuylist(deck, format);
    }
    else // No deck specified
    {
      // Get the format specific buylist
      buylist = getFormatBuylist(format);
    }
  }
  else // No deck nor format specified
  {
    buylist = getBuylist();
  }

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

    // Create a row for storing the deck summary
    let summary = document.createElement('tr');

    summary.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
    "<th class='text-light'> - </th>" + 
    "<th class='text-light'>" + getBuylistCount(buylist) + "</th>" + 
    "<th class='text-light'> - </th>";

    tbody.appendChild(summary);

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

  // Set the page title/subtitle
  document.getElementById('sitetitle').innerHTML = config.title;
  document.getElementById('sitesubtitle').innerHTML = config.subtitle;

  // Get the page's query string
  const query = window.location.search;

  // Retrieve the params from the string
  const params = new URLSearchParams(query);

  // Placeholder deck / format
  let deck = null, format = null;

  // Check if a format is selected
  if (params.has('format'))
  {
    // Get the format from the params
    format = params.get('format');

    // Check if a deck is selected
    if (params.has('deck'))
    {
      // Show the page for the deck, given the deck and format
      deck = params.get('deck');

      // If we are on the buylist page
      if (params.has('buylist'))
      {
        // Show the deck buy list
        showPageBuylist(format, deck);
      }
      else // We are not on the buylist page
      {
        // Show the deck list
        showPageDeck(format, deck);
      }
    }
    else // No deck selected
    {
      // If we are on the buylist page
      if (params.has('buylist'))
      {
        // Show the format buy list
        showPageBuylist(format);
      }
      else // We are not on the buylist page
      {
        // Show the format page
        showPageFormat(format);
      }
    }
  }
  // If we are on the buylist page
  else if (params.has('buylist'))
  {
    // Show the buylist page
    showPageBuylist();
  }
  else // We are not on the buylist page
  {
    // Show the home page
    showPageHome();
  }
});