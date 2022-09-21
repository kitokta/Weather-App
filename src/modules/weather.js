export default class Weather {
    constructor (temperature, feelsLike, tempMin, tempMax, humidity, wind, description, icon, name, country) {
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
    }
}