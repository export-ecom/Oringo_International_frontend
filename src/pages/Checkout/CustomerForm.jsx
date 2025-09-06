import React from "react";

const CustomerForm = ({ customer, setCustomer }) => (
    <div className="customer-form p-4 bg-white rounded shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Shipping & Billing Details</h3>

        <input
            type="text"
            placeholder="Full Name"
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="email"
            placeholder="Email"
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="text"
            placeholder="Phone"
            value={customer.phone}
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
            placeholder="Shipping Address"
            value={customer.address}
            onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="text"
            placeholder="City"
            value={customer.city || ""}
            onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="text"
            placeholder="State"
            value={customer.state || ""}
            onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="text"
            placeholder="Pincode"
            value={customer.pincode || ""}
            onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
            className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
            value={customer.paymentMethod}
            onChange={(e) =>
                setCustomer({ ...customer, paymentMethod: e.target.value })
            }
        >
            <option value="">Select Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="prepaid">Online Payment (Razorpay)</option>
        </select>

    </div >
);

export default CustomerForm;
