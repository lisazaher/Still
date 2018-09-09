var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var sectionContent = [
	{
		title: "Still",
		body: "An app to help humans to manage anxiety"

	},
	{
		Participant1: "Lisa Zaher",
		Participant2: "Karen Zhao",
		Participant3: "Jothi Ramaswamy",
		Participant4: "Anushka Saxena",		

	},
	
	]
	res.render('index', { section: sectionContent });
});
module.exports = router;
