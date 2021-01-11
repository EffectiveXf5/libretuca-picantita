const {Schema, model} = require('mongoose');

const productSchema = new Schema ({
    Titulo: String,
    Sinopsis: String,
    Precio: {
        type: Number,
        default: 0,
    },
    Accesorio: String
});

module.exports=model("libro",productSchema);