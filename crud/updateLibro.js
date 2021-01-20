require("../conexion");
const book = require("../models/book");



const editarLibro = async () => {
    const producto = await book.findOneAndUpdate({name: 'teclado'},{name: "raton"},{new: true});
    console.log(book);
}                                  

editarLibro();