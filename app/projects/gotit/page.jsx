"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./gotit.module.css";

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
                        <div className={styles.docNav}>
                            <a className={styles.docNavIcon} href='/' aria-label='Go to home'>
                                <img src='/images/gotit-logo.png' alt='Got It logo' />
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
                    </div>

                    <div className={styles.projectContent}>
                        <section className={styles.overviewSection} id='overview'>
                            <div className={styles.overviewInner}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Overview</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.overviewIntro}>
                                    <div className={styles.overviewLabel}>Got It</div>
                                </div>
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
                        </section>
                        <section className={styles.projectSection}>
                            <div className={styles.sectionHeading}>
                                <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                <h2 className={styles.sectionHeadingTitle}>Insights</h2>
                                <div className={styles.sectionHeadingLine} aria-hidden='true' />
                            </div>
                            <p className={styles.projectBody}>
                                Apprenticeship retention is a known challenge in skilled trades.
                                Instructors shared that many apprentices struggle to persist
                                through training, not due to lack of ability, but because course
                                material is dense, overwhelming, and difficult to navigate. This
                                insight reinforced the need for learning tools that support
                                comprehension, confidence, and sustained engagement—especially
                                for learners who experience cognitive overload.
                            </p>
                        </section>

                            <section className={styles.projectSection} id='research'>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Research and Discovery</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <h3 className={styles.sectionSubheading}>Approach</h3>
                                <p className={styles.projectBody}>
                                    As Product Owner, I defined the research direction and
                                    ensured findings directly informed product decisions.
                                    Research methods included:
                                </p>
                                <ul className={styles.projectList}>
                                    <li>User interviews with trade workers and electrical apprentices</li>
                                    <li>Surveys focused on study habits, pain points, and existing tools</li>
                                    <li>Heuristic analysis of existing AI study tools and educational platforms</li>
                                </ul>
                                <p className={styles.projectBody}>
                                    We intentionally focused on one trade—electrical—to
                                    ensure accuracy, depth, and relevance before
                                    considering expansion to other trades.
                                </p>
                                {/* Example two-column findings: duplicate and fill with your content */}
                                <div className={styles.findingsRow}>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}>Key concerns from survey</h4>
                                        <ul>
                                            <li>Dense material causes overwhelm</li>
                                            <li>Unclear where to start studying</li>
                                            <li>Trust in AI accuracy for code content</li>
                                        </ul>
                                    </div>
                                    <div className={styles.findingsCard}>
                                        <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}>Possible solutions from survey</h4>
                                        <ul>
                                            <li>Simplified, structured summaries</li>
                                            <li>Clear steps and priorities</li>
                                            <li>Sandboxed to Canadian Electrical Code</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className={styles.projectSection}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Competitive Analysis</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <p className={styles.projectBody}>
                                    While AI tools exist to summarize information, many are
                                    not designed with neurodiverse learners in mind and
                                    can introduce additional friction through complex
                                    interfaces, excessive options, or unreliable outputs.
                                    For apprentices studying regulated trade content,
                                    inaccurate or hallucinated information creates serious
                                    trust and safety concerns. As a result, neurodiverse
                                    and underrepresented electrical apprentices are left
                                    without a reliable, accessible way to simplify their
                                    own notes while maintaining confidence in the accuracy
                                    of the material.
                                </p>
                            </section>

                            <section className={styles.projectSection}>
                                <div className={styles.sectionHeading}>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                    <h2 className={styles.sectionHeadingTitle}>Key Findings</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <div className={styles.insightCards}>
                                    <article className={styles.insightCard}>
                                        <h3>Learning & Cognitive Load</h3>
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
                                <p className={styles.projectBody}>
                                    As Lead Product Designer, I translated research
                                    insights into a focused MVP. Core design principles
                                    included:
                                </p>
                                <ul className={styles.projectList}>
                                    <li>Reduce cognitive load at every step</li>
                                    <li>Limit feature scope to avoid overwhelm</li>
                                    <li>Prioritize clarity, structure, and predictability</li>
                                    <li>Design for trust through transparent data sources</li>
                                </ul>
                                <p className={styles.projectBody}>
                                    The key product decision was allowing users to upload
                                    their own notes, then generate simplified versions
                                    grounded in the Canadian Electrical Code.
                                </p>
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
                                    <h2 className={styles.sectionHeadingTitle}>Site Map</h2>
                                    <div className={styles.sectionHeadingLine} aria-hidden='true' />
                                </div>
                                <p className={styles.projectBody}>
                                    The Site Map was instrumental in organizing the app’s
                                    structure for clear navigation, allowing apprentices
                                    to easily access key features such as note uploads,
                                    simplified summaries, and side-by-side comparison
                                    with source material. This structure ensured an
                                    intuitive, low-friction experience aligned with how
                                    users study and process information.
                                </p>
                                <div className={styles.projectImageCard}>
                                    <img
                                        src='/images/gotit-sitemap.png'
                                        alt='GotIt sitemap'
                                    />
                                </div>
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
                            <div className={styles.placeholderPanel}>Add reflection notes here</div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}

