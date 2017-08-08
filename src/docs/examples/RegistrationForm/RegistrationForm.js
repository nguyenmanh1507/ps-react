import React, { Component } from 'react'
import RegistrationForm from 'ps-react/RegistrationForm'

export default class ExampleRegistrationForm extends Component {
  onSubmit = (user) => {
    console.log(user)
  }

  render() {
    return (
      <RegistrationForm onSubmit={this.onSubmit} />
    )
  }
}
