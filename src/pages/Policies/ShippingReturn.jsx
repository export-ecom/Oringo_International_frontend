import React from "react";
import "./Policies.css";
import { useNavigate } from "react-router-dom";

export default function ShippingReturn() {
      const navigate = useNavigate();
    return (
        <div className="container py-5">
            <button className="back-btn" onClick={() => navigate("/")}>
                Export-ecom
            </button>
            <h1 className="mb-4 text-primary">Shipping & Return Policy</h1>
            <p>
                We aim to deliver your products in a timely manner while ensuring safe
                and secure packaging. Please read our shipping and return policy below
                for details.
            </p>
            <h5 className="mt-4">1. Shipping</h5>
            <p>
                Orders are processed within 2-3 business days. Shipping times vary
                depending on location and selected delivery method.
            </p>
            <h5 className="mt-4">2. Returns</h5>
            <p>
                If you are not satisfied with your purchase, you can request a return
                within 14 days of delivery. Items must be unused and in original
                packaging.
            </p>
        </div>
    );
}
