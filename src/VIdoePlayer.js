export default function YouTubePlayer() {
    // Extract video ID from YouTube URL
    const videoUrl = "https://www.youtube.com/watch?v=xl4MksTBR6I";
    const videoId = videoUrl.split("v=")[1]?.split("&")[0];

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        padding: "20px"
    };

    const iframeWrapperStyle = {
        position: "relative",
        width: "100%",
        maxWidth: "800px",
        paddingBottom: "56.25%", // 16:9 aspect ratio
        height: 0,
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
    };

    const iframeStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none"
    };

    const titleStyle = {
        color: "#fff",
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif"
    };

    return (
        <div id="videos" style={containerStyle}>
            <h1 style={titleStyle}>Featured video from PV Herrera</h1>
            <div style={iframeWrapperStyle}>
                <iframe
                    style={iframeStyle}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}