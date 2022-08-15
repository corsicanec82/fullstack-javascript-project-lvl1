import { it, expect } from '@jest/globals';

import { getGreaterDivisor } from '../src/games/gcd.js';
import { isPrime } from '../src/games/prime.js';
import { isEven } from '../src/games/even.js';
import { calculate } from '../src/games/calc.js';

it('getGreaterDivisor(54, 96) should return 6', () => {
  expect(getGreaterDivisor(54, 96)).toBe(6);
});

it('getGreaterDivisor(12, 6) should return 6', () => {
  expect(getGreaterDivisor(12, 6)).toBe(6);
});

it('isEven(28) should return true', () => {
  expect(isEven(28)).toBe(true);
});

it('isPrime(5) should return true', () => {
  expect(isPrime(5)).toBe(true);
});

it('isPrime(4) should return false', () => {
  expect(isPrime(4)).toBe(false);
});

it('isPrime(1) should return false', () => {
  expect(isPrime(1)).toBe(false);
});

it('12 * 7 should return 84', () => {
  expect(calculate(12, 7, '*')).toBe(84);
});

it('12 - 7 should return 5', () => {
  expect(calculate(12, 7, '-')).toBe(5);
});

it('12 + 7 should return 19', () => {
  expect(calculate(12, 7, '+')).toBe(19);
});

it('12 / 7 should return empty string', () => {
  expect(calculate(12, 7, '/')).toBe('');
});
