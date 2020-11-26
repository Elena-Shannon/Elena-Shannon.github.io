const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {


        const towns = jsonObject['towns'];

        let certainTowns = towns.filter(filterByName);

            function filterByName(item) {
            if (item.name == "Preston" || item.name == "Fish Haven" || item.name == "Soda Springs") {
                    return true;
            }
            };

            for (let i = 0; i < certainTowns.length; i++) {

            let card = document.createElement('section');
            let textContainer = document.createElement('div');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');


            h3.textContent = certainTowns[i].name;
            h4.textContent = certainTowns[i].motto;
            yearFounded.textContent = "Year Founded: " + certainTowns[i].yearFounded;
            currentPopulation.textContent = "Population: " + certainTowns[i].currentPopulation;
            averageRainfall.textContent = "Average Rainfall: " + certainTowns[i].averageRainfall;
            image.setAttribute('src', "images/" + certainTowns[i].photo);
            image.setAttribute('alt', h3.textContent + " - " + certainTowns[i].order);

            textContainer.append(h3, h4, yearFounded, currentPopulation, averageRainfall);
            card.append(textContainer, image);

            document.querySelector('div.cards').appendChild(card);

        }

    });