const request = require('postman-request');

if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const ak = process.env.ACCESS_KEY;
const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=39.154444,-9.066111';

request({url: url}, (error, response) => {  //,body
    const data = JSON.parse(response.body);  //response.body = body parameter
    //console.log(data)
    console.log(data.current)
});