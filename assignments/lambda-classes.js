// CODE here for your Lambda Classes

//Person class.

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
//Person class test.
const bali = new Person({name: 'Tope', age: 23, location: 'Ibadan'});
const bili = new Person({ name: 'Bilie', age: 53, location: 'London' });
const ed = new Person({ name: 'Ed', age: 63, location: 'Lagos' });

console.log(bali.speak());
console.log(bili.speak());
console.log(ed.speak());
