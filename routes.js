module.exports = function(app){
  var express = require('express');
  app.use(express.static(__dirname + '/public/stylesheets'));
  //app.use(express.static(__dirname + '/public/images'));
  var path = require('path');
  app.use('/images', express.static(path.join(__dirname, 'public/images')));

  var api = require('./controllers/api');
  app.get('/index', api.getHome);   
  app.get('/', api.getHome);   
  app.get('/style.css', api.getStyleSheet);
  app.use(express.static(__dirname + '/public'))
}
