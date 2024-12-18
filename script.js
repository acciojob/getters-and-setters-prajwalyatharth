// Person class definition
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional, in case you want to access age)
  get age() {
    return this._age;
  }
}

// Student subclass
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher subclass
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
