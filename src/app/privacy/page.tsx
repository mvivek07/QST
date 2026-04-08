'use client'

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <div style={{ maxWidth: '860px', margin: '0 auto', padding: '8rem 2rem 6rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.3em', fontSize: '0.7rem', marginBottom: '1rem' }}>
                        Legal
                    </p>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary-blue)', lineHeight: 1.1, letterSpacing: '-1px' }}>
                        Privacy Policy
                    </h1>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>A legal disclaimer</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        The explanations and information provided on this page are only general and high-level
                        explanations and information on how to write your own document of a Privacy Policy.
                        You should not rely on this article as legal advice or as recommendations regarding
                        what you should actually do, because we cannot know in advance what are the specific
                        privacy policies you wish to establish between your business and your customers and
                        visitors. We recommend that you seek legal advice to help you understand and to assist
                        you in the creation of your own Privacy Policy.
                    </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>Privacy Policy — the basics</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem', marginBottom: '1.25rem' }}>
                        Having said that, a privacy policy is a statement that discloses some or all of the ways
                        a website collects, uses, discloses, processes, and manages the data of its visitors
                        and customers. It usually also includes a statement regarding the website's commitment
                        to protecting its visitors' or customers' privacy, and an explanation about the
                        different mechanisms the website is implementing in order to protect privacy.
                    </p>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        Different jurisdictions have different legal obligations of what must be included in
                        a Privacy Policy. You are responsible to make sure you are following the relevant
                        legislation to your activities and location.
                    </p>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '3rem' }} />

                {/* Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1rem' }}>What to include in the Privacy Policy</h2>
                    <p style={{ color: '#4b5563', lineHeight: 1.9, fontSize: '1rem' }}>
                        Generally speaking, a Privacy Policy often addresses these types of issues: the types
                        of information the website is collecting and the manner in which it collects the data;
                        an explanation about why is the website collecting these types of information; what
                        are the website's practices on sharing the information with third parties; ways in
                        which your visitors and customers can exercise their rights according to the relevant
                        privacy legislation; the specific practices regarding minors' data collection; and
                        much, much more.
                    </p>
                </div>

                {/* Footer note */}
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem', marginTop: '4rem' }}>
                    <p style={{ color: 'var(--accent-blue)', fontStyle: 'italic', fontWeight: 500, fontSize: '0.95rem' }}>
                        To learn more about this, check out our article &quot;Creating a Privacy Policy&quot;.
                    </p>
                </div>

            </div>
        </div>
    )
}
