import React from "react";
import { Link } from "react-router-dom";
import "./ProductPreview.css";
import img1 from "../../assets/product1.jpg";
import img2 from "../../assets/Product2.jpg";
import img3 from "../../assets/Handicraft.jpg";
import img4 from "../../assets/product4.jpg";

const categories = [
  {
    name: "Foods",
    description: "Fresh Indian spices, snacks, dry fruits, and packaged foods—authentic taste, globally trusted.",
    image: img1,
  },
  {
    name: "Pooja Samgri",
    description: "Devotional frames, idols, puja kits, and incense—bringing peace and positivity to every space.",
    image: img2,
  },
  {
    name: "Handicrafts",
    description: "Handcrafted decor and art, expertly designed to celebrate India’s rich heritage.",
    image: img3,
  },
  {
    name: "Medical",
    description: "Ayurvedic and herbal wellness products—natural, safe, and globally trusted.",
    image: img4,
  },
];

function ProductCataloguePreview() {
  return (
    <section className="catalogue-preview my-5">
      <h2 className="catalogue-heading text-center mb-5">Our Products</h2>
      <div className="catalogue-grid">
        {categories.map((cat) => (
          <div className="catalogue-card" key={cat.name}>
            <div className="img-container">
              <img src={cat.image} alt={cat.name} className="catalogue-img" />
            </div>
            <div className="catalogue-body">
              <h5 className="catalogue-title">{cat.name}</h5>
              <p className="catalogue-desc">{cat.description}</p>
              <Link
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="catalogue-btn"
              >
                View Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCataloguePreview;
