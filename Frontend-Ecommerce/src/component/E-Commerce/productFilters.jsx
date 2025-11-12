// import React from "react";
// import "./ProductPage.css";

// const ProductFilters = () => {
//   return (
//     <div className="sidebar">
//       <h3>Filters</h3>

//       {/* Category Filter */}
//       <div className="filter-section">
//         <label htmlFor="category">Category</label>
//         <select id="category">
//           <option>All</option>
//           <option>Clothing</option>
//           <option>Electronics</option>
//           <option>Accessories</option>
//         </select>
//       </div>

//       {/* Price Filter */}
//       <div className="filter-section">
//         <label htmlFor="price">Price</label>
//         <select id="price">
//           <option>All</option>
//           <option>Under ₹500</option>
//           <option>₹500 - ₹1000</option>
//           <option>Above ₹1000</option>
//         </select>
//       </div>

//       {/* Sort Option */}
//       <div className="filter-section">
//         <label htmlFor="sort">Sort By</label>
//         <select id="sort">
//           <option>Default</option>
//           <option>Low to High</option>
//           <option>High to Low</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ProductFilters;


import React from "react";

const ProductFilters = () => {
  return (
    <div className="product-filters">
      <h2>Filters</h2>
      <label>Category</label>
      <select>
        <option>All</option>
        <option>Men</option>
        <option>Women</option>
      </select>

      <label>Price</label>
      <select>
        <option>All</option>
        <option>Under ₹500</option>
        <option>₹500 - ₹1000</option>
      </select>

      <label>Sort By</label>
      <select>
        <option>Default</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
};

export default ProductFilters;

