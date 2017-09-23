module.exports = function(app){
    var api = require('./controllers/api');
    app.get('/index', api.getHome);   
    app.get('/style.css', api.getStyleSheet);   
}
