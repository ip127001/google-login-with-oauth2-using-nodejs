const express = require('express');  //router instance
const router = express.Router();
const passport = require('passport');

//auth login
router.get('/login', function(req, res){
    res.render('login', {user: req.user});
});

//auth logout
router.get('/logout', function(req, res){
    //handle with passport
    req.logout();
    res.redirect('/');
});

//auth with google google strategy activated and google redirect them to google consent screen and authenticate method take google and object
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//google redirect to this route
router.get('/google/redirect', passport.authenticate('google'), function(req, res){
    //res.send(req.user);
    res.redirect('/profile/')
});

module.exports = router;