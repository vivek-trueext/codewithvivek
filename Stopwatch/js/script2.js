let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let startButton = document.getElementById('startButton');
let stoptButton = document.getElementById('stopButton');
let resettButton = document.getElementById('resetButton');
let lapButton = document.getElementById('lapButton');
let playIcon = document.querySelector('#startButton i');
let lapTime;
let lapNumber = 0;
let displayLaptime = "";
let displayLapnumber = "";
let displayMinute;
let displaySecond;
let displayMilisecond;
let interval = null;
let running = false;

function startClock() {
    miliseconds++;
    if (miliseconds > 99) {
        seconds++;
        miliseconds = 0;
        if (seconds > 59) {
            minutes++;
            seconds = 0;
            if (minutes > 59) {
                stopClock();
            }
        }
    }
    if (miliseconds < 10) {
        displayMilisecond = "0" + miliseconds.toString();
    }
    else {
        displayMilisecond = miliseconds.toString();
    }

    if (seconds < 10) {
        displaySecond = "0" + seconds.toString();
    }
    else {
        displaySecond = seconds.toString();
    }

    if (minutes < 10) {
        displayMinute = "0" + minutes.toString();
    }
    else {
        displayMinute = minutes.toString();
    }

    document.getElementById('minutes').innerHTML = displayMinute;
    document.getElementById('seconds').innerHTML = displaySecond;
    document.getElementById('miliseconds').innerHTML = displayMilisecond;
}

startButton.addEventListener('click', function () {
    if (!running) {
        interval = setInterval(startClock, 10);
        playIcon.classList.replace('fa-play', 'fa-pause');
        running = true;
    }
    else {
        clearInterval(interval);
        playIcon.classList.replace('fa-pause', 'fa-play');
        running = false;
    }
})

resettButton.addEventListener('click', function () {
    stopClock();
})

lapButton.addEventListener('click', function () {
    if (running) {
        lapNumber++;
        lapTime = displayMinute + ":" + displaySecond + ":" + displayMilisecond;
        displayLaptime += lapTime + "<br>";
        displayLapnumber += "Lap:" + lapNumber + "<br>";
        document.getElementById('printLaptime').innerHTML = displayLaptime;
        document.getElementById('printlap').innerHTML = displayLapnumber;
    }

})

function stopClock() {
    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    playIcon.classList.replace('fa-pause', 'fa-play');
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('miliseconds').innerHTML = "00";
    document.getElementById('printLaptime').innerHTML = "";
    document.getElementById('printlap').innerHTML = "";
    lapNumber = 0;
    displayLaptime = "";
    displayLapnumber = "";

    running = false;
}
