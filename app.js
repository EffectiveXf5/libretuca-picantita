const express = require('express');
const app = express();
const port = 5500;
const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
partialsDir: __dirname + '/views/partials/',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('main', {layout:'index'});
});

app.get('/detalle', (req, res) => {
res.render('main2', {layout:'planB'});
});

app.get('/new', (req, res) => {
    res.render('addLibro', {layout:'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));





