const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");
const userInputs = document.getElementById("user-inputs");
const category = document.getElementById("category");
const dropdowns = document.querySelectorAll(".formulas");
const areaDropdown = document.getElementById("area");
const circDropdown = document.getElementById("circ");
const surfDropdown = document.getElementById("surf");
const voluDropdown = document.getElementById("volu");
const otheDropdown = document.getElementById("othe");
const result = document.getElementById("result");
let calc = "";

category.addEventListener("change", () => {
  let dropdown = document.getElementById(category.value);
  dropdowns.forEach((item) => item.classList.add("formulas"));
  dropdown.classList.remove("formulas");
  dropdown.addEventListener("change", () => {
    handleSecondTierDropdown(category.value, dropdown.value);
  });
});

function handleSecondTierDropdown(type, value) {
  userInputs.innerHTML = "";
  switch (type) {
    case "area":
      switch (value) {
        case "circ":
          calc = "area-circ";
          createInput(calc, "Radius");
          break;
        case "para":
          calc = "area-para";
          createInput(calc, "Base", "Height");
          break;
        case "rect":
          calc = "area-rect";
          createInput(calc, "Length", "Width");
          break;
        case "rhom":
          calc = "area-rhom";
          createInput(calc, "Diagonal 1", "Diagonal 2");
          break;
        case "squa":
          calc = "area-squa";
          createInput(calc, "Side");
          break;
        case "trap":
          calc = "area-trap";
          createInput(calc, "Base 1", "Base 2", "Height");
          break;
        case "tria":
          calc = "area-tria";
          createInput(calc, "Base", "Height");
          break;
      }
      break;
    case "circ":
      switch (value) {
        case "circ":
          calc = "circ-circ";
          createInput(calc, "Radius");
          break;
        case "rect":
          calc = "circ-rect";
          createInput(calc, "Length", "Width");
          break;
      }
      break;
    case "surf":
      switch (value) {
        case "cyli":
          break;
        case "pyra":
          break;
        case "rect":
          break;
        case "sphe":
          break;
      }
      break;
    case "volu":
      switch (value) {
        case "cyli":
          break;
        case "pyra":
          break;
        case "rect":
          break;
        case "sphe":
          break;
      }
      break;
    case "othe":
      switch (value) {
        case "pyth":
          break;
      }
      break;
  }
}

function createInput(type, placeholder1, placeholder2 = "", placeholder3 = "") {
  userInputs.style.display = "flex";
  const input1 = document.createElement("input");
  input1.classList.add("input");
  input1.setAttribute("autocomplete", "off");
  userInputs.appendChild(input1);
  input1.id = type;
  input1.placeholder = placeholder1;
  if (placeholder2 !== "") {
    const input2 = document.createElement("input");
    input2.classList.add("input");
    input2.setAttribute("autocomplete", "off");
    userInputs.appendChild(input2);
    input2.id = type;
    input2.placeholder = placeholder2;
  }
  if (placeholder3 !== "") {
    const input3 = document.createElement("input");
    input3.classList.add("input");
    input3.setAttribute("autocomplete", "off");
    userInputs.appendChild(input3);
    input3.id = type;
    input3.placeholder = placeholder3;
  }
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  result.style.color = "white";
  let input1 = document.getElementById(calc);
  if (calc == "area-circ") {
    result.innerHTML =
      "Circle area = π r <sup>2</sup> = " +
      Math.round(Math.PI * Math.pow(Number(document.getElementById(calc).value), 2) * 100) / 100;
  } else if (calc == "area-para") {
    let input2 = input1.nextSibling;
    result.innerHTML = "Parallelogram area = b h = " + Math.round(Number(input1.value) * Number(input2.value) * 100) / 100;
  } else if (calc == "area-rect") {
    let input2 = input1.nextSibling;
    result.innerHTML = "Rectangle area = l w = " + Math.round(Number(input1.value) * Number(input2.value) * 100) / 100;
  } else if (calc == "area-rhom") {
    let input2 = input1.nextSibling;
    result.innerHTML =
      "Rhombus area = d<sub>1</sub> * d<sub>2</sub> / 2 = " +
      Math.round(((Number(input1.value) * Number(input2.value)) / 2) * 100) / 100;
  } else if (calc == "area-squa") {
    result.innerHTML = "Square area = s<sup>2</sup> = " + Math.round(Math.pow(Number(input1.value), 2) * 100) / 100;
  } else if (calc == "area-trap") {
    let input2 = input1.nextSibling;
    let input3 = input2.nextSibling;
    result.innerHTML =
      "Trapezoid area = (a+b)/2*h = " +
      Math.round(((Number(input1.value) + Number(input2.value)) / 2) * Number(input3.value) * 100) / 100;
  } else if (calc == "area-tria") {
    let input2 = input1.nextSibling;
    result.innerHTML = "Triangle area = b*h = " + Math.round(((Number(input1.value) * Number(input2.value)) / 2) * 100) / 100;
  } else if (calc == "circ-circ") {
    result.innerHTML = "Circle circumference = 2πr = " + Math.round(2 * Math.PI * Number(input1.value) * 100) / 100;
  } else if (calc == "circ-rect") {
    let input2 = input1.nextSibling;
    result.innerHTML =
      "Rectangle perimeter = 2(l+w) = " + Math.round(2 * (Number(input1.value) + Number(input2.value)) * 100) / 100;
  }
  if (result.innerHTML.substring(result.innerHTML.length - 3) == "NaN") {
    result.style.color = "red";
    result.innerHTML = "Invalid input. Please enter a number.";
  }
});
