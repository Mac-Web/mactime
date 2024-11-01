

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
  document.addEventListener("click", (e) =>{
    if (e.target === updateModal) {
      e.target.style.display = "none";
      localStorage.setItem("mactimemodal", "true");
    }
  })
});
