const request = require('postman-request');

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

/* const ak = process.env.ACCESS_KEY_WEATHERSTACK;
//const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=39.154444,-9.066111';
const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=';
// const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=39.154444,-9.06611&forecast_days =7&hourly=0&units=m';
// const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=' + lat +',' + long + '&forecast_days =7&hourly=0&units=m';

request({url: url, json: true}, (error, response) => {  //,body
    if(error){
        console.log("Unable to connect to weather service!");
    }
        else if(response.body.error.code){
        // else if(response.body.error.code === 601){
            console.log("Unable to find location");
        }

    else{
        // console.log(response.body.current)
        console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
    }
   
});
 */


//Geocoding
//Address -> Lat/Long -> Weather
const at = process.env.ACCESS_TOKEN_MAPBOX;

const urlMapbox = 'https://api.mapbox.com/geocoding/v5//mapbox.places/12what.json?access_token=' + at + '&limit=1';
// const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 'Los%20Angeles' + '.json?access_token=' + at + '&limit=1';
// var lat, long = '';
request({url: urlMapbox, json: true}, (error, response) => {  //,body
    if(error){
        console.log("Unable to connect to location services!");
    }
        else if(response.body.features.length === 0){
            console.log("Unable to find location. Try another search.");
        }

    else
    {
        // console.log(response.body.current)
        //console.log(response.body.features[0].center);
        // coordinates = response.body.features[0].center;
        const lat = response.body.features[0].center[0];
        const long = response.body.features[0].center[1];

        console.log(lat, long);
    }
});


