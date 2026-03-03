"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (href) => pathname === href;
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const section = document.getElementById("featured-work");
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setActiveSection(entry.isIntersecting ? "featured-work" : "");
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [pathname]);

    return (
        <nav className='nav' aria-label='Main navigation'>
            <div className='navInner'>
                <Link className='navLogo' href='/' aria-label='Home'>
                    <Image
                        src='/images/main-logo.png'
                        alt='Logo'
                        width={56}
                        height={56}
                    />
                </Link>
                <div className='navPill'>
                        <Link
                            href='/#featured-work'
                            className={
                                pathname === "/" && activeSection === "featured-work"
                                    ? "navLink active"
                                    : "navLink"
                            }
                        >
                            Work
                        </Link>
                        <Link
                            className={isActive("/about") ? "navLink active" : "navLink"}
                            href='/about'
                        >
                            About
                        </Link>
                        <a
                            className='resumeButton'
                            href='/assets/kayla_luo_resume.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Resume
                            <span aria-hidden='true'>↗</span>
                        </a>
                    </div>
            </div>
        </nav>
    );
}
