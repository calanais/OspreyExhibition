var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:imagenumber', function(req, res, next) {
  console.log(req.params);
  res.io.emit("socketToMe", req.params);
  res.send('respond with a resource');
});

module.exports = router;
