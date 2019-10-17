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

//Instructor class

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}
//Instructor test

const gabe = new Instructor({
  name: 'Gabe', 
  age: 35, 
  location: 'Spain',
  specialty: 'Redux',
  favLanguage: 'Javascript',
  catchPhrase: 'I will test you!'
});

const alex = new Instructor({
  name: 'Alex',
  age:29,
  location: 'UK',
  specialty: 'Frontend',
  favLanguage: 'Javascript',
  catchPhrase: 'Dabba do!'
});

alex.demo('react');
gabe.grade({name: 'Ola'}, 'Napping');