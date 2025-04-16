
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './LanguageSelector.css'
import br from '../assets/images/br.png';
import us from '../assets/images/us.png';

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const getFlagImage = (lang: string | undefined) => {
        switch (lang) {
            case 'pt':
                return br;
            case 'en':
                return us;
            default:
                return undefined; // Or a default flag
        }
    };
    return (
        <div className="language-selector">
            <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
                <img
                    src={getFlagImage(i18n.language)}
                    alt={i18n.language.toUpperCase()}
                    className="flag-icon"
                />
                {i18n.language === 'en' ? 'English' : 'Português'}
                <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'10px'}} />
            </div>
            {isOpen && (
                <ul className="language-list">
                    <li onClick={() => changeLanguage('en')}>
                        <img src={us} alt="EN" className="flag-icon" />
                        English
                    </li>
                    <li onClick={() => changeLanguage('pt')}>
                        <img src={br} alt="PT" className="flag-icon" />
                        Português
                    </li>
                </ul>
            )}
        </div>
    );
}
