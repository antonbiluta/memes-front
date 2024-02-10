export const fetchMemes = async (chatPrefix) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/memes/${chatPrefix}/last?limit=5`);
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