const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// Create a book
router.post("/", bookController.createBook);

// Get all books
router.get("/", bookController.getBooks);

// Get a book by ID
router.get("/:id", bookController.getBookById);

// Update a book by ID
router.put("/:id", bookController.updateBook);

// Patch a book by ID
router.patch("/:id", bookController.patchBook);

// Delete a book by ID
router.delete("/:id", bookController.deleteBook);

module.exports = router;
