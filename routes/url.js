var express = require('express');
var router = express.Router();
var request = require("request");
var maderaUrl = [];
 const brokerUrl = "https://broker-url.firebaseio.com/catalogue.json";


/* GET url listing. */
router.get('/', function (req, res) {
    request(brokerUrl, function getDevisMsStatusCheck(response, body) {
        if (body) {
            var dataToSend = JSON.parse(body.body);
            maderaUrl = [dataToSend];
        }
    });
    res.json(maderaUrl);
});

module.exports = router;
