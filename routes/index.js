var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var search_params = {};
  var search_params = req.query.search || {};
  search_params.q = search_params.q || "";
  var query = "";
  var query_params = [];
  var scope = req.models.User.find({});
  if(search_params.q !== "") {
    query = "lower(email) like ? or lower(name) like ?"
    query_params.push("%"+search_params.q+"%")
    scope = scope.where(query,query_params);
  }
  var users = scope.all(function(err,users){
    res.render('users/search', { 
      users: users,
      search_params: search_params,
      error: err
    });
  });
});

module.exports = router;
