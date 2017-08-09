import { getWidthPercentOfTotalWidth } from './percentUtils'

describe('ProgressBar', () => {
  test('getWidthPercentOfTotalWidth should return 250 width total of 500 and percent of 50', () => {
    const width = getWidthPercentOfTotalWidth(50, 500)
    expect(width).toEqual(250)
  })
})
