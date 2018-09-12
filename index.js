const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var path = require('path');
var http = require("http");
var url = require("url");
var cors = require("cors");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../')));

app.options('*', cors()); 


// url: http://localhost:3000/
app.get('/', (request, response) => response.send('Hello World'));

// all routes prefixed with /api
app.use('/api', router);



// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (request, response) => {
  response.json({message: 'Hello, welcome to my server'});
});



router.get('/stuff', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    
    response.json({message: myResponse});
  });

  router.get('/todo', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    
    response.json([
        {
          "ID": 1,
          "Game_Name": "football",
          "Player1": "shlomi",
          "Player2": "avi"
        },
        {
          "ID": 2,
          "Game_Name": "fifa",
          "Player1": "noa",
          "Player2": "ben"
        }]);
  });  

  router.post('/todo', (request, response) => {
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var myParam = parameters.myParam;
    // e.g. myVenues = 12;
    
    var myResponse = `I multiplied the number you gave me (${myParam}) by 5 and got: ${myParam * 5}`;
    
    response.json([
        {
          "ID": 3,
          "Game_Name": "pro",
          "Player1": "aaa",
          "Player2": "bbb"
        },
        {
          "ID": 4,
          "Game_Name": "need for speed",
          "Player1": "ccc",
          "Player2": "ddd"
        }]);
  });  
  

// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));