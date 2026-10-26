// Exercise 1 - Classes
class Person {
  constructor(name, age) {
    this.name = name; // string
    this.age = age;   // number
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person('John', 25);
console.log(person1.introduce());
document.getElementById('intro').textContent = person1.introduce();

// Exercise 2 - This
// call() runs the callback with person1 as "this"
function describePerson(callback) {
  callback.call(person1);
}

// Use a normal function here. 
describePerson(function () {
  const text = `${this.name} is ${this.age} years old.`;
  console.log(text);
  document.getElementById('describe').textContent = text;
});

// Exercise 3 - Promises
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}

wait(2000).then((message) => {
  console.log(message);
  document.getElementById('wait').textContent = message;
});