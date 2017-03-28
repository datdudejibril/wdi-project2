var express = require('express');
var router = express.Router({mergeParams: true});

var Project = require('../models/project.js');
// var authHelpers = require('../helpers/auth.js')
var User = require('../models/user.js');

//project index
router.get('/', function(req, res){
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) { console.log(err); }

      console.log(user);
      res.render('projects/index', {
        user: user
      })
    });

});

//create
router.post('/', function createProject(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (err) {console.log(err); }

      const newProject = {
        projectName: req.body.projectName,
        url: req.body.url
      }
      user.projects.push(newProject);

      user.save(function (err) {
        if (err) console.log(err);
        console.log('New Project Added for Ranking');
      });

      res.redirect('/users/' + user.id + '/projects')
        // res.redirect('/users/' + req.session.currentUser._id)
    });
});

// get a new form
router.get('/new', function newProjectIdea(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }
      res.render('projects/new', {
        user: user
      });
    });
});

// Post A NEW Project
router.post('/:id/projects', function(req, res){
  User.findById(req.params.userId)
  .exec(function(err, user){
    user.items.push(new Item({name: req.body.name}));
    user.save(function(err){
      if (err) console.log(err);
      res.send(user);
    });
  });
});

// DELETE

router.delete('/:id', function deleteProject(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.projects.id(req.params.id).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('A Project was removed')
      });

      res.render('projects/index', {
        user: user
      });
    });
});

// Project UPDATE ROUTE
router.patch('/:id', function(req, res){
  Project.findByIdAndUpdate(req.params.id, req.body
  , { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(project);
    res.redirect('/')
  });
});



module.exports = router;
