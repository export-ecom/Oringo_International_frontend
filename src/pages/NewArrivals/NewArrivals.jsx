import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './NewArrivals.css';

function NewArrivals({ image, title, rating, discountrate, discountpercentage }) {

        const getStars = () => {
            const stars = [];
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            const totalStars = 5;
    
            for (let i = 0; i < fullStars; i++) {
                stars.push(<FaStar key={`full-${i}`} className="text-gold-500" />);
            }
    
            if (hasHalfStar) {
                stars.push(<FaStarHalfAlt key="half" className="text-gold-500" />);
            }
    
            const emptyStars = totalStars - stars.length;
            for (let i = 0; i < emptyStars; i++) {
                stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
            }
    
            return stars;
        };


    return (
        <div className="New-Arrivals-section">
            <div className="flex items-start text-left px-2 py-2 item-title">
                <h4 style={{ fontFamily: "Abhaya Libre, serif", fontWeight: "800", display: "flex" }}>
                    {title}
                </h4>
                <div className="star-value">
                    <div className=" items-center text-sm rating-star mt-1 star-rating">
                        {getStars()}
                        <span className="ml-2 rating-value">{rating}/5</span>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-2 price-section">
                    <h4 className="discount-ratetext">{discountrate}</h4>
                    <button className="percentage-button">
                        {discountpercentage}
                    </button>
                </div>
            </div>
            <img src={image} alt={title} />
        </div>
    );
}

export default NewArrivals;
