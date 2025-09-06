import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2>Our Details</h2>
      <p>
        <strong>Address:</strong><br />
        758-85/2 Guru Center,<br />
        Gurugram, Haryana — 122011
      </p>
      <p>
        <strong>License:</strong><br />
        Business License: GJD-85948933<br />
        GST: 12ABCDE3456F7Z8
      </p>
      <p>
        <strong>Office Hours:</strong><br />
        Mon – Fri: 9:30 AM – 6:00 PM
      </p>
    </div>
  );
};

export default ContactInfo;
