const ADMIN_PASSWORD = "jqueryismyjam";

let message = prompt("Введите пароль администратора");

switch (message) {
  case null:
    message = "Отменено пользователям";
    break;

  case ADMIN_PASSWORD:
    message = "Добро пожаловать";
    break;

  default:
    message = "Доступ запрещен, неверный пароль!";
    break;
}

alert(message);
