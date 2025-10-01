import React from "react";
import Emailimage from "../../assets/emailimg.png"
import "./LatestOfferCart.css";


function LatestOfferCart() {

    return(
        <div className="Offer-Card-Section">  
        <h2 className="typography-style">STAY UPTO DATE ABOUT OUR <br />LATEST OFFERS</h2>
        <div className="na-footer-offer">
            <div className="newsletter-email">
          <img src={Emailimage} className="img-email"></img>
                <h4>Enter your email address</h4>   
            </div>
            <div className="newsletter-subscribe">
                <h4>Subscribe to Newsletters</h4>   
            </div>
        </div>
        </div>
    );
}
export default LatestOfferCart;
