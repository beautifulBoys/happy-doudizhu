var express = require('express');
var router = express.Router();
// var aa = require('../public/index.html');

/* GET home page. */
router.get('/index', function(req, res, next) {
  console.log('收到请求了');
  res.send({id: 343432434324, msg: '我是get请求'});
});
router.post('/index', function(req, res, next) {
  console.log('收到请求了');
  res.send({id: 343432434324, msg: '我是post请求'});
});
router.delete('/index', function(req, res, next) {
  console.log('收到请求了');
  res.send({id: 343432434324, msg: '我是delete请求'});
});
router.put('/index', function(req, res, next) {
  console.log('收到请求了');
  res.send({id: 343432434324, msg: '我是put请求'});
});

module.exports = router;
