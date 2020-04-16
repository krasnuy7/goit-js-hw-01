const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const error = "Ошибка! Логин должен быть от 4 до 16 символов";
const issetLogin = "Такой логин уже используется!";
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return login;
  } else {
    return error;
  }
};

const isLoginUnique = function (allLogins, login) {
  let a = "";
  if (login === error) {
    return null;
  }
  for (const onelogin of allLogins) {
    if (login === onelogin) {
      login = null;
    } else {
      a = login;
    }
  }
  return a;
};

const addLogin = function (allLogins, login) {
  const validLogin = isLoginValid(login);
  if (validLogin === error) {
    return error;
  }
  const correctLogin = isLoginUnique(logins, validLogin);
  if (correctLogin === null) {
    return issetLogin;
  }
  allLogins.push(login);
  return "Логин успешно добавлен";
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
