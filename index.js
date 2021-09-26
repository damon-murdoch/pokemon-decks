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

    // Get the format progress information
    progress = getFormatProgress(format);

    // Total format card value
    total = ((progress.value.missing + progress.value.obtained) * USDAUD).toFixed(2);

    // Total obtained cards value
    obtained = (progress.value.obtained * USDAUD).toFixed(2);

    // Total missing cards value
    missing = (progress.value.missing * USDAUD).toFixed(2);

    // If prices are not valid
    if (progress.value.valid === false)
    {
      // Add asterisk to prices
      obtained = obtained.toString() + '*';
      missing = missing.toString() + '*';
      total = total.toString() + '*';
    }

    // Set the contents for the row
    trow.innerHTML = 
      // Deck Format
      "<th scope='row'><a href='" + getPageLink(format) +
      "' class='text-light'>" + format + "</a></th>" + 
      "<td class='text-light'>" + progress.total + "</td>" + 
      "<td class='text-light'>" + progress.complete + "</td>";

    // If the progress is less than fifty percent
    if (progress.progress < 50)
    {
      // Display the progress text in red
      trow.innerHTML += "<td class='text-danger'>" + progress.progress.toFixed(3) + "% </td>";
    }
    // If the progress is between 50 and 99
    else if (progress.progress < 100)
    {
      // Display the progress text in red
      trow.innerHTML += "<td class='text-warning'>" + progress.progress.toFixed(3) + "% </td>";
    }
    else // If the progress is complete
    {
      // Display the progress text in red
      trow.innerHTML += "<td class='text-success'>" + progress.progress.toFixed(3) + "% </td>";
    }

    trow.innerHTML += 
      
      "<td class='text-success'> $" + obtained + " AUD</td>" + 
      "<td class='text-danger'> $" + missing + " AUD</td>" + 
      "<td class='text-light'> $" + total  + " AUD</td>";

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
  // Get the list of deck formats
  decklist = Object.keys(decks[format]);

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
    "<th scope='col'> Cards (Total) </th>" + 
    "<th scope='col'> Cards (Obtained) </th>" + 
    "<th scope='col'> Cards (Missing) </th>" + 
    "<th scope='col'> Progress </th>" + 
    "<th scope='col'> Price (Obtained) </th>" + 
    "<th scope='col'> Price (Missing) </th>" + 
    "<th scope='col'> Price (Total) </th></tr>";
    
  // Add the table head to the table
  table.appendChild(thead);

  // Create the table body
  tbody = document.createElement('tbody');

  // Get the overall format info
  summary = getFormatProgress(format);

  // Create table row for the summary
  title = document.createElement('tr');

  // Total format card value
  total = ((summary.value.obtained + summary.value.missing) * USDAUD).toFixed(2);

  // Total obtained cards value
  obtained = (summary.value.obtained * USDAUD).toFixed(2);

  // Total missing cards value
  missing = (summary.value.missing * USDAUD).toFixed(2);

  // If prices are not valid
  if (progress.valid === false)
  {
    // Add asterisk to prices
    obtained = obtained.toString() + '*';
    missing = missing.toString() + '*';
    total = total.toString() + '*';
  }

  // Create the standard parts of the title heading
  title.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
  "<th class='text-light'>-</th>" + 
  "<th class='text-light'>-</th>" + 
  "<th class='text-light'>-</th>";

  // Calculate the colour for the progress

  // If the progress is less than fifty
  if (summary.progress < 50)
  {
    // Display the progress bar in red colouring
    title.innerHTML += "<th class='text-danger'>" + summary.progress.toFixed(2) + "% </th>";
  }
  // If the progress is less than one hundred
  else if (summary.progress < 100)
  {
    // Display the progress bar in yellow colouring
    title.innerHTML += "<th class='text-warning'>" + summary.progress.toFixed(2) + "% </th>";
  }
  else // If the progress is complete
  {
    // Display the progress bar in green colouring
    title.innerHTML += "<th class='text-success'>" + summary.progress.toFixed(2) + "% </th>";
  }

  title.innerHTML += "<th class='text-success'>$" + obtained + " AUD</th>" + 
  "<th class='text-danger'>$" + missing + " AUD</th>" + 
  "<th class='text-light'>$" + total + " AUD</th>";

  tbody.appendChild(title);

  // Loop over all of the formats
  decklist.forEach(deck => {

    // Create the table row for the row
    trow = document.createElement('tr');

    // Get the format progress information
    progress = getDeckProgress(deck, format);

    // Total format card value
    total = ((progress.obtained.price + progress.missing.price) * USDAUD).toFixed(2);

    // Total obtained cards value
    obtained = (progress.obtained.price * USDAUD).toFixed(2);

    // Total missing cards value
    missing = (progress.missing.price * USDAUD).toFixed(2);

    // If prices are not valid
    if (progress.valid === false)
    {
      // Add asterisk to prices
      obtained = obtained.toString() + '*';
      missing = missing.toString() + '*';
      total = total.toString() + '*';
    }

    // Set the contents for the row
    trow.innerHTML = 
    // Deck Format
    "<th scope='row'><a href='" + getPageLink(format, deck) +
    "' class='text-light'>" + deck + "</a></th>";

    // Get the percentage of cards remaining
    percentage = (progress.obtained.count / progress.total.count * 100).toFixed(2);

    // If the deck has 60 cards (as required)
    if (progress.total.count == 60)
    {
      // Show the text in green
      trow.innerHTML += "<td class='text-success'>" + progress.total.count + "</td>";
    }
    else // Deck has more or less than 60 cards
    {
      // Show the text in red
      trow.innerHTML += "<td class='text-danger'>" + progress.total.count + "</td>";
    }
    

    // If the deck is <50% complete
    if (percentage < 50)
    {
      trow.innerHTML += "<td class='text-danger'>" + progress.obtained.count + "</td>" + 
      "<td class='text-danger'>" + progress.missing.count + "</td>" + 
      "<td class='text-danger'>" + percentage + "%</td>";
    }
    // Deck is less than 100% complete
    else if (percentage < 100)
    {
      trow.innerHTML += "<td class='text-warning'>" + progress.obtained.count + "</td>" + 
      "<td class='text-warning'>" + progress.missing.count + "</td>" + 
      "<td class='text-warning'>" + percentage + "%</td>";
    }
    else // Deck is 100% complete
    {
      trow.innerHTML += "<td class='text-success'>" + progress.obtained.count + "</td>" + 
      "<td class='text-success'>" + progress.missing.count + "</td>" + 
      "<td class='text-success'>" + percentage + "%</td>";
    }

    trow.innerHTML += "<td class='text-success'>$" + obtained + " AUD</td>" + 
    "<td class='text-danger'>$" + missing + " AUD</td>" + 
    "<td class='text-light'>$" + total + " AUD</td>";

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
  // Get the list of deck formats
  //decklist = Object.keys(decks[format]);
  decklist = getDeck(deck, format);

  // De-Categorise the cards list
  cards = flattenCards(decklist);

  // If decklist is valid
  if (decklist)
  {
    // Create a table element
    table = document.createElement('table');

    // Specify the table classes
    table.className = "table table-dark bg-dark";

    // Create a table row for the header
    thead = document.createElement('thead');

    // Specify the header classes
    thead.className = "";

    // Assign the columns in the table header
    thead.innerHTML = "<tr>" + 
      "<th class='text-light' scope='col'> Name </th>" + 
      "<th class='text-light' scope='col'> Obtained </th>" + 
      "<th class='text-light' scope='col'> Missing </th>" + 
      "<th class='text-light' scope='col'> Total </th>" + 
      "<th class='text-light' scope='col'> Price (Obtained) </th>" + 
      "<th class='text-light' scope='col'> Price (Missing) </th>" + 
      "<th class='text-light' scope='col'> Price (Total) </th>" + 
      "</tr>";
      
    // Add the table head to the table
    table.appendChild(thead);

    // Create the table body
    tbody = document.createElement('tbody');
  }
  else // Decklist not found
  {
    // Send us back to the homepage
  }

  // Get the deck progress
  // For the title row
  progress = getDeckProgress(deck, format);

  summary = document.createElement('tr');

  summary.innerHTML = "<th class='text-light' scope='row'> Summary </th>" + 
  "<th class='text-light'>" + progress.obtained.count + "</th>" + 
  "<th class='text-light'>" + progress.missing.count + "</th>" + 
  "<th class='text-light'>" + progress.total.count + "</th>" + 
  "<th class='text-success'>$" + (progress.obtained.price * USDAUD).toFixed(2) + " AUD</th>" + 
  "<th class='text-danger'>$" + (progress.missing.price * USDAUD).toFixed(2) + " AUD</th>" + 
  "<th class='text-light'>$" + (progress.total.price * USDAUD).toFixed(2) + " AUD</th>";

  tbody.appendChild(summary);

  // Loop over all of the formats
  cards.forEach(card => {

    // Create the table row for the row
    trow = document.createElement('tr');
    
    // Get the price of the current card
    price = getPrice(card[0], card[1]);

    if (price === -1)
    {
      // Add asterisk to prices
      obtained = obtained.toString() + '*';
      missing = missing.toString() + '*';
      total = total.toString() + '*';
    }
    else
    {
      // Total format card value
      total = (((card[2] * price) + (card[3] * price)) * USDAUD).toFixed(2);

      // Total obtained cards value
      obtained = (((card[2] * price)) * USDAUD).toFixed(2);

      // Total missing cards value
      missing = (((card[3] * price)) * USDAUD).toFixed(2);
    }

    // Set the contents for the row
    trow.innerHTML = 
    // Deck Format
    "<th class='text-light' scope='row'>" + card[0] + "</th>" + 
    "<td class='text-light'>" + card[2] + "</td>" + 
    "<td class='text-light'>" + card[3] + "</td>" + 
    "<td class='text-light'>" + (card[2] + card[3]) + "</td>" + 
    "<td class='text-success'>$" + obtained + " AUD</td>" + 
    "<td class='text-danger'>$" + missing + " AUD</td>" + 
    "<td class='text-light'>$" + total + " AUD</td>";

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