export default function Bio() {
    const containerStyle = {
        maxWidth: '600px',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px'
    };

    const imageStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #f0f0f0'
    };

    const nameStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '8px',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
        textAlign: 'center'
    };

    const bioTextStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '24px',
        textAlign: 'justify'
    };

    const socialLinksStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap'
    };

    const linkStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div id="bio" style={containerStyle}>
            <div style={imageContainerStyle}>
                <img
                    src={require('./images/pvherreralive.jpg')}
                    alt="Profile"
                    style={imageStyle}
                />
            </div>

            <h1 style={nameStyle}>PV Herrera</h1>
            <p style={titleStyle}>Instrumental Rock Musician/Guitarist</p>

            <p style={bioTextStyle}>
                P.V. Herrera is a musician from San Luis Obispo County. He started writing new music under his stage name P.V. Herrera in 2011. He has been writing music since 2007 under his old project The Danger Girl Starship Experiment and has released 2 albums under his stage name. He has performed a number of live shows and has opened for El Ten Eleven, White Arrows, Pit Per Pat and Evangelicals. You can download his music from his bandcamp links for free.
            </p>

            {/*<div style={socialLinksStyle}>*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        style={linkStyle}*/}
            {/*        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}*/}
            {/*        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}*/}
            {/*    >*/}
            {/*        GitHub*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        style={linkStyle}*/}
            {/*        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}*/}
            {/*        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}*/}
            {/*    >*/}
            {/*        LinkedIn*/}
            {/*    </a>*/}
            {/*    <a*/}
            {/*        href="#"*/}
            {/*        style={linkStyle}*/}
            {/*        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}*/}
            {/*        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}*/}
            {/*    >*/}
            {/*        Twitter*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
    );
}