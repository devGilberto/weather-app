const request = require('postman-request');



const forecast = (latitude, longitude, callback) => {

    const ak = process.env.ACCESS_KEY_WEATHERSTACK;
    const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=' + latitude +',' + longitude + '&units=m';
    // const url = 'http://api.weatherstack.com/current?access_key=' + ak + '&query=' + longitude +',' + latitude + '&units=m';



    request({url: url, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to weather service!', undefined);
        }
            else if(response.body.error){
                callback('Unable to find location.', undefined);

        }
        else{
            callback(
                error, //or undefined
                // {
                //     latitude: latitude, 
                //     longitude: longitude
                // }
                response.body.current.weather_descriptions[0] + 
                ". It is currently " + 
                response.body.current.temperature + 
                " degrees out. It feels like " + 
                response.body.current.feelslike + 
                " degrees out."
            );

        }


    })

    

}


module.exports = forecast;