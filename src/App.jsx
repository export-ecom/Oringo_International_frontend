import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Auth from "./pages/Auth/Auth";
import FAQ from './pages/FAQ/Faq';
import Terms from "./pages/Policies/Terms";
import Privacy from "./pages/Policies/Privacy";
import ShippingReturn from "./pages/Policies/ShippingReturn";
import BlogList from "./pages/Blog/BlogList";
import BlogDetail from "./pages/Blog/BlogDetail";
import InquiryRequestPage from './pages/InquiryPage/InquiryRequestPage';
import ProductList from './pages/Product/ProductList';
import ProductDetailPage from "./pages/Product/ProductDetail";
import CartPage from "./pages/Cart/Cart";
import CheckoutPage from './pages/Checkout/Checkout';
import ProtectedRoute from "./ProtectedRoute.jsx";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";





// Dashboards
import CustomerDashboard from './pages/CustomerDashboard/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

// Profile Settings
import CustomerProfileSettings from './pages/CustomerDashboard/ProfileSettings';
import AdminProfileSettings from './pages/AdminDashboard/ProfileSettings';

function App() {
  return (
    <AuthProvider>
      <CartProvider>

        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/inquiry" element={<InquiryRequestPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<ShippingReturn />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />



          {/* Dashboards */}
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/customer/profile" element={<CustomerProfileSettings />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfileSettings />} />

        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
export default App;
