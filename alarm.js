document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.getElementById("wrap");
  const bar = document.getElementById("sidebar");
  const close = document.getElementById("closea");
  close.addEventListener("click", function () {
    close.parentElement.parentElement.style.display = "none";
    localStorage.setItem("mactimeclosee","closed");
  })
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
//TODO: i am stupid
  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  })

  wrap.addEventListener("click", function () {
    console.log("sl");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    if (btn.innerHTML === "Set Alarm") {
      btn.innerHTML = "End Alarm";
      let hourv = hour.value;
      let minutev = minute.value;
      let secondv = second.value;
      var interval = setInterval(() => {
        const d = new Date();
        let hourd = d.getHours().toString();
        let minuted = d.getMinutes().toString();
        let secondd = d.getSeconds().toString();
        if (hourd === hourv) {
          if (minuted === minutev) {
            if (secondd === secondv) {
              alert("Time's Up!");
            }
          }
        }
      }, 500);
    } else {
      btn.innerHTML = "Set Alarm";
      clearInterval(interval);
    }
  });
});