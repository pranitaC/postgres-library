var orm = require('orm');

var db = orm.connect('pg://deploy:deploy@localhost/library_management');

db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);

  // connected
  // ...
});

module.exports = db;
