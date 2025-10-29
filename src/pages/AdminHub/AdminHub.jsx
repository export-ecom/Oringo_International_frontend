// src/pages/AdminHub/AdminHub.jsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

// Import module placeholders
import ProductList from "./Products/ProductList";
// import CategoryList from "./Categories/CategoryList";
import OrderList from "./Orders/OrderList";
import BlogList from "./Blogs/BlogList";
import CategoryManagement from "./CategoryManagement/CategoryManagement";
import QuotationList from "./Quotations/QuotationList";
import UserList from "./Users/UserList";
// import Dashboard from "./Dashboard/Dashboard";

export default function AdminHub() {
  const [activeModule, setActiveModule] = useState("products");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 🔹 Mobile sidebar toggle

  const renderModule = () => {
    switch (activeModule) {
      // case "dashboard":
      //   return <Dashboard />;
      case "products":
        return <ProductList />;
      // case "categories":
      //   return <CategoryList />;
      case "orders":
        return <OrderList />;
      case "blogs":
        return <BlogList />;
      case "categorymanagement":
        return <CategoryManagement/>;
        
      case "quotations":
        return <QuotationList />;
      case "users":
        return <UserList />;
      default:
        return <div>Select a module</div>;
    }
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      {/* Sidebar */}
      <Sidebar
        setActiveModule={setActiveModule}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Section */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <div className={`adminhub-content ${isSidebarOpen ? "blur" : ""}`}>
          <div style={{ padding: "20px" }}>{renderModule()}</div>
        </div>
      </div>
    </div>
  );
}
