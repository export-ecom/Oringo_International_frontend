import React, { useState, useEffect } from "react";
import "../components/Sidebar.css";
import Dashboard from "../assets/dashboard.jpeg";
import bento from "../assets/bento.jpg";
import order1 from "../assets/order1.jpeg";
import product from "../assets/product.jpeg";
import quotation from "../assets/quotation.jpeg";
import users from "../assets/Userimage.jpeg";
import category from "../assets/category.jpeg";
import AdminHub from "../assets/AdminHubImage.jpeg";
import threemoreremovebg from "../assets/moreline-background.png";
import { FiArrowLeft } from "react-icons/fi";

const Sidebar = ({ setActiveModule, isOpen, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        onClose(); // close mobile sidebar on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onClose]);

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      <div
        className={`sidebar ${collapsed ? "collapsed" : ""} ${isMobile && isOpen ? "sidebar-open" : ""}`}
      >
        <div className="Sidebar-header">
          <div className="header-left">
            <img src={AdminHub} alt="Admin Hub" className="logoimg" />
            {!collapsed && (
              <h6 className="sidebar-title">
                <span className="blue-dark">Admin</span>
                <span className="blue-light">Hub</span>
              </h6>
            )}
          </div>

          {/* Web: three-lines menu for collapsing */}
          {!isMobile && (
            <img
              src={threemoreremovebg}
              className="menu-icon"
              alt="Menu"
              onClick={() => setCollapsed(!collapsed)}
            />
          )}

          {/* Mobile: back arrow icon */}
          {isMobile && isOpen && (
            <FiArrowLeft
              className="menu-icon"
              onClick={onClose}
            />
          )}
        </div>

        <ul className="sidebar-menu">
          <li onClick={() => setActiveModule("products")}>
            <img src={product} className="admindash-image" alt="Products" />
            {!collapsed && <h6>Products</h6>}
          </li>
          <li onClick={() => setActiveModule("categorymanagement")}>
            <img src={category} className="admindash-image" alt="Categorymanagement" />
            {!collapsed && <h6>Category Management</h6>}
          </li>
          <li onClick={() => setActiveModule("orders")}>
            <img src={order1} className="admindash-image" alt="Orders" />
            {!collapsed && <h6>Orders</h6>}
          </li>
          <li onClick={() => setActiveModule("blogs")}>
            <img src={Dashboard} className="admindash-image" alt="Blogs" />
            {!collapsed && <h6>Blogs</h6>}
          </li>
          <li onClick={() => setActiveModule("quotations")}>
            <img src={quotation} className="admindash-image" alt="Quotations" />
            {!collapsed && <h6>Quotations</h6>}
          </li>
          <li onClick={() => setActiveModule("users")}>
            <img src={users} className="admindash-image" alt="Users" />
            {!collapsed && <h6>Users</h6>}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
