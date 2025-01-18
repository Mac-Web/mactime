const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");
const userInput = document.getElementById("user-input");
const modeDropdown = document.getElementById("mode");
const result = document.getElementById("result");
const text = document.getElementById("text");
const resultContainer = document.getElementById("result-container");
const copyBtn = document.getElementById("copy-btn");
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let modeSelected = "";

modeDropdown.addEventListener("change", () => {
  let mode = modeDropdown.value;
  modeSelected = mode;
  userInput.innerHTML = "";
  switch (mode) {
    case "caesar":
      createInput(mode, "Number of shifts");
      break;
    case "vigenere":
      createInput(mode, "Encoding key");
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
  if (modeSelected == "atbash") {
    result.innerHTML = text.value
      .split("")
      .map((char) => {
        let charIndex = alphabet.indexOf(char.toLowerCase());
        if (charIndex === -1) {
          return char;
        }
        return char === char.toUpperCase() ? alphabet[25 - charIndex].toUpperCase() : alphabet[25 - charIndex];
      })
      .join("");
  } else if (modeSelected == "caesar") {
    let input1 = document.getElementById(modeSelected);
    let indexes = [];
    if (input1.value.length != -1) {
      text.value
        .toLowerCase()
        .split("")
        .forEach((char) => {
          indexes.push(alphabet.indexOf(char));
        });
    }
    let output = [];
    indexes.forEach((indexx, index) => {
      if (indexx !== -1) {
        let shiftedIndex = indexx + parseInt(input1.value);
        shiftedIndex = shiftedIndex > 25 ? shiftedIndex % 26 : shiftedIndex;
        output.push(alphabet[shiftedIndex]);
      } else {
        output.push(text.value.toLowerCase().split("")[index]);
      }
    });
    result.innerHTML = output.join("");
  } else if (modeSelected == "vigenere") {
    let input1 = document.getElementById(modeSelected);
    let inputText = text.value.trim();
    let keyText = input1.value.trim();
    let keyIndexes = keyText.split("").map((char) => {
      return alphabet.indexOf(char.toLowerCase());
    });
    if (!keyIndexes.every((index) => index !== -1)) {
      result.style.color = "red";
      result.innerHTML = "Invalid key. Please enter only letters.";
      return;
    }
    if (!inputText || !keyText) {
      result.style.color = "red";
      result.innerHTML = "Both input message and key must be provided.";
      return;
    }
    let keyCount = 0;
    result.innerHTML = inputText
      .split("")
      .map((char) => {
        let charIndex = alphabet.indexOf(char.toLowerCase());
        if (charIndex === -1) {
          return char;
        }
        let shiftedIndex = (charIndex + keyIndexes[keyCount % keyIndexes.length]) % 26;
        keyCount++;
        return char === char.toUpperCase() ? alphabet[shiftedIndex].toUpperCase() : alphabet[shiftedIndex];
      })
      .join("");
  }
});

function copy() {
  navigator.clipboard.writeText(result.innerHTML);
  copyBtn.innerHTML = "Copied!";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
  }, 3000);
}
