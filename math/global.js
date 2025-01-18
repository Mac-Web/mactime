document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("sidebar");
  const helpMenus = document.querySelectorAll(".help-label");
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
