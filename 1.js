// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
  // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  static #instance = null;
  // Приватне статичне orders поле для збереження списку замовлень початкове значення []
  static #orders = [];
  /**
   * Статичний метод create використовується для створення єдиного екземпляра класу
   */
  // Перевіряємо, чи є вже створений екземпляр класу
  // Якщо немає, створюємо новий екземпляр
  // Інакше повертаємо єдиний екземпляр класу
  static create() {
    if (!this.#instance) {
      this.#instance = new OrderTracker();
    } else return this.#instance;
  }
  static add(item) {
    this.#orders.push(item);
  }

  static get() {
    return this.#orders;
  }
  /**
   * Статичний метод add використовується для додавання замовлення до списку
   * Отримує item та додає його до масиву замовлень
   */
  /**
   * Статичний метод get використовується для отримання списку замовлень
   */
}
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
// const tracker = OrderTracker.create();
const tracker = OrderTracker.create();
OrderTracker.add("Телефон");
OrderTracker.add("Ноутбук");
// Додаємо замовлення до списку
// OrderTracker.add("Телефон");
// OrderTracker.add("Ноутбук");
const orders = OrderTracker.get();
// Отримуємо список замовлень
// const orders = OrderTracker.get();
console.log(orders);
// Виводимо список замовлень в консоль
// console.log(orders);

class RecentPurchases{
static #instance = null;

constructor() {
this.purchases = [];
}

static create(){
if(!this.#instance) {
this.#instance = new RecentPurchases();
}
return this.#instance;
}

add(item) {
  this.purchases.push(item);
}
get() {
return this.purchases;
}
}

const lastPurchaseList = RecentPurchases.create();
const lastPurchaseList2 = RecentPurchases.create();
console.log(lastPurchaseList === lastPurchaseList2);

lastPurchasesList2.add('Phone');
lastPurchasesList2.add('Handfree');

console.log(lastPurchaseList.get());