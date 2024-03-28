const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const cong = "11 May 2025";

function countdown(){
    const congDate = new Date(cong);
    const currentDate = new Date();

    const totalSeconds = (congDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}

function formatTime(time){
    return time < 10 ? '0${time}' : time;
}

countdown();

setInterval(countdown, 1000);
