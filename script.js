function updateTimer() {
    var timerElement = document.getElementById('timer');
    var currentTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    timerElement.textContent = currentTime;
  }
  
  setInterval(updateTimer, 1000);
  
  // Stopwatch
  var stopwatchInterval;
  var stopwatchSeconds = 0;
  
  function startStopwatch() {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
  }
  
  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
  }
  
  function updateStopwatch() {
    stopwatchSeconds++;
    updateStopwatchDisplay();
  }
  
  function updateStopwatchDisplay() {
    var stopwatchElement = document.getElementById('stopwatch');
    var hours = Math.floor(stopwatchSeconds / 3600);
    var minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    var seconds = stopwatchSeconds % 60;
    var timeString = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
    stopwatchElement.textContent = timeString;
  }
  
  function padZero(num) {
    return num.toString().padStart(2, '0');
  }
  
  // Event listeners for stopwatch
  document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
  document.getElementById('stopStopwatch').addEventListener('click', stopStopwatch);
  document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);
  