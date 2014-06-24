var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var Datastore = require('nedb')
  	db = new Datastore({ filename: 'statuses', autoload: true });
	db.find({ }).sort({'time':1}).exec(function (err, docs) {
		docs.reverse();
		docs = docs.slice(0,5);
		res.render('index', { title: 'Home' ,'docs':docs});
	});
});

module.exports = router;
