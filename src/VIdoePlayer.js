import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef(null);
    const controlsTimeoutRef = useRef(null);

    const containerStyle = {
        maxWidth: '900px',
        margin: '40px auto',
        backgroundColor: '#000',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        position: 'relative',
        cursor: showControls ? 'default' : 'none'
    };

    const videoContainerStyle = {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%',
        backgroundColor: '#000'
    };

    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    };

    const controlsOverlayStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        padding: '40px 16px 16px',
        opacity: showControls ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: showControls ? 'auto' : 'none'
    };

    const progressBarContainerStyle = {
        width: '100%',
        height: '4px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
        marginBottom: '12px',
        cursor: 'pointer',
        position: 'relative'
    };

    const progressBarStyle = {
        height: '100%',
        backgroundColor: '#ff0000',
        borderRadius: '2px',
        width: `${progress}%`,
        transition: 'width 0.1s linear'
    };

    const controlsRowStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        color: '#fff'
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        transition: 'background-color 0.2s'
    };

    const timeStyle = {
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        userSelect: 'none'
    };

    const volumeSliderStyle = {
        width: '80px',
        height: '4px',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '2px',
        cursor: 'pointer',
        position: 'relative'
    };

    const volumeFillStyle = {
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: '2px',
        width: `${isMuted ? 0 : volume * 100}%`
    };

    const spacerStyle = {
        flex: 1
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            setDuration(video.duration);
        };

        const handleTimeUpdate = () => {
            const prog = (video.currentTime / video.duration) * 100;
            setProgress(prog);
            setCurrentTime(video.currentTime);
        };

        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) {
                setShowControls(false);
            }
        }, 3000);
    };

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleProgressClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        videoRef.current.currentTime = pos * videoRef.current.duration;
    };

    const handleVolumeClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const newVolume = Math.max(0, Math.min(1, pos));
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const toggleFullscreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div style={containerStyle} onMouseMove={handleMouseMove}>
            <div style={videoContainerStyle}>
                <video
                    ref={videoRef}
                    style={videoStyle}
                    onClick={togglePlay}
                    src="https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/%E2%80%9CCrystal+Clearwater%E2%80%9D%2C+an+original+song+by+PV+Herrera.+(2008)+-+Instrumental+Rock.mp4"
                />

                <div style={controlsOverlayStyle}>
                    <div style={progressBarContainerStyle} onClick={handleProgressClick}>
                        <div style={progressBarStyle} />
                    </div>

                    <div style={controlsRowStyle}>
                        <button
                            style={buttonStyle}
                            onClick={togglePlay}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>

                        <button
                            style={buttonStyle}
                            onClick={toggleMute}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>

                        <div style={volumeSliderStyle} onClick={handleVolumeClick}>
                            <div style={volumeFillStyle} />
                        </div>

                        <span style={timeStyle}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

                        <div style={spacerStyle} />

                        <button
                            style={buttonStyle}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <Settings size={20} />
                        </button>

                        <button
                            style={buttonStyle}
                            onClick={toggleFullscreen}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <Maximize size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

