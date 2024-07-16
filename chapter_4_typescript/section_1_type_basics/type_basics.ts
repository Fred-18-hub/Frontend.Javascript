
//#region SECTION 1: TYPE BASICS

console.log("\nSECTION 1: TYPE BASICS");

let fullName = "John";
let age = 25;
let isStudent = false;

console.log(fullName, age, isStudent);

// fullName = true; // Error: Type 'true' is not assignable to type 'string'.
fullName = "Jane";

// age = "25"; // Error: Type '"25"' is not assignable to type 'number'.
age = 26;

// isStudent = 1; // Error: Type '1' is not assignable to type 'boolean'.
isStudent = true;

console.log(fullName, age, isStudent);

const calcCircArea = (diameter:number) => {
    return Math.PI * Math.pow(diameter / 2, 2);
}

// console.log(calcCircArea("ten")); // NaN
console.log(calcCircArea(10));

//#endregion


// ---------------------------------------------------------------------------------
//#region SECTION 2: OBJECTS & ARRAYS

console.log("\nSECTION 2: OBJECTS & ARRAYS");

// Arrays
console.log("ARRAYS:");
let names = ["John", "Jane", "Doe"]; // string[]: will only accept strings

names.push("Smith");
// names.push(10); // Error

names.unshift("Cesar");
// names.unshift(true); // Error

console.log(names);

let collection = ["John", 25, false]; // (string | number | boolean)[]: will accept strings, numbers, and booleans
collection.unshift("Jane");
collection.push("Doe", true);

// collection[0] = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'.

console.log(collection);


// Objects
console.log("OBJECTS:");
let person = {
    name: "John",
    age: 25,
    isStudent: false
};

person.name = "Jane";
// person.name = true; // Error: Type 'true' is not assignable to type 'string'.

person.age = 26;
// person.age = "23"; // Error: Type '"23"' is not assignable to type 'number'.

person.isStudent = true;
// person.isStudent = 1; // Error: Type '1' is not assignable to type 'boolean'.

// person.major = "Computer Science"; // Error: Property 'major' does not exist on type '{ name: string; age: number; isStudent: boolean; }'.
// person = "John"; // Error: Cannot assign string to object

console.log(person);

person = {
    name: "Codey",
    age: 19,
    // isStudent: "true", // Error: Type 'string' is not assignable to type 'boolean'.
    isStudent: true,
    // major: "Computer Science" // Error: major was not defined in the original object
};

console.log(person);

//#endregion


// ---------------------------------------------------------------------------------
//#region SECTION 3: EXPLICIT TYPES

console.log("\nSECTION 3: EXPLICIT TYPES");

// Primitives
console.log("PRIMITIVES:");
let firstName: string;
let years: number|string;
let isGraduated: boolean;

firstName = "John";
// firstName = true; // Error
years = 20;
years = "25"; // No Error
isGraduated = false;
// isGraduated = 1; // Error
console.log(firstName, years, isGraduated);

// Arrays
console.log("ARRAYS:");
let namesArray: string[] = [];
namesArray.push("Ares");
namesArray.unshift("Zeus");
// namesArray.push(false); // Error
console.log(namesArray);

let collectionArray: (string|boolean)[] = [];
collectionArray.push("Physics");
collectionArray.push(true);
// collectionArray.push(10); // Error
console.log(collectionArray);

// Objects
console.log("OBJECTS:");
let phoneObj: object;
phoneObj = { brand: "Apple", model: "iPhone 12" };
// phoneObj = "Samsung"; // Error
console.log(phoneObj);
phoneObj = ["Apple", "iPhone 12", 1200]; // No Error: Arrays are objects
console.log(phoneObj);

let personObj: {    // Explicit object type
    name: string,
    age: number,
    isStudent: boolean
};

personObj = {
    name: "John",
    age: 25,
    isStudent: false
};
// personObj = []; // Error

console.log(personObj);

//#endregion
