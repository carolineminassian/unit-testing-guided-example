const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test('Function is called with two positive integers. The value returned should be the result of the multiplication of both values.', () => {
    const result = multiply(11, 3);
    expect(result).toBe(33);
  });

  test('Function is called with a negative and a positive integer. The value returned should be a negative number.', () => {
    const result = multiply(11, -3);
    expect(result).toBe(-33);
  });

  test('Function is called with any number and a number 0. The value returned should be 0 (any number multiplied by 0 equals 0).', () => {
    const result = multiply(11, 0);
    expect(result).toBe(0);
  });
});
