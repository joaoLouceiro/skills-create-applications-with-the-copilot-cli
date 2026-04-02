const { calculate } = require('../calculator');

/**
 * Comprehensive unit tests for the calculator
 * Tests all four basic arithmetic operations and edge cases
 */

describe('Calculator - Addition (+)', () => {
  test('should add two positive numbers: 2 + 3 = 5', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });

  test('should add two negative numbers: -5 + -3 = -8', () => {
    expect(calculate(-5, -3, '+')).toBe(-8);
  });

  test('should add positive and negative numbers: 10 + (-4) = 6', () => {
    expect(calculate(10, -4, '+')).toBe(6);
  });

  test('should add zero to a number: 0 + 5 = 5', () => {
    expect(calculate(0, 5, '+')).toBe(5);
  });

  test('should add two zeros: 0 + 0 = 0', () => {
    expect(calculate(0, 0, '+')).toBe(0);
  });

  test('should add decimal numbers: 3.5 + 2.5 = 6', () => {
    expect(calculate(3.5, 2.5, '+')).toBe(6);
  });

  test('should add large numbers: 1000000 + 1000000 = 2000000', () => {
    expect(calculate(1000000, 1000000, '+')).toBe(2000000);
  });
});

describe('Calculator - Subtraction (-)', () => {
  test('should subtract two positive numbers: 10 - 4 = 6', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });

  test('should subtract resulting in negative: 5 - 10 = -5', () => {
    expect(calculate(5, 10, '-')).toBe(-5);
  });

  test('should subtract two negative numbers: -5 - (-3) = -2', () => {
    expect(calculate(-5, -3, '-')).toBe(-2);
  });

  test('should subtract zero: 10 - 0 = 10', () => {
    expect(calculate(10, 0, '-')).toBe(10);
  });

  test('should subtract from zero: 0 - 5 = -5', () => {
    expect(calculate(0, 5, '-')).toBe(-5);
  });

  test('should subtract decimal numbers: 10.5 - 3.5 = 7', () => {
    expect(calculate(10.5, 3.5, '-')).toBe(7);
  });

  test('should subtract equal numbers: 42 - 42 = 0', () => {
    expect(calculate(42, 42, '-')).toBe(0);
  });
});

describe('Calculator - Multiplication (*)', () => {
  test('should multiply two positive numbers: 45 * 2 = 90', () => {
    expect(calculate(45, 2, '*')).toBe(90);
  });

  test('should multiply by zero: 100 * 0 = 0', () => {
    expect(calculate(100, 0, '*')).toBe(0);
  });

  test('should multiply two negative numbers: -5 * -3 = 15', () => {
    expect(calculate(-5, -3, '*')).toBe(15);
  });

  test('should multiply positive and negative: 6 * -2 = -12', () => {
    expect(calculate(6, -2, '*')).toBe(-12);
  });

  test('should multiply by one: 42 * 1 = 42', () => {
    expect(calculate(42, 1, '*')).toBe(42);
  });

  test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
    expect(calculate(2.5, 4, '*')).toBe(10);
  });

  test('should multiply large numbers: 1000 * 1000 = 1000000', () => {
    expect(calculate(1000, 1000, '*')).toBe(1000000);
  });
});

describe('Calculator - Division (/)', () => {
  test('should divide two positive numbers: 20 / 5 = 4', () => {
    expect(calculate(20, 5, '/')).toBe(4);
  });

  test('should divide resulting in decimal: 7 / 2 = 3.5', () => {
    expect(calculate(7, 2, '/')).toBe(3.5);
  });

  test('should divide negative by positive: -10 / 2 = -5', () => {
    expect(calculate(-10, 2, '/')).toBe(-5);
  });

  test('should divide positive by negative: 10 / -2 = -5', () => {
    expect(calculate(10, -2, '/')).toBe(-5);
  });

  test('should divide two negative numbers: -10 / -2 = 5', () => {
    expect(calculate(-10, -2, '/')).toBe(5);
  });

  test('should divide by one: 42 / 1 = 42', () => {
    expect(calculate(42, 1, '/')).toBe(42);
  });

  test('should divide zero: 0 / 5 = 0', () => {
    expect(calculate(0, 5, '/')).toBe(0);
  });

  test('should divide decimal numbers: 10.5 / 2.1', () => {
    expect(calculate(10.5, 2.1, '/')).toBeCloseTo(5, 1);
  });
});

describe('Calculator - Edge Cases', () => {
  test('should handle division by zero error: 20 / 0', () => {
    expect(calculate(20, 0, '/')).toBe('Error: Cannot divide by zero');
  });

  test('should handle division by zero with negative number: -5 / 0', () => {
    expect(calculate(-5, 0, '/')).toBe('Error: Cannot divide by zero');
  });

  test('should handle division by zero with zero numerator: 0 / 0', () => {
    expect(calculate(0, 0, '/')).toBe('Error: Cannot divide by zero');
  });

  test('should handle invalid operation: 5 ! 3', () => {
    expect(calculate(5, 3, '!')).toBe('Error: Invalid operation. Use +, -, *, or /');
  });

  test('should handle invalid operation with empty string: 5 "" 3', () => {
    expect(calculate(5, 3, '')).toBe('Error: Invalid operation. Use +, -, *, or /');
  });

  test('should handle very small decimal numbers', () => {
    expect(calculate(0.0001, 0.0002, '+')).toBeCloseTo(0.0003);
  });

  test('should handle very large numbers: 999999999 + 999999999', () => {
    expect(calculate(999999999, 999999999, '+')).toBe(1999999998);
  });
});
