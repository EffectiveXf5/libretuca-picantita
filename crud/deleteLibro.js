require("../conexion");
const libro = require("../models/product");


const borrarLibro = async () => {
    const producto = await libro.findByIdAndDelete('5ffc512af099bf08084ea233');
}                                  

borrarLibro();