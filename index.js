document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  const close = document.getElementById("closea");
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
  })
  close.addEventListener("click", function () {
    close.parentElement.parentElement.style.display = "none";
    localStorage.setItem("mactimecloseeee", "closed");
  });
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".checkbox");
  let pinned = localStorage.getItem("macTimePinned");
  let pinnedArray = pinned ? pinned.split(",") : [];
  console.log(document.getElementById("alarmf"))
  boxes.forEach((box) => {
    if (pinnedArray.includes(box.value)) {
      box.checked = true;
      document.getElementById(box.value + "f").style.display = "initial";
    } else {
      box.checked = false;
    }
    box.addEventListener("click", () => check(box));
  });

  function check(box) {
    if (box.checked) {
      pinnedArray.push(box.value);
    } else {
      const index = pinnedArray.indexOf(box.value);
      if (index !== -1) {
        pinnedArray.splice(index, 1);
      }
    }
    localStorage.setItem("macTimePinned", pinnedArray.join(","));
    const elementId = box.value + "f";
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = box.checked ? "initial" : "none";
    }
  }
});
