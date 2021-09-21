setInterval(function() {
    document.getElementById("time").innerHTML =
        new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}, 1000);

document.getElementById("zone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone;

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

var styleFlag = "digital";

$(document).ready(function() {
    $("#style").click(function() {
        if (styleFlag === "digital") {
            $("#digital-clock").css("visibility", "hidden");
            $("#analog-clock").css("visibility", "visible");
            styleFlag = "analog";
        } else if (styleFlag === "analog") {
            $("#analog-clock").css("visibility", "hidden");
            $("#digital-clock").css("visibility", "visible");
            styleFlag = "digital";
        }

    });
});