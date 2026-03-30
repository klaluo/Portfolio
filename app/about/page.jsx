"use client";
import { useState } from "react";
import AboutGame from "../../components/AboutGame";
export default function About() {
    const [openSections, setOpenSections] = useState(() => new Set([0]));
    const sections = [
        {
            title: "Background",
            body: "I’m a UX-focused designer and developer who enjoys turning complex ideas into clear, human experiences. My background blends strategy, interaction design, and front-end implementation so I can move from concept to polished delivery with intention.",
        },
        {
            title: "Design Philosophy",
            body: "I believe good design balances clarity with personality. I prioritize systems thinking, thoughtful hierarchy, and accessible interfaces that feel intuitive and warm. Every decision should earn its place and support the user’s path.",
        },
        {
            title: "Things I Love",
            body: "Design systems, delightful micro‑interactions, and collaborating across disciplines. Outside of work, I enjoy exploring new tools, collecting design inspiration, and experimenting with motion and visual storytelling.",
        },
    ];

    return (
        <main className='main aboutPage'>
            <section className='section aboutSection'>
                <div className='container aboutContainer'>
                    <div className='aboutHeader'>
                        <h1 className='aboutTitle'>Kayla Luo</h1>
                        <p className='aboutIntro'>
                            Strategic empath and product‑minded designer focused on
                            building clear, human interfaces. I love translating
                            complexity into calm, intuitive experiences.
                        </p>
                    </div>
                    <div className='aboutAccordion'>
                        {sections.map((section, index) => {
                            const isOpen = openSections.has(index);
                            const contentId = `about-panel-${index}`;
                            return (
                                <div
                                    key={section.title}
                                    className={`accordionItem ${
                                        isOpen ? "isOpen" : ""
                                    }`}
                                >
                                    <button
                                        type='button'
                                        className='accordionButton'
                                        onClick={() =>
                                            setOpenSections((prev) => {
                                                const next = new Set(prev);
                                                if (next.has(index)) {
                                                    next.delete(index);
                                                } else {
                                                    next.add(index);
                                                }
                                                return next;
                                            })
                                        }
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                    >
                                        <span>{section.title}</span>
                                        <span className='accordionIcon'>
                                            {isOpen ? "×" : "+"}
                                        </span>
                                    </button>
                                    <div
                                        id={contentId}
                                        className='accordionContent'
                                        role='region'
                                        aria-hidden={!isOpen}
                                    >
                                        <p>{section.body}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
