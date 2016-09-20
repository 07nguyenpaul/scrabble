import React, { Component } from 'react';
import ConvertionOfWord from './ConvertionOfWord';
import InputControls from './InputControls';
import SubmitButton from './Button';

export default class Application extends Component {
  constructor() {
    super();
    this.scoreWords = new ConvertionOfWord();
    this.state = {
      words: '',
      wordScore: '',
      multiplier: 1
    };
  }


  // handleActivity(event, stateTarget) {
  //   const value = event.target.value;
  //   this.setState({ stateTarget: value})
  // }

  handleInput(e) {
    const currentWord = e.target.value.trim();
    this.setState( {words: currentWord} );
  }

  handleMultiplier(e) {
    const userMultiplier = e.target.value;
    this.setState( {multiplier: userMultiplier});
  }

  handleWordScore() {
    const getWordScore = this.scoreWords.scoreWord(this.state.words, this.state.multiplier);
    this.setState({wordScore: getWordScore});
  }

  clearInput() {
    this.setState({words: '', multiplier: 1});
  }

  render() {
    return (
      <div>
        <h2>{this.state.words}</h2>
        <h2>{this.state.wordScore}</h2>
        <InputControls
          words= {this.state.words}
          handleInput= {this.handleInput.bind(this)}
          multiplier= {this.state.multiplier}
          handleMultiplier= {this.handleMultiplier.bind(this)} />
        <SubmitButton
          words= {this.state.words}
          handleWordScore= {this.handleWordScore.bind(this)}
          clearInput= {this.clearInput.bind(this)} />
      </div>
    )
  }
}
