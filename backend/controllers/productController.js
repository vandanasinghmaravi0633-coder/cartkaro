const Product = require("../models/productModel")
const newProduct = async (req, res) => {
    try {
        let { name, price, review, category, stock } = req.body;
        if (!name || !price || !category || !stock) {
            return res.status(500).json({ success: false, message: "Please Provide all the Details" })
        }
        let images = []
        if (req.files) {
            req.files.map((v) => {
                images.push({ fileName: v.filename, url: "http://localhost:4000/uploads/" + v.filename })
            })
        }
        let newproduct = await Product.create({ name, price, review, category, stock, images });
        res.status(201).json({ success: true, message: "Product Created successfully", data: newproduct })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
 
let getProducts = async (req, res) => {
    try {
        let products = await Product.find({});
        res.status(200).send({ success: true, data: products })
    } catch (error) {
 
        res.status(500).json({ success: false, message: error.message })
    }
}
let getProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" })
        } else {
            res.status(200).send({ success: true, data: product })
        }
    } catch (error) {
 
        res.status(500).json({ success: false, message: error.message })
    }
}
let deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" })
        } else {
            await Product.findByIdAndDelete(id)
            res.status(200).send({ success: true, message: "Product Deleted Successfully" })
        }
    } catch (error) {
 
        res.status(500).json({ success: false, message: error.message })
    }
}
let updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" })
        } else {
            await Product.findByIdAndUpdate(id, { ...req.body })
            res.status(200).send({ success: true, message: "Product Updated Successfully" })
        }
    } catch (error) {
 
        res.status(500).json({ success: false, message: error.message })
    }
}
let getProductByCategory = async (req, res) => {
    try {
        let { category } = req.params;
        let products = await Product.find({ category });
        res.status(200).send({ success: true, message: "Product Get Successfully", data: products })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
let getCategories = async (req, res) => {
    try {
        let productcategory = await Product.find({}).distinct("category");
        res.status(200).send({ success: true, message: "Categories Get Successfully", data: productcategory })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
 
 
module.exports = { newProduct, getProduct, getCategories, getProducts, updateProduct, deleteProduct, getProductByCategory }
 