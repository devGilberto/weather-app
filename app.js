const request = require('postman-request');

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const ak = process.env.ACCESS_KEY;
//const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=39.154444,-9.066111';
const url = 'http://api.weatherstack.com/forecast?access_key=' + ak + '&query=39.154444,-9.066111&forecast_days =71&hourly=0&units=m';

request({url: url, json: true}, (error, response) => {  //,body
  
    // console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.");
});