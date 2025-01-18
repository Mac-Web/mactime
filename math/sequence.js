const inputForm = document.getElementById("input-form");
const result = document.getElementById("result");
const mode = document.getElementById("mode");

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (mode.value == "sum") {
    sum();
  } else {
    last();
  }
});

function sum() {
  let firstTerm = Number(document.getElementById("a").value);
  let multiplier = Number(document.getElementById("b").value);
  let terms = Number(document.getElementById("c").value);
  let answer = (firstTerm * (1 - Math.pow(multiplier, terms))) / (1 - multiplier);
  result.style.color = "red";
  if (multiplier == 1) {
    result.innerHTML = "Sum formula is invalid when the multiplier is 1.";
  } else if (isNaN(answer)) {
    result.innerHTML = "Please enter valid numeric inputs.";
  } else {
    result.innerHTML = "Sum of terms: " + Math.round(answer * 100) / 100;
    result.style.color = "white";
  }
}

function last() {
  let firstTerm = Number(document.getElementById("a").value);
  let multiplier = Number(document.getElementById("b").value);
  let terms = Number(document.getElementById("c").value);
  let answer = firstTerm * Math.pow(multiplier, terms - 1);
  result.style.color = "red";
  if (isNaN(answer)) {
    result.innerHTML = "Please enter valid numeric inputs.";
  } else {
    result.innerHTML = "Last term: " + Math.round(answer * 100) / 100;
    result.style.color = "white";
  }
}
