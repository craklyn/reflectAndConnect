module.exports = function(app){
  var express = require('express');
  app.use(express.static(__dirname + '/public/stylesheets'));

  var api = require('./controllers/api');
  app.get('/index', api.getHome);   
  app.get('/style.css', api.getStyleSheet);     
  app.use(express.static('public'))
}
