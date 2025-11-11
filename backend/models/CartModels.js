const mongoose = require("mongoose")
 
let cartSchema = new mongoose.Schema({
    productId: { type: mongoose.ObjectId, ref: "products" },
    quantity: { type: Number, default: 1 },
    user: { type: mongoose.ObjectId, ref:"users" }
})
 
let cartModel = mongoose.model("carts", cartSchema);
module.exports = cartModel;
 
 
 