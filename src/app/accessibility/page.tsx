'use client'

export default function AccessibilityStatement() {
    return (
        <div className="min-h-screen bg-white">
            <div style={{ maxWidth: '860px', margin: '0 auto', padding: '8rem 2rem 6rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.7rem', marginBottom: '1rem' }}>
                        Accessibility
                    </p>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary-blue)', lineHeight: 1.1, letterSpacing: '-1px' }}>
                        Surveillance Accessibility<br />Statement
                    </h1>
                </div>

                {/* Intro box */}
                <div style={{ background: '#f8f9fc', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '2rem 2.5rem', marginBottom: '3rem' }}>
                    <p style={{ color: 'var(--primary-blue)', fontWeight: 500, lineHeight: 1.8, fontSize: '1.05rem' }}>
                        At QuantumSight, we are committed to ensuring that our surveillance solutions
                        are accessible to all individuals, including those with disabilities. We strive
                        to make our website and surveillance products usable and enjoyable for everyone,
                        regardless of their abilities.
                    </p>
                </div>

                <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem', marginBottom: '3rem' }}>
                    This statement reflects our ongoing efforts to enhance the accessibility of our
                    surveillance solutions. We are dedicated to making our products and services
                    accessible to individuals with disabilities, and we continually work to improve
                    the user experience for all customers.
                </p>

                {/* Divider */}
                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>What surveillance accessibility means</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        Surveillance accessibility ensures that individuals with disabilities can use our
                        products with the same ease and enjoyment as other users. We aim to achieve this
                        by implementing features that align with the capabilities of assistive
                        technologies and adhere to accessibility standards.
                    </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>Our commitment to surveillance accessibility</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.25rem' }}>
                        QuantumSight has implemented accessibility features in accordance with industry
                        standards and best practices. Our surveillance solutions are designed to be
                        compatible with assistive technologies, providing functionalities such as
                        screen reader support, keyboard navigation, and customizable display settings.
                        Additionally, our products are optimized for color contrast, reduced motion,
                        and multimedia accessibility.
                    </p>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        We have taken specific measures to enhance surveillance accessibility, including
                        the use of advanced metadata-based search features, natural language interaction
                        capabilities, and compatibility with messaging apps like WhatsApp to facilitate
                        user engagement with surveillance footage.
                    </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>Declaration of partial compliance</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        QuantumSight acknowledges that certain surveillance features may depend on
                        third-party content. In such cases, we are dedicated to achieving partial
                        compliance with accessibility standards to ensure a seamless user experience
                        across our entire range of surveillance solutions.
                    </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>Accessibility in our organization</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        QuantumSight is committed to ensuring accessibility not only in our digital
                        offerings but also within our physical facilities. Our offices and branches
                        are designed to accommodate individuals with disabilities, and we provide
                        additional accessibility arrangements to support customers in accessing our
                        surveillance services.
                    </p>
                </div>

                {/* CTA Box */}
                <div style={{ background: 'var(--primary-blue)', color: 'white', borderRadius: '1.5rem', padding: '2.5rem 3rem', marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem' }}>Assistance and feedback</h2>
                    <p style={{ opacity: 0.85, lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.75rem' }}>
                        If you have any accessibility related concerns, require assistance in using
                        our surveillance solutions, or wish to provide feedback on accessibility
                        features, please contact our accessibility coordinator:
                    </p>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 2 }}>
                        <p>[Name of the accessibility coordinator]</p>
                        <p>[Telephone number of the accessibility coordinator]</p>
                        <p>[Email address of the accessibility coordinator]</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
