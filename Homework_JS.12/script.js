function Calculator(number) {
  this.result = number;
  this.impresion = number;

  this.sum = function (num) {
    this.impresion = this.impresion + " + " + num;
    return (this.result += num);
  };
  this.sub = function (num) {
    this.impresion = this.impresion + " - " + num;
    return (this.result -= num);
  };
  this.mult = function (num) {
    this.impresion = this.impresion + " * " + num;
    return (this.result *= num);
  };
  this.div = function (num) {
    this.impresion = this.impresion + " / " + num;
    return (this.result /= num);
  };
  this.set = function (num) {
    this.impresion = num;
    return (this.result = num);
  };
  this.getResult = function () {
    return (this.impresion = this.impresion + " = " + this.result);
  };
}

const calculator10 = new Calculator(10);

console.log(calculator10.sum(5)); /// 15
console.log(calculator10.mult(10)); // 150
console.log(calculator10.sub(40)); // 110
console.log(calculator10.div(10)); // 11
console.log(calculator10.getResult());
console.log(calculator10.set(100)); // 100
console.log(calculator10.getResult());
