export function ImageComponent() {
    const imageStyle = {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        objectFit: 'cover',
        display: 'block',
        margin: '0 auto'
    };

    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const captionStyle = {
        textAlign: 'center',
        marginTop: '12px',
        fontSize: '14px',
        color: '#666',
        fontStyle: 'italic'
    };

    return (
        <div style={containerStyle}>
            <div>
                <img
                    src={require('./images/pvherreralive.jpg')}
                    alt="Mountain landscape"
                    style={imageStyle}
                />
                <p style={captionStyle}>PV Herrera performing in June 2025 with a modded Ronin TrueValue Guitar from the 1960s</p>
            </div>
        </div>
    );
}