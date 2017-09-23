fs = require('fs');

exports.getHome = function(req, res){
  fs.createReadStream("controllers/index.html").pipe(res);
};

exports.getStyleSheet = function(req, res){
  fs.createReadStream("public/stylesheets/style.css").pipe(res);
};

