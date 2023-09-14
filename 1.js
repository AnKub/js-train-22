    // Одиночка (Singleton) — це патерн програмування, який забезпечує, що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.
    // Клас OrderTracker відповідає за відстеження замовлень
    class OrderTracker {
      static #instance = null; // Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
      static #orders = []; // Приватне статичне orders поле для збереження списку замовлень початкове значення []
      /**
       * Статичний метод create використовується для створення єдиного екземпляра класу
       */
      static create() {
        // Перевіряємо, чи є вже створений екземпляр класу
        if (!this.#instance) {
          // Якщо немає, створюємо новий екземпляр
          this.#instance = new OrderTracker();
        }
    
        // Інакше повертаємо єдиний екземпляр класу
        return this.#instance;
      }
    
      /**
       * Статичний метод add використовується для додавання замовлення до списку
       * Отримує item та додає його до масиву замовлень
       */
      static add(item) {
        this.#orders.push(item);
      }
    
      /**
       * Статичний метод get використовується для отримання списку замовлень
       */
      static get() {
        return this.#orders;
      }
    }
    console.log("Завдання 1 ====================================");
    
    // Створюємо єдиний екземпляр класу OrderTracker
    const tracker = OrderTracker.create();
    
    // Додаємо замовлення до списку
    OrderTracker.add("Телефон");
    OrderTracker.add("Ноутбук");
    
    // Отримуємо список замовлень
    const orders = OrderTracker.get();
    
    // Виводимо список замовлень в консоль
    console.log(orders);




    // notice with Kir

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