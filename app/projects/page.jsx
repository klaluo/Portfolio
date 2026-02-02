import ProjectCard from "../../components/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
    return (
        <main className='main'>
            <section className='section'>
                <div className='container'>
                    <h1 className='sectionTitle'>My Projects</h1>
                    <div className='grid'>
                        {projects.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
