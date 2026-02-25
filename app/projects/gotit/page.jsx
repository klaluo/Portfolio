"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./gotit.module.css";

const MAIN_NAV_OFFSET_PX = 88; /* 5.5rem – matches main navbar height */

export default function GotIt() {
    const outlineSections = useMemo(
        () => [
            { id: "overview", label: "Overview" },
            { id: "research", label: "Research" },
            { id: "design", label: "Design" },
            { id: "final-product", label: "Final Product" },
            { id: "reflection", label: "Reflection" },
        ],
        []
    );
    const [activeSection, setActiveSection] = useState(outlineSections[0]?.id);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isDocNavFixed, setIsDocNavFixed] = useState(false);
    const docNavSentinelRef = useRef(null);

    useEffect(() => {
        const targets = outlineSections
            .map((section) => document.getElementById(section.id))
            .filter(Boolean);

        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-35% 0px -55% 0px" }
        );

        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, [outlineSections]);

    useEffect(() => {
        document.body.classList.add("gotit-page");
        return () => {
            document.body.classList.remove("gotit-page");
        };
    }, []);

    useEffect(() => {
        const wrapper = docNavSentinelRef.current?.parentElement;
        if (!wrapper) return;

        const checkStick = () => {
            const sentinel = docNavSentinelRef.current;
            if (!sentinel) return;
            const top = sentinel.getBoundingClientRect().top;
            setIsDocNavFixed(top <= MAIN_NAV_OFFSET_PX);
        };

        checkStick();
        window.addEventListener("scroll", checkStick, { passive: true });
        window.addEventListener("resize", checkStick);
        return () => {
            window.removeEventListener("scroll", checkStick);
            window.removeEventListener("resize", checkStick);
        };
    }, []);

    useEffect(() => {
        if (!lightboxImage) return;
        const handleEscape = (e) => {
            if (e.key === "Escape") setLightboxImage(null);
        };
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [lightboxImage]);

    return (
        <main className={`main ${styles.projectDetail}`} id='gotit-top'>
            <section className='section'>
                <div className={`container ${styles.projectContainer}`}>
                    <div className={styles.projectIntro}>
                        <span className={styles.caseTag}>Case Study & Web Development</span>
                        <h1 className={styles.introTitle}>
                            Designed an AI Learning Tool That Reduced Cognitive
                            Overload for Neurodiverse Electrical Apprentices
                        </h1>
                        <div className={styles.introMeta}>
                            <div>
                                <h3>My Role</h3>
                                <p>Co Product Owner</p>
                                <p>Lead Product Designer</p>
                            </div>
                            <div>
                                <h3>Team</h3>
                                <p>5 designers</p>
                                <p>2 developers</p>
                            </div>
                            <div>
                                <h3>Timeline</h3>
                                <p>Sept. - Dec. 2026</p>
                            </div>
                            <div>
                                <h3>Tools</h3>
                                <p>Figma</p>
                                <p>Illustrator</p>
                                <p>Jira</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.docNavStickyWrapper}>
                        <div
                            ref={docNavSentinelRef}
                            className={styles.docNavSentinel}
                            aria-hidden="true"
                        />
                        <div
                            className={
                                isDocNavFixed
                                    ? `${styles.docNav} ${styles.docNavFixed}`
                                    : styles.docNav
                            }
                        >
                            <a className={styles.docNavIcon} href='/' aria-label='Go to home'>
                                <img src='/images/gotit-logo-round.png' alt='Got It logo' />
                            </a>
                            <ul className={styles.docNavList}>
                                {outlineSections.map((section) => (
                                    <li key={section.id}>
                                        <a
                                            className={
                                                activeSection === section.id
                                                    ? `${styles.docNavLink} ${styles.docNavLinkActive}`
                                                    : styles.docNavLink
                                            }
                                            href={`#${section.id}`}
                                        >
                                            {section.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <a
                                className={styles.docNavIcon}
                                href='#gotit-top'
                                aria-label='Back to top'
                            >
                                ↑
                            </a>
                        </div>
                        {isDocNavFixed && <div className={styles.docNavSpacer} />}
                        <div className={styles.introMedia}>
                            <img
                                src='/images/gotit-home.png'
                                alt='Got It interface preview'
                                className={styles.introImagePrimary}
                            />
                            <img
                                src='/images/gotit-doc.png'
                                alt='Got It document preview'
                                className={styles.introImageSecondary}
                            />
                        </div>
                        <div className={styles.projectContent}>
                        <section className={styles.overviewSection} id='overview'>
                            <div className={styles.overviewInner}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Overview</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.overviewGotItRow}>
                                    <div className={styles.overviewGotItText}>
                                        <h3 className={styles.sectionSubheading}>Got It</h3>
                                        <p className={styles.projectBody}>
                                            This project focused on designing and managing the
                                            development of an AI-powered study tool for electrical
                                            apprentices in British Columbia, with a specific
                                            emphasis on neurodiverse learners. As Product Owner,
                                            Project Manager, and Lead Product Designer, I led the
                                            project end-to-end—from defining the problem and
                                            scoping the MVP to guiding research, design decisions,
                                            and implementation strategy.
                                        </p>
                                        <p className={styles.projectBody}>
                                            The goal was to help apprentices simplify their own
                                            study materials without sacrificing accuracy. Unlike
                                            general AI summarization tools, this product sandboxed
                                            the Canadian Electrical Code to ensure reliable
                                            outputs for regulated trade content, reducing both
                                            cognitive overload and trust issues during studying.
                                        </p>
                                    </div>
                                    <div className={styles.overviewLogoWrap}>
                                        <img
                                            src='/images/gotit-logo-round.png'
                                            alt='Got It'
                                            className={styles.overviewLogo}
                                        />
                                    </div>
                                </div>
                                <h3 className={styles.sectionSubheading}>Insights</h3>
                                <p className={styles.projectBody}>
                                    National apprenticeship data reveals low retention and
                                    completion in skilled trades: only about 19–20% of
                                    apprentices in Canada complete their programs within the
                                    expected timeframe, and up to 40–44% discontinue training
                                    within six years of registration.
                                </p>
                            </div>
                        </section>

                            <section className={styles.projectSection} id='research'>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Research and Discovery</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.approachBlock}>
                                    <h3 className={styles.sectionSubheading}>Approach</h3>
                                    <p className={styles.projectBody}>
                                        As Product Owner, I defined the research direction and
                                        ensured findings directly informed product decisions.
                                        Research combined qualitative and quantitative methods:
                                    </p>
                                    <ul className={styles.projectList}>
                                        <li><strong>Interviews</strong> with trade workers and electrical apprentices</li>
                                        <li><strong>A user survey</strong> on study habits, pain points, and existing tools</li>
                                        <li><strong>Heuristic analysis</strong> of existing AI study tools and educational platforms</li>
                                    </ul>
                                    <p className={styles.projectBody}>
                                        I intentionally scoped the project to one trade—electrical—to
                                        ensure accuracy, depth, and relevance before
                                        considering expansion to other trades.
                                    </p>
                                </div>
                                <h3 className={styles.sectionSubheading}>Interviews</h3>
                                <p className={styles.projectBody}>
                                    Interviewing a BCIT Master Electrician Instructor and
                                    electrical apprentices gave us direct insight into how
                                    learners navigate dense code material and where they
                                    need support. These conversations grounded our design
                                    decisions in real study behaviors and pain points.
                                </p>
                                <div className={styles.findingsRow}>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}>Key concerns from survey</h4>
                                        <ul>
                                            <li>High presence of ADHD and autism among trade students</li>
                                            <li>Dense, theory-heavy Level 1 content contributes to early retention issues</li>
                                            <li>Manuals and code books are heavy in jargon and emotionally disengaging</li>
                                            <li>Terminology in manuals often does not match how concepts are taught or practiced</li>
                                            <li>Jargon and terminology inconsistency are major barriers</li>
                                            <li>Misinformation from online sources (YouTube, forums) creates risk and confusion</li>
                                        </ul>
                                    </div>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}>Possible solutions from survey</h4>
                                        <ul>
                                            <li><strong>Glossary & vocabulary tab:</strong> reduce jargon and acronym overload</li>
                                            <li><strong>Structured breakdowns:</strong> step-by-step, scannable content</li>
                                            <li><strong>Simplified summaries:</strong> grounded in a sandboxed code source</li>
                                            <li><strong>Visuals and examples:</strong> support for non-text learning preferences</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className={styles.sectionSubheading}>User Survey</h3>
                                <p className={styles.projectBody}>
                                    We conducted surveys with electrical apprentices to understand
                                    their study habits, main struggles, and the tools they use.
                                    Common difficulties included not knowing where to start,
                                    organizing information across sources, and learning from
                                    dense, jargon-filled textbooks—all of which contributed to
                                    cognitive overload.
                                </p>
                                <p className={styles.projectBody}>
                                    These insights confirmed the need for a tool that helps
                                    apprentices simplify and structure their notes while
                                    maintaining accuracy.
                                </p>
                                <div className={styles.findingsRow}>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}>Key concerns from survey</h4>
                                        <ul>
                                            <li>Difficulty learning from dense textbooks filled with jargon and acronyms</li>
                                            <li>Large blocks of small text make it hard to focus and identify key information</li>
                                            <li>Math and the Canadian Electrical Code are the most overwhelming subjects</li>
                                            <li>Uncertainty about where to start when studying</li>
                                            <li>Struggles organizing notes across manuals, worksheets, and PDFs</li>
                                            <li>Many learners (6/8) reported ADHD, dyslexia, or other learning challenges</li>
                                        </ul>
                                    </div>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}>Possible solutions from survey</h4>
                                        <ul>
                                            <li><strong>AI-Powered Summaries:</strong> Converts user notes and Canadian Electrical Code content into smaller, structured sections</li>
                                            <li><strong>Mind Map Generation:</strong> Transforms content into visual overviews to support conceptual understanding</li>
                                            <li><strong>Personalized Study Guide:</strong> Helps students know where to start by breaking content into clear, digestible sections</li>
                                            <li><strong>Accessibility Controls:</strong> Adjustable text size, contrast, and dyslexia-friendly options</li>
                                            <li><strong>Integrated Pomodoro Timer:</strong> Encourages focused, distraction-free study sessions</li>
                                        </ul>
                                    </div>
                                </div>
                                <h3 className={styles.sectionSubheading}>Competitive Analysis</h3>
                                <p className={styles.projectBody}>
                                    We analyzed 7 direct and indirect competitors, including
                                    AI summarization tools and trade-focused study resources,
                                    to understand their strengths, weaknesses, and target users.
                                </p>
                                <p className={styles.projectBody}>
                                    Many AI tools could summarize information, but they were
                                    not built for neurodiverse learners. Their interfaces were
                                    often complex, and their outputs were not always reliable.
                                    On the other hand, trade study resources provided accurate
                                    information but lacked tools to simplify dense code material.
                                </p>
                                <div className={styles.gapsBlock}>
                                    <p className={styles.gapsIntro}>Two clear gaps emerged:</p>
                                    <ol className={styles.gapsList}>
                                        <li>AI tools lacked accuracy and trust for regulated trade content.</li>
                                        <li>Trade resources lacked structured support for breaking down complex information.</li>
                                    </ol>
                                </div>
                                <h3 className={styles.sectionSubheading}>User Personas</h3>
                                <div className={styles.personaRow}>
                                    <div className={styles.personaCards}>
                                        <div className={styles.personaCard}>
                                            <span className={styles.personaCardLabel}>Primary</span>
                                            <div className={styles.personaCardBody}>
                                                <div className={styles.personaCardImagePlaceholder}>Persona image</div>
                                                <p className={styles.personaCardText}>Demographics, goals, and pain points will go here.</p>
                                            </div>
                                        </div>
                                        <div className={styles.personaCard}>
                                            <span className={styles.personaCardLabel}>Secondary</span>
                                            <div className={styles.personaCardBody}>
                                                <button
                                                    type='button'
                                                    className={styles.personaImageButton}
                                                    onClick={() => setLightboxImage('/images/gotit-persona-secondary.png')}
                                                    aria-label='View secondary persona full size'
                                                >
                                                    <img
                                                        src='/images/gotit-persona-secondary.png'
                                                        alt='Secondary user persona: Casey Bourne, Level 2 Electrician'
                                                        className={styles.personaCardImage}
                                                    />
                                                    <span className={styles.personaImageHint}>Click to view full size</span>
                                                </button>
                                                <p className={styles.personaCardText}>Casey Bourne, Level 2 Electrician. Demographics, goals, and pain points in card above.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.personaSummary}>
                                        Using insights from the competitive analysis, interviews,
                                        and survey, two primary personas were developed to represent
                                        Got It&apos;s target audience, ensuring the team addresses
                                        their specific needs and challenges.
                                    </p>
                                </div>
                                {lightboxImage && (
                                    <div
                                        className={styles.lightboxOverlay}
                                        onClick={() => setLightboxImage(null)}
                                        role='dialog'
                                        aria-modal='true'
                                        aria-label='View image full size'
                                    >
                                        <button
                                            type='button'
                                            className={styles.lightboxClose}
                                            onClick={() => setLightboxImage(null)}
                                            aria-label='Close'
                                        >
                                            ×
                                        </button>
                                        <img
                                            src={lightboxImage}
                                            alt='Persona detail'
                                            className={styles.lightboxImage}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </div>
                                )}
                            </section>

                            <section className={styles.projectSection}>
                                <div className={styles.sectionHeading}>
                                    
                                    <h3 className={styles.sectionSubheading}>Key Findings</h3>
                    
                                </div>
                                <div className={styles.insightCards}>
                                    <article className={styles.insightCard}>
                                        <h>Learning & Cognitive Load</h>
                                        <ul>
                                            <li>6/8 participants reported a learning disability (ADHD, dyslexia, or self-identified)</li>
                                            <li>All participants with learning disabilities struggled with textbook-based learning</li>
                                            <li>Learners take longer to study than peers and still feel unsure about the material</li>
                                            <li>This leads to frustration, burnout, and demotivation</li>
                                        </ul>
                                    </article>
                                    <article className={styles.insightCard}>
                                        <h3>Studying & Organization</h3>
                                        <ul>
                                            <li>All participants feel unsure where to start when studying</li>
                                            <li>Most struggle to organize information across manuals, worksheets, and notes</li>
                                            <li>Dense content makes it hard to identify what is actually important</li>
                                        </ul>
                                    </article>
                                    <article className={styles.insightCard}>
                                        <h3>Content Challenges</h3>
                                        <ul>
                                            <li>Math and the Canadian Electrical Code are the most difficult topics</li>
                                            <li>Large blocks of small text, jargon, acronyms, and technical language cause cognitive overload</li>
                                            <li>Learners want visuals, examples, and simplified explanations</li>
                                        </ul>
                                    </article>
                                    <article className={styles.insightCard}>
                                        <h3>Existing Workarounds</h3>
                                        <ul>
                                            <li>Breaking down text manually</li>
                                            <li>Highlighting and rewriting notes</li>
                                            <li>Watching YouTube tutorials to understand concepts</li>
                                            <li>Preference for hands-on, step-by-step, and visual learning</li>
                                        </ul>
                                    </article>
                                </div>
                            </section>

                            <section className={styles.projectSection} id='design'>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Design and Ideation</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.designPrinciplesBlock}>
                                    <p className={styles.projectBody}>
                                        As Lead Product Designer, I translated research insights into
                                        a focused MVP. My core design principles were:
                                    </p>
                                    <ul className={styles.projectList}>
                                        <li>Reduce cognitive load at every step</li>
                                        <li>Limit feature scope to avoid overwhelm</li>
                                        <li>Prioritize clarity, structure, and predictability</li>
                                        <li>Design for trust through transparent, verified data sources</li>
                                        <li>Use a restrained visual system—no distracting colors unless they serve a clear functional purpose</li>
                                    </ul>
                                    <p className={styles.projectBody}>
                                        The key product decision was allowing users to upload their
                                        own notes and generate simplified versions grounded in the
                                        Canadian Electrical Code.
                                    </p>
                                </div>
                                <h3 className={styles.sectionSubheading}>4 key features to address user pain points (based on survey results)</h3>
                                <div className={styles.featureCards}>
                                    <article className={styles.featureCard}>
                                        <h3>Upload or Select Material</h3>
                                        <p>Upload your own notes or pick a built-in textbook. Everything stays accurate because AI only uses the CEC.</p>
                                    </article>
                                    <article className={styles.featureCard}>
                                        <h3>Simplify or Summarize</h3>
                                        <p>Turn dense text into easy-to-read versions or quick summaries.</p>
                                    </article>
                                    <article className={styles.featureCard}>
                                        <h3>Generate a Mind Map</h3>
                                        <p>See content visually and plan your study around your exam date.</p>
                                    </article>
                                    <article className={styles.featureCard}>
                                        <h3>Personalized Study Guide</h3>
                                        <p>Helps students know where to start by breaking content into clear, digestible sections.</p>
                                    </article>
                                    <article className={styles.featureCard}>
                                        <h3>Dual View</h3>
                                        <p>Compare original and simplified text side by side.</p>
                                    </article>
                                </div>
                                <h3 className={styles.sectionSubheading}>Site Map</h3>
                                <p className={styles.projectBody}>
                                    The Site Map structured the website for clear navigation, enabling
                                    easy access to note uploads, simplified summaries, and side-by-side
                                    comparison. Since all surveyed apprentices study on laptops, we chose
                                    a web-based platform to match their workflow.
                                </p>
                                <div className={styles.projectImageSiteMap}>
                                    <img
                                        src='/images/gotit-sitemap.png'
                                        alt='GotIt sitemap'
                                    />
                                </div>
                            </section>

                            <section className={styles.projectSection}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Visual Design & Style Guide</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <p className={styles.projectBody}>
                                    The visual system was intentionally minimal and calm,
                                    using:
                                </p>
                                <ul className={styles.projectList}>
                                    <li>Clear hierarchy and spacing</li>
                                    <li>Limited color palette</li>
                                    <li>Simple typography optimized for readability</li>
                                    <li>Interfaces designed to feel supportive, not technical</li>
                                </ul>
                                <p className={styles.projectBody}>
                                    The goal was to create an environment that felt safe,
                                    focused, and non-judgmental for learners who already
                                    feel overwhelmed.
                                </p>
                            </section>


                            <section className={styles.projectSection}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Merch</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.placeholderPanel}>Add merch images here</div>
                            </section>

                            <section className={styles.projectSection} id='final-product'>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Final Product</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.placeholderPanel}>Add final product visuals here</div>
                            </section>

                        <section className={styles.projectSection} id='reflection'>
                            <div className={styles.sectionHeading}>
                                <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                <h2 className={styles.sectionHeadingTitle}>Reflection</h2>
                                <div className={styles.sectionHeadingLine} aria-hidden='true' />
                            </div>
                            <p className={styles.projectBody}>
                                As Co-Product Owner and Lead Product Designer, during the initial
                                research and ideation phase, I felt overwhelmed by the number of
                                issues uncovered through surveys, interviews, and competitor analysis.
                                The problems were layered and systemic, and I questioned how we could
                                realistically address them within a single product.
                            </p>
                            <p className={styles.projectBody}>
                                To regain focus, I prioritized the highest-impact challenges and
                                defined clear scope boundaries. Instead of trying to solve everything,
                                I focused on core features that directly reduced cognitive overload
                                and improved study clarity. This iterative approach helped shape Got
                                It into a focused, lean prototype grounded in real user needs.
                            </p>
                            <p className={styles.projectBody}>
                                Through this process, I learned how critical it is to separate
                                important problems from urgent ones. As a leader, I had to make
                                decisions that balanced ambition with feasibility, ensuring the team
                                stayed aligned and confident in the direction. I also realized that
                                designing within constraints doesn&apos;t limit creativity—it sharpens
                                it. By narrowing the scope, we built something intentional rather
                                than bloated.
                            </p>
                            <p className={styles.projectBody}>
                                Ultimately, I learned that strong scope definition, disciplined
                                prioritization, and decisive leadership are just as important as
                                creativity when building meaningful, user-centered products.
                            </p>
                        </section>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

