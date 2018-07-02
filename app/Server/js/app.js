const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');
var mysql = require('mysql');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  	fs.readFile('./app/index.html', null, function(error, data) {
  	if(error) {
  		res.writeHead('404');
  		res.write('File not found!');
  	} else {
  		res.write(data);
  	}
  	res.end();
  });
});

var connection = mysql.createConnection( {
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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
  connection.query("select * from USERS;", function(error, rows, fields) {
  
    //callback
    if(!!error) {
      console.log('Query error');
    } else {
      console.log('Successul query');
      console.log(rows); 
    }
  });

});




