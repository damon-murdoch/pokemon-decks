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

// getFormatTitle(format: String): String
// Given a format title, retrieves the logo
// for both the starting and ending format
// and combines them into a title, along
// with a link to the format. Then, returns
// the created title to the calling process.
function getFormatTitle(format)
{
  // Get the requested format
  let data = getFormat(format);

  // If data is returned
  if (data !== null)
  {
    // Get the format logos
    let sprites = getFormatLogos(
      data.meta.start, // Starting set logo 
      data.meta.end // Ending set logo
    );

    // Return a container for the format title including both starting
    // and ending sprites, as well as the format title. When clicked, 
    // the format name links to the format page.
    return "<div class='d-flex justify-content-center'><img src='" + 
      sprites.start + "'>" + "</img><a href='" + getPageLink(format) + 
      "' class='text-light px-2'>" + format + "</a>" + 
      "<img src='" + sprites.end + "'>" + "</img></div>";
  }

  // Return null by default
  return null;
}