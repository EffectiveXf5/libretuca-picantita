require("../conexion");
const libro = require("../models/product");

const buscarLibro = async () => {
    await libro.find({});
    console.log(product);
}

buscarLibro();