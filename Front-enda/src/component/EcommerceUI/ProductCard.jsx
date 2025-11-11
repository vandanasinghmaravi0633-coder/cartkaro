
import React from "react";
import "./ui.css";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: "https://images.meesho.com/images/products/32962343/ir564_512.avif?width=360",
      title: "Jivika Voguish Women Kurta Sets",
      price: 308,
      oldPrice: 341,
      discount: "10% off",
      rating: 3.8,
      reviews: 1012,
    },
    {
      id: 2,
      image: "https://images.meesho.com/images/products/101724770/rvc8e_512.avif?width=360",
      title: "Mi Redmi 9A Cases & Covers",
      price: 137,
      oldPrice: 0,
      discount: "",
      rating: 3.6,
      reviews: 763,
    },
    {
      id: 3,
      image: "https://images.meesho.com/images/products/191005346/mocgn_512.avif?width=360",
      title: "Chitranthra Attractive Kurtis",
      price: 219,
      oldPrice: 0,
      discount: "",
      rating: 4.0,
      reviews: 10240,
    },
    {
      id: 4,
      image: "https://images.meesho.com/images/products/220588971/8ap22_512.avif?width=360",
      title: "Adrika Alluring Sarees",
      price: 232,
      oldPrice: 0,
      discount: "",
      rating: 3.8,
      reviews: 1641,
    },
    {
      id: 5,
      image: "https://images.meesho.com/images/products/430702251/kronx_512.avif?width=360",
      title: "CHHOTE NAWAB Men's T-shirts",
      price: 278,
      oldPrice: 305,
      discount: "9% off",
      rating: 4.0,
      reviews: 3506,
    },
    {
      id: 6,
      image: "https://images.meesho.com/images/products/431697159/popns_512.avif?width=360",
      title: "Cute Comfy Boys Top & Bottom Sets",
      price: 185,
      oldPrice: 0,
      discount: "",
      rating: 3.7,
      reviews: 1370,
    },
    {
      id: 7,
      image: "https://images.meesho.com/images/products/481263934/jcg7p_512.avif?width=360",
      title: "Dupatta Sets",
      price: 300,
      oldPrice: 323,
      discount: "7% off",
      rating: 4.2,
      reviews: 2352,
    },
    {
      id: 8,
      image: "https://images.meesho.com/images/products/495626488/dwbsp_512.avif?width=360",
      title: "Others Cases & Covers",
      price: 163,
      oldPrice: 0,
      discount: "",
      rating: 3.9,
      reviews: 2705,
    },
    {
      id: 9,
      image: "https://images.meesho.com/images/products/375061729/0lurd_512.avif?width=360",
      title: "Trendy Retro Men Shirts",
      price: 209,
      oldPrice: 218,
      discount: "4% off",
      rating: 4.0,
      reviews: 2108,
    },
    {
      id: 10,
      image: "https://images.meesho.com/images/products/591279119/zvk9f_512.avif?width=360",
      title: "Bluetooth Headphones & Earphones",
      price: 350,
      oldPrice: 0,
      discount: "",
      rating: 3.9,
      reviews: 6540,
    },
    {
      id: 11,
      image: "https://images.meesho.com/images/products/584578661/0lybn_512.avif?width=360",
      title: "Poco C11 Mobile Cover",
      price: 130,
      oldPrice: 0,
      discount: "",
      rating: 4.2,
      reviews: 2140,
    },
    {
      id: 12,
      image: "https://images.meesho.com/images/products/471895046/4thbj_512.avif?width=360",
      title: "Aagneyi Voguish Sarees",
      price: 345,
      oldPrice: 0,
      discount: "",
      rating: 3.9,
      reviews: 3312,
    },
    {
      id: 13,
      image: "https://images.meesho.com/images/products/2653067/1_512.avif?width=360",
      title: "Ethnic Stylish Premium Cotton Printed",
      price: 247,
      oldPrice: 260,
      discount: "5% off",
      rating: 3.8,
      reviews: 1974,
    },
    {
      id: 14,
      image: "https://images.meesho.com/images/products/609628873/ohwp1_512.avif?width=360",
      title: "Aagneyi Refined Kurtis",
      price: 295,
      oldPrice: 0,
      discount: "",
      rating: 4.0,
      reviews: 2240,
    },
    {
      id: 15,
      image: "https://images.meesho.com/images/products/468230204/7ndxl_512.avif?width=512",
      title: "Trendy Women Blouses",
      price: 150,
      oldPrice: 187,
      discount: "20% off",
      rating: 3.8,
      reviews: 1452,
    },
    {
      id: 16,
      image: "https://images.meesho.com/images/products/534038598/jxtcf_512.avif?width=360  ",
      title: "Cotton Blend Men Regular Fit Shirts",
      price: 274,
      oldPrice: 290,
      discount: "6% off",
      rating: 4.1,
      reviews: 2310,
    },
    {
      id: 17,
      image: "https://images.meesho.com/images/products/482025250/mfw3s_512.avif?width=360",
      title: "Aarvi Stylish Women Dresses",
      price: 325,
      oldPrice: 349,
      discount: "7% off",
      rating: 4.0,
      reviews: 1289,
    },
    {
      id: 18,
      image: "https://images.meesho.com/images/products/124882700/ig7tm_512.avif?width=512",
      title: "Trendy Casual Men Shoes",
      price: 499,
      oldPrice: 549,
      discount: "9% off",
      rating: 4.2,
      reviews: 3789,
    },
    {
      id: 19,
      image: "https://images.meesho.com/images/products/94090879/ui5yg_512.avif?width=360",
      title: "Stylish Analog Men's Watch",
      price: 399,
      oldPrice: 450,
      discount: "11% off",
      rating: 4.1,
      reviews: 2140,
    },
    {
      id: 20,
      image: "https://images.meesho.com/images/products/576096706/0xnpk_512.avif?width=360",
      title: "Elegant Women Handbags",
      price: 289,
      oldPrice: 310,
      discount: "7% off",
      rating: 4.3,
      reviews: 2754,
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
