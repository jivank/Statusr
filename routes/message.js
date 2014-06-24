var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/post', function(req, res) {
	  res.render('post', { title: 'Post' });

});

router.all('/submit', function(req, res) {
	var Datastore = require('nedb')
  	db = new Datastore({ filename: 'statuses', autoload: true });



	var name = req.param('name');
	var status = req.param('status');
	console.log('DEBUG',name,status);
	var doc = {'name' : name, 'status': status, 'time':(new Date).getTime()}
	db.insert(doc);
	res.send('<a href="/">success, click to go main page</a>');

});

module.exports = router;
