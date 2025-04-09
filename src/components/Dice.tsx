import React from 'react'
import SimpleBtn from '../components/SimpleBtn';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

interface DiceProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>; // Add the setCount prop
}

export default function Dice(props: DiceProps) {
    function changeStyle() {
        let novoNumero;
        do {
            novoNumero = Math.floor(Math.random() * 6); // Gera um número entre 0 e 5
        } while (novoNumero === props.count); // Evita repetição do número anterior
        props.setCount(novoNumero);
    }
    function changeIcon() {
        switch (props.count) {
            case 0:
                return faDiceOne
                break;
            case 1:
                return faDiceTwo
                break;
            case 2:
                return faDiceThree
                break;
            case 3:
                return faDiceFour
                break;
            case 4:
                return faDiceFive
                break;
            case 5:
                return faDiceSix
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <SimpleBtn textbtn={''} onClick={changeStyle} icon={changeIcon()} />
        </div>
    )
}
