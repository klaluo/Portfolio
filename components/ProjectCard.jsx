export default function ProjectCard({ project }) {
    return (
        <article className='card'>
            <h3 className='cardTitle'>{project.title}</h3>
            <p className='cardDescription' style={{ marginBottom: "1rem" }}>
                {project.description}
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tags &&
                    project.tags.map((t, i) => (
                        <span key={i} className='cardTag'>
                            {t}
                        </span>
                    ))}
            </div>
        </article>
    );
}
