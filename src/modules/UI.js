import sensation from "../assets/sensation.svg";
import humidity from "../assets/humidity.svg";
import wind from "../assets/wind.svg";

export default class UI {
    static loadData(todayWeather) {
        const contentBox = document.getElementById("content-box");
        //testing element to delete
        if (document.getElementById("old-weather")) {
          const oldWeather = document.getElementById("old-weather");
          contentBox.removeChild(oldWeather);
        }

        const weatherBox = document.createElement("div");
        weatherBox.classList.add("weather-box");
        weatherBox.setAttribute("id", "old-weather");
        const descriptionBox = document.createElement("div");
        descriptionBox.classList.add("description-box");
      
        //declaring and getting img url
        const icon = document.createElement("img");
        icon.src = todayWeather.Icon;
        const iconBox = document.createElement("div");
        iconBox.classList.add("icon-box");
        iconBox.appendChild(icon);
      
        //declaring and getting weather description
        const description = document.createElement("h1");
        description.innerHTML = todayWeather.Descricao.toUpperCase();
        descriptionBox.appendChild(description);
      
        //declaring and getting tempData
        const temp = document.createElement("h2");
        const tempMin = document.createElement("h3");
        const tempMax = document.createElement("h3");
        temp.innerHTML = `${todayWeather.Temperatura} °C`;
        tempMin.innerHTML = `Min: ${todayWeather.TempMin} °C`;
        tempMax.innerHTML = `Max: ${todayWeather.TempMax} °C`;
        descriptionBox.appendChild(temp);
        descriptionBox.appendChild(tempMin);
        descriptionBox.appendChild(tempMax);
      

        //testing section elements to delete
        if(document.getElementById('wind-data') || document.getElementById('sensation-data') || document.getElementById('humidity-data') ) {
          const sensationDelete = document.getElementById('sensation-data');
          const sensationDiv = document.getElementById('sensation-div');
          sensationDiv.removeChild(sensationDelete);
          const humidityDelete = document.getElementById('humidity-data');
          const humidityDiv = document.getElementById('humidity-div');
          humidityDiv.removeChild(humidityDelete);
          const windDelete = document.getElementById('wind-data');
          const windDiv = document.getElementById('wind-div');
          windDiv.removeChild(windDelete);
        }

        //section
        //wind
        const windDiv = document.getElementById('wind-div');
        const windData = document.createElement('h2');
        windData.setAttribute('id', 'wind-data');
        windData.innerHTML = `${(todayWeather.Vento).toFixed(2)} Km/h`;
        windDiv.appendChild(windData);

        //sensation
        const sensationDiv = document.getElementById('sensation-div');
        const sensationData = document.createElement('h2');
        sensationData.setAttribute('id', 'sensation-data');
        sensationData.innerHTML = `${todayWeather.Sensacao} °C`;
        sensationDiv.appendChild(sensationData);

        //humidity
        const humidityDiv = document.getElementById('humidity-div');
        const humidityData = document.createElement('h2');
        humidityData.setAttribute('id', 'humidity-data');
        humidityData.innerHTML = `${todayWeather.Umidade} kg/m³`;
        humidityDiv.appendChild(humidityData);

        //appending everything
        weatherBox.appendChild(iconBox);
        weatherBox.appendChild(descriptionBox);
        contentBox.appendChild(weatherBox);

        //header
        const header = document.getElementsByTagName("header")[0];
        header.innerHTML = `${todayWeather.Nome} - ${todayWeather.Pais}`;

        

      }
      
      static defaultLoad() {
        const contentBox = document.getElementById("content-box");
        if(contentBox.innerHTML!= '') {
          contentBox.removeChild(contentBox.firstChild);
        }

        //section content
        const section = document.getElementsByTagName('section')[0];
        if(section.innerHTML!='') {
          section.removeChild(section.firstChild);
        }
        const dataBox = document.createElement('div');
        dataBox.classList.add('data-box');
        section.appendChild(dataBox);
        const windIcon = document.createElement('img');
        const humidityIcon = document.createElement('img');
        const sensationIcon = document.createElement('img');
        sensationIcon.src = sensation;
        humidityIcon.src = humidity;
        windIcon.src = wind;
        const sensationDiv = document.createElement('div');
        sensationDiv.setAttribute('id', 'sensation-div');
        const humidityDiv = document.createElement('div');
        humidityDiv.setAttribute('id', 'humidity-div');
        const windDiv = document.createElement('div');
        windDiv.setAttribute('id', 'wind-div');
        sensationDiv.appendChild(sensationIcon);
        humidityDiv.appendChild(humidityIcon);
        windDiv.appendChild(windIcon);
        dataBox.appendChild(sensationDiv);
        dataBox.appendChild(humidityDiv);
        dataBox.appendChild(windDiv);
      }
}