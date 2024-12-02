import React from 'react'
import { useParams } from 'react-router-dom';
import MemeCarousel from '../components/MemeCarousel/MemeCarousel'
import './MemePage.css'

const MemePage = () => {
    const { chatPrefix } = useParams();

    return (
        <div className="meme-page">
            <MemeCarousel chatPrefix={chatPrefix} />
        </div>
    );
};

export default MemePage;