import React, { Component } from 'react'
class UserOutput extends Component {
  render() {
    const wrapperStyles = {
      border: '1px solid #ccc',
      marginBottom: '2rem',
      padding: '2rem'
    }

    return (
      <div style={wrapperStyles}>
        <h2>User: {this.props.username}</h2>
        <p>
          Commodo consequat eiusmod officia qui duis nulla nostrud. Minim culpa
          dolore ea velit. Incididunt eiusmod aliquip excepteur reprehenderit
          nulla labore anim voluptate incididunt enim et. Consequat ullamco id
          voluptate aliqua Lorem pariatur enim. Aute commodo anim consectetur
          sint aliqua Lorem consequat ad voluptate sint.
        </p>
        <p>
          Laboris eiusmod minim ea labore. Aute qui est incididunt exercitation
          ut ut aliquip enim amet. Minim nisi fugiat nostrud qui nulla. Sit eu
          ut et non consectetur fugiat.
        </p>
      </div>
    )
  }
}

export default UserOutput
