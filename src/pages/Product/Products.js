import img1 from '../../assets/pd1.jpg';
import img2 from '../../assets/Wooden-Handicraft-1.jpg';
import img3 from '../../assets/nuts.jpg';
import img4 from '../../assets/herbal.jpg';
import img5 from '../../assets/spiritual1.jpg';
import img6 from '../../assets/spiritual2.jpg';

const products = [
  // Foods
  {
    id: 1,
    name: "Premium Cashew Nuts",
    images: [img3, img3, img3],
    mrp: 1200,
    discountedPrice: 950,
    category: "Foods",
    exportMOQ: "500 kg",
    sampleOrder: "Available",
    countryAvailability: ["India", "UAE", "USA", "UK"],
    tags: ["Dry Fruits", "Healthy", "Premium Quality"],
    material: "Organic Cashew",
    sizeWeight: "1 kg pack",
  },
  {
    id: 2,
    name: "Almond Snacks",
    images: [img1, img1, img1],
    mrp: 1000,
    discountedPrice: 850,
    category: "Foods",
    exportMOQ: "500 kg",
    sampleOrder: "Available",
    countryAvailability: ["India", "UAE", "USA", "UK"],
    tags: ["Dry Fruits", "Healthy", "Snacks"],
    material: "Organic Almond",
    sizeWeight: "500 g pack",
  },

  // Handicrafts
  {
    id: 3,
    name: "Handcrafted Wooden Bowl",
    images: [img2, img2, img2],
    mrp: 1500,
    discountedPrice: 1100,
    category: "Handicrafts",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Handicraft", "Eco-friendly", "Kitchenware"],
    material: "Teak Wood",
    sizeWeight: "Diameter: 20 cm",
  },
  {
    id: 4,
    name: "Decorative Wooden Figurine",
    images: [img2, img2, img2],
    mrp: 1800,
    discountedPrice: 1300,
    category: "Handicrafts",
    exportMOQ: "100 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "USA"],
    tags: ["Handicraft", "Artisan", "Decor"],
    material: "Sheesham Wood",
    sizeWeight: "Height: 25 cm",
  },

  // Medical
  {
    id: 5,
    name: "Ayurvedic Herbal Oil",
    images: [img4, img4, img4],
    mrp: 1500,
    discountedPrice: 800,
    category: "Medical",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Ayurveda", "Pain Relief", "Organic"],
    material: "Natural Herbs",
    sizeWeight: "100 ml bottle",
  },
  {
    id: 6,
    name: "Herbal Health Capsules",
    images: [img4, img4, img4],
    mrp: 2000,
    discountedPrice: 1500,
    category: "Medical",
    exportMOQ: "300 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "UK", "USA"],
    tags: ["Herbal", "Wellness", "Organic"],
    material: "Natural Extracts",
    sizeWeight: "60 capsules",
  },

  // Spiritual Items
  {
    id: 7,
    name: "Wooden Pooja Stand",
    images: [img5, img5, img5],
    mrp: 1200,
    discountedPrice: 950,
    category: "Spiritual Items",
    exportMOQ: "50 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "UAE", "UK"],
    tags: ["Puja", "Wooden", "Spiritual"],
    material: "Sheesham Wood",
    sizeWeight: "Height: 40 cm",
  },
  {
    id: 8,
    name: "Idol of Lord Ganesha",
    images: [img6, img6, img6],
    mrp: 1500,
    discountedPrice: 1200,
    category: "Spiritual Items",
    exportMOQ: "30 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "USA", "UK"],
    tags: ["Idol", "Devotional", "Spiritual"],
    material: "Brass",
    sizeWeight: "Height: 15 cm",
  },
];

export default products;
