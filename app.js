const express = require('express')
      , path = require('path')
      , app = express()
      , http = require('http').Server(app);

http.listen(9010, function() {
  console.log('listening on localhost:4000');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "./")));
app.use(express.static(path.join(__dirname, "./public/")));
app.use(express.static(path.join(__dirname, "./public/bower_components")));
app.use(express.static(path.join(__dirname, "./public/webcomponents")));


app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
