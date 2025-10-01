import React, { useState } from "react";
import "./InquiryRequestPage.css";
import Header from "../../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBoxOpen,
  FaClipboardList,
} from "react-icons/fa";
import sampleImage from "../../assets/sample-product.png";
import companyLogo from "../../assets/logoOrg3.png";

export default function InquiryRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "Premium Export Mangoes",
    quantity: "",
    unit: "kg",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (!e.target.value) {
      setErrors({ ...errors, [e.target.name]: "This field is required" });
    } else {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Inquiry Submitted:", formData);
      alert("Your inquiry has been submitted successfully!");
    }
  };

  return (
    <div className="inquiry-page">
      <Header />

      {/* Logo */}
      <div className="text-center mt-4">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>

      <div className="container py-5">
        <div className="row g-5 align-items-start product-details-wrapper">
          {/* Left Side - Product Details */}
          <div className="col-lg-5 text-center product-section">
            <div className="product-card shadow-lg rounded-4">
              <img
                src={sampleImage}
                alt="Product"
                className="product-preview-img"
              />
              <h4 className="fw-bold mt-3 product-title">
                {formData.product}
              </h4>
              <p className="product-desc">
                Freshly harvested, export-grade mangoes with rich flavor and
                natural sweetness. Perfect for international markets and premium
                retail stores.
              </p>
              <div className="product-info">
                <p><strong>Category:</strong> Fresh Fruits</p>
                <p><strong>Availability:</strong> In Stock</p>
                <p><strong>Minimum Order:</strong> 100 Kg</p>
              </div>
            </div>
          </div>

          {/* Right Side - Inquiry Form */}
          <div className="col-lg-7">
            <div className="form-container shadow-lg p-4 rounded-4 bg-white">
              <h3 className="mb-4 text-primary">Request a Quote</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3 input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3 input-with-icon">
                  <FaPhone className="input-icon" />
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                <div className="mb-3 input-with-icon">
                  <FaBoxOpen className="input-icon" />
                  <input
                    type="text"
                    className={`form-control ${
                      errors.product ? "is-invalid" : ""
                    }`}
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                  />
                  {errors.product && (
                    <div className="invalid-feedback">{errors.product}</div>
                  )}
                </div>

                <div className="row g-2 mb-3">
                  <div className="col input-with-icon">
                    <FaClipboardList className="input-icon" />
                    <input
                      type="number"
                      className={`form-control ${
                        errors.quantity ? "is-invalid" : ""
                      }`}
                      name="quantity"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                    {errors.quantity && (
                      <div className="invalid-feedback">{errors.quantity}</div>
                    )}
                  </div>
                  <div className="col">
                    <select
                      className="form-select"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                    >
                      <option value="kg">Kg</option>
                      <option value="ton">Ton</option>
                      <option value="box">Box</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    name="message"
                    rows="4"
                    placeholder="Write your requirements or special instructions..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 submit-btn"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
