setInterval(function() {
    document.getElementById("time").innerHTML =
        new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}, 1000);

$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        document.getElementById("zone").innerHTML = location.country_name;
    }
});

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
var stopwatchFlag = false;

let output = document.getElementById('time');
let ms = 0;
let sec = 0;
let min = 0;

function timer() {
    ms++;
    if (ms >= 100) {
        sec++
        ms = 0
    }
    if (sec === 60) {
        min++
        sec = 0
    }
    if (min === 60) {
        ms,
        sec,
        min = 0;
    }

    //Doing some string interpolation
    let milli = ms < 10 ? `0` + ms : ms;
    let seconds = sec < 10 ? `0` + sec : sec;
    let minute = min < 10 ? `0` + min : min;

    let timer = `${minute}:${seconds}:${milli}`;
    output.innerHTML = timer;
};

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








    $("#stopwatch").click(function() {
        if (stopwatchFlag == false) {
            stopwatchFlag = true;
            document.getElementById("time").innerHTML = "";
            timer = setInterval(timer);
            document.getElementById("time").innerHTML = timer;
            $("#stopwatch").removeClass("btn-primary");
            $("#stopwatch").text("Ferma cronometro");
            $("#stopwatch").addClass("btn-danger");
        } else if (stopwatchFlag == true) {
            stopwatchFlag = false;
            clearInterval(timer);
            ms = 0;
            sec = 0;
            min = 0;
            document.getElementById("time").innerHTML = "00:00:00";
        }
    });
});