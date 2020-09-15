import React, { Component } from 'react'

class UserInput extends Component {
  render() {
    return (
      <div>
        <label>Set Custom Avatar Name</label>
        <input
          onChange={this.props.onChangeHandler}
          type='text'
          value={this.props.value}
        ></input>
      </div>
    )
  }
}

export default UserInput
