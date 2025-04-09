import React from 'react'
import { useTranslation } from 'react-i18next';

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
          <p>{t('summary')}</p>
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
    </div>
  )
}
