

interface TagsProps {
    tags: string[]
}
export default function TagsComponent(props: TagsProps) {
    return (
        <div className="containerGallery__tags">
            {props.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    )
}
