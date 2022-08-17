import React from 'react';
import MidiFile, { MidiFileInfo } from './MidiFile/MidiFile';

const MidiFiles = (props: MidiFileInfo[]) => {    
    return (    
    <>
        Midi Files list
        {console.log(props[0])}
        {console.log(typeof (props[0]))}
        {
            props.map((item, key) =>
                <MidiFile {...item} />
            )
        }
    </>
    )
};

export default MidiFiles;