// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  test('should return the sum of two numbers separated by a comma', () => {
    expect(calculator.add("1,5")).toBe(6);
    expect(calculator.add("10,20")).toBe(30);
  });

  test('should return the sum of numbers separated by new lines', () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("4\n5\n6")).toBe(15);
  });

  test('should handle custom delimiters', () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  test('should throw an error for negative numbers with a detailed message', () => {
    expect(() => calculator.add("1,-2")).toThrow("Negative numbers not allowed: -2");
    expect(() => calculator.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
  });
});
