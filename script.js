// Update the digital clock every second
setInterval(() => {
  const now = new Date();
  document.getElementById("time").innerHTML = `${String(
    now.getHours()
  ).padStart(2, "0")} : ${String(now.getMinutes()).padStart(2, "0")} : ${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
}, 1000);

// Constants for the analog clock
const DEG = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

// Update the analog clock every second
setInterval(() => {
  const now = new Date();
  const hoursAngle = now.getHours() * 30 + now.getMinutes() / 2;
  const minutesAngle = now.getMinutes() * DEG;
  const secondsAngle = now.getSeconds() * DEG;

  hr.style.transform = `rotateZ(${hoursAngle}deg)`;
  mn.style.transform = `rotateZ(${minutesAngle}deg)`;
  sc.style.transform = `rotateZ(${secondsAngle}deg)`;
}, 1000);

// Toggle between digital and analog clock styles
let styleFlag = "digital";

$(document).ready(function () {
  $("#style").click(() => {
    if (styleFlag === "digital") {
      $("#digital-clock").css("visibility", "hidden");
      $("#analog-clock").css("visibility", "visible");
      styleFlag = "analog";
    } else {
      $("#analog-clock").css("visibility", "hidden");
      $("#digital-clock").css("visibility", "visible");
      styleFlag = "digital";
    }
  });
});
