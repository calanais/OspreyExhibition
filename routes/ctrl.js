var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = { title: 'Express' };
  res.render('ctrl', data);
});

module.exports = router;
