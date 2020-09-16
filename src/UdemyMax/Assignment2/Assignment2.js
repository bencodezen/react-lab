import React, { Component } from 'react'

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
        <p>Username Length: {this.state.usernameLength}</p>
      </article>
    )
  }
}

export default Assignment2
