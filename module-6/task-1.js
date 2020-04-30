import users from "./users.js";
console.log("-----------------Задача 1 --------------------------");
const getUserNames = (users) => {
  const arr = users.map((user) => user.name);
  return arr;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
console.log("-----------------Задача 2 --------------------------");
const getUsersWithEyeColor = (users, color) => {
  let arr = users.filter((user) => user.eyeColor === color);
  return arr;
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log("-----------------Задача 3 --------------------------");
const getUsersWithGender = (users, gender) => {
  let arr = users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);
  return arr;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
console.log("-----------------Задача 4 --------------------------");
const getInactiveUsers = (users) => {
  const activeUsers = users.filter((user) => !user.isActive);
  return activeUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
console.log("-----------------Задача 5 --------------------------");
const getUserWithEmail = (users, email) => {
  let person = users.find((user) => user.email === email);
  return person;
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}
console.log("-----------------Задача 6 --------------------------");
const getUsersWithAge = (users, min, max) => {
  let arr = users.filter((user) => user.age > min && user.age < max);
  return arr;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
console.log("-----------------Задача 7 --------------------------");
const calculateTotalBalance = (users) => {
  let arr = users.reduce((acc, user) => (acc += user.balance), 0);
  return arr;
};

console.log(calculateTotalBalance(users)); // 20916
console.log("-----------------Задача 8 --------------------------");
const getUsersWithFriend = (users, friendName) => {
  let arr = [];
  users.forEach((element) => {
    element.friends.filter((user) =>
      user === friendName ? arr.push(element.name) : false
    );
  });
  return arr;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
console.log("-----------------Задача 9 --------------------------");
const getNamesSortedByFriendsCount = (users) => {
  let arr = [];
  users.forEach((element) => {
    let obj = {
      name: element.name,
      count: Object.keys(element.friends).length,
    };
    arr = [...arr, obj];
  });
  const sortByActiveDays = (a, b) => a.count - b.count;
  let arrName = [];
  arr.sort(sortByActiveDays).forEach((element) => {
    arrName = [...arrName, element.name];
  });

  return arrName;
};
console.log(getNamesSortedByFriendsCount(users));
console.log("-----------------Задача 10 --------------------------");
const getSortedUniqueSkills = (users) => {
  let person = users.reduce((allTags, user) => {
    allTags.push(...user.skills);
    return allTags;
  }, []);
  let set = new Set(person.sort());
  let arr = [];
  set.forEach((element) => {
    arr = [...arr, element];
  });
  return arr;
};
const person = getSortedUniqueSkills(users);
console.log(person);
