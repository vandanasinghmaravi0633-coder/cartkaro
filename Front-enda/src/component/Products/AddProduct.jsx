import React, { useState } from "react";
import axios from "axios";
import "../../assets/style.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [discount, setDiscount] = useState("");


  const [review, setReview] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("category", category);
      formData.append("review", review);
      formData.append("rating", rating);
      formData.append("discount", discount);

      images.forEach((file) => formData.append("images", file));
      const token = localStorage.getItem("adminToken"); 
      const res = await axios.post(
        "http://localhost:4000/api/product/create-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${token}`, 
          },
        }
      );

      console.log(" Product added successfully:", res.data);
    } 
    catch (error) {
      console.error(" Error adding product:", error.response?.data || error);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
         <select name="category" value={category} id=""  onChange={(e)=>setCategory(e.target.value)}>Category
          <option>Beauty</option>
          <option>Footwear</option>
          <option>Electronic</option>
          <option>Clothes</option>

         </select>
        </div>

        <div className="form-group">
          <label>Price (₹):</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            placeholder="Enter stock quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            placeholder="Enter rating quantity"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
             <div className="form-group">
          <label>Discount:</label>
          <input
            type="number"
            placeholder="Enter rating quantity"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label>Review:</label>
          <textarea
            placeholder="Enter product review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Upload Images:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
