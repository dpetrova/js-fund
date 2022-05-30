/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Command */
//The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.
//It creates objects which encapsulate actions in objects.

//We will be taking a simple example of a bank account in which we give a command if we have to deposit or withdraw a certain amount of money.

class BankAccount {
  static overdraftLimit = -500;
  constructor(balance = 0) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. Total balance ${this.balance} `);
  }
  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. Total balance ${this.balance} `);
    }
  }
  toString() {
    return `Balance ${this.balance}`;
  }
}

//Creating our commands
let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
  }
  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        break;
      case Action.withdraw:
        this.account.withdraw(this.amount);
        break;
    }
  }
  undo() {
    switch (this.action) {
      case Action.deposit:
        this.account.withdraw(this.amount);
        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

//That’s how we will use this
let account = new BankAccount(100);
let cmd = new BankAccountCommand(account, Action.deposit, 50);
cmd.call();
console.log(account.toString());
cmd.undo();
console.log(account.toString());
