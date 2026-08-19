'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()

    useEffect(() => { setMounted(true) }, [])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => { setMenuOpen(false) }, [pathname])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const isActive = (path: string) => pathname === path

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <header
                style={{
                    position: 'fixed', top: 0, width: '100%', zIndex: 50,
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.9rem 5%',
                    backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.97)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s',
                }}
            >
                {/* Logo */}
                <div style={{ zIndex: 60 }}>
                    <Link href="/">
                        <img src="/images/logo.png" alt="QuantumSight Technologies" style={{ height: '60px', width: 'auto', display: 'block' }} />
                    </Link>
                </div>

                {/* Desktop Nav — hidden on mobile */}
                <nav className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    style={{
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: isActive(link.href) ? 'var(--accent-blue)' : 'var(--primary-blue)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                        borderBottom: isActive(link.href) ? '2px solid var(--accent-blue)' : '2px solid transparent',
                                        paddingBottom: '2px',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA — hidden on mobile */}
                <div className="desktop-cta">
                    <Link
                        href="/contact"
                        style={{
                            backgroundColor: 'var(--primary-blue)',
                            color: 'white',
                            padding: '0.65rem 1.75rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Hamburger — mobile only; render after mount to avoid extension-injected attrs */}
                {mounted ? (
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: '8px', zIndex: 60,
                            display: 'flex', flexDirection: 'column', gap: '5px',
                        }}
                    >
                        <span style={{
                            display: 'block', width: '24px', height: '2px',
                            backgroundColor: menuOpen ? 'white' : 'var(--primary-blue)',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <span style={{
                            display: 'block', width: '24px', height: '2px',
                            backgroundColor: menuOpen ? 'white' : 'var(--primary-blue)',
                            transition: 'all 0.3s',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', width: '24px', height: '2px',
                            backgroundColor: menuOpen ? 'white' : 'var(--primary-blue)',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                ) : (
                    <div
                        className="hamburger"
                        aria-hidden="true"
                        style={{
                            padding: '8px', zIndex: 60,
                            display: 'flex', flexDirection: 'column', gap: '5px',
                        }}
                    >
                        <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'var(--primary-blue)' }} />
                        <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'var(--primary-blue)' }} />
                        <span style={{ display: 'block', width: '24px', height: '2px', backgroundColor: 'var(--primary-blue)' }} />
                    </div>
                )}
            </header>

            {/* Mobile full-screen overlay */}
            <div
                className="mobile-overlay"
                style={{
                    position: 'fixed', inset: 0,
                    backgroundColor: 'var(--primary-blue)',
                    zIndex: 40,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: '2rem',
                    transition: 'opacity 0.3s, transform 0.3s',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    pointerEvents: menuOpen ? 'all' : 'none',
                }}
            >
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: isActive(link.href) ? '#93c5fd' : 'white',
                            fontSize: '2rem', fontWeight: 800,
                            textDecoration: 'none', letterSpacing: '-0.5px',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    style={{
                        marginTop: '1rem',
                        backgroundColor: 'white', color: 'var(--primary-blue)',
                        padding: '1rem 3rem', borderRadius: '50px',
                        fontWeight: 800, fontSize: '1rem', textDecoration: 'none',
                    }}
                >
                    Get Started
                </Link>
            </div>

            <style jsx>{`
                /* Desktop: show nav + CTA, hide hamburger */
                .desktop-nav  { display: flex; }
                .desktop-cta  { display: block; }
                .hamburger    { display: none !important; }
                .mobile-overlay { display: flex; }

                /* Mobile (≤768px): hide nav + CTA, show hamburger */
                @media (max-width: 768px) {
                    .desktop-nav  { display: none !important; }
                    .desktop-cta  { display: none !important; }
                    .hamburger    { display: flex !important; }
                }
            `}</style>
        </>
    )
}
