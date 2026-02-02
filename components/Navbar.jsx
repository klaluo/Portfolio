"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (href) => pathname === href;

    return (
        <nav className='nav'>
            <div className='container'>
                <div className='navPill'>
                    <div className='navLeft'>
                        <Link className='navIconButton' href='/' aria-label='Home'>
                            <Image
                                src='/images/logo.png'
                                alt='Logo'
                                width={36}
                                height={36}
                            />
                        </Link>
                        <ul className='navLinks'>
                            <li>
                                <Link href='/#featured-work'>Work</Link>
                            </li>
                            <li>
                                <Link className={isActive("/about") ? "active" : ""} href='/about'>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='navControls'>
                        <button className='themeToggle' type='button' aria-label='Toggle theme'>
                            <svg viewBox='0 0 24 24' aria-hidden='true'>
                                <path d='M12 3a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm8-5a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H19a1 1 0 0 1 1 1zM6.5 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1zm10.3-5.3a1 1 0 0 1 0-1.4l1.1-1.1a1 1 0 1 1 1.4 1.4l-1.1 1.1a1 1 0 0 1-1.4 0zM5.8 18.2a1 1 0 0 1 0-1.4l1.1-1.1a1 1 0 0 1 1.4 1.4l-1.1 1.1a1 1 0 0 1-1.4 0zm12.5 0a1 1 0 0 1-1.4 0l-1.1-1.1a1 1 0 1 1 1.4-1.4l1.1 1.1a1 1 0 0 1 0 1.4zM7.2 6.1a1 1 0 0 1-1.4 0L4.7 5a1 1 0 1 1 1.4-1.4l1.1 1.1a1 1 0 0 1 0 1.4zM12 19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1z' />
                            </svg>
                        </button>
                        <Link className='resumeButton' href='/resume'>
                            Resume
                            <span aria-hidden='true'>↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
