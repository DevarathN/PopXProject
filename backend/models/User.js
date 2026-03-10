const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: Number,
    email: { type: String, unique: true },
    password: String,

    companyName: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
