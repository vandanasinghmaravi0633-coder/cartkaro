let jwt = require("jsonwebtoken");
const connectDB = require("../config/connectDb");
let { ObjectId } = require("mongodb");
const Admin = require("../models/adminModel");

let userdb = async () => {
    let db = await connectDB();
    let User = await db.collection("users");
    return User;
};

let authAdmin = async (req, res, next) => {
    try {
        let User = await userdb();
        let token = req.headers?.authorization?.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({ success: false, message: "Token not found" });
        }

        let isVerified = jwt.verify(token, process.env.SECRET_KEY);

        let user = await Admin.findOne({ _id: new ObjectId(isVerified.user._id) });
        
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(403).json({ success: false, message: "Not valid" });
        }
    } catch (error) {
        res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
};
  let auth = async (req, res, next) => {
    try {
 
        let token = req.headers?.authorization?.split(" ")[1];;
        if (!token) {
            return res.status(500).json({ success: false, message: "token not found" })
        }
        let isvarified = await jwt.verify(token, process.env.SECRET_KEY);
        let user = await User.findById(isvarified.user._id)
        if (user) {
            req.user = user
            next();
        } else {
            res.status(500).json({ success: false, message: "Not valid" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
 

module.exports = {auth , authAdmin};
