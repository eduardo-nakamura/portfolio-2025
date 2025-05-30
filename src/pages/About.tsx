import { useTranslation } from 'react-i18next';
import ContactComponent from '../components/ContactComponent';


export default function About() {
  const { t } = useTranslation();

  return (
    <div>
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
        <div className='item-33'>
          <h3>{t('experience')}</h3>
        </div>
        <div className='item-66'>
          <div className="containerXP">
            <div className="containerXP__1col mb16">
              <p><strong>{t('business1_name')}</strong><br /><strong>{t('business1_position')}</strong></p>
              <p className="font__color4">{t('business1_date')}</p>
            </div>
            <div className="containerXP__2col">
              <p>{t('business1_description1')}</p>
              <p>{t('business1_description2')}</p>
              <p>{t('business1_description3')}</p>
            </div>
          </div>

          <div className="containerXP">
            <div className="containerXP__1col mb16">
              <p><strong>{t('business2_name')}</strong><br /><strong>{t('business2_position')}</strong></p>
              <p className="font__color4">{t('business2_date')}</p>
            </div>
            <div className="containerXP__2col">
              <p>{t('business2_description1')}</p>
              <p>{t('business2_description2')}</p>
              <p>{t('business2_description3')}</p>
            </div>
          </div>

          <div className="containerXP">
            <div className="containerXP__1col mb16">
              <p><strong>{t('business3_name')}</strong><br /><strong>{t('business3_position')}</strong></p>
              <p className="font__color4">{t('business3_date')}</p>
            </div>
            <div className="containerXP__2col">
              <p>{t('business3_description1')}</p>
              <p>{t('business3_description2')}</p>
              <p>{t('business3_description3')}</p>
            </div>
          </div>

          <div className="containerXP">
            <div className="containerXP__1col mb16">
              <p><strong>{t('business4_name')}</strong><br /><strong>{t('business4_position')}</strong></p>
              <p className="font__color4">{t('business4_date')}</p>
            </div>
            <div className="containerXP__2col">
              <p>{t('business4_description1')}</p>
              <p>{t('business4_description2')}</p>
              <p>{t('business4_description3')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerSection">
        <div className='item-33'>
          <h3>{t('education')}</h3>
        </div>
        <div className='item-66'>
          <div className="containerXP">
            <div className="containerXP__3col mb16">
              <p><strong>{t('education1_school')}</strong><br /><strong>{t('education1_course')}</strong></p>
              <p className="font__color4">{t('education1_date')}</p>
            </div>
            <div className="containerXP__3col mb16">
              <p><strong>{t('education2_school')}</strong><br /><strong>{t('education2_course')}</strong></p>
              <p className="font__color4">{t('education2_date')}</p>
            </div>
            <div className="containerXP__3col mb16">
              <p><strong>{t('education3_school')}</strong><br /><strong>{t('education3_course')}</strong></p>
              <p className="font__color4">{t('education3_date')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerSection">
        <div className="item-33">
          <h3>{t('skills')}</h3>
        </div>
        <div className="item-66">
          <ul className='skillsAbout'>
            <li><p>HTML 5</p></li>
            <li><p>CSS 3</p></li>
            <li><p>JAVASCRIPT</p></li>
            <li><p>ANGULAR</p></li>
            <li><p>REACT</p></li>
            <li><p>SASS</p></li>
            <li><p>BOOTSTRAP</p></li>
            <li><p>GITHUB</p></li>
            <li><p>PORTUGUÊS (NATIVO)</p></li>
            <li><p>INGLÊS</p></li>
          </ul>
        </div>
      </div>

      <ContactComponent />
    </div>
  )
}

