let history = document.getElementById('historyContainer');
let vision = document.getElementById('visionContainer');
let goals = document.getElementById('goalContainer');

function openDefault() {
    history.style.display = 'block';
    document.getElementById('history').style.borderRadius = '10px 10px 0px 0px';
    document.getElementById('history').style.backgroundColor = 'white';
    vision.style.display = 'none';
    goals.style.display = 'none';

}

function openHistory() {
    history.style.display = 'block';
    document.getElementById('history').style.borderRadius = '10px 10px 0px 0px';
    document.getElementById('history').style.backgroundColor = 'white';

    vision.style.display = 'none';
    document.getElementById('vision').style.borderRadius = '0px 0px 0px 0px';
    document.getElementById('vision').style.backgroundColor = 'lightgray';

    goals.style.display = 'none';
    document.getElementById('goals').style.borderRadius = '0px 10px 0px 0px';
    document.getElementById('goals').style.backgroundColor = 'lightgray';
}
function openVision() {
    history.style.display = 'none';
    document.getElementById('history').style.borderRadius = '10px 0px 0px 0px';
    document.getElementById('history').style.backgroundColor = 'lightgray';

    vision.style.display = 'block';
    document.getElementById('vision').style.borderRadius = '10px 10px 0px 0px';
    document.getElementById('vision').style.backgroundColor = 'white';

    goals.style.display = 'none';
    document.getElementById('goals').style.borderRadius = '0px 10px 0px 0px';
    document.getElementById('goals').style.backgroundColor = 'lightgray';

}
function openGoals() {
    history.style.display = 'none';
    document.getElementById('history').style.borderRadius = '10px 0px 0px 0px';
    document.getElementById('history').style.backgroundColor = 'lightgray';

    vision.style.display = 'none';
    document.getElementById('vision').style.borderRadius = '0px 0px 0px 0px';
    document.getElementById('vision').style.backgroundColor = 'lightgray';

    goals.style.display = 'block';
    document.getElementById('goals').style.borderRadius = '10px 10px 0px 0px';
    document.getElementById('goals').style.backgroundColor = 'white';
}

let faq1ButtonHistory = document.querySelector('.faqPage1 .faq1 .faqHeading i');
let faq2ButtonHistory = document.querySelector('.faqPage1 .faq2 .faqHeading i');
let faq3ButtonHistory = document.querySelector('.faqPage1 .faq3 .faqHeading i');

let faq1ContentHistory = document.querySelector('.faqPage1 .faq1 .faqContent');
let faq2ContentHistory = document.querySelector('.faqPage1 .faq2 .faqContent');
let faq3ContentHistory = document.querySelector('.faqPage1 .faq3 .faqContent');
let faq1HistoryOpen = true;
let faq2HistoryOpen = true;
let faq3HistoryOpen = true;

faq1ButtonHistory.addEventListener('click', () => {
    if (faq1HistoryOpen) {
        faq1ContentHistory.style.display = 'block';
        faq2ContentHistory.style.display = 'none';
        faq3ContentHistory.style.display = 'none';

        faq1ButtonHistory.classList.replace('fa-square-plus', 'fa-square-minus');
        faq2ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq2ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');

        faq1HistoryOpen = false;
        faq2HistoryOpen = true;
        faq3HistoryOpen = true;
    }
    else {
        faq1ContentHistory.style.display = 'none';
        faq1ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq1HistoryOpen = true;
    }

});
faq2ButtonHistory.addEventListener('click', () => {
    if (faq2HistoryOpen) {
        faq1ContentHistory.style.display = 'none';
        faq2ContentHistory.style.display = 'block';
        faq3ContentHistory.style.display = 'none';
        faq2ButtonHistory.classList.replace('fa-square-plus', 'fa-square-minus');
        faq1ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq3ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq1HistoryOpen = true;
        faq2HistoryOpen = false;
        faq3HistoryOpen = true;
    }
    else {
        faq2ContentHistory.style.display = 'none';
        faq2ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq2HistoryOpen = true;
    }
});
faq3ButtonHistory.addEventListener('click', () => {
    if (faq3HistoryOpen) {
        faq1ContentHistory.style.display = 'none';
        faq2ContentHistory.style.display = 'none';
        faq3ContentHistory.style.display = 'block';
        faq3ButtonHistory.classList.replace('fa-square-plus', 'fa-square-minus');
        faq2ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq1ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq1HistoryOpen = true;
        faq2HistoryOpen = true;
        faq3HistoryOpen = false;
    }
    else {
        faq3ContentHistory.style.display = 'none';
        faq3ButtonHistory.classList.replace('fa-square-minus', 'fa-square-plus');
        faq3HistoryOpen = true;

    }
});


let faq1ButtonVision = document.querySelector('.faqPage2 .faq1 .faqHeading i');
let faq2ButtonVision = document.querySelector('.faqPage2 .faq2 .faqHeading i');
let faq3ButtonVision = document.querySelector('.faqPage2 .faq3 .faqHeading i');

let faq1ContentVision = document.querySelector('.faqPage2 .faq1 .faqContent');
let faq2ContentVision = document.querySelector('.faqPage2 .faq2 .faqContent');
let faq3ContentVision = document.querySelector('.faqPage2 .faq3 .faqContent');

faq1ButtonVision.addEventListener('click', () => {
    faq1ContentVision.style.display = 'block';
    faq2ContentVision.style.display = 'none';
    faq3ContentVision.style.display = 'none';
});
faq2ButtonVision.addEventListener('click', () => {
    faq1ContentVision.style.display = 'none';
    faq2ContentVision.style.display = 'block';
    faq3ContentVision.style.display = 'none';
});
faq3ButtonVision.addEventListener('click', () => {
    faq1ContentVision.style.display = 'none';
    faq2ContentVision.style.display = 'none';
    faq3ContentVision.style.display = 'block';
});


let faq1ButtonGoals = document.querySelector('.faqPage3 .faq1 .faqHeading i');
let faq2ButtonGoals = document.querySelector('.faqPage3 .faq2 .faqHeading i');
let faq3ButtonGoals = document.querySelector('.faqPage3 .faq3 .faqHeading i');

let faq1ContentGoals = document.querySelector('.faqPage3 .faq1 .faqContent');
let faq2ContentGoals = document.querySelector('.faqPage3 .faq2 .faqContent');
let faq3ContentGoals = document.querySelector('.faqPage3 .faq3 .faqContent');

faq1ButtonGoals.addEventListener('click', () => {
    faq1ContentGoals.style.display = 'block';
    faq2ContentGoals.style.display = 'none';
    faq3ContentGoals.style.display = 'none';
});
faq2ButtonGoals.addEventListener('click', () => {
    faq1ContentGoals.style.display = 'none';
    faq2ContentGoals.style.display = 'block';
    faq3ContentGoals.style.display = 'none';
});
faq3ButtonGoals.addEventListener('click', () => {
    faq1ContentGoals.style.display = 'none';
    faq2ContentGoals.style.display = 'none';
    faq3ContentGoals.style.display = 'block';
});
