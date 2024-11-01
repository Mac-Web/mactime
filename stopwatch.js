

document.addEventListener("DOMContentLoaded", function () {
  let isRunning = false;
  let startTime = 0;
  let pausedTime = 0;
  const main = document.getElementById("go");
  const mili = document.getElementById("mili");
  const second = document.getElementById("seconds");
  const minute = document.getElementById("minutes");
  function updateDisplay() {
    mili.innerHTML = allMili < 10 ? "0" + allMili.toString() : allMili;
    second.innerHTML = all < 10 ? "0" + all.toString() : all;
    minute.innerHTML = allMinute < 10 ? "0" + allMinute.toString() : allMinute;
  }
  function updateTimer() {
    const currentTime = performance.now();
    const elapsedMilliseconds = isRunning
      ? currentTime - startTime
      : pausedTime;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    allMili = Math.floor((elapsedMilliseconds % 1000) / 10);
    all = elapsedSeconds % 60;
    allMinute = Math.floor(elapsedSeconds / 60);
    updateDisplay();
  }
  function startTimer() {
    startTime = performance.now() - pausedTime;
    requestAnimationFrame(animate);
  }
  function animate() {
    if (isRunning) {
      updateTimer();
      requestAnimationFrame(animate);
    }
  }
  main.addEventListener("click", function () {
    if (main.innerHTML === "Pause") {
      main.innerHTML = "Reset";
      isRunning = false;
      pausedTime += performance.now() - startTime;
    } else if (main.innerHTML === "Start") {
      isRunning = true;
      main.innerHTML = "Pause";
      startTimer();
    } else {
      cancelAnimationFrame(animate);
      isRunning = false;
      allMili = 0;
      all = 0;
      allMinute = 0;
      startTime = 0;
      pausedTime = 0;
      mili.innerHTML = "00";
      second.innerHTML = "00";
      minute.innerHTML = "00";
      main.innerHTML = "Start";
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === " ") {
      if (main.innerHTML === "Pause") {
        main.innerHTML = "Reset";
        isRunning = false;
        pausedTime += performance.now() - startTime;
        return;
      } else if (main.innerHTML === "Start") {
        isRunning = true;
        main.innerHTML = "Pause";
        startTimer();
        return;
      } else {
        cancelAnimationFrame(animate);
        isRunning = false;
        allMili = 0;
        all = 0;
        allMinute = 0;
        startTime = 0;
        pausedTime = 0;
        mili.innerHTML = "00";
        second.innerHTML = "00";
        minute.innerHTML = "00";
        main.innerHTML = "Start";
        return;
      }
    }
  });
});
