const express = require('express');
const app = express();
const port = 5500;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
defaultLayout: 'planB',
partialsDir: __dirname + '/views/partials/'
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout:'index'});
});
//app.get('/planB', (req, res) =>{
    //res.render('main', {layout:'planB'});
//});
app.listen(port, () => console.log(`App listening to port ${port}`));





