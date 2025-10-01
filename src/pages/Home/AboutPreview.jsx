import React, { useState } from "react";
import { Link } from "react-router-dom";
import abt from "../../assets/abt.png";
import "./AboutPreview.css";

function AboutPreview() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setStyle({
      transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <section className="about-preview my-5">
      <div className="about-content">
        <div
          className="about-img-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={abt}
            alt="About Us"
            className="about-img"
            style={style}
          />
        </div>

        <div className="about-text-wrapper">
          <h2 className="fw-bold mb-3 fade-in">About Us</h2>
          <p className="about-text fade-in-delay">
            Welcome to our export-focused marketplace, your trusted destination
            for premium quality Indian products. We connect global buyers with
            authentic Indian craftsmanship, textiles, and spiritual goods.
          </p>
          <Link to="/about" className="btn btn-modern mt-2">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
