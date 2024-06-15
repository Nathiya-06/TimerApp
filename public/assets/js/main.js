window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens');

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        // Show restart animation (assuming you have one)
        backgroundAnimations.style.display = 'block';
        restartAnimation.style.opacity = 1;  // Animate restart animation
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
        backgroundAnimations.style.display = 'block';
        stopAnimation.style.opacity = 1;  // Animate stop animation
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        minutes = '00';
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        backgroundAnimations.style.display = 'block';
        resetAnimation.style.opacity = 1;  // Animate reset animation
        }};
        document.addEventListener("DOMContentLoaded", function() {
            var video = document.getElementById("bg-video");
            var startBtn = document.getElementById("start");
            var stopBtn = document.getElementById("stop");
            var resetBtn = document.getElementById("reset");
          
            video.pause(); // Pause the video initially
          
            startBtn.addEventListener("click", function() {
              video.play(); // Start playing the video
            });
          
            stopBtn.addEventListener("click", function() {
              video.pause(); // Pause the video
            });
          
            resetBtn.addEventListener("click", function() {
              video.currentTime = 0; // Reset the video to the beginning
            });
          });
          
          

  
  
  
  