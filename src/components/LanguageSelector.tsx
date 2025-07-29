
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './LanguageSelector.css'
import br from '../assets/images/br.png';
import us from '../assets/images/us.png';
interface LanguageSelectorProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function LanguageSelector({ setMenuOpen }: LanguageSelectorProps) {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const [selectedLanguageImg, setSelectedLanguageImg] = useState('');

    const changeLanguage = (lang: string) => {
  
        i18n.changeLanguage(lang);
        setIsOpen(false);
        setMenuOpen(false)
    };

    useEffect(() => {        
        console.log(i18n.language)
        switch (i18n.language) {
            case 'pt':
            case 'pt-BR':
                setSelectedLanguageImg(br)
                break;
            case 'en':
            case 'en-US':
                setSelectedLanguageImg(us)
                break;
            default:                
                break;
        }

    }, [i18n.language]);

    // const getFlagImage = (lang: string | undefined) => {
    //     switch (lang) {
    //         case 'pt':
    //             return br;
    //         case 'en':
    //             return us;
    //         default:
    //             return undefined; 
    //     }
    // };

    return (
        <div className="language-selector">
            <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
                <img
                    src={selectedLanguageImg}
                    alt={i18n.language.toUpperCase()}
                    className="flag-icon"
                />
                {i18n.language === 'en-US' ? 'English' : 'Português'}
                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '10px' }} />
            </div>
            {isOpen && (
                <ul className="language-list">
                    <li onClick={() => changeLanguage('en-US')}>
                        <img src={us} alt="EN" className="flag-icon" />
                        English
                    </li>
                    <li onClick={() => changeLanguage('pt-BR')}>
                        <img src={br} alt="PT" className="flag-icon" />
                        Português
                    </li>
                </ul>
            )}
        </div>
    );
}
