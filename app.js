document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  const overflowMenu = document.getElementById("overflow-menu");
  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("shoot")) {
      overflowMenu.classList.add("menu-slide");
    } else {
      overflowMenu.classList.remove("menu-slide");
    }
  });
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  setInterval(time, 500);
  function time() {
    const d = new Date();
    const title = document.getElementById("title");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    const half = document.getElementById("half");
    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const date = document.getElementById("date");
    const year = document.getElementById("year");
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const days = d.getDay();
    const dates = d.getDate();
    const months = d.getMonth() + 1;
    const years = d.getFullYear();
    if (hours < 10) {
      hour.innerHTML = "0" + hours.toString();
    } else if (hours >= 13) {
      let thing = hours - 12;
      if (thing<10) {

        hour.innerHTML = "0" + thing.toString();
      } else {
        
      hour.innerHTML = thing.toString();
      }
    } else {
        hour.innerHTML = hours.toString();
    }
    if (minutes < 1) {
      minute.innerHTML = "00";
    } else if (minutes < 10) {
      minute.innerHTML = "0" + minutes.toString();
    } else {
      minute.innerHTML = minutes.toString();
    }
    if (seconds < 1) {
      second.innerHTML = "00";
    } else if (seconds < 10) {
      second.innerHTML = "0" + seconds.toString();
    } else {
      second.innerHTML = seconds.toString();
    }
    if (hours < 12) {
      half.innerHTML = "am";
    } else {
      half.innerHTML = "pm";
    }
    if (days === 0) {
      day.innerHTML = "Sunday";
    } else if (days === 1) {
      day.innerHTML = "Monday";
    } else if (days === 2) {
      day.innerHTML = "Tuesday";
    } else if (days === 3) {
      day.innerHTML = "Wednesday";
    } else if (days === 4) {
      day.innerHTML = "Thursday";
    } else if (days === 5) {
      day.innerHTML = "Friday";
    } else if (days === 6) {
      day.innerHTML = "Saturday";
    } else {
      day.innerHTML = "Sunday";
    }
    month.innerHTML = months.toString();
    date.innerHTML = dates.toString();
    year.innerHTML = years.toString();
    title.innerHTML =
      hour.innerHTML +
      ":" +
      minute.innerHTML +
      " " +
      half.innerHTML +
      " | MacTime";
  }
});
