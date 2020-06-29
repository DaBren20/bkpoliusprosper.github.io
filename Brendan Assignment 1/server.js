const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require("path");


app.engine('handlebars', expbs( { defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

//Routing

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' } );
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/meals', (req, res) => {
    res.render('meals');
});

app.listen(8080, () => {
    console.log("Express http server listening on: ", 8080);
});