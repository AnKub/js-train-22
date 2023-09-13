// Мементо (Memento) — це патерн програмування, який забезпечує збереження стану об'єкта для подальшого відновлення

// Клас Writer відповідає за роботу з текстом.
class Writer {
  // Властивість #content представляє поточний текст. Вона ініціалізується порожнім рядком.
  #content = "";
  set content(content) {
    this.#content = content;
    this.#store();
  }
  get content() {
    return this.#content;
  }
#store() {
    Version.create(this.content);
  }
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
  static #versions = [];
  static create(content) {
    this.#versions.push(new Version(content));
  }
  static restore() {
    this.#versions.pop();
     return this.#versions[this.#versions.length - 1];
  }
}
console.log("Завдання 5 ====================================");

const writer = new Writer();


writer.content = "Це початковий текст.";
writer.content = "Редагований текст.";
writer.content = "Оновлений текст.";

console.log(writer.content);
writer.restore();
console.log(writer.content);

writer.restore();
console.log(writer.content);






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
this.#text=text;
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
