import axios from "axios";
const TOKEN = '';

export default function getToken() {
    return TOKEN;
}

const LogApi = axios.create({
    baseURL: `${import.meta.envVITE_REACT_APP_SERVER_URL}login/`,
})

export const login = async (email, password) => {
    const response = await axios.post(LogApi, {email, password});
    return(response.data.message);
}