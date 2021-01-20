'use strict';

const { Router } = require ('express');
const router = Router();

const bookController = require('../controller/book.controller');

router.get('/FormNewBook/add', bookController.formCreateBook);
router.post('/FormNewBook/createBook', bookController.createNewBook);





module.exports = router;