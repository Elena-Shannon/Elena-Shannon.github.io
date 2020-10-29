//To display current date

window.onload = currentBox;

function currentBox() {
    let date = new Date().getFullYear();
    let d = new Date();
    let monthDay = d.getDate();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    document.getElementById('currentdate').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()] + ' ' + date;
}

//to toggle

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//message

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
} else {
    element.classList.add("hideme");
}