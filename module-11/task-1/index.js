const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

function ShowColor() {
  document.querySelector("body").style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
let timerId;
document.querySelector(".start").addEventListener("click", function () {
  timerId = setInterval(ShowColor, 1000);
  document.querySelector(".start").setAttribute("disabled", "true");
});

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(timerId);
  document.querySelector(".start").removeAttribute("disabled");
});
