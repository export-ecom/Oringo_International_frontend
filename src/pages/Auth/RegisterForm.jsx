import React, { useState } from "react";
import API from "../../api/api"; // axios instance with baseURL from .env
import { useNavigate } from "react-router-dom";



export default function RegisterForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setConfirm] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await API.post("/register/", {
                username: name,
                email,
                // phone, // include if your backend accepts it
                password,
                password2,
            });

            alert("Registration successful! Redirecting to login...");
            console.log(res.data);

            // Option 1: Redirect to login page
            navigate("/");

            // Option 2 (if backend returns JWT after registration): 
            // localStorage.setItem("token", res.data.access);
            // navigate("/"); // direct login after registration

        } catch (err) {
            console.log(name, email, phone, password);
            alert(
                "Error: -> " +
                (err.response?.data?.detail || JSON.stringify(err.response?.data))
            );
        }
    };


    return (
        <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={password2}
                onChange={(e) => setConfirm(e.target.value)}
                required
            />
            <button type="submit" className="btn btn-success w-100 btn-animated">
                Register
            </button>
            <div className="text-muted small">Or continue with</div>
            <button type="button" className="btn btn-outline-danger w-100 btn-animated">
                <i className="bi bi-google me-2"></i> Google
            </button>
        </form>
    );
}
