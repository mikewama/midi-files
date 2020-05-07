import React from 'react';
import MidiFile, { MidiFileInfo } from './MidiFile/MidiFile';

const MidiFiles = (props: MidiFileInfo[]) => (
    <div>
        Midi Files list
        {console.log(props[0])}
        {console.log(typeof (props[0]))}
        {
            props.map((item, key) =>
                <MidiFile {...item} />
            )
        }
    </div>
);

export default MidiFiles;