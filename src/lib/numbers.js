const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = a => {
  return Math.round(a);
};

const roundUp = a => {
  return Math.ceil(a);
};

const roundDown = a => {
  return Math.floor(a);
};

const absolute = a => {
  return Math.abs(a);
};

const quotient = (a, b) => {
  return Math.trunc(a / b);
  /*
  return Math.trunc(a / b); //ES6 method
  return ~~(a / b); //bitwise, not good if num > 231
  return (a / b) >> 0; //bitwise, not good if num > 231
  return (a - (a % b)) / b; //Standard way
  */

};

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
