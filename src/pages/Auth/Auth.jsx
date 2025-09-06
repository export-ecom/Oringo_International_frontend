import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Header from '../../components/Header/Header';
import "./Auth.css";
import companyLogo from "../../assets/logoOrg1.png";




export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);



    return (
        <div className="auth-container d-flex justify-content-center align-items-center min-vh-100">
             <Header />
             <div className="auth-card p-4 shadow-lg text-center">
                <div className="mb-4">
                    <img
                        src={companyLogo}
                        alt="Company Logo"
                        className="auth-logo"
                    />
                </div>

                <div className="btn-group w-100 mb-4">
                    <button
                        className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </button>
                </div>

                <div className={`auth-form animated-slide`}>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </div>

            </div> 
        </div>
    );
}
