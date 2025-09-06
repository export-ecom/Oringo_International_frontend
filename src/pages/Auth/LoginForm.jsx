import React, { useState } from "react";
import API from "../../api/api"; // axios instance with baseURL from .env
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login/", { email, password });

      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      // ✅ Fetch user profile after login
      const profileRes = await API.get("/me/");
      localStorage.setItem("user", JSON.stringify(profileRes.data));

      // alert("Login successful!");
      navigate("/", { replace: true });
      window.location.reload(); //  Forces full reload
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed. Check credentials.");
    }
  };





  return (
    <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit" className="btn btn-primary w-100 btn-animated">
        Login
      </button>
      <div className="text-muted small">Or continue with</div>
      <button type="button" className="btn btn-outline-danger w-100 btn-animated">
        <i className="bi bi-google me-2"></i> Google
      </button>
    </form>
  );
}
