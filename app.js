console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `${this.name}\n${this.pets}\n${this.residence}/n${this.hobbies}`
    );
  }
  greeting() {
    console.log("Hi!");
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
}


const jake = new Person("Jake", 1, "Alabama", ["Reading", "Space"]);

const cruz = new Coder("Cruz", 1, "Alabama", ["Grilling", "Coding"]);

console.log(jake);
console.log(cruz);

class Calculator {
    constructor(){
        let result = 0;
    }
    add(num1, num2){
        result = num1 + num2;
        return result;
    }
    subtract(num1, num2){
        result = num1 - num2;
        return result;
    }
    multiply(num1, num2){
        result = num1 * num2;
        return result;
    }
    divide(num1, num2){
        result = num1 / num2;
        return result;
    }
    displayResult(){
        console.log(result);
    }
    
}

const calc1 = new Calculator();
calc1.add(5,5);
calc1.displayResult();

calc2 = new Calculator();
calc2.subtract(7,3);
calc2.displayResult();