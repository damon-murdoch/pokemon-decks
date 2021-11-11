// Given an arbitrary completion
// percentage (between 0 and 1), 
// where 0 is 0% and 1 is 100% 
// calculate the colour which
// should be displayed to 
// demonstrate that progress.
function getProgressColor(progress)
{
  // r, g, b
  // 0-255
  color = {
    r: 0, // Red
    g: 0, // Green
    b: 0 // Blue
  };

  // Less than or equal to 50%
  if (progress <= 0.5)
  {
    // Max red value
    color.r = 255;

    // Green value as % of progress
    color.g = Math.round((progress * 2) * 255);
  }
  // Greater than 50%
  else if (progress > 0.5)
  {
    // Red value as % of progress
    color.r = Math.round((1 - (progress - 0.5) * 2) * 255);

    // Max green value
    color.g = 255;
  }

  // Return the color to the calling process
  return color;
}