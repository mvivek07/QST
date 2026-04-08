'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isLinkActive = (path: string) => pathname === path

    return (
        <header className={`transition-all duration-300 fixed top-0 w-full z-50 px-[5%] flex items-center justify-between ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="logo">
                <Link href="/">
                    <img src="/images/logo.png" alt="QuantumSight Logo" className="h-10 md:h-12" />
                </Link>
            </div>
            <nav className="hidden md:block">
                <ul className="flex gap-12">
                    <li>
                        <Link href="/" className={`font-semibold text-lg transition duration-300 hover:text-[var(--accent-blue)] ${isLinkActive('/') ? 'text-[var(--accent-blue)]' : 'text-[var(--primary-blue)]'}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={`font-semibold text-lg transition duration-300 hover:text-[var(--accent-blue)] ${isLinkActive('/about') ? 'text-[var(--accent-blue)]' : 'text-[var(--primary-blue)]'}`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={`font-semibold text-lg transition duration-300 hover:text-[var(--accent-blue)] ${isLinkActive('/services') ? 'text-[var(--accent-blue)]' : 'text-[var(--primary-blue)]'}`}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={`font-semibold text-lg transition duration-300 hover:text-[var(--accent-blue)] ${isLinkActive('/contact') ? 'text-[var(--accent-blue)]' : 'text-[var(--primary-blue)]'}`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Link href="/contact" className="auth-btn px-8 py-3 rounded-full bg-[var(--primary-blue)] text-white font-bold hover:opacity-90 transition">
                    Get Started
                </Link>
            </div>
        </header>
    )
}
