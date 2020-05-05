let value = document.querySelector("#value");
let button = document.querySelectorAll("button");

[...button].forEach((element) => {
  element.addEventListener("click", operation);
});
let counter = 0;
function operation() {
  if (this.dataset.action === "decrement") {
    counter--;
  }
  if (this.dataset.action === "increment") {
    counter++;
  }
  value.textContent = counter;
}
