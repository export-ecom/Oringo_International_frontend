import API from "../../api/api";

// ✅ Send COD order + WhatsApp
export const sendWhatsAppOrder = async (customer, cartItems, totalPrice) => {
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
        alert("Please fill all your details before proceeding.");
        return;
    }

    try {
        // 1️⃣ Save order in backend
        const res = await API.post("/orders/place-order/", {
            full_name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            city: customer.city || "N/A",
            state: customer.state || "N/A",
            pincode: customer.pincode || "000000",
            payment_method: "cod",
        });

        const order = res.data;

        // 2️⃣ WhatsApp notification to admin
        const adminNumber = "919637104850";
        const itemsText = cartItems
            .map(
                (item, idx) =>
                    `#${idx + 1} - ${item.product_detail.name} x ${item.quantity} @ ₹${item.product_detail.price}`
            )
            .join("\n");

        const message = `
🛒 *New COD Order*

👤 Customer: ${order.full_name}
📧 Email: ${order.email}
📱 Phone: ${order.phone}
🏠 Address: ${order.address}, ${order.city}, ${order.state}, ${order.pincode}
💳 Payment Method: COD

📦 Items:
${itemsText}

💰 Total: ₹${totalPrice}
`;

        window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`, "_blank");
        alert("Order sent successfully! Admin will contact you for payment if needed.");
    } catch (err) {
        console.error("Order error:", err.response?.data || err);
        alert(err.response?.data?.error || "Failed to place order. Try again.");
    }
};

// ✅ Handle Razorpay payment + WhatsApp
export const handleRazorpayPayment = async (customer, cartItems, totalPrice) => {
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
        alert("Please fill all your details before proceeding.");
        return;
    }

    try {
        // 1️⃣ Save order in backend
        const res = await API.post("/orders/place-order/", {
            full_name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            city: customer.city || "N/A",
            state: customer.state || "N/A",
            pincode: customer.pincode || "000000",
            payment_method: "prepaid",
        });

        const order = res.data;

        // 2️⃣ Create Razorpay order
        const { data } = await API.post("/payments/create-order/", {
            order_id: order.id,
            total_amount: totalPrice,
        });

        const options = {
            key: data.key,
            amount: data.amount,
            currency: data.currency,
            name: "Your Shop Name",
            description: "Order Payment",
            order_id: data.order_id,
            handler: async function (response) {
                try {
                    // 3️⃣ Verify payment
                    await API.post("/payments/verify-payment/", {
                        ...response,
                        order_id: order.id,
                    });

                    // 4️⃣ WhatsApp notification to admin
                    const adminNumber = "917995950354";
                    const itemsText = cartItems
                        .map(
                            (item, idx) =>
                                `#${idx + 1} - ${item.product_detail.name} x ${item.quantity} @ ₹${item.product_detail.price}`
                        )
                        .join("\n");

                    const message = `
🛒 *New Online Order*

👤 Customer: ${order.full_name}
📧 Email: ${order.email}
📱 Phone: ${order.phone}
🏠 Address: ${order.address}, ${order.city}, ${order.state}, ${order.pincode}
💳 Payment Method: Paid (Online)

📦 Items:
${itemsText}

💰 Total Paid: ₹${totalPrice}
`;
                    window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`, "_blank");
                    alert("Payment Successful & order sent to admin!");
                } catch (err) {
                    console.error("Payment verification error:", err);
                    alert("Payment verification failed. Contact support.");
                }
            },
            prefill: {
                name: customer.name,
                email: customer.email,
                contact: customer.phone,
            },
            theme: { color: "#3399cc" },
            modal: { escape: false },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (err) {
        console.error("Razorpay order error:", err.response?.data || err);
        alert(err.response?.data?.error || "Failed to initiate payment. Try again.");
    }
};
