"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudySection from "./CaseStudySection";
import ImageLightbox from "./ImageLightbox";
import Paragraphs from "./blocks/Paragraphs";
import Bullets, { parseBold } from "./blocks/Bullets";
import CardGrid from "./blocks/CardGrid";
import Carousel from "../Carousel/Carousel";

const MAIN_NAV_OFFSET_PX = 72;

export default function CaseStudyPage({ project, styles }) {
    const outlineSections =
        project.sections?.map((s) => ({ id: s.id, label: s.title })) ?? project.nav ?? [];
    const [activeSection, setActiveSection] = useState(outlineSections[0]?.id);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [isDocNavFixed, setIsDocNavFixed] = useState(false);
    const docNavSentinelRef = useRef(null);

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

    useEffect(() => {
        if (project.bodyClass) document.body.classList.add(project.bodyClass);
        return () => {
            if (project.bodyClass) document.body.classList.remove(project.bodyClass);
        };
    }, [project.bodyClass]);

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

    const { intro, navLogo, overview, research, keyFindings, design, visualDesign, wireframes, finalProduct, reflection } =
        project;
    const topId = project.topId || "case-study-top";

    function renderBlock(block) {
        if (!block) return null;
        switch (block.type) {
            case "tag":
                return (
                    <div className={styles.blockTagRow}>
                        <span className={styles.sectionTag}>{block.text}</span>
                    </div>
                );
            case "subheading":
                return <h3 className={styles.sectionSubheading}>{block.text}</h3>;
            case "paragraphs":
                return <Paragraphs items={block.items} styles={styles} />;
            case "bullets":
                return <Bullets items={block.items} styles={styles} />;
            case "carousel":
                return (
                    <Carousel
                        images={block.images}
                        ariaLabel={block.ariaLabel ?? "Carousel"}
                        className={block.className}
                    />
                );
            case "cardGrid":
                return <CardGrid cards={block.cards} styles={styles} />;
            default:
                return null;
        }
    }

    return (
        <main className={`main ${styles.projectDetail}`} id={topId}>
            <section className="section">
                <div className={`container ${styles.projectContainer}`}>
                    {/* Intro */}
                    <div className={styles.projectIntro}>
                        <span className={styles.caseTag}>{intro.caseTag}</span>
                        <h1 className={styles.introTitle}>{intro.title}</h1>
                        <div className={styles.introMeta}>
                            <div>
                                <h3>My Role</h3>
                                {intro.meta.role?.map((r, i) => (
                                    <p key={i}>{r}</p>
                                ))}
                            </div>
                            <div>
                                <h3>Team</h3>
                                {intro.meta.team?.map((t, i) => (
                                    <p key={i}>{t}</p>
                                ))}
                            </div>
                            <div>
                                <h3>Timeline</h3>
                                <p>{intro.meta.timeline}</p>
                            </div>
                            <div>
                                <h3>Tools</h3>
                                {intro.meta.tools?.map((t, i) => (
                                    <p key={i}>{t}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DocNav + children */}
                    <div className={styles.docNavStickyWrapper}>
                        <div ref={docNavSentinelRef} className={styles.docNavSentinel} aria-hidden="true" />
                        <div
                            className={
                                isDocNavFixed ? `${styles.docNav} ${styles.docNavFixed}` : styles.docNav
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
                            <a className={styles.docNavIcon} href={`#${topId}`} aria-label="Back to top">
                                ↑
                            </a>
                        </div>
                        {isDocNavFixed && <div className={styles.docNavSpacer} />}

                        {/* Intro media — only when primary image is provided */}
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

                        <div className={styles.projectContent}>
                            {project.sections?.length ? (
                                project.sections.map((section) => (
                                    <CaseStudySection
                                        key={section.id}
                                        id={section.id}
                                        title={section.title}
                                        styles={styles}
                                    >
                                        {section.blocks?.map((block, i) => (
                                            <div key={i}>{renderBlock(block)}</div>
                                        ))}
                                    </CaseStudySection>
                                ))
                            ) : (
                                <>
                                    {/* Overview */}
                                    {overview && (
                                        <section className={styles.overviewSection} id="overview">
                                            <div className={styles.overviewInner}>
                                                <div className={styles.sectionHeading}>
                                                    <div className={styles.sectionHeadingLine} aria-hidden="true" />
                                                    <h2 className={styles.sectionHeadingTitle}>{overview.title}</h2>
                                                    <div className={styles.sectionHeadingLine} aria-hidden="true" />
                                                </div>
                                                <div className={styles.overviewGotItRow}>
                                                    <div className={styles.overviewGotItText}>
                                                        {overview.productName && (
                                                            <h3 className={styles.sectionSubheading}>
                                                                {overview.productName}
                                                            </h3>
                                                        )}
                                                        <Paragraphs items={overview.productParagraphs} styles={styles} />
                                                        {overview.carouselImages?.length > 0 && (
                                                            <Carousel
                                                                images={overview.carouselImages}
                                                                ariaLabel="Overview images"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {overview.insightsSubheading && (
                                                    <>
                                                        <h3 className={styles.sectionSubheading}>
                                                            {overview.insightsSubheading}
                                                        </h3>
                                                        <Paragraphs items={overview.insightsParagraphs} styles={styles} />
                                                    </>
                                                )}
                                            </div>
                                        </section>
                                    )}

                                    {/* Research */}
                                    {research && (
                                        <CaseStudySection id="research" title={research.title} styles={styles}>
                                            {research.approach && (
                                                <div className={styles.approachBlock}>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {research.approach.subheading}
                                                    </h3>
                                                    <Paragraphs items={research.approach.paragraphs} styles={styles} />
                                                    <Bullets items={research.approach.listItems} styles={styles} />
                                                    <Paragraphs
                                                        items={research.approach.paragraphsAfter}
                                                        styles={styles}
                                                    />
                                                </div>
                                            )}
                                            {research.interviews && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {research.interviews.subheading}
                                                    </h3>
                                                    <p className={styles.projectBody}>{research.interviews.paragraph}</p>
                                                </>
                                            )}
                                            {research.findingsRows?.map((row, ri) => (
                                                <div key={ri} className={styles.findingsRow}>
                                                    <div className={styles.findingsCard}>
                                                        <h4
                                                            className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}
                                                        >
                                                            {row.concerns.title}
                                                        </h4>
                                                        <ul>
                                                            {row.concerns.items?.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className={styles.findingsCard}>
                                                        <h4
                                                            className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}
                                                        >
                                                            {row.solutions.title}
                                                        </h4>
                                                        <ul>
                                                            {row.solutions.items?.map((item, i) => (
                                                                <li key={i}>{parseBold(item)}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                            {research.userSurvey && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {research.userSurvey.subheading}
                                                    </h3>
                                                    <Paragraphs items={research.userSurvey.paragraphs} styles={styles} />
                                                </>
                                            )}
                                            {research.surveyFindingsRows?.map((row, ri) => (
                                                <div key={`survey-${ri}`} className={styles.findingsRow}>
                                                    <div className={styles.findingsCard}>
                                                        <h4
                                                            className={`${styles.findingsCardTitle} ${styles.findingsCardTitleConcerns}`}
                                                        >
                                                            {row.concerns.title}
                                                        </h4>
                                                        <ul>
                                                            {row.concerns.items?.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className={styles.findingsCard}>
                                                        <h4
                                                            className={`${styles.findingsCardTitle} ${styles.findingsCardTitleSolutions}`}
                                                        >
                                                            {row.solutions.title}
                                                        </h4>
                                                        <ul>
                                                            {row.solutions.items?.map((item, i) => (
                                                                <li key={i}>{parseBold(item)}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                            {research.competitiveAnalysis && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {research.competitiveAnalysis.subheading}
                                                    </h3>
                                                    <Paragraphs
                                                        items={research.competitiveAnalysis.paragraphs}
                                                        styles={styles}
                                                    />
                                                    <div className={styles.gapsBlock}>
                                                        <p className={styles.gapsIntro}>
                                                            {research.competitiveAnalysis.gaps?.intro}
                                                        </p>
                                                        <ol className={styles.gapsList}>
                                                            {research.competitiveAnalysis.gaps?.items?.map(
                                                                (item, i) => (
                                                                    <li key={i}>{item}</li>
                                                                )
                                                            )}
                                                        </ol>
                                                    </div>
                                                    <Paragraphs
                                                        items={research.competitiveAnalysis.paragraphsAfter}
                                                        styles={styles}
                                                    />
                                                </>
                                            )}
                                            {research.personas && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {research.personas.subheading}
                                                    </h3>
                                                    <p className={styles.personaSummary}>{research.personas.summary}</p>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            marginTop: "2rem",
                                                        }}
                                                    >
                                                        <img
                                                            src="/images/projects/gotit/gotit-persona.png"
                                                            alt="Got It user persona"
                                                            style={{
                                                                maxWidth: "750px",
                                                                width: "100%",
                                                                height: "auto",
                                                            }}
                                                        />
                                                        <a
                                                            href="https://www.figma.com/board/4TxlwCUXXfpd8TctbKZz0s/User-Personas?node-id=0-1&t=avXFhpYMcNEqx809-1"
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
                                                            View full persona
                                                        </a>
                                                    </div>
                                                </>
                                            )}
                                        </CaseStudySection>
                                    )}

                                    {/* Key Findings */}
                                    {keyFindings && (
                                        <section className={styles.projectSection}>
                                            <h3 className={styles.sectionSubheading}>{keyFindings.subheading}</h3>
                                            <CardGrid cards={keyFindings.cards} styles={styles} />
                                        </section>
                                    )}

                                    {/* Design */}
                                    {design && (
                                        <CaseStudySection id="design" title={design.title} styles={styles}>
                                            {design.introParagraph && (
                                                <p className={styles.projectBody}>{design.introParagraph}</p>
                                            )}
                                            {design.principlesBlock && (
                                                <div className={styles.designPrinciplesBlock}>
                                                    {design.principlesBlock.subheading && (
                                                        <h3 className={styles.sectionSubheading}>
                                                            {design.principlesBlock.subheading}
                                                        </h3>
                                                    )}
                                                    <Paragraphs
                                                        items={design.principlesBlock.paragraphs}
                                                        styles={styles}
                                                    />
                                                    <Bullets items={design.principlesBlock.listItems} styles={styles} />
                                                    <Paragraphs
                                                        items={design.principlesBlock.paragraphsAfter}
                                                        styles={styles}
                                                    />
                                                </div>
                                            )}
                                            {design.featureCardsSubheading && (
                                                <h3 className={styles.sectionSubheading}>
                                                    {design.featureCardsSubheading}
                                                </h3>
                                            )}
                                            {design.featureCards?.length > 0 && (
                                                <div className={styles.featureCards}>
                                                    {design.featureCards.map((card, i) => (
                                                        <article key={i} className={styles.featureCard}>
                                                            <h4>{card.title}</h4>
                                                            <p>{card.body}</p>
                                                        </article>
                                                    ))}
                                                </div>
                                            )}
                                            {design.designChallenge && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {design.designChallenge.subheading}
                                                    </h3>
                                                    <Paragraphs
                                                        items={design.designChallenge.paragraphs}
                                                        styles={styles}
                                                    />
                                                </>
                                            )}
                                            {design.sitemap && (
                                                <>
                                                    <h3 className={styles.sectionSubheading}>
                                                        {design.sitemap.subheading}
                                                    </h3>
                                                    <p className={styles.projectBody}>{design.sitemap.paragraph}</p>
                                                    <div className={styles.projectImageSiteMap}>
                                                        <img
                                                            src={design.sitemap.image?.src}
                                                            alt={design.sitemap.image?.alt}
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </CaseStudySection>
                                    )}

                                    {/* Visual Design */}
                                    {visualDesign && (
                                        <section className={styles.projectSection}>
                                            <h3 className={styles.sectionSubheading}>{visualDesign.subheading}</h3>
                                            <Paragraphs items={visualDesign.paragraphsBefore} styles={styles} />
                                            <Bullets items={visualDesign.listItems} styles={styles} />
                                            <Paragraphs items={visualDesign.paragraphsAfter} styles={styles} />
                                        </section>
                                    )}

                                    {/* Wireframes */}
                                    {wireframes && (
                                        <section className={styles.projectSection}>
                                            <h3 className={styles.sectionSubheading}>{wireframes.subheading}</h3>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: "2rem",
                                                }}
                                            >
                                                {wireframes.embedUrl && (
                                                    <iframe
                                                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                                                        width="800"
                                                        height="450"
                                                        src={wireframes.embedUrl}
                                                        allowFullScreen
                                                    />
                                                )}
                                            </div>
                                        </section>
                                    )}

                                    {/* Final Product */}
                                    {finalProduct && (
                                        <CaseStudySection
                                            id="final-product"
                                            title={finalProduct.title}
                                            styles={styles}
                                        >
                                            {finalProduct.introParagraphs?.length > 0 && (
                                                <Paragraphs items={finalProduct.introParagraphs} styles={styles} />
                                            )}
                                            {finalProduct.carouselImages?.length > 0 && (
                                                <div className={styles.finalProductCarouselWrap}>
                                                    <Carousel
                                                        images={finalProduct.carouselImages}
                                                        ariaLabel="Final product wireframes"
                                                        className={styles.finalProductCarousel}
                                                    />
                                                </div>
                                            )}
                                            {/* Merch / promotional section – uncomment to re-enable
                                            {finalProduct.promotionalSubheading && (
                                                <h3 className={styles.sectionSubheading}>
                                                    {finalProduct.promotionalSubheading}
                                                </h3>
                                            )}
                                            {finalProduct.placeholderPromo && (
                                                <div className={styles.placeholderPanel}>{finalProduct.placeholderPromo}</div>
                                            )}
                                            */}
                                        </CaseStudySection>
                                    )}

                                    {/* Reflection */}
                                    {reflection && (
                                        <CaseStudySection id="reflection" title={reflection.title} styles={styles}>
                                            <Paragraphs items={reflection.paragraphs} styles={styles} />
                                        </CaseStudySection>
                                    )}
                                </>
                            )}
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
