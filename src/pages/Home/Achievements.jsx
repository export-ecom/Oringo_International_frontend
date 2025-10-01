import React, { useEffect, useState } from "react";
import "./Achievements.css";

export default function Achievements() {
  const data = [
    { number: 10, suffix: "+", label: "Years of Experience" },
    { number: 25, suffix: "+", label: "Countries Served" },
    { number: 500, suffix: "+", label: "Happy Clients" },
    { number: 1000, suffix: "+", label: "Products Delivered" },
  ];

  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const intervals = data.map((item, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.number) {
            newCounts[index] += Math.ceil(item.number / 50);
          } else {
            newCounts[index] = item.number;
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 20);
    });
    return () => intervals.forEach((i) => clearInterval(i));
  }, [data]);

  return (
    <section className="achievements">
      <h2 className="achievements-title fade-in">Our Achievements</h2>
      <div className="achievements-container">
        {data.map((item, index) => (
          <div className="achievement-card fade-in-delay" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <h2 className="achievement-number">
              {counts[index]}
              {item.suffix}
            </h2>
            <p className="achievement-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
