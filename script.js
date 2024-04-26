let startTime, elapsedTime = 0, timerInterval;
let running = false;

document.getElementById('start').addEventListener('click', function() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateTimeDisplay();
        }, 1000);
        running = true;
    }
});

document.getElementById('pause').addEventListener('click', function() {
    clearInterval(timerInterval);
    running = false;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimeDisplay();
    running = false;
});

document.getElementById('lap').addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = formatTime(elapsedTime);
    document.getElementById('laps').appendChild(li);
});

function updateTimeDisplay() {
    document.getElementById('time').textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    return [hours, minutes, seconds].map(v => v.toString().padStart(2, '0')).join(':');
}
