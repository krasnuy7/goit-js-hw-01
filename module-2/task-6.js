let input = null;
const numbers = [];
numbers.push(Number(input));
let total = 0;

do {
  input = prompt("Введите число");
  Number.isNaN(Number(input))
    ? alert("Введите цыфры")
    : numbers.push(Number(input));
} while (input !== null);

if (input === null) {
  for (const number of numbers) {
    total += number;
  }
  if (numbers.length === 0) {
    console.log("Массив пуст");
  } else {
    console.log(`Общая сумма чисел равна ${total}`);
  }
}
