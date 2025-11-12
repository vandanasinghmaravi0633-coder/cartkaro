import React from "react";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <>
      

      {/* 👇 Product Layout Section */}
      <div className="product-page">
        <div className="filters-section">
          <ProductFilters />
        </div>

        <div className="cards-section">
          <ProductCard />
          
        </div>
      </div>
    </>
  );
};

export default ProductPage;
