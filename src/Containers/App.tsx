import React, { Component } from 'react';
import './App.css';
import MidiFile, { MidiFileInfo } from '../Components/MidiFiles/MidiFile/MidiFile';
import MidiFiles from '../Components/MidiFiles/MidiFiles'
import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Auxiliary'

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
        { FilePath: 'file1.mid', Date: '03/03/82', Author: 'Philip Kerman' },
        { FilePath: 'file2.mid', Date: '04/04/82', Author: 'Nigel Kerman' },
        { FilePath: 'file3.mid', Date: '05/05/82', Author: 'Roger Kerman' },
        { FilePath: 'file4.mid', Date: '06/06/82', Author: 'Marge Kerman' }
      ]
    };
  }

  render() {

    const props = this.state.midiFiles;

    return (
      <Aux>
        <header className="">
          <p>
            React App - Midi Files
        </p>
        </header>
        {
          /* <MidiFile {...this.state.midiFiles[0]} /> */
          props.map((item, key) =>
            <MidiFile {...item} key={key} />
          )
        }
      </Aux>
    );
  }
}

export default WithClass(App, 'App');