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

const plus = calculator.plus(2, 3);

console.log(plus);
