#!/usr/bin/env node

/**
 * Simple Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * And advanced operations:
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

const readline = require('readline');

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Returns the remainder of a divided by b
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number|string} Result or error message
 */
function modulo(a, b) {
  if (b === 0) {
    return 'Error: Cannot perform modulo with zero';
  }
  return a % b;
}

/**
 * Returns base raised to the exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of base^exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Returns the square root of a number
 * @param {number} n - The number to find the square root of
 * @returns {number|string} Result or error message for negative numbers
 */
function squareRoot(n) {
  if (n < 0) {
    return 'Error: Cannot calculate square root of a negative number';
  }
  return Math.sqrt(n);
}

/**
 * Performs arithmetic operations
 * @param {number} operand1 - First number
 * @param {number} operand2 - Second number
 * @param {string} operation - Operation symbol (+, -, *, /, %, ^, √)
 * @returns {number|string} Result or error message
 */
function calculate(operand1, operand2, operation) {
  switch (operation) {
    case '+':
      // Addition operation
      return operand1 + operand2;
    case '-':
      // Subtraction operation
      return operand1 - operand2;
    case '*':
      // Multiplication operation
      return operand1 * operand2;
    case '/':
      // Division operation with error handling for division by zero
      if (operand2 === 0) {
        return 'Error: Cannot divide by zero';
      }
      return operand1 / operand2;
    case '%':
      // Modulo operation with error handling
      return modulo(operand1, operand2);
    case '^':
      // Exponentiation operation
      return power(operand1, operand2);
    case '√':
      // Square root operation (uses operand1 only, ignores operand2)
      return squareRoot(operand1);
    default:
      return 'Error: Invalid operation. Use +, -, *, /, %, ^, or √';
  }
}

function startCalculator() {
  console.log('\n=== Node.js CLI Calculator ===');
  console.log('Supported operations:');
  console.log('  Basic: + (add), - (subtract), * (multiply), / (divide)');
  console.log('  Advanced: % (modulo), ^ (power), √ (square root)\n');

  rl.question('Enter first number: ', (num1) => {
    const operand1 = parseFloat(num1);

    if (isNaN(operand1)) {
      console.log('Error: Invalid input for first number');
      rl.close();
      return;
    }

    rl.question('Enter operation (+, -, *, /, %, ^, √): ', (op) => {
      if (!['+', '-', '*', '/', '%', '^', '√'].includes(op)) {
        console.log('Error: Invalid operation');
        rl.close();
        return;
      }

      // For square root, skip asking for second number
      if (op === '√') {
        const result = calculate(operand1, 0, op);
        console.log(`\nResult: √${operand1} = ${result}\n`);
        rl.close();
        return;
      }

      rl.question('Enter second number: ', (num2) => {
        const operand2 = parseFloat(num2);

        if (isNaN(operand2)) {
          console.log('Error: Invalid input for second number');
          rl.close();
          return;
        }

        const result = calculate(operand1, operand2, op);
        console.log(`\nResult: ${operand1} ${op} ${operand2} = ${result}\n`);

        rl.close();
      });
    });
  });
}

// Export calculate function and new operations for testing
module.exports = { calculate, modulo, power, squareRoot };

// Start the calculator only if this file is run directly
if (require.main === module) {
  startCalculator();
}
