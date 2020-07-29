function calculate(a, b, sign) {
  switch (sign) {
    case "+":
      return add(a, b);

    case "-":
      return sub(a, b);

    case "*":
      return multi(a, b);

    case "/":
      return div(a, b);

    default:
      return `Некоректный ввод.`;
  }

  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function multi(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
}

let userInputSign;
let userInputNumberOper;
const arraySigns = ["+", "-", "*", "/"];
var arrayInputNums = [];
let userImputPresentation;
let result;
let flag = true;

do {
  userInputSign = String(
    prompt("Введите одно действие для вычисления (+-/*).")
  );

  flag = arraySigns.indexOf(userInputSign);
} while (flag === -1);

flag = true;
do {
  userInputNumberOper = Number(
    prompt("Введите количество операндов от 2 до 6.")
  );

  if (userInputNumberOper > 1 && userInputNumberOper < 7) {
    flag = false;
    break;
  }
} while (flag);

for (let i = 0; i < userInputNumberOper; i++) {
  do {
    arrayInputNums[i] = prompt(`Введите число ${i + 1}`);
  } while (isNaN(arrayInputNums[i]));
}
result = arrayInputNums[0];
userImputPresentation = String(arrayInputNums[0]);
for (let i = 1; i < arrayInputNums.length; i++) {
  userImputPresentation =
    userImputPresentation +
    " " +
    userInputSign +
    " " +
    String(arrayInputNums[i]);
  result = calculate(Number(result), Number(arrayInputNums[i]), userInputSign);
}

alert(`${userImputPresentation} = ${result}`);
