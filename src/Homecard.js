import React, { useState, useEffect } from 'react';
import { Rocket, Zap, Shield, ArrowRight, Menu, X } from 'lucide-react';

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={styles.container}>
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>

            {/* Navigation */}
            <nav style={{
                ...styles.nav,
                background: scrolled ? 'rgba(10, 10, 30, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
            }}>
                <div style={styles.navContainer}>
                    <div style={styles.logo}>NexaFlow</div>
                    <div style={styles.navLinks}>
                        <a href="#features" style={styles.navLink}>Features</a>
                        <a href="#pricing" style={styles.navLink}>Pricing</a>
                        <a href="#about" style={styles.navLink}>About</a>
                        <button style={styles.ctaButton}>Get Started</button>
                    </div>
                    <button
                        style={styles.menuButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={styles.mobileMenu}>
                    <a href="#features" style={styles.mobileLink}>Features</a>
                    <a href="#pricing" style={styles.mobileLink}>Pricing</a>
                    <a href="#about" style={styles.mobileLink}>About</a>
                    <button style={styles.mobileCtaButton}>Get Started</button>
                </div>
            )}

            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroBackground}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        Build The Future
                        <br />
                        <span style={styles.gradient}>Today</span>
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Transform your workflow with cutting-edge solutions that scale with your ambition
                    </p>
                    <div style={styles.heroButtons}>
                        <button style={styles.primaryButton}>
                            Start Free Trial
                            <ArrowRight style={styles.buttonIcon} size={20} />
                        </button>
                        <button style={styles.secondaryButton}>Watch Demo</button>
                    </div>
                    <div style={styles.heroStats}>
                        <div style={styles.stat}>
                            <div style={styles.statNumber}>10K+</div>
                            <div style={styles.statLabel}>Active Users</div>
                        </div>
                        <div style={styles.stat}>
                            <div style={styles.statNumber}>99.9%</div>
                            <div style={styles.statLabel}>Uptime</div>
                        </div>
                        <div style={styles.stat}>
                            <div style={styles.statNumber}>24/7</div>
                            <div style={styles.statLabel}>Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={styles.features} id="features">
                <h2 style={styles.sectionTitle}>Powerful Features</h2>
                <p style={styles.sectionSubtitle}>Everything you need to succeed</p>
                <div style={styles.featureGrid}>
                    <FeatureCard
                        icon={<Rocket size={40} />}
                        title="Lightning Fast"
                        description="Experience blazing speeds with our optimized infrastructure built for performance"
                    />
                    <FeatureCard
                        icon={<Zap size={40} />}
                        title="Smart Automation"
                        description="Automate repetitive tasks and focus on what matters most to your business"
                    />
                    <FeatureCard
                        icon={<Shield size={40} />}
                        title="Enterprise Security"
                        description="Bank-level encryption and security protocols to keep your data safe"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section style={styles.cta}>
                <div style={styles.ctaContent}>
                    <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
                    <p style={styles.ctaSubtitle}>Join thousands of teams already using NexaFlow</p>
                    <button style={styles.ctaLargeButton}>Start Your Journey</button>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.footerContent}>
                    <div style={styles.footerLogo}>NexaFlow</div>
                    <p style={styles.footerText}>© 2025 NexaFlow. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                ...styles.featureCard,
                transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={styles.featureIcon}>{icon}</div>
            <h3 style={styles.featureTitle}>{title}</h3>
            <p style={styles.featureDescription}>{description}</p>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#ffffff',
        minHeight: '100vh',
        background: '#0a0a1e',
    },
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    navContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    navLinks: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1rem',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
    },
    menuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        color: '#ffffff',
        cursor: 'pointer',
    },
    ctaButton: {
        padding: '0.75rem 1.5rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '50px',
        color: '#ffffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
    mobileMenu: {
        position: 'fixed',
        top: '80px',
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 30, 0.98)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 999,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    mobileLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1.2rem',
        padding: '0.5rem 0',
    },
    mobileCtaButton: {
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '50px',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    hero: {
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        overflow: 'hidden',
    },
    heroBackground: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite',
        opacity: 0.1,
    },
    heroContent: {
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        textAlign: 'center',
        animation: 'fadeInUp 1s ease',
    },
    heroTitle: {
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        lineHeight: 1.1,
    },
    gradient: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    heroSubtitle: {
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: '3rem',
        lineHeight: 1.6,
    },
    heroButtons: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '4rem',
    },
    primaryButton: {
        padding: '1.2rem 2.5rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '50px',
        color: '#ffffff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    },
    secondaryButton: {
        padding: '1.2rem 2.5rem',
        background: 'transparent',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '50px',
        color: '#ffffff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
    },
    buttonIcon: {
        transition: 'transform 0.3s ease',
    },
    heroStats: {
        display: 'flex',
        gap: '3rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    stat: {
        textAlign: 'center',
    },
    statNumber: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: '0.5rem',
    },
    features: {
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    sectionTitle: {
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    sectionSubtitle: {
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        marginBottom: '4rem',
    },
    featureGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    featureCard: {
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
    },
    featureIcon: {
        width: '80px',
        height: '80px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        color: '#ffffff',
    },
    featureTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    featureDescription: {
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.6,
    },
    cta: {
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    ctaContent: {
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    },
    ctaTitle: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    ctaSubtitle: {
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '2.5rem',
    },
    ctaLargeButton: {
        padding: '1.5rem 3rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '50px',
        color: '#ffffff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 15px 40px rgba(102, 126, 234, 0.4)',
    },
    footer: {
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
    },
    footerLogo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
    },
    footerText: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
};

// Responsive styles
if (typeof window !== 'undefined' && window.innerWidth < 768) {
    styles.navLinks.display = 'none';
    styles.menuButton.display = 'block';
}