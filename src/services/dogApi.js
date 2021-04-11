import axios from 'axios';

// header['x-api-key'] = 61349550-2ee4-4c67-8e76-0f65e7af8003
// or adding into a query string like: ?api_key=61349550-2ee4-4c67-8e76-0f65e7af8003

const apiKey = '61349550-2ee4-4c67-8e76-0f65e7af8003';

const apiInstance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/',
    headers: {
        'x-api-key': apiKey
    },
    timeout: 10000
});

export default apiInstance;