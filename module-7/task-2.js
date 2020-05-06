let ul = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let arr = ingredients.map((item) => `<li>${item}</li>`).join("");
ul.insertAdjacentHTML("beforeend", arr);
