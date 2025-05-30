import { useTranslation } from 'react-i18next';
import './ProjectTitle.css';

interface titleProps {
    titleImage?: string;
    titleh1: string;
    titleHref?: string;
    titleRepository?: string;

}

export default function ProjectTitle(props: titleProps) {
    const { t } = useTranslation();


    return (
        <div
            className="containerSection projectTitle"
            style={{
                backgroundImage: `url(${props.titleImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h1>{t(props.titleh1)}</h1>
            <div style={{ display: 'flex', gap: 20 }}>
                <a href={props.titleHref} target='_blank'>Page</a>
                <a href={props.titleHref} target='_blank'>Repositório</a>
            </div>

            <div className="titleElement" ></div>
        </div>
    );
}