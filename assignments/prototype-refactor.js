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
