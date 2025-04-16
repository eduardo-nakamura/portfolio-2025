
import './ProjectTitle.css';

interface titleProps {
    titleImage?: string;
    titleh1: string;
    titleHref: string;

}

export default function ProjectTitle(props: titleProps) {
   

    return (
        <div
            className="containerSection projectTitle"
            style={{
                backgroundImage: `url(${props.titleImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h1>{props.titleh1}</h1>
            <a href={props.titleHref} target='_blank'>Link</a>
            <div className="titleElement" ></div>
        </div>
    );
}