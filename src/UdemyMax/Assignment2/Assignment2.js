import React, { Component } from 'react'
import CharacterBox from './CharacterBox/CharacterBox.js'
import TextInputValidation from './TextInputValidation/TextInputValidation.js'

class Assignment2 extends Component {
  state = {
    username: '',
    usernameLength: 0
  }

  updateUsername = event => {
    const inputValue = event.target.value
    const inputLength = inputValue.length

    this.setState({
      username: inputValue,
      usernameLength: inputLength
    })
  }

  render() {
    const characterBoxes = this.state.username
      .split('')
      .map(letter => <CharacterBox letter={letter} />)

    return (
      <article>
        <h1>Assignment 2</h1>
        <label>Username</label>
        <input
          type='text'
          id='username'
          onChange={this.updateUsername}
          value={this.state.username}
        />
        <TextInputValidation inputLength={this.state.usernameLength} />
        {characterBoxes}
      </article>
    )
  }
}

export default Assignment2
