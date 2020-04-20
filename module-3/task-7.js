/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let now = new Date().getTime();
    const trans = {
      id: now,
      type: type,
      amount: amount,
    };
    return this.transactions.push(trans);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Аккаунт пополнен на ${amount}, текущий баланс ${this.balance}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.createTransaction(amount, Transaction.WITHDRAW);
      return `Деньги сняты, текущий баланс ${this.balance}`;
    } else {
      return "Слишком много";
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Ваш баланс ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let object of account.transactions) {
      for (let obj in object) {
        if (object[obj] === id) {
          return `id транзакции ${id} тип операции ${object.type} количество ${object.amount}`;
        } else {
          return "Такой транзакции не сущесвует";
        }
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let withd = 0;
    let dep = "";
    if (type === "deposit") {
      for (const object of account.transactions) {
        for (let obj in object) {
          if (object[obj] === "deposit") {
            console.log(`Вы пополняли свой аккаунт на - ${object.amount}`);
          } else if (object[obj] === "withdraw") {
            console.log(`Вы выводили деньги со счета - ${object.amount}`);
          }
        }
      }
    }
  },
};

console.log(account.deposit(100));
console.log(account.deposit(150));
console.log(account.transactions);
console.log(account.withdraw(50));
account.getTransactionTotal("deposit");
console.log(account.getBalance());
