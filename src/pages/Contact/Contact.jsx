import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="page-container">
      <Header />

      <div className="container">
        <h1 className="contactTitle">Contact Us</h1>
        <p className="contactSubtitle">
          Have questions or need assistance? We’re here to help!
          Fill out the form below or reach us through our contact details.
        </p>
        <div className="contactHeaderRow">
          <h2 className="contactHeading">Get in Touch</h2>
          <a
            href="https://wa.me/919637104850"
            target="_blank"
            rel="noopener noreferrer"
            className="btnWhatsApp"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="contactGrid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
