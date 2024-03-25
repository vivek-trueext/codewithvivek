let image = document.getElementById('image');
let crossButton = document.getElementById('crossbtn');
let body = document.getElementById('body');


image.addEventListener('click', function () {
    image.style.transform = "scale(6)";
    crossButton.style.visibility = "visible";
    body.style.backgroundColor = "rgb(0,0,0,0.2)"
});

crossButton.addEventListener('click', function () {
    image.style.transform = "scale(1)";
    crossButton.style.visibility = "hidden";
    body.style.backgroundColor = "rgb(255,255,255)";
});
