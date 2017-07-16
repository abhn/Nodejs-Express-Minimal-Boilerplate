const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require("path");
const quote = require("./quotes.js");

app.use(express.static(__dirname + '/public'));

const handlebars = require('express-handlebars').create({ defaultLayout: 'main' })
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/quote', function(req, res){
  res.render('home', { quote: quote.getQuote() });
});

app.get('/quote.txt', function(req, res) {
  res.send(quote.getQuote());
});

app.get('/quote.xml', function(req, res) {
  // was easier than using a third party :p
  var xml = '<?xml version="1.0" encoding="UTF-8" ?><quote>' + quote.getQuote() + '</quote>';
  res.set('Content-Type', 'text/xml');
  res.send(xml);
});

app.get('/quote.json', function(req, res){
  res.json({quote: quote.getQuote()});
});

// handle 404
app.use(function(req, res, next) {
  res.status(404);
  res.send('404');
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
