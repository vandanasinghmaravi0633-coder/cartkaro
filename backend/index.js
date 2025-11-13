const express = require("express");
const connectDb = require("./config/connectDb.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

let dotpath = path.join(__dirname, "config/.env");
dotenv.config({ path: dotpath });

// middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"]
}));
app.use(cookieParser());

// static upload folder (optional)
let uploadpath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadpath));

// connect database

connectDb();


// routes
let userRoute = require("./routes/userRoutes.js");
let adminRoute = require("./routes/adminRoutes.js");
let productRoute = require("./routes/productRoutes");
let CartRoute = require("./routes/CartRoutes.js");


app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/Cart", CartRoute);

let frontendpath = path.join(__dirname, "../Frontend-Ecommerce/dist");
app.use(express.static(frontendpath));
let mainfilepath = path.resolve(__dirname, "../Frontend-Ecommerce/dist/index.html");
console.log(mainfilepath)
app.get("*", (req, res) => {
  res.sendFile(mainfilepath)
})
// error handling


app.use((err, req, res, next) => {
  console.log(err);
  res.send({ success: false, message: err.message });
});

app.listen(process.env.PORT, (err) => {
  console.log(err || " Server Run on Port " + process.env.PORT);
});

