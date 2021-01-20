'use strict'
const Book = require('../models/book');
const bookController = {}

bookController.formCreateBook = (req, res) => {
    res.render('FormNewBook/createBook')
}

bookController.createNewBook = async (req, res) =>{
  const {title, description, stock, accesorio, imagen, price} = req.body;
  const newBook = new Book ({title, description, stock, accesorio, imagen, price});
  await newBook.save();
  res.send('Libro creado');
  
};

 



module.exports = bookController;