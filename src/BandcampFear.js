import React from 'react';

const BandcampEmbedFear = () => {
    return (
        <iframe
            style={{
                border: 0,
                width: '350px',
                height: '720px'
            }}
            src=" https://bandcamp.com/EmbeddedPlayer/album=2701079573/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
            seamless
            title="Her Atmosphere Causes the Fear by PV Herrera"
        >
            <a href="https://pvherrera.bandcamp.com/album/her-atmosphere-causes-the-fear">
                Her Atmosphere Causes the Fear by PV Herrera.
            </a>
        </iframe>
    );
};

export default BandcampEmbedFear;
