// CODE here for your Lambda Classes

//Person class.

class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.name = name;
    this.location = location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
//Person class test.
const bali = new Person('Tope', 23, 'Ibadan');
const bili = new Person('Kofe', 25, 'London');
const ed = new Person('Ed', 32, 'Oak');

console.log(bali.speak());
console.log(bili.speak());
console.log(ed.speak());
