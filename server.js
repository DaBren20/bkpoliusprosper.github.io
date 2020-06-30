const express = require('express');
const app = express();
//const sendMail = require('./public/js/sendmail');
const expbs = require('express-handlebars');
const path = require("path");
//const bodyParser = require('body-parser');
//const PORT = process.env.PORT;
//const { check, validationResult } = require('express-validator');

//load the environment variable file
require('dotenv').config({
    path:"./config/keys.env"
});

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
            errorMessages2: error2
        });
        return;
    }

    //There are no errors
    else {
        res.redirect("/");
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Express http server listening on: ", PORT);
});