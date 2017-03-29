var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'library'
});

connection.connect();
var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/getdata', function (req, res) {
	connection.query("SELECT * FROM `books`",function (
		error, results, fields) {
  if (error) throw error;
  res.send(results);
	});

});
app.get('/insert', function (req, res) {
	connection.query()
})
app.get('/insert', function (req, res) {
	connection.query()
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});