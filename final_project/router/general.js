const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  try {
    // get all books
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  //Write your code here
  try {
    let isbn = req.params.isbn;
    // Find the book by ISBN
    let book = Object.values(books).find(book => book.isbn === isbn);
    
    if (book) {
      res.status(200).json(book);
      res.write(book)
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  //Write your code here
  try {
    let authorName = req.params.author;
    // Find books by author
    let booksByAuthor = Object.values(books).filter(book => book.author === authorName);
    if (booksByAuthor.length > 0) {
      res.status(200).json(booksByAuthor);
    } else {
      res.status(404).json({ message: "Books by this author not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
