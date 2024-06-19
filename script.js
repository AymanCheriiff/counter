const playButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const resetButton = document.querySelector('.btn-reset');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

let secondsCounter = Number(seconds.textContent);
let minutesCounter = Number(minutes.textContent);
let hoursCounter = Number(hours.textContent);

function startCounter() {
    setInterval(() => {
        secondsCounter += 1;
        if (secondsCounter < 10) {
            seconds.innerHTML = '0' + String(secondsCounter);
        } else {
            seconds.innerHTML = String(secondsCounter);
        }
        if (secondsCounter === 60) {
            minutesCounter += 1;
            secondsCounter = 0;
            seconds.innerHTML = String(secondsCounter);
            if (minutesCounter < 10) {
                minutes.innerHTML = '0' + String(minutesCounter);
            } else {
                minutes.innerHTML = String(minutesCounter);
            }
        }
        if (minutesCounter > 59) {
            hoursCounter += 1;
            minutesCounter = 0;
            console.log(minutesCounter);
            if (hoursCounter < 10) {
                hours.innerHTML = '0' + String(hoursCounter);
            }
            minutes.innerHTML = String(minutesCounter);
        }
    }, 1000)

}

function stopCounter() {
    seconds.innerHTML = '00'
}

playButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter);