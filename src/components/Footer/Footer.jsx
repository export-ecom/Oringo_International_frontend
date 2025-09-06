import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import companyLogo from "../../assets/logoOrg1.png";
import "./Footer.css"; // Import the CSS file

function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row text-center text-md-start">

                    {/* Logo & Company Info */}
                    <div className="col-md-3 mb-4">
                        <img
                            src={companyLogo}
                            alt="Oringo International"
                            className="footer-logo mb-3"
                        />
                        <p className="small text-secondary footer-desc">
                            Oringo International brings you premium products and seamless shopping experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/products" className="footer-link">Products</a></li>
                            <li><a href="/about" className="footer-link">About Us</a></li>
                            <li><a href="/blog" className="footer-link">Blog</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title mb-3">Contact Us</h5>
                        <p className="footer-contact">
                            <FaPhoneAlt className="me-2" /> +91 9637104850
                        </p>
                        <p className="footer-contact">
                            <FaEnvelope className="me-2" /> support@oringoInternational.com
                        </p>
                    </div>

                    {/* Policy Links */}
                    <div className="col-md-3 mb-4">
                        <h5 className="footer-title mb-3">Policies</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/faq" className="footer-link">FAQ</a></li>
                            <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="/shipping" className="footer-link">Shipping & Return Policy</a></li>
                            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="text-center mt-4">
                    <hr className="border-secondary" />
                    <p className="mb-0 small">© Oringo International. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
