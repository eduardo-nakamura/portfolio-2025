import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Import your resume data and images
import pokedex from '../assets/images/cover-pokedex.png';
import rpgApp from '../assets/images/cover-rpg-apps.png';
import vet from '../assets/images/cover-vet.png';
import survivor from '../assets/images/cover-survivor.png';
import puzzle from '../assets/images/cover-puzzle.png';
import platform from '../assets/images/cover-platform.png';
import ski from '../assets/images/cover-ski.png';
import TagsComponent from '../components/TagsComponent'; // Assuming this component exists

interface Option {
  label: string;
  value: string;
}

// Your resume data (keeping it here for a complete example)
const resumee = [
  {
    "id": 1,
    "nome": "pokedex_title",
    "descricao": "pokedex_description",
    "rota": "/works/pokedex",
    "cover": pokedex,
    "tags": [
      "react",
      "html",
      "css",
      "typescript"
    ]
  },
  {
    "id": 2,
    "nome": "rpg__app_title",
    "descricao": "rpg__app_description",
    "rota": "/works/rpg-app",
    "cover": rpgApp,
    "tags": [
      "angular",
      "html",
      "css"
    ]
  },
  {
    "id": 3,
    "nome": "vet_title",
    "descricao": "vet__app_description",
    "rota": "/works/veterinario",
    "cover": vet,
    "tags": [
      "react",
      "html",
      "css"
    ]
  },
  {
    "id": 4,
    "nome": "survivor_title",
    "descricao": "survivor_description",
    "rota": "/works/survivor",
    "cover": survivor,
    "tags": [
      "unity",
      "C#"
    ]
  },
  {
    "id": 5,
    "nome": "puzzle_title",
    "descricao": "puzzle_description",
    "rota": "/works/puzzle",
    "cover": puzzle,
    "tags": [
      "unity",
      "c#"
    ]
  },
  {
    "id": 6,
    "nome": "platform_title",
    "descricao": "platform_description",
    "rota": "/works/platform",
    "cover": platform,
    "tags": [
      "unity",
      "c#"
    ]
  },
  {
    "id": 7,
    "nome": "ski_title",
    "descricao": "ski_description",
    "rota": "/works/ski",
    "cover": ski,
    "tags": [
      "unity",
      "c#"
    ]
  }
];

export default function WorksList() {
  const { t } = useTranslation();
  // Initialize with 'All' selected by default
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['']);

  const options: Option[] = [
    { label: 'All', value: '' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Html', value: 'html' },
    { label: 'CSS', value: 'css' },
    { label: 'Typescript', value: 'typescript' },
    { label: 'Javascript', value: 'javascript' },
    { label: 'Unity', value: 'unity' },
    { label: 'C#', value: 'c#' },
  ];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedOptions(prevSelected => {
      if (value === '') { // 'All' checkbox was clicked
        // If 'All' is checked, return only 'All'. If unchecked, clear all.
        return checked ? [''] : [];
      } else { // A specific tag checkbox was clicked
        let newSelected = prevSelected.filter(tag => tag !== ''); // Remove 'All' if it was present

        if (checked) {
          // If the checkbox is checked, add its value if not already present
          if (!newSelected.includes(value)) {
            newSelected.push(value);
          }
        } else {
          // If the checkbox is unchecked, remove its value
          newSelected = newSelected.filter(tag => tag !== value);
        }

        // IMPORTANT: If after adding/removing, no specific tags are selected,
        // automatically re-select 'All' for consistent behavior.
        if (newSelected.length === 0) {
          return [''];
        }

        return newSelected;
      }
    });
  };

  const filteredResumee = resumee.filter(item => {
    // If 'All' is selected, or if nothing is selected (which implies 'All' due to handleCheckboxChange), show all items
    if (selectedOptions.includes('') || selectedOptions.length === 0) {
      return true;
    }

    // return selectedOptions.some(selectedTag => item.tags.includes(selectedTag));
    return selectedOptions.every(selectedTag => item.tags.includes(selectedTag));
  });




  return (
    <div>
      <div className="containerSection">
        <div className="item-100">
          <h3>Works</h3>

          <ul style={{ display: 'flex', gap: 20, flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
            {options.map((item) => (
              <li key={item.value}>
                <input
                  type="checkbox"
                  id={item.value}
                  name="tag-filter"
                  value={item.value}
                  checked={selectedOptions.includes(item.value)} // Correctly binds checked state to selectedOptions array
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={item.value}>{item.label}</label>
              </li>
            ))}
          </ul>

          <ul className="containerGallery">
            {filteredResumee.map((item) => (
              <li key={item.id}>
                <Link to={item.rota} rel="noopener noreferrer">
                  <div className="containerGallery__box">
                    <motion.div
                      initial={{ opacity: 0.6, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                    >
                      <img src={item.cover} alt={t(item.nome)} />
                    </motion.div>
                    <div className="containerGallery__text">
                      <p className="containerGallery__title">
                        <strong>{t(item.nome)}</strong>
                      </p>
                      <p className="containerGallery__subtitle">{t(item.descricao)}</p>
                      <TagsComponent tags={item.tags} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}