function createCalculator(number) {
  let result = number;
  return {
    sum: function (num) {
      return (result += num);
    },
    sub: function (num) {
      return (result -= num);
    },
    mult: function (num) {
      return (result *= num);
    },
    div: function (num) {
      return (result /= num);
    },
    set: function (num) {
      return (result = num);
    },
  };
}

const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); //
