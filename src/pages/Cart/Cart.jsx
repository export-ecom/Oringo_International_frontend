import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CartPage.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price dynamically
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + (item.product_detail?.discountedPrice || item.product_detail?.price || 0) * item.quantity,
    0
  );

  // Total number of products (sum of quantities)
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const getImageUrl = (item) => {
    const images = item.product_detail?.images; // changed here
    if (!images || images.length === 0) return "/placeholder.png";

    // If first item is an object with 'image' key
    if (typeof images[0] === "object" && images[0]?.image) return images[0].image;

    // If first item is a string URL
    if (typeof images[0] === "string") return images[0];

    return "/placeholder.png"; // fallback
  };


  return (
    <div className="page-container">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">🛒 Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products" className="shop-now-btn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={getImageUrl(item)}
                    alt={item.product_detail?.name || "Product"}

                    className="cart-img"
                  />
                  <div className="cart-info">
                    <h2>{item.product_detail?.name || "Product"}</h2>

                    <p className="price">
                      ₹{item.product_detail?.discountedPrice || item.product_detail?.price || 0}
                    </p>


                    {/* Quantity Selector */}
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                      />
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="subtotal">
                      Subtotal: ₹
                      {(item.product_detail?.discountedPrice || item.product_detail?.price || 0) *
                        item.quantity}
                    </p>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-details">
                <p>Items: <span>{totalItems}</span></p>
                <p>Total Price: <span>₹{totalPrice}</span></p>
              </div>
              <Link to="/checkout" className="checkout-btn">Proceed to Checkout →</Link>
            </div>

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
