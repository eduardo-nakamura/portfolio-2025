
import { useParams } from 'react-router-dom';
import ProjectTitle from '../components/ProjectTitle';
import { useEffect, useState } from 'react';

interface ProductParams extends Record<string, string | undefined> {
  Id: string; // Especifica o tipo de productId
}
interface WorkParams {
  id: string;
  title: string;
  images: string[];
  href: string;
}

export default function Works() {
  const { Id } = useParams<ProductParams>();
  const [work, setWork] = useState<WorkParams | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {


    // Simulação de dados locais
    const localWorks = [
      { id: '1', title: 'pokedex_title', images: ['/images/nature1.jpg', '/images/nature2.jpg'], href: 'https://eduardo-nakamura.github.io/pokedex/' },
      { id: '2', title: 'Cores da Cidade', images: ['/images/city1.jpg', '/images/city2.jpg', '/images/city3.jpg'], href: 'https://eduardo-nakamura.github.io/veterinario-next/' },
    ];
    const foundWork = localWorks.find(album => album.id === Id);

    if (foundWork) {
      setWork(foundWork);
 
    } else {
      setError('Álbum não encontrado.');

    }

  }, [Id]);
  return (
    <div>
      <ProjectTitle
        // titleImage={vet1}
        titleh1={`${work ? work.title : ''}`}
        titleHref={`${work ? work.href : ''}`}

      />
      <h1>Product Details</h1>
      <p>Product ID: {Id}</p>
      <p>{error}</p>

    </div>
  )
}
