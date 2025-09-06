// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../api/api"; // axios instance

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Restore user from localStorage on refresh
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = async (email, password) => {
        const res = await API.post("/login/", { email, password });
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("refresh", res.data.refresh);

        const profileRes = await API.get("/me/");
        localStorage.setItem("user", JSON.stringify(profileRes.data));
        setUser(profileRes.data);
    };

    const logout = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
