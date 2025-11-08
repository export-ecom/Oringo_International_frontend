import React, { useState } from "react";
import Whatsapp from "../whatsapp/whatsapp";
import "./Header.css";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logoOrg3.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-gradient-primary fixed-top shadow-sm px-3">
                {/* Brand Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src={logo}
                        alt="Oringo International Logo"
                        className="logo-img"
                    />
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto align-items-md-center">
                        {[
                            { name: "Home", to: "/" },
                            { name: "Products", to: "/products" },
                            { name: "About", to: "/about" },
                            { name: "Blog/News", to: "/blog" },
                            { name: "Contact Us", to: "/contact" },
                        ].map((link, idx) => (
                            <li className="nav-item" key={idx}>
                                <Link className="nav-link nav-link-hover" to={link.to}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        <li className="nav-item ms-3">
                            <Link
                                to="/cart"
                                className="nav-link nav-link-hover d-flex align-items-center"
                            >
                                <FaShoppingCart size={26} className="me-1" />
                                Cart
                            </Link>
                        </li>

                        {/* <li className="nav-item ms-2">
                            <a
                                className="nav-link nav-link-hover d-flex align-items-center"
                                href="https://wa.me/917995950354"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp size={22} className="text-success me-1" />
                                WhatsApp
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>

            {/* Floating WhatsApp Button */}
            <Whatsapp />
        </header>
    );
}

export default Header;
