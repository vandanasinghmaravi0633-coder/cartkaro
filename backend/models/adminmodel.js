  const mongoose = require("mongoose");

let admin = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "admin" },
});

let adminmodel = mongoose.model("admins", admin);

module.exports = adminmodel;
