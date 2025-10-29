import React from "react";
import { motion } from "framer-motion";
import Button from '../../components/Button/Button';

import Header from "../../components/Header/Header";
import AIAssistant from "../../components/AIAssistant/AIAssistant";
import Footer from "../../components/Footer/Footer";
import Features from "./Features";
import Testimonials from "./Testimonials";
import AboutPreview from "./AboutPreview";
import ProductPreview from "./ProductPreview";
import Achievements from "./Achievements";
import TeamPreview from "./TeamPreview";
import Certifications from "./Certification";
import DynamicMap from "./DynamicMap";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import bigstarshape from "../../assets/bigstarshape.png";
import SalesDiscountImage from "../../assets/SalesDiscountImage.png"
import smallstarshape from "../../assets/smallstarshape.png";
// import ContentCard from "../../components/ContentCard/ContentCard";
import Foods from '../../assets/Foods.png';
import Poojasamagri from '../../assets/poojasamagri.png';
import Handicrafts from '../../assets/Handicraft.png';
import Medicine from '../../assets/medicine.png';
import InfoCard from "../../pages/InfoCard/InfoCard";
import ItemCard from "../../pages/ItemCard/ItemCard";
import NewArrivals from "../NewArrivals/NewArrivals";
import LatestOfferCart from "../LatestOfferCart/LatestOfferCart";
import { style } from "framer-motion/client";
import Feedback from "../Feedback/Feedback";

function Home() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <>
      <Header />
      <main className="home-container">

        {/* Parallax Section */}
        <section className="parallax-section">
          <div className="international-star-section">
            <div className="oringo-section">
              <h1 className="Title-Field">Welcome to Oringo<br />International</h1>
              <div className="parallel-field">
                <p className="text-field">
                  Browse through our diverse range of meticulously crafted garments, <br />
                  designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className="shopnow-button">ShopNow</button>
              </div>

              <div className="stats-row">
                <h2>200+ <br />  <span className="text-field">
                  International Brands</span></h2>
                <div className="vertical-line"></div>
                <h2>2,000+ <br /><span className="text-field">
                  High-Quality Products</span></h2>
                <div className="vertical-line"></div>
                <h2>30,000+ <br /> <span className="text-field">
                  Happy Customers</span></h2>
                <div className="small-star-shape">
                  <img src={smallstarshape}></img>
                </div>
              </div>
            </div>
            <div className="star-section">
              <img src={bigstarshape}></img>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="info-card-container">
=======
        <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '50px' }}>
>>>>>>> b6009721fda1d2d1c7208b717ec483229da05194
          <InfoCard image={Foods} title="Foods" rating={3.5} />
          <InfoCard image={Poojasamagri} title="PoojaSamagri" rating={4.5} />
          <InfoCard image={Handicrafts} title="HandiCrafts" rating={2.0} />
          <InfoCard image={Medicine} title="Medicine" rating={5.0} />
        </div>
<<<<<<< HEAD

=======
>>>>>>> b6009721fda1d2d1c7208b717ec483229da05194
        <div className="gradient-separator"></div>
        <div className="sales-discount-image">
          <img src={SalesDiscountImage}></img>
        </div>
        <div className="gradient-separator"></div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: "20px", flexDirection: "column" }}>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: "20px" }}>
            <ItemCard
              image={Foods}
              title="Foods"
              rating={3.5}
              discountrate="₹250"
              realprice="₹290"
              discountpercentage="20%"
            />
            <ItemCard
              image={Poojasamagri}
              title="PoojaSamagri"
              rating={4.5}
              discountrate="₹500"
              realprice="₹600"
              discountpercentage="16%"
            />
            <ItemCard
              image={Handicrafts}
              title="HandiCrafts"
              rating={2.0}
              discountrate="₹150"
              realprice="₹200"
              discountpercentage="25%"
            />
            <ItemCard
              image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              realprice="₹130"
              discountpercentage="23%"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button class="your-class">ViewAll</button>
          </div>
        </div>
        <div className="gradient-separator"></div>
        {/* <AboutPreview /> */}
        <div className="sales-discount-image">
          <img src={SalesDiscountImage}></img>
        </div>
        <div className="gradient-separator"></div>
        {/* <ProductPreview /> */}
        <div style={{ padding: "60px" }}>
          <h2>NEW ARRIVALS</h2>
          <div className="new-arrivals-grid">
            <NewArrivals image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />
            <NewArrivals image={Poojasamagri}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />
            <NewArrivals image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />
            <NewArrivals image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />
            <NewArrivals image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />
            <NewArrivals image={Medicine}
              title="Medicine"
              rating={5.0}
              discountrate="₹100"
              discountpercentage="23%"
            />

          </div>
        </div>
        <div className="gradient-separator"></div>

        <DynamicMap />

        <div className="gradient-separator"></div>

        <Features />

        {/* <div className="gradient-separator"></div>

        <section className="parallax-section parallax-alt slim-parallax testimonial-bg">
          <motion.div
            className="overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="fw-bold text-white mb-3 title-animate">
              What Our Clients Say
            </h2>
            <div className="testimonial-compact">
              <Testimonials />
            </div>
          </motion.div>
        </section> */}

        <div className="gradient-separator"></div>

        <Achievements />
        <div className="gradient-separator"></div>
        <TeamPreview />
        <div className="gradient-separator"></div>
        <Certifications />
        <div className="gradient-separator"></div>
        <div>
<<<<<<< HEAD
          <Feedback />
=======
          <Feedback/>
>>>>>>> b6009721fda1d2d1c7208b717ec483229da05194
        </div>
        {/* <div  style={{ paddingLeft: "120px" , paddingRight:"120px" }}>
          <LatestOfferCart/>
        </div> */}
        <div className="d-flex justify-content-center my-4">
          {/* <AIAssistant /> */}
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Home;
