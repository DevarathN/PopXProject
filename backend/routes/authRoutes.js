const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.get("/me", auth, getProfile);
router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;
