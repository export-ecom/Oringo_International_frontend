// src/api/cartApi.js
import API from "./api";

export const apiAddToCart = (productId, quantity = 1) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> b6009721fda1d2d1c7208b717ec483229da05194
};
