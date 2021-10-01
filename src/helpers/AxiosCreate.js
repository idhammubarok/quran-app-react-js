import axios from 'axios';

export default axios.create({
    baseURL : "https://api.quran.sutanlab.id",
    headers: {
        'Content-Type' : 'applications/json'
    }
});