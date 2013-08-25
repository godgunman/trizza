var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());


app.use('/css', express.static(__dirname + '/css'));

app.use('/js', express.static(__dirname + '/js'));

app.use('/images', express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  var content = fs.readFileSync('index.html', 'utf-8');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
