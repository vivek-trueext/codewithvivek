let startButton = document.getElementById('startButton');
let stoptButton = document.getElementById('stopButton');
let resettButton = document.getElementById('resetButton');
let lapButton = document.getElementById('lapButton');
let playIcon = document.querySelector('#startButton i');
let startTime, interval;
let running = false;
let minute = 0;
let second = 0;
let milisecond = 0;



startButton.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime();
        interval = setInterval(startStopwatch, 100);
        if (playIcon.classList.contains('fa-play')) {
            playIcon.classList.replace('fa-play', 'fa-pause');
        }
        // else {
        //     playIcon.classList.replace('fa-pause', 'fa-play');

        // }

        running = true;
    }
    else {
        clearInterval(interval);
        if (playIcon.classList.contains('fa-pause')) {
            playIcon.classList.replace('fa-pause', 'fa-play');
        }
        running = false;
    }
});

resettButton.addEventListener('click', () => {

    clearInterval(interval);
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('miliseconds').innerHTML = "00";
    running = false;

});

function startStopwatch() {

    let currentTime = new Date().getTime();
    let timeElapsed = currentTime - startTime;
    let minute = Math.floor((timeElapsed / (1000 * 60)) % 60);
    let second = Math.floor((timeElapsed / 1000) % 60);
    let milisecond = Math.floor(timeElapsed % 1000);

    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
    document.getElementById('miliseconds').innerHTML = milisecond;
}


lapButton.addEventListener('click', () => {
    let textMinute = minute.toString();
    let textSecond = second.toString();
    let textMilisecond = milisecond.toString();
    let laptime = textMinute + ":" + textSecond + ":" + textMilisecond;
    document.getElementById('printLaptime').innerHTML = laptime;
});
