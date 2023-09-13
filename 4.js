// Декоратор (Decorator) — це патерн програмування, який додає нову функціональність до існуючих об'єктів, не змінюючи їхньої структури.
// Іншими словами, він дозволяє розширити функціональність об'єкта, не змінюючи сам об'єкт.

// Клас Drink представляє основний напій, який можна приготувати.
// Цей клас містить базову вартість напою (price=10) та його ім'я (name="Чай").
class Drink {
  name = "Чай";
  price = 10;
  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

// Клас HoneyDecorator є декоратором, який додає мед до напою.
class HoneyDecorator {
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }
  get name() {
    return `${this.drink.name} з ${this.amount} г меду`;
  }
 get price() {
    const honeyPrise = 0.5;
    return this.drink.price + this.amount * honeyPrise;
  }
 prepare() {
    console.log(`Приготування ${this.name} з медом.`);
  }
}
console.log("Завдання 4 ====================================");
// Після виконання розкоментуйте код нижче

// Створення об'єкту базового напою (чаю)
let tea = new Drink();
console.log(tea.name); // Виводить ім'я напою
console.log(tea.price); // Виводить вартість напою
tea.prepare(); // Готує напій

let honeyTea = new HoneyDecorator(tea, 2); // Додаємо 2 грами меду
console.log(honeyTea.name); // Виводить нову назву напою
console.log(honeyTea.price); // Виводить нову вартість напою
honeyTea.prepare(); // Готує напій з медом







class Coffee {
name = 'Esspressssssso';
cost = 10;

cook(){
console.log(`In proccess ${this.name()}`);
}
}

class MilkDecorator {
constructor (coffee, amount){
this.coffee = coffee;
this.amount = amount;
}
get name() {
return `${this.coffe.name}, with ${this.amount} ml milk`;
}
get cost() {
const milkPrice = 0.05;
return this.coffee.cost + milkPrice * this.amount;
}
cook() {
console.log(`We are making for you ${this.name}`);
}
}

let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.cost);
coffee.cook();

let latteCoffee = new MilkDecorator(coffee, 300)
console.log (coffee.name);
console.log (coffee.cost);
latteCoffee.cook();

