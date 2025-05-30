
import { useParams } from 'react-router-dom';
import ProjectTitle from '../components/ProjectTitle';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GalleryModal from '../components/GalleryModal';
interface ProductParams extends Record<string, string | undefined> {
  Id: string; // Especifica o tipo de productId
}

interface Image {
  id: number;
  src: string;
  alt: string;
}

interface WorkParams {
  id: string;
  title: string;
  cover: string;
  summary: string;
  images: Image[];
  href?: string;
  repository?: string;
  video?: string;
}

export default function Works() {
  const { t } = useTranslation();
  const { Id } = useParams<ProductParams>();
  const [work, setWork] = useState<WorkParams | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {








    // Simulação de dados locais
    const localWorks = [
      { id: 'pokedex', title: 'pokedex_title', cover: headerPokedex, summary: "pokedex_summary", images: pokeGallery, href: 'https://eduardo-nakamura.github.io/pokedex/', repository: '' },
      { id: 'rpg-app', title: 'rpg__app_title', cover: headerRpgApps, summary: "rpg__app_summary", images: vetGallery, href: 'https://eduardo-nakamura.github.io/veterinario-next/', repository: '' },
      { id: 'veterinario', title: 'vet_title', cover: headerVet, summary: "vet__app_summary", images: vetGallery, href: 'https://eduardo-nakamura.github.io/veterinario-next/', repository: '' },
      { id: 'survivor', title: 'survivor_title', cover: headerSurvivor, summary: "survivor_summary", images: survivorGallery, href: '', repository: 'https://github.com/eduardo-nakamura/fighter-survivor', video:"71DvuxZHfXI" },
      { id: 'puzzle', title: 'puzzle_title', cover: headerPuzzle, summary: "puzzle_summary", images: puzzleGallery, href: 'https://garouden.itch.io/zombie-puzzle', repository: '', video:"xyExv__wF4s" },
      { id: 'platform', title: 'platform_title', cover: headerPlatform, summary: "platform_summary", images: platformGallery, href: '', repository: 'https://github.com/eduardo-nakamura/platform-game', video:"RBrHJ9iiyHk" },
      { id: 'ski', title: 'ski_title', cover: headerSki, summary: "ski_summary", images: skiGallery, href: 'https://garouden.itch.io/skii-level-up', repository: 'https://github.com/eduardo-nakamura/LevelUpGameJam', video:"JK5YkardG7Y" },
    ];
    const foundWork = localWorks.find(album => album.id === Id);

    if (foundWork) {
      setWork(foundWork);

    } else {
      setError('error');

    }

  }, [Id]);
  return (
    <div>
      {work && <ProjectTitle
        titleImage={`${work ? work.cover : ''}`}
        titleh1={`${work ? work.title : ''}`}
        titleHref={`${work ? work.href : ''}`}
        titleRepository={`${work ? work.repository : ''}`}
      />}

      {/* <div className="containerSection">
        <p>Product ID: {Id}</p>
        <p>{error}</p>
      </div> */}
      {work ?
        <div className="containerSection">
          <div className='item-33'>
            <h3>{t('summary')}</h3>
          </div>
          <div className='item-66'>
            <p>{t(work ? work.summary : '')}</p>
          </div>
        </div>
        :
        <div className="containerSection">
          <div className='item-100'>
            <h3>{t('error')}</h3>
          </div>
        </div>}
      <div>
       
      </div>
      {work && work.video ? 
      <div className="containerSection" style={{ flexDirection: 'column' }}>
        <h3>Video</h3>
        <iframe style={{margin: '0 auto', border: 'none'}} width="560" height="315" src={`http://www.youtube.com/embed/${work.video}?loop=1&autoplay=1&mute=1&playlist=${work.video}&controls=0&modestbranding=1`} allowFullScreen />
      </div> : ''}

      <div className="containerSection" style={{ flexDirection: 'column' }}>
        {work && <GalleryModal images={work.images} />}
      </div>

    </div>
  )
}

import vet1 from '../assets/images/vet/header-home.png'
import vet3 from '../assets/images/vet/values.png'
import vet4 from '../assets/images/vet/header-home-mobile.png'
import vet5 from '../assets/images/vet/map-app-mobile.png'

const vetGallery: Image[] = [
  { id: 1, src: vet1, alt: 'Header Home' },
  { id: 2, src: vet4, alt: 'Mobile Header Home' },
  { id: 3, src: vet5, alt: 'Mobile Map' },
  { id: 4, src: vet3, alt: 'Values' }
];

import headerPlatform from "../assets/images/header-platform.png"
import headerPokedex from "../assets/images/header-pokedex.png"
import headerPuzzle from "../assets/images/header-puzzle.png"
import headerRpgApps from "../assets/images/header-rpg-apps.png"
import headerSki from "../assets/images/header-ski.png"
import headerSurvivor from "../assets/images/header-survivor.png"
import headerVet from "../assets/images/header-vet.png"


import pokeDetail from '../assets/images/pokedex/pokemon-detail.png'
import pokeDetailMobile from '../assets/images/pokedex/pokemon-detail-mobile.png'
import pokeSearch from '../assets/images/pokedex/search-page.png'
import pokeSearchMobile from '../assets/images/pokedex/search-page-mobile.png'

const pokeGallery: Image[] = [
  { id: 1, src: pokeDetail, alt: 'Header Home' },
  { id: 2, src: pokeDetailMobile, alt: 'Mobile Header Home' },
  { id: 3, src: pokeSearchMobile, alt: 'Mobile Map' },
  { id: 4, src: pokeSearch, alt: 'Values' }
];

import survivor0 from '../assets/images/survivor/survivor-0.png'
import survivor1 from '../assets/images/survivor/survivor-1.png'
import survivor2 from '../assets/images/survivor/survivor-2.png'
import survivor3 from '../assets/images/survivor/survivor-3.png'

const survivorGallery: Image[] = [
  { id: 1, src: survivor0, alt: 'Main Menu' },
  { id: 2, src: survivor1, alt: 'Fireball Attack' },
  { id: 3, src: survivor2, alt: 'Gameplay Fireball 2' },
  { id: 4, src: survivor3, alt: 'Giant Boss from level' }
];

import ski1 from '../assets/images/ski/ski-1.png'
import ski2 from '../assets/images/ski/ski-2.png'
import ski3 from '../assets/images/ski/ski-3.png'
import ski4 from '../assets/images/ski/ski-4.png'

const skiGallery: Image[] = [
  { id: 1, src: ski1, alt: 'Main Menu of the Game' },
  { id: 2, src: ski2, alt: 'Skying fast downward' },
  { id: 3, src: ski3, alt: 'Skying with enemy and obstacle in front' },
  { id: 4, src: ski4, alt: 'Enemy attacked, and xp gained from it' }
];

import platform1 from '../assets/images/platform/platform-1.png'
import platform2 from '../assets/images/platform/platform-2.png'
import platform3 from '../assets/images/platform/platform-3.png'
import platform4 from '../assets/images/platform/platform-4.png'

const platformGallery: Image[] = [
  { id: 1, src: platform1, alt: 'City scenario.' },
  { id: 2, src: platform2, alt: 'Inside a build during daylight' },
  { id: 3, src: platform3, alt: 'Cutscene  depicting a character looking into shelves filled with supplies.' },
  { id: 4, src: platform4, alt: 'Inside a build during nighttime' }
];

import puzzle1 from '../assets/images/puzzle/puzzle-1.png'
import puzzle2 from '../assets/images/puzzle/puzzle-2.png'
import puzzle3 from '../assets/images/puzzle/puzzle-3.png'
import puzzle4 from '../assets/images/puzzle/puzzle-4.png'
import puzzle5 from '../assets/images/puzzle/puzzle-5.png'

const puzzleGallery: Image[] = [
  { id: 1, src: puzzle1, alt: 'The first tutorial board' },
  { id: 2, src: puzzle2, alt: 'Deck building screen' },
  { id: 3, src: puzzle3, alt: 'Card Shop Screen' },
  { id: 4, src: puzzle4, alt: 'Inside a build during nighttime' },
  { id: 5, src: puzzle5, alt: 'Zombies attacking the safehouse' }
];