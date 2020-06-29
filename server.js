const express = require('express');
const app = express();
//const sendMail = require('./public/js/sendmail');
const expbs = require('express-handlebars');
const path = require("path");
//const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const { check, validationResult } = require('express-validator');

//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});

//let urlencoded = bodyParser.urlencoded({ urlencoded: false});
app.engine('handlebars', expbs( { defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
//app.use(urlencoded);
app.use(express.static(path.join(__dirname, 'public')));

//Data Parsing
app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());


//load controllers
const homecontroller = require("./controllers/home");
const signupcontroller = require("./controllers/signup");
const mealscontroller = require("./controllers/meals");
const logincontroller = require("./controllers/login");
const splashcontroller = require("./controllers/splash");


//mapping 
app.use("/", homecontroller);
app.use("/meals", mealscontroller);
app.use("/signup", signupcontroller);
app.use("/login", logincontroller);
app.use("/splash", splashcontroller);


app.post('/login', (req,res) => {

    const error1 = [];
    const error2 = [];

    if(req.body.email == "") {
        error1.push("This field is required.");
    }

    if(req.body.password == "") {
        error2.push("This field is required");
    }

    //This is if the user failed validation
    if(error1.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages: error1 
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }

    if(error2.length > 0) {
        res.render('login', { 
            title: 'Login',
            errorMessages: error2
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }
});

/*app.post('/signup', (req,res) => {

    const error1 = [];
    const error2 = [];
    const error3 = [];
    const error4 = [];

    if(req.body.firstname == "") {
        error1.push("This field is required.");
    }

    if(req.body.lastname == "") {
        error2.push("This field is required");
    }

    if(req.body.email == "") {
        error1.push("This field is required.");
    }

    if(req.body.password == "") {
        error2.push("This field is required");
    }

    //This is if the user failed validation
    if(error1.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error1 
        });
        return;
    }

    else {
        res.redirect("/splash");
    }

    if(error2.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error2
        });
        return;
    }

    else {
        res.redirect("/splash");
    }

    if(error3.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error3
        });
        return;
    }

    else {
        res.redirect("/splash");
    }

    if(error4.length > 0) {
        res.render('signup', { 
            title: 'Create your account',
            errorMessages: error4
        });
        return;
    }

    else {
        res.redirect("/splash");
    }

});*/

app.listen(8080, () => {
    console.log("Express http server listening on: ", PORT);
});