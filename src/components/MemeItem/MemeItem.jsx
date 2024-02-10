import React from 'react';
import './MemeItem.css'

const MemeItem = ({ meme }) => {
    return (
        <div className="meme-item" key={meme.id}>
            <p className="author">{`Мем прислал `}<a href={`https://t.me/${meme.author}`} target="_blank" rel="noopener noreferrer">{`@${meme.author}`}</a></p>
            <div className="media-content">
                {meme.mediaType === 'image' && <img src={`data:image/png;base64,${meme.media}`} alt="Meme" />}
                {meme.mediaType === 'video' && <video controls><source src={`data:video/mp4;base64,${meme.media}`} type="video/mp4" /></video>}
            </div>
        </div>
    );
};

export default MemeItem;