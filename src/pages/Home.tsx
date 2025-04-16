import './Home.css'
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/eduardo-nakamura-photo.png'
import SimpleBtn from '../components/SimpleBtn';
import Dice from '../components/Dice';


export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="containerSection home__header">
        <div className="item-40 center__h">
          <img className='home__header__img' src={photo} alt="Photo of Eduardo Nakamura" />
        </div>
        <div className="item-60 center__v" style={{overflowWrap: 'break-word' }}>
          <p><strong>Frontend | Game Developer</strong></p>
          <h1>Eduardo Nakamura</h1>
          <p>{t('home_text')}</p>
          <div className='home__header__buttons'>
            <Dice icon={false} />
            <SimpleBtn textbtn='resume' />
          </div>
        </div>
      </div>
    </div>
  )
}
