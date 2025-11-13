import React, { useEffect, useState } from "react";
// import "./E-commerce.css";
import "./ProductPage.css";
import axios from 'axios'
const ProductCard = () => {
  let [products, setProducts] = useState([])
  useEffect(() => {
    async function getdata() {
      let { data } = await axios("/api/product/");
      if (data.success) {
        setProducts([...data.data]);
        console.log(data)
      }
    }
    getdata()
  }, [])

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p._id} className="product-card">
          <div className="image-box">
            <img src={p.images[0].url} alt={p.title} className="product-img" />
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
