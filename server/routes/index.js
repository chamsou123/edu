var express = require('express');
var fs = require('fs');
var path = require('path')

var router = express.Router();

var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

router.get('/', function(req, res, next) {
  res.json(data);
});

router.post('/:id/add', function(req, res, next) {
  data[req.params.id].solved += 1;
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json(data);
});

router.post('/purge', function(req, res, next) {
  for (var i =0; i < data.length; i++) {
    data[i].solved = 0;
  }
  res.send(200);
});

module.exports = router;
