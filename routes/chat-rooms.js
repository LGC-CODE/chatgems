var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
  res.render('rooms/room-space.ejs', {room: req.params.id });
});



module.exports = router;
