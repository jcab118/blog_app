
var express = require('express');

var path = require('path');

var router = express.Router();


var obj = require('../model/data_object.js');

router.get('/', function(req,res){

	res.sendFile(path.join(__dirname, '../../client/html/profile.html'));
});


router.get('/profile', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/blog.html'));
});

router.get('/api/profile', function(req,res){
	res.json({name: 'joel'})
});

module.exports = router;