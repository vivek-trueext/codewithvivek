// var imageClick = document.getElementById('image');
// var crossButton = document.getElementById('cross-btn');
// var zoomImage = document.getElementById('zoom');

// imageClick.addEventListener('click', function () {

//     zoomImage.classList.replace("hidden", "zoom-box");
// });

// crossButton.addEventListener('click', function () {
//     zoomImage.classList.replace("zoom-box", "hidden");
// })

var imageClick = document.getElementById('image');
var crossButton = document.getElementById('cross-btn');
var zoomBox = document.getElementById('zoom');
let zoomImage = document.querySelector('.zoom-image')

imageClick.addEventListener('click', function () {
    zoomImage.src = imageClick.src;
    zoomBox.style.display = "block";

});
crossButton.addEventListener('click', function () {
    zoomBox.style.display = "none";
});