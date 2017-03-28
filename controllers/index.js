var express = require('express');
var router = express.Router();
var User = require('../models/user.js');


/* GET home page. */
router.get('/', function homeAction(req, res, next) {

  const allUsers = User.find({})
   .exec(function(err, users){
        if (err) { console.log(err); }
    const allProjects = []

  allUsers.each(function (user) {
    user.projects.each(function (project){
      projects.push(allProjects)
    });
  });

  res.render('home', {
    projectsToLoopOver: allProjects
  })
});

module.exports = router;
