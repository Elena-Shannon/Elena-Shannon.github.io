
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