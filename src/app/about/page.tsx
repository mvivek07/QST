'use client'

export default function About() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '100px' }}>

            {/* Hero Section — Centered */}
            <div style={{ padding: '60px 40px 80px', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Our Mission
                </p>
                <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#1b2a6d', lineHeight: 1.1, marginBottom: '24px' }}>
                    Security for the Modern Era.
                </h1>
                <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto' }}>
                    QuantumSight was born out of a vision to bridge the gap between traditional surveillance and the limitless potential of AI-driven security. We don't just sell cameras; we build intelligent ecosystems that protect what matters most.
                </p>
            </div>

            {/* Engineering Section */}
            <div style={{ backgroundColor: '#f8fafc', padding: '80px 40px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <img
                            src="/images/security_room.png"
                            alt="Engineering Excellence"
                            style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#1b2a6d', marginBottom: '20px', lineHeight: 1.2 }}>
                            Engineering Excellence
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.8 }}>
                            Our team of engineers and security experts work tirelessly to develop hardware and software that can withstand the most demanding environments. From forensic-level imaging to real-time behavioral analytics, QuantumSight is at the forefront of the industry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div style={{ padding: '80px 40px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <p style={{ color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        Our Values
                    </p>
                    <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#1b2a6d', marginBottom: '56px', lineHeight: 1.1 }}>
                        The QuantumSight Standard
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        {[
                            {
                                icon: (
                                    <svg width="28" height="28" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: 'Unyielding Security',
                                desc: 'End-to-end encryption and multi-tier authentication for every data packet.',
                            },
                            {
                                icon: (
                                    <svg width="28" height="28" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                                title: 'AI Intelligence',
                                desc: 'Advanced neural networks that learn and adapt to your environment over time.',
                            },
                            {
                                icon: (
                                    <svg width="28" height="28" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Zero Latency',
                                desc: 'Proprietary compression delivering 4K streams with virtually no lag.',
                            },
                        ].map((val, i) => (
                            <div
                                key={i}
                                style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '40px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', transition: 'all 0.2s' }}
                            >
                                <div style={{ width: '56px', height: '56px', backgroundColor: '#eff6ff', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                    {val.icon}
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#1b2a6d', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {val.title}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: 1.7 }}>
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner */}
            <div style={{ backgroundColor: '#1b2a6d', padding: '80px 40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 900, color: 'white', marginBottom: '24px', fontStyle: 'italic' }}>
                    Ready to secure your future?
                </h2>
                <a
                    href="/contact"
                    style={{ display: 'inline-block', backgroundColor: 'white', color: '#1b2a6d', padding: '16px 40px', borderRadius: '12px', fontWeight: 800, fontSize: '16px', textDecoration: 'none' }}
                >
                    Work With Us
                </a>
            </div>
        </div>
    )
}
