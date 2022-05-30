//Private slots and methods
//ES2022 will give us the possibility to create them using # prefix and get an error when we try to access them outside of the class
class Human {
  age = 20; //public prop
  #name = "John"; //private prop

  constructor(age) {
    this.#setAge(age); // OK
  }

  //public method
  setName(name) {
    this.#name = name;
  }

  //private method
  #setAge(age) {
    this.age = age;
  }
}

const human = new Human();
human.age = 30; // OK
human.#name = "Amy"; // ERROR!
human.setName("Amy"); // OK
human.#setAge(40); // ERROR!
