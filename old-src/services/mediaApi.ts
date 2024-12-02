import axios from 'axios';

export const fetchMemes = async (chatPrefix) => {
    const api_path = process.env.REACT_APP_BACKEND_API_PATH;
    try {
        const response = await fetch(`http://localhost:8080${api_path}/memes/${chatPrefix}/last?limit=5`);
        if (!response.ok) {
            throw new Error('Failed to fetch memes');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching memes:', error)
        return [];
    }
};