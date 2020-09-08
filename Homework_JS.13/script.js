const person = { name: "Alex", surname: "Smith", phone: "+380 00 000 00 00" };

function createTemplate(templateStr) {
  return function template(obj) {
    var newstr = templateStr;
    for (key in obj) {
      var subStr = "{{" + key + "}}";

      newstr = newstr.replace(subStr, obj[key]);
    }
    console.log(newstr);
  };
}

const helloTemplate = createTemplate("Hello, {{name}}!");

helloTemplate(person);
const detailsTemplate = createTemplate("{{name}} {{surname}}, phone {{phone}}");

detailsTemplate(person); // возвращает Alex Smith, phone +380 00 000 00 00

/* Написать функцию createTemplate.  в нее в качестве аргумента передается шаблон строки.

Она должна возвращать другую функцию. При вызове этой второй функции, мы передаем в нее объект. Функция должна вернуть заполненый шаблон значениями из объекта

Например
const person = {name: ‘Alex’, surname:’Smith’, phone: ’+380 00 000 00 00’}

const helloTemplate  = createTemplate(‘Hello, {{name}}!’)

helloTemplate(person); // возвращает Hello, Alex!

const detailsTemplate = createTemplate(‘{{name}} {{surname}}, phone {{phone}}’);

detailsTemplate(person) // возвращает Alex Smith, phone +380 00 000 00 00

Обратите внимание, что функция должна быть универсальная и работать с абсолютно любыми шаблонами и объектами.

Для реализации понадобится метод Object.keys() 
*/
