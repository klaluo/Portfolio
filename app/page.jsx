import Link from "next/link";
import dynamic from "next/dynamic";
import ProjectShowcaseCard from "../components/ProjectShowcaseCard";

const Lanyard = dynamic(() => import("../components/Lanyard"), {
    ssr: false,
    loading: () => (
        <div
            className='lanyard-wrapper lanyard-placeholder'
            style={{ minHeight: 380 }}
        >
            <span style={{ color: "rgba(0,0,0,0.4)" }}>Loading…</span>
        </div>
    ),
});

const featuredProjects = [
    {
        companyName: "Got It",
        title: "Designed an AI Learning Tool That Reduced Cognitive Overload for Neurodiverse Electrical Apprentices.",
        tags: ["Lead Product Designer", "Co Product Owner"],
        tagVariant: "outline",
        toolIcons: [
            { src: "/images/figma.png", alt: "Figma" },
            { src: "/images/jira.png", alt: "Jira" },
            { src: "/images/illustrator.png", alt: "Adobe Illustrator" },
        ],
        imageSrc: "/images/gotit-dashboard.jpg",
        imageAlt: "Got It dashboard",
        href: "/projects/gotit",
    },
    {
        companyName: "DayBreak",
        title: "Designing a Multiplayer Online Game Built on Storytelling, Strategy, Tension, and Replayability.",
        tags: ["Scrum Master", "UX/UI Designer"],
        tagVariant: "outline",
        toolIcons: [
            { src: "/images/figma.png", alt: "Figma" },
            { src: "/images/jira.png", alt: "Jira" },
            { src: "/images/illustrator.png", alt: "Adobe Illustrator" },
        ],
        imageSrc: "/images/projects/daybreak/daybreak.gif",
        imageAlt: "Daybreak gameplay screen",
        imageFullBleed: true,
        href: "/projects/daybreak",
    },
];

export default function Home() {
    return (
        <>
            <section className='hero' id='hero'>
                <div className='container heroLayout'>
                    <div className='heroContent'>
                        <span className='heroBadge'>Hey! I’m Kayla,</span>
                        <h1 className='heroTitle'>
                            <span className='heroTitleMuted'>a </span>
                            <span className='heroTitleBold'>
                                Strategic Empath
                            </span>
                            <span className='heroTitleMuted'> who</span>
                            <span className='heroTitleBold'>
                                {" "}
                                designs for people,
                            </span>
                            <br />
                            <span className='heroTitleMuted'>
                                not screens.
                            </span>
                        </h1>
                        <p className='heroSubtitle'>
                            I combine UX strategy and intentional UI to create
                            experiences that help people get things done clearly
                            and efficiently.
                        </p>
                        <div className='heroActions'>
                            <a
                                href='mailto:kaylaluoo@gmail.com'
                                className='heroPrimaryButton'
                            >
                                Contact
                            </a>
                            <Link
                                href='https://www.linkedin.com/in/kayla-luo/'
                                className='heroGhostButton'
                            >
                                LinkedIn
                                <span aria-hidden='true'>↗</span>
                            </Link>
                        </div>
                    </div>
                    <div className='heroLanyardColumn' aria-hidden='true'>
                        <Lanyard fov={10} />
                    </div>
                </div>
                <a
                    href='#featured-work'
                    className='scrollDownButton'
                    aria-label='Scroll to featured work'
                >
                    <span className='scrollDownButton-icon' aria-hidden='true'>
                        <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M7 13l5 5 5-5M7 6l5 5 5-5'/></svg>
                    </span>
                    <span className='scrollDownButton-text'>Scroll</span>
                </a>
            </section>

            <main className='main'>
                <section className='section' id='featured-work'>
                    <div className='container'>
                        <h2 className='sectionTitle'>Featured Work</h2>
                        <div className='showcaseList'>
                            {featuredProjects.map((project, i) => (
                                <ProjectShowcaseCard
                                    key={i}
                                    companyName={
                                        project.companyName || undefined
                                    }
                                    title={project.title}
                                    tags={project.tags}
                                    tagVariant={project.tagVariant}
                                    toolIcons={project.toolIcons}
                                    href={project.href}
                                    imageOnLeft={i % 2 === 1}
                                    imageSrc={project.imageSrc}
                                    imageAlt={project.imageAlt}
                                    imageFullBleed={project.imageFullBleed}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
