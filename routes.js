module.exports = function(app){
  var express = require('express');

  var api = require('./controllers/api');
  app.get('/index', api.getHome);   
  app.get('/', api.getHome);   

  app.use(express.static(__dirname + '/public'))
}
