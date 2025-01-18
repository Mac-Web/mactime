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
