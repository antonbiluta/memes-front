import axios from 'axios'

const BackendURL = 'http://localhost:8080/api';

class Api {
    static async getMemes(chatPrefix) {
        try {
            const response = await axios.get(`${BackendURL}/memes/${chatPrefix}/last?limit=5`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching memes:', error)
            return [];
        }
    }
}

export default Api;