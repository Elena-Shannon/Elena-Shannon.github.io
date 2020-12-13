
 const api = "//api.openweathermap.org/data/2.5/forecast?zip=77600,mx&appid=430370a79b47b0401281e2917fbf7a2b&units=imperial";

 const iconURL = "//openweathermap.org/img/w/";

 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 fetch(api)
    .then((response) => response.json())
     .then((threeDay) => {
         //console.log(response);
         const threeForecast = threeDay.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

       for (i = 0; i < 3; i++) {
            let section = document.createElement('section');
            let day = document.createElement('h4');
            let temp = document.createElement('p');
           let icon = document.createElement('img');

            let date = new Date(threeForecast[i].dt_txt);
            day.textContent = days[date.getDay()];

             icon.src = iconURL + threeForecast[i].weather[0].icon + '.png';
            icon.alt = threeForecast[i].weather[0].description;

            temp.textContent = Math.round(threeForecast[i].main.temp) + "\u00B0 F";

            section.append(day);
            section.append(icon);
           section.append(temp);

             document.getElementById('gridTemp').appendChild(section);
        }
    });

    //Weather


    const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=77600,mx&appid=430370a79b47b0401281e2917fbf7a2b&units=imperial";

    fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {

        document.getElementById('currentCond').innerHTML = weatherInfo.weather[0].main;
        document.getElementById('highT').innerHTML = Math.round(weatherInfo.main.temp) + "\u00B0 F";
        document.getElementById("humidity").innerHTML = weatherInfo.main.humidity + "%";

    });

    //current date

var modiDate = document.lastModified;

document.getElementById("modiDate").innerHTML = modiDate;