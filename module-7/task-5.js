let input = document.querySelector("#name-input");
let out = document.querySelector("#name-output");

input.addEventListener("input", showValue);

function showValue(event) {
  event.preventDefault();

  if (input.value.length === 0) {
    out.innerHTML = "незнакомец";
  } else {
    out.innerHTML = input.value;
  }
}
