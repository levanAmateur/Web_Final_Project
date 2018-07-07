var express = require('express');
var mysql = require('mysql');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


var connection = mysql.createConnection( {
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'soad123',
  database: 'WEB_FINAL_PROJECT'
});

connection.connect(function(error) {
  if(error) {
    console.log('Connection error');
  } else {
    console.log('Successul connection');
  }
});

app.listen(5000, () => {
	console.log('listening on 5000');

});

app.get('/', (req, res) => {
  	res.sendFile(path.join(__dirname + '/html/home.html'));
});

app.get('/home', (req, res) => {
  	res.sendFile(path.join(__dirname + '/html/home.html'));
});

app.get('/groups', (req, res) => {
  	res.sendFile(path.join(__dirname + '/html/groups.html'));
});

app.get('/aboutus', (req, res) => {
  	res.sendFile(path.join(__dirname + '/html/aboutus.html'));
});

app.get('/placebet', (req, res) => {
  	res.sendFile(path.join(__dirname + '/html/placebet.html'));
});

