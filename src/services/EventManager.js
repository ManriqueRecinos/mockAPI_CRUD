import axios from "axios";

const api = axios.create({
    baseURL: "https://687035457ca4d06b34b6384e.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error('Error en la peticion: ', error);
        return Promise.reject(error);
    }
);

export default api;