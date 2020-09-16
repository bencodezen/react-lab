import React, { Component } from 'react'
import TextInputValidation from './TextInputValidation/TextInputValidation.js'

class Assignment2 extends Component {
  state = {
    usernameLength: 0
  }

  updateUsernameLength = event => {
    const inputLength = event.target.value.length

    this.setState({
      usernameLength: inputLength
    })
  }

  render() {
    return (
      <article>
        <h1>Assignment 2</h1>
        <label>Username</label>
        <input type='text' id='username' onChange={this.updateUsernameLength} />
        <TextInputValidation inputLength={this.state.usernameLength} />
      </article>
    )
  }
}

export default Assignment2
