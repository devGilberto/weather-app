const geocode = require('./utils/geocode'); // optional file extension -> ./utils/geocode.js
const forecast = require('./utils/forecast'); // optional file extension -> ./utils/forecast.js


if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const address = process.argv[2];

if (!address){
    return console.log("Please provide a address");
}
else{
    // //Geocoding
    // //Address -> Lat/Long -> Weather
    geocode(address, (error, { latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error);
        }
        

        
        forecast(latitude, longitude, (error, forecastData) => {  //44.1545, -75.7088
            if (error){
                return console.log(error);
            }

            console.log(location)
            console.log(forecastData)
        });
    });
}



