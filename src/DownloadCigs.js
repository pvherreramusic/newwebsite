import React, { useState, useEffect } from 'react';

const CWDownloadFiles = () => {
    const [downloads, setDownloads] = useState([
        {
            id: 1,
            name: 'Cigarettes and Weddings Full Album (2012).zip',
            type: 'ZIP',
            size: '45.2 MB',
            url: 'https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/Cigarettes+and+Weddings.zip'
        },
    ]);

    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [downloading, setDownloading] = useState({});



    // Load count on mount
    useEffect(() => {
        loadCount();
    }, []);

    const loadCount = async () => {
        try {
            const response = await fetch(
                `https://api.api-ninjas.com/v1/counter?id=cigarettes&hit=false
`,
                {
                    headers: {
                        'X-Api-Key': '71csB5pU5aujUh8AOS3lc1c7a0odMcEqlY0XIapQ'
                    }
                }
            );
            const data = await response.json();
            setCount(data.value || 0);
        } catch (err) {
            console.error('Error loading count:', err);
            setCount(0);
        } finally {
            setIsLoading(false);
        }
    };

    const incrementCounter = async () => {
        try {
            const response = await fetch(
                `https://api.api-ninjas.com/v1/counter?id=cigarettes&hit=true
`,
                {
                    headers: {
                        'X-Api-Key': '71csB5pU5aujUh8AOS3lc1c7a0odMcEqlY0XIapQ'
                    }
                }
            );
            const data = await response.json();
            setCount(data.value);
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 300);
        } catch (err) {
            console.error('Error incrementing counter:', err);
        }
    };

    const handleDownload = async (file) => {
        // Increment counter
        await incrementCounter();

        // Start download animation
        setDownloading(prev => ({ ...prev, [file.id]: true })); // Changed to true

        // Simulate download delay then trigger actual download
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = file.url;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setDownloading(prev => ({ ...prev, [file.id]: false }));
        }, 1000);
    };

    // ... rest of your component code remains the same

    const getTypeColor = (type) => {
        const colors = {
            PDF: '#e74c3c',
            CSV: '#27ae60',
            PPTX: '#e67e22',
            ZIP: '#9b59b6',
            default: '#3498db'
        };
        return colors[type] || colors.default;
    };

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f8f9fa',
                color: '#6c757d',
                fontSize: '1.25rem'
            }}>
                Loading...
            </div>
        );
    }

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    };

    const headerStyle = {
        marginBottom: '32px'
    };

    const titleStyle = {
        fontSize: '32px',
        fontWeight: '700',
        color: '#2c3e50',
        marginBottom: '8px'
    };

    const subtitleStyle = {
        fontSize: '16px',
        color: '#7f8c8d',
        fontWeight: '400'
    };

    const fileListStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    };

    const fileCardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 24px',
        backgroundColor: '#ffffff',
        border: '1px solid #e1e8ed',
        borderRadius: '12px',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)'
    };

    const fileInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        flex: 1
    };

    const fileIconStyle = (type) => ({
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        backgroundColor: getTypeColor(type),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '12px',
        fontWeight: '700',
        flexShrink: 0
    });

    const fileDetailsStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
    };

    const fileNameStyle = {
        fontSize: '16px',
        fontWeight: '600',
        color: '#2c3e50'
    };

    const fileSizeStyle = {
        fontSize: '14px',
        color: '#95a5a6'
    };

    const downloadButtonStyle = (isDownloading) => ({
        padding: '10px 24px',
        backgroundColor: isDownloading ? '#95a5a6' : '#3498db',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: isDownloading ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        opacity: isDownloading ? 0.7 : 1
    });

    const DownloadIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 11L4 7h2.5V2h3v5H12L8 11z" fill="currentColor"/>
            <path d="M2 13h12v2H2v-2z" fill="currentColor"/>
        </svg>
    );

    const SpinnerIcon = () => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
                animation: 'spin 1s linear infinite'
            }}
        >
            <path
                d="M8 2a6 6 0 1 0 6 6h-2a4 4 0 1 1-4-4V2z"
                fill="currentColor"
            />
        </svg>
    );

    return (
        <>
            <div style={containerStyle}>
                <div style={headerStyle}>
                    <h1 style={titleStyle}>Download Files</h1>
                    <p style={subtitleStyle}>LP 1 : Cigarettes and Weddings (2012)</p>
                </div>

                <div style={fileListStyle}>
                    {downloads.map((file) => (
                        <div
                            key={file.id}
                            className="file-card"
                            style={fileCardStyle}
                        >
                            <div style={fileInfoStyle}>
                                <div style={fileIconStyle(file.type)}>
                                    {file.type}
                                </div>
                                <div style={fileDetailsStyle}>
                                    <div style={fileNameStyle}>{file.name}</div>
                                    <div style={fileSizeStyle}>{file.size}</div>
                                </div>
                            </div>

                            <button
                                className="download-btn"
                                style={downloadButtonStyle(downloading[file.id])}
                                onClick={() => handleDownload(file)}

                                disabled={downloading[file.id]}
                            >
                                {downloading[file.id] ? (
                                    <>
                                        <SpinnerIcon />
                                        Downloading...
                                    </>
                                ) : (
                                    <>
                                        <DownloadIcon />
                                        Download
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '24px',
                    textAlign: 'center',
                    color: '#7f8c8d',
                    fontSize: '14px',
                    transform: isAnimating ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                }}>
                    Total  monthly downloads: {count}
                </div>
            </div>
        </>
    );
};

export default CWDownloadFiles;