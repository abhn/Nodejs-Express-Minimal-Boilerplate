const express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require("path");


app.use(express.static(__dirname + '/public'));

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' })
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// sample data
var thoughts = [
  'old is gold',
  'nodejs is awesome!'
]

app.get('/', function(req, res){
  var today = thoughts[Math.floor(Math.random() * thoughts.length)]
  res.render('home', { thought: today });
});

// handle 404
app.use(function(req, res, next) {
  res.status(404);
  res.render('404');
});

// handle 500
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});
