import React, { useRef } from "react";
import "./DynamicMap.css";

export default function DynamicMap() {
  const videoRef = useRef(null);

  // Mouse movement parallax
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 25; // horizontal
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // vertical
    if (videoRef.current) {
      videoRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
    }
  };

  return (
    <section className="dynamic-map-section" onMouseMove={handleMouseMove}>
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="dynamic-map-video"
      >
        <source src="/videos/worldmap3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <h2 className="dynamic-map-header">🌍 Explore Our Global Reach</h2>

      {/* Example glassy info cards */}
      <div className="dynamic-map-cards">
        <div className="info-card">500+ Clients Worldwide</div>
        <div className="info-card">25+ Countries</div>
        <div className="info-card">1000+ Products Delivered</div>
      </div>
    </section>
  );
}
