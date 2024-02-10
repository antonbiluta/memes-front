export const fetchMemes = async (chatPrefix) => {
    const protocol = window.location.protocol
    const host = window.location.hostname;
    const port = process.env.REACT_APP_BACKEND_PORT;
    const api_path = process.env.REACT_APP_BACKEND_API_PATH;
    const BACKEND_API_URL = `${protocol}//${host}:${port}${api_path}`;
    try {
        const response = await fetch(`${BACKEND_API_URL}/memes/${chatPrefix}/last?limit=5`);
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