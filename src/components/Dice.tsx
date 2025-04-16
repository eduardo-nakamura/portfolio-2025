import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import soundFile from '../assets/Audio/dieThrow1.ogg'; // Import the sound file
import { useAppContext } from './AppContext';
import { useTranslation } from 'react-i18next';

interface DiceProps{
    icon: boolean;
}

export default function Dice(props: DiceProps) {
  const { t } = useTranslation();

    const audioRef = useRef(new Audio(soundFile));
    const { count, setCount } = useAppContext();
    const { darkMode } = useAppContext();
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                console.error("Error playing sound:", error);
            });
        }
    };
    function changeStyle() {

        let novoNumero;
        do {
            novoNumero = Math.floor(Math.random() * 6);
        } while (novoNumero === count);
        setCount(novoNumero); playSound();
    }
    const handleButtonClick = (event: React.MouseEvent) => {
        event.stopPropagation(); // Impedir que o evento de clique chegue ao Container
        changeStyle();
    };
    function changeIcon() {
        switch (count) {
            case 0:
                return faDiceOne;
            case 1:
                return faDiceTwo;
            case 2:
                return faDiceThree;
            case 3:
                return faDiceFour;
            case 4:
                return faDiceFive;
            case 5:
                return faDiceSix;
            default:
                return faDiceOne;
        }
    }

    return (
        <div>
            <button 
                onClick={handleButtonClick} 
                className={props.icon ? '' : 'simpleBtn'} 
                style={{ 
                    backgroundColor: darkMode ? 'var(--color-4)' : 'var(--color-2)', 
                    color: 'white',
                    border: darkMode ? 'var(--color-4)' : 'white'
                }}>
                {props.icon ? <FontAwesomeIcon icon={changeIcon()} size='3x' color={'white'} /> : t('roll_dice')}    
               {/* {t('home_text')} */}
            </button>
        </div>
    );
}

