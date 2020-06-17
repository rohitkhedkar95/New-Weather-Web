// const { response } = require("express")

// alert('Welcome to Index page!!')
 function weathersearch(Address) {
    
}



var Weatherss=document.querySelector('form');
var Searchs=document.getElementById('Search');
var FirstMsg=document.querySelector('#msg-1');
var SecondMsg=document.querySelector('#msg-2');
var newline = "<br/>";


Weatherss.addEventListener('submit',(e)=>{
    e.preventDefault();
    var  locas=Searchs.value
    console.log(locas);
    if(!locas)
    {
    return FirstMsg.textContent='Error in Loading Weather....'
    }
    FirstMsg.textContent='Loading Weather Data............'
    fetch('http://localhost:3000/Weather?search='+locas).then((response) =>{
        response.json().then((data)=>{
    
    
    if(data.error)
    {
       return FirstMsg.textContent=data.error;
       console.log("Error");
        // return console.log('Error binding data'+error);
    }
     
    FirstMsg.textContent=data.address;
    SecondMsg.textContent=data.weather +' cel. '+data.WindSpeed+' Km/h';
        //   return console.log (data.weather);
            })
    })
})