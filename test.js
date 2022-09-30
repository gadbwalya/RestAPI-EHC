var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 3399;
const projectroute = require('./Routes/projectRoute');
const cors = require('cors');
const path = require('path');
app.set('env','development');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('We are learning now on API');
})
app.get('/test', function (req, res) {
    res.send('Hello World, i want to test this app');
})
app.use('/project', projectroute);

app.post('/', (req, res)=>{
    res.send('Hello World, this a post i want to test this app');
})

app.listen(port,()=>{console.log('running on port '+port)});

/*
var server = app.listen(3399, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("congrats, the the server is running now ", host, port)
})
*/

/*
console.log("testing my code");
let x = 45;
let name2 = 'maxwell';
console.log(x);
console.log(name2);
*/
