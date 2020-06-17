const request=require('request')


const forecast=(location,callback)=>{

    debugger;
    url='http://api.weatherstack.com/current?access_key=c4549698ea334cdf22f27f08a309407f&query='+location;
    request({url:url,json:true},(error,Response)=>{
          
        if(error)
        {
            callback('Error in server',undefined)
        }
        else
        {
            callback(undefined,{
                temp:Response.body.current.temperature,
                windspeed:Response.body.current.wind_speed
            })
        }

    })

}


module.exports=forecast;