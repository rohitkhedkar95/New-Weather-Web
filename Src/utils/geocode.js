const request=require('request')


const geocode=(address,callback)=>
{
 
    debugger;
const urls='http://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoicm9oaXRraGVka2FyIiwiYSI6ImNrYjdvODZlcDAzazcycnFyYTNkMWkwM20ifQ.LoauSi_-_PejJJUO5XCkdg';
request({url:urls,json:true},(error,response)=>{
    if(error)
    {
        callback('unable to locate server !!!',undefined);
    }
    // else if(error.body.features.length==0)
    // {
    //     callback('search proper location !!!',undefined);
    // }
    else
    {
        callback(undefined,{
               lat:response.body.features[0].center[0],
               long:response.body.features[0].center[1],
               Location:response.body.features[0].place_name
        })
    }
    
})

}


module.exports=geocode;