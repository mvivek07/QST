'use client'

import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            // Fade-in animation logic
            const sections = document.querySelectorAll<HTMLElement>('section')
            sections.forEach(section => {
                const rect = section.getBoundingClientRect()
                if (rect.top < window.innerHeight * 0.8) {
                    section.style.opacity = '1'
                    section.style.transform = 'translateY(0)'
                }
            })
        }

        // Initialize sections
        const sections = document.querySelectorAll<HTMLElement>('section')
        sections.forEach(section => {
            section.style.opacity = '0'
            section.style.transform = 'translateY(20px)'
            section.style.transition = 'all 0.6s ease-out'
        })

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Trigger once on load

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thank you for contacting QuantumSight. We will get back to you shortly.')
            ; (e.target as HTMLFormElement).reset()
    }

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-fixed bg-center"
                    style={{
                        backgroundImage: "url('/images/hero_live.png')",
                    }}
                ></div>
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-white/70"></div>

                <div className="relative z-10 text-center">
                    <h1 className="hero-h1">EMPOWER YOUR SURVEILLANCE</h1>
                    <p className="hero-p !text-[var(--primary-blue)] !opacity-80">Experience the power of AI-driven surveillance solutions, designed for precision and reliability.</p>
                    <div className="mt-12">
                        <a href="#contact" className="contact-btn !bg-[var(--primary-blue)] !text-white">Contact Us</a>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="intro">
                <div className="intro-content flex-1 text-left">
                    <h2 className="text-5xl font-bold leading-tight mb-8 text-[var(--primary-blue)]">Redefining Security, Redefining Possibilities</h2>
                    <p className="text-xl text-gray-600 mb-14 max-w-2xl leading-relaxed">
                        QuantumSight is a surveillance solutions provider dedicated to leading the surveillance security systems for both residential and corporate needs. We specialize in developing the latest surveillance technology that redefines the standards of security, delivering unparalleled precision and reliability.
                    </p>
                    <a href="/about" className="read-more" style={{ marginTop: '2.5rem', display: 'inline-block' }}>Read More</a>
                </div>
                <div className="intro-images flex-1 max-w-xl">
                    <img src="/images/drone_intro.png" alt="Drone Surveillance" className="rounded-lg shadow-xl w-full h-auto" />
                    <img src="/images/dashboard_intro.png" alt="Dashboard" className="rounded-lg shadow-xl w-full h-auto" />
                </div>
            </section>

            {/* Solutions */}
            <section className="solutions">
                <h2 className="text-5xl font-bold mb-6 text-white text-center">Advanced Surveillance Solutions for Every Need</h2>
                <div className="flex w-full justify-center px-4 mb-16">
                    <p className="max-w-4xl text-center text-xl leading-relaxed text-white opacity-90 text-balance">
                        Our surveillance systems are designed to provide robust and reliable security for your home and business, ensuring a consistent and secure experience regardless of the complexity.
                    </p>
                </div>

                <div className="solutions-grid">
                    <div className="solution-card group cursor-pointer text-white">
                        <div className="overflow-hidden" style={{ marginBottom: '2.5rem' }}>
                            <img src="/images/security_room.png" alt="Customized Systems" className="group-hover:scale-105 transition duration-500" />
                        </div>
                        <p className="text-sm font-semibold uppercase opacity-80 mb-5">Customizable</p>
                        <h3 className="text-3xl font-bold mb-6">Customizable Systems</h3>
                        <p className="opacity-90 leading-relaxed text-center px-4">
                            Tailored for specific business requirements, our Customizable Systems offer advanced features and flexible configurations, providing businesses with personalized surveillance solutions that align with their unique security needs.
                        </p>
                    </div>
                    <div className="solution-card group cursor-pointer text-white">
                        <div className="overflow-hidden" style={{ marginBottom: '2.5rem' }}>
                            <img src="/images/cctv_cameras.png" alt="Affordable Options" className="group-hover:scale-105 transition duration-500" />
                        </div>
                        <p className="text-sm font-semibold uppercase opacity-80 mb-5">Affordable</p>
                        <h3 className="text-3xl font-bold mb-6">Affordable Options</h3>
                        <p className="opacity-90 leading-relaxed text-center px-4">
                            Our Affordable Options are designed to deliver high-quality surveillance at a reasonable cost, making advanced security technology accessible for small and medium-sized enterprises. These solutions are perfect for businesses looking to enhance their security measures without breaking the bank.
                        </p>
                    </div>
                    <div className="solution-card group cursor-pointer text-white">
                        <div className="overflow-hidden" style={{ marginBottom: '2.5rem' }}>
                            <img src="/images/drone_greenhouse.png" alt="Plug and Play" className="group-hover:scale-105 transition duration-500" />
                        </div>
                        <p className="text-sm font-semibold uppercase opacity-80 mb-5">Easy Integration</p>
                        <h3 className="text-3xl font-bold mb-6">Plug and Play</h3>
                        <p className="opacity-90 leading-relaxed text-center px-4">
                            The Seamless Integration series is perfect for businesses seeking effortless deployment and integration. With minimal setup and maintenance requirements, these systems offer a hassle-free experience, allowing businesses to focus on their operations while benefiting from advanced security measures.
                        </p>
                    </div>
                </div>

                <div className="text-center" style={{ paddingTop: '5rem' }}>
                    <a href="/services" className="learn-more-btn">Learn More</a>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us min-h-screen flex flex-col justify-center items-center px-6">

                <h2 className="text-5xl font-bold text-center mb-12 text-[var(--primary-blue)]">
                    Why Choose Our Surveillance Solutions?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 w-full" style={{ gap: '2.5rem', maxWidth: '1600px' }}>

                    {/* Card 1 */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 h-full" style={{ padding: '2.5rem' }}>

                        {/* Image */}
                        <div className="overflow-hidden rounded-3xl w-full" style={{ height: '22rem', marginBottom: '3rem' }}>
                            <img src="/images/ai_tracking.png" alt="AI Tracking" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Content */}
                        <h4 className="text-[var(--accent-blue)] font-black uppercase tracking-widest text-xs mb-5">
                            Security Solutions
                        </h4>

                        <h3 className="text-3xl font-bold text-[var(--primary-blue)] mb-6 leading-snug">
                            Advanced AI Monitoring
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-base px-4 mt-3">
                            Our customized solutions provide high-end security and ease of use with real-time monitoring and automated alerts.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 h-full" style={{ padding: '2.5rem' }}>

                        <div className="overflow-hidden rounded-3xl w-full" style={{ height: '22rem', marginBottom: '3rem' }}>
                            <img src="/images/drone_greenhouse.png" alt="Greenhouse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        <h4 className="text-[var(--accent-blue)] font-black uppercase tracking-widest text-xs mb-5">
                            Cutting Edge Technology
                        </h4>

                        <h3 className="text-3xl font-bold text-[var(--primary-blue)] mb-6 leading-snug">
                            Greenhouse Monitoring
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-base px-4 mt-3">
                            Specialized drone technology deployed for large-scale agricultural monitoring to stay ahead of potential threats.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 h-full" style={{ padding: '2.5rem' }}>

                        <div className="overflow-hidden rounded-3xl w-full" style={{ height: '22rem', marginBottom: '3rem' }}>
                            <img src="/images/monitor_closeup.png" alt="Analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        <h4 className="text-[var(--accent-blue)] font-black uppercase tracking-widest text-xs mb-5">
                            Reliable & Quality
                        </h4>

                        <h3 className="text-3xl font-bold text-[var(--primary-blue)] mb-6 leading-snug">
                            High-Resolution Analytics
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-base px-4 mt-3">
                            All systems undergo rigorous testing and quality assurance to guarantee top-tier performance and reliability.
                        </p>
                    </div>

                </div>

                {/* Bigger Button with more spacing */}
                <div className="flex justify-center" style={{ marginTop: '5rem' }}>
                    <a
                        href="/services"
                        className="!px-24 !py-8 bg-[var(--primary-blue)] text-white rounded-full font-bold text-2xl hover:bg-[var(--accent-blue)] transition-all transform hover:-translate-y-2 shadow-2xl hover:shadow-[0_25px_50px_rgba(37,99,235,0.35)]"
                    >
                        Learn More
                    </a>
                </div>

            </section>
            {/* Contact Home Section */}
            <section id="contact" className="contact py-32 bg-[var(--primary-blue)] text-white">
                <div className="flex-1">
                    <h2 className="text-6xl font-bold mb-8">Contact Us</h2>
                    <p className="text-xl opacity-90 max-w-md">Get in touch with us for any inquiries or assistance regarding our surveillance equipment products and services. We are here to help you with your security needs.</p>
                </div>
                <div className="contact-form-container !max-w-[850px] !p-10 !md:p-16">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="form-group mb-0">
                                <label className="block text-xs font-black uppercase tracking-[0.2em] text-[#1b2a6d] mb-2 ml-1">First Name</label>
                                <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-100 text-[#1b2a6d] placeholder-gray-400 p-4 rounded-xl focus:bg-white focus:border-[#2563eb] outline-none transition text-sm" required />
                            </div>
                            <div className="form-group mb-0">
                                <label className="block text-xs font-black uppercase tracking-[0.2em] text-[#1b2a6d] mb-2 ml-1">Last Name</label>
                                <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-100 text-[#1b2a6d] placeholder-gray-400 p-4 rounded-xl focus:bg-white focus:border-[#2563eb] outline-none transition text-sm" required />
                            </div>
                        </div>
                        <div className="form-group mb-0">
                            <label className="block text-xs font-black uppercase tracking-[0.2em] text-[#1b2a6d] mb-2 ml-1">Work Email</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-100 text-[#1b2a6d] placeholder-gray-400 p-4 rounded-xl focus:bg-white focus:border-[#2563eb] outline-none transition text-sm" required />
                        </div>
                        <div className="form-group mb-0">
                            <label className="block text-xs font-black uppercase tracking-[0.2em] text-[#1b2a6d] mb-2 ml-1">Phone Number</label>
                            <input type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 border border-gray-100 text-[#1b2a6d] placeholder-gray-400 p-4 rounded-xl focus:bg-white focus:border-[#2563eb] outline-none transition text-sm" />
                        </div>
                        <div className="form-group mb-0">
                            <label className="block text-xs font-black uppercase tracking-[0.2em] text-[#1b2a6d] mb-2 ml-1">Message</label>
                            <textarea
                                placeholder="Tell us about your project requirements..."
                                className="w-full p-6 border border-gray-100 rounded-2xl bg-gray-50 text-[#1b2a6d] placeholder-gray-400 focus:bg-white focus:border-[#2563eb] transition duration-300 min-h-[160px] outline-none text-sm font-medium"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn bg-[#1b2a6d] text-white hover:bg-[#2563eb] transition w-full py-5 rounded-xl font-black text-xl shadow-2xl transform hover:-translate-y-1 tracking-tight">Send Message</button>
                    </form>
                </div>
            </section>

            <style jsx>{`
                .hero-h1 { 
                    max-width: 1200px;
                    font-size: 6rem; 
                    text-transform: uppercase; 
                    letter-spacing: -2px; 
                    margin-bottom: 2rem; 
                    font-family: 'Outfit'; 
                    font-weight: 800;
                    line-height: 1;
                    color: var(--primary-blue);
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
                }
                .hero-p { font-size: 1.25rem; color: rgba(255, 255, 255, 0.9); max-width: 800px; margin: 0 auto 3.5rem; }
                .read-more { padding: 1.2rem 3.5rem; background: var(--primary-blue); color: white; border-radius: 50px; font-weight: 700; display: inline-block; transition: all 0.3s ease; }
                .read-more:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
                .learn-more-btn { padding: 1.2rem 4rem; background: white; color: var(--primary-blue); border-radius: 50px; font-weight: 700; display: inline-block; transition: all 0.3s ease; }
                .learn-more-btn:hover { transform: scale(1.05); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
                .contact-btn { padding: 1.5rem 4rem; background: white; color: var(--primary-blue); border-radius: 12px; font-size: 1.2rem; font-weight: 800; display: inline-block; transition: all 0.3s ease; }
                .contact-btn:hover { background: var(--accent-blue); color: white; transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.3); }
            `}</style>
        </div>
    )
}
