import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProgressBar extends Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green'
    return this.props.percent > 50 ? 'lightgreen' : 'red'
  }

  getWidthPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10)
  }

  render () {
    const { percent, width, height } = this.props

    return (
      <div style={{border: 'solid 1px lightgray', width}}>
        <div
          style={{
            width: this.getWidthPercentOfTotalWidth(),
            height,
            backgroundColor: this.getColor(percent)
          }}
        />
      </div>
    )
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number.isRequired
}

ProgressBar.defaultProps = {
  height: 5
}
