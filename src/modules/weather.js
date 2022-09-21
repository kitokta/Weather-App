export default class Weather {
    constructor (temperature, feelsLike, tempMin, tempMax, humidity, pressure, description, icon, name, country) {
        this.Nome = name;
        this.Pais = country;
        this.Temperatura = temperature;
        this.Sensacao = feelsLike;
        this.TempMin = tempMin;
        this.TempMax = tempMax;
        this.Humidade = humidity;
        this.Pressao = pressure;
        this.Descricao = description;
        this.Icon = icon;
    }
}