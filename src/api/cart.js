import API from "./api";

export const addToCart = async (productId, quantity = 1) => {
    try {
        const res = await API.post("/cart/", { product: productId, quantity: quantity });
        setCart(prev => [...prev, res.data]);
        return res; // ✅ return response so frontend can access res.data
    } catch (err) {
        console.error("CartContext addToCart error:", err);
        throw err; // re-throw for frontend to handle
    }
};



export const getCart = async () => {
    return API.get("/cart/");
};
