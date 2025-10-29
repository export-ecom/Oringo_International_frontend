import React, { useState } from "react";
import StatusFilter from "./StatusFilter";
import "./ProductList.css";
import ProductSidebar from "./ProductSidebar";
import { sampleProducts } from "../../../constants/products";
import threedots from "../../../assets/threedots.jpeg";
const ProductList = () => {
    const [productSearch, setProductSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [showSidebar, setShowSidebar] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [viewingProduct, setViewingProduct] = useState(null);
    const [products, setProducts] = useState(sampleProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);
    const itemsPerPage = 5;

    const [categories] = useState([
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
    ]);

    const handleAddProduct = () => {
        setEditingProduct(null);
        setShowSidebar(true);
    };

    const handleSaveProduct = (product) => {
        if (editingProduct) {
            setProducts((prev) =>
                prev.map((p) =>
                    p.id === editingProduct.id
                        ? { ...p, ...product, images: product.images || p.images || [] }
                        : p
                )
            );
        } else {
            setProducts((prev) => [
                ...prev,
                { ...product, id: Date.now(), images: product.images || [] },
            ]);
        }
        setShowSidebar(false);
    };



    const handleRemoveProduct = (productName) => {
        setProducts(products.filter((p) => p.name !== productName));
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setShowSidebar(true);
    };

    const handleViewProduct = (product) => {
        setViewingProduct(product);
    };

    const toggleFavourite = (productName) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.name === productName ? { ...p, favourite: !p.favourite } : p
            )
        );
    };

    // Pagination logic
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className="Product-list-Section">
            <div className="Product-header">
                {/* Web Header */}
                <h4>Products</h4>

                <div className="search-status-product">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        value={productSearch}
                        onChange={(e) => setProductSearch(e.target.value)}
                        style={{ marginBottom: "10px", padding: "5px" }}
                    />

                    <StatusFilter onSelectStatus={(status) => setStatusFilter(status)} />

                    <button
                        style={{ width: "200px", whiteSpace: "nowrap" }}
                        onClick={handleAddProduct}
                    >
                        + Add Product
                    </button>
                </div>

                {/* Mobile Header */}
                <div className="for-mobile-view">
                    <h4>Products</h4>
                    <img
                        src={threedots}
                        alt="menu"
                        onClick={() => setShowMobileDropdown((prev) => !prev)}
                    />
                </div>

                {/* Mobile Dropdown */}
                {showMobileDropdown && (
                    <div className="mobile-dropdown">
                        <input
                            type="text"
                            placeholder="Search Products..."
                            value={productSearch}
                            onChange={(e) => setProductSearch(e.target.value)}
                        />
                        <StatusFilter onSelectStatus={(status) => setStatusFilter(status)} />
                        <button onClick={handleAddProduct}>+ Add Product</button>
                    </div>
                )}
            </div>


            {/* ===== TABLE ===== */}
            <div className="Table-Data">
                {products.length === 0 ? (
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                        No products yet. Add one using the button above.
                    </p>
                ) : (
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginTop: "15px",
                        }}
                    >
                        <thead>
                            <tr style={{ background: "#f4f4f4" }}>
                                <th>
                                    <input type="checkbox" />
                                </th>
                                <th>Photo</th>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Favourite</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((product) => (
                                <tr key={product.id} style={{ borderBottom: "1px solid #ddd" }}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        {product.images && product.images.length > 0 ? (
                                            <img
                                                src={product.images[0]} // show first image in table
                                                alt={product.name}
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px",
                                                }}
                                            />
                                        ) : (
                                            <span>—</span>
                                        )}

                                    </td>

                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: product.favourite ? "gold" : "#ccc",
                                                fontSize: "20px",
                                            }}
                                            onClick={() => toggleFavourite(product.name)}
                                        >
                                            ★
                                        </span>
                                    </td>
                                    <td style={{ position: "relative" }}>
                                        <ThreeDotMenu
                                            onEdit={() => handleEditProduct(product)}
                                            onRemove={() => handleRemoveProduct(product.name)}
                                            onView={() => handleViewProduct(product)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* ===== PAGINATION ===== */}
            {products.length > itemsPerPage && (
                <div
                    style={{
                        marginTop: "20px",
                        textAlign: "center",
                    }}
                >
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            style={{
                                margin: "0 5px",
                                padding: "5px 10px",
                                border:
                                    currentPage === i + 1 ? "2px solid #007bff" : "1px solid #ccc",
                                background:
                                    currentPage === i + 1 ? "#007bff" : "transparent",
                                color: currentPage === i + 1 ? "#fff" : "#000",
                                borderRadius: "5px",
                            }}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}

            {/* Sidebar for Add/Edit */}
            <ProductSidebar
                show={showSidebar}
                onClose={() => setShowSidebar(false)}
                categories={categories}
                onSave={handleSaveProduct}
                product={editingProduct}
            />

            {/* View Product Modal */}
            {viewingProduct && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 200,
                    }}
                    onClick={() => setViewingProduct(null)}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "400px",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>{viewingProduct.name}</h3>
                        {viewingProduct.images && viewingProduct.images.length > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}
                            >
                                {viewingProduct.images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${viewingProduct.name}-${index}`}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                        }}
                                    />
                                ))}
                            </div>
                        )}

                        <p>
                            <b>Category:</b>{" "}
                            {
                                categories.find((c) => c.id === viewingProduct.categoryId)
                                    ?.name
                            }
                        </p>
                        <p>
                            <b>Price:</b> ₹{viewingProduct.price}
                        </p>
                        <p>
                            <b>Quantity:</b> {viewingProduct.quantity}
                        </p>
                        <p>
                            <b>Stock:</b>{" "}
                            {viewingProduct.stock ? "Available" : "Out of Stock"}
                        </p>
                        <p>
                            <b>Origin:</b> {viewingProduct.originCountry}
                        </p>
                        <p>
                            <b>Description:</b> {viewingProduct.description}
                        </p>

                        <button
                            onClick={() => setViewingProduct(null)}
                            style={{
                                marginTop: "10px",
                                background: "#007bff",
                                color: "#fff",
                                border: "none",
                                padding: "8px 12px",
                                borderRadius: "5px",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// ===== 3 Dot Menu Component =====
const ThreeDotMenu = ({ onEdit, onRemove, onView }) => {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <span
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer", fontSize: "20px" }}
            >
                ⋮
            </span>
            {open && (
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "25px",
                        background: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                        zIndex: 100,
                        width: "200px"
                    }}
                >
                    <p
                        style={{ padding: "8px", margin: 0, cursor: "pointer" }}
                        onClick={() => {
                            onEdit();
                            setOpen(false);
                        }}
                    >
                        <span>✏️</span>Edit Product
                    </p>
                    <p
                        style={{ padding: "8px", margin: 0, cursor: "pointer" }}
                        onClick={() => {
                            onView();
                            setOpen(false);
                        }}
                    >
                        <span>👁️</span>View Product
                    </p>
                    <p
                        style={{ padding: "8px", margin: 0, cursor: "pointer", color: "red" }}
                        onClick={() => {
                            onRemove();
                            setOpen(false);
                        }}
                    >
                        <span>🗑️</span>Remove Product
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductList;
