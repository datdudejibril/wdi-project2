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

var proj1 = new Project({})

// create new users
// var user1 = new User({
//   email: 'user1@gmail.com',
//   password_digest: 'pass1',
//   projects: [proj1]
// });

// var user2 = new User({
//   email: 'user2@gmail.com',
//   password_digest: 'pass2',
// });

// var user3 = new User({
//   email: 'user3@gmail.com',
//   password_digest: 'pass3',
// });

// save the users
// user1.save(function(err) {
//   if (err) console.log(err);
//   console.log('User 1 created!');
// });

// user2.save(function(err) {
//   if (err) console.log(err);
//   console.log('User 2 created!');
// });

// user3.save(function(err) {
//   if (err) console.log(err);
//   console.log('User 3 created!');
// });


// create new projects
// var project1 = new Project({
//   projectName: 'Band Board',
//   url: 'https://band-board.herokuapp.com/',
// });

// var project2 = new Project({
//   projectName: 'Giftr',
//   url: 'https://app-giftr.herokuapp.com//',
// });

// var project3 = new Project({
//   projectName: 'Jobs Tracker',
//   url: 'https://ancient-springs-85300.herokuapp.com/',
// });

// save the users
// project1.save(function(err) {
//   if (err) console.log(err);
//   console.log('Project 1 created!');
// });

// project2.save(function(err) {
//   if (err) console.log(err);
//   console.log('Project 2 created!');
// });

// project3.save(function(err) {
//   if (err) console.log(err);
//   console.log('Project 3 created!');
// });
var users = [user1, user2, user3];

var projects = [project1, project2, project3];

projects.forEach(function(project, i){
  project.save(function(err) {
    if(err) { console.log(err); }

    console.log(project);
  });
});

users.forEach(function(user, i){
  user.projects.push(projects[i]);


  user.save(function(err) {
    if(err) { console.log(err); }

    console.log(user);
  });
});
