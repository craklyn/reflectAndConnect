fs = require('fs');

exports.getHome = function(req, res){
  fs.createReadStream("controllers/index.html").pipe(res);
};
