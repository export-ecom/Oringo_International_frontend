// src/pages/AdminHub/Blogs/BlogManagement.jsx
import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import "./BlogList.css"; // we'll include responsive CSS

const initialFormState = {
  id: null,
  title: "",
  author: "",
  excerpt: "",
  content: "",
  image: null,
  metaTitle: "",
  metaDescription: "",
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);

  // Open sidebar for add
  const handleAddClick = () => {
    setFormData(initialFormState);
    setIsEditing(false);
    setIsSidebarOpen(true);
  };

  // Open sidebar for edit
  const handleEditClick = (blog) => {
    setFormData(blog);
    setIsEditing(true);
    setIsSidebarOpen(true);
  };

  // Delete blog
  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Save blog
  const handleSave = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.title || !formData.author || !formData.excerpt || !formData.content) {
      alert("Please fill all required fields.");
      return;
    }

    if (isEditing) {
      setBlogs(prev =>
        prev.map(blog => (blog.id === formData.id ? formData : blog))
      );
    } else {
      setBlogs(prev => [...prev, { ...formData, id: Date.now() }]);
    }

    setIsSidebarOpen(false);
    setFormData(initialFormState);
    setIsEditing(false);
  };

  return (
    <div className="blog-management-container">
      {/* Header */}
      <div className="blog-header">
        <h2>Blog Management</h2>
        <button className="add-blog-btn" onClick={handleAddClick}>
          <FiPlus /> Add Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="blog-list">
        {blogs.length === 0 && <p>No blogs added yet.</p>}
        {blogs.map(blog => (
          <div key={blog.id} className="blog-row">
            <div className="blog-info">
              <h4>{blog.title}</h4>
              <p>{blog.excerpt}</p>
              <small>Author: {blog.author}</small>
            </div>
            <div className="blog-actions">
              <button onClick={() => handleEditClick(blog)}>Edit</button>
              <button onClick={() => handleDeleteClick(blog.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="blog-sidebar">
          <div className="sidebar-header">
            <h3>{isEditing ? "Edit Blog" : "Add Blog"}</h3>
            <FiX className="close-icon" onClick={() => setIsSidebarOpen(false)} />
          </div>
          <form className="blog-form" onSubmit={handleSave}>
            <label>
              Title*:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Author*:
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Excerpt*:
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <label>
              Content*:
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <label>
              Image:
              <input type="file" name="image" onChange={handleChange} />
            </label>
            <label>
              Meta Title:
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </label>
            <label>
              Meta Description:
              <input
                type="text"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="save-btn">
              {isEditing ? "Update Blog" : "Save Blog"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogList;
