// src/api/cartApi.js
import API from "./api";

export const apiAddToCart = (productId, quantity = 1) => {
    return API.post("/cart/", { product: productId, quantity });
};

export const apiGetCart = () => {
    return API.get("/cart/");
};

export const apiRemoveFromCart = (cartId) => {
    return API.delete(`/cart/${cartId}/`);
};

export const apiUpdateQuantity = (cartId, quantity) => {
    return API.patch(`/cart/${cartId}/`, { quantity });
};
