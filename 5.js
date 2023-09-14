 // Мементо (Memento) — це патерн програмування, який забезпечує збереження стану об'єкта для подальшого відновлення

    // Клас Writer відповідає за роботу з текстом.
    class Writer {
      // Властивість #content представляє поточний текст. Вона ініціалізується порожнім рядком.
      #content = "";
    
      // Сетер для властивості content. Він приймає значення newContent (новий текст),
      // який потрібно встановити як поточний текст. Кожен раз, коли присвоюється нове значення,
      // викликається метод #store(), який зберігає поточний стан тексту у версіях.
      set content(newContent) {
        this.#content = newContent;
        this.#store();
      }
    
      // Метод гетер для властивості content, повертає this.#content.
      get content() {
        return this.#content;
      }
    
      // Приватний метод #store використовується для зберігання поточного стану тексту.
      // Він викликає статичний метод класу Version, create, передаючи йому поточний текст як аргумент.
      #store() {
        Version.create(this.content);
      }
    
      // Метод restore відновлює попередній стан тексту, викликаючи статичний метод класу Version, restore.
      // Цей метод повертає останню збережену версію тексту, яку ми встановлюємо як поточний текст.
      restore() {
        this.#content = Version.restore().content;
      }
    }
    
    // Клас Version відповідає за створення та зберігання версій тексту.
    class Version {
      // В конструкторі класу Version приймається аргумент content та встановлює його.
      // Це вхідний аргумент, який представляє теку збережену версію тексту.
      constructor(content) {
        this.content = content;
      }
    
      // Властивість #versions це приватний статичний масив, пустий за замовчуванням, що зберігає всі створені версії.
      static #versions = [];
    
      // Статичний метод create приймає аргумент content (текст версії) і створює новий екземпляр класу Version в який передає content .
      // Створений екземпляр додається до масиву версій versions.
      static create(content) {
        this.#versions.push(new Version(content));
      }
    
      // Статичний метод restore видаляє останный элемент масиву,
      // та повертає останню збережену версію тексту з масиву версій this.#versions[this.#versions.length - 1] .
      static restore() {
        this.#versions.pop();
        return this.#versions[this.#versions.length - 1];
      }
    }
    console.log("Завдання 5 ====================================");
    
    // Створюємо новий екземпляр класу Writer
    const writer = new Writer();
    
    // Присвоюємо текст за допомогою сетера
    writer.content = "Це початковий текст.";
    writer.content = "Редагований текст.";
    writer.content = "Оновлений текст.";
    
    // Друкуємо поточний текст
    console.log(writer.content);
    
    // Відновлюємо попередній текст
    writer.restore();
    console.log(writer.content);
    
    // Ще раз відновлюємо попередній текст
    writer.restore();
    console.log(writer.content);



// /notice


class TextEditor {
#text = '';
set text(text) {
this.#text = text;
this.#save();
}
get text() {
return this.#text;
}
#save () {
Snapshot.create(this.text);
}

restore () {
this.#text = Snapshot.restore().text;
}
}

class Snapshop {
constructor(text){
this.text=text;
}
static #snapshots = [];
 
static create (text) {
this.#snapshots.push(new Snapshop(text));
}
static restore() {
this.#snapshots.pop();
return this.#snapshots[this.#snapshots.lenght -1];
}
}

const editor = new TextEditor();
editor.text = 'Sothing start';
editor.text = 'Sothing between';
editor.text = 'Sothing end';

editor.restore();
console.log(editor.text);

editor.restore();
console.log(editor.text);
