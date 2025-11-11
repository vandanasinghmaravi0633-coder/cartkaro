const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  newProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
  getCategories
} = require("../controllers/productController");
const upload = require("../middleware/upload");


// Routes
router.post("/new", upload.array("images"), newProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/category/:category", getProductByCategory);
router.get("/categories", getCategories);

module.exports = router;
