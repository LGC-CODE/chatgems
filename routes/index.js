var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rooms', function(req, res, next) {
  res.render('rooms/rooms');
});

module.exports = router;
