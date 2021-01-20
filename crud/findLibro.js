require("../conexion");
const book = require("../models/book");


const buscarLibro = async () => {
    await book.find({});
    console.log(book);
}

buscarLibro();