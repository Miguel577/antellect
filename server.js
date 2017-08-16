const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const exphbs = require('express-handlebars');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');;
const bodyParser = require('body-parser')
const connect = process.env.MONGODB_URI

mongoose.connect(connect);

var models = require('./models')
var auth = require('./backend/auth');
var routes = require('./backend/routes');


app.engine('hbs', exphbs({defaultLayout:'main', extname:'hbs'}));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  models.User.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new LocalStrategy(function(username, password, done) {
  // Find the user with the given username
  models.User.findOne({
    username: username
  }, function(err, user) {
    // if there's an error, finish trying to authenticate (auth failed)
    if (err) {
      console.error('Error fetching user in LocalStrategy', err);
      return done(err);
    }
    // if no user present, auth failed
    if (!user) {
      console.log("no user");
      return done(null, false, {message: 'Incorrect username.'});
    }
    // if passwords do not match, auth failed
    if (user.password !== password) {
      console.log('wrong password')
      return done(null, false, {message: 'Incorrect password.'});
    }
    // auth has has succeeded
    console.log('success');
    return done(null, user);
  });
}));

app.use('/', auth(passport));
app.use('/', routes)









app.use('/api', api);








app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
