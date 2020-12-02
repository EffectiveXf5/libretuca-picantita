const express = require('express');
const app = express();
const port = 5500;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));





