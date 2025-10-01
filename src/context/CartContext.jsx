import React, { createContext, useContext, useState, useEffect } from "react";
import {
  apiAddToCart,
  apiGetCart,
  apiRemoveFromCart,
  apiUpdateQuantity,
} from "../api/cartApi";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await apiGetCart();
        setCart(res.data);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setCart([]);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (productId, quantity = 1) => {
    const res = await apiAddToCart(productId, quantity);
    setCart(prev => {
      const exists = prev.find(item => item.id === res.data.id);
      if (exists) {
        return prev.map(item => item.id === res.data.id ? res.data : item);
      } else {
        return [...prev, res.data];
      }
    });
  };

  const removeFromCart = async (id) => {
    try {
      await apiRemoveFromCart(id);
      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("CartContext removeFromCart error:", err);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const res = await apiUpdateQuantity(id, quantity);
      setCart((prev) => prev.map((item) => (item.id === id ? res.data : item)));
    } catch (err) {
      console.error("CartContext updateQuantity error:", err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
