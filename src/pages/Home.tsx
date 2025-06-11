import './Home.css'
import { useTranslation } from 'react-i18next';
// import photo from '../assets/images/eduardo-nakamura-photo.png'
import logoDay from '../assets/images/logo-day.svg'
import logoNight from '../assets/images/logo-night.svg'
import SimpleBtn from '../components/SimpleBtn';
import Dice from '../components/Dice';
import { Link } from 'react-router-dom';
import resume from '../assets/json/resume.json'
import { useAppContext } from '../components/AppContext';
import { motion } from 'framer-motion';

import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import javascript from '../assets/images/javascript.png';
import angular from '../assets/images/angular.png';
import react from '../assets/images/react.png';
import sass from '../assets/images/sass.png';
import unity from '../assets/images/unity.png';

import coverPokedex from '../assets/images/cover-pokedex.png';
import coverRpgApps from '../assets/images/cover-rpg-apps.png';
import coverVet from '../assets/images/cover-vet.png';
import coverSurvivor from '../assets/images/cover-survivor.png';
import coverPuzzle from '../assets/images/cover-puzzle.png';
import coverPlatform from '../assets/images/cover-platform.png';
import coverSki from '../assets/images/cover-ski.png';

interface CoverImageMap {
  [key: string]: string; // This is the index signature
}

const coverImages: CoverImageMap = {
  'cover-pokedex': coverPokedex,
  'cover-rpg-apps': coverRpgApps,
  'cover-vet': coverVet, // Assuming you have these imported
  'cover-survivor': coverSurvivor,
  'cover-puzzle': coverPuzzle,
  'cover-platform': coverPlatform,
  'cover-ski': coverSki,
};

export default function Home() {
  const { t } = useTranslation();
  const {  darkMode } = useAppContext();
  return (
    <div>
      <div className="containerSection home__header">
        <div className="item-40 center__h">
          <img className='home__header__img' src={darkMode ? logoNight : logoDay} alt="Photo of Eduardo Nakamura" />

        </div>
        <div className="item-60 center__v" style={{overflowWrap: 'break-word' }}>
          <p className='home__header__pos'><strong>Frontend | Game Developer</strong></p>
          <h1>Eduardo Nakamura</h1>
          <p>{t('home_text')}</p>
          <div className='home__header__buttons'>
            <Dice icon={false} />
            
            <Link to="/about"><SimpleBtn textbtn='resume' /></Link>
          </div>
        </div>
      </div>

      <div className="containerSection">
        <div className='item-33'>
          <h3>{t('aboutme')}</h3>
        </div>
        <div className='item-66'>
          <p><strong>Frontend | Game Developer</strong></p>
          <p>{t('mysummary')}</p>
        </div>
      </div>


      <div className="containerSection">
        <div className="item-100">
          <h3>{t('skills')}</h3>
          <ul className="containerSkills">
            {skills2.map(skill => (
              <li key={skill.nome}>
                <img src={skill.cover} alt={skill.nome} />
                <p>{skill.nome}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="containerSection" style={{flexDirection: 'column'}}>
        <div className="item-100">
          <h3 >Works</h3>
          <ul className="containerGallery">

            {resume.slice(0, 6).map((item) => (
              <li key={item.id}>
                <Link to={item.rota} target="_blank" rel="noopener noreferrer">
                  <div className="containerGallery__box">
                    
                    <motion.div
                      initial={{ opacity: 0.6, scale: 0.95 }}
                      transition={{ duration: 0.3 }}   
                      whileHover={{ opacity: 1, scale: 1 }}                   
                    >
                        <img src={coverImages[item.cover]} alt={t(item.nome)} />
                    </motion.div>
                    <div className="containerGallery__text">
                      <p className="containerGallery__title"><strong>{t(item.nome)}</strong></p>
                      <p className="containerGallery__subtitle">{t(item.descricao)}</p>
                      <div className="containerGallery__tags">
                        {item.tags.map((tag, index) => (
                          <p key={index}>{tag}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                </Link>
              </li>
            ))}

          </ul>
        </div>
        <div className="item-100" style={{marginTop: '20px', justifyContent: 'flex-end', direction: 'rtl'}}>
           <Link to="/works"><SimpleBtn textbtn='seemore' /></Link>
        </div>
      </div>


    </div>
  )
}

const skills2 = [
  {
      "nome": "HTML 5",
      "cover": html5
  },
  {
      "nome": "CSS 3",
      "cover": css3
  },
  {
      "nome": "JAVASCRIPT",
      "cover": javascript
  },
  {
      "nome": "ANGULAR",
      "cover": angular
  },
  {
      "nome": "REACT",
      "cover": react
  },
  {
      "nome": "SASS",
      "cover": sass
  },
  {
      "nome": "Unity",
      "cover": unity
  }
]