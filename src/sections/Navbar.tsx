"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { NAVBAR } from "../utils/data";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const smoothScrollTo = (targetTop: number, duration = 800) => {
        const startTop = window.scrollY;
        const distance = targetTop - startTop;
        const startTime = performance.now();

        const easeInOutQuint = (t: number) =>
            t < 0.5
                ? 16 * t * t * t * t * t
                : 1 - Math.pow(-2 * t + 2, 5) / 2;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutQuint(progress);

            window.scrollTo(0, startTop + distance * easedProgress);

            if (progress < 1) {
                window.requestAnimationFrame(animate);
            }
        };

        window.requestAnimationFrame(animate);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        // Initial check to set menu state based on screen size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleAnchorClick = (
        event: MouseEvent<HTMLAnchorElement>,
        sectionId: string,
        offset: number
    ) => {
        const targetElement = document.getElementById(sectionId);
        if (!targetElement) return;

        event.preventDefault();
        const top =
            targetElement.getBoundingClientRect().top + window.scrollY + offset;

        smoothScrollTo(top);
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };

    return (
        <nav className="container mx-auto sticky top-5 z-10">
            <div className="flex items-center justify-between rounded-full bg-white/50 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
                {/* Logo */}
                <Image
                    src="/logo-portfolio.webp"
                    alt={NAVBAR.logoAlt}
                    className="h-7 w-auto ml-6 -mb-1"
                    width={154}
                    height={28}
                />

                {/* Hamburger Icon (Visible only on small screens) */}
                <button
                    className="block md:hidden text-[#333] mr-6 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label={
                        isOpen
                            ? NAVBAR.menuButton.closeAriaLabel
                            : NAVBAR.menuButton.openAriaLabel
                    }
                    aria-expanded={isOpen}
                    aria-controls="main-navigation"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>

                {/* Navigation links */}
                <ul
                    id="main-navigation"
                    className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}
                >
                    {NAVBAR.menuLinks.map((link) => (
                        <li key={link.id} className="menu-item">
                            <Link
                                href={`/#${link.to}`}
                                className="menu-item"
                                onClick={(event) =>
                                    handleAnchorClick(
                                        event,
                                        link.to,
                                        link.offset
                                    )
                                }
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hire me button */}
                <Link
                    href={`/#${NAVBAR.hireMeTarget.to}`}
                    className="hidden md:flex items-center justify-center h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                    onClick={(event) =>
                        handleAnchorClick(
                            event,
                            NAVBAR.hireMeTarget.to,
                            NAVBAR.hireMeTarget.offset
                        )
                    }
                >
                    {NAVBAR.hireMeLabel}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
