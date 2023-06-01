function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function calculator(number1, number2, operator) {
  return operator(number1, number2);
}

console.log("10 + 10 = " + calculator(10, 10, add));
console.log("10 - 10 = " + calculator(10, 10, subtract));
console.log("10 * 10 = " + calculator(10, 10, multiply));
console.log("10 / 10 = " + calculator(10, 10, divide));
