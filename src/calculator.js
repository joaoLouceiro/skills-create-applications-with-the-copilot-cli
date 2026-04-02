#!/usr/bin/env node

/**
 * Simple Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Performs arithmetic operations
 * @param {number} operand1 - First number
 * @param {number} operand2 - Second number
 * @param {string} operation - Operation symbol (+, -, *, /)
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
    default:
      return 'Error: Invalid operation. Use +, -, *, or /';
  }
}

/**
 * Prompts user for calculator input
 */
function startCalculator() {
  console.log('\n=== Node.js CLI Calculator ===');
  console.log('Supported operations: + (add), - (subtract), * (multiply), / (divide)\n');

  rl.question('Enter first number: ', (num1) => {
    const operand1 = parseFloat(num1);

    if (isNaN(operand1)) {
      console.log('Error: Invalid input for first number');
      rl.close();
      return;
    }

    rl.question('Enter operation (+, -, *, /): ', (op) => {
      if (!['+', '-', '*', '/'].includes(op)) {
        console.log('Error: Invalid operation');
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

// Start the calculator
startCalculator();
