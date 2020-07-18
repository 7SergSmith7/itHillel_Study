let questions = [
  "Сколько будет 2+2?",
  "Солнце встает на востоке?",
  "Сколько будет 5 / 0?",
  "Какого цвета небо?",
  "Как правильный ответ на главный вопрос жизни, вселенной и всего такого.",
];
let answersRight = ["4", "да", "бесконечность", "голубое", "42"];
let userAnswer;
let score = 0;
let douglasA = "";

for (let i = 0; i < 5; i++) {
  userAnswer = prompt(questions[i]).toLowerCase();
  if (userAnswer === answersRight[i]) score += 10;
  if (userAnswer === answersRight[4])
    douglasA = " // Адамс Дуглас вам подмигнул.";
}

alert("Ваш счет: " + score + "!" + douglasA);
