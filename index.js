const timer = document.getElementById('timer');
const minutes = document.querySelector('.timer-minute')
const seconds = document.querySelector('.timer-seconds')
const control = document.querySelector('.timer-control')
const reset = document.querySelector('.timer-reset')

timer.interval = null;
timer.remainingSeconds = 1000;

updateTimer();
controlTimer();
startTimer();
stopTimer();

control.addEventListener('click', () => {
    if (timer.interval === null) {
        startTimer();
    } else {
        stopTimer();
    }
});

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


