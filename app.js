const express = require('express')
      , path = require('path')
      , fs = require('fs')
      , app = express()
      , https = require('https').Server({
          key: fs.readFileSync('./key.pem'),
          cert: fs.readFileSync('./cert.pem')
        }, app);

https.listen(9010, function() {
  console.log('listening on localhost:9010');
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "./")));
app.use(express.static(path.join(__dirname, "./public/")));
app.use(express.static(path.join(__dirname, "./public/bower_components")));
app.use(express.static(path.join(__dirname, "./public/webcomponents")));


app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
