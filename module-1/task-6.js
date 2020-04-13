let input;
let total = 0;

do {
 	input = prompt('Введите число');
	console.log(Number.isNaN(Number(input)));
	Number.isNaN(Number(input)) ? alert('Введите цыфры') : total += Number(input);	
} while (input !== null)
alert(`Общее количество ${total}`);