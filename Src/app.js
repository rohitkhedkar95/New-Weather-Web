const express=require('express')
const request=require('request')
const paths=require('path')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

var app=express();




var path=paths.join(__dirname,'../public');
app.use(express.static(path));
app.set('view engine','hbs');


var Pathtemp=paths.join(__dirname,'../temps/views');
app.set('views',Pathtemp);

const partialhs=paths.join(__dirname,'../temps/partials');
hbs.registerPartials(partialhs);

// const partial2=paths.join(__dirname,'../temps/partials');
// hbs.registerPartials(partial2);

// app.get('',(req,res)=>{
//     res.send("hello Express");
// })


app.get('',(req,res)=>{
    var da='dates'
    res.render('index',{
        title:'Weather'+da,
        Name:'Rk'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        titles:'this for about page'
    })
})


app.get('/Weather',(req,res)=>{

    if(!req.query.search)
     return res.send({
        Error:'Error While Binding Weather Data',
    })

      geocode(req.query.search,(error,Data)=>{

        if(error)
        {
           return res.send({
                Error:'Error While Binding Data'
            })
        }

        forecast(req.query.search,(error,ForecastData)=>{
            if(error)
            {
                return res.send({
                    Warning:'Error While Binding Forecast Data'
                })
               
            }

            res.send({
                weather:'Current Temp in '+req.query.search+' City Is '+ForecastData.temp,
                WindSpeed:'Current Wind Speed In '+req.query.search +' City Is '+ForecastData.windspeed,
                address:'Show Currently '+req.query.search+' Weather'
            })



        })

      })


    // res.send({
    //     Data:'Getting Weather Data......'
    // })

})


// app.get('/Weather',(req,res)=>{
// let Weart=''
// debugger;
//     url='http://api.weatherstack.com/current?access_key=c4549698ea334cdf22f27f08a309407f&query=Nagpur';
//     request({url:url,json:true},(error, response)=>{
//         debugger; 
//         console.log(response.body.current.temperature)
       
            
//             Weart=response.body.current.temperature;
               
        
//     });



// //     var options = {
// //         method: 'GET',
// //         url: 'http://api.weatherstack.com/current?access_key=c4549698ea334cdf22f27f08a309407f&query=Nagpur'
// //     }

// //     request({url:url}, function (error, response) {
    
// //         // if (!error && response.statusCode === 200) {
// //         //     console.log(body) // Print the json response
// //         // }
// // debugger;
// //         Weart=response.body.current.temperature;
// //     }


// console.log(Weart);
//     res.send('Temp'+Weart);
// })


app.get('*',(req,res)=>{
 res.render('404',{
   Errors:'Pages Not FOund'
 })
})

app.listen(3000,()=>{
    console.log('Start Express server');
})