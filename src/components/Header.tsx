import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faFile, faSuitcase, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Header() {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">My App</div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon size="2x" icon={isOpen ? faXmark : faBars} />
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <LanguageSelector />
                    </li>
                    <li className="nav-item">
                        <Link to="/about"><FontAwesomeIcon icon={faFile} /> {t('resume')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/works"><FontAwesomeIcon icon={faSuitcase} /> {t('projects')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact"><FontAwesomeIcon icon={faComment} /> {t('contact')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/template"> Template</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
