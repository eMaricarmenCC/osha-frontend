import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', //process.env.VITE_REACT_APP_SERVER_URL,
});

export default api;