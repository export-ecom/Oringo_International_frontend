import React, { useEffect, useState } from "react";
import API from "../../api/api";
import CustomerForm from "./CustomerForm";
import OrderSummary from "./OrderSummary";
import PaymentButtons from "./PaymentButtons";
import "./Checkout.css";
import Header from "../../components/Header/Header";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await API.get("/cart/");
        setCartItems(res.data || []);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product_detail.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (loading) return <p>Loading checkout...</p>;

  return (
    <div className="page-container">
        <Header />
    <div className="checkout-page">
      <h2>Checkout</h2>
      <CustomerForm customer={customer} setCustomer={setCustomer} />
      <OrderSummary cartItems={cartItems} totalItems={totalItems} totalPrice={totalPrice} />
      <PaymentButtons
        customer={customer}
        cartItems={cartItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
    </div>
    </div>
  );
};

export default Checkout;
