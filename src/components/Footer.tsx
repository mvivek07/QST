'use client'

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--primary-blue)', color: 'white', width: '100%', padding: '4rem 6% 3rem' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '3rem' }}>
                <div className="footer-grid">

                    {/* Brand */}
                    <div className="footer-brand">
                        <h2 style={{ fontWeight: 800, lineHeight: 0.9, letterSpacing: '-2px' }} className="footer-logo">
                            QuantumSight<br />Technologies
                        </h2>
                    </div>

                    {/* Address */}
                    <div className="footer-address" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                        <div style={{ opacity: 0.8, fontSize: '0.875rem', fontWeight: 500 }}>
                            <p style={{ marginBottom: '0.5rem' }}>Vijaya Complex, Mannagudda,</p>
                            <p style={{ marginBottom: 0 }}>Mangalore-575003, Karnataka</p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="footer-links" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                        <div style={{ opacity: 0.4, letterSpacing: '0.2em', lineHeight: 1.8 }}>
                            <p style={{ fontSize: '0.65rem', marginBottom: 0 }}>© 2026 by QuantumSight Technologies. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr 1fr;
                    gap: 2rem;
                    align-items: end;
                }
                .footer-logo { font-size: 2.75rem; }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2.5rem;
                    }
                    .footer-address,
                    .footer-links {
                        border-left: none !important;
                        padding-left: 0 !important;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-top: 2rem;
                    }
                    .footer-logo { font-size: 2.25rem; }
                }
            `}</style>
        </footer>
    )
}
