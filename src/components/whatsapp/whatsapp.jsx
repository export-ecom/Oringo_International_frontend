import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css";

function Whatsapp() {
  const phoneNumber = "919637104850";
  const message = "Hello! I’d like to know more about your services.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-label">Chat with us</div>
      <button
        type="button"
        className="whatsapp-btn"
        onClick={handleClick}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}

export default Whatsapp;
