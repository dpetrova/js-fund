/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Memento */
//Memento restores an object to its previous state.
//The memento pattern is implemented with three objects: the originator, a caretaker and a memento.

//We will be taking an example of a bank account in which we store our previous state and will have the functionality of undoing.

class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return new Memento(this.balance);
  }
  restore(m) {
    this.balance = m.balance;
  }
  toString() {
    return `Balance ${this.balance}`;
  }
}

//That’s how we will use this
let account = new BankAccount(100);
let m1 = account.deposit(50);
let m2 = account.deposit(50);
console.log(account.toString());
//restore to m1
account.restore(m1);
console.log(account.toString());
