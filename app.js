const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const pauseBtn = document.querySelector('.btn-pause'); 
const pomodoroBtn = document.querySelector('.btn-pomodoro'); 
const shortBreakBtn = document.querySelector('.btn-short-break'); 
const longBreakBtn = document.querySelector('.btn-long-break'); 
const session = document.querySelector('.minutes'); 
const secondDiv = document.querySelector('.seconds');
let myInterval; 
let state = true;
let totalSeconds = 25 * 60; // Initialize with the default Pomodoro duration

const updateDisplay = (duration) => {
  const minutesLeft = Math.floor(duration / 60);
  const secondsLeft = duration % 60;

  if (secondsLeft < 10) {
    secondDiv.textContent = '0' + secondsLeft;
  } else {
    secondDiv.textContent = secondsLeft;
  }
  session.textContent = `${minutesLeft}`;
}

const appTimer = () => {
  if (state) {
    state = false;
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session is already active.');
  }
}

const pauseTimer = () => {
  clearInterval(myInterval);
  state = true;
}

const updateSeconds = () => {
  totalSeconds--;
  updateDisplay(totalSeconds);
  
  if (totalSeconds === 0) {
    bells.play();
    clearInterval(myInterval);
    state = true;
  }
}

startBtn.addEventListener('click', () => appTimer());  // Start timer with the chosen duration
pauseBtn.addEventListener('click', pauseTimer);

pomodoroBtn.addEventListener('click', () => {
  totalSeconds = 25 * 60; // Set Pomodoro timer duration
  updateDisplay(totalSeconds); // Update display with Pomodoro timer
});

shortBreakBtn.addEventListener('click', () => {
  totalSeconds = 5 * 60; // Set short break timer duration
  updateDisplay(totalSeconds); // Update display with short break timer
});

longBreakBtn.addEventListener('click', () => {
  totalSeconds = 15 * 60; // Set long break timer duration
  updateDisplay(totalSeconds); // Update display with long break timer
});
