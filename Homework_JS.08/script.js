function getSimpleNumbers(number) {
  let arrayNumbers = getArrayNumbers(number);
  let arrayNaturalNumbers = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (checkPrime(arrayNumbers[i])) {
      arrayNaturalNumbers.push(arrayNumbers[i]);
    }
  }
  return arrayNaturalNumbers;
}

function checkPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

function getArrayNumbers(number) {
  let arrayOfNumbers = [];
  for (let i = 0; number >= 1; i++) {
    arrayOfNumbers[i] = number;
    number--;
  }

  return arrayOfNumbers.reverse();
}

function checkNumber() {
  let userInput;
  let flag = true;
  do {
    userInput = +prompt("Enter rigth number(>0).");
    if (Number.isInteger(userInput) && userInput > 0) flag = false;
  } while (flag);

  return userInput;
}

let number = checkNumber();

alert(getSimpleNumbers(number));
