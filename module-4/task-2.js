const hotel = {
  name: "Resort Hotel",
  showThis() {
    console.log(this.name);
  },
};
hotel.showThis();
// const fn = function (callback) {
//   /*
//    * Во время вызова fn, callback будет ссылкой
//    * на функцию showThis объекта hotel.
//    * Ее вызов происходит в глобальном контексте,
//    * про hotel она ничего не знает.
//    * Соответственно this не будет ссылаться на hotel
//    */
//   console.log(this);
//   callback();
// };

// // Передается ссылка на функцию а нее ее вызов
// fn(hotel.showThis); // window или undefined
