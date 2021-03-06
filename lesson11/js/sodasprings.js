//weather summary Soda Springs

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=430370a79b47b0401281e2917fbf7a2b&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {

        document.getElementById('currentCond').innerHTML = weatherInfo.weather[0].main;
        document.getElementById('highT').innerHTML = Math.round(weatherInfo.main.temp) + "\u00B0 F";
        document.getElementById('windSpeed').innerHTML = Math.round(weatherInfo.wind.speed) + " mph";
        document.getElementById("humidity").innerHTML = weatherInfo.main.humidity + "%";


        const t = parseFloat(document.getElementById('highT').textContent);
        const s = parseFloat(document.getElementById('windSpeed').textContent);
        let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
        let windChill = Math.round(f);
        if (t <= 50 && s > 3) {
            document.getElementById("windChill").textContent = windChill + "\u00B0 F";
        } else {
            document.getElementById("windChill").textContent = "No windchill today";
        }

    });


//5-day forecast for Soda Springs


const api = "//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=430370a79b47b0401281e2917fbf7a2b&units=imperial";

const iconURL = "//openweathermap.org/img/w/";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

fetch(api)
    .then((response) => response.json())
    .then((fiveDay) => {

        const fiveForecast = fiveDay.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

        for (i = 0; i < fiveForecast.length; i++) {
            let section = document.createElement('section');
            let day = document.createElement('h4');
            let temp = document.createElement('p');
            let icon = document.createElement('img');

            let date = new Date(fiveForecast[i].dt_txt);
            day.textContent = days[date.getDay()];

            icon.src = iconURL + fiveForecast[i].weather[0].icon + '.png';
            icon.alt = fiveForecast[i].weather[0].description;

            temp.textContent = Math.round(fiveForecast[i].main.temp) + "\u00B0 F";

            section.append(day);
            section.append(icon);
            section.append(temp);

            document.getElementById('gridTemp').appendChild(section);
        }
    });

    //Events for Soda Springs

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {


            const towns = jsonObject['towns'];
            let certainTowns = towns.filter(filterByName);

            function filterByName(item) {
               if (item.name == "Soda Springs") {
                    return true;
                }
            };

            for (i = 0; i < certainTowns[0].events.length; i++) {
                document.getElementById("sodaEvents").innerHTML += "<p>" + towns[6].events[i] + "</p>";
            }

        });