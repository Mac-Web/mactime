document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.getElementById("wrap");
  const bar = document.getElementById("sidebar");
  const close = document.getElementById("closea");
  close.addEventListener("click", function () {
    close.parentElement.parentElement.style.display = "none";
    localStorage.setItem("mactimeclosee", "closed");
  });
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });

  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });

  wrap.addEventListener("click", function () {
    console.log("sl");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let start = document.getElementById("start");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let line = document.getElementById("line");
  let audio = document.getElementById("notif");
  let main;
  let breaks;
  let header = document.getElementById("header");
  let h = hours.value.toString();
  let m = minutes.value.toString();
  let percent = 1;
  start.addEventListener("mouseup", function starting() {
    if (start.innerHTML === "Start") {
      if (hours.value === "0" && minutes.value === "0") {
        alert("Click on the digits to select a time and start the timer!");
      } else {
        percent = 1;
        line.style.transform = "scaleX(1)";
        start.innerHTML = "End";
        hours.style.display = "none";
        minutes.style.display = "none";
        hour.style.display = "block";
        minute.style.display = "block";
        if (hours.value.length === 1) {
          hour.innerHTML = "0" + hours.value.toString();
        } else {
          hour.innerHTML = hours.value.toString();
        }
        if (minutes.value.length === 1) {
          minute.innerHTML = "0" + minutes.value.toString();
        } else {
          minute.innerHTML = minutes.value.toString();
        }
        main = setInterval(update, 1000);
      }
    } else if (start.innerHTML === "End") {
      line.style.transform = "scaleX(1)";
      clearInterval(main);
      clearInterval(breaks);
      hour.style.display = "none";
      minute.style.display = "none";
      hours.style.display = "block";
      minutes.style.display = "block";
      start.innerHTML = "Start";
      line.style.borderRadius = "10px";
    }
  });

  function bupdate() {
    percent -= 1 / 300;
    line.style.borderRadius = "0px 10px 10px 0px";
    line.style.transform = `scaleX(${percent})`;
    let thing = Number(minute.innerHTML);
    let things = Number(hour.innerHTML);
    if (thing === 0) {
      thing = 60;
      things--;
      if (things <= 9) {
        hour.innerHTML = "0" + things.toString();
      } else {
        hour.innerHTML = things.toString();
      }
    }
    thing--;
    if (thing <= 9) {
      if (thing === 0) {
        minute.innerHTML = "00";
        if (things === 0) {
          clearInterval(breaks);
          audio.play();
          if (header.innerHTML === "Focus For:") {
            header.innerHTML = "Break:";
            breaks = setInterval(bupdate,1000);
          } else {
            header.innerHTML = "Focus For:";
          }
        }
      } else {
        minute.innerHTML = "0" + thing.toString();
      }
    } else {
      minute.innerHTML = thing.toString();
    }
  }

  function update() {
    h = Number(hours.value);
    m = Number(minutes.value);
    let total = h * 60 + m;
    percent -= 1 / total;
    line.style.borderRadius = "0px 10px 10px 0px";
    line.style.transform = `scaleX(${percent})`;
    let thing = Number(minute.innerHTML);
    let things = Number(hour.innerHTML);
    if (thing === 0) {
      thing = 60;
      things--;
      if (things <= 9) {
        hour.innerHTML = "0" + things.toString();
      } else {
        hour.innerHTML = things.toString();
      }
    }
    thing--;
    if (thing <= 9) {
      if (thing === 0) {
        minute.innerHTML = "00";
        if (things === 0) {
          clearInterval(main);
          audio.play();
          if (header.innerHTML === "Focus For:") {
            header.innerHTML = "Break:";
            breaks = setInterval(bupdate,1000);
            percent = 1;
            minute.innerHTML = "00";
            hour.innerHTML = "05";
            line.style.transform = "scaleX(100%)";
          } else {
            header.innerHTML = "Focus For:";
          }
        }
      } else {
        minute.innerHTML = "0" + thing.toString();
      }
    } else {
      minute.innerHTML = thing.toString();
    }
  }
});
