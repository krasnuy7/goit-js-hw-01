let country = prompt("В какую страну будет доставка?");

switch (country.toLowerCase()) {
  case "китай":
    console.log("Доставка в Китай будет стоить 100 кредитов");
    break;
  case "чили":
    console.log("Доставка в Чили  будет стоить 250 кредитов");
    break;
  case "австралия":
    console.log("Доставка в Австралия будет стоить 170 кредитов");
    break;
  case "индия":
    console.log("Доставка в Индия будет стоить 80 кредитов");
    break;
  case "ямайка":
    console.log("Доставка в Ямайка будет стоить 120 кредитов");
    break;

  default:
    alert("В вашей стране доставка не доступна");
    break;
}
