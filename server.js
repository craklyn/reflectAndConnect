// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

require('./routes')(app);

// Set server port
console.log(process)
var port = process.env.PORT || process.env.npm_package_config_port || 8080;
app.listen(port);
console.log('Server running at http://localhost:' + port + '/');
