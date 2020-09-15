import React, { Component } from 'react'
import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'

class Assignment1 extends Component {
  render() {
    return (
      <article className='wrapper'>
        <h1>Assignment 1</h1>
        <UserInput />
        <UserOutput />
      </article>
    )
  }
}

export default Assignment1
