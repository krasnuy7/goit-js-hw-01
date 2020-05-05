let ul = document.querySelector("#ingredients");
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

for (const ingredient of ingredients) {
  ul.innerHTML += `<li>${ingredient}</li>`;
}
