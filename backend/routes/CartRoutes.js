const { addToCart  ,getCart ,updateCart ,deleteCart} = require("../controllers/CartControllers.js");
const { auth } = require("../middleware/auth.js");
 
const router = require("express").Router();
 
router.post("/addtocart", auth, addToCart)
router.get("/getcart", auth, getCart)
router.put("/updatecart/:id", auth, updateCart)
router.delete("/deletecart/:id", auth, deleteCart)
 
 
 
module.exports = router
 