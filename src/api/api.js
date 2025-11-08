// src/api/api.js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const API = axios.create({ baseURL });

// Attach access token
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("access");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
});

// Handle 401 (token expired)
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refresh = localStorage.getItem("refresh");
                if (refresh) {
                    const res = await axios.post(`${baseURL}/refresh/`, { refresh });

                    localStorage.setItem("access", res.data.access);
                    originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                    return API(originalRequest);
                }
            } catch {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                window.location.href = "/login/";
            }
        }

        return Promise.reject(error);
    }
);

export default API;
