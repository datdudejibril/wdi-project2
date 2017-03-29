pry = require('pryjs');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs')
var mongoose = require('mongoose');
var authHelpers = require('./helpers/auth.js')
var indexController = require('./controllers/index.js')
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var projectsController = require('./controllers/projects.js');

var app = express();

// mongoose.connect('mongodb://localhost/rankthatproject');
// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/express-movies');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

app.set('view engine', 'hbs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/', indexController);
app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:userId/projects', projectsController);


function hello(req, res, next) {
  console.log('HELLO FROM MIDDLEWARE>>>>>>>>>>>');
  next()
}

app.get('/test-middleware', authHelpers.authorize, function(req, res) {
  res.send('hi')
})

app.listen(3000, function() {
  console.log('hey')
});

module.exports = app;
