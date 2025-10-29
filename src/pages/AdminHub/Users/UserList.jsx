import React, { useState } from "react";
import { FiTrash2, FiEye } from "react-icons/fi";
import "./UserList.css";

const initialUsers = [
  {
    id: 1,
    username: "meharaj",
    firstName: "Mohammad",
    lastName: "Meharaj",
    email: "meharaj@example.com",
    registeredAt: "2025-09-21 09:00 AM",
  },
  {
    id: 2,
    username: "karishma",
    firstName: "Mohammad",
    lastName: "Karishma",
    email: "karishma@example.com",
    registeredAt: "2025-10-02 06:45 PM",
  },
  {
    id: 3,
    username: "saniya",
    firstName: "Mohammad",
    lastName: "Saniya",
    email: "saniya@example.com",
    registeredAt: "2025-10-20 11:30 AM",
  },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handleView = (user) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  return (
    <div className="users-container">
      <h2>User Management</h2>

      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <div className="users-table">
          <div className="users-header">
            <span>Username</span>
            <span>First Name</span>
            <span>Last Name</span>
            <span>Email</span>
            <span>Registered Date & Time</span>
            <span>Actions</span>
          </div>

          {users.map((user) => (
            <div key={user.id} className="users-row">
              <span data-label="Username">{user.username}</span>
              <span data-label="First Name">{user.firstName}</span>
              <span data-label="Last Name">{user.lastName}</span>
              <span data-label="Email">{user.email}</span>
              <span data-label="Registered Date & Time">{user.registeredAt}</span>
              <span className="actions-cell" data-label="Actions">
                <FiEye
                  className="view-icon"
                  onClick={() => handleView(user)}
                  title="View Details"
                />
                <FiTrash2
                  className="delete-icon"
                  onClick={() => handleDelete(user.id)}
                  title="Delete User"
                />
              </span>
            </div>
          ))}
        </div>
      )}

      {selectedUser && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>User Details</h3>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>First Name:</strong> {selectedUser.firstName}</p>
            <p><strong>Last Name:</strong> {selectedUser.lastName}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Registered At:</strong> {selectedUser.registeredAt}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
