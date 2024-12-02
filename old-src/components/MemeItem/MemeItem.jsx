import React from 'react';
import './MemeItem.css'

const MemeItem = ({ meme }) => {
    return (
        <div className="meme-item" key={meme.id}>
            <p className="author">{`Мем прислал `}<a href={`${meme.userLink}`} target="_blank" rel="noopener noreferrer">{`@${meme.username}`}</a></p>
            <div className="media-content">

            { meme.fileType.toLowerCase() === 'image' ? (
                <img src={`https://minio-back.biluta.ru/${meme.filePath}`} alt="Meme" />
            ) : (
                <video autoPlay muted loop>
                    <source src={`https://minio-back.biluta.ru/${meme.filePath}`} type="video/mp4" />
                </video>
            )}


                {/* {meme.fileType.toLowerCase() === 'image' && <img old-src={`https://minio-back.biluta.ru/${meme.filePath}`} alt="Meme" />} */}
                {/* {meme.fileType.toLowerCase() === 'video' && <video autoplay muted loop><source old-src={`https://minio-back.biluta.ru/${meme.filePath}`} type="video/mp4" /></video>} */}
            </div>
        </div>
    );
};

export default MemeItem;