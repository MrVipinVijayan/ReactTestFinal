import { isEmpty, isValidDOB, isValidMobileNumber, getAge } from '../utils/utils';

// This file contains the test for Util functions.

const expected = true;
const notExpected = false;

test('Test Empty Check Function', () => {
	expect(isEmpty('')).toBe(expected);
});

describe('Test Mobile Number', () => {
	test('Test Mobilie Number', () => {
		expect(isValidMobileNumber('1234567890')).toBe(expected);
	});
	test('Mobile Number in improper format', () => {
		expect(isValidMobileNumber('12345')).toBe(notExpected);
	});
	test('Mobile Number with characters', () => {
		expect(isValidMobileNumber('12345qqq')).toBe(notExpected);
	});
	test('Mobile Number in improper format', () => {
		expect(isValidMobileNumber('')).toBe(notExpected);
	});
});

describe('Test DOB', () => {
	test('Test DOB is in proper format', () => {
		expect(isValidDOB('03/23/1987')).toBe(expected);
	});
	test('Test DOB is in proper format with year incorrect', () => {
		expect(isValidDOB('0323/198')).toBe(notExpected);
	});
	test('Test DOB with characters', () => {
		expect(isValidDOB('0323/198h')).toBe(notExpected);
	});
	test('Test DOB with wrong format', () => {
		expect(isValidDOB('1987/23/03')).toBe(notExpected);
	});
});

describe('Test Age', () => {
	test('Return age properly', () => {
		expect(getAge('03/23/1987')).toBe(34);
	});
	test('Test Wrong age', () => {
		expect(getAge('03/23/1987')).not.toBe(32);
	});
	test('Return age with improper DOB', () => {
		expect(getAge('0323/1987')).toBeNaN();
	});
});
