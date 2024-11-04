const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  trending: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    min: 0,
  },
  newPrice: {
    type: Number,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
