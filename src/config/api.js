import axios from 'axios';

const jokeAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

jokeAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    console.log("Set token header: ", token);
    if (token) {
        // to set header with the token if there is token in our 'sessionStorage'
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})
export default jokeAPI;