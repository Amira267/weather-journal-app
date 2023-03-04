// Require Express to run server and routes
const express = require("express");

// Setup empty JS object to act as endpoint for all routes
let projectData = {};


// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');


//Here we are configuring express to use body-parser as middle-ware.

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
/* Middleware*/
const cors = require ("cors");

///////////////0const res = require('express/lib/response');

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


const port = 8000;
 app.listen(port ,()=>{
     console.log("server is running port "+ port);

 });
 app.post("/add" , (req,res)=>{
    
    projectData.date = req.body.newDate;
    projectData.temp = req.body.temp;
    projectData.feeling = req.body.feeling;
    res.end();
});
 

app.get('/all' , (req,res) =>{
    res.send(projectData);
});



