let button = $('#validate');


button.click( function () {

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

        $('#weather').text(response.weather[0].description);
        $('#temperature').text("Température : " + Math.ceil(response.main.temp) + " degrés");
        $('#temp-min').text("Température minimale : " + Math.ceil(response.main.temp_min) + " degrés");
        $('#temp-max').text("Température maximale : " + Math.ceil(response.main.temp_max) + " degrés") ;
        $('#humidity').text("Humidité ambiante : " + Math.ceil(response.main.humidity) + "%");
        $('#wind').text("Vitesse du vent : " + Math.ceil(response.wind.speed) + " Km/h");
        $("#windGust").text("Vitesse des rafales de vents : " + Math.ceil(response.wind.gust) + " Km/h") ;
        $("#clouds").text("Opacité des nuage : " + Math.ceil(response.clouds.all) + "%");
    }
    xhr.send();
})