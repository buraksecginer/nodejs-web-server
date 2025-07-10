var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/hakkimda', middleware.requireAuthentication, function(req, res) {
    res.send('Hakkımda sayfası');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log('Server is running on port ' + PORT);
});
