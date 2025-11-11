const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  review: { type: String },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  images: [
    {
      fileName: String,
      url: String
    }
  ]
});

module.exports = mongoose.model("Product", productSchema);
