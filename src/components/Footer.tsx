'use client'

export default function Footer() {
    return (
        <footer className="footer bg-[var(--primary-blue)] text-white w-full" style={{ paddingTop: '5rem', paddingBottom: '4rem', paddingLeft: '6%', paddingRight: '6%' }}>
            <div className="w-full border-t border-white/20" style={{ paddingTop: '3.5rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-12 items-start" style={{ gap: '3rem' }}>

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <h2 className="font-bold tracking-tighter" style={{ fontSize: '4.5rem', lineHeight: '0.9' }}>
                            Quantum<br />Sight
                        </h2>
                    </div>

                    {/* Contact Info Column */}
                    <div className="md:col-span-4 md:border-l md:border-white/10" style={{ paddingLeft: '3rem' }}>
                        {/* Label */}
                        <p className="font-black uppercase text-[var(--accent-blue)]" style={{ fontSize: '0.65rem', letterSpacing: '0.4em', marginBottom: '1rem' }}>Get in touch</p>

                        {/* Phone */}
                        <p className="font-black tracking-tighter" style={{ fontSize: '2.5rem', lineHeight: 1, marginBottom: '1.25rem' }}>+91 9730323315</p>

                        {/* Email */}
                        <a
                            href="mailto:contactus@quantumsighttech.com"
                            className="italic hover:text-[var(--accent-blue)] transition"
                            style={{ fontSize: '0.875rem', opacity: 0.8, display: 'block', marginBottom: '2rem', letterSpacing: '0.03em' }}
                        >
                            contactus@quantumsighttech.com
                        </a>

                        {/* Address */}
                        <div style={{ opacity: 0.8, fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                            <p style={{ marginBottom: '0.6rem' }}>Vijaya Complex, Mannagudda,</p>
                            <p style={{ marginBottom: '1.75rem' }}>Mangalore-575003, Karnataka</p>
                            <p className="text-[var(--accent-blue)] font-black uppercase" style={{ fontSize: '1.5rem', letterSpacing: '0.15em' }}>INDIA</p>
                        </div>
                    </div>

                    {/* Links & Legal Column */}
                    <div className="md:col-span-4 md:border-l md:border-white/10 flex flex-col justify-between h-full" style={{ paddingLeft: '3rem' }}>
                        {/* Nav Links */}
                        <div>
                            <a
                                href="/accessibility"
                                className="block font-bold hover:text-[var(--accent-blue)] transition-colors"
                                style={{ fontSize: '1rem', marginBottom: '1.25rem' }}
                            >
                                Accessibility Statement
                            </a>
                            <a
                                href="/privacy"
                                className="block font-bold hover:text-[var(--accent-blue)] transition-colors"
                                style={{ fontSize: '1rem', marginBottom: '1.25rem' }}
                            >
                                Privacy Policy
                            </a>
                        </div>

                        {/* Legal */}
                        <div style={{ opacity: 0.4, marginTop: '4rem', letterSpacing: '0.2em', lineHeight: 1.8 }}>
                            <p style={{ fontSize: '0.65rem', marginBottom: '0.6rem' }}>© 2026 by QuantumSight. All rights reserved.</p>
                            <p className="uppercase font-black" style={{ fontSize: '0.65rem', letterSpacing: '0.4em' }}>Powered and secured by QST Engineering</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
