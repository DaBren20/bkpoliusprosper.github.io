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

router.post('/signup', (req,res) => {

const { firstname, lastname, email, password } = req.body

console.log(req.body);
/*const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: `test@example.com`,
  from: `${email}`,
  subject: 'Testing out email',
  html: `<strong>Thank you for signing up ${firstname} ${lastname}</br>
        Email: ${email}
        </strong>`,
};

//Asynchronous operation
sgMail.send(msg)
.then(()=> {
    res.redirect("/");
})

.catch(err => {
    console.log(`Error ${err}`);
})*/

});

module.exports = router;