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
  	res.sendFile(path.join(__dirname + '/html/index.html'));
});




app.post('/login', function(req, resp) {
	var username = req.body.username;
	var password = req.body.password;
	var query = "select * from USERS where USERNAME='" + username + "' and password='" + password +"';";
	console.log(username);
	console.log(password);
	console.log(query);
	connection.query(query, function(error, rows, fields) {
		if(error) {
			console.log("error");
		} else {
			console.log("Successul query");
			if(rows.affectedRows > 1) {
				//daalogine
			}
			if(rows.affectedRows == 1) {
				console.log('bazas daerxa :D');
			}
			if(rows.affectedRows == 0) {
				//incorrect
			}		
		}
		resp.send('Hello');
	});
})
