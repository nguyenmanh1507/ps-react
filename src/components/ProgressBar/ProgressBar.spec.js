import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  test('getWidthPercentOfTotalWidth should return 250 width total of 500 and percent of 50', () => {
    const wrapper = shallow(<ProgressBar percent={50} width={500} />)
    const width = wrapper.instance().getWidthPercentOfTotalWidth()
    expect(width).toEqual(250)
  })
})
