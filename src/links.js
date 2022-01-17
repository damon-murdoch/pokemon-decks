// getCardLink(card: String, set: String, format: String): Url
// Given a card, the set number the card is from and an optional format,
// returns a link to the page for that card with respect to the given 
// format, deck and variant.
function getCardLink(card, set, format = null)
{
  // Get the generic page link object
  let url = getPageLink(format);

  // Add the card parameter to the url
  url.searchParams.set('card', card);

  // Add the set parameter to the url
  url.searchParams.set('set', set);

  // Return the url
  return url;
}

// getVariantPageLink(format: String, deck: String): Void
// Given an optional format and deck, returns a link to the 
// variant page for that deck or format. If no deck or format
// are provided, page displays all deck variants.
function getVariantPageLink(format = null, deck = null)
{
  // Get the generic page link object
  let url = getPageLink(format, deck);

  // Add the variant page parameter to the url
  url.searchParams.set('variantlist', true);

  // Return the url
  return url;
}

// getBuylistLink(format: String, deck: String, variant: String)
// Given an optional format, deck and variant returns a link to the 
// buylist page for that format, deck or variant.
function getBuylistLink(format = null, deck = null, variant = null)
{
  // Get the generic page link object
  let url = getPageLink(format, deck, variant);

  // Add the buylist parameter to the url
  url.searchParams.set('buylist', true);

  // Return the url
  return url;
}

// getPageLink(deck: String, format: String, card: String, variant: String): String
// Given an (optional) deck, format, card and variant string, gets
// a link to the page which links to you to the requested page.
function getPageLink(format = null, deck = null, variant = null)
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

      // If a variant is set
      if (variant)
      {
        // Add the variant to the link
        url.searchParams.set('variant', variant);
      }
    } 
    else // Deck is not set
    {
      // Remove deck, variant from the url
      url.searchParams.delete('deck');
      url.searchParams.delete('variant');
    }

    // Add the format to the link
    url.searchParams.set('format', format);
  }
  else // Format is not set
  {
    // Remove deck, format and variant from the url
    url.searchParams.delete('deck');
    url.searchParams.delete('format');
    url.searchParams.delete('variant');
  }

  // If card is in the parameters, remove it
  url.searchParams.delete('card');

  // If variant list is in the parameters, remove it
  url.searchParams.delete('variantlist');

  // Return the url reference
  return url;
}