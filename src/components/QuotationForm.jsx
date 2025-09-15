import React, { useState } from "react";

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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "category" ? { product: "" } : {}), // Reset product when category changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/quotations/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Quotation request submitted successfully!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          country: "",
          category: "",
          product: "",
          quantity: "",
        });
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // ✅ Log props inside component (correct way)
  console.log("Products:", products);
  console.log("Categories:", categories);
  console.log("Selected Category:", formData.category);

  // ✅ Filter products based on selected category
 const filteredProducts =
  formData.category && formData.category !== "All"
    ? products.filter((p) => 
        p.category?.name?.toLowerCase() === formData.category?.toLowerCase()
      )
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
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => (
              <option key={prod.id} value={prod.name}>
                {prod.name}
              </option>
            ))
          ) : (
            <option disabled>No products available</option>
          )}
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
