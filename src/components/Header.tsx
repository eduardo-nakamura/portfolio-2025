import  { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faFile, faMoon, faSuitcase, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useAppContext } from './AppContext';


export default function Header() {
    const { t } = useTranslation();
    const { darkMode, setDarkMode } = useAppContext();

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        localStorage.setItem('settings', JSON.stringify({ darkmode: !darkMode }));
      };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">                    
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon size="2x" icon={isOpen ? faXmark : faBars} />
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faSun} />
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                            />
                            <span className="slider round"></span>
                        </label>
                        <FontAwesomeIcon icon={faMoon} />
                    </li>
                    <li className="nav-item">
                        <LanguageSelector />
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setIsOpen(false)} to="/about"><FontAwesomeIcon icon={faFile} /> {t('resume')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setIsOpen(false)}  to="/works"><FontAwesomeIcon icon={faSuitcase} /> {t('projects')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setIsOpen(false)}  to="/contact"><FontAwesomeIcon icon={faComment} /> {t('contact')}</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/template"> Template</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
