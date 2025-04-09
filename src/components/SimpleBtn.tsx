import React from 'react'
import './SimpleBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition here

import { useTranslation } from 'react-i18next';

interface BtnProps {
    border?: string;
    bgcolor?: string;
    textcolor?: string;
    textbtn: string;
    onClick?: () => void; 
    icon?: IconDefinition; 

}

export default function SimpleBtn(props: BtnProps) {
    const { t } = useTranslation();

    const border = props.border || '#023047'; // Valor padrão se não fornecido
    const bgcolor = props.bgcolor || 'white'; // Valor padrão se não fornecido
    const textcolor = props.textcolor || '#023047'; // Valor padrão se não fornecido

    return (
        <button onClick={props.onClick}  className='simpleBtn' style={{ borderColor: border, backgroundColor: bgcolor, color: textcolor }}>
            {props.textbtn &&t(props.textbtn)} 
            {props.icon && <FontAwesomeIcon icon={props.icon} size="2x" />}
        </button>
    )
}
