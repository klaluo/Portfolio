"use client";
import { useState } from "react";

export default function About() {
    const [openSections, setOpenSections] = useState(() => new Set([0]));
    const sections = [
        {
            title: "Background",
            body: [
                "I became interested in UX/UI design after watching someone struggle with a simple digital task that should have been effortless. She wasn’t doing anything wrong — the design was. That moment made me realize how much thoughtful design can impact people’s everyday experiences, and it pushed me toward creating interfaces that are clear, intuitive, and accessible.",
            "I’ve always had a creative background, from painting and drawing to designing detailed nail art, which sharpened my eye for color, composition, and small details.",
            "Now I focus on UX strategy, interaction design, and front-end development, working from early concepts through to building products people can actually use.",
            ],
        },
        {
            title: "Design Philosophy",
            body: [
                "I believe good design should feel effortless. When something is well designed, people shouldn’t have to think about how to use it.",
                "I’m drawn to clean, focused interfaces where every element has a purpose. I think in systems, so small decisions connect back to the larger experience.",
                "Accessibility is part of that thinking. Designing with a wide range of users in mind from the start leads to products that are clearer and more usable for everyone.",
            ],
        },
        {
            title: "Things I Love",
            body: "Outside of work I'm usually outdoors, getting crafty, or convincing my friends to try something new with me. I love getting crafty, trying new art mediums, and making things from scratch. I love to travel, take long walks in nature, and explore everything BC has to offer. ",
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
                                        {Array.isArray(section.body)
                                            ? section.body.map((para, i) => (
                                                  <>
                                                      <p key={i}>{para}</p>
                                                      {i < section.body.length - 1 && <br />}
                                                  </>
                                              ))
                                            : <p>{section.body}</p>}
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
