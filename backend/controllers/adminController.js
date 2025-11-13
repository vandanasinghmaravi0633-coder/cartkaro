const jwt = require("jsonwebtoken");
let Admin = require("../models/adminmodel");
let bcrypt = require("bcrypt");

let registerAdmin = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(500)
        .json({ success: false, message: "Please provide all the details" });
    }

    let admin = await Admin.findOne({ email });
    if (admin) {
      return res
        .status(500)
        .json({ success: false, message: "Admin Already Registered" });
    } else {
      let hashpassword = await bcrypt.hash(password, 10);
      let newadmin = new Admin({ email, password: hashpassword, name });
      await newadmin.save();
      res
        .status(201)
        .json({
          success: true,
          message: "admin created successfully",
          data: newadmin,
        });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

let loginAdmin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(500)
        .json({ success: false, message: "Please provide all the details" });
    }

    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(500)
        .json({ success: false, message: "Admin not Registered" });
    } else {
      let isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        let token = await jwt.sign(
          { adminId: admin._id, role: admin.role },
          process.env.SECRET_KEY,
          {
            expiresIn: "24h",
          }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite : "lax",
            maxAge: 60000 * 60 * 24,
          }).status(200).json({
            success: true,
            message: "admin login successfully",
            token,
          });
      } else {
        res
          .status(500)
          .json({ success: false, message: "Please Provide valid credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerAdmin, loginAdmin };
