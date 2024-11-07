const express = require("express");
const { createOrder, getOrderByEmail } = require("../controllers/orderController");

const router = express.Router();

// Create an order
router.post("/", createOrder);

// Get orders by user's email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
