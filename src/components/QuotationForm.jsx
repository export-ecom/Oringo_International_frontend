import React, { useState } from "react";
// import "./QuotationForm.css";

export default function QuotationForm({ categories, products }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    country: "",
    category: "",
    product: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quotation Request:", formData);
    alert("Quotation request submitted!");
  };

  // Filter products based on selected category
  const filteredProducts =
    formData.category && formData.category !== "All"
      ? products.filter((p) => p.category === formData.category)
      : products;

  return (
    <div className="quotation-form-container">
      <h3 className="form-title">Get Free Quotation</h3>
      <form onSubmit={handleSubmit} className="quotation-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact No. *"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country *"
          value={formData.country}
          onChange={handleChange}
          required
        />

        {/* Category Dropdown */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Product Dropdown */}
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Product --</option>
          {filteredProducts.map((prod) => (
            <option key={prod.id} value={prod.name}>
              {prod.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="quantity"
          placeholder="Quantity in Kg"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
