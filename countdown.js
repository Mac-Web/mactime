document.addEventListener("DOMContentLoaded", () => {
  let thing = null;
  let counting = null;
  const btn = document.getElementById("btn");
  const end = document.getElementById("end");
  btn.addEventListener("click", countdownfunc);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") countdownfunc();
  });
  function countdownfunc() {
    end.style.display = "block";
    if (thing) clearInterval(thing);
    if (counting) clearInterval(counting);
    const blub = document.getElementById("blub");
    const placeholder = document.getElementById("placeholder");
    let showb = [
      "Counting Down",
      "Counting Down.",
      "Counting Down..",
      "Counting Down...",
    ];
    let bindex = 0;
    placeholder.classList.add("placeholderr");
    const ry = document.getElementById("ryear");
    const rd = document.getElementById("rday");
    const rh = document.getElementById("rhour");
    const rmi = document.getElementById("rminute");
    const rs = document.getElementById("rsecond");
    const results = document.getElementById("results");
    end.addEventListener("click", () => {
      end.style.display = "none";
      clearInterval(thing);
      clearInterval(counting);
      results.style.visibility = "hidden";
      results.classList.remove("full");
      placeholder.classList.remove("placeholderr");
      blub.innerHTML = "Type the countdown date in the input field!";
      blub.style.color = "white";
      document.getElementById("year").value = "";
      document.getElementById("day").value = "";
      document.getElementById("hour").value = "";
      document.getElementById("minute").value = "";
      document.getElementById("second").value = "";
    });
    results.style.visibility = "visible";
    results.classList.add("full");
    const fy = Number(document.getElementById("year").value);
    let fdate = document.getElementById("day").value.toString().split("/");
    const fm = fdate[0];
    const fd = fdate[1];
    const fh = Number(document.getElementById("hour").value);
    const fmi = Number(document.getElementById("minute").value);
    const fs = Number(document.getElementById("second").value);
    let endingDate = new Date(fy, fm - 1, fd, fh, fmi, fs).getTime();
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
      thing = setInterval(() => {
        blub.style.color = "white";
        let d = new Date().getTime();
        let dif = Math.floor((endingDate - d) / 1000);
        ry.innerHTML = dif / 31536000 >= 1 ? Math.floor(dif / 31536000) : 0;
        dif = dif % 31536000;
        rd.innerHTML = dif / 86400 >= 1 ? Math.floor(dif / 86400) : 0;
        dif = dif % 86400;
        rh.innerHTML = dif / 3600 >= 1 ? Math.floor(dif / 3600) : 0;
        dif = dif % 3600;
        rmi.innerHTML = dif / 60 >= 1 ? Math.floor(dif / 60) : 0;
        rs.innerHTML = dif % 60;
        let sum =
          ry.innerHTML +
          rd.innerHTML +
          rh.innerHTML +
          rmi.innerHTML +
          rs.innerHTML;
        if (sum == "00000") {
          ended();
        } else if (sum.includes("-")) {
          blub.innerHTML =
            "Error: please enter a future date in the input field.";
          blub.style.color = "red";
          clearInterval(thing);
          clearInterval(counting);
        }

        function ended() {
          clearInterval(thing);
          clearInterval(counting);
          ry.innerHTML = "0";
          rd.innerHTML = "0";
          rh.innerHTML = "0";
          rmi.innerHTML = "0";
          rs.innerHTML = "0";
          blub.innerHTML = "Time's Up!";
          blub.style.color = "green";
          document.getElementById("notif").play();
        }
      }, 1000);
      counting = setInterval(() => {
        blub.innerHTML = showb[bindex];
        if (bindex === 3) {
          bindex = 0;
        } else {
          bindex++;
        }
      }, 750);
    }
  }
});
