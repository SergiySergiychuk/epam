const express = require('express');
const router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'index.html'))
});


module.exports = router;