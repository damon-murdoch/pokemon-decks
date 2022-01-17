// getTableHeader(columns: List): Element
// Given a list of columns, generates a table
// header object containing the column values
// and returns them to the calling process.
function getTableHeader(columns)
{

  // Create the table header element
  let thead = document.createElement('thead');

  // Create a table row for the header
  let tr = document.createElement('tr');

  // Loop over the columns
  for(let col of columns)
  {
    // Add the column to the title row
    tr.innerHTML += "<th>" + col + "</th>";
  }

  // Add the row to the header
  thead.appendChild(tr);

  // Return the header
  return thead;
}

// getTableRow(columns: List, colors: List, header: Bool): Element
// Given a list of columns, list of colours and a header switch creates
// a table row containing the given elements, applying the corresponding
// colour to each row. If the header switch is applied, th elements are
// used instead of td elements. Once completed, the tr element is returned
// to the calling process.
function getTableRow(columns, colors, header = false)
{
  // Create the table row object
  let tr = document.createElement('tr');

  // Loop over all of the rows in the column
  for(let i=0; i<columns.length; i++)
  {
    // Dereference the colour
    let color = colors[i];

    // Dereference the content
    let content = columns[i];

    // If the content in the column is a list AND the list
    // has more than one item
    if (typeof(content) == 'object' && (content.length > 1))
    {
      // Primary element (element 0)
      let pri = content[0];

      // Sub element (element 0)
      let sub = content[1];

      // If there are multiple elements in the color
      if (typeof(color) == 'object'  && (color.length > 1))
      {
        // Colour for primary element
        let pri_c = getColorStyle(color[0]);

        // Colour for secondary element
        let sub_c = getColorStyle(color[1]);

        // If we are creating a header
        if (header === true)
        {
          // Add the primary element with the primary colour, 
          // and the secondary element as a subscript with the
          // secondary color

          // use th element
          tr.innerHTML += "<th style='" + pri_c + "'>" + 
            pri + "<sub style='" + sub_c + "'>" + sub + "</sub></th>"
        }
        else // Not creating a header
        {
          // Add the primary element with the primary colour, 
          // and the secondary element as a subscript with the
          // secondary color

          // use standard td element
          tr.innerHTML += "<td style='" + pri_c + "'>" + 
            pri + "<sub style='" + sub_c + "'>" + sub + "</sub></td>"
        }


      }
      else // Only one colour provided
      {
        // If we are creating a header
        if (header === true)
        {
          // Add the primary element with the primary colour, 
          // and the secondary element as a subscript

          // use th element
          tr.innerHTML += "<th style='" + getColorStyle(color) + "'>" + 
          pri + "<sub>" + sub + "</sub></th>"
        }
        else // Not creating a header
        {
          // Add the primary element with the primary colour, 
          // and the secondary element as a subscript

          // use standard td element
          tr.innerHTML += "<td style='" + getColorStyle(color) + "'>" + 
            pri + "<sub>" + sub + "</sub></td>"
        }
      }
    }
    else // Content is normal string / number / etc.
    {
      // If this is the title column 
      // OR if the header flag is set
      if (header === true)
      {
        // Use th instead of td elements

        // Add the colour styling and content for the column to the row
        tr.innerHTML += "<th style='" + getColorStyle(colors[i]) + "'>" + 
          columns[i] + "</th";
      }
      else // Header flag is not set
      {
        // Add the colour styling and content for the column to the row
        tr.innerHTML += "<td style='" + getColorStyle(colors[i]) + "'>" + 
          columns[i] + "</td";
      }
    }
  }

  // Return the summary
  return tr;
}

function getCardTable(name, category, parent)
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
    {r: 255, g: 255, b: 255}, // Card Name
    {r: 255, g: 255, b: 255}, // Set Number
    color, // Cards Obtained
    color, // Cards Missing
    color, // Total Cards
    {r: 255, g: 255, b: 255}, // Details
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
      {r: 255, g: 255, b: 255}, // Card Name
      {r: 255, g: 255, b: 255}, // Set Number
      cardColor, // Cards Obtained
      cardColor, // Cards Missing
      cardColor, // Total Cards
      {r: 255, g: 255, b: 255}, // Details
    ], false));
  });
}

// getSideTableObject(parent: Element): Element
// Given a side table object, creates a side table
// element object and appends it to the parent object.
// the table body element is returned so that elements
// can be appended to it.
function getSideTableObject(parent)
{
  // Create the div element for the side
  let div = document.createElement('div');

  // Assign the div as a column
  div.className = 'col';

  // Create the table element
  let table = document.createElement('table');

  // Configure the table classes
  table.className = 'table table-dark bg-dark';

  // Add the table head to the table
  table.appendChild(getTableHeader([
    "Card Name", "Set Number", "Copies Obtained", 
    "Copies Missing", "Total", "Details"
  ])); 

  // Create the table body element
  let tbody = document.createElement('tbody');

  // Add the table body to the table
  table.appendChild(tbody);

  // Add the table to the created div
  div.appendChild(table);

  // Add the created div to the parent
  parent.appendChild(div);

  // Return the table body element
  return tbody;
}