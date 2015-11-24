var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var search_params = {};
  var users = req.models.User.find({}, function(err,users){
    res.render('users/search', { 
      users: users,
      search_params: search_params 
    });
  });
});

module.exports = router;
