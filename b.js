const request = require('request');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getWeather(name, cb) {
    request.get(URL + name, (err, response, body) => {
        if (err) return cb(err, null);
        const resObject = JSON.parse(body);
        cb(null, resObject.main.temp);
    });
}

getWeather('Berlin', (err, temp) => {
    if (err) return console.log(err.message);
    console.log(temp);
});
