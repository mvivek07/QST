'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
    const pathname = usePathname()
    const showTopLine = pathname === '/'

    return (
        <footer style={{ backgroundColor: 'var(--primary-blue)', color: 'white', width: '100%', padding: '4rem 6% 3rem' }}>
            <div style={{
                borderTop: showTopLine ? '1px solid rgba(255,255,255,0.15)' : 'none',
                paddingTop: showTopLine ? '3rem' : 0,
            }}>
                <div className="footer-grid">

                    <div className="footer-brand">
                        <h2 className="footer-logo">
                            QuantumSight<br />Technologies
                        </h2>
                    </div>

                    <div className="footer-address footer-text">
                        <p>Vijaya Complex, Mannagudda,</p>
                        <p>Mangalore-575003, Karnataka</p>
                    </div>

                    <div className="footer-copyright footer-text">
                        <p>© 2026 by QuantumSight Technologies.</p>
                        <p>All rights reserved.</p>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: start;
                    gap: 3rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-brand,
                .footer-address,
                .footer-copyright {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                }

                .footer-logo {
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -2px;
                    font-size: 2.75rem;
                    margin: 0;
                    padding: 0;
                }

                .footer-text {
                    font-size: 0.875rem;
                    font-weight: 500;
                    line-height: 1.7;
                    opacity: 0.85;
                }

                .footer-text p {
                    margin: 0;
                }

                .footer-address {
                    border-left: 1px solid rgba(255,255,255,0.15);
                    padding-left: 3rem;
                }

                .footer-copyright {
                    border-left: 1px solid rgba(255,255,255,0.15);
                    padding-left: 3rem;
                }

                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .footer-logo {
                        font-size: 2.25rem;
                    }

                    .footer-address,
                    .footer-copyright {
                        border-left: none;
                        padding-left: 0;
                        border-top: 1px solid rgba(255,255,255,0.1);
                        padding-top: 2rem;
                        min-height: auto;
                    }
                }
            `}</style>
        </footer>
    )
}
