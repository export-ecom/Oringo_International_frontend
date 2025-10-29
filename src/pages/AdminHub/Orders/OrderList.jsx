import React, { useState } from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import "./OrderList.css";

const initialOrders = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    itemName: "Product 1",
    amount: "$50",
    orderDate: "2025-10-11",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    phone: "9876543210",
    itemName: "Product 2",
    amount: "$80",
    orderDate: "2025-10-10",
  },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prev) => prev.filter((order) => order.id !== id));
    }
  };

  const handleView = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <div className="orders-table">
          <div className="orders-header">
            <span>Full Name</span>
            <span>Email</span>
            <span>Phone Number</span>
            <span>Item Name</span>
            <span>Amount</span>
            <span>Order Date</span>
            <span>Actions</span>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="orders-row">
              <span data-label="Full Name">{order.fullName}</span>
              <span data-label="Email">{order.email}</span>
              <span data-label="Phone Number">{order.phone}</span>
              <span data-label="Item Name">{order.itemName}</span>
              <span data-label="Amount">{order.amount}</span>
              <span data-label="Order Date">{order.orderDate}</span>
              <span className="actions-cell" data-label="Actions">
                <FiEye
                  className="view-icon"
                  onClick={() => handleView(order)}
                  title="View Details"
                />
                <FiTrash2
                  className="delete-icon"
                  onClick={() => handleDelete(order.id)}
                  title="Delete Order"
                />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Order Details</h3>
            <p><strong>Full Name:</strong> {selectedOrder.fullName}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
            <p><strong>Item Name:</strong> {selectedOrder.itemName}</p>
            <p><strong>Amount:</strong> {selectedOrder.amount}</p>
            <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderList;
