// &flow

// Return the width of a percent of total width, as an integer
export function getWidthPercentOfTotalWidth(percent, totalWidth) {
  return parseInt(totalWidth * (percent / 100), 10)
}
