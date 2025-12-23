import React from 'react';

const BandcampEmbed = () => {
    return (
        <iframe
            style={{
                border: 0,
                width: '350px',
                height: '720px'
            }}
            src="https://bandcamp.com/EmbeddedPlayer/album=1117060883/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
            title="Cigarettes and Weddings by PV Herrera"
        >
            <a href="https://pvherrera.bandcamp.com/album/cigarettes-and-weddings">
                Cigarettes and Weddings by PV Herrera
            </a>
        </iframe>
    );
};

export default BandcampEmbed;
