const express = require("express");
const User = require("../models/user_model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET_KEY;
// Admin login route
router.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      return res.status(404).send({ message: "Admin not found!" });
    }

    // Check password
    const isPasswordValid = admin.password === password; // Use bcrypt.compare for hashed password
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password!" });
    }

    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    return res.status(500).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
