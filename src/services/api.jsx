const API_URL = 'http://172.18.0.3:8080/api'

export const fetchMemes = async (chatPrefix) => {
    try {
        const response = await fetch(`${API_URL}/memes/${chatPrefix}/last?limit=5`);
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