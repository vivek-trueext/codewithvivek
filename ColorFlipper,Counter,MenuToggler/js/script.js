function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("colorFlipper").style.backgroundColor = color;
    document.getElementById("color-code").innerHTML = "Color-code :" + color;
}

// code for second row: color flipper red green blue

const colorsArray = ["red", "green", "blue"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.getElementById("color-flipper").style.backgroundColor = colorsArray[randomNumber];
    colorName.innerHTML = colorsArray[randomNumber];
})

function getRandomNumber() {

    return Math.floor(Math.random() * colorsArray.length);

}

// counter javascript code here

let counter = 0;

let counterValue = document.getElementById("counter-value");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById('decrement-btn');
let resetBtn = document.getElementById('reset-btn');
let freezeBtn = document.getElementById('freeze-btn');

incrementBtn.addEventListener('click', function () {
    if (counter < 10) {
        counter++;
        counterValue.innerHTML = counter;
    }
    else {
        incrementBtn.disabled = true;
    }
    decrementBtn.disabled = false;
});

decrementBtn.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        counterValue.innerHTML = counter;
    }
    else {
        decrementBtn.disabled = true;
    }
    incrementBtn.disabled = false;
});

resetBtn.addEventListener('click', function () {
    counter = 0;
    counterValue.innerHTML = counter;
    incrementBtn.disabled = false;
    decrementBtn.disabled = false;
});

freezeBtn.addEventListener('click', () => {
    incrementBtn.disabled = true;
    decrementBtn.disabled = true;
})

// javascript code for menubar

let sideBar = document.querySelector('.sidebar')
let toggleButton = document.getElementById('menu-btn');
let aiImage = document.getElementById('ai-image');
let zoomImage = document.getElementById('zoomed-image');

toggleButton.addEventListener("click", function () {
    if (toggleButton.classList.contains('fa-bars-staggered')) {
        toggleButton.classList.replace("fa-bars-staggered", "fa-x");
    }
    else {
        toggleButton.classList.replace("fa-x", "fa-bars-staggered");

    }
    sideBar.classList.toggle('show-menu');
});

aiImage.addEventListener('click', function () {
    zoomImage.style.display = 'block';
});

zoomImage.addEventListener('click', function () {
    zoomImage.style.display = 'none';
});

