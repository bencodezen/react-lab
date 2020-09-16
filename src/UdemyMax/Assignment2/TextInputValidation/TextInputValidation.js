import React, { Component } from 'react'

class TextInputValidation extends Component {
  textLengthMessage = () => {
    if (this.props.inputLength === 0) {
      return null
    } else if (this.props.inputLength >= 5) {
      return <p>Minimum 5 character length requirement met!</p>
    } else {
      return (
        <p>
          Needs {5 - this.props.inputLength} more characters to meet 5 character
          minimum length.
        </p>
      )
    }
  }

  render() {
    return <div>{this.textLengthMessage()}</div>
  }
}

export default TextInputValidation
