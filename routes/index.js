var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.send('hello');
  res.render('../views/index');
});

module.exports = router;
