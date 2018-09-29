const express = require('express');
const port = process.env.PORT || 3000 ;
const bodyParser = require('body-parser');
//const config = require('config');
const morgan = require("morgan");

//console.log(config.get('name'));
let {mysqlConnection} = require('./src/database/mysqlConfig');
let app = express();

console.log(mysqlConnection.query("select 1+4"));
app.listen(port, ()=>{
	console.log('Started listening to port '+port);
})

app.use(express.static('public'));
app.use(bodyParser.json());
//solved bug "Access-Control-Allow-Origin"
app.use(morgan('combined'));
// show http operation on the server side
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});

require('./src/router/router')(app);

module.exports = {app};