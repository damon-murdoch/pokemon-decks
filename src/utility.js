// getPercentage(current: Number, total: Number): Number
// Given a current number and a total number, divides
// the current number by the total number and returns
// the result multiplied by 100 to make it a percentage.
function getPercentage(current, total)
{
  // Return the current amount divided
  // by the maximum amount, multiplied 
  // by 100 (to make it a percentage)
  return (((current / total)) || 0);
}

// addCopyEvent(element: Element): Void
// Given an element, adds the decklist 
// copy event to the given element.
function addCopyEvent(element)
{
  // Add the copy click event to the link
  element.addEventListener('click', async function(){

    // If the client's browser has the clipboard module
    if (navigator.clipboard)
    {
      // Get the string for the decklist
      let content = exportDecklist(document.decklist);

      // If a decklist is generated
      if (content !== "")
      {
        try
        {
          // Copy the string to the clipboard
          await navigator.clipboard.writeText(content);
        }
        catch (err) // Failed clipboard write
        {
          // Report the failure to the error console
          console.error('Failed to copy content "' + content + '"! Reason: "' + err + '"');
        }
      }
      else // Failed to export decklist
      {
        console.error("Failed to export decklist for deck '" + deck + "' of format '" + format + "'!")
      }
    }
    else // Clipboard module is not available
		{
			// Report failure to console, continue
			console.error('Clipboard interaction not supported by browser.');
		}
  });
}