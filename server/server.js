const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const orderRoutes = require("./routes/order_routes");
const bookRoutes = require("./routes/book_routes");
const authRoutes = require("./routes/user_routes");
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://books-store-alpha.vercel.app"],
    credentials: true,
  })
);

// MongoDB connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });

// Routes
app.use("/api", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;