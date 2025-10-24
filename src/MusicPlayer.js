import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import PV from "./images/pvherreralive.jpg"
export default function MusicPlayer() {
    const [playlist] = useState([
        {
            id: 1,
            title: "Selena Gomez ",
            artist: "from Cigarettes and Weddings",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/01+Selena+Gomez.mp3"
        },
        {
            id: 2,
            title: "Surf Worshiper",
            artist: "from Xanax and Mercy",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/SurfWorshipperMix02.mp3"
        },
        {
            id: 3,
            title: "Killer Bears at the Wedding",
            artist: "from Cigarettes and Weddings",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/03+Killer+bears+at+the+wedding.mp3"
        },
        {
            id: 4,
            title: "The Unforgiven",
            artist: "from Xanax and Mercy",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/TheUnforgivenMix02.mp3"


        },
        {
            id: 5,
            title: "Midnight Masquerade",
            artist: "from Digital Smiles Dynasty 2008 Collection Vol 1",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/midnight+masquerade(1).mp3"


        },

        {
            id: 6,
            title: "Flowers",
            artist: "from Xanax and Mercy",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/FlowersMix02.mp3"


        },


        {
            id: 6,
            title: "The Girl in the Red Flannel",
            artist: "from Cigarettes and Weddings",
            url: "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/04+The+girl+in+the+red+flannel.mp3\n3"


        },

    ]);

    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => handleNext();

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentTrack((prev) => (prev + 1) % playlist.length);
        setIsPlaying(true);
        setTimeout(() => audioRef.current?.play(), 100);
    };

    const handlePrev = () => {
        setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
        setTimeout(() => audioRef.current?.play(), 100);
    };

    const handleSeek = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '24px',
                padding: '40px',
                maxWidth: '480px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}>
                {/* Album Art */}
                <div style={{
                    width: '100%',
                    aspectRatio: '1',
backgroundImage: `url(${PV})`,
                    borderRadius: '16px',
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '80px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'

                }}>
                    🎵
                </div>

                {/* Track Info */}
                <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        margin: '0 0 8px 0'
                    }}>
                        {playlist[currentTrack].title}
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#666',
                        margin: 0
                    }}>
                        {playlist[currentTrack].artist}
                    </p>
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: '12px' }}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        style={{
                            width: '100%',
                            height: '6px',
                            borderRadius: '3px',
                            outline: 'none',
                            appearance: 'none',
                            background: `linear-gradient(to right, #667eea ${progress}%, #e0e0e0 ${progress}%)`,
                            cursor: 'pointer'
                        }}
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px',
                        color: '#666',
                        marginTop: '8px'
                    }}>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>

                {/* Controls */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    <button
                        onClick={handlePrev}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#667eea',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <SkipBack size={28} />
                    </button>

                    <button
                        onClick={togglePlay}
                        style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" />}
                    </button>

                    <button
                        onClick={handleNext}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#667eea',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <SkipForward size={28} />
                    </button>
                </div>

                {/* Volume Control */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '30px'
                }}>
                    <Volume2 size={20} color="#667eea" />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume * 100}
                        onChange={(e) => setVolume(e.target.value / 100)}
                        style={{
                            flex: 1,
                            height: '4px',
                            borderRadius: '2px',
                            outline: 'none',
                            appearance: 'none',
                            background: `linear-gradient(to right, #667eea ${volume * 100}%, #e0e0e0 ${volume * 100}%)`,
                            cursor: 'pointer'
                        }}
                    />
                </div>

                {/* Playlist */}
                <div>
                    <h3 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#666',
                        marginBottom: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Playlist
                    </h3>
                    {playlist.map((track, idx) => (
                        <div
                            key={track.id}
                            onClick={() => {
                                setCurrentTrack(idx);
                                setIsPlaying(true);
                                setTimeout(() => audioRef.current?.play(), 100);
                            }}
                            style={{
                                padding: '12px 16px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                background: currentTrack === idx ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                                marginBottom: '4px',
                                transition: 'background 0.2s'
                            }}
                            onMouseOver={(e) => {
                                if (currentTrack !== idx) {
                                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (currentTrack !== idx) {
                                    e.currentTarget.style.background = 'transparent';
                                }
                            }}
                        >
                            <div style={{
                                fontWeight: currentTrack === idx ? '600' : '500',
                                color: currentTrack === idx ? '#667eea' : '#1a1a1a',
                                marginBottom: '4px',
                                fontSize: '14px'
                            }}>
                                {track.title}
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: '#999'
                            }}>
                                {track.artist}
                            </div>
                        </div>
                    ))}
                </div>

                <audio
                    ref={audioRef}
                    src={playlist[currentTrack].url}
                    onLoadedMetadata={() => setDuration(audioRef.current.duration)}
                />
            </div>
        </div>
    );
}