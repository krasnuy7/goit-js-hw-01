let range = document.querySelector("#font-size-control");
let text = document.querySelector("#text");
range.addEventListener("input", changeRange);

function changeRange() {
  text.style.fontSize = range.value + "px";
  console.log(range.value);
}
