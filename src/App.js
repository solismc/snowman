import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import words from "./Data/Words.json";
import LetterButton from "./LetterButton";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      pickedLetters: [],
      displayLetters: ["_", "_", "_", "_", "_", "_", "_"],
      secret: words[Math.floor(Math.random() * Math.floor(words.length))]
    };
  }

  addLetterToPickedArray = letter => {
    // adding the newly picked letter to the newPickedLetters (will be inserted into state)
    const _newPickedLetters = this.state.pickedLetters.slice();
    _newPickedLetters.push(letter);
    console.log(_newPickedLetters);
    this.setState({
      pickedLetters: _newPickedLetters
    })

    const _newDisplayLetters = this.state.secret.split("").map((l, i) => {
      if (_newPickedLetters.includes(l) ) { 
        return l;
      } else {
        return "_";
      }
    });


    this.setState({
      pickedLetters: _newPickedLetters,
      displayLetters: _newDisplayLetters
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {ALPHABET.map((letter, i) => {
          return (
            <LetterButton
              key={i}
              letter={letter}
              picked={this.state.pickedLetters}
              addLetterHandler={this.addLetterToPickedArray}
            />
          );
        })}

        <h1>SECRET WORD</h1>
        <section className="Snowman-board">
          <div>
            {this.state.displayLetters.map((letter, i) => {
              return <li key={i}>{letter}</li>;
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
