export default class UI {
    static loadData(todayWeather) {
        const contentBox = document.getElementById("content-box");
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
        const icon = document.createElement("img");
        icon.setAttribute("id", "firstIcon");
        icon.src = "https://openweathermap.org/img/wn/02d@2x.png";
        icon.style.height = "8em";
        icon.style.width = "8em";
        contentBox.appendChild(icon);
      }
}