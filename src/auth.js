import API from "./api";

// User registration
export const register = async (userData) => {
    return API.post("/auth/register/", userData);
};

// User login
export const login = async (credentials) => {
    const res = await API.post("/auth/login/", credentials);
    if (res.data.access) {
        localStorage.setItem("token", res.data.access);
    }
    return res.data;
};

// User logout
export const logout = () => {
    localStorage.removeItem("token");
};
