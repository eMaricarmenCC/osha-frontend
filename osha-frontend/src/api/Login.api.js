import axios from "axios";
const TOKEN = '';

export default function getToken() {
    return TOKEN;
}

const LogApi = axios.create({
    baseURL: `${import.meta.env.VITE_REACT_APP_SERVER_URL}login/`,
})

export const login = async (estema, estcon) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/login/', { 
            estema,
            estcon
        });
        return 'Usted se ha logueado exitosamente';
    } catch (error) {
        if (error.response && error.response.status === 400) {
            return 'Credenciales inválidas';
        } else {
            return 'No se puso conectar al servidor';
        }
    }    
    return(response.data.message);
}