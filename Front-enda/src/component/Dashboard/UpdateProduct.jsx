import React, { useState } from "react";
import axios from "axios";
import "../../assets/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdateProduct() {
    let nav = useNavigate()
    const [Product, setProduct] = useState({});
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [discount, setDiscount] = useState("");
    const [review, setReview] = useState("");

    let { id } = useParams();
    useEffect(() => {
        async function getProduct() {
            const { data } = await axios.get("http://localhost:4000/api/product/get-product/" + id);
            console.log(data);
            setProduct({ ...data.data })
            setName(data.data.name)
            setPrice(data.data.price)
            setCategory(data.data.category)
            setRating(data.data.rating)
            setReview(data.data.review)
            setStock(data.data.stock)
            setDiscount(data.data.discount)
        }
        getProduct()
    }, [id])



  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           

            const token = localStorage.getItem("adminToken");
            const res = await axios.put(
                "http://localhost:4000/api/product/update-product/" + id,
                {name ,price,stock ,category , review , rating , discount},
                {
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(name ,price,stock ,category , review , rating , discount);
                
            console.log(" Product Updated  successfully:", res.data);
            nav("/products")
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
                    <select name="category" value={category} id="" onChange={(e) => setCategory(e.target.value)}>Category
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

                <button type="submit" className="btn-submit">
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default UpdateProduct;
