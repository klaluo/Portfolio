import Link from "next/link";

export default function About() {
    const skills = [
        {
            category: "Frontend",
            items: "React, Next.js, JavaScript, HTML, CSS, Tailwind",
        },
        {
            category: "Backend",
            items: "Node.js, Express, Python, MongoDB, PostgreSQL",
        },
        { category: "Tools", items: "Git, Docker, Figma, VS Code, Webpack" },
    ];

    return (
        <main className='main'>
            <section className='section'>
                <div className='container'>
                    <h1 className='sectionTitle'>About Me</h1>
                    <div className='sectionContent'>
                        <div className='card'>
                            <h2
                                style={{
                                    fontSize: "1.8rem",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                    color: "var(--primary)",
                                }}
                            >
                                Hi, I'm a Creative Developer
                            </h2>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    marginBottom: "1.5rem",
                                    color: "var(--text-light)",
                                }}
                            >
                                I'm passionate about creating beautiful,
                                functional, and user-centered digital
                                experiences. With a background in both design
                                and development, I bridge the gap between
                                creativity and technical excellence.
                            </p>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    marginBottom: "1.5rem",
                                    color: "var(--text-light)",
                                }}
                            >
                                Over the years, I've worked on various projects
                                ranging from simple websites to complex web
                                applications. I believe in writing clean,
                                maintainable code and designing intuitive
                                interfaces that users love to interact with.
                            </p>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    color: "var(--text-light)",
                                }}
                            >
                                When I'm not coding, you can find me exploring
                                new technologies, contributing to open-source
                                projects, or sharing knowledge with the
                                developer community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <h2 className='sectionTitle'>Skills & Expertise</h2>
                    <div className='grid'>
                        {skills.map((skill, index) => (
                            <div key={index} className='card'>
                                <h3 className='cardTitle'>{skill.category}</h3>
                                <p className='cardDescription'>{skill.items}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className='section'
                style={{
                    background: "var(--primary)",
                    color: "white",
                    margin: "0 -20px",
                }}
            >
                <div className='container'>
                    <div className='sectionContent'>
                        <h2
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "700",
                                marginBottom: "1.5rem",
                                textAlign: "center",
                                paddingBottom: 0,
                                color: "white",
                            }}
                        >
                            Let's Work Together
                        </h2>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                textAlign: "center",
                                marginBottom: "2rem",
                                opacity: 0.9,
                            }}
                        >
                            I'm always interested in new opportunities and
                            interesting projects.
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <Link href='/contact' className='ctaButton'>
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
