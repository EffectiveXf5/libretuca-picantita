'use strict'
const mongoose = require('mongoose');
const MONGODB = 'mongodb://localhost:27017/Libretuca';

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

.then(db => console.log('Database is CONNECTED'))

.catch(err => console.log(err));

// mongoose.set('useFindAndModify', false);
// mongoose.connect('mongodb://localhost:27017/libretucaPicantita',
//  {useNewUrlParser: true, 
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });
// mongoose.connection.on('open', _ => {
//     console.log('data base conected');
// });