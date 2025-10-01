import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Verification from "../../assets/verification.png";
import leftarrow from "../../assets/leftarrow.png";
import rightarrow from "../../assets/rightarrow.png";
import './Feedback.css';

function Feedback() {
  const [startIndex, setStartIndex] = useState(0); // start of visible 3 cards
  const visibleCount = 3;

const feedbacks = [
  {
    name: "Alex.T",
    rating: 4.5,
    verified: true,
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "Maria.S",
    rating: 5,
    verified: true,
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "John.D",
    rating: 4,
    verified: false,
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "Linda.K",
    rating: 4.5,
    verified: true,
    review: "Excellent service and quality! I will definitely shop again. Highly recommended for everyone looking for trendy outfits."
  },
  {
    name: "Robert.P",
    rating: 5,
    verified: true,
    review: "Good experience overall. The delivery was quick and the clothes fit perfectly."
  },
  {
    name: "Sophia.L",
    rating: 4,
    verified: true,
    review: "I love the variety and quality. Every purchase feels premium, and the customer service is top-notch."
  },
  {
    name: "Michael.B",
    rating: 5,
    verified: true,
    review: "Absolutely fantastic! From ordering to delivery, everything was seamless. Highly recommended."
  },
  {
    name: "Emma.W",
    rating: 4.5,
    verified: true,
    review: "The styles are so trendy and the fabric feels amazing. I'm very satisfied with my purchase."
  },
  {
    name: "Daniel.K",
    rating: 4,
    verified: true,
    review: "Fast shipping, quality packaging, and the clothes fit perfectly. Definitely ordering again."
  },
  {
    name: "Olivia.R",
    rating: 5,
    verified: true,
    review: "I couldn't be happier with my experience. Every item exceeded my expectations. Highly recommended!"
  }
];



  const handleNext = () => {
    if (startIndex + visibleCount < feedbacks.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const getStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-gold-500" />);
    if (hasHalfStar) stars.push(<FaStarHalfAlt key="half" className="text-gold-500" />);
    for (let i = stars.length; i < totalStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);

    return stars;
  };

  return (
    <div className="customers-stories">
      <div className="customer-cheers">
        <h1 className="customer-title">OUR HAPPY CUSTOMERS</h1>
        <div className="changineg-cards">
          {/* <button onClick={handlePrev}>&larr;</button>
          <button >&rarr;</button> */}
          <img src = {leftarrow} onClick={handlePrev}></img>
          <img src = {rightarrow}onClick={handleNext}></img>
        </div>
      </div>

      <div className="cards-row">
        {feedbacks.map((item, index) => {
          // Determine blur effect
          const isVisible = index >= startIndex && index < startIndex + visibleCount;
          const isOverflow = index === startIndex - 1 || index === startIndex + visibleCount;

          return (
            <div
              key={index}
              className={`feedback-card ${isVisible ? "" : isOverflow ? "blur-card" : "hidden-card"}`}
            >
              <div className="rating-star">{getStars(item.rating)}</div>
              <div className="name-of-the-customer">
                <h6>{item.name}</h6>
                {item.verified && <img src={Verification} alt="Verified" />}
              </div>
              <p className="customer-review">{item.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;
