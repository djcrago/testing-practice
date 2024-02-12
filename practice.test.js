import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './practice';

test('capitalize (1)', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalize (2)', () => {
  expect(capitalize('doberman')).toBe('Doberman');
});

test('reverseString (1)', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('reverseString (2)', () => {
  expect(reverseString('doberman')).toBe('namrebod');
});

test('calculator adds 1 and 2', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator adds 3 and 4', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('calculator subtracts 5 from 6', () => {
  expect(calculator.subtract(6, 5)).toBe(1);
});

test('calculator divides 7 from 8', () => {
  expect(calculator.divide(8, 7)).toBeCloseTo(1.14);
});

test('calculator multiplies 9 by 10', () => {
  expect(calculator.multiply(9, 10)).toBe(90);
});

test('casesarCipher (1)', () => {
  expect(caesarCipher('string', 1)).toBe('tusjoh');
});

test('casesarCipher (2)', () => {
  expect(caesarCipher('string', 2)).toBe('uvtkpi');
});

test('ceasarCipher wrapping a to z', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('ceasarCipher punctuation', () => {
  expect(caesarCipher('xyz!!!', 3)).toBe('abc!!!');
});

test('analyzeArray (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyzeArray (2)', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});
