import React, { Component } from 'react';
import './App.css';
import MidiFile from '../Components/MidiFiles/MidiFile/MidiFile';

class App extends Component {
 
  render() {
    return (
      <div className="">
        <header className="">
          <p>
            React App - Midi Files
        </p>
        </header>
        <MidiFile />
      </div>
    );
  }
}

export default App;