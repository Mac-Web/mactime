const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");
const category = document.getElementById("category");
const dropdowns = document.querySelectorAll(".modes");
const toLabel = document.getElementById("to-label");
const userInput = document.getElementById("text");
const dataFromDropdown = document.getElementById("data-from");
const dataToDropdown = document.getElementById("data-to");
const tempFromDropdown = document.getElementById("temp-from");
const tempToDropdown = document.getElementById("temp-to");
const result = document.getElementById("result");
let calc = "";

category.addEventListener("change", () => {
  calc = category.value;
  let dropdownFrom = document.getElementById(category.value + "-from");
  let dropdownTo = document.getElementById(category.value + "-to");
  dropdowns.forEach((item) => item.classList.add("modes"));
  toLabel.style.display = "block";
  dropdownFrom.classList.remove("modes");
  dropdownTo.classList.remove("modes");
});

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  result.style.color = "white";
  let dropdownFrom = document.getElementById(calc + "-from").value;
  let dropdownTo = document.getElementById(calc + "-to").value;
  if (calc == "data") {
    result.innerHTML = (userInput.value * dropdownFrom) / dropdownTo;
  } else if (calc == "temp") {
    let celsius,
      fahrenheit,
      kelvin,
      temp = Number(userInput.value);
    switch (dropdownFrom) {
      case "cels":
        celsius = temp;
        fahrenheit = (temp * 9) / 5 + 32;
        kelvin = temp + 273.15;
        break;
      case "fahr":
        fahrenheit = temp;
        celsius = ((temp - 32) * 5) / 9;
        kelvin = celsius + 273.15;
        break;
      case "kelv":
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
        break;
    }
    switch (dropdownTo) {
      case "cels":
        result.innerHTML = Math.round(celsius * 100) / 100;
        break;
      case "fahr":
        result.innerHTML = Math.round(fahrenheit * 100) / 100;
        break;
      case "kelv":
        result.innerHTML = Math.round(kelvin * 100) / 100;
        break;
    }
  }
  if (result.innerHTML.substring(result.innerHTML.length - 3) == "NaN") {
    result.style.color = "red";
    result.innerHTML = "Invalid input. Please enter a number.";
  }
});
