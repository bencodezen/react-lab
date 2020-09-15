import React, { Component } from 'react'
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class Assignment1 extends Component {
  state = {
    username: 'Aang'
  }

  swapAvatar = () => {
    this.setState({
      username: 'Korra'
    })
  }

  render() {
    return (
      <article className='wrapper'>
        <h1>Assignment 1</h1>
        <button onClick={this.swapAvatar}>Swap Avatar</button>
        <UserInput />
        <UserOutput username={this.state.username} />
        <UserOutput username='Katara' />
        <UserOutput username='Toph' />
        <UserOutput username='Zuko' />
      </article>
    )
  }
}

export default Assignment1
