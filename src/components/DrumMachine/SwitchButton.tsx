import { useState } from "react"
import React from 'react';
import "./SwitchButton.scss"


interface SwitchButtonProps{
    mod: boolean;
    whichMod: (mod: boolean) => void;
    displayText: (text: string) => void;
}

const SwitchButton = (props: SwitchButtonProps) => {
    const[isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        props.whichMod(props.mod);
        if(props.mod==true){
            props.displayText("Heater Kit");
        } else props.displayText("Smooth Piano Kit")
    };


    console.log("VALUE: " + isChecked);

    return (
        <label className="switch">
          <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          />
          <span className="slider"/>
        </label>
      );
    };


    export default SwitchButton;