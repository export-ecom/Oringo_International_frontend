import React from "react";
import "./CategoryPage.css";

export default function ProductCategory({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-filter">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
