import React, { useState } from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import "./QuotationList.css";

const initialQuotations = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    country: "USA",
    category: "Electronics",
    products: "Laptop",
    quantity: 5,
    quotedDate: "2025-10-11",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "9876543210",
    country: "India",
    category: "Furniture",
    products: "Chair",
    quantity: 10,
    quotedDate: "2025-10-10",
  },
];

const QuotationList = () => {
  const [quotations, setQuotations] = useState(initialQuotations);
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this quotation?")) {
      setQuotations((prev) => prev.filter((q) => q.id !== id));
    }
  };

  const handleView = (quotation) => {
    setSelectedQuotation(quotation);
  };

  const handleCloseModal = () => {
    setSelectedQuotation(null);
  };

  return (
    <div className="quotations-container">
      <h2>Quotation Requests</h2>
      {quotations.length === 0 ? (
        <p>No quotation requests available.</p>
      ) : (
        <div className="quotations-table">
          <div className="quotations-header">
            <span>Name</span>
            <span>Email</span>
            <span>Phone Number</span>
            <span>Country</span>
            <span>Category</span>
            <span>Products</span>
            <span>Quantity</span>
            <span>Quoted Date</span>
            <span>Actions</span>
          </div>
          {quotations.map((q) => (
            <div key={q.id} className="quotations-row">
              <span data-label="Name">{q.name}</span>
              <span data-label="Email">{q.email}</span>
              <span data-label="Phone">{q.phone}</span>
              <span data-label="Country">{q.country}</span>
              <span data-label="Category">{q.category}</span>
              <span data-label="Products">{q.products}</span>
              <span data-label="Quantity">{q.quantity}</span>
              <span data-label="Quoted Date">{q.quotedDate}</span>
              <span className="actions-cell" data-label="Actions">
                <FiEye
                  className="view-icon"
                  onClick={() => handleView(q)}
                  title="View Details"
                />
                <FiTrash2
                  className="delete-icon"
                  onClick={() => handleDelete(q.id)}
                  title="Delete Request"
                />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedQuotation && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Quotation Details</h3>
            <p><strong>Name:</strong> {selectedQuotation.name}</p>
            <p><strong>Email:</strong> {selectedQuotation.email}</p>
            <p><strong>Phone:</strong> {selectedQuotation.phone}</p>
            <p><strong>Country:</strong> {selectedQuotation.country}</p>
            <p><strong>Category:</strong> {selectedQuotation.category}</p>
            <p><strong>Products:</strong> {selectedQuotation.products}</p>
            <p><strong>Quantity:</strong> {selectedQuotation.quantity}</p>
            <p><strong>Quoted Date:</strong> {selectedQuotation.quotedDate}</p>
            <button className="close-btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationList;
