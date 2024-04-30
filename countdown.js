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
  const btn = document.getElementById("btn");
  const blub = document.getElementById("blub");
  const placeholder = document.getElementById("placeholder");
  let showb = [
    "Counting Down",
    "Counting Down.",
    "Counting Down..",
    "Counting Down...",
  ];
  let bindex = 0;
  btn.addEventListener("click", function () {
    placeholder.classList.add("placeholderr");
    const ry = document.getElementById("ryear");
    const rm = document.getElementById("rmonth");
    const rd = document.getElementById("rday");
    const rh = document.getElementById("rhour");
    const rmi = document.getElementById("rminute");
    const rs = document.getElementById("rsecond");
    const results = document.getElementById("results");
    results.style.visibility = "visible";
    results.classList.add("full");
    let leap = 0;
    const fy = Number(document.getElementById("year").value);
    const fm = Number(document.getElementById("month").value);
    const fd = Number(document.getElementById("day").value);
    const fh = Number(document.getElementById("hour").value);
    const fmi = Number(document.getElementById("minute").value);
    const fs = Number(document.getElementById("second").value);
    if (
      fy % 1 !== 0 ||
      fm % 1 !== 0 ||
      fd % 1 !== 0 ||
      fh % 1 !== 0 ||
      fmi % 1 !== 0 ||
      fs % 1 !== 0
    ) {
      blub.innerHTML =
        "Error: please enter integer values to every input field.";
      blub.style.color = "red";
    } else {
      var thing = setInterval(() => {
        blub.style.color = "white";
        let d = new Date();
        let cy = fy - d.getFullYear();
        if (d.getFullYear % 4 !== 0) {
          leap = Math.round(cy / 4);
        } else {
          leap = Math.round(cy / 4) + 1;
        }
        let cm = fm - d.getMonth() - 1;
        let cd = fd - d.getDate() + leap;
        let ch = fh - d.getHours();
        let cmi = fmi - d.getMinutes();
        let cs = fs - d.getSeconds();
        function ended() {
          clearInterval(thing);
          clearInterval(counting);
          ry.innerHTML = "0";
          rm.innerHTML = "0";
          rd.innerHTML = "0";
          rh.innerHTML = "0";
          rmi.innerHTML = "0";
          rs.innerHTML = "0";
          blub.innerHTML = "Time's Up!";
          blub.style.color = "green";
        }
        if (cs < 0) {
          cmi -= 1;
          cs = 60 + cs;
        }
        if (cmi < 0) {
          ch -= 1;
          cmi = 60 + cmi;
        }
        if (ch < 0) {
          cd -= 1;
          ch = 24 + ch;
        }
        if (cd < 0) {
          cm -= 1;
          if (d.getMonth() === 1 && fm > 2 && d.getFullYear() % 4 != 0) {
            cd = 28 + cd;
          } else if (d.getMonth() === 1 && fm > 2) {
            cd = 29 + cd;
          } else {
            cd = 30 + cd;
          }
        }
        if (cm < 0) {
          cy -= 1;
          cm = 12 + cm;
        }
        ry.innerHTML = cy;
        rm.innerHTML = cm;
        rd.innerHTML = cd;
        rh.innerHTML = ch;
        rmi.innerHTML = cmi;
        rs.innerHTML = cs;
        if (cy == 0 && cm == 0 && cd == 0 && ch == 0 && cmi == 0 && cs == 0) {
          ended();
        } else if (cy < 0 || cm < 0 || cd < 0 || ch < 0 || cmi < 0 || cs < 0) {
          blub.innerHTML =
            "Error: please enter a future date in the input field.";
          blub.style.color = "red";
          clearInterval(thing);
          clearInterval(counting);
        }
      }, 1000);
      var counting = setInterval(() => {
        blub.innerHTML = showb[bindex];
        if (bindex === 3) {
          bindex = 0;
        } else {
          bindex++;
        }
      }, 750);
    }
  });
});
