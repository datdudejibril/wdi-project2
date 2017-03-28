var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session)
  User.find({})
  .exec(function(err, users){
    if (err) { console.log(err); }
    res.render('users/index.hbs', {
      users: users,
      currentUser: req.session.currentUser
    })
  });
})

module.exports = router;
