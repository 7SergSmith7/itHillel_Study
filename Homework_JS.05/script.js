function calculate(operation, arrayNumbs) {
  let result = Number(arrayNumbs[0]);
  let expression = arrayNumbs[0];

  for (let i = 1; i < arrayNumbs.length; i++) {
    switch (operation) {
      case "+":
        result = result + Number(arrayNumbs[i]);
        expression += " + " + arrayNumbs[i];
        break;
      case "-":
        result -= arrayNumbs[i];
        expression += " - " + arrayNumbs[i];
        break;
      case "/":
        result /= arrayNumbs[i];
        expression += " / " + arrayNumbs[i];
        break;
      case "*":
        result *= arrayNumbs[i];
        expression += " * " + arrayNumbs[i];
        break;
    }
  }
  alert(`${expression} = ${result}`);
}

function getOperation() {
  let flag;
  const arraySigns = ["+", "-", "*", "/"];
  do {
    inputOperation = String(
      prompt("Введите одно действие для вычисления (+-/*).")
    );

    flag = arraySigns.indexOf(inputOperation);
  } while (flag === -1);
  return inputOperation;
}

function getNumbers() {
  let arrayEnter;
  do {
    userInput = String(prompt("Введите как минимум 2 числа через пробел."));
    arrayEnter = userInput.split(" ");

    while (arrayEnter[arrayEnter.length - 1] == "") {
      arrayEnter.splice(arrayEnter.length - 1, 1);
    }

    for (let i = 0; i < arrayEnter.length; i++) {
      while (isNaN(arrayEnter[i]) || arrayEnter[i] == "") {
        arrayEnter[i] = parseInt(arrayEnter[i]);
        if (arrayEnter.length == 1) break;
        arrayEnter.splice(i, 1);
      }
    }
  } while (arrayEnter.length < 2);
  return arrayEnter;
}

let userInputOperation = getOperation();
let arrayInputNumbs = getNumbers();

calculate(userInputOperation, arrayInputNumbs);
