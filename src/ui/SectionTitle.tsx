import '../styles/SectionTitle.css'

export default function SectionTitle({ title } : {title : string}) {
    return (
        <div className="title__divider">
            <h2>{title}</h2>
            <div className="section-divider" />
        </div>
    )
}