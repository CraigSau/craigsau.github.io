let ageEl = document.getElementById("age");

birthdate = new Date(2000, 5, 10);

setInterval(() => {
    let time = (new Date() - birthdate) / (1000 * 60 * 60 * 24 * 365); // milliseconds per year
    ageEl.innerText = time.toString().substring(0, 12);
}, 50);