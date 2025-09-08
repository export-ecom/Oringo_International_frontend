import React from 'react';
import Button from '../../components/Button/Button';
import './Banner.css';
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();

    return (
        <div className="banner-container">
            <section className="banner-section text-white text-center d-flex flex-column justify-content-center align-items-center">
                <div className="banner-content">
                    <h1 className="display-3 fw-bold mb-3 fade-in">
                        Welcome to <span className="highlight">Oringo International</span>
                    </h1>
                    <p className="lead mb-4 fade-in-delay">
                        Sustainable. Global. Trusted.
                    </p>
                    <Button
                        className="btn-lg btn-modern"
                        onClick={() => navigate("/auth")}
                    >
                        Login/Register
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Banner;
