import React, { Component } from 'react'
import './UserInput.css'

class UserInput extends Component {
  render() {
    return (
      <div className='user-input-wrapper'>
        <label className='user-input-label'>Set Custom Avatar Name</label>
        <input
          className='user-input'
          onChange={this.props.onChangeHandler}
          type='text'
          value={this.props.value}
        ></input>
      </div>
    )
  }
}

export default UserInput
