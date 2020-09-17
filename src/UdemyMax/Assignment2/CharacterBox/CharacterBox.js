import React, { Component } from 'react'
import './CharacterBox.css'

class CharacterBox extends Component {
  render() {
    return <div class='character-box'>{this.props.letter}</div>
  }
}

export default CharacterBox
