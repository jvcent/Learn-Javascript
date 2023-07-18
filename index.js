// Comment Syntax
console.log("Hello World"); // Output in the console when inspecting web page

// Variables - default value is undefined
// single quotes '' more commonly used for strings in javascript

// Variables Names:
// > avoid reserved keywords <if> <let>
// > cannot start with number
// > cannot contain space or hyphen (-)
// > case sensitive

let name = "J"; // Best practise to use <let> instead of <var> for variable assignment
console.log(name);

// naming convention: first word lower case, every other word after capitalised
let firstName;

// Constants - attempting to manipulate constant/reassignment produces error
const interestRate = 0.3;

// Javascript is a DYNAMICALLY TYPED LANGUAGE, variable type can change at runtime
// Primitives/Value Datatypes
let fullName = "JV"; // String literal
let age = 30; // Number Literal, no differentiation between int and floating point
let isApproved = false; // Boolean literal
let n = undefined; // undefined is a datatype AND value
let selectedColor = null; // for clearing variables

// Reference Datatypes
let person = {
  // object literal (same syntax as Python dictionary)
  // insert key-value pairs below
  // access using dot or bracket notation
  name: "Isaac", // person.name or person['name']
  age: "20",
};
// Destructuring Objects
// to copy object attributes into external variables
// tedious method
const pName = person.name;
const pAge = person.age;
// utilising destructuring property of objects (same order)
const { pName2, pAge2 } = person;

// Setting object attributes from existing external variables of the same name
const courseName = "CSC148";
const courseProf = "Diane";
let course = {
  courseName,
  courseProf,
  length: 0.5,
};

// Duplicating objects with some modifications
const course2 = { ...course, length: 1 };

// Same can be done with arrays
const nameList = ["A", "B"];
const extendedNameList = [...nameList, "C"];
let colorList = ["red", "blue", 1]; // array are of object type, dynamic contents and size
// Useful functions for manipulating Arrays
// alternative syntax for looping through each element and performing an operation
let pets = ["Dog", "Cat", "Bird", "Bird"];
pets.map((pet) => {
  return <h1>pet</h1>;
});
// Filter.... self explanatory
pets.filter((pet) => {
  return pet !== "Bird";
});

function greet(who) {
  // functions are also a reference datatype. Functions are OBJECTS in javascript
  console.log("Hello" + who);
}
// Alternative Syntax for defining functions - ARROW FUNCTIONS
const greet = (who) => {
  // standard is using const, could also use let/var
  // Better for working with callback functions
  console.log("Hello" + who);
};

// Syntax for exporting functions to be used in another file
// Standard Function
export default function efunc1() {}
// Arrow Function
export const efunc2 = () => {};

// Importance of Arrow Functions:
// 1. React works a lot with components, which are basically functions taking in props & returning HTML
// 2. Anonymous functions. To be written inline with onClick={}, allows us to execute commands without declaring functions

// Ternary Operators - Allows us to simplify if-else code blocks into more concise lines
let score = 60;
let status;
// Standard if-else
if (score >= 50) {
  status = "Pass";
} else {
  status = "Fail";
}
// Using Ternary Operators
score >= 50 ? (status = "Pass") : "Fail"; // if-else
let status2 = score >= 50 && "Pass"; // using AND to represent if
let status3 = "Pass" || "Passed"; // using OR
