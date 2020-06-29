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

module.exports = router;