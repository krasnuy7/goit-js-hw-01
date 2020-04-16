let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  Number.isNaN(Number(input)) ? alert("Введите цыфры") : numbers.push(input);
}
if (numbers[0] === null) {
  console.log("Массив пуст");
} else {
  for (const number of numbers) {
    total += Number(number);
  }
  console.log(`Общее количество ${total}`);
}
