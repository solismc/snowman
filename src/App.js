import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import words from './Data/Words.json'
import LetterButton from './LetterButton';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz' .split('')

class App extends Component {

  constructor(prop){
    super (prop);
    this.state = {
      pickedLetters: []
    }
  }

  componentDidMount(){

    console.log(words)
    console.log(words[2])
  }

  addLetterToPickedArray = (letter) => {
    const _newPickedLetters = this.state.pickedLetters.slice()
    _newPickedLetters.push(letter)
    console.log(_newPickedLetters)
    this.setState({
      pickedLetters: _newPickedLetters
    })
  }

  render() {
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => {
          return <LetterButton 
            key={i} 
            letter={letter} 
            picked={this.state.pickedLetters}
            addLetterHandler={this.addLetterToPickedArray} />
        })}

        <h1>letters picked:</h1>
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>
        })}
      </div>
    );
  }
}

export default App;
