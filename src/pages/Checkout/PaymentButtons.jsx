import React from "react";
import { sendWhatsAppOrder, handleRazorpayPayment } from "./helpers";

const PaymentButtons = ({ customer, cartItems, totalPrice }) => {
    return (
        <div className="payment-buttons flex gap-4 mt-4">
            {/* Show COD button only if customer selected COD */}
            {customer.paymentMethod === "cod" && (
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    onClick={() => sendWhatsAppOrder(customer, cartItems, totalPrice)}
                >
                    Place Order (COD)
                </button>
            )}

            {/* Show Online button only if customer selected Online */}
            {customer.paymentMethod === "prepaid" && (
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => handleRazorpayPayment(customer, cartItems, totalPrice)}
                >
                    Pay Online
                </button>
            )}
        </div>
    );
};

export default PaymentButtons;
