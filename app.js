const geocode = require('./utils/geocode'); // optional file extension -> ./utils/geocode.js
const forecast = require('./utils/forecast'); // optional file extension -> ./utils/forecast.js

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// const ak = process.env.ACCESS_KEY_WEATHERSTACK;
// //const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=39.154444,-9.066111';
// const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=';
// // const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=39.154444,-9.06611&forecast_days =7&hourly=0&units=m';
// // const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=' + lat +',' + long + '&forecast_days =7&hourly=0&units=m';

// request({url: url, json: true}, (error, response) => {  //,body
//     if(error){
//         console.log("Unable to connect to weather service!");
//     }
//         else if(response.body.error.code){
//         // else if(response.body.error.code === 601){
//             console.log("Unable to find location");
//         }

//     else{
//         // console.log(response.body.current)
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
//     }
   
// }); */


// //Geocoding
// //Address -> Lat/Long -> Weather
// geocode('Boston', (error, data) => {
//     console.log('Error ', error)
//     console.log('Data ', data)
// });







//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(44.1545, -75.7088, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })