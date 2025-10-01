import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is the best service I've ever used!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Highly recommend to everyone.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    feedback: "Very professional and reliable team.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sarah Khan",
    feedback: "Excellent quality and fast delivery!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section py-5 text-center">
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={t.image}
              alt={t.name}
              className="testimonial-avatar"
            />
            <p className="testimonial-feedback">"{t.feedback}"</p>
            <span className="testimonial-name">- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
