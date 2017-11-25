const axios = require('axios');

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function getWeather(name) {
    axios.get(URL + name)
    .then(res => console.log(res.data.main.temp));
}

console.log('Nhiet do: ' + getWeather('Berlin')); // Nhiet do la: 5
console.log('Temp: ' + getWeather('Berlin'));
