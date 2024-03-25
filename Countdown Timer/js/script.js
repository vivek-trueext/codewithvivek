var buttonClick = document.getElementById('button');

buttonClick.addEventListener('click', () => {
    clearInterval(a);
    var s = setInterval(function () {
        var userDate = document.getElementById('userInput').value;
        var futureDate = new Date(userDate).getTime();
        var currentTime = new Date().getTime();
        var timeDifference = futureDate - currentTime;

        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var miniuts = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));

        document.getElementById('dayBox').innerHTML = days;
        document.getElementById('hourBox').innerHTML = hours;
        document.getElementById('miniutBox').innerHTML = miniuts;
        document.getElementById('secondBox').innerHTML = seconds;

        if (timeDifference <= 0) {
            clearInterval(s);
            alert('time over');
        }
    }, 1000);

});

var a = setInterval(timer, 1000);

function timer() {
    var futureDate = new Date("2024-08-12 23:59:59");



    var currentTime = new Date().getTime();
    var userInput = new Date(futureDate).getTime();
    var timeDifference = userInput - currentTime;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var miniuts = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / (1000));

    // if (seconds < 10) {
    //     seconds = "0" + seconds;
    // }
    // if (miniuts < 10) {
    //     miniuts = "0" + miniuts;
    // }
    // if (hours < 10) {
    //     hours = "0" + hours;
    // }
    // if (days < 10) {
    //     days = "0" + days;
    // }

    document.getElementById('dayBox').innerHTML = days;
    document.getElementById('hourBox').innerHTML = hours;
    document.getElementById('miniutBox').innerHTML = miniuts;
    document.getElementById('secondBox').innerHTML = seconds;

    if (timeDifference <= 0) {
        clearInterval(a);
        alert('time over');
    }
}




