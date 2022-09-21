import Weather from "./weather.js";

getData("Cataguases")
.then((res) => {
    const todayWeather = res;
    loadData(todayWeather);
})



async function getData(location) {
const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fe021bc1d73bb3f7426ae51b83d8daff&lang=pt_br&units=metric`, {mode: 'cors'});

const weatherData = await response.json();
console.log(weatherData);
const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

const todayWeather = new Weather(weatherData.main.temp, weatherData.main.feels_like, weatherData.main.temp_min, weatherData.main.temp_max, weatherData.main.humidity, weatherData.main.pressure, weatherData.weather[0].description, icon)
return todayWeather;
}

function loadData(todayWeather) {
    const icon = document.createElement('img');
    icon.src = todayWeather.Icon;
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(icon);
}