import React, { useState } from "react";
import "./CategoryManagement.css";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Mobiles, laptops, and gadgets" },
    { id: 2, name: "Fashion", description: "Clothing and accessories" },
    { id: 3, name: "Home & Kitchen", description: "Furniture, decor, utensils" },
  ]);

  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAddOrEdit = () => {
    if (!newCategory.name.trim()) return alert("Category name is required");

    if (editingId) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingId ? { ...cat, ...newCategory } : cat
        )
      );
      setEditingId(null);
    } else {
      setCategories([
        ...categories,
        { id: Date.now(), ...newCategory },
      ]);
    }

    setNewCategory({ name: "", description: "" });
  };

  const handleEdit = (cat) => {
    setNewCategory({ name: cat.name, description: cat.description });
    setEditingId(cat.id);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="category-container">
      <h1 className="category-title">Category Management</h1>

      {/* Add/Edit Form */}
      <div className="category-form">
        <input
          type="text"
          placeholder="Category Name"
          value={newCategory.name}
          onChange={(e) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
        <button onClick={handleAddOrEdit}>
          {editingId ? "Update Category" : "Add Category"}
        </button>
      </div>

      {/* Table/List */}
      <div className="category-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat, index) => (
              <tr key={cat.id}>
                <td>{index + 1}</td>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                <td className="category-actions">
                  <button className="edit-btn" onClick={() => handleEdit(cat)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(cat.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryManagement;
