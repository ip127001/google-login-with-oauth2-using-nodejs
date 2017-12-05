const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24*60*6*1000,
    keys: [keys.session.cookieKey]
}));

//initiaze passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, function(){
    console.log('successfully connected to mongodb');
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

app.get('/', function(req, res){
    res.render('home', {user: req.user});
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 8000');
});
