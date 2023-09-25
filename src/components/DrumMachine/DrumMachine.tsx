import React, {useState} from 'react';
import DrumPad from '../DrumPad/DrumPad';
import './SwitchButton'
import '../../App.scss'
import SwitchButton from './SwitchButton';


function DrumMachine(){
    const[display, setDisplay] = useState<string>('Nothing');
    const[mod, setMod] = useState<boolean>(false);
    const[power, setPower] = useState<boolean>(true);


    const handleDisplay = (text: string) => {
        setDisplay(text);
    };

    const handleMod = (val: boolean) => {
        setMod(!val);
    };


    return (
        <div className="drum-machine" id="drum-machine">
            <div className="drum-pads">
                {/*DRUM PADS*/}
                <DrumPad displayText={handleDisplay} keyBut="Q" mod={mod} />
                <DrumPad displayText={handleDisplay} keyBut="W" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="E" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="A" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="S" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="D" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="Z" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="X" mod={mod}/>
                <DrumPad displayText={handleDisplay} keyBut="C" mod={mod}/>

            </div>
            <div className='control-container'>
                <div className="display" id="display">{display}</div>
                <p>Bank</p>
                <SwitchButton whichMod={handleMod} mod={mod} displayText={setDisplay}/>
            </div>

        </div>
    );

};


export default DrumMachine;