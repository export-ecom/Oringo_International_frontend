import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import companyLogo from "../../assets/logoOrg1.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Logo & Company Info */}
                    <div className="footer-col">
                        <img
                            src={companyLogo}
                            alt="Oringo International"
                            className="footer-logo"
                        />
                        <p className="footer-desc">
                            Oringo International brings you premium products and seamless shopping experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/products" className="footer-link">Products</a></li>
                            <li><a href="/about" className="footer-link">About Us</a></li>
                            <li><a href="/blog" className="footer-link">Blog</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col">
                        <h5 className="footer-title">Contact Us</h5>
                        <p className="footer-contact">
                            <FaPhoneAlt className="me-2" /> +91 9637104850
                        </p>
                        <p className="footer-contact">
                            <FaEnvelope className="me-2" /> support@oringoInternational.com
                        </p>
                    </div>

                    {/* Policy Links */}
                    <div className="footer-col">
                        <h5 className="footer-title">Policies</h5>
                        <ul className="footer-links">
                            <li><a href="/faq" className="footer-link">FAQ</a></li>
                            <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="/shipping" className="footer-link">Shipping & Return Policy</a></li>
                            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <hr />
                    <p>© Oringo International. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
