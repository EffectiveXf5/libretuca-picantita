const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/libretucaPicantita', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('open', _ => {
    console.log('data base conected');
});

mongoose.set('useFindAndModify', false);