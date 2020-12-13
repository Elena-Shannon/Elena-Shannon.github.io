//navigation toggle

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


//font loader

WebFont.load({
    google: {
        families: ["Montserrat:500,700,800,900", "Ubuntu:400,500,700"]
    }
});


//reservations from json file

const requestURL = 'data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

    const rentals = jsonObject['rentals'];

    for (let i = 0; i < rentals.length; i++) {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let maxPersons = document.createElement('p');
        let resHalf = document.createElement('p');
        let resFull = document.createElement('p');
        let walkHalf = document.createElement('p');
        let walkFull = document.createElement('p');
        let photo = document.createElement('img');
        let button = document.createElement('button');


        name.textContent = "Rental Type: " + rentals[i].name;
        maxPersons.textContent = "Max Number of People: " + rentals[i].maxPersons;
        resHalf.textContent = "Half Day with Reservation: $" + rentals[i].resHalf;
        resFull.textContent = "Full Day with Reservation: $" + rentals[i].resFull;
        walkHalf.textContent = "Half Day Walk-in: $" + rentals[i].walkHalf;
        walkFull.textContent = "Full Day Walk-in: $" + rentals[i].walkFull;
        photo.setAttribute('src', rentals[i].photo);
        photo.setAttribute('alt', name.textContent + " - " + rentals[i].order);
        button.textContent = "Reserve";

        myButtons(button);

        card.appendChild(photo);
        card.appendChild(name);
        card.appendChild(maxPersons);
        card.appendChild(resHalf);
        card.appendChild(resFull);
        card.appendChild(walkHalf);
        card.appendChild(walkFull);
        card.appendChild(button);


        document.querySelector('div.rentals').appendChild(card);
    }
    });

    function myButtons(button) {
        button.onclick = function() {
            window.open('reservations.html');
        };
    };


//slideshow in tours

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1};
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}













