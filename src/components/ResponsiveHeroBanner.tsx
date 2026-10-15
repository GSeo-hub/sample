"use client";

import React, { useState } from 'react';

export interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

export interface Partner {
    name?: string;
    logoUrl?: string;
    href: string;
}

export interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: string;
    titleLine2?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl = "https://cdn.21st.dev/assets/mirror/c4/c4d5f159140e3ccc35a8bd4f043453cb9e2692f700206e43855ff598c171b924.png",
    backgroundImageUrl = "https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Missions", href: "#" },
        { label: "Destinations", href: "#" },
        { label: "Technology", href: "#" },
        { label: "Book Flight", href: "#" }
    ],
    ctaButtonText = "Reserve Seat",
    ctaButtonHref = "#",
    badgeLabel = "New",
    badgeText = "First Commercial Flight to Mars 2026",
    title = "Journey Beyond Earth",
    titleLine2 = "Into the Cosmos",
    description = "Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable.",
    primaryButtonText = "Book Your Journey",
    primaryButtonHref = "#",
    secondaryButtonText = "Watch Launch",
    secondaryButtonHref = "#",
    partnersTitle = "Partnering with leading space agencies worldwide",
    partners = [
        { logoUrl: "https://cdn.21st.dev/assets/mirror/96/964eca0b0415aebc2718799b530b39d6f552b39634f3fb2072e769df17c6668f.png", href: "#" },
        { logoUrl: "https://cdn.21st.dev/assets/mirror/90/900ad16bdb8bd723836996d2283c47420e719ba8c9a4f7d24ff67e59056e88fe.png", href: "#" },
        { logoUrl: "https://cdn.21st.dev/assets/mirror/1b/1b66b155997cb81da3bdabeb8da22771b07f4ac5273d6a19d629c77cf75a861f.png", href: "#" },
        { logoUrl: "https://cdn.21st.dev/assets/mirror/cb/cb112906d9fa8a57380201b1385c5534075020542dab48d5f29f2e35a3e19bc1.png", href: "#" },
        { logoUrl: "https://cdn.21st.dev/assets/mirror/f6/f68e2933c2f24ef4b28fb81328350831eb56bf42244dee50e2b7f6efd7497783.png", href: "#" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col justify-between">
            {backgroundImageUrl && (
                <img
                    src={backgroundImageUrl}
                    alt=""
                    className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 -z-10"
                />
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30 -z-10" />

            {/* Header */}
            <header className="z-20 xl:top-4 relative w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between pt-6">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-center bg-no-repeat bg-contain w-[100px] h-[40px]"
                            style={{ backgroundImage: `url(${logoUrl})` }}
                            aria-label="Home"
                        />

                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1.5 ring-1 ring-white/10 backdrop-blur-md">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3.5 py-1.5 text-sm font-medium hover:text-white transition-colors ${
                                            link.isActive ? 'text-white' : 'text-white/70'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-100 transition-colors"
                                >
                                    {ctaButtonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </a>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-white"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile dropdown menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 p-4 rounded-2xl bg-black/80 ring-1 ring-white/10 backdrop-blur-lg flex flex-col gap-3 text-white">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium hover:text-white text-white/80"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={ctaButtonHref}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {ctaButtonText}
                            </a>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Main Content */}
            <div className="z-10 relative flex-1 flex flex-col justify-center">
                <div className="sm:pt-16 md:pt-20 lg:pt-24 max-w-7xl mx-auto px-6 pb-12 w-full">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 backdrop-blur">
                            <span className="inline-flex items-center text-xs font-semibold text-neutral-900 bg-white rounded-full py-0.5 px-2">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-white/90">
                                {badgeText}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-4xl text-white tracking-tight font-serif font-normal">
                            {title}
                            <br className="hidden sm:block" />
                            {titleLine2}
                        </h1>

                        {/* Description */}
                        <p className="sm:text-lg text-base text-white/75 max-w-2xl mt-6 mx-auto leading-relaxed">
                            {description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center">
                            <a
                                href={primaryButtonHref}
                                className="inline-flex items-center gap-2 hover:bg-white/20 text-sm font-medium text-white bg-white/10 ring-white/20 ring-1 rounded-full py-3.5 px-6 backdrop-blur transition-all"
                            >
                                {primaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                            >
                                {secondaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Partners Section */}
                    <div className="mx-auto mt-20 max-w-5xl">
                        <p className="text-xs sm:text-sm text-white/60 text-center tracking-wider uppercase font-medium">
                            {partnersTitle}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white/70 mt-8 items-center justify-items-center gap-8">
                            {partners.map((partner, index) => (
                                <a
                                    key={index}
                                    href={partner.href}
                                    className="inline-flex items-center justify-center bg-center bg-no-repeat bg-contain w-[110px] h-[34px] opacity-70 hover:opacity-100 transition-opacity"
                                    style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
