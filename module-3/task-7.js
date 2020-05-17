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
  getId() {
    return this.transactions.length;
  },

  createTransaction(amount, type) {
    let id = this.getId();
    const trans = {
      id,
      type,
      amount,
    };
    this.transactions = [...this.transactions, trans];
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

  delTask(id) {
    for (const task of this.transactions) {
      if (task.id === id) {
        const index = this.transactions.indexOf(task);
        console.log(index);
        this.transactions.splice(index, 1);
        console.log(this.transactions);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let dep = 0;
    if (type === "deposit") {
      for (const object of account.transactions) {
        if (object.type === "deposit") {
          console.log("Сколько денег вы положили на счет: " + object.amount);
        }
      }
    }
    if (type === "withdraw") {
      for (const object of account.transactions) {
        if (object.type === "withdraw") {
          console.log("Сколько денег вы сняли на счет: " + object.amount);
        }
      }
    }
    return true;
  },
};

console.log(account.deposit(100));
console.log(account.deposit(150));
console.log(account.deposit(228));
console.log(account.delTask(0));
// console.log(account.withdraw(50));
// console.log(account.getBalance());
