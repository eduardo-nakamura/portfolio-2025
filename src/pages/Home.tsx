import './Home.css'
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/eduardo-nakamura-photo.png'
import SimpleBtn from '../components/SimpleBtn';
import Dice from '../components/Dice';
import { Link } from 'react-router-dom';
import skills from '../assets/json/skills.json'
import resume from '../assets/json/resume.json'

import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="containerSection home__header">
        <div className="item-40 center__h">
          <img className='home__header__img' src={photo} alt="Photo of Eduardo Nakamura" />
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
          <p>{t('summary')}</p>
        </div>
      </div>


      <div className="containerSection">
        <div className="item-100">
          <h3>{t('skills')}</h3>
          <ul className="containerSkills">
            {skills.map(skill => (
              <li key={skill.nome}>
                <img src={skill.cover} alt={skill.nome} />
                <p>{skill.nome}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="containerSection">
        <div className="item-100">
          <h3 >Works</h3>
          <ul className="containerGallery">

            {resume.map((item) => (
              <li key={item.id}>
                <Link to={item.rota} target="_blank" rel="noopener noreferrer">
                  <div className="containerGallery__box">
                    
                    <motion.div
                      initial={{ opacity: 0.6, scale: 0.95 }}
                      transition={{ duration: 0.3 }}   
                      whileHover={{ opacity: 1, scale: 1 }}                   
                    >
                      <img src={item.cover} alt={t(item.nome)} />
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
      </div>


    </div>
  )
}
