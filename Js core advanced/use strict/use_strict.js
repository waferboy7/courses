"use strict";

const factorials = [];

function factorial(number) {
  if (number === 1 || number === 0) return 1;

  if (factorials[number]) return factorial[number];

  factorials[number] = number * factorial(number - 1);

  return factorials[number];
}

console.log(factorial(3));
