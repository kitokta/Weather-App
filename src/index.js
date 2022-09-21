import Weather from "./modules/weather.js";
import "../styles/main.css";
import UI from "./modules/UI.js"

const button = document.getElementById("fetch");
const toSearch = document.getElementById("weather-search");

window.addEventListener("load", () => {
  UI.defaultLoad();
});

button.addEventListener("click", (e) => {
  const contentBox = document.getElementById("content-box");
  if (document.getElementById("firstIcon")) {
    const icon = document.getElementById("firstIcon");
    contentBox.removeChild(icon);
  }

  e.preventDefault();
  const keyword = toSearch.value;
  getData(keyword).then((res) => {
    const todayWeather = res;
    UI.loadData(todayWeather);
  });
});

async function getData(location) {
    try {
    const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fe021bc1d73bb3f7426ae51b83d8daff&lang=pt_br&units=metric`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  console.log(weatherData);
  const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const todayWeather = new Weather(
    weatherData.main.temp,
    weatherData.main.feels_like,
    weatherData.main.temp_min,
    weatherData.main.temp_max,
    weatherData.main.humidity,
    weatherData.main.pressure,
    weatherData.weather[0].description,
    icon,
    weatherData.name,
    weatherData.sys.country
  );
  console.log(todayWeather);
  return todayWeather;
}
    catch {
        const err = document.createElement('h1');
        err.style.color = 'red'
        err.innerHTML = "Erro ao procurar cidade";
        err.style.marginBottom = '100px'
        const contentBox = document.getElementById('content-box');
        contentBox.appendChild(err);
        setTimeout(() => {UI.defaultLoad()}, 1000);
    }
}

