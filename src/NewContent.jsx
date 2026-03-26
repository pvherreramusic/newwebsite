import React from 'react';
import BandcampEmbedFear from "./BandcampFear";
import SurfYouTubePlayer from "./SurfYOUTUBEVIDEO";

const NewContent = () => {
    return (
        <section id="newcontent" style={styles.section}>
            <div style={styles.inner}>
                <h2 style={styles.heading}>New Content</h2>
                <div style={styles.divider} />

                <div style={styles.block}>
                    <span style={styles.tag}>New Music</span>
                    <h3 style={styles.subheading}>Her Atmosphere Causes the Fear...out now!</h3>
                    <p style={styles.body}>
                        Her Atmosphere Causes the Fear is now out as a free EP download on this site.
                    </p>
                </div>

                <div style={styles.block}>
                    <span style={styles.tag}>New Music</span>
                    <h3 style={styles.subheading}>Her Atmosphere Causes the Fear</h3>
                    <p style={styles.body}>
                        Two featured tracks from the 2011 EP — <em>"Nahla"</em> and <em>"Dear Elizabeth"</em> — are
                        available now on the music player below. The full EP will be on the site for free soon. Enjoy!
                    </p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        background: '#0a0a1e',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '5rem 1.5rem',
        fontFamily: '"Georgia", "Times New Roman", serif',
    },
    inner: {
        maxWidth: '760px',
        margin: '0 auto',
    },
    heading: {
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        marginBottom: '0.5rem',
        background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    divider: {
        width: '60px',
        height: '3px',
        background: 'linear-gradient(90deg, #a78bfa, #c084fc)',
        borderRadius: '2px',
        marginBottom: '3rem',
    },
    block: {
        marginBottom: '2.5rem',
    },
    tag: {
        display: 'inline-block',
        fontSize: '0.7rem',
        fontFamily: '"Courier New", monospace',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#a78bfa',
        border: '1px solid rgba(167, 139, 250, 0.4)',
        borderRadius: '4px',
        padding: '0.25rem 0.6rem',
        marginBottom: '1rem',
    },
    subheading: {
        fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
        fontWeight: '600',
        fontStyle: 'italic',
        marginBottom: '0.75rem',
        color: '#f3f4f6',
        letterSpacing: '-0.01em',
    },
    body: {
        fontSize: '1rem',
        lineHeight: '1.75',
        color: 'rgba(255, 255, 255, 0.65)',
    },
    embedWrapper: {
        marginTop: '2rem',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '1rem',
    },
};

export default NewContent;
