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
const bali = new Person({ name: 'Tope', age: 23, location: 'Ibadan' });
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
  age: 29,
  location: 'UK',
  specialty: 'Frontend',
  favLanguage: 'Javascript',
  catchPhrase: 'Dabba do!'
});

alex.demo('react');
gabe.grade({ name: 'Ola' }, 'Napping');

//Student class
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.map(subject => {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name}  has begun sprint challenge on ${subject}`);
  }
}

//Student test
const abel = new Student({
  name: 'Abel',
  age: 23,
  location: 'Ireland',
  previousBackground: 'Athlete',
  className: 'EU4',
  favSubjects: ['Html', 'CSS', 'JavaScript']
});

const kandis = new Student({
  name: 'Kandi',
  age: 25,
  location: 'I. Coast',
  previousBackground: 'Diver',
  classNam: 'WEB21',
  favSubjects: ['Ruby', 'Python', 'P5.js']
});

abel.listsSubjects();
kandis.sprintChallenge('Debugging');
kandis.PRAssignment('Jest');