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

    // we are checking each letter in the secret, to see if it was chosen 
    // this will create a new displayLetters(will be inserted into state)
    const _newDisplayLetters = this.state.secret.split("").map((l, i) => {
      if (l === letter) { //if letter is there or has already been selected, it needs to be displayed//
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
        {this.state.pickedLetters.map((letter, i) => {
          return <div key={i}>{letter}</div>;
        })}
        <section>
          <ul>
            {this.state.displayLetters.map((letter, i) => {
              return <li key={i}>{letter}</li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
