// showPageHome(Void): Void
// Shows the home page, listing 
// all formats and other basic info
function showPageHome()
{
  // getRowFormat(title: String, progress: Object, header: Bool): Element
  // Given a row title, format progress object and if the row is a header
  // row or not, generates the row using the properties and returns them 
  // to the caling process.
  function getRowFormat(title, progress, format, header = false)
  {
    // Get the total number of cards in the progress, including variants
    let totalCards = progress.deck.missing + progress.deck.obtained;

    // Get the total percentage of cards which have been obtained, including variants
    let percentage = getPercentage(progress.deck.obtained + 
      progress.variant.obtained, totalCards + 
      (progress.variant.obtained + progress.variant.missing));

    // Get the colour for all of the other columns
    let colorTotal = getProgressColor(percentage);

    // Get the colour for the completed decks column
    let colorDecks = getProgressColor(getPercentage(
      // Total of complete decks over total decks
      progress.deck.complete, progress.deck.total
    ));

    // Clone the decks colour for the progress
    // bar, in case the decks colour is changed
    let colorPercentage = colorTotal;

    // Total cards missing from the decks
    // Is an array, so variants can be appended if required
    let deckTotal = [progress.deck.total];

    // Total number of complete decks
    // Is an array, so variants can be appended if required
    let deckComplete = [progress.deck.complete];

    // Total number of obtained cards in decks
    let deckObtained = [progress.deck.obtained];
    
    // Total number of missing cards in decks
    let deckMissing = [progress.deck.missing];

    // If there are any variants in the list
    if (progress.variant.total > 0)
    {
      // Get the colour for the completed variants column
      let colorVariantsComplete = getProgressColor(getPercentage(
        // Total number of complete variants over total variants
        progress.variant.complete, progress.variant.total
      ));

      // Get the total variant cards compared to the required cards
      let totalVariantCards = progress.variant.obtained + 
        progress.variant.missing;

      // Get the colour for the total progress for variants
      let colorVariantsTotal = getProgressColor(getPercentage(
        // Total number of variant cards over total required
        progress.variant.obtained, totalVariantCards
      ));

      // Set colorDecks to be a list
      colorDecks = [

        // Colour for decks
        colorDecks, 

        // Colour for variants
        colorVariantsComplete
      ]

      colorTotal = [
        // Colour for deck
        colorTotal, 

        // Colour for variants
        colorVariantsTotal
      ]

      // Append the variant total to the deck total
      // This will show the variant total as subscript
      deckTotal.push(progress.variant.total);

      // Append the complete variants to the complete
      // decks total, showing variant total as subscript
      deckComplete.push(progress.variant.complete);

      // Append the variant cards obtained to the total
      deckObtained.push(progress.variant.obtained);

      // Append the variant cards missing to the total
      deckMissing.push(progress.variant.missing);
    }

    // Generate and return a table row
    return getTableRow([
      title, // Format
      deckTotal, // Total Decks
      deckComplete, // Completed Decks
      deckObtained, // Obtained Cards
      deckMissing, // Missing Cards
      (percentage * 100).toFixed(2) + "%", // Progress
      "<a class='link-secondary' href='" + 
      getBuylistLink(format) + "'>Buylist</a>" // Buylist Link
    ], [
      COLOR_WHITE, // Format, always light gray
      COLOR_GREEN, // Total Decks, always green
      colorDecks, // Completed Decks
      colorTotal, // Obtained Cards
      colorTotal, // Missing Cards
      colorPercentage, // Progress
      COLOR_WHITE // Buylist Link, always dark gray
    ], header);
  }

  // Assign the header to the title
  document.title = config.title;

  // Set the page title
  document.getElementById('pagetitle').innerHTML = config.title;

  // Get the list of deck formats
  let formats = Object.keys(decks);

  // Create a table element
  let table = document.createElement('table');

  // Specify the table classes
  table.className = "table table-dark bg-dark";

  // Add the table head to the table
  table.appendChild(getTableHeader([
    "Format", "Total Decks", 
    "Completed Decks", "Obtained Cards", 
    "Missing Cards", "Progress", "Buylist"
  ]));

  // Create the table body
  let tbody = document.createElement('tbody');

  // Get the overall collection summary
  let totalProgress = getTotalProgress();

  // Add a row for the total progress to the table
  tbody.appendChild(getRowFormat("Summary", totalProgress, null, true));

  // Loop over all of the formats
  formats.forEach(format => {

    // Get the format progress
    let formatProgress = getFormatProgress(format);

    // Add a row for the format progress to the table
    tbody.appendChild(getRowFormat(getFormatTitle(format), formatProgress, format, false));
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
  // getRowFormat(title: String, progress: Object, header: Bool): Element
  // Given a row title, deck progress object and if the row is a header
  // row or not, generates the row using the properties and returns them 
  // to the caling process.
  function getRowDeck(format, deck, title, progress, header = false)
  {
    // Get the total number of cards in the progress, including variants
    let totalCards = progress.deck.missing + progress.deck.obtained;

    // Get the total percentage of cards which have been obtained, including variants
    let percentage = getPercentage(progress.deck.obtained + 
      progress.variant.obtained, totalCards + 
      (progress.variant.obtained + progress.variant.missing));
      
    // Get the colour for all of the other columns
    let colorTotal = getProgressColor(percentage);

    // Clone the decks colour for the progress
    // bar, in case the decks colour is changed
    let colorPercentage = colorTotal;

    // Generate the title which will be used for the row
    let rowTitle = ["<a class='link-light' href='" + 
      getPageLink(format, deck) + "'>" + title + "<a/>"]

    // Number of obtained cards in the deck
    let deckObtained = [progress.deck.obtained];

    // Number of missing cards in the deck
    let deckMissing = [progress.deck.missing];

    // If there are any variants in the list
    if (progress.variant.total > 0)
    {
      // Add a link to the variant page for the deck to the title
      rowTitle.push("<a class='link-light' href='" + 
        getVariantPageLink(format, deck) + "'><sub>(+" + // Change to get variant link
        progress.variant.total + ")</sub></a>");

      // Add the total obtained variant cards to the total missing cards
      let totalVariantCards = progress.variant.obtained + 
        progress.variant.missing;

      // Get the colour for the total progress for variants
      let colorVariants = getProgressColor(getPercentage(
        // Total number of variant cards over total required
        progress.variant.obtained, totalVariantCards
      ));

      // Update the colourTotal object
      colorTotal = [

        // Colour for decks
        colorTotal, 

        // Colour for variants
        colorVariants
      ]

      // Convert totalCards object to a list
      totalCards = [totalCards];

      // Add the variant cards to the total cards list
      totalCards.push(totalVariantCards);

      // Add the number of variant cards to the obtained cards
      deckObtained.push(progress.variant.obtained);

      // Add the number of variant cards to the missing cards
      deckMissing.push(progress.variant.missing);
    }      

    return getTableRow([
      rowTitle, // Deck Name
      totalCards, // Deck Cards
      deckObtained, // Obtained Cards
      deckMissing, // Missing Cards
      (percentage * 100).toFixed(2) + "%", // Percentage
      "<a class='link-secondary' href='" + 
        getBuylistLink(format, deck) + "'> Buylist </a>" // Buylist
    ], [
      COLOR_WHITE, // Format, always light gray
      COLOR_GREEN, // Total Decks, always green
      colorTotal, // Obtained Cards
      colorTotal, // Missing Cards
      colorPercentage, // Percentage
      COLOR_WHITE // Buylist Link, always dark gray
    ], header);
  }

  // Assign the header to the title
  document.title = format;

  // Set the page title
  document.getElementById('pagetitle').innerHTML = getFormatTitle(format);

  // Get the list of deck formats
  let decklist = Object.keys(decks[format].decks);

  // Empty array for storing progress
  let progresslist = {}

  // Loop over all of the decks
  for (let deck of decklist)
  {
    // Get the progress of the deck from the deck list
    progresslist[deck] = getDeckProgress(deck, format);
  }

  // Sort the decks by completeness
  decklist.sort(function(a, b){

    // Progress of first element
    let progress_a = progresslist[a].deck.obtained

    // Progress of second element
    let progress_b = progresslist[b].deck.obtained

    // If they have the same progress
    if (progress_a == progress_b)
    {
      // Sort based on alphabetical order
      return a > b
    }
    else // They have different progress
    {
      // Sort based on deck numbering
      return progress_a < progress_b
    }

  });

  // Create a table element
  let table = document.createElement('table');

  // Specify the table classes
  table.className = "table table-dark bg-dark";
    
  // Add the table head to the table
  table.appendChild(getTableHeader([
    "Deck", "Total Cards", "Obtained Cards", 
    "Missing Cards", "Progress", "Buylist"
  ]));

  // Create the table body
  let tbody = document.createElement('tbody');

  // Get the overall format info
  let formatProgress = getFormatProgress(format);

  // 
  tbody.appendChild(getRowDeck(format, null, "Summary", formatProgress, true));

  // Loop over all of the formats
  decklist.forEach(deck => {

    // Get the progress for the current deck
    let deckProgress = getDeckProgress(deck, format);
    
    // 
    tbody.appendChild(getRowDeck(format, deck, deck, deckProgress, false));
  });

  // Add the table body to the table
  table.appendChild(tbody);

  // Get the main element from the page
  const main = document.getElementById('main');

  // Add the table to the main element
  main.appendChild(table);
}

function getCardCategoryTable(name, category, parent)
{
  // Get the category progress
  let progress = getCategoryProgress(category);

  // Get the combined total of missing and obtained cards
  let total = progress.obtained + progress.missing;

  // Get the colour for the progress (based on % of cards obtained)
  let color = getProgressColor(getPercentage(progress.obtained, total));
  
  // Add the header to the div element
  parent.appendChild(getTableRow([
    name, // Card Name
    "", // Set Number
    progress.obtained, // Cards Obtained
    progress.missing, // Cards Missing
    total, // Total Cards
    "" // Details
  ], [
    COLOR_WHITE, // Card Name
    COLOR_WHITE, // Set Number
    color, // Cards Obtained
    color, // Cards Missing
    color, // Total Cards
    COLOR_WHITE, // Details
  ], true));

  // Loop over each card in the category
  category.forEach(card => {

    // Get the total number of cards required
    let cardTotal = card[2] + card[3];

    // Get the colour of the card, based upon the total number of cards
    // versus the number of cards required
    let cardColor = getProgressColor(getPercentage(card[2], cardTotal));

    parent.appendChild(getTableRow([
      card[0], // Card Name
      card[1], // Set Number
      card[2], // Copies Obtained
      card[3], // Copies Missing
      cardTotal, // Total Copies
      "<a target='_blank' href='" + 
        getPGFQuery(card[0], card[1]) + 
        "> Link </a>"// Card Details
    ], [
      COLOR_WHITE, // Card Name
      COLOR_WHITE, // Set Number
      cardColor, // Cards Obtained
      cardColor, // Cards Missing
      cardColor, // Total Cards
      COLOR_WHITE, // Details
    ], false));
  });
}

// showPageDeck(Deck: String, Format: String): Void
// Given a deck and a format, shows a page that lists
// all of the cards in that deck, as well as their info
// such as how many we have, how many we need, their
// value, and other information about the deck.
function showPageDeck(deck, format, variant = null)
{
  // Get the main element from the page
  let main = document.getElementById('main');

  // Get the list of deck formats
  let decklist = getDeck(deck, format);

  // Set the page title
  let title = format + ' - ' + deck;

  // If a variant is selected
  if (variant)
  {
    // Set the decklist to the variant decklist
    decklist = getVariant(decklist, variant);

    // Element for the copy decklist to clipboard to reference
    document.decklist = decklist;

    // Add the variant text to the page title
    title += ' ' + variant;
  }

  // Assign the header to the title
  document.title = deck

  // Set the page content title to the title
  document.getElementById('pagetitle').innerHTML = title;

  // If the decklist is not null
  if (decklist !== null)
  {
    // Populate and create the copy link for the deck list
    
    // Get the empty a tag for the copy link
    let deckCopy = document.getElementById('deckcopy');

    // Populate the a tag with the text
    deckCopy.innerHTML = "Copy Decklist";

    // Add the copy event 
    // to the copy button
    addCopyEvent(deckCopy);

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
    tableHead.appendChild(getTableHeader([
      "Card Name", "Set Number", "Copies Obtained", 
      "Copies Missing", "Total", "Details"
    ]));
    
    // Create the table body
    tbodyHead = document.createElement('tbody');

    // Get the deck progress
    // For the title row
    let progress = getDeckProgress(deck, format, variant);

    // Get the total number of cards in the deck
    let totalCards = progress.deck.obtained + progress.deck.missing;

    // Get the colour 
    let totalColor = getProgressColor(progress.deck.obtained, totalCards);

    // Add the table body to the column
    tableHead.appendChild(getTableRow([
      "Summary", // Card Name
      "-", // Set Number
      progress.deck.obtained, // Copies Obtained
      progress.deck.missing, // Copies Missing
      totalCards, // Total Cards
      "-" // Card Details
    ], [
      COLOR_WHITE, // Card Name
      COLOR_WHITE, // Set Number
      totalColor, // Copies Obtained
      totalColor, // Copies Missing
      totalColor, // Total Cards
      COLOR_WHITE // Card Details
    ], true));

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

    // Get a new left side table object
    let tbodyLeft = getSideTableObject(row);

    // Create the pokemon table and append it to the page
    getCardTable("Pokemon", decklist.pokemon, tbodyLeft);

    // Create the energy table and append it to the page
    getCardTable("Energy", decklist.energy, tbodyLeft);

    // Get a new right side table object
    let tbodyRight = getSideTableObject(row);

    // Create the supporter table and append it to the right table
    getCardTable("Supporter", decklist.supporter, tbodyRight);
    
    // Create the item table and append it to the right table
    getCardTable("Item", decklist.item, tbodyRight);
    
    // Create the tool table and append it to the right table
    getCardTable("Tool", decklist.tool, tbodyRight);
    
    // Create the stadium table and append it to the right table
    getCardTable("Stadium", decklist.stadium, tbodyRight);

    // Add the row to the container
    container.appendChild(row);

    // Add the container to the main
    main.appendChild(container);
  }
  else // Failed to get decklist
  {
    console.error("Failed to find deck with properties format '", format,"', deck '", deck, "' and variant '",variant,"'.");
  }
}

// showPageVariants(deck: String, format: String): Void
// Given an optional deck and an optional format, shows the
// list of variants for all decks which meet the deck and 
// format criteria. If neither a deck nor a format are 
// provided, all variants will be listed, along with the
// cards which have been modified from the original list.
function showPageVariants(format, deck = null)
{
  // Get the main element from the page
  let main = document.getElementById('main');

  // Create the starting title
  let title = "Variant List";

  // If format is specified
  if (format)
  {
    // Add the format to the title
    title += " - " + format;

    // If deck is specified
    if(deck)
    {
      // Add the deck to the title
      title += " - " + deck;
    }
  }

  // Set the document title to the title
  document.title = title;

  // Set the document in-page title to the title
  document.getElementById('pagetitle').innerHTML = title;

  // List of variants to process
  let variantList = [];

  // If format is specified
  if (format)
  {
    // If deck is specified
    if(deck)
    {
      // Get the data for the deck
      let deck_object = getDeck(deck, format);

      // Loop over all of the variants in the deck
      Object.keys(deck_object.variants).forEach(variant_name => {

        // Dereference the variant properties
        let variant_data = deck_object.variants[variant_name];

        // Push the variant properties onto the variant list
        variantList.push([format, deck, variant_name, variant_data])
      });
    }
    else // No deck is specified
    {
      // Get the format object
      let data = getFormat(format);

      // Loop over all of the decks in the format
      Object.keys(data.decks).forEach(deck_name => {

        // Get the deck object for the deck
        deck_object = data.decks[deck_name];

        // Loop over all of the variants in the deck
        Object.keys(deck_object.variants).forEach(variant_name => {

          // Dereference the variant properties
          let variant_data = deck_object.variants[variant_name];

          // Push the variant properties onto the variant list
          variantList.push([format, deck_name, variant_name, variant_data])
        });
      });
    }
  }

  // Create a new div to serve as a container
  let container = document.createElement('div');

  // Set the class for the container
  container.className = 'container';

  // Create the row to store the container header
  let rowHead = document.createElement('div');

  // Set the class for the header
  rowHead.className = 'row';

  // If there is only one result in the list
  if (variantList.length == 1)
  {
    // Get the first element of the variant list
    let variant = variantList[0];

    // Open the full page for the variant
    window.location.href = getPageLink(variant[0], variant[1], variant[2]);
  }
  else // There is none or multiple results in the list
  {
    // Loop over all of the variants
    variantList.forEach(variant => {

      // Create the column to store the container header
      let colHead = document.createElement('div');

      // Assign the column header as a column
      colHead.className = 'col';

      // Add the deck title to the column
      let deckTitle = document.createElement('div');

      // Set the classes for the deck title
      deckTitle.classList = 'text-center text-justify text-light bg-dark';

      // Create the title for the variant
      deckTitle.innerHTML = "<h5>" + variant[0] + " - " + 
        variant[1] + " " + variant[2] + "</h5>";

      // Create the link to the full page for the variant
      deckTitle.innerHTML += "<a class='text-secondary' href='" + 
        getPageLink(variant[0], variant[1], variant[2]) + "'> Full Deck List </a>";

      console.log(getPageLink(variant[0], variant[1], variant[2]));

      // Add the deck title to the column head
      colHead.appendChild(deckTitle);

      // Populate the column header for the page
      // Contents: Overall deck information

      // Create a table element for the header
      let table = document.createElement('table');

      // Specify the table classes
      table.className = "table table-dark bg-dark";

      // Create a table row for the header
      table.appendChild(getTableHeader([
        "Card Name", "Set Number", "Copies Obtained", 
        "Copies Missing", "Total", "Details"
      ]));

      // Get the variant data
      let data = variant[3];

      // getCardCategoryTable()

      let child = getSideTableObject(colHead);

      // Add the variant's pokemon to the table
      getCardCategoryTable("Pokemon", data.pokemon, child);

      // Add the variant's supporters to the table
      getCardCategoryTable("Supporter", data.supporter, child);

      // Add the variant's pokemon to the table
      getCardCategoryTable("Item", data.item, child);

      // Add the variant's supporters to the table
      getCardCategoryTable("Tool", data.tool, child);

      // Add the variant's pokemon to the table
      getCardCategoryTable("Stadium", data.stadium, child);

      // Add the variant's supporters to the table
      getCardCategoryTable("Energy", data.energy, child);
      
      // Add the left-hand side to the row
      rowHead.appendChild(colHead);
    });

    // Add the row to the container
    container.appendChild(rowHead);

    // Add the container to the body
    main.appendChild(container);
  }
}

function showPageBuylist(format = null, deck = null)
{
  // Get the page title object
  let pagetitle = document.getElementById('pagetitle');

  // Buylist placeholder
  let buylist;

  // Create the buylist title
  let title = "Card Buylist"; 

  // If a format is specified
  if (format !== null)
  {
    // Add it to the title
    title += " - " + format;

    // If a deck is specified
    if (deck !== null)
    {
      // Add it to the title
      title += " - " + deck;

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

  // Set the page title
  pagetitle.innerHTML = title; 

  // Set the document title
  document.title = title;

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
        "<td class='text-light' scope='row'>" + 
          "<a class='text-light' href='" + getCardLink(card, number) + "'>" + 
            card + "</a>" + "</td>" + 
        "<td class='text-light'>" + 
          "<a class='text-light' href='" + getCardLink(card, number) + "'>" + 
            number + "</a>" + "</td>" + 
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

// showPageCard(cardName: String, cardSet: String): Void
function showPageCard(cardName, cardSet)
{
  // Get the page title object
  let pagetitle = document.getElementById('pagetitle');

  // Get the link to the PGF Query
  let pagelink = getPGFQuery(cardName, cardSet);

  // Get the title name for the card
  let name = cardName.replace("-", " ").toUpperCase();

  // If a set is specified
  if (cardSet)
  {
    // Add it to the title
    name += " - " + cardSet;
  }

  // Set the page title
  let title = "<a class='text-light' href='" + 
    pagelink + "'>" + name;

  // Add the link end to the title
  title += "</a>";

  // Set the page title to the title
  pagetitle.innerHTML = title;

  // Set the title to the card name
  document.title = name;

  // Get all of the info for the card
  let cardInfo = getCardInfo(cardName, cardSet);

  // If the command is successful
  if (cardInfo)
  {
    // Create a table element
    let table = document.createElement('table');

    // Specify the table classes
    table.className = "table table-dark bg-dark";

    // Create a table row for the header
    let thead = document.createElement('thead');

    // Specify the header classes
    thead.className = "";

    /*
    'deck': deck, // Deck Name
    'format': format, // Format Name
    'variant': variant, // Variant Name
    'cardName': cardName, // Card Name
    'cardSet': cardSet, // Card Set / Set Number
    'obtained': obtained, // Obtained Card Count
    'missing': missing // Missing Card Count
    */

    // Assign the columns in the table header
    thead.innerHTML = "<tr>" + 
      "<th class='text-light' scope='col'> Deck </th>" + 
      "<th class='text-light' scope='col'> Format </th>" + 
      "<th class='text-light' scope='col'> Variant </th>" + 
      "<th class='text-light' scope='col'> Obtained </th>" + 
      "<th class='text-light' scope='col'> Missing </th>" + 
      "</tr>";
      
    // Add the table head to the table
    table.appendChild(thead);    
  
    // Create the table body
    tbody = document.createElement('tbody');

    // Create a row for storing the deck summary
    let summary = document.createElement('tr');

    // Get the summary of the card info
    let cardInfoSummary = getCardSummary(cardInfo);

    summary.innerHTML = "<tr>" + 
    "<th class='text-light' scope='col'> - </th>" + 
    "<th class='text-light' scope='col'> - </th>" + 
    "<th class='text-light' scope='col'> - </th>" + 
    "<th class='text-light' scope='col'>" + cardInfoSummary.obtained + "</th>" + 
    "<th class='text-light' scope='col'>" + cardInfoSummary.missing + "</th>" + 
    "</tr>";

    tbody.appendChild(summary);

    // Loop over all of the cards in the buylist
    // Sort ensures card names will be alphabetical
    // for(card of Object.keys(cardInfo).sort())
    Object.keys(cardInfo).forEach(card => {

      // Dereference the card info
      info = cardInfo[card];

      // Create the table row for the row
      let trow = document.createElement('tr');

      // Set the contents for the row
      trow.innerHTML = 
        "<td class='text-light' scope='row'>" + 
          "<a class='text-light' href='" + getPageLink(info.format, info.deck) + 
            "'>" + info.deck + "</a></td>" + 
          "<td class='text-light' scope='row'>" + 
          "<a class='text-light' href='" + getPageLink(info.format) + 
            "'>" + info.format + "</a></td>";


      // Variant is default
      if (info.variant === '-')
      {
        // Main deck, just add the dash
        trow.innerHTML += 
          "<td class='text-light' scope='row'>" + info.variant + "</td>";
      }
      else // Variant is selected
      {
        trow.innerHTML += 
          "<td class='text-light' scope='row'>" + 
            "<a class='text-light' href='" + getPageLink(info.format, info.deck, info.variant) + 
              "'>" + info.variant + "</a></td>";
      }

      // Add the obtained / missing contents to the row
      trow.innerHTML +=      
        "<td class='text-light' scope='row'>" + info.obtained + "</td>" + 
        "<td class='text-light' scope='row'>" + info.missing + "</td>";

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
    // We are on the variantlist page
    else if (params.has('variantlist'))
    {
      // Show the deck / format variant list
      showPageVariants(format, deck);
    }
    else // We are not on the buylist page
    {
      // If the deck variant is specified
      if (params.has('variant'))
      {
        // Get the variant from the parameters
        let variant = params.get('variant');

        // Pass the variant to the page
        showPageDeck(deck, format, variant);
      }
      else // We are not on the variant page
      {
        // Show the deck list
        showPageDeck(deck, format);
      }
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
    // We are on the variantlist page
    else if (params.has('variantlist'))
    {
      // Show the deck / format variant list
      showPageVariants(format);
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
else if (params.has('card'))
{
  // Show the card page

  // If there is a card name specified
  if (params.has('set'))
  {
    // Show the page for the card

    showPageCard(
      params.get('card'), 
      params.get('set')
    )
  }
}
else // We are not on the buylist page
{
  // Show the home page
  showPageHome();
}
