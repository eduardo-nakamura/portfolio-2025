import { useTranslation } from "react-i18next";


interface TagsProps {
    tags: string[]
}
export default function TagsComponent(props: TagsProps) {
      const { t } = useTranslation();
    return (
        <div className="containerGallery__tags">
            {props.tags.map((tag, index) => (
                <p key={index}>{t(tag)}</p>
            ))}
        </div>
    )
}
