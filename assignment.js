// 1. Type Conversion.
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent 
// number. If the string cannot be converted to a number, the function should return the string "Invalid number". 
// Use error handling in javascript to achieve this output.
function convertToNumber(str) {
    let number = Number(str)
  try {
    if (Number.isNaN(number)) {
      throw new Error();
    } else {
      return number;
    }
  } catch (error) {
    return "invalid number";
  }
}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age. 
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". 
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw 
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error 
// message if it occurs
function checkKey(obj) {
  if(!(obj instanceof Object)) return false
  if (obj.hasOwnProperty("name") && obj.hasOwnProperty("age")) {
    return true;
  } else return false;
}
function getperson(person) {
  try {
    if (!checkKey(person)) {
      debugger;
      throw new Error();
    }
    else return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return ("invalid parameter type");
  }
}

const person1 = { name: "Santosh" };
const person2 = { name: "Santosh", age: 25 };
console.log(getperson(person1))
console.log(getperson(person2))
console.log(getperson(["name", "Mithun"]))

// 3. Car Description Class.
// Create a class called Car with three properties: company, model, and year. The class should have a method 
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an 
// instance of the Car class and call the getDescription method

class cars {
  constructor(c,m,y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }
  getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}
const mycar = new cars("skoda","Rapid",2022);
console.log(mycar.getDescription());

// 4. Employee Class Challenge.
// Create a class called Employee with three properties: name, position, and salary. The class should have a 
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and 
// call the getSalary method.

class Employee {
  constructor(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return this.salary
  }
}

const employee1 = new Employee("santosh","develpper",40000);
console.log(employee1.getSalary());

// 5. Implementing a Person Class with Default Values
// Create a class called Person with two properties: name and age. The class should have a method called 
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the 
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided

class person {
  constructor (name = "unknow", age = 0){
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

const person3 = new person("mittun", 20);
console.log(person3.getDetails());
console.log(new person().getDetails());

// 6. Using Static Method to Add Two Numbers with Calculator Class  
// Create a class called Calculator with a static method called add. The add method should take two numbers as 
// arguments and return their sum. Instantiate the Calculator class and call the add method

class Calculator {

  static add(a,b) {
    return parseInt(a) + parseInt(b);
  }
}
 const output = Calculator.add(10,5);
 console.log(output);

//  7. Password Checker.
// Create a class called User with properties username and password. Implement a getter method for password 
// that returns the password with all characters replaced by asterisks. Implement a setter method for password 
// that checks if the new password is at least 8 characters long and contains at least one number and one 
// uppercase letter. If the password is valid, set the new password. If not, log an error message

class User {
  constructor(username, password) {
    this.$username = username;
    this.$password = password;
  }
  getPassword() {
    const re = /./g;
    return this.$password.replaceAll(re, "*");
  }
  setPassword(newPassword) {
    try {
      if (newPassword.length <= 8) {
        throw new Error("Password must be at least 8 character long");
      }
      if (/[A-Z]/g.test(newPassword) && /[0-9]/g.test(newPassword)) {
        this.$password = newPassword;
      } else {
        throw new Error(
          "Password should contains at-least one number and one uppercase letter."
        );
      }
    } catch (error) {
      console.log("Error: ".concat(error.message));
    }
  }
}

const user = new User("santosh", "password1234");
user.setPassword( "dsfjhs1Dfdgdgkj")
console.log(user.getPassword());

// 8. Adding a Method to a Prototype.
// Create a prototype object called Student with a property name. Add a method called printDetails to the 
// prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the 
// name "Mithun" and call the printDetails method

function Student(name){
  this.name = name;
}
Student.prototype.printDetails = function() {
  console.log(`Hello, my name is ${this.name}`);
}
const student1 = new Student("mithun");
student1.printDetails();

// 9. Check the presence using closures.
// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The 
// returned function should take another number as an argument and return true if the number is in the array, and 
// false otherwise

function numberCheker(arr) {
  return function checkNum(value) {
    return (arr.some(num => num === value))? true : false
  }
}

const arr = [1,2,3,4,5];
const checkNum = numberCheker(arr);
console.log(checkNum(3));
console.log(checkNum(6));

// 10. Filter by Category.
// Write a function that takes an array of products and returns a function that filters the array by a given product 
// category. The function must filter an eCommerce products array by a specific category. The closure filters 
// products using the filter() method. Finally, it returns a new array containing only the products with the same 
// category as the input

function filterBycatagory(products) {
  return function(catagory){
    return products.filter((product) =>{
      return product.category === catagory
    });
  }
}

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Socks", category: "Accessories" },
  { name: "Belt", category: "Accessories" },

];

const clothingProducts = filterBycatagory(products)("Accessories")
console.log(clothingProducts)