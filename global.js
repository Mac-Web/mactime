document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".checkbox");
  let pinned = localStorage.getItem("macTimePinned");
  let pinnedArray = pinned ? pinned.split(",") : [];
  let updateModal = document.querySelector(".modal-background");
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
  document.addEventListener("click", (e) => {
    if (e.target === updateModal) {
      e.target.style.display = "none";
      localStorage.setItem("mactoolsmodall", "true");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  const helpMenuItems = document.querySelectorAll(".cats");
  const helpMenus = document.querySelectorAll(".help-label");
  const helpCarets = document.querySelectorAll(".caret");
  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });
  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && bar.classList.contains("movingbar") !== true) {
      bar.classList.add("movingbar");
    }
  });
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("help-menu")) {
      helpMenus.forEach((helpMenu) => {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      });
    }
  });
  helpMenus.forEach((helpMenu) => {
    helpMenu.addEventListener("click", () => {
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      console.log(transformValue);
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    });
  });
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("caret")) {
      let helpMenu = e.target.parentElement.getElementsByTagName("span")[0];
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    }
    if (e.target.classList.contains("select")) {
      let helpMenu = e.target.getElementsByTagName("span")[0];
      let transformValue = window
        .getComputedStyle(helpMenu.parentElement.querySelector(".cats"))
        .getPropertyValue("transform");
      if (transformValue !== "matrix(1, 0, 0, 1, 0, 0)") {
        helpMenu.parentElement.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(1)";
        helpMenu.parentElement.querySelector(".caret").style.transform =
          "rotate(0deg)";
      } else {
        helpMenu.parentElement.querySelector(".cats").style.transform =
          "scaleY(0)";
        helpMenu.parentElement.removeAttribute("style");
        helpMenu.parentElement.querySelector(".caret").removeAttribute("style");
      }
    }
  });
});
