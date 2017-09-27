// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

require('./routes')(app);

// Set server port
var port = 4000;
app.listen(port);
console.log('Server running at http://localhost:' + port + '/');
