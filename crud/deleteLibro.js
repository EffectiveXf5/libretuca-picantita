require("../conexion");
const book = require("../models/book");


const borrarLibro = async () => {
    const producto = await book.findByIdAndDelete('5ffc512af099bf08084ea233');
}                                  

borrarLibro();