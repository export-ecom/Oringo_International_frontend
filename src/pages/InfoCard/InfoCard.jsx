import React from "react";
import './InfoCard.css';

function InfoCard({ image, title }) {
    return (
        <div className=" info-card-section">
            <img src={image} alt={title} />
            <h3 style={{ fontSize: "40px", fontFamily: "Abhaya Libre, serif", fontWeight: "800" }}>{title}</h3>
        </div>
    );
}

export default InfoCard;
