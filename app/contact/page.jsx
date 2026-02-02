import Link from "next/link";

export default function Contact() {
    return (
        <main className='main'>
            <section className='section'>
                <div className='container'>
                    <h1 className='sectionTitle'>Get In Touch</h1>
                    <div className='sectionContent'>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                textAlign: "center",
                                marginBottom: "3rem",
                                color: "var(--text-light)",
                            }}
                        >
                            I'd love to hear from you! Whether you have a
                            question, a project idea, or just want to say hello,
                            feel free to reach out.
                        </p>

                        <div className='grid' style={{ marginBottom: "4rem" }}>
                            <div
                                className='card'
                                style={{ textAlign: "center" }}
                            >
                                <h3 className='cardTitle'>Email</h3>
                                <p className='cardDescription'>
                                    hello@yourname.com
                                </p>
                            </div>
                            <div
                                className='card'
                                style={{ textAlign: "center" }}
                            >
                                <h3 className='cardTitle'>LinkedIn</h3>
                                <p className='cardDescription'>
                                    <Link href='https://www.linkedin.com'>
                                        linkedin.com/in/yourname
                                    </Link>
                                </p>
                            </div>
                            <div
                                className='card'
                                style={{ textAlign: "center" }}
                            >
                                <h3 className='cardTitle'>Location</h3>
                                <p className='cardDescription'>City, Country</p>
                            </div>
                        </div>

                        <form
                            className='contactForm'
                            onSubmit={(e) => e.preventDefault()}
                            style={{ maxWidth: 700, margin: "0 auto" }}
                        >
                            <input
                                type='text'
                                name='name'
                                placeholder='Your name'
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Your email'
                                required
                            />
                            <textarea
                                name='message'
                                rows='6'
                                placeholder='Message'
                                required
                            />
                            <div style={{ textAlign: "center" }}>
                                <button className='ctaButton' type='submit'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
