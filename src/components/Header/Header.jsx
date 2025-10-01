import React, { useState } from "react";
import Whatsapp from "../whatsapp/whatsapp";
import "./Header.css";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logoOrg3.png";
import searchimage from "../../assets/searchimg.png";
import ProfileImg from "../../assets/ProfileImg.png";
import Brightness from "../../assets/Brightness.png";
import downwardarrow from "../../assets/downwardarrow.png";
import upwardsarrow from "../../assets/upwardsarrow.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [showOpen, setShowOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top custom-navbar">

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
                        <li className="nav-item d-flex align-items-center">
                            <button
                                className="nav-link nav-link-hover d-flex align-items-center border-0 bg-transparent"
                                onClick={() => setShowOpen(!showOpen)}
                            >
                                Show
                                <img
                                    src={showOpen ? upwardsarrow : downwardarrow}
                                    alt="toggle arrow"
                                    className="ms-1"
                                    // style={{ width: "16px", height: "16px" }}
                                />
                            </button>

                            {/* Dropdown content */}
                            {showOpen && (
                                <ul className="dropdown-menu show p-2">
                                    <li><Link to="/option1" className="dropdown-item">Option 1</Link></li>
                                    <li><Link to="/option2" className="dropdown-item">Option 2</Link></li>
                                    <li><Link to="/option3" className="dropdown-item">Option 3</Link></li>
                                </ul>
                            )}
                        </li>
                        {[
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
                <div className="search-section">
                    <form className="search-bar-sector" onSubmit={handleSearch}>
                        <img src={searchimage} alt="Search icon" className="w-6 h-6" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for product..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </form>

                </div>
                <div style={{ display: "flex", gap: "40px" }} className="items-center">
                    <Link
                        to="/cart"
                        className="nav-link nav-link-hover d-flex align-items-center"
                    >
                        <FaShoppingCart size={26} className="me-1" />
                    </Link>


                    <img src={ProfileImg} alt="profileimage" className="w-6 h-6" />
                </div>
                <img src={Brightness} alt="brightness" className="w-6 h-6" />

            </nav>

            {/* Floating WhatsApp Button */}
            <Whatsapp />
        </header>
    );
}

export default Header;
