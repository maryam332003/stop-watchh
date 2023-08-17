let start = document.getElementById("start");
let stop = document.getElementById("Stop");
let rest = document.getElementById("Rest");

let displayTime = document.getElementById("displayTime");
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; //new 

start.addEventListener("click", () => {

  int = setInterval(displayTimer, 1);
});

stop.addEventListener("click", () => {
  clearInterval(int);
  stop.style.display='flex'
  play.style.display='flex'
});

rest.addEventListener("click", () => {
  clearInterval(int);
  let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime.innerHTML = "00 : 00 : 00 : 00";
});

function displayTimer() {
  milliseconds ++;
  if (milliseconds == 60) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  displayTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
