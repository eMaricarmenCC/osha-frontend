import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_SERVER_URL}`, //process.env.VITE_REACT_APP_SERVER_URL,
});

export default api;