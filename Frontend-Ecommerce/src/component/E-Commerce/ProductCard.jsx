import React from "react";
// import "./E-Commerce.css";
import "./ProductPage.css";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/817D7Y01oOL._SL1280_.jpg",
      title: "AryaRadha Double Bed Cotton Bedsheet With Pillow Cover",
      price: 398,
      oldPrice: 1299,
      discount: "-69% off",
      rating: 4.0,
      reviews: 1845,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/61c3+AAop3L._AC_UY327_FMwebp_QL65_.jpg",
      title: "boat2025 launch Airdopes plus 311, ENx Tech,50H Fast Charge",
      price: 799,
      oldPrice: 3990,
      discount: "80%off",
      rating: 4.0,
      reviews: 763,
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71uz9TRVU-L._SL1500_.jpg",
      title: "20 photo Clip LED String Lights For Photo Hanging, Birthday, Festival, Wedding, Party For Home",
      price: 248,
      oldPrice: 999,
      discount: "-75% off",
      rating: 4.0,
      reviews: 9240,
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/716qqO69xPL._SX679_.jpg",
      title: "YouCopia 4 Tier Book Self Portable Book Shelf, Kids Books Racks for Home Plastic, Bookshelf for Home, Book Shelves, Stand, Organizer,",
      price: 393,
      oldPrice: 2599,
      discount: "-85% off",
      rating: 3.8,
      reviews: 1841,
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/712SuRmHG4L._SL1500_.jpg",
      title: "iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine",
      price: 66900 ,
      oldPrice: 79900,
      discount: "-16% off",
      rating: 4.5,
      reviews: 3506,
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/4169lLQJ1VL._AC_UL480_QL65_.jpg",
      title: "PHILIPS Handheld Garment Steamer STH3000/20 - Compact & Foldable, Convenient Vertical Steaming, 1000 Watt Quick Heat Up",
      price: 2799,
      oldPrice: 4195,
      discount: "-33% off",
      rating: 4.0,
      reviews: 8616,
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/41APqPHuqtL._AC_UL480_QL65_.jpg",
      title: "Crompton SUREBREEZE SEA SAPPHIRA 1200 mm Ceiling Fan for Home ",
      price: 1349,
      oldPrice: 2599,
      discount: "-48% off",
      rating: 4.0,
      reviews: 13159,
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/71dyfY6G0aL._AC_UY327_FMwebp_QL65_.jpg",
      title: "HP 15,Intel Ultra 5 125H (16GB DDR5, 1TB SSD) FHD, IPS, 15.6''/39.6cm, Win11, M365 Basic(1yr)*Office24, Silver, 1.65kg, fd1354TU, Intel Arc Graphics, FHD Camera w/Shutter, AI Powered Laptop",
      price: 64490,
      oldPrice: 78719,
      discount: "-18% off",
      rating: 3.9,
      reviews: 1688,
    },
    {
      id: 9,
      image: "https://m.media-amazon.com/images/I/411rUK7pcML._AC_UL480_FMwebp_QL65_.jpg",
      title: "Crocs Flat Unisex Adult Bayaband Flip",
      price: 2342,
      oldPrice: 3495,
      discount: "-33% off",
      rating: 4.2,
      reviews: 19189,
    },
    {
      id: 10,
      image: "https://m.media-amazon.com/images/I/81o75hTf-SL._SY466_.jpg",
      title: "Smoke and Ashes: A Writer’s Journey through Opium’s Hidden Histories",
      price: 582,
      oldPrice: 699,
      discount: "-17%off  ",
      rating: 3.9,
      reviews: 7500,
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/615DhjnZKXL._SX679_.jpg",
      title: "Butterfly Xeno 750W Mixer Grinder | 3 Eastman Tritan Jars (Baby Safe-FDA Approved) | Vortex Blade+Square Jars-Efficient Grinding",
      price: 5405,
      oldPrice: 7999,
      discount: "-32%off",
      rating: 4.8,
      reviews: 21540,
    },
    {
      id: 12,
      image: "https://m.media-amazon.com/images/I/517H3nG36KL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Roseate Birch Super Soft (40x60 cm) Microfiber 2000 GSM Bath Mat Super Absorbent Anti-Skid Door Mats for Home/Bathroom",
      price: 349,
      oldPrice: 599,
      discount: "-42%off",
      rating: 4.1,
      reviews: 268,
    },
    {
      id: 13,
      image: "https://m.media-amazon.com/images/I/91kYYqdjJQL._SL1500_.jpg",
      title: "HOMEMONDE Light Filtering Window 5 Feet Grommet Curtains Set of 2- Printed Sheer Linen Curtain for Living Room Decoration,",
      price: 908,
      oldPrice: 1499,
      discount: "-39% off",
      rating: 4.2,
      reviews: 1293,
    },
    {
      id: 14,
      image: "https://m.media-amazon.com/images/I/61pIEiuVzNL._SL1495_.jpg",
      title: "Outdoor Plants & Modern Metal Floor Tall Plant Stand For Garden",
      price: 1519,
      oldPrice: 2499,
      discount: "-39% off",
      rating: 4.4,
      reviews: 492,
    },
    {
      id: 15,
      image: "https://m.media-amazon.com/images/I/61rmkmqD5VL._SX522_.jpg",
      title: "Fire-Boltt Ninja Call Pro Plus Smart Watch 1.83” HD Display Bluetooth Calling",
      price: 1199,
      oldPrice: 19999,
      discount: "20% off",
      rating: 3.9,
      reviews: 121443,
    },
    {
      id: 16,
      image: "https://m.media-amazon.com/images/I/41WIvI4vqJL.AC_SX250.jpg",
      title: "War and War",
      price: 1140,
      oldPrice: 1895,
      discount: "4.4% off",
      rating: 9.2,
      reviews: 3514,
    },
    {
      id: 17,
      image: "https://m.media-amazon.com/images/I/71zoEeTAszL._SL1500_.jpg",
      title: "Portronics SoundDrum P 20W Portable Bluetooth Speaker with 6-7 hrs Playback Time",
      price: 1826,
      oldPrice: 3499,
      discount: "4.2% off",
      rating: 4.2,
      reviews: 24294,
    },
    {
      id: 18,
      image: "https://m.media-amazon.com/images/I/71CL5vOAuLL._SY679_.jpg",
      title: "Original Remote Control Compatible with 3rd Generation AMZ fire TV Stick",
      price: 492,
      oldPrice: 999,
      discount: "-51% off",
      rating: 3.8,
      reviews: 8186,
    },
    {
      id: 19,
      image: "https://m.media-amazon.com/images/I/61WN+GQLhDL._SX679_.jpg",
      title: "Rotating Makeup Organizer Box - Cosmetic Storage with Drawers, Plastic Makeup Holder Stand for Dressing Table",
      price: 599,
      oldPrice: 1599,
      discount: "-63% off",
      rating: 4.2,
      reviews: 532,
    },
    {
      id: 20,
      image: "https://m.media-amazon.com/images/I/71IcTW9XpcL._SL1500_.jpg",
      title: "Xtore Green Banana Leaves Wall Paper ",
      price: 280,
      oldPrice: 999,
      discount: "-72% off",
      rating: 3.9,
      reviews: 829,
    },
  ];

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <div className="image-box">
            <img src={p.image} alt={p.title} className="product-img" />
            {p.discount && <span className="badge">{p.discount}</span>}
          </div>

          <div className="product-info">
            <h3 className="product-title">{p.title}</h3>
            <div className="price-box">
              <span className="price">₹{p.price}</span>
              {p.oldPrice > 0 && (
                <span className="old-price">₹{p.oldPrice}</span>
              )}
            </div>
            <p className="delivery">Free Delivery</p>
            <p className="rating">
              ⭐ {p.rating}{" "}
              <span className="reviews">({p.reviews} Reviews)</span>
            </p>
            <button className="view-btn">View Product</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
