const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");
const userInput = document.getElementById("user-input");
const modeDropdown = document.getElementById("mode");
const result = document.getElementById("result");
const text = document.getElementById("text");
const resultContainer = document.getElementById("result-container");
let modeSelected = "";

modeDropdown.addEventListener("change", () => {
  let mode = modeDropdown.value;
  modeSelected = mode;
  userInput.innerHTML = "";
  switch (mode) {
    case "shorten":
      createInput(mode, "Shortened count");
      break;
    case "lorem":
      createInput(mode, "Text character count");
      break;
  }
});

function createInput(type, placeholder1 = "") {
  if (placeholder1 !== "") {
    userInput.style.display = "flex";
    const input1 = document.createElement("input");
    input1.classList.add("input");
    input1.setAttribute("autocomplete", "off");
    userInput.appendChild(input1);
    input1.id = type;
    input1.placeholder = placeholder1;
  }
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  resultContainer.style.display = "flex";
  result.style.color = "white";
  if (modeSelected == "shorten") {
    let input1 = document.getElementById(modeSelected);
    result.innerHTML = text.value.substring(0, input1.value) + "...";
  } else if (modeSelected == "char-count") {
    result.innerHTML = text.value.length;
  } else if (modeSelected == "cap-all") {
    result.innerHTML = text.value.toUpperCase();
  } else if (modeSelected == "uncap-all") {
    result.innerHTML = text.value.toLowerCase();
  } else if (modeSelected == "cap") {
    const modifiedText = text.value.replace(/\. (.)/g, (match) => {
      return match.toUpperCase();
    });
    const modified2 = modifiedText.replace(/\.(.)/g, (match) => {
      let string = match.split("");
      return string[0] + " " + string[1].toUpperCase();
    });
    let last = modified2.length;
    if (modified2.at(-1) !== ".") {
      if (modified2.at(-1) === " ") {
        let finalText = modified2.substring(0, last - 1) + ".";
        result.innerHTML = text.value[0].toUpperCase() + finalText.substring(1, last);
        return;
      }
      console.log("no");
      let finalText = modified2 + ".";
      last++;
      result.innerHTML = text.value[0].toUpperCase() + finalText.substring(1, last);
      return;
    }
    result.innerHTML = text.value[0].toUpperCase() + modified2.substring(1, last);
  } else if (modeSelected == "lorem") {
    let input1 = document.getElementById(modeSelected);
    let value = input1.value > 5000 ? 5000 : input1.value;
    let i,
      d,
      loremF = "";
    for (d = 0; d <= value - 1; d++) {
      let random = Math.floor((Math.random() + 0.2) * 7);
      let loremT = "";
      console.log(random);
      for (i = 0; i < random; i++) {
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const randomIndex = Math.floor(Math.random() * 25);
        loremT += alphabet[randomIndex];
        console.log(loremT);
      }
      loremF += " " + loremT;
    }
    result.innerHTML = loremF;
  }
});

function copy() {
  navigator.clipboard.writeText(result.innerHTML);
  const copyBtn = document.querySelector(".copy-btn");
  copyBtn.innerHTML = "Copied!";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
  }, 3000);
}
