console.log("\nTOPIC: PRIMITIVE & REFERENCE TYPES")

// PRIMITIVE TYPES
/*
    Values are stored on the stack and variable names are used to identify them.
    Making a copy of a primitive type stores the value again on the stack with the new variable name as the identifier.
    This means updating the value of either one does not affect the other one.

    Primitive types in js include:
    1. numbers
    2. string
    3. boolean
    4. null
    5. undefined
    6. symbols
*/

let scoreOne = 100;
let scoreTwo = scoreOne;    // same value but different places on stack with respective var names as identifiers

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);

scoreOne = 50;  // update does not affect scoreTwo
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`);



// REFERENCE TYPES
/*
    Values are stored on the heap but pointers to these values are stored on stack with var names as indentifiers.
    Calling the var name gets the pointer from stack, which points to the value on heap.
    Making a copy of a reference type stores the same pointer on stack for the duplicate with its var name as indentifier
    This means updating the value of either one affects the other one

    Reference types in js include:
    1. Object literals
    2. Arrays
    3. Dates
    4. Functions, etc...
*/

let person1 = {name: "jerry", age: 23};
let person2 = person1;  // same pointer but different places on stack with respective var names as identifiers

console.log(person1, person2);

person1.name = "jonas"; // update affects person2 since they both point to the same value on heap
console.log(person1, person2);