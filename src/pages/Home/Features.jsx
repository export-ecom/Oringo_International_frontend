import React, { useState, useEffect } from "react";
import "./Feature.css";

function Features() {
    const features = [
        { title: "Fast", desc: "Experience blazing fast performance." },
        { title: "Reliable", desc: "Our service is available 24/7." },
        { title: "User-Friendly", desc: "Simple and intuitive design." },
    ];

    // Track scroll offset for subtle parallax
    const [scrollOffsets, setScrollOffsets] = useState(features.map(() => 0));
    // Track rotation & scale for each card
    const [hoverStyles, setHoverStyles] = useState(
        features.map(() => ({ rotateX: 0, rotateY: 0, scale: 1 }))
    );

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollOffsets(features.map((_, i) => scrollY * (0.03 + i * 0.03)));
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [features.length]);

    const handleMouseMove = (index, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / rect.height) * 15;
        const rotateY = ((x - rect.width / 2) / rect.width) * 15;

        setHoverStyles((prev) => {
            const newStyles = [...prev];
            newStyles[index] = { rotateX, rotateY, scale: 1.08 };
            return newStyles;
        });
    };

    const handleMouseLeave = (index) => {
        setHoverStyles((prev) => {
            const newStyles = [...prev];
            newStyles[index] = { rotateX: 0, rotateY: 0, scale: 1 };
            return newStyles;
        });
    };

    return (
        <section className="features-section py-5 text-center">
            <h2 className="features-heading">Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => {
                    const style = {
                        transform: `translateY(${scrollOffsets[index]}px) rotateX(${hoverStyles[index].rotateX}deg) rotateY(${hoverStyles[index].rotateY}deg) scale(${hoverStyles[index].scale})`,
                        transition: "transform 0.3s ease-out",
                    };
                    return (
                        <div
                            key={index}
                            className="feature-card"
                            style={style}
                            onMouseMove={(e) => handleMouseMove(index, e)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <div className="feature-icon">⚡</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Features;
