import React from "react";
import { useNavigate } from "react-router-dom";
import "./Policies.css";

export default function Terms() {
    const navigate = useNavigate();

    return (
        <div className="container py-5">
            <button className="back-btn" onClick={() => navigate("/")}>
                Export-ecom
            </button>
            <h1 className="mb-4 text-primary">Terms & Conditions</h1>
            <p>
                Welcome to our platform. By accessing and using our services, you agree
                to the following terms and conditions. These terms apply to all users
                of the site, including without limitation users who are browsers,
                vendors, customers, merchants, and/or contributors of content.
            </p>
            <h5 className="mt-4">1. General Conditions</h5>
            <p>
                We reserve the right to refuse service to anyone for any reason at any
                time. You understand that your content (not including credit card
                information) may be transferred unencrypted.
            </p>
            <h5 className="mt-4">2. Accuracy of Information</h5>
            <p>
                We are not responsible if information made available on this site is
                not accurate, complete, or current. The material on this site is
                provided for general information only.
            </p>
        </div>
    );
}
