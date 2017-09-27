// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

require('./routes')(app);

// Set server port
var port = process.env.npm_package_config_port;
app.listen(port);
console.log('Server running at http://localhost:' + port + '/');
