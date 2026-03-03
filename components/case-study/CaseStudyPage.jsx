"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudySection from "./CaseStudySection";
import ImageLightbox from "./ImageLightbox";
import Paragraphs from "./blocks/Paragraphs";
import Bullets, { parseBold } from "./blocks/Bullets";
import CardGrid from "./blocks/CardGrid";

const MAIN_NAV_OFFSET_PX = 88;

export default function CaseStudyPage({ project, styles }) {
    const outlineSections = project.nav || [];
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

                        {/* Intro media */}
                        <div className={styles.introMedia}>
                            <img
                                src={intro.introMedia?.primary?.src}
                                alt={intro.introMedia?.primary?.alt}
                                className={styles.introImagePrimary}
                            />
                            <img
                                src={intro.introMedia?.secondary?.src}
                                alt={intro.introMedia?.secondary?.alt}
                                className={styles.introImageSecondary}
                            />
                        </div>

                        <div className={styles.projectContent}>
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
                                                    <h3 className={styles.sectionSubheading}>{overview.productName}</h3>
                                                )}
                                                <Paragraphs items={overview.productParagraphs} styles={styles} />
                                            </div>
                                            {overview.logo && (
                                                <div className={styles.overviewLogoWrap}>
                                                    <img
                                                        src={overview.logo.src}
                                                        alt={overview.logo.alt}
                                                        className={styles.overviewLogo}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {overview.insightsSubheading && (
                                            <>
                                                <h3 className={styles.sectionSubheading}>{overview.insightsSubheading}</h3>
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
                                            <h3 className={styles.sectionSubheading}>{research.approach.subheading}</h3>
                                            <Paragraphs items={research.approach.paragraphs} styles={styles} />
                                            <Bullets items={research.approach.listItems} styles={styles} />
                                            <Paragraphs items={research.approach.paragraphsAfter} styles={styles} />
                                        </div>
                                    )}
                                    {research.interviews && (
                                        <>
                                            <h3 className={styles.sectionSubheading}>{research.interviews.subheading}</h3>
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
                                            <h3 className={styles.sectionSubheading}>{research.userSurvey.subheading}</h3>
                                            <Paragraphs items={research.userSurvey.paragraphs} styles={styles} />
                                        </>
                                    )}
                                    {research.competitiveAnalysis && (
                                        <>
                                            <h3 className={styles.sectionSubheading}>
                                                {research.competitiveAnalysis.subheading}
                                            </h3>
                                            <Paragraphs items={research.competitiveAnalysis.paragraphs} styles={styles} />
                                            <div className={styles.gapsBlock}>
                                                <p className={styles.gapsIntro}>
                                                    {research.competitiveAnalysis.gaps?.intro}
                                                </p>
                                                <ol className={styles.gapsList}>
                                                    {research.competitiveAnalysis.gaps?.items?.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ol>
                                            </div>
                                            <Paragraphs items={research.competitiveAnalysis.paragraphsAfter} styles={styles} />
                                        </>
                                    )}
                                    {research.personas && (
                                        <>
                                            <h3 className={styles.sectionSubheading}>{research.personas.subheading}</h3>
                                            <div className={styles.personaRow}>
                                                <div className={styles.personaCards}>
                                                    <div className={styles.personaCard}>
                                                        <span className={styles.personaCardLabel}>
                                                            {research.personas.primary.label}
                                                        </span>
                                                        <div className={styles.personaCardBody}>
                                                            <div className={styles.personaCardImagePlaceholder}>
                                                                {research.personas.primary.imagePlaceholder}
                                                            </div>
                                                            <p className={styles.personaCardText}>
                                                                {research.personas.primary.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.personaCard}>
                                                        <span className={styles.personaCardLabel}>
                                                            {research.personas.secondary.label}
                                                        </span>
                                                        <div className={styles.personaCardBody}>
                                                            {research.personas.secondary.imageSrc && (
                                                                <button
                                                                    type="button"
                                                                    className={styles.personaImageButton}
                                                                    onClick={() =>
                                                                        setLightboxImage(research.personas.secondary.imageSrc)
                                                                    }
                                                                    aria-label="View secondary persona full size"
                                                                >
                                                                    <img
                                                                        src={research.personas.secondary.imageSrc}
                                                                        alt={research.personas.secondary.imageAlt}
                                                                        className={styles.personaCardImage}
                                                                    />
                                                                    <span className={styles.personaImageHint}>
                                                                        Click to view full size
                                                                    </span>
                                                                </button>
                                                            )}
                                                            <p className={styles.personaCardText}>
                                                                {research.personas.secondary.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className={styles.personaSummary}>{research.personas.summary}</p>
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
                                    {design.principlesBlock && (
                                        <div className={styles.designPrinciplesBlock}>
                                            <Paragraphs items={design.principlesBlock.paragraphs} styles={styles} />
                                            <Bullets items={design.principlesBlock.listItems} styles={styles} />
                                            <Paragraphs items={design.principlesBlock.paragraphsAfter} styles={styles} />
                                        </div>
                                    )}
                                    {design.featureCardsSubheading && (
                                        <h3 className={styles.sectionSubheading}>{design.featureCardsSubheading}</h3>
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
                                    {design.sitemap && (
                                        <>
                                            <h3 className={styles.sectionSubheading}>{design.sitemap.subheading}</h3>
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
                                <CaseStudySection id="final-product" title={finalProduct.title} styles={styles}>
                                    {finalProduct.placeholderMain && (
                                        <div className={styles.placeholderPanel}>{finalProduct.placeholderMain}</div>
                                    )}
                                    {finalProduct.promotionalSubheading && (
                                        <h3 className={styles.sectionSubheading}>
                                            {finalProduct.promotionalSubheading}
                                        </h3>
                                    )}
                                    {finalProduct.placeholderPromo && (
                                        <div className={styles.placeholderPanel}>{finalProduct.placeholderPromo}</div>
                                    )}
                                </CaseStudySection>
                            )}

                            {/* Reflection */}
                            {reflection && (
                                <CaseStudySection id="reflection" title={reflection.title} styles={styles}>
                                    <Paragraphs items={reflection.paragraphs} styles={styles} />
                                </CaseStudySection>
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
