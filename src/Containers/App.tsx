import React, { Component } from 'react';
//import * as React from 'react';
import './App.css';
import MidiFile, { MidiFileInfo } from '../Components/MidiFiles/MidiFile/MidiFile';
import MidiFiles from '../Components/MidiFiles/MidiFIles'

interface IProps {
}

interface IState {
  midiFiles: MidiFileInfo[];
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      midiFiles: [
        { FilePath: 'file1.mid', Date: '03/03/82', Author: 'Philip Kerman' }
      ]
    };
  }

  render() {

    const props = this.state.midiFiles[0];

    return (
      <div className="">
        <header className="">
          <p>
            React App - Midi Files
        </p>
        </header>
        {/* <MidiFile {...this.state.midiFiles[0]} /> */}
        <MidiFile {...props} />
      </div>
    );
  }
}

export default App;