let button = document.getElementById('validate');
let temperature = document.getElementById('temperature')
let humidity = document.getElementById('humidity');
let tempMin = document.getElementById('temp-min');
let wind = document.getElementById('wind');
let windGust = document.getElementById("windGust");
let clouds = document.getElementById("clouds");
let weather = document.getElementById('weather');
let tempMax = document.getElementById('temp-max');

button.addEventListener("click", function (){

    let city = document.getElementById('city').value;
    let requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=f06370bad7fc3896fd6345658c19d135&units=metric&lang=fr";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", requestURL);
    xhr.responseType="json";



    xhr.onload = function () {

        if (xhr.status !== 200) {
            return;
        }

        let  response = xhr.response;

        weather.innerHTML = response.weather[0].description;
        temperature.innerHTML = "Température : " + Math.ceil(response.main.temp) + " degrés";
        tempMin.innerHTML = "Température minimale : " + Math.ceil(response.main.temp_min) + " degrés";
        tempMax.innerHTML = "Température maximale : " + Math.ceil(response.main.temp_max) + "degrés";
        humidity.innerHTML = "Humidité ambiante : " + Math.ceil(response.main.humidity) + "%";
        wind.innerHTML = "Vitesse du vent : " + Math.ceil(response.wind.speed) + " Km/h";
        windGust.innerHTML = "Vitesse des rafales de vents : " + Math.ceil(response.wind.gust) + " Km/h";
        clouds.innerHTML = "Opacité des nuage : " + Math.ceil(response.clouds.all) + "%";
    }
    xhr.send();
})