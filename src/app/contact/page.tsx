'use client'

import { useContactForm } from '@/hooks/useContactForm'

export default function Contact() {
    const { handleSubmit, handlePhoneInputChange, isSubmitting, error } = useContactForm()

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 6%' }}>

                {/* Title */}
                <div style={{ marginBottom: '56px', textAlign: 'center' }}>
                    <p style={{ color: '#2563eb', fontWeight: 800, fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
                        Contact Us
                    </p>
                    <h1 style={{ fontWeight: 900, color: '#1b2a6d', lineHeight: 1.1, marginBottom: '16px' }} className="contact-h1">
                        Let&#39;s Work Together
                    </h1>
                    <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '600px', lineHeight: 1.7, margin: '0 auto' }}>
                        Get in touch with us for any inquiries or assistance regarding our surveillance equipment products and services.
                    </p>
                </div>

                {/* Two Column */}
                <div className="contact-layout">

                    {/* Contact Details */}
                    <div>
                        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
                            <div style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid #f3f4f6' }}>
                                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '12px' }}>Our Office</p>
                                <p style={{ fontSize: '17px', fontWeight: 700, color: '#1b2a6d', lineHeight: 1.6 }}>Vijaya Complex, Mannagudda,</p>
                                <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.6 }}>Mangalore - 575003</p>
                                <p style={{ fontSize: '17px', color: '#6b7280', lineHeight: 1.6 }}>Karnataka, India</p>
                            </div>
                            <div style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid #f3f4f6' }}>
                                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '12px' }}>Phone</p>
                                <p style={{ fontSize: '22px', fontWeight: 900, color: '#1b2a6d' }}>+91 9730323315</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '12px' }}>Email</p>
                                <p style={{ fontSize: '16px', fontWeight: 700, color: '#2563eb' }}>contactus@quantumsighttech.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '48px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
                        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#1b2a6d', marginBottom: '36px' }}>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="rg-form" style={{ marginBottom: '24px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>First Name</label>
                                    <input name="firstName" type="text" placeholder="John" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e5e7eb', fontSize: '15px', color: '#1b2a6d', backgroundColor: '#f9fafb', outline: 'none', fontWeight: 600 }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Last Name</label>
                                    <input name="lastName" type="text" placeholder="Doe" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e5e7eb', fontSize: '15px', color: '#1b2a6d', backgroundColor: '#f9fafb', outline: 'none', fontWeight: 600 }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Work Email</label>
                                <input name="email" type="email" placeholder="john@company.com" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="Please enter a valid email with @" required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e5e7eb', fontSize: '15px', color: '#1b2a6d', backgroundColor: '#f9fafb', outline: 'none', fontWeight: 600 }} />
                            </div>
                            <div style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Phone Number</label>
                                <input name="phone" type="tel" inputMode="numeric" placeholder="9730323315" pattern="[0-9]{10,15}" title="Enter 10-15 digits only" minLength={10} maxLength={15} onInput={handlePhoneInputChange} required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e5e7eb', fontSize: '15px', color: '#1b2a6d', backgroundColor: '#f9fafb', outline: 'none', fontWeight: 600 }} />
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '8px' }}>Message</label>
                                <textarea name="message" placeholder="Tell us about your project requirements..." minLength={10} required style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e5e7eb', fontSize: '15px', color: '#1b2a6d', backgroundColor: '#f9fafb', outline: 'none', fontWeight: 600, minHeight: '140px', resize: 'vertical' }} />
                            </div>
                            {error && <p style={{ color: '#dc2626', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>{error}</p>}
                            <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '18px', backgroundColor: '#1b2a6d', color: 'white', borderRadius: '12px', fontSize: '16px', fontWeight: 800, border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', letterSpacing: '1px', opacity: isSubmitting ? 0.6 : 1 }}>
                                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                            </button>
                            <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '16px' }}>We typically respond within 2–4 business hours.</p>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-h1 { font-size: 52px; }
                .contact-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr;
                    gap: 60px;
                    align-items: start;
                }
                @media (max-width: 768px) {
                    .contact-h1 { font-size: 32px; }
                    .contact-layout {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }
                }
                @media (min-width: 769px) and (max-width: 1024px) {
                    .contact-layout {
                        grid-template-columns: 1fr;
                        gap: 36px;
                    }
                }
            `}</style>
        </div>
    )
}
