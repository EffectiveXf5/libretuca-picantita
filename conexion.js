'use strict'
const mongoose = require('mongoose');
const MONGODB = 'mongodb://localhost:27017/LibretucaPicantita ';

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(db => console.log('Database is CONNECTED'))

.catch(err => console.log(err));


// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/libretucaPicantita', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.on('open', _ => {
//     console.log('data base conected');
// });

// mongoose.set('useFindAndModify', false);