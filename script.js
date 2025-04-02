// let timer;
// let isRunning = false;
// let seconds = 0, minutes = 0, hours = 0;

// function updateDisplay() {
//     document.querySelector(".stopwatch").textContent = 
//         (hours < 10 ? "0" : "") + hours + ":" +
//         (minutes < 10 ? "0" : "") + minutes + ":" +
//         (seconds < 10 ? "0" : "") + seconds;
// }

// function start() {
//     if (!isRunning) {
//         isRunning = true;
//         timer = setInterval(() => {
//             seconds++;
//             if (seconds == 60) { seconds = 0; minutes++; }
//             if (minutes == 60) { minutes = 0; hours++; }
//             updateDisplay();
//         }, 1000);
//     }
// }

// function pause() {
//     clearInterval(timer);
//     isRunning = false;
// }

// function reset() {
//     clearInterval(timer);
//     isRunning = false;
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     updateDisplay();
//     document.getElementById("laps").innerHTML = "";
// }

// function lap() {
//     if (isRunning) {
//         let lapTime = document.createElement("li");
//         lapTime.textContent = document.querySelector(".stopwatch").textContent;
//         document.getElementById("laps").appendChild(lapTime);
//     }
// }

// updateDisplay();

let timer;
let isRunning = false;
let microseconds = 0, seconds = 0, minutes = 0, hours = 0;

function updateDisplay() {
    document.querySelector(".stopwatch").textContent = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + "." +
        (microseconds < 10 ? "0" : "") + microseconds;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            microseconds += 1;
            if (microseconds >= 100) { microseconds = 0; seconds++; }
            if (seconds == 60) { seconds = 0; minutes++; }
            if (minutes == 60) { minutes = 0; hours++; }
            updateDisplay();
        }, 10);
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    microseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (isRunning) {
        let lapTime = document.createElement("li");
        lapTime.textContent = document.querySelector(".stopwatch").textContent;
        document.getElementById("laps").appendChild(lapTime);
    }
}

updateDisplay();

function setActiveButton(button) {
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

function start() {
    if (!isRunning) {
        isRunning = true;
        setActiveButton(document.querySelector(".start"));
        timer = setInterval(() => {
            microseconds += 1;
            if (microseconds >= 100) { microseconds = 0; seconds++; }
            if (seconds == 60) { seconds = 0; minutes++; }
            if (minutes == 60) { minutes = 0; hours++; }
            updateDisplay();
        }, 10);
    }
}

function pause() {
    clearInterval(timer);
    isRunning = false;
    setActiveButton(document.querySelector(".pause"));
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    microseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
    setActiveButton(document.querySelector(".reset"));
}

function lap() {
    if (isRunning) {
        setActiveButton(document.querySelector(".lap"));
        let lapTime = document.createElement("li");
        lapTime.textContent = document.querySelector(".stopwatch").textContent;
        document.getElementById("laps").appendChild(lapTime);
    }
}