import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase, provided the product is in its original condition."
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 5-7 business days depending on your location."
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Additional charges may apply."
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you will receive a tracking link via email once your order is shipped."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
        <Header />
      <div className="faq-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Export-ecom
        </button>

        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-intro">
          Here you’ll find answers to the most common questions about our
          products, shipping, and policies. Click a question to see the answer.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
    
  );
};

export default FAQ;
