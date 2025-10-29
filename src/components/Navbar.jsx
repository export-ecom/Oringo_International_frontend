import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiSun, FiMoon, FiX } from "react-icons/fi";
import adminimage from "../assets/AdminHubImage.jpeg";
import threemoreremovebg from "../assets/moreline-background.png";
import "./Navbar.css";

const Navbar = ({ onMenuClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [showProfileSection, setShowProfileSection] = useState(false);
  const [showSettingsSection, setShowSettingsSection] = useState(false);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        notifRef.current &&
        !notifRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    "New category added: Electronics",
    "User John updated profile",
    "System maintenance scheduled at 10PM",
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <div className="Navbar-Section">
        <div className="navbar-left">
          <img
            src={threemoreremovebg}
            className="menu-icon"
            alt="Menu"
            onClick={onMenuClick}
          />
          <h3 className="navbar-title">
            <span className="blue-dark">Admin</span>
            <span className="blue-light">Hub</span>
          </h3>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchinput"
          />
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FiMoon /> : <FiSun />}
          </div>

          {/* Notifications */}
          <div
            className="notification-bell"
            ref={notifRef}
            onClick={() => {
              setNotifOpen(!notifOpen);
              setProfileOpen(false);
            }}
          >
            🔔
            <span className="notification-count">3</span>

            {notifOpen && (
              <div className="notification-dropdown">
                <h4>Notifications</h4>
                {notifications.map((msg, i) => (
                  <p key={i}>{msg}</p>
                ))}
                <button className="clear-btn">Clear All</button>
              </div>
            )}
          </div>

          {/* Profile */}
          <div
            className="profile-menu"
            ref={profileRef}
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
            }}
          >
            <img src={adminimage} alt="Admin" className="profile-avatar" />

            {profileOpen && (
              <div className="profile-dropdown">
                <p>Welcome, Admin</p>
                <button onClick={() => setShowProfileSection(true)}>
                  Profile
                </button>
                <button onClick={() => setShowSettingsSection(true)}>
                  Settings
                </button>
                <button
                  onClick={() => {
                    alert("Logged out successfully!");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ===== PROFILE SECTION ===== */}
      {showProfileSection && (
        <div className="overlay">
          <div className="section-modal">
            <div className="section-header">
              <h3>Admin Profile</h3>
              <FiX
                className="close-icon"
                onClick={() => setShowProfileSection(false)}
              />
            </div>
            <div className="section-content">
              <img src={adminimage} alt="Admin" className="profile-big" />
              <h4>Admin Name: John Doe</h4>
              <p>Email: admin@example.com</p>
              <p>Role: Super Admin</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== SETTINGS SECTION ===== */}
      {showSettingsSection && (
        <div className="overlay">
          <div className="section-modal">
            <div className="section-header">
              <h3>Settings</h3>
              <FiX
                className="close-icon"
                onClick={() => setShowSettingsSection(false)}
              />
            </div>
            <div className="section-content">
              <p>🌗 Theme: {darkMode ? "Dark" : "Light"}</p>
              <button className="save-btn" onClick={toggleTheme}>
                Toggle Theme
              </button>
              <button
                className="save-btn"
                onClick={() => alert("Settings Saved!")}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
