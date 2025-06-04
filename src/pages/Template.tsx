import { Link } from "react-router-dom"
import SimpleBtn from "../components/SimpleBtn"
import { useTranslation } from 'react-i18next'
import resume from '../assets/json/resume.json'
import skills from '../assets/json/skills.json'
import experience from '../assets/json/experience.json'

import vet1 from '../assets/images/vet/header-home.png'
import vet3 from '../assets/images/vet/values.png'
import vet4 from '../assets/images/vet/header-home-mobile.png'
import vet5 from '../assets/images/vet/map-app-mobile.png'

import ProjectTitle from "../components/ProjectTitle"
import GalleryModal from "../components/GalleryModal"

interface Image {
  id: number;
  src: string;
  alt: string;
}
export default function Template() {
  const { t } = useTranslation();

  const images: Image[] = [
    { id: 1, src: vet1, alt: 'Header' },
    { id: 2, src: vet4, alt: 'Mobile Header' },
    { id: 3, src: vet5, alt: 'Mobile Map' },
    { id: 4, src: vet3, alt: 'Values' }
  ];

  return (
    <div >
      <ProjectTitle 
        titleImage={vet1} 
        titleh1={'Veterinario'} 
        titleHref={'https://eduardo-nakamura.github.io/veterinario-next/'}      
              titleRepository={'https://eduardo-nakamura.github.io/veterinario-next/'}
      />
      
      <div className="containerSection" style={{flexDirection: 'column'}}>
        <h3>Modal</h3>
 
       <GalleryModal images={images} />
      </div>
      <div className="containerSection">
        <div className="item-50">
          <SimpleBtn
            textbtn='button'
          />
          <SimpleBtn
            border='#FC8500'
            bgcolor='#FC8500'
            textcolor='#fff'
            textbtn='resume'
          />
        </div>
        <div className="item-50">v</div>
      </div>

      <div className="containerSection">
        <div className='item-33'>
          <h3>About Me</h3>
        </div>
        <div className='item-66'>
          <p>Sou um desenvolvedor Front-End apaixonado por criar interfaces modernas, responsivas e intuitivas. Com domínio em HTML, CSS, JavaScript e frameworks como React e Vue.js, transformo designs em experiências digitais fluidas e de alto desempenho. Meu foco é desenvolver soluções acessíveis, otimizadas e visualmente impactantes, sempre buscando a melhor usabilidade para os usuários.</p>
        </div>
      </div>

      <div className="containerSection">
        <div className='item-33'>
          <h3>Experience</h3>
        </div>
        <div className='item-66'>
          {experience.map((item) => (
            <div className="containerXP">
              <div className="containerXP__1col mb16">
                <p><strong>{item.empresa}</strong><br /><strong>{item.cargo}</strong></p>    
                <p className="font__color4">{item.data}</p>
              </div>
              <div className="containerXP__2col">
                <p>{item.descricao}</p>
              </div>
            </div>
          ))}




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
                    <img src={item.cover} alt={t(item.nome)} />
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

      <div className="containerSection">
        <div className="item-100">
          <h3>Skills</h3>
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
    </div>
  )
}