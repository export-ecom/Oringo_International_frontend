import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';
import Mission from './Mission';
import Team from './Team';
import History from './History';
import Wwo from './Wwo';
import Wcu from './Wcu';

const About = () => {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.pageTitle}>About Us</h1>
          <p className={styles.intro}>
            <b>
              Welcome to our export-focused marketplace — your trusted destination for premium quality Indian products. Our platform connects global buyers with authentic Indian craftsmanship, textiles, and spiritual goods.
            </b>
          </p>





          {/* Modular Subsections */}
          <Wwo />
          <Wcu />
          <Mission />
          <Team />
          <History />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
