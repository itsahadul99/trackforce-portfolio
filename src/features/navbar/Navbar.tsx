"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import trackforce_logo from "../../../public/trackforce_logo.png"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ logoUrl }: { logoUrl?: string }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const pathname = usePathname();
    const isCaseStudy = pathname?.startsWith("/case-study");
    const isPricing = pathname?.startsWith("/pricing") || pathname?.startsWith("/blog-details") || pathname?.startsWith("/documentation")

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const closeMobile = () => {
        setMobileOpen(false);
        setResourcesOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[999] text-white transition-colors duration-300 ${isCaseStudy
            ? "bg-[#DEEDFF] pb-4 px-4 sm:px-6 md:px-8"
            : isPricing
                ? "bg-transparent pb-4 px-4 sm:px-6 md:px-8"
                : scrolled || mobileOpen
                    ? "bg-[#000000b2]"
                    : "bg-transparent"
            }`}>
            <div className={`mx-auto flex max-w-[1300px] mx-auto items-center justify-between ${isCaseStudy || isPricing
                ? "w-full  mt-4 rounded-full bg-gradient-to-r from-[#1B3A8C] via-[#0F1B5C] to-black px-3 sm:px-5 lg:px-8 py-2 sm:py-3 shadow-lg"
                : "px-4 sm:px-6 lg:px-0 py-4"
                }`}>

                {/* Left - Logo */}
                <Link className="flex items-center gap-2 cursor-pointer shrink-0" href="/home" onClick={closeMobile}>
                    {logoUrl ? (
                        <img src={logoUrl} width={42} height={31} alt="Trackforce logo" className="w-8 h-6 sm:w-10 sm:h-7 lg:w-[42px] lg:h-[31px] object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                    ) : (
                        <Image src={trackforce_logo} width={42} height={31} alt="Trackforce logo" className="w-8 h-6 sm:w-10 sm:h-7 lg:w-[42px] lg:h-[31px]" />
                    )}
                    <span className="text-xl sm:text-2xl lg:text-3xl font-medium">TrackForce</span>
                </Link>

                {/* Middle (desktop) */}
                <ul className="hidden lg:flex items-center gap-8 text-lg text-white">
                    <li className="hover:text-gray-300 cursor-pointer"><Link href="/feature">Features</Link></li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link href="/pricing">Pricing</Link></li>
                    <li className="relative group cursor-pointer">
                        <span className="hover:text-gray-300 inline-flex items-center gap-1">
                            Resources
                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
                            <ul className="bg-[#2a2a2ac8] backdrop-blur-sm rounded-xl py-2 min-w-[180px] shadow-lg text-base">
                                <li className="px-5 py-2 hover:bg-white/10 text-white"><Link href="/portfolio" className="block">Portfolio</Link></li>
                                <li className="px-5 py-2 hover:bg-white/10 text-white"><Link href="/case-study" className="block">Full Case Study</Link></li>
                                <li className="px-5 py-2 hover:bg-white/10 text-white"><Link href="/documentation" className="block">Documentation</Link></li>
                                <li className="px-5 py-2 hover:bg-white/10 text-white"><Link href="/blog" className="block">Blog</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer"><Link href="/about">About Us</Link></li>
                </ul>

                {/* Right (desktop) */}
                <div className="hidden md:flex items-center gap-3 lg:gap-4">
                    <Link href={"/contact"} className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-xl border border-white text-sm lg:text-base text-white hover:text-gray-300 transition">
                        Let's Talk <FiPhone size={14} />
                    </Link>
                    <a href="https://app.trackforce.io/3/Professional/signup?trial=true" target="_blank" rel="noopener noreferrer" className="px-4 lg:px-5 py-2 lg:py-[11px] rounded-xl bg-white text-gray-700 text-sm font-semibold hover:bg-gray-200 transition">
                        Free Trial
                    </a>
                </div>

                {/* Hamburger (mobile/tablet) */}
                <button
                    type="button"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileOpen((v) => !v)}
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition"
                >
                    {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                </button>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out bg-[#000000ee] backdrop-blur-sm ${mobileOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col gap-1 px-4 sm:px-6 py-4 text-base">
                    <li>
                        <Link href="/feature" onClick={closeMobile} className="block px-3 py-3 rounded-lg hover:bg-white/10">Features</Link>
                    </li>
                    <li>
                        <Link href="/pricing" onClick={closeMobile} className="block px-3 py-3 rounded-lg hover:bg-white/10">Pricing</Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => setResourcesOpen((v) => !v)}
                            className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/10"
                        >
                            <span>Resources</span>
                            <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <ul className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${resourcesOpen ? "max-h-72" : "max-h-0"}`}>
                            <li><Link href="/portfolio" onClick={closeMobile} className="block pl-7 pr-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-200">Portfolio</Link></li>
                            <li><Link href="/case-study" onClick={closeMobile} className="block pl-7 pr-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-200">Full Case Study</Link></li>
                            <li><Link href="/documentation" onClick={closeMobile} className="block pl-7 pr-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-200">Documentation</Link></li>
                            <li><Link href="/blog" onClick={closeMobile} className="block pl-7 pr-3 py-2.5 rounded-lg hover:bg-white/10 text-gray-200">Blog</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/about" onClick={closeMobile} className="block px-3 py-3 rounded-lg hover:bg-white/10">About Us</Link>
                    </li>

                    {/* Mobile-only CTA buttons (visible on small screens where desktop CTAs are hidden) */}
                    <li className="md:hidden flex flex-col gap-3 pt-3 mt-2 border-t border-white/15">
                        <Link href={"/contact"} onClick={closeMobile} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white text-white">
                           Let's Talk <FiPhone size={14} />
                        </Link>
                        <a
                            href="https://app.trackforce.io/3/Professional/signup?trial=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-5 py-3 rounded-xl bg-white text-gray-700 font-semibold hover:bg-gray-200 transition"
                        >
                            Free Trial
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
