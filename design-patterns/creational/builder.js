/* Creational Design Patterns */
//Creational Design Patterns will create objects for you instead of instantiating an object directly.

/* Builder */
//It constructs complex objects from simple objects.

//We will be using an example of a person class that stores a Person’s information.

class Person {
  constructor() {
    this.address = this.postcode = this.city = "";
    this.company = this.position = "";
    this.income = 0;
  }

  toString() {
    return `Person lives at ${this.city}, ${this.address}, ${this.postcode} and works at ${this.company} as a ${this.position} earning ${this.income}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(address) {
    this.person.address = address;
    return this;
  }

  withPostCode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(company) {
    this.person.company = company;
    return this;
  }

  as(position) {
    this.person.position = position;
    return this;
  }

  earn(income) {
    this.person.income = income;
    return this;
  }
}

//This is how we will use it
let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at("Hr.Botev str.")
  .in("Sofia")
  .withPostCode("1000")
  .works.at("Robotev")
  .as("Engenner")
  .earn(10000)
  .build();

console.log(person.toString());
