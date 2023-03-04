/* Global Variables */

///const res = require("express/lib/response");

///const { all } = require("express/lib/application");

// Personal API  Key for OpenWeatherMap API
const apiKey = 'd33d02707a846275f4d688aa37619d36&units=metric' ;

// Create a new date instance dynamically with JS
let d = new Date();
/// month being from ZERO
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

 // Event listener to add function to existing HTML DOM element
 const generate =document.getElementById("generate");

 // Function called by event listener 
 
 generate.addEventListener("click" , async () =>{
    try{   
    let zipCode = document.getElementById("zip").value;
    let feeling = document.getElementById("feelings").value;
    //94040
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    const resp = await fetch(baseURL).then(res => res.json());
    const temp = await resp.main.temp;
    //for sure
    console.log(temp);

    console.log(newDate);

    ///FUNCTION post data
    await fetch('/add' ,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify({
            newDate,temp,feeling
        })
    });

    //// TO GET Web API Data and display it 
    const allData = await fetch('/all').then(res => res.json());
     
    document.getElementById("temp").innerHTML = `Temp : ${allData.temp} `;     
    document.getElementById("date").innerHTML = `Date : ${allData.date} `;     
    document.getElementById("content").innerHTML = `Feeling : ${allData.feeling} `;   


    }catch(error){
        console.log('error is ',error);
    }

});



 

