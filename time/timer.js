document.addEventListener("DOMContentLoaded", function () {
  let wrap = document.querySelector(".wrap");
  let start = document.getElementById("start");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  hours.addEventListener("dblclick", (e)=>{
    hours.contentEditable = true;
  })
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let line = document.getElementById("line");
  let audio = document.getElementById("notif");
  let main;
  let h = hours.value.toString();
  let m = minutes.value.toString();
  let percent = 1;
  let focusMode = false;
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      if (focusMode) {
        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let hour = document.getElementById("hour");
        let minute = document.getElementById("minute");
        let line = document.getElementById("line");
        let audio = document.getElementById("notif");
        let main;
        let h = hours.value.toString();
        let m = minutes.value.toString();
        let percent = 1;
        let start = e.target;
        console.log("skibidi");
        let breaks;
        let header = document.getElementById("header");
        console.log(header)
        if (start.innerHTML === "Start") {
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
                  breaks = setInterval(bupdate, 1000);
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
                  breaks = setInterval(bupdate, 1000);
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
      } else {
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
          hour.style.display = "none";
          minute.style.display = "none";
          hours.style.display = "block";
          minutes.style.display = "block";
          start.innerHTML = "Start";
          line.style.borderRadius = "10px";
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
              }
            } else {
              minute.innerHTML = "0" + thing.toString();
            }
          } else {
            minute.innerHTML = thing.toString();
          }
        }
      }
    }
  });

  const slider = document.getElementById("slider");
  const indicator = slider.children[0];
  slider.addEventListener("click", () => {
    if (indicator.classList.contains("active-toggle")) {
      indicator.classList.remove("active-toggle");
      indicator.style.backgroundColor = "rgb(35, 130, 35)";
      slider.style.backgroundColor = "white";
      focusMode = false;
      wrap.innerHTML = `<div class="time" style="display: flex; align-items: center">
        <div id="hour"></div>
        <select name="hours" id="hours">
          <option value="0">00</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option></select
        ><span class="pos">m</span>
        :
        <div id="minute"></div>
        <select name="minutes" id="minutes">
          <option value="0">00</option>
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option></select
        ><span class="pos">s</span>
      </div>
      <div class="lcontain">
        <div id="line"></div>
      </div>
      <button class="btn" id="start">Start</button>`;
    } else {
      indicator.classList.add("active-toggle");
      slider.style.backgroundColor = "rgb(35, 130, 35)";
      indicator.style.backgroundColor = "white";
      focusMode = true;
      wrap.innerHTML = `<h2 class="header" id="header">Focus For:</h2>
      <div class="time" style="display: flex; align-items: center">
        <div id="hour"></div>
        <select name="hours" id="hours">
          <option value="5">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="60">60</option></select
        ><span class="pos">m</span>
        :
        <div id="minute"></div>
        <select name="minutes" id="minutes">
          <option value="0">00</option></select
        ><span class="pos">s</span>
      </div>
      <div class="lcontain">
        <div id="line"></div>
      </div>
      <button class="btn" id="start">Start</button>`;
    }
  });
});
