var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'library'
});
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var open = require('open'); 

var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(express.static('public'));

connection.connect();

app.get('/getdata', function (req, res) {
  connection.query("SELECT * FROM `books`",function (
    error, results, fields) {
      if (error) throw error;
      res.send(results);
  });

})
var name,author,description,av;
app.post('/adddata', urlencodedParser, function (req, res) {
  name = req.body.name;
  author = req.body.author;
  description = req.body.description;
  connection.query("INSERT INTO `books`(`name`, `author`, `avaibility`, `description`) VALUES (?,?,'Available',?)", [name, author,description] ,
    function(error,results,fields){
      if (error) throw error;
      open("file:///C:/burhan/Programs/nodejs/mini%20project/library.html", "chrome");
  });
})
app.post('/deletedata', function (req, res) {
  connection.query("DELETE FROM `books` WHERE `name` = ?",[req.body.name], function(error,results,fields){
      if (error) throw error;

      open("file:///C:/burhan/Programs/nodejs/mini%20project/library.html", "chrome");
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});