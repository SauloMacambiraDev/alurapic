import axios from 'axios';
import storeProvider from './../store/provider';

const api = axios.create({
    baseUrl: 'http://localhost:8000/api',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    },
    timeout: 10000
})

// Configuring interceptors from Axios lib to always attached the header Authorization whenever we have token stored
api.interceptors.request.use(function(config){
    // const token = localStorage.getItem('jwt') --> OLD APPROACH
    const token = storeProvider.state.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, function(err){
    return Promise.reject(err)
})

export default api;