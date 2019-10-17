/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(edible) {
    if (this.stomach.length < 10) {
      return this.stomach.push(edible);
    }
  }

  poop() {
    return (this.stomach = []);
  }

  toString() {
    return `${this.name}, ${this.age}`;
  };
}
//Test 1
const dipo = new Person('Dipo', '34');
console.log(dipo.toString());

//Task 2
class Car {
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    return (this.tank += gallons);
  }

  drive(distance) {
    const fuelNeed = distance / this.milesPerGallon;
    if (fuelNeed <= this.tank) {
      this.tank = this.tank - fuelNeed;
      this.odometer += distance;
    } else {
      this.odometer = this.tank * this.milesPerGallon;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  };
}

//Test 2
const bmw = new Car('645li', 45);
console.log(bmw.fill(34));
