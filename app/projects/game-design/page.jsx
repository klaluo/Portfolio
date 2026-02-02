import Link from "next/link";
import projects from "../../../data/projects";

export default function GameDesignCaseStudy() {
    const project = projects.find((p) => p.slug === "game-design");

    if (!project) {
        return <div className='container'>Project not found</div>;
    }

    return (
        <main className='main'>
            <section className='section'>
                <div className='container'>
                    <h1 className='sectionTitle'>{project.title}</h1>
                    <div className='sectionContent'>
                        <div className='card'>
                            <p className='cardDescription'>
                                {project.description}
                            </p>
                            <p style={{ marginTop: "1rem" }}>
                                <strong>Role:</strong> {project.role}
                            </p>
                            <p>
                                <strong>Tools:</strong>{" "}
                                {project.tools.join(", ")}
                            </p>
                        </div>
                    </div>
                    <div style={{ marginTop: "2rem" }}>
                        <Link href='/projects' className='button'>
                            Back to projects
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
