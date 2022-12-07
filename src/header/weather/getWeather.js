export class GetWeather {
    static getAllWeather() {
       
        return fetch('http://api.openweathermap.org/data/2.5/weather?q=Saransk,ru&APPID=ecd357aa6fd05b96e2e3c250d44df56d').then(
            (response) => response.json()
        ).then((weather) => {
            return {   
                temperature: (weather.main.temp - 273.15).toFixed(1),
                temperaturen: (weather.main.temp - 272.15).toFixed(1),
                temperaturenn: (weather.main.temp - 270.15).toFixed(1),
                date: (weather.dt*1000),
                daten: ((weather.dt*1000)+ 86400000),
                datenn: ((weather.dt*1000)+172800000),
            };
        });
    }
}