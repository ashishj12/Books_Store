const Book = require("../models/book_model");

// Create a book
const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res
      .status(201)
      .send({ message: "Book created successfully", book: newBook });
  } catch (error) {
    console.error("Error Creating Book:", error);
    res.status(500).send({ message: "Failed to create a book" });
  }
};

// Read all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

// Read a single book
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).send({ message: "Failed to fetch the book" });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Failed to update the book" });
  }
};

// Patch a book (partial update)
const patchBook = async (req, res) => {
  const { id } = req.params;
  try {
    const patchedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!patchedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book patched successfully", book: patchedBook });
  } catch (error) {
    console.error("Error patching book:", error);
    res.status(500).send({ message: "Failed to patch the book" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send({ message: "Failed to delete the book" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  patchBook,
  deleteBook,
};
