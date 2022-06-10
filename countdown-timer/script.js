const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondEL = document.getElementById("second");

const newYear = "14 June 2022";

function countDown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondEL.innerHTML = formatTime(seconds);

  if (totalSeconds < 0) {
    clearInterval();
    document.getElementsByClassName("title").innerHTML =
      "Happy Birthday Sabar Subakti";
  }
  //   console.log(newYearsDate - currentDate);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
