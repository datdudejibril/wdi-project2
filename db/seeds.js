var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rankthatproject');

var User = require('../models/user');
var Project = require('../models/project');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Project.remove({}, function(err){
  console.log(err);
});

User.remove({}, function(err){
  console.log(err);
});

// create new users
var user1 = new User({
  email: 'user1@gmail.com',
  password_digest: 'pass1',
});

var user2 = new User({
  email: 'user2@gmail.com',
  password_digest: 'pass2',
});

var user3 = new User({
  email: 'user3@gmail.com',
  password_digest: 'pass3',
});

// save the users
user1.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});

user2.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});

user3.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});


// create new projects
var project1 = new Project({
  projectname: 'Band Board',
  url: 'https://band-board.herokuapp.com/',
});

var project2 = new Project({
  projectname: 'Giftr',
  url: 'https://app-giftr.herokuapp.com//',
});

var project3 = new Project({
  projectname: 'Jobs Tracker',
  url: 'https://ancient-springs-85300.herokuapp.com/',
});

