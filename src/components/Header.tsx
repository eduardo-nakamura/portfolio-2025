import { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment, faFile, faMoon, faSuitcase, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useAppContext } from './AppContext';
import logoDay from '../assets/images/logo-day.svg'
import logoNight from '../assets/images/logo-night.svg'

export default function Header() {
    const { t } = useTranslation();
    const { darkMode, setDarkMode } = useAppContext();
   
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        setMenuOpen(false);
        localStorage.setItem('settings', JSON.stringify({ darkmode: !darkMode }));
    };
    useEffect(() => {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setDarkMode(mediaQuery.matches);
          

            const handleChange = (e: MediaQueryListEvent) => {
                setDarkMode(e.matches);
            };

            mediaQuery.addEventListener('change', handleChange);

            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }
    }, [])


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src={darkMode ? logoNight : logoDay} alt="Eduardo Nakamura Logo" />
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon size="2x" icon={menuOpen ? faXmark : faBars} />
                </div>
                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
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
                            <LanguageSelector setMenuOpen={setMenuOpen} />                        
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setMenuOpen(false)} to="/about"><FontAwesomeIcon icon={faFile} /> {t('resume')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setMenuOpen(false)} to="/works"><FontAwesomeIcon icon={faSuitcase} /> {t('projects')}</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={() => setMenuOpen(false)} to="/contact"><FontAwesomeIcon icon={faComment} /> {t('contact')}</Link>
                    </li>
                 
                    {/* <li className="nav-item">
                        <Link to="/template"> Template</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}
