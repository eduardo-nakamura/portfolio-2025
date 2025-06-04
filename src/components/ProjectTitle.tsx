import { useTranslation } from 'react-i18next';
import './ProjectTitle.css';

interface titleProps {
    titleImage?: string;
    titleh1: string;
    titleHref: string;
    titleRepository: string;

}

export default function ProjectTitle(props: titleProps) {
    const { t } = useTranslation();
    const translatedTitle = t(props.titleh1);
    const characterCount = translatedTitle.length;

    return (
        <div
            className="containerSection projectTitle"
            style={{
                backgroundImage: `url(${props.titleImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h1 style={{ fontSize: characterCount < 15 ? '80px' : '40px'}}>{t(props.titleh1)}</h1>
            <div style={{ display: 'flex', gap: 20 }}>
                {props.titleHref.length > 0 ? <a href={props.titleHref} target='_blank'>{t('page')}</a> : ''}
                {props.titleRepository.length > 0 ? <a href={props.titleRepository} target='_blank'>{t('repository')}</a> : ''}    
            </div>
            <div className="titleElement" ></div>
        </div>
    );
}