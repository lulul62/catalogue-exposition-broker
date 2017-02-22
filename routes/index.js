var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('http://localhost:3000/url', function (body, response) {
      var dataUrl = JSON.parse(response.body);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(dataUrl);
  });
});

module.exports = router;
