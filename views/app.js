const express = require ("express");
const exphbs = require ("express-handlebars");

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
 
app.get('/libros', function (req, res) {
    res.render('prueba');
});

app.listen(5500);

