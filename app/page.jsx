import Link from "next/link";
import Lanyard from "../components/Lanyard";

export default function Home() {
    return (
        <>
            <section className='hero' id='hero'>
                <div className='container heroLayout'>
                    <div className='heroContent'>
                        <span className='heroBadge'>Hey! I’m Kayla,</span>
                        <h1 className='heroTitle'>
                            a Strategic Empath who simplifies complexity and
                            humanizes technology
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
                <section className='section' id='featured-work'>
                    <div className='container'>
                        <h2 className='sectionTitle'>Featured Work</h2>
                        <div className='grid'>
                            <Link href='/projects/gotit' className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>Got It</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        An AI powered study tool designed for neurodiverse
                                        electrical apprentices in BC.
                                    </p>
                                    <div className='cardDivider' />
                                    <div className='cardFooter'>
                                        <div className='cardTags'>
                                            <span className='cardTag'>Figma</span>
                                            <span className='cardTag'>Research</span>
                                        
                                        </div>
                                        <span className='cardArrow' aria-hidden='true'>
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/projects/daybreak' className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>DayBreak</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        A multi-player horror game
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
                            </Link>
                            <Link href='/projects/project-3' className='card cardTemplate'>
                                <div className='cardMedia'>
                                    <div className='cardMediaInner' />
                                </div>
                                <div className='cardBody'>
                                    <div className='cardHeader'>
                                        <h3 className='cardTitle'>Coming Soon</h3>
                                        <span className='cardBadge'>Case Study</span>
                                    </div>
                                    <p className='cardDescription'>
                                        Currently working on something meaningful...
                                    </p>
                                    <div className='cardDivider' />
                                    <div className='cardFooter'>
                                        <div className='cardTags'>
                                            <span className='cardTag'>Illustrator</span>
                                        </div>
                                        <span className='cardArrow' aria-hidden='true'>
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
