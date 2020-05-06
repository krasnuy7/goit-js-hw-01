let input = document.querySelector("#validation-input");

input.addEventListener("change", correctInput);

function correctInput() {
  if (input.value.length == this.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
  if (input.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  }
}
