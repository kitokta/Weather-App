export default class Weather {
  constructor(
    temperature,
    feelsLike,
    tempMin,
    tempMax,
    humidity,
    wind,
    description,
    icon,
    name,
    country,
    ID
  ) {
    this.Nome = name;
    this.Pais = country;
    this.Temperatura = temperature;
    this.Sensacao = feelsLike;
    this.TempMin = tempMin;
    this.TempMax = tempMax;
    this.Umidade = humidity;
    this.Vento = wind * 3.6;
    this.Descricao = description;
    this.Icon = icon;
    this.WeatherID = ID;
  }

  getWeather() {
    //thunderstorm
    if (this.WeatherID >= 200 && this.WeatherID <= 231) {
      return "thunderstorm";
    }
    //rain
    else if (this.WeatherID >= 500 && this.WeatherID <= 531) {
      return "rain";
    }
    //snow
    else if (this.WeatherID >= 600 && this.WeatherID <= 622) {
      return "snow";
    }
    //clear
    else if (this.WeatherID === 800) {
      return "clear";
    }
    //clouds
    else return "clouds";
  }
}
