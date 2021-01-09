const request = require('postman-request');


const geocode = (address, callback) => {
    const at = process.env.ACCESS_TOKEN_MAPBOX;
    //encodeURIComponent(address)
    const urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address  + '.json?access_token=' + at + '&limit=1';

    request({url: urlMapbox, json: true}, (error, response) => {

        if(error){
            callback('Unable to connect to location services!', undefined)
        } 
            else if(response.body.features.length === 0){
                callback('Unable to find location. Try another search.', undefined)        
            }
          
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })     
        }
    })

}

module.exports = geocode;