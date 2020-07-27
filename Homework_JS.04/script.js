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
    return Number(a) + Number(b);
  }
  function sub(a, b) {
    return Number(a) - Number(b);
  }
  function multi(a, b) {
    return Number(a) * Number(b);
  }
  function div(a, b) {
    return Number(a) / Number(b);
  }
}
let userAnswer;
let arrayEnter;
let enter;
let result;
userAnswer = prompt(
  "Введите ваш пример для решения, в формате arg1 <знак> arg2."
);
arrayEnter = userAnswer.split(" ");

for (let i = 0; i < arrayEnter.length; i++) {
  while (arrayEnter[i] == "") {
    arrayEnter.splice(i, 1);
  }
}
enter = String(arrayEnter[0]);
for (let i = 0; i < arrayEnter.length - 1; i++) {
  enter = enter + " " + String(arrayEnter[i + 1]);
}

for (let i = 1; i < arrayEnter.length - 1; i++) {
  while (arrayEnter[i] == "*" || arrayEnter[i] == "/") {
    arrayEnter[i - 1] = calculate(
      arrayEnter[i - 1],
      arrayEnter[i + 1],
      arrayEnter[i]
    );
    arrayEnter.splice(i, 2);
  }
}

for (let i = 1; i < arrayEnter.length - 1; i++) {
  while (arrayEnter[i] == "+" || arrayEnter[i] == "-") {
    arrayEnter[i - 1] = calculate(
      arrayEnter[i - 1],
      arrayEnter[i + 1],
      arrayEnter[i]
    );
    arrayEnter.splice(i, 2);
  }
}

alert(`${enter} = ${arrayEnter[0]}`);
