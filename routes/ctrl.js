var express = require('express');
var router = express.Router();

var getImgs = require('./util.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = getImgs();
  data.title ='Express';
  res.render('ctrl', data);
});

module.exports = router;
