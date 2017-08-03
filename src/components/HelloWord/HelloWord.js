import React from 'react'
import PropTypes from 'prop-types'

/** A super lame component  that says Hello with a custom message */

const HelloWord = ({ name }) => (
  <h1>Hello word {name}</h1>
)

HelloWord.propTypes = {
  /** Your name :)) */
  name: PropTypes.string
}

HelloWord.defaultProps = {
  name: 'Nguyen Manh'
}

export default HelloWord
