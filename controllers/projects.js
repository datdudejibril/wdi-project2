var express = require('express');
var router = express.Router({mergeParams: true});

var User = require('../models/user.js');
var Project = require('../models/projects.js')
// var authHelpers = require('../helpers/auth.js')

//Index
router.get('/users/projects', function projects(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user){
      if (err {console.log(err); }
        res.render('users/projects/projects.hbs') {
          user: user
        });
    });
});


router.post('/', function createProject(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user) {
      if (err) {console.log(err); }

      const newProject = {
        projectname: req.body.projectname,
        url: req.body.url
        }
        user.projects.push(newProject)

        user.save(function (err) {
          if (err) console.log(err);
          console.log('New Project Added for Ranking')
        });

        res.redirect('/users/' + req.session.currentUser._id)
    });
});

// router.post('/login', authHelpers.loginUser, function(req, res){
//   console.log(req.session)
//   res.redirect('/users/' + req.session.currentUser._id);
// });


// router.delete('/', function(req, res){
//   req.session.destroy(function() {
//     res.redirect('/')
//   });
// });

module.exports = router;
