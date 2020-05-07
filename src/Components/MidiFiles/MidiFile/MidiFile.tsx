import React from 'react';
import './MidiFile.css';

export interface MidiFileInfo {
	FilePath: string;
	Author: string;
    Date: string;
}

const MidiFile = (props: MidiFileInfo) => (
    <div className="midiFile">
        Midi File
        <hr/>
        <div><span>File: </span><span>{props.FilePath}</span></div>
        <div><span>Date: </span><span>{props.Date}</span></div>
        <div><span>Author: </span><span>{props.Author}</span></div>
    </div>
);

export default MidiFile;