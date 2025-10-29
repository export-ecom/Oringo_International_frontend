import React, { useState, useEffect, useRef } from "react";

const ProductSidebar = ({ show, onClose, categories, onSave, product }) => {
  const [productForm, setProductForm] = useState({
    name: "",
    categoryId: "",
    description: "",
    price: "",
    stock: true,
    quantity: "",
    originCountry: "",
    images: [],
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (product) {
      setProductForm(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm({
      ...productForm,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    ).then((imageURLs) => {
      setProductForm((prev) => ({
        ...prev,
        images: [...prev.images, ...imageURLs],
      }));
    });
  };




  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    const event = { target: { files } };
    handleFileChange(event);
  };


  const handleRemoveImage = (index) => {
    setProductForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    const completeProduct = {
      ...product,
      ...productForm,
      images: productForm.images || [],
    };
    onSave(completeProduct);
    onClose();
  };


  if (!show) return null;

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "400px",
          height: "100vh",
          background: "#fff",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
          padding: "20px",
          zIndex: 100,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h5 style={{ marginBottom: "15px" }}>
          {product ? "Edit Product" : "New Product"}
        </h5>
        <p style={{ fontSize: "15px", color: "gray" }}>
          Add information and add new product.
        </p>

        <label>
          Product Name*:
          <input
            type="text"
            name="name"
            value={productForm.name}
            onChange={handleChange}
            required
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          />
        </label>

        <label>
          Category*:
          <select
            name="categoryId"
            value={productForm.categoryId}
            onChange={handleChange}
            required
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={productForm.description}
            onChange={handleChange}
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          />
        </label>

        <label>
          Price*:
          <input
            type="number"
            name="price"
            value={productForm.price}
            onChange={handleChange}
            required
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          />
        </label>

        <label>
          Stock:
          <input
            type="checkbox"
            name="stock"
            checked={productForm.stock}
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />
        </label>

        <label style={{ marginTop: "10px" }}>
          Quantity*:
          <input
            type="number"
            name="quantity"
            value={productForm.quantity}
            onChange={handleChange}
            required
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          />
        </label>

        <label>
          Origin Country:
          <input
            type="text"
            name="originCountry"
            value={productForm.originCountry}
            onChange={handleChange}
            style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}
          />
        </label>

        {/* --- Drag & Drop Upload Section --- */}
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
          style={{
            border: "2px dashed #aaa",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            color: "#666",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          <p>📁 Drag & Drop or Click to Upload Multiple Images</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {/* Image Previews */}
        {productForm.images.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            {productForm.images.map((img, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #ccc",
                }}
              >
                <img
                  src={img}
                  alt={`Product ${index}`}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveImage(index);
                  }}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            onClick={handleSubmit}
            style={{
              background: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            onClick={onClose}
            style={{
              padding: "10px 15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.3)",
          zIndex: 50,
        }}
      />
    </>
  );
};

export default ProductSidebar;
