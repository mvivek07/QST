'use client'

export default function Products() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '80px' }}>

            {/* Hero */}
            <div style={{ backgroundColor: '#f8fafc', padding: '60px 6% 80px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        Innovative Technology
                    </p>
                    <h1 style={{ fontWeight: 900, color: '#1b2a6d', lineHeight: 1.1, marginBottom: '20px' }} className="svc-h1">
                        Precision Surveillance Products
                    </h1>
                    <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        Explore our world-class surveillance solutions designed for any scale, from individual residences to global corporate infrastructures.
                    </p>
                </div>
            </div>

            {/* Services */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 6%' }}>

                {/* Service 1 */}
                <div className="rg-2" style={{ marginBottom: '80px' }}>
                    <div>
                        <img
                            src="/images/ai_tracking.png"
                            alt="Tailored Solutions"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div>
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Industries
                        </span>
                        <h2 style={{ fontWeight: 900, color: '#1b2a6d', marginBottom: '24px', lineHeight: 1.2 }} className="svc-h2">
                            Tailored &amp; Scalable Solutions
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.8 }}>
                            Our customized surveillance solutions cater to a wide range of industries, providing tailored security options for diverse needs. From retail and hospitality to corporate and industrial sectors, our surveillance systems are designed to meet the unique requirements of each industry.
                        </p>
                    </div>
                </div>

                <div style={{ height: '1px', backgroundColor: '#e5e7eb', marginBottom: '80px' }} />

                {/* Service 2 */}
                <div className="rg-2" style={{ marginBottom: '80px' }}>
                    <div className="svc-img-right">
                        <img
                            src="/images/dashboard_intro.png"
                            alt="Reliability"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div className="svc-text-left">
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Quality
                        </span>
                        <h2 style={{ fontWeight: 900, color: '#1b2a6d', marginBottom: '24px', lineHeight: 1.2 }} className="svc-h2">
                            Reliable and Durable
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.8 }}>
                            Reliable and Durable are at the core of our surveillance solutions. Each QuantumSight Technologies system undergoes rigorous testing and quality assurance processes to guarantee top-notch performance and long-term reliability.
                        </p>
                    </div>
                </div>

                <div style={{ height: '1px', backgroundColor: '#e5e7eb', marginBottom: '80px' }} />

                {/* Service 3 */}
                <div className="rg-2">
                    <div>
                        <img
                            src="/images/drone_intro.png"
                            alt="Cutting Edge"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div>
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Technology
                        </span>
                        <h2 style={{ fontWeight: 900, color: '#1b2a6d', marginBottom: '20px', lineHeight: 1.2 }} className="svc-h2">
                            Cutting-Edge Technology
                        </h2>
                        <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.7, marginBottom: '32px' }}>
                            Our surveillance systems are equipped with state-of-the-art technology, including advanced analytics, real-time monitoring, and AI-driven threat detection for proactive security.
                        </p>
                        <a
                            href="/contact"
                            style={{ display: 'inline-block', backgroundColor: '#1b2a6d', color: 'white', padding: '16px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '15px', textDecoration: 'none' }}
                        >
                            Request Consultation
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .svc-h1 { font-size: 48px; }
                .svc-h2 { font-size: 34px; }
                .svc-img-right { order: 2; }
                .svc-text-left { order: 1; }
                @media (max-width: 768px) {
                    .svc-h1 { font-size: 28px; }
                    .svc-h2 { font-size: 24px; }
                    .svc-img-right { order: unset; }
                    .svc-text-left { order: unset; }
                }
            `}</style>
        </div>
    )
}
