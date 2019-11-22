const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf88f267125606d5e4338dcb27547989";
const apiURL = "http://api.openweathermap.org/data/2.5/forcast?id=5604473&units=imperial&APPID=bf88f267125606d5e4338dcb27547989";

fecthAPI = (apiURL, num) => {
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        switch(num) {
            case 1:
                this.summaryBox(jsObject);
                break;
            case 2:
                this.fiveDay(jsObject);
                break;
        }
    });
}
summaryBox = (jsObject) => {
    var mainObj = jsonObject.main;

    let cityName = jsObject.name;
    let current = jsObject.weather[0].description;
    let high = mainObj.temp_max, temp = mainObj.temp, humidity = mainObj.humidity;
    let windSpeed = jsObject.wind.speed;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('current').textContent = current;
    document.getElementById('high').textContent = high;
    document.getElementById('temp').textContent = temp;
    document.getElementById('humidity').textContent = humidity;
    document.getElementById('wind-speed').textContent = windSpeed;

    this.checkWindchill(temp, windSpeed);
}

fiveDay = (jsObject) => {
    var count = 0;

    for(key in jsObject.list) {
        var textCheck = jsObject.list[key].dt_text;
        if(textCheck.includes("18:00:00")) {
            count++;

            const imagesrc = 'https://openweather.org/img/w' + jsObject.list[key].weather[0].icon + '.png';
            const desc = jsObject.list[key].weather[0].description;

            document.getElementById('day' + count).textContent = jsObject.list[key].main.temp;

            document.getElementById('icon' + count).setAttribute('src', imagesrc);
            document.getElementById('icon' + count).setAttribute('alt', desc);
        }
    }
}
checkWindchill = (temp, windSpeed) => {
    let t = (temp <= 50) ? true : false;
    let s = (windSpeed > 3.0) ? true : false;
    var chillDiv = document.getElementById("wind-chill");

    if (t && s) {

        let exp = Math.pow(windSpeed, 0.16);
        let feh = 35.74 + (0.6215 * temp) - (35.75 * exp) + (0.4275 * temp * exp);

        chillDiv.innerHTML = feh.toFixed(1) + 'F';  
    } else {
        chillDiv.innerHTML = 'N/A';
    }
}
fetchAPI(apiURL, 1);
fetchAPI(apiURL2, 2);
