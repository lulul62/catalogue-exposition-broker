var express = require('express');
var router = express.Router();
var request = require("request");
var maderaUrl = [];
 const expositionUrl = "https://broker-url.firebaseio.com/exposition/-KdZy-hazIVTq5Je-Vot.json";


/* GET url listing. */
router.get('/', function (req, res) {
    request(expositionUrl, function getDevisMsStatusCheck(response, body) {
        if (body) {
            var dataToSend = JSON.parse(body.body);
            maderaUrl = dataToSend;
        }
    });
    res.json(maderaUrl);
});

module.exports = router;
