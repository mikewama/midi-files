import React, { useContext } from 'react';
import './MidiFile.css';
import AuthContext from '../../../context/AuthContext'

export interface MidiFileInfo {
    FilePath: string;
    Author: string;
    Date: string;
    children?: React.ReactNode;
}

const MidiFile = (props: MidiFileInfo) => {
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    return (
        <div className="midiFile">
            Midi File
            <hr />
            <div><span>File: </span><span>{props.FilePath}</span></div>
            <div><span>Date: </span><span>{props.Date}</span></div>
            <div><span>Author: </span><span>{props.Author}</span></div>
            <div>{authContext.authenticated ? 'Authenticated!' : 'please log in'}</div>
        </div>
    );
};

export default MidiFile;