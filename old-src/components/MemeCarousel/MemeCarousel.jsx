import React, { useState, useEffect } from 'react'
import MemeItem from '../MemeItem/MemeItem'
import { fetchMemes } from '../../services/mediaApi'
import './MemeCarousel.css'

const MemeCarousel = ({ chatPrefix }) => {
    const [memes, setMemes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const fetchInitialMemes = async () => {
            const data = await fetchMemes(chatPrefix)
            setMemes(data)
        };

        fetchInitialMemes();
    }, [chatPrefix]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % memes.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [memes]);
  
    useEffect(() => {
      const minuteInterval = setInterval(() => {
        fetchMemes(chatPrefix).then(data => setMemes(data));
      }, 60000);
  
      return () => clearInterval(minuteInterval);
    }, [chatPrefix]);
  
    return (
      <div className="carousel">
        {memes.length > 0 && <MemeItem meme={memes[currentIndex]} />}
      </div>
    );
  };

export default MemeCarousel;
