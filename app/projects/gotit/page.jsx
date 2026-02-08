export default function GotIt() {
    return (
        <main className='main'>
            <section className='section projectDetail'>
                <div className='container projectContainer'>
                    <header className='projectHeader'>
                        <p className='projectKicker'>Description / title</p>
                        <h1 className='projectTitle'>
                            Designed an AI-Powered Learning Tool That Reduced
                            Cognitive Overload for Neurodiverse Electrical
                            Apprentices by Turning Dense Trade Course Content into
                            Clear, Accurate Notes Using the Canadian Electrical
                            Code
                        </h1>
                        <p className='projectSummary'>
                            This project focused on designing and managing the
                            development of an AI-powered study tool for electrical
                            apprentices in British Columbia, with a specific
                            emphasis on neurodiverse learners. As Product Owner,
                            Project Manager, and Lead Product Designer, I led the
                            project end-to-end—from defining the problem and
                            scoping the MVP to guiding research, design decisions,
                            and implementation strategy.
                        </p>
                        <p className='projectSummary'>
                            The goal was to help apprentices simplify their own
                            study materials without sacrificing accuracy. Unlike
                            general AI summarization tools, this product sandboxed
                            the Canadian Electrical Code to ensure reliable
                            outputs for regulated trade content, reducing both
                            cognitive overload and trust issues during studying.
                        </p>
                    </header>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Insights</h2>
                        <p className='projectBody'>
                            Talk about the retention issue.
                        </p>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Research and discovery</h2>
                        <p className='projectBody'>
                            As Product Owner, I defined the research direction and
                            ensured findings directly informed product decisions.
                            Research methods included:
                        </p>
                        <ul className='projectList'>
                            <li>User interviews with trade workers and electrical apprentices</li>
                            <li>Surveys focused on study habits, pain points, and existing tools</li>
                            <li>Heuristic analysis of existing AI study tools and educational platforms</li>
                        </ul>
                        <p className='projectBody'>
                            We intentionally focused on one trade—electrical—to
                            ensure accuracy, depth, and relevance before
                            considering expansion to other trades.
                        </p>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Competitive analysis</h2>
                        <p className='projectBody'>
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

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Key Findings</h2>
                        <div className='insightCards'>
                            <article className='insightCard'>
                                <h3>Learning & Cognitive Load</h3>
                                <ul>
                                    <li>6/8 participants reported a learning disability (ADHD, dyslexia, or self-identified)</li>
                                    <li>All participants with learning disabilities struggled with textbook-based learning</li>
                                    <li>Learners take longer to study than peers and still feel unsure about the material</li>
                                    <li>This leads to frustration, burnout, and demotivation</li>
                                </ul>
                            </article>
                            <article className='insightCard'>
                                <h3>Studying & Organization</h3>
                                <ul>
                                    <li>All participants feel unsure where to start when studying</li>
                                    <li>Most struggle to organize information across manuals, worksheets, and notes</li>
                                    <li>Dense content makes it hard to identify what is actually important</li>
                                </ul>
                            </article>
                            <article className='insightCard'>
                                <h3>Content Challenges</h3>
                                <ul>
                                    <li>Math and the Canadian Electrical Code are the most difficult topics</li>
                                    <li>Large blocks of small text, jargon, acronyms, and technical language cause cognitive overload</li>
                                    <li>Learners want visuals, examples, and simplified explanations</li>
                                </ul>
                            </article>
                            <article className='insightCard'>
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

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Design and Ideation</h2>
                        <p className='projectBody'>
                            As Lead Product Designer, I translated research
                            insights into a focused MVP. Core design principles
                            included:
                        </p>
                        <ul className='projectList'>
                            <li>Reduce cognitive load at every step</li>
                            <li>Limit feature scope to avoid overwhelm</li>
                            <li>Prioritize clarity, structure, and predictability</li>
                            <li>Design for trust through transparent data sources</li>
                        </ul>
                        <p className='projectBody'>
                            The key product decision was allowing users to upload
                            their own notes, then generate simplified versions
                            grounded in the Canadian Electrical Code.
                        </p>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Visual Design & Style Guide</h2>
                        <p className='projectBody'>
                            The visual system was intentionally minimal and calm,
                            using:
                        </p>
                        <ul className='projectList'>
                            <li>Clear hierarchy and spacing</li>
                            <li>Limited color palette</li>
                            <li>Simple typography optimized for readability</li>
                            <li>Interfaces designed to feel supportive, not technical</li>
                        </ul>
                        <p className='projectBody'>
                            The goal was to create an environment that felt safe,
                            focused, and non-judgmental for learners who already
                            feel overwhelmed.
                        </p>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Site Map</h2>
                        <div className='placeholderPanel'>Add site map image here</div>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Merch</h2>
                        <div className='placeholderPanel'>Add merch images here</div>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Final Product</h2>
                        <div className='placeholderPanel'>Add final product visuals here</div>
                    </section>

                    <section className='projectSection'>
                        <h2 className='projectSectionTitle'>Showcase</h2>
                        <div className='placeholderPanel'>Add showcase media here</div>
                    </section>
                </div>
            </section>
        </main>
    );
}

