const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divid: function (a, b) {
    return a / b;
  },
  multiple: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(2, 2);
const minus = calculator.minus(2, 2);
const divid = calculator.divid(2, 2);
const multiple = calculator.multiple(2, 2);
const power = calculator.power(2, 2);

console.log(plus);
console.log(minus);
console.log(divid);
console.log(multiple);
console.log(power);
