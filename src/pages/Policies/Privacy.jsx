import React from "react";
import "./Policies.css";
import { useNavigate } from "react-router-dom";

export default function Privacy() {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            <button className="back-btn" onClick={() => navigate("/")}>
                Export-ecom
            </button>
            <h1 className="mb-4 text-primary">Privacy Policy</h1>
            <p>
                We value your privacy and are committed to protecting your personal
                data. This Privacy Policy outlines how we collect, use, and safeguard
                your information when you visit our website or use our services.
            </p>
            <h5 className="mt-4">1. Information We Collect</h5>
            <p>
                We may collect personal information such as your name, email address,
                phone number, and payment details when you interact with us.
            </p>
            <h5 className="mt-4">2. How We Use Your Information</h5>
            <p>
                We use the information collected to provide and improve our services,
                process transactions, and communicate with you.
            </p>
        </div>
    );
}
