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

function Home() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <>
      <Header />
      <main className="home-container">

        {/* Parallax Section */}
        <section className="parallax-section">
          <div className="parallax-layer layer1"></div>
          <div className="parallax-layer layer2"></div>
          <div className="parallax-layer layer3"></div>

          <motion.div
            className="overlay text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="display-3 fw-bold mb-3 fade-in">
              Welcome to <span className="highlight">Oringo International</span>
            </h1>
            <h2 className="fw-bold text-white title-animate">Sustainable-Global-Trusted</h2>
            <p className="text-light subtitle-animate">
              Your one-stop solution for Exporting products.
            </p>
            <div className="btn-wrapper">
              {user ? (
                <Button className="btn-lg btn-modern" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Button className="btn-lg btn-modern" onClick={() => navigate("/auth")}>
                  Login / Register
                </Button>
              )}
            </div>
          </motion.div>
        </section>

        <AboutPreview />
        <div className="gradient-separator"></div>
        <ProductPreview />
        <div className="gradient-separator"></div>

        <DynamicMap />

        <div className="gradient-separator"></div>

        <Features />

        <div className="gradient-separator"></div>

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
        </section>

        <div className="gradient-separator"></div>

        <Achievements />
        <div className="gradient-separator"></div>
        <TeamPreview />
        <div className="gradient-separator"></div>
        <Certifications />

        <div className="d-flex justify-content-center my-4">
          {/* <AIAssistant /> */}
        </div>

      </main>
      <Footer />
    </>
  );
}

export default Home;
