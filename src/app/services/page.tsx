'use client'

export default function Services() {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '100px' }}>

            {/* Hero Section */}
            <div style={{ backgroundColor: '#f8fafc', padding: '60px 40px 80px', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        Innovative Technology
                    </p>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#1b2a6d', lineHeight: 1.1, marginBottom: '20px' }}>
                        Precision Surveillance Programs.
                    </h1>
                    <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                        Explore our world-class surveillance solutions designed for any scale, from individual residences to global corporate infrastructures.
                    </p>
                </div>
            </div>

            {/* Services List */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 40px' }}>

                {/* Service 1 — Residential */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                    <div>
                        <img
                            src="/images/ai_tracking.png"
                            alt="Intelligent Home Monitoring"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div>
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Industries
                        </span>
                        <h2 style={{ fontSize: '34px', fontWeight: 900, color: '#1b2a6d', marginBottom: '24px', lineHeight: 1.2 }}>
                            Tailored & Scalable Solutions
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.8 }}>
                            Our customized surveillance solutions cater to a wide range of industries, providing tailored security options for diverse needs. From retail and hospitality to corporate and industrial sectors, our surveillance systems are designed to meet the unique requirements of each industry, ensuring optimal security and peace of mind.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: '#e5e7eb', marginBottom: '100px' }}></div>

                {/* Service 2 — Commercial */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                    <div style={{ order: 2 }}>
                        <img
                            src="/images/dashboard_intro.png"
                            alt="Global Security Ecosystems"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div style={{ order: 1 }}>
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Quality
                        </span>
                        <h2 style={{ fontSize: '34px', fontWeight: 900, color: '#1b2a6d', marginBottom: '24px', lineHeight: 1.2 }}>
                            Reliability & Durability
                        </h2>
                        <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.8 }}>
                            Reliability and durability are at the core of our surveillance solutions. Each QuantumSight system undergoes rigorous testing and quality assurance processes to guarantee top-notch performance and long-term reliability. We prioritize reliability to provide our clients with enduring security solutions.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: '#e5e7eb', marginBottom: '100px' }}></div>

                {/* Service 3 — Specialized */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <img
                            src="/images/drone_intro.png"
                            alt="Aerial & Thermal Surveillance"
                            style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                    <div>
                        <span style={{ display: 'inline-block', backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: 800, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '50px', marginBottom: '20px' }}>
                            Technology
                        </span>
                        <h2 style={{ fontSize: '34px', fontWeight: 900, color: '#1b2a6d', marginBottom: '20px', lineHeight: 1.2 }}>
                            Cutting-Edge Technology
                        </h2>
                        <p style={{ fontSize: '16px', color: '#6b7280', lineHeight: 1.7, marginBottom: '32px' }}>
                            Our surveillance systems are equipped with state-of-the-art technology, including advanced analytics, real-time monitoring, and AI-driven threat detection. This cutting-edge technology ensures precision, scalability, and proactive security measures, allowing businesses to stay ahead of potential threats and security challenges.
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
        </div>
    )
}
