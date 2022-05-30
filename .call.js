//The call() method calls a function with a given this value and arguments provided individually.
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}
console.log(new Food("cheese", 5).name); // expected output: "cheese"

//Using call() to invoke an anonymous function
const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];
for (let i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }.call(animals[i], i));
}

//Using call() to invoke a function and specifying the context for 'this'
function greet() {
  const reply = [
    this.animal,
    "typically sleep between",
    this.sleepDuration,
  ].join(" ");
  console.log(reply);
}
const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};
greet.call(obj); // cats typically sleep between 12 and 16 hours
