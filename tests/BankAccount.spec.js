const { test, expect } = require('@playwright/test');
const { BankAccount } = require('../src/BankAccount');

test.describe('BankAccount withdrawals', () => {
	test('withdraws a standard amount', () => {
		const account = new BankAccount('Alex', 100);

		account.withdraw(40);

		expect(account.getBalance()).toBe(60);
	});

	test('rejects a withdrawal greater than the balance', () => {
		const account = new BankAccount('Alex', 100);

		expect(() => account.withdraw(150)).toThrow('Insufficient funds!');
		expect(account.getBalance()).toBe(100);
	});

	test('rejects a negative withdrawal amount', () => {
		const account = new BankAccount('Alex', 100);

		expect(() => account.withdraw(-50)).toThrow();
		expect(account.getBalance()).toBe(100);
	});
});