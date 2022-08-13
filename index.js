// GAME TIMER
const timer = document.getElementById('timer');
const minutes = document.querySelector('.timer-minute')
const seconds = document.querySelector('.timer-seconds')
const control = document.querySelector('.timer-control')
const reset = document.querySelector('.timer-reset')

timer.interval = null;
timer.remainingSeconds = 0;

// Control button
control.addEventListener('click', () => {
    if (timer.interval === null) {
        startTimer();
    } else {
        stopTimer();
    }
});

// Update button
reset.addEventListener('click', () => {
    let inputMinute = prompt('Enter the number of minutes less than 60');

    if (inputMinute < 60) {
        stopTimer();
        timer.remainingSeconds = inputMinute * 60;
        updateTimer();
    }
});


function updateTimer() {
    let updatedMinutes = Math.floor(timer.remainingSeconds / 60);
    let updatedSeconds = timer.remainingSeconds % 60;

    minutes.innerHTML = updatedMinutes.toString().padStart(2, '0');
    seconds.innerHTML = updatedSeconds.toString().padStart(2, '0');
}

function controlTimer() {
    if (timer.interval === null) {
        control.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
        control.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
}

function startTimer() {
    if (timer.remainingSeconds === 0) {
        return; // do nothing if the timer is already running
    }

    timer.interval = setInterval(() => {
        timer.remainingSeconds--; // counting down the remaining seconds
        updateTimer();
        if (timer.remainingSeconds === 0) {
            stopTimer(); // stop the timer
        }
    }, 1000);


    controlTimer();
}

function stopTimer() {
    clearInterval(timer.interval); // stop the timer i.e pausing the timer
    timer.interval = null; // reset the timer interval to null
    controlTimer(); // update the control button to play icon
}


//Increment Buttons
let periodIncrement = document.querySelector('.period-box');
let homeScoreIncrement = document.querySelector('.home-score');
let guestScoreIncrement = document.querySelector('.guest-score');
let homeFouls = document.querySelector('.home-fouls');
let guestFouls = document.querySelector('.guest-fouls');

let periodCount = 0;
let homePoint = 0;
let guestPoint = 0;
let homeFoul = 0;
let guestFoul = 0;  

// Period Increment
function addOnePoint() {
    periodCount += 1;
    periodIncrement.textContent = periodCount.toString().padStart(2, '0');
}

// POINTS
// Home Points
function addOneHomePoint() {
    homePoint += 1;
    homeScoreIncrement.textContent = homePoint.toString().padStart(2, '0');
}
function addTwoHomePoints() {
    homePoint += 2;
    homeScoreIncrement.textContent = homePoint.toString().padStart(2, '0');
}
function addThreeHomePoints() {
    homePoint += 3;
    homeScoreIncrement.textContent = homePoint.toString().padStart(2, '0');
}

//Guest Points
function addOneGuestPoint() {
    guestPoint += 1;
    guestScoreIncrement.textContent = guestPoint.toString().padStart(2, '0');
}
function addTwoGuestPoints() {
    guestPoint += 2;
    guestScoreIncrement.textContent = guestPoint.toString().padStart(2, '0');
}
function addThreeGuestPoints() {
    guestPoint += 3;
    guestScoreIncrement.textContent = guestPoint.toString().padStart(2, '0');
}


// FOULS
// Home Fouls
function addOneHomeFoul() {
    homeFoul += 1;
    homeFouls.textContent = homeFoul.toString().padStart(2, '0');
}
function addTwoHomeFoul() {
    homeFoul += 2;
    homeFouls.textContent = homeFoul.toString().padStart(2, '0');
}
function addThreeHomeFoul() {
    homeFoul += 3;
    homeFouls.textContent = homeFoul.toString().padStart(2, '0');
}

// Guest Fouls
function addOneGuestFoul() {
    guestFoul += 1;
    guestFouls.textContent = guestFoul.toString().padStart(2, '0');
}
function addTwoGuestFoul() {
    guestFoul += 2;
    guestFouls.textContent = guestFoul.toString().padStart(2, '0');
}
function addThreeGuestFoul() {
    guestFoul += 3;
    guestFouls.textContent = guestFoul.toString().padStart(2, '0');
}