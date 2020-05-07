import React from 'react';
import MidiFile, { MidiFileInfo }  from './MidiFile/MidiFile';

const MidiFiles = (props: MidiFileInfo[]) => (
    <div>
        Midi Files list
        {
            //props.forEach((element: MidiFileInfo) =>
            //    <MidiFile props={element} />
           // )
        }
    </div>
);

export default MidiFiles;