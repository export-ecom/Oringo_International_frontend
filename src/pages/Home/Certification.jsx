import React, { useState } from "react";
import "./Certification.css";
import badge from "../../assets/certificate.png";

const certifications = [
  { name: "ISO 9001", logo: badge },
  { name: "CE Certified", logo: badge },
  { name: "FDA Approved", logo: badge },
  { name: "Fair Trade", logo: badge },
  { name: "ISO 14001", logo: badge },
  { name: "UL Listed", logo: badge },
  { name: "RoHS Compliant", logo: badge },
  { name: "Energy Star", logo: badge },
  { name: "BRC Certified", logo: badge },
  { name: "LEED Certified", logo: badge },
];

const Certifications = () => {
  const [paused, setPaused] = useState(false);

  // Duplicate items for seamless scrolling
  const scrollingItems = [...certifications, ...certifications];

  return (
    <section className="certifications-section">
      <h2 className="certifications-title">Our Certifications</h2>
      <div className="marquee">
        <div className={`track ${paused ? "paused" : ""}`}>
          {scrollingItems.map((cert, index) => (
            <div className="logo-card" key={index}>
              <div
                className="logo-container"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <img src={cert.logo} alt={cert.name} />
              </div>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
