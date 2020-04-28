import React from 'react';
import './MidiFile.css';

const MidiFile = (props: any) => (
    <div className="midiFile">        
        Midi File
        <div><span>File:</span><span>file1.mid</span></div>
        <div><span>Date:</span><span>03/03/82</span></div>
        <div><span>Author:</span><span>Philip Kerman</span></div>
    </div>
);

export default MidiFile;