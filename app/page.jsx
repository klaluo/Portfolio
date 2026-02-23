import Link from "next/link";
import dynamic from "next/dynamic";
import ProjectShowcaseCard from "../components/ProjectShowcaseCard";

const Lanyard = dynamic(() => import("../components/Lanyard"), {
    ssr: false,
    loading: () => (
        <div className="lanyard-wrapper lanyard-placeholder" style={{ minHeight: 380 }}>
            <span style={{ color: "rgba(0,0,0,0.4)" }}>Loading…</span>
        </div>
    ),
});

const featuredProjects = [
    { companyName: "Got It", title: "An AI study tool for neurodiverse electrical apprentices", tags: ["Case Study", "Figma", "Research", "Product Design"], href: "/projects/gotit" },
    { companyName: "DayBreak", title: "A multi-player horror game", tags: ["Case Study", "Research", "Design", "Prototype"], href: "/projects/daybreak" },
    { companyName: "", title: "Coming Soon", tags: ["Illustrator"], href: "/projects/project-3" },
];

export default function Home() {
    return (
        <>
            <section className='hero' id='hero'>
                <div className='container heroLayout'>
                    <div className='heroContent'>
                        <span className='heroBadge'>Hey! I’m Kayla,</span>
                        <h1 className='heroTitle'>
                            a Strategic Empath who simplifies complexity and
                            humanizes technology
                        </h1>
                        <p className='heroSubtitle'>
                            I combine UX strategy and thoughtful UI to create
                            experiences that help people get things done clearly and
                            efficiently.
                        </p>
                        <div className='heroActions'>
                            <Link href='/contact' className='heroPrimaryButton'>
                                Contact
                            </Link>
                            <Link
                                href='https://linkedin.com'
                                className='heroGhostButton'
                            >
                                LinkedIn
                                <span aria-hidden='true'>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className='heroLanyardColumn' aria-hidden='true'>
                        <Lanyard />
                    </div>
                </div>
            </section>

            <main className='main'>
                <section className='section' id='featured-work'>
                    <div className='container'>
                        <h2 className='sectionTitle'>Featured Work</h2>
                        <div className='showcaseList'>
                            {featuredProjects.map((project, i) => (
                                <ProjectShowcaseCard
                                    key={i}
                                    companyName={project.companyName || undefined}
                                    title={project.title}
                                    tags={project.tags}
                                    href={project.href}
                                    imageOnLeft={i % 2 === 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
