// Let's test drive summing numbers
// sum() -> 0
// sum(5) -> 5
// sum(4, 5, 6) -> 15
import sum from '../sum';
// var sum = require('./sum');

test('sum(0) should return 0', () => {
  const result = sum();
  expect(result).toBe(0);
});

test('passing a single argument, returns just that', () => {
  const result = sum(5);
  expect(result).toBe(5);
});

test('passing any numbers, returns their sum', () => {
    const result = sum(4,5,6);
    expect(result).toBe(15);
});