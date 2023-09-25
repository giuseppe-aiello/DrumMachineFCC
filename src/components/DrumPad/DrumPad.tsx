import React, {useRef, useEffect, useLayoutEffect} from 'react';
import '../../App.scss'



interface DrumPadProps{

    displayText: (text: string) => void;
    keyBut: string;
    mod: boolean;
}



function DrumPad(props: DrumPadProps) {





    let id: string;
    let text: string;

    if(props.mod==false){
        switch (props.keyBut) {
            case "Q":
                id="Heater-1";
                text="Heater 1"
                break;
            case "W":
                id="Heater-2";
                text="Heater 2"
                break;
            case "E":
                id="Heater-3";
                text="Heater 3"
                break;
            case "A":
                id="Heater-4_1";
                text="Heater 4"

                break;
            case "S":
                id="Heater-6";
                text="Clap"
                break;
            case "D":
                id="Kick_n_Hat";
                text="Open HH"

                break;
            case "Z":
                id="RP4_KICK_1";
                text="Kick n' Hat"

                break;
            case "X":
                id="Cev_H2";
                text="Kick"

                break;
            case "C":
                id="Dsc_Oh";
                text="Closed HH"
                break;
            default:
                break;
        }
    }
    else if(props.mod==true){
        switch (props.keyBut) {
            case "Q":
                id="Chord_1";
                text="Chord 1"
                break;
            case "W":
                id="Chord_2";
                text="Chord 2"
                break;
            case "E":
                id="Chord_3";
                text="Chord 3"
                break;
            case "A":
                id="Give_us_a_light";
                text="Shaker"

                break;
            case "S":
                id="Dry_Ohh";
                text="Open HH"
                break;
            case "D":
                id="Bld_H1";
                text="Closed HH"

                break;
            case "Z":
                id="punchy_kick_1";
                text="Punchy Kick"

                break;
            case "X":
                id="side_stick_1";
                text="Side Stick"

                break;
            case "C":
                id="Brk_Snr";
                text="Snare"
                break;
            default:
                break;
        }
    }


    const audioRef = useRef<HTMLAudioElement>(null);
    /*
    Facendo così ottengo un riferimento ad un elemento generico di tipo <audio>
    Essendo audioRef un riferimento ad un <audio> allora puoi utilizzare 
    audioRef.current ed accedere ad audioRef.current.play, per esempio
    */

    const audioUrl = `https://s3.amazonaws.com/freecodecamp/drums/${id}.mp3`;


    

    document.addEventListener('keydown', function( event ){
        
        if(event.code === "Key"+props.keyBut){
            audioRef.current.play();
            console.log("XXXX");

    
        }
    })



    const playSound = () => {
        if(audioRef.current){
            audioRef.current.play();
            props.displayText(text); //Grazie a questa callback function posso
            //modificare il valore del display in DrumMachine
            //Difatti su displayText (props di drumpad) sarà assegnata una funzione
            //che proviene dal componente padre DrumMachine per potere comunicare
            //tra di loro
        }
    };

    const handleKeyPress = (event: KeyboardEvent) => { //GESTIONE DELLA PRESSIONE DI UNA KEY
        if(event.key === id.toLowerCase()){
            playSound();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return() => {
            window.removeEventListener('keydown', handleKeyPress);
        };

    }, [id]); //array di dipendenze - Quando un id viene cambiato allora useEffect 
    //verrà eseguita nuovamente per registrare il nuovo id
    console.log(id);

    return (
        <button className="drum-pad" id="drum-pad" onClick={playSound}>
            <p className='name'>{props.keyBut}</p>
            <audio ref={audioRef} src={audioUrl}  className='clip' id={props.keyBut} />
        </button>
    );
};

export default DrumPad;