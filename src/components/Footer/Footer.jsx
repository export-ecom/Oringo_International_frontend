import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Emailimage from "../../assets/emailimg.png";
import companyLogo from "../../assets/logoOrg1.png";
import gpay from "../../assets/gpay.png";
import mastercard from "../../assets/mastercard.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visaimage.png";
import applepay from "../../assets/applepay.png";
import "./Footer.css";
// import { s } from 'framer-motion/client';

function Footer() {
    return (
        <footer className="footer">
            <div className="Offer-Card-Section">
                <h2 className="typography-style">STAY UPTO DATE ABOUT OUR <br />LATEST OFFERS</h2>
                <div className="na-footer-offer">
                    <div className="newsletter-email">
                        <img src={Emailimage} className="img-email"></img>
                        <h4>Enter your email address</h4>
                    </div>
                    <div className="newsletter-subscribe">
                        <h4>Subscribe to Newsletters</h4>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Logo & Company Info */}
                    <div className="footer-col">
                        <img
                            src={companyLogo}
                            alt="Oringo International"
                            className="footer-logo"
                        />
                        <div className='all-social-media-sections'>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition social-icon"
                            >
                                <FaTwitter />
                            </a>

                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-black text-white transition social-icon" >
                                <FaFacebookF />
                            </a>

                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition social-icon" >
                                <FaInstagram />
                            </a>

                            {/* GitHub */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-black hover:bg-black hover:text-white hover:border-black transition social-icon" >
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h5 className="footer-title">Company</h5>
                        <ul className="footer-links">
                            <li><a href="/products" className="footer-link">About</a></li>
                            <li><a href="/about" className="footer-link">Features</a></li>
                            <li><a href="/blog" className="footer-link">Works</a></li>
                            <li><a href="/blog" className="footer-link">Career</a></li>

                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col">
                        <h5 className="footer-title">Help</h5>
                        <p className="footer-contact">
                            <FaPhoneAlt className="me-2" />Customer Support
                        </p>
                        <p className="footer-contact">
                            <FaEnvelope className="me-2" /> Delivery Details
                        </p>
                        <li><a href="/blog" className="footer-link">Terms & Conditions</a></li>
                        <li><a href="/blog" className="footer-link">Privacy Policy</a></li>
                    </div>


                    {/* Policy Links */}
                    <div className="footer-col">
                        <h5 className="footer-title">FAQ</h5>
                        <ul className="footer-links">
                            <li><a href="/faq" className="footer-link">Account</a></li>
                            <li><a href="/terms" className="footer-link">Manage Deliveries</a></li>
                            <li><a href="/shipping" className="footer-link">Orders</a></li>
                            <li><a href="/privacy" className="footer-link">Payments</a></li>
                        </ul>
                    </div>
                </div>

                {/* Horizontal line */}
                <div className="horizontal-line"></div>
                {/* Bottom Footer */}
                <div className='payment-methods'>
                    <div className='payment-flex-end'>
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="Mastercard" />
                        <img src={gpay} alt="Google Pay" />
                        <img src={applepay} alt="Apple Pay" />
                        <img src={paypal} alt="PayPal" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
