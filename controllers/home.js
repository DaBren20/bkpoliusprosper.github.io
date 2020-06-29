const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' } );
});

router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Create Your Account' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/meals', (req, res) => {
    res.render('meals', { title: 'Meal Packages' });
});

router.get('/splash', (req, res) => {
    res.render('splash', { title: 'Thank You!' });
});

router.post('/signup', (req,res) => {

    const { firstname, lastname, email, password } = req.body
    
    //console.log(req.body);
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `${email}`,
      from: `bkpoliusprosper@myseneca.ca`,
      subject: 'Testing out email',
      html: `<strong>Thank you for signing up ${firstname} ${lastname}</br>
            Email: ${email}
            </strong>`,
    };
    
    //Asynchronous operation
    sgMail.send(msg)
    .then(()=> {
        res.redirect("/splash");
    })
    
    .catch(err => {
        console.log(`Error ${err}`);
    })

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
    
    });

module.exports = router;