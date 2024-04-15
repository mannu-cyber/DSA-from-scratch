const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const getBtn = document.getElementById("getbtn");
const clearBtn = document.getElementById("clearBtn");
const countDown = document.getElementById("countDown");
let counter = 0;

let stopId;

startBtn.addEventListener("click", () => {
  stopId = setInterval(() => {
    countDown.innerText = counter++;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopId);
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  countDown.innerText = 0;
  clearInterval(stopId);
});

getBtn.addEventListener("click", () => {
  const displayEvent = document.getElementById("displayEvent");

  displayEvent.innerText = ` You time is ${countDown.innerText}`;
});

clearBtn.addEventListener("click", () => {
  displayEvent.innerText = "";
});
