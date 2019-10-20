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

  review(student) {
    const max = 100;
    const min = 1;
    student.grade = Math.ceil(Math.random() * (max - min)) + min;
    console.log(student.grade);
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
    this.grade = attributes.grade;
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
  
  graduate(teamLead) {
    if (this.grade > 70) {
      console.log(`Congratulations ${this.name}, good luck on your journey!`);
    } else {
      teamLead.review(this);
      console.log(`You need a little bit more polishing. I believe in you.`);
    }
  }
}

//Student test
const abel = new Student({
  name: 'Abel',
  age: 23,
  location: 'Ireland',
  previousBackground: 'Athlete',
  className: 'EU4',
  favSubjects: ['Html', 'CSS', 'JavaScript'],
  grade: 87
});

const kandis = new Student({
  name: 'Kandi',
  age: 25,
  location: 'I. Coast',
  previousBackground: 'Diver',
  classNam: 'WEB21',
  favSubjects: ['Ruby', 'Python', 'P5.js'],
  grade: 99
});

abel.listsSubjects();
kandis.sprintChallenge('Debugging');
kandis.PRAssignment('Jest');

//PM class
class projectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const tigran = new projectManager({
  name: 'Tigran',
  age: 26,
  location: 'Thailand?',
  specialty: 'Backend?',
  favLanguage: 'Javascript?',
  catchPhrase: 'Hello world.',
  gradClassName: 'EU2',
  favInstructor: 'Gabe'
});

const tobi = new projectManager({
  name: 'Tobi',
  age: 24,
  location: 'Lagos',
  specialty: 'frontend',
  favLanguage: 'Javascript?',
  catchPhrase: 'zzZZ',
  gradClassName: 'EU2',
  favInstructor: 'Gabe'
});

//PM test
tigran.standUp('eu4_tigran');
tobi.debugsCode(kandis, 'react');
tobi.demo('redux');
tigran.grade(abel, 'Node');

//Stretch tests
gabe.review(abel);
tobi.review(kandis);

abel.graduate(tobi);
kandis.graduate(tigran);