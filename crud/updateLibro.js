require("../conexion");
const libro = require("../models/product");


const editarLibro = async () => {
    const producto = await libro.findOneAndUpdate({name: 'teclado'},{name: "raton"},{new: true});
    console.log(producto);
}                                  

editarLibro();