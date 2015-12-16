var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log("malai root ma hit garrere paxi hit hunxa")
  res.render('index', { title: 'Home' });
});



module.exports = router;
