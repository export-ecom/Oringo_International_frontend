import React, { useState, useEffect, useMemo } from "react";
import ProductCategory from "./CategoryPage";
import { Link, useLocation } from "react-router-dom";
import "./ProductList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QuotationForm from "../../components/QuotationForm";
import API from "../../api/api"; // Axios instance with baseURL

export default function ProductListPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [lightboxImage, setLightboxImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);



  // ✅ Fetch categories
  useEffect(() => {
    API.get("/products/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("❌ Error fetching categories:", err));
  }, []);

  // ✅ Fetch products
  useEffect(() => {
    API.get("/products/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  // ✅ Sync category with query params
  useEffect(() => {
    setSelectedCategory(queryParams.get("category") || "");
  }, [location.search]);

  // ✅ Memoized derived state for performance
  const filteredAndSortedProducts = useMemo(() => {
    const selectedCategoryObj = categories.find(
      (c) => c.name === selectedCategory
    );

    // Filter by category
    let result = products.filter(
      (p) =>
        !selectedCategory ||
        p.category?.id === selectedCategoryObj?.id ||
        p.category?.name === selectedCategory
    );

    // Filter by search term
    if (searchTerm) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort logic
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case "priceLowHigh":
          return parseFloat(a.price) - parseFloat(b.price);
        case "priceHighLow":
          return parseFloat(b.price) - parseFloat(a.price);
        case "nameAZ":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [products, categories, selectedCategory, searchTerm, sortOption]);

  return (
    <div className="page-container">
      <Header />

      <main className="content-container">
        <h1 className="page-title">🛒 Our Products</h1>

        {/* Category filter */}
        <ProductCategory
          categories={categories.map((c) => c.name)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Search + Sort controls */}
        <div className="search-sort-container">
          <input
            type="search"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="priceLowHigh">Price: Low → High</option>
            <option value="priceHighLow">Price: High → Low</option>
            <option value="nameAZ">Name: A → Z</option>
          </select>
        </div>

        {/* Layout: Products + Quotation Form */}
        <div className="product-page-layout">
          <div className="products-section">
            {filteredAndSortedProducts.length === 0 ? (
              <p className="no-results">
                🚫 No products found in this category or matching search.
              </p>
            ) : (
              <div
                className={`product-grid ${filteredAndSortedProducts.length >= 4
                  ? "dynamic-grid"
                  : `count-${filteredAndSortedProducts.length}`
                  }`}
              >
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    setLightboxImage={setLightboxImage}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sticky quotation form */}
          <aside className="form-section">
            <QuotationForm
              categories={categories.map((c) => c.name)}
              products={products}
            />
          </aside>
        </div>
      </main>

      <Footer />

      {/* Image lightbox */}
      {lightboxImage && (
        <div className="image-lightbox" style={{ display: "flex" }}>
          <span
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </span>
          <img src={lightboxImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
}

// ----------------------
// 🖼️ ProductCard Component
// ----------------------
function ProductCard({ product, setLightboxImage }) {
  const [showDetails, setShowDetails] = useState(false);

  const imageUrl =
    product.images?.[0]?.image || "/placeholder.png";


  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={product.name}
        onClick={() => setLightboxImage(imageUrl)}
        className="clickable-img"
      />
      <h2>{product.name}</h2>
      <h6 className="price">₹{product.price}</h6>
      <h6 className="category"><strong>{product.category.name}</strong></h6>

      <h6><strong>description:</strong> {product.description}</h6>
      <h6 className="stock"><strong>Available:</strong> {product.quantity_available}</h6>

      {/* <button
        className="details-toggle"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {showDetails ? "▲ Hide Details" : "▼ View Details"}
      </button> */}

      {showDetails && (
        <div className="extra-details">
          <h6><strong>description:</strong> {product.description}</h6>
          <h6><strong>origin_country:</strong> {product.origin_country}</h6>
          <h6><strong>unit:</strong> {product.unit}</h6>
          {product.attributes &&
            Object.entries(product.attributes).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
        </div>
      )}

      <Link to={`/products/${product.id}`} className="inquiry-btn">
        ➕ Add to Inquiry
      </Link>
    </div>
  );
}
