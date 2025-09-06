import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QuotationForm from "../../components/QuotationForm";
import API from "../../api/api";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function ProductDetailPage() {
  const { user } = useAuth();
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]);

  // Fetch categories
  useEffect(() => {
    API.get("/products/categories/")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  // Fetch product and similar products
  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(null);
      setCurrentIndex(0);
      setQuantity(1);
      try {
        const res = await API.get(`/products/products/${id}/`);
        const prod = res.data;
        setProduct(prod);

        if (prod.category) {
          const allRes = await API.get("/products/products/");
          const similar = allRes.data.filter(
            (p) => p.category?.id === prod.category.id && p.id !== prod.id
          );
          setSimilarProducts(similar);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      await addToCart(product.id, quantity);
      alert(`Added ${quantity} item(s) to cart!`);
    } catch (err) {
      console.error(err);
      alert("Error adding to cart.");
    }
  };

  if (!product) return <p className="loading">Loading product...</p>;

  const mainImage = product.images?.[currentIndex]?.image || "/placeholder.png";
  console.log(product)
  return (
    <div className="page-container" key={id}>
      <Header />

      <div className="product-detail-layout">
        {/* LEFT - Image Gallery */}
        <div className="product-detail">
          <div className="image-gallery-wrapper">
            <div className="thumbnail-column">
              {product.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`thumbnail ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
            <div className="image-gallery">
              <img src={mainImage} alt={product.name} className="main-image" draggable={false} />
            </div>
          </div>

          {/* RIGHT - Product Info */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <h6 className="MRP"><strong>MRP:</strong> ₹{product.price}</h6>
            {product.discountedPrice && (
              <p className="discount">Discounted Price: ₹{product.discountedPrice}</p>
            )}
            {/* <h6><strong>Export MOQ:</strong> {product.exportMOQ}</h6> */}
            <h6><strong>category:</strong> {product.category.name}</h6>
            <h6><strong>Available in:</strong> {product.quantity_available}</h6>
            <h6><strong>description:</strong> {product.description}</h6>
            <h6><strong>origin_country:</strong> {product.origin_country}</h6>
            <p><strong>unit:</strong> {product.unit}</p>
            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button className="qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            {/* Action Buttons */}
            <div className="product-buttons">
              <Link to="/inquiry" className="inquiry-btn">Send Inquiry</Link>
              {user ? (
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  🛒 Add {quantity} to Cart
                </button>
              ) : (
                <Link to="/auth" className="add-to-cart-btn">🔒 Login to Add to Cart</Link>
              )}
            </div>
          </div>
        </div>

        {/* Quotation Form */}
        <div className="quotation-section">
          <QuotationForm categories={categories.map(c => c.name)} products={[product, ...similarProducts]} />
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map(sp => (
              <div className="similar-card" key={sp.id}>
                <Link to={`/products/${sp.id}`}>
                  <img src={sp.images?.[0]?.image || "/placeholder.png"} alt={sp.name} />
                  <h3>{sp.name}</h3>
                  <p>₹{sp.discountedPrice || sp.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
