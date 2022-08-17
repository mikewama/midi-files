import React, { Component } from 'react';
import './App.css';
import MidiFile, { MidiFileInfo } from '../Components/MidiFiles/MidiFile/MidiFile';
import MidiFiles from '../Components/MidiFiles/MidiFiles'
import WithClass from '../hoc/WithClass'
import Aux from '../hoc/Auxiliary'
import Cockpit from '../Components/Cockpit/Cockpit'
import AuthContext from '../context/AuthContext'

interface IProps {
}

interface IState {
  midiFiles: MidiFileInfo[];
  authenticated: boolean
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
      ],
      authenticated: false
    };
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {

    const props = this.state.midiFiles;

    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit />
          <h2>Midi Files</h2>
          {
            /* <MidiFile {...this.state.midiFiles[0]} /> */
            props.map((item, key) =>
              <MidiFile {...item} key={key} />
            )
          }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, 'App');