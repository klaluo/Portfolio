import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerInner">

                {/* CTA */}
                <div className="footerCta">
                    <p className="footerCtaLabel">Let's work together</p>
                    <h2 className="footerCtaHeading">
                        Got a project in mind?
                    </h2>
                    <a
                        href="mailto:kaylaluoo@gmail.com"
                        className="footerCtaButton"
                    >
                        Say hello ↗
                    </a>
                </div>

                {/* Divider */}
                <div className="footerDivider" />

                {/* Bottom row */}
                <div className="footerBottom">
                    <p className="footerCopy">
                        © {currentYear} Kayla Luo
                    </p>

                    <nav className="footerNav" aria-label="Footer navigation">
                        <Link href="/" className="footerNavLink">Work</Link>
                        <Link href="/about" className="footerNavLink">About</Link>
                        <a
                            href="https://www.linkedin.com/in/kayla-luo/"
                            target="_blank"
                            rel="noreferrer"
                            className="footerNavLink"
                        >
                            LinkedIn ↗
                        </a>
                        <a
                            href="mailto:kaylaluoo@gmail.com"
                            className="footerNavLink"
                        >
                            Email
                        </a>
                    </nav>
                </div>

            </div>
        </footer>
    );
}