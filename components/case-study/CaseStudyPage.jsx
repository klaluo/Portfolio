"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudySection from "./CaseStudySection";
import ImageLightbox from "./ImageLightbox";
import Paragraphs from "./blocks/Paragraphs";
import Bullets, { parseBold } from "./blocks/Bullets";
import CardGrid from "./blocks/CardGrid";
import Carousel from "../Carousel/Carousel";
import TwoColumnContributions from "./blocks/TwoColumnContributions";
import CompTable from "./blocks/CompTable";
import IterationCards from "./blocks/IterationCards";
import QuoteBlock from "./blocks/QuoteBlock";
import ReflectionList from "./blocks/ReflectionList";

const MAIN_NAV_OFFSET_PX = 72;

export default function CaseStudyPage({ project, styles }) {
    const outlineSections =
        project.sections?.map((s) => ({ id: s.id, label: s.title })) ?? [];

    const [activeSection, setActiveSection] = useState(outlineSections[0]?.id);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isDocNavFixed, setIsDocNavFixed] = useState(false);
    const docNavSentinelRef = useRef(null);

    // ── Active section tracking ───────────────────────────────────────────────
    useEffect(() => {
        const targets = outlineSections
            .map((s) => document.getElementById(s.id))
            .filter(Boolean);
        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-35% 0px -55% 0px" }
        );
        targets.forEach((t) => observer.observe(t));
        return () => observer.disconnect();
    }, [outlineSections]);

    // ── Body class ────────────────────────────────────────────────────────────
    useEffect(() => {
        if (project.bodyClass) document.body.classList.add(project.bodyClass);
        return () => {
            if (project.bodyClass) document.body.classList.remove(project.bodyClass);
        };
    }, [project.bodyClass]);

    // ── Sticky nav ────────────────────────────────────────────────────────────
    useEffect(() => {
        const checkStick = () => {
            const sentinel = docNavSentinelRef.current;
            if (!sentinel) return;
            setIsDocNavFixed(sentinel.getBoundingClientRect().top <= MAIN_NAV_OFFSET_PX);
        };
        checkStick();
        window.addEventListener("scroll", checkStick, { passive: true });
        window.addEventListener("resize", checkStick);
        return () => {
            window.removeEventListener("scroll", checkStick);
            window.removeEventListener("resize", checkStick);
        };
    }, []);

    // ── Lightbox keyboard / scroll lock ──────────────────────────────────────
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

    const { intro, navLogo } = project;
    const topId = project.topId || "case-study-top";

    // ── Block renderer ────────────────────────────────────────────────────────
    function renderBlock(block, index) {
        if (!block) return null;

        switch (block.type) {
            case "group":
                return (
                    <div key={index} className={styles.sectionBlock}>
                        {block.blocks?.map((child, i) => renderBlock(child, i))}
                    </div>
                );

            case "tag":
                return (
                    <div key={index} className={styles.blockTagRow}>
                        <span className={styles.sectionTag}>{block.text}</span>
                    </div>
                );

            case "subheading":
                return (
                    <h3 key={index} className={styles.sectionSubheading}>
                        {block.text}
                    </h3>
                );

            case "paragraphs":
                return <Paragraphs key={index} items={block.items} styles={styles} />;

            case "bullets":
                return <Bullets key={index} items={block.items} styles={styles} />;

                case "cardGrid":
                    return <CardGrid key={index} cards={block.cards} styles={styles} block={block} />;

                case "carousel": {
                    const wrapClass = block.className
                        ? styles[block.className]
                        : styles.carouselWrap;
                    return (
                        <div key={index} className={wrapClass}>
                            <Carousel
                                images={block.images}
                                ariaLabel={block.ariaLabel ?? "Carousel"}
                            />
                        </div>
                    );
                }
                case "twoColumnContributions":
                    return (
                        <TwoColumnContributions key={index} block={block} styles={styles} />
                    );
                 
                case "quoteBlock":
                    return (
                        <QuoteBlock key={index} block={block} styles={styles} />
                    );
                 
                case "compTable":
                    return (
                        <CompTable key={index} block={block} styles={styles} />
                    );
                 
                case "iterationCards":
                    return (
                        <IterationCards key={index} block={block} styles={styles} />
                    );
            case "findingsRow":
                return (
                    <div key={index} className={styles.findingsRow}>
                        <div className={styles.findingsCard}>
                            <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}>
                                {block.concerns.title}
                            </h4>
                            <ul>
                                {block.concerns.items?.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.findingsCard}>
                            <h4 className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}>
                                {block.solutions.title}
                            </h4>
                            <ul>
                                {block.solutions.items?.map((item, i) => (
                                    <li key={i}>{parseBold(item)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );

            case "featureCards":
                return (
                    <div key={index} className={styles.featureCards}>
                        {block.cards?.map((card, i) => (
                            <article key={i} className={styles.featureCard}>
                                <h4>{card.title}</h4>
                                <p>{card.body}</p>
                            </article>
                        ))}
                    </div>
                );

            case "sitemap":
                return (
                    <div key={index} className={styles.projectImageSiteMap}>
                        <img src={block.image?.src} alt={block.image?.alt} />
                    </div>
                );

            case "figmaEmbed":
                return (
                    <div
                        key={index}
                        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
                    >
                        <iframe
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            width="800"
                            height="450"
                            src={block.url}
                            allowFullScreen
                        />
                    </div>
                );
                case "reflectionList":
                    return <ReflectionList key={index} block={block} />;
            case "personaImage":
                return (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "2rem",
                        }}
                    >
                        <img
                            src={block.src}
                            alt={block.alt}
                            style={{ maxWidth: "750px", width: "100%", height: "auto" }}
                        />
                        {block.linkHref && (
                            <a
                                href={block.linkHref}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    marginTop: "1.5rem",
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "999px",
                                    backgroundColor: "#111827",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.02em",
                                }}
                            >
                                {block.linkText ?? "View full persona"}
                            </a>
                        )}
                    </div>
                );
                

            default:
                return null;
        }
    }

    // ── Render ────────────────────────────────────────────────────────────────
    return (
        <main className={`main ${styles.projectDetail}`} id={topId}>
            <section className="section">
                <div className={`container ${styles.projectContainer}`}>

                    {/* ── Intro ─────────────────────────────────────────────── */}
                    <div className={styles.projectIntro}>
                        <span className={styles.caseTag}>{intro.caseTag}</span>
                        <h1 className={styles.introTitle}>{intro.title}</h1>
                        <div className={styles.introMeta}>
                            <div>
                                <h3>My Role</h3>
                                {intro.meta.role?.map((r, i) => <p key={i}>{r}</p>)}
                            </div>
                            <div>
                                <h3>Team</h3>
                                {intro.meta.team?.map((t, i) => <p key={i}>{t}</p>)}
                            </div>
                            <div>
                                <h3>Timeline</h3>
                                <p>{intro.meta.timeline}</p>
                            </div>
                            <div>
                                <h3>Tools</h3>
                                {intro.meta.tools?.map((t, i) => <p key={i}>{t}</p>)}
                            </div>
                        </div>
                    </div>

                    {/* ── DocNav + content ──────────────────────────────────── */}
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
                            <a className={styles.docNavIcon} href="/" aria-label="Go to home">
                                <img src={navLogo?.src} alt={navLogo?.alt ?? "Logo"} />
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
                                href={`#${topId}`}
                                aria-label="Back to top"
                            >
                                ↑
                            </a>
                        </div>

                        {isDocNavFixed && <div className={styles.docNavSpacer} />}

                        {/* ── Intro media ───────────────────────────────────── */}
                        {intro.introMedia?.primary?.src && (
                            <div className={styles.introSection}>
                                <div className={styles.introMedia}>
                                    <div className={styles.introMediaContainer}>
                                        {intro.introMedia?.secondary?.src && (
                                            <img
                                                src={intro.introMedia.secondary.src}
                                                alt={intro.introMedia.secondary.alt}
                                                className={styles.introMediaSecondary}
                                            />
                                        )}
                                        <img
                                            src={intro.introMedia.primary.src}
                                            alt={intro.introMedia.primary.alt}
                                            className={styles.introMediaPrimary}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ── Sections ──────────────────────────────────────── */}
                        <div className={styles.projectContent}>
                            {project.sections?.map((section) => (
                                <CaseStudySection
                                    key={section.id}
                                    id={section.id}
                                    title={section.title}
                                    styles={styles}
                                >
                                    {section.blocks?.map((block, i) => renderBlock(block, i))}
                                </CaseStudySection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ImageLightbox
                styles={styles}
                imageSrc={lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </main>
    );
}