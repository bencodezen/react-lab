import React, { Component } from 'react'
import './CharacterBox.css'

class CharacterBox extends Component {
  render() {
    return (
      <div className='character-box' onClick={this.props.onClickHandler}>
        {this.props.letter}
      </div>
    )
  }
}

export default CharacterBox
