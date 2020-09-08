import axios from 'axios';

const api = axios.create({
    baseURL:'https://gateway.marvel.com:443/v1/public/characters?apikey=1f15e0fba0d54263676b04ce1cb73631',
});

export default api;