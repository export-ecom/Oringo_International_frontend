import React from "react";

const OrderSummary = ({ cartItems, totalItems, totalPrice }) => (
    <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems && cartItems.length > 0 ? (
            <>
                {cartItems.map((item) => (
                    <div key={item.id} className="order-item">
                        <p>
                            <strong>{item.product_detail.name}</strong> (x{item.quantity})
                        </p>
                        <p>Brand: {item.product_detail.brand || "N/A"}</p>
                        <p>SKU: {item.product_detail.id}</p>
                        <p>Price: ₹{item.product_detail.price}</p>
                        <p>Subtotal: ₹{item.product_detail.price * item.quantity}</p>
                        <hr />
                    </div>
                ))}
                <p>
                    <strong>Total Items:</strong> {totalItems}
                </p>
                <p>
                    <strong>Total Price:</strong> ₹{totalPrice}
                </p>
            </>
        ) : (
            <p>Your cart is empty.</p>
        )}
    </div>
);

export default OrderSummary;
