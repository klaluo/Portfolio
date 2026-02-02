import Link from "next/link";
import Lanyard from "../components/Lanyard";

export default function Home() {
    return (
        <>
            <section className='hero'>
                <div className='container heroLayout'>
                    <div className='heroContent'>
                        <span className='heroBadge'>Hey! I’m Kayla,</span>
                        <h1 className='heroTitle'>
                            a{" "}
                            <span className='heroTitleHighlight'>
                                Strategic Empath
                            </span>{" "}
                            who designs with precision and purpose.
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
                <section className='section'>
                    <div className='container'>
                        <h2 className='sectionTitle'>Featured Work</h2>
                        <div className='grid'>
                            <article className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>Project One</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        A focused product experience that simplifies
                                        decision‑making and builds confidence.
                                    </p>
                                    <div className='cardDivider' />
                                    <div className='cardFooter'>
                                        <div className='cardTags'>
                                            <span className='cardTag'>UX</span>
                                            <span className='cardTag'>UI</span>
                                            <span className='cardTag'>Figma</span>
                                        </div>
                                        <span className='cardArrow' aria-hidden='true'>
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <article className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>Project Two</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        A visual system that keeps complex flows clear
                                        and reduces cognitive load.
                                    </p>
                                    <div className='cardDivider' />
                                    <div className='cardFooter'>
                                        <div className='cardTags'>
                                            <span className='cardTag'>Research</span>
                                            <span className='cardTag'>Design</span>
                                            <span className='cardTag'>Prototype</span>
                                        </div>
                                        <span className='cardArrow' aria-hidden='true'>
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </article>
                            <article className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>Project Three</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        An end‑to‑end experience that pairs strategy
                                        with thoughtful UI details.
                                    </p>
                                    <div className='cardDivider' />
                                    <div className='cardFooter'>
                                        <div className='cardTags'>
                                            <span className='cardTag'>Product</span>
                                            <span className='cardTag'>UX</span>
                                            <span className='cardTag'>Brand</span>
                                        </div>
                                        <span className='cardArrow' aria-hidden='true'>
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
