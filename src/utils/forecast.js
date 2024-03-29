const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ae97972bf12eea53cf5e9bfc737bcb7e&query=' + latitude +',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) { 
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '˚C and it feels like ' + body.current.feelslike + '˚C. Humidity is ' + body.current.humidity + '% and wind speed is ' + body.current.wind_speed + 'km/hr ' + body.current.wind_dir)
        }
    })
}

module.exports = forecast