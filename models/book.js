const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    accesorio:{
        type: String,
        required: true
    },
    imagen:{
        type:String,
        
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = model('Book', bookSchema, 'books');