'use client'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--primary-blue)', color: 'white', width: '100%', padding: '4rem 6% 3rem' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '3rem' }}>
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2 style={{ fontWeight: 800, lineHeight: 0.9, letterSpacing: '-2px' }} className="footer-logo">
                            Quantum<br />Sight
                        </h2>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                        <p style={{ color: 'var(--accent-blue)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.65rem', marginBottom: '1rem' }}>
                            Get in touch
                        </p>
                        <p style={{ fontWeight: 900, letterSpacing: '-1px', lineHeight: 1, marginBottom: '1.25rem' }} className="footer-phone">
                            +91 9730323315
                        </p>
                        <a
                            href="mailto:contactus@quantumsighttech.com"
                            style={{ fontSize: '0.875rem', opacity: 0.8, display: 'block', marginBottom: '2rem', fontStyle: 'italic', letterSpacing: '0.03em', color: 'white', textDecoration: 'none' }}
                        >
                            contactus@quantumsighttech.com
                        </a>
                        <div style={{ opacity: 0.8, fontSize: '0.875rem', fontWeight: 500 }}>
                            <p style={{ marginBottom: '0.5rem' }}>Vijaya Complex, Mannagudda,</p>
                            <p style={{ marginBottom: '1.5rem' }}>Mangalore-575003, Karnataka</p>
                            <p style={{ color: 'var(--accent-blue)', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>IN</p>
                        </div>
                    </div>

                    {/* Links & Legal */}
                    <div className="footer-links" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <a href="/accessibility" style={{ display: 'block', fontWeight: 700, fontSize: '1rem', color: 'white', textDecoration: 'none', marginBottom: '1.25rem' }}
                                className="footer-link">
                                Accessibility Statement
                            </a>
                            <a href="/privacy" style={{ display: 'block', fontWeight: 700, fontSize: '1rem', color: 'white', textDecoration: 'none', marginBottom: '1.25rem' }}
                                className="footer-link">
                                Privacy Policy
                            </a>
                        </div>
                        <div style={{ opacity: 0.4, marginTop: '3rem', letterSpacing: '0.2em', lineHeight: 1.8 }}>
                            <p style={{ fontSize: '0.65rem', marginBottom: '0.5rem' }}>© 2026 by QuantumSight. All rights reserved.</p>
                            <p style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.4em' }}>Powered and secured by QST Engineering</p>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr 1.2fr;
                    gap: 2rem;
                    align-items: start;
                }
                .footer-logo { font-size: 4rem; }
                .footer-phone { font-size: 2rem; }
                .footer-link:hover { color: var(--accent-blue) !important; }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .footer-contact,
                    .footer-links {
                        border-left: none !important;
                        padding-left: 0 !important;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-top: 2rem;
                    }
                    .footer-logo { font-size: 3rem; }
                    .footer-phone { font-size: 1.75rem; }
                    .footer-links {
                        gap: 2rem;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }
                    .footer-links {
                        grid-column: 1 / -1;
                        border-left: none !important;
                        padding-left: 0 !important;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-top: 2rem;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-end;
                    }
                    .footer-logo { font-size: 3.5rem; }
                }
            `}</style>
        </footer>
    )
}
