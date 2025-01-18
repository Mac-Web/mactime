const inputForm = document.getElementById("input-form");
const inputField = document.getElementById("input-field");
const userInputs = document.getElementById("user-inputs");
const formulaDropdown = document.getElementById("formula");
const result = document.getElementById("result");
let calc = "";

formulaDropdown.addEventListener("change", () => {
  let formula = formulaDropdown.value;
  calc = formula;
  userInputs.innerHTML = "";
  switch (formula) {
    case "quad":
      createInput(calc, "a", "b", "c");
      break;
    case "slop":
      createInput(calc, "(x1,y1)", "(x2,y2)");
      break;
    case "dist":
      createInput(calc, "(x1,y1)", "(x2,y2)");
      break;
  }
});

function createInput(type, placeholder1, placeholder2, placeholder3 = "") {
  userInputs.style.display = "flex";
  const input1 = document.createElement("input");
  input1.classList.add("input");
  input1.setAttribute("autocomplete", "off");
  userInputs.appendChild(input1);
  input1.id = type;
  input1.placeholder = placeholder1;
  const input2 = document.createElement("input");
  input2.classList.add("input");
  input2.setAttribute("autocomplete", "off");
  userInputs.appendChild(input2);
  input2.id = type;
  input2.placeholder = placeholder2;
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
  if (calc == "quad") {
    let a = input1.value;
    let b = input1.nextSibling.value;
    let c = input1.nextSibling.nextSibling.value;
    if (b * b - 4 * a * c < 0) {
      var root1 = Math.sqrt(0 - (b * b - 4 * a * c));
      var down = 2 * a;
      var first = (0 - b) / (2 * a);
      var first2 = first.toString();
      var seconda = root1 / (2 * a);
      var second = seconda.toString();
      var second2 = Math.round(second * 100) / 100 + "i";
      var answerF = first2 + "+" + second2;
      var answerF2 = first2 + "-" + second2;
    } else {
      var root1 = Math.sqrt(b * b - 4 * a * c);
      var upa = 0 - b + root1;
      var upb = 0 - b - root1;
      var down = 2 * a;
      var answerF = Math.round((upa / down) * 100) / 100;
      var answerF2 = Math.round((upb / down) * 100) / 100;
    }
    result.innerHTML = "X= " + answerF + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; X= " + answerF2;
  } else if (calc == "dist") {
    let input2 = input1.nextSibling;
    let x1 = parseFloat(input1.value.split(",")[0].trim().replace(/[()]/g, ""));
    let y1 = parseFloat(input1.value.split(",")[1].trim().replace(/[()]/g, ""));
    let x2 = parseFloat(input2.value.split(",")[0].trim().replace(/[()]/g, ""));
    let y2 = parseFloat(input2.value.split(",")[1].trim().replace(/[()]/g, ""));
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    result.innerHTML = "Distance = " + Math.round(distance * 100) / 100;
  } else if (calc == "slop") {
    let input2 = input1.nextSibling;
    let x1 = parseFloat(input1.value.split(",")[0].trim().replace(/[()]/g, ""));
    let y1 = parseFloat(input1.value.split(",")[1].trim().replace(/[()]/g, ""));
    let x2 = parseFloat(input2.value.split(",")[0].trim().replace(/[()]/g, ""));
    let y2 = parseFloat(input2.value.split(",")[1].trim().replace(/[()]/g, ""));
    let slope = (y2-y1)/(x2-x1);
    result.innerHTML = "Slope = " + Math.round(slope * 100) / 100;
  }
  if (result.innerHTML.substring(result.innerHTML.length - 3) == "NaN") {
    result.style.color = "red";
    result.innerHTML = "Invalid input. Please enter a number.";
  }
});
