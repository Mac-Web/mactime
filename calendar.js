document.addEventListener("DOMContentLoaded", function () {
    let table = document.querySelector("table");
    table.addEventListener("mouseover", function(event) {
      if (event.target.tagName === "TD") {
        let parent = event.target.parentElement;
        let trs = Array.from(parent.parentElement.children);
        trs.forEach(function (tr) {
          tr[0].style.backgroundColor = "black";
        })
        let thing = Array.from(event.target.parentElement.children);
        thing.forEach(function (elt) {
            elt.style.backgroundColor = "rgb(40,40,40)";
        })
        thing[0].style.backgroundColor = "rgb(60,60,60)"
        event.target.style.backgroundColor = "rgb(25,25,25)";
        event.target.addEventListener("click", function (e) {
            e.target.contentEditable = "true";
            e.target.focus();
        })
      }
    });
    table.addEventListener("mouseout", function(event) {
      if (event.target.tagName === "TD") {
        event.target.style.backgroundColor = "rgb(50, 50, 50)";
        let thing = Array.from(event.target.parentElement.children);
        thing.forEach(function (elt) {
            elt.style.backgroundColor = "rgb(50,50,50)";
        })
        thing[0].style.backgroundColor = "rgb(60,60,60)"
        event.target.blur();
      }
    });
  });