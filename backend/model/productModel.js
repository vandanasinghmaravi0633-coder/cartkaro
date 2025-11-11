const mongoose = require("mongoose")

let productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true ,enum:["Beauty" ,"Footwear","Clothes","Electronic"] },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    review: String,
    images: [{ fileName: String, url: String }],
    discount:Number,
    rating:Number,

}, { timestamps: true })


let productModel = mongoose.model("products", productSchema);

module.exports = productModel;