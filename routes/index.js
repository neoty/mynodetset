var express = require('express');
var router = express.Router();
var commonFunc = require('../module/common.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    commonFunc.myFunc();
    res.render('index', {title: 'auto restart'});
});


//
// router.all('/myTest', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next(); // pass control to the next handler
// });

router.get('/myTest', function(req, res, next) {
    return res.redirect('http://naver.com');
    console.log('asdf');
    // var data = {'f':'my test', "as111111111df":'result'};
    // res.json(data);
});

module.exports = router;


