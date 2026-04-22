import React from 'react';

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
    link: {
        color: '#a78bfa',
        textDecoration: 'underline',
    },
};

const CONTENT_BLOCKS = [
    {
        tag: 'Reviews',
        heading: 'An old review of an early release from 10+ years ago',
        body: (
            <>
                In 2014, I released an album of demos and early recordings — experiments from my early days as a
                musician. Some of these songs have since made it (or will make it) onto future albums. The release
                was met with criticism and was eventually shelved, but it remains a meaningful reflection of where
                I started. Since then I've grown considerably, collaborating with other musicians and continuing to
                develop my craft.{' '}
                <a
                    href="https://www.cerebralrift.org/very-serious-knock-knock-joke-is-no-april-fools-prank/"
                    style={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read the review
                </a>{' '}
                and listen to the old demos via BFW Recordings.
            </>
        ),
    },
    {
        tag: 'New Music',
        heading: 'Her Atmosphere Causes the Fear — out now!',
        body: 'Her Atmosphere Causes the Fear is now available as a free EP download on this site.',
    },
    {
        tag: 'New Music',
        heading: 'Her Atmosphere Causes the Fear',
        body: (
            <>
                Two featured tracks from the 2011 EP — <em>Nahla</em> and <em>Dear Elizabeth</em> — are available
                on the music player below. The full EP will be available for free on the site soon. Enjoy!
            </>
        ),
    },
];

const NewContent = () => (
    <section id="newcontent" style={styles.section}>
        <div style={styles.inner}>
            <h2 style={styles.heading}>New Content</h2>
            <div style={styles.divider} />

            {CONTENT_BLOCKS.map(({ tag, heading, body }) => (
                <div key={heading} style={styles.block}>
                    <span style={styles.tag}>{tag}</span>
                    <h3 style={styles.subheading}>{heading}</h3>
                    <p style={styles.body}>{body}</p>
                </div>
            ))}
        </div>
    </section>
);

export default NewContent;