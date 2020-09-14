Hamburger.SIZE_SMALL = { price: 50, callories: 20 };
Hamburger.SIZE_MEDIUM = { price: 75, callories: 30 };
Hamburger.SIZE_BIG = { price: 100, callories: 40 };

Hamburger.TOPPING_MAYO = { price: 20, callories: 5 };
Hamburger.TOPPING_POTATO = { price: 15, callories: 10 };
Hamburger.TOPPING_CHEESE = { price: 10, callories: 20 };
Hamburger.TOPPING_SALAD = { price: 20, callories: 5 };
Hamburger.TOPPING_SPICE = { price: 15, callories: 5 };

function Hamburger(size) {
  this._price = size.price;
  this._callories = size.callories;
}

Hamburger.prototype = {
  getPrice: function () {
    return this._price;
  },
  getCallories: function () {
    return this._callories;
  },
  addTopping: function (topping) {
    this._price += topping.price;
    this._callories += topping.callories;
  },
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce: " + hamburger.getPrice()); //85
console.log("Callories with sauce: " + hamburger.getCallories()); //35

/*Сеть фастфудов предлагает несколько видов гамбургеров:



маленький (50 тугриков, 20 калорий)
средний (75 тугриковб 30 каллорий)
большой (100 тугриков, 40 калорий)


Гамбургер может быть с одним из нескольких видов начинок:



сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).


При этом начинок можно добавить несколько или не быть совсем



Напишите программу, расчитывающую стоимость и калорийность гамбургера. 
Используй ООП подход (подсказка: нужен класс Гамбургер, статические константы, методы для выбора опций и рассчета нужных величин).*/
