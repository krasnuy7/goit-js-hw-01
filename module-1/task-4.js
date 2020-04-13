let credits = 23580,
	pricePerDroid = 3000;

let totalPrice = prompt("Какое количество вы хотите купить?");



if (totalPrice === null) {
	totalPrice = 'Отменено пользователем!';
	console.log(totalPrice);
}else if(Number(totalPrice) * pricePerDroid > credits){
		console.log('Недостаточно средств на счету!');
	}else{
		let seller = Number(totalPrice) * pricePerDroid,
			updatecredit = credits - seller;
			console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${updatecredit} кредитов.`);
	}