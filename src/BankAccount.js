class BankAccount {
  #balance;
  #owner;

  constructor(owner, initialBalance = 0) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive!");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    // BUG: Does not check for negative amounts!
    if (amount > this.#balance) {
      throw new Error("Insufficient funds!");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

module.exports = { BankAccount };