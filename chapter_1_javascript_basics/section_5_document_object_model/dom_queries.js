console.log("\nTOPIC: DOM QUERIES")

// Using querySelector() - Recommended
// const para = document.querySelector('p');   // accepts css selector as an argument
// console.log(para);

// const anotherPara = document.querySelector("p.error");
// console.log(anotherPara);


// Using querySelectorAll() - Returns a node list which can be forEach-ed
// const paras = document.querySelectorAll('p');   // gets all p elements
// paras.forEach(para => console.log(para));

// const errors = document.querySelectorAll(".error");
// console.log(errors);


// Get element by id
const title = document.getElementById("page-title");
console.log(title);


// Get elements by class name
const errors = document.getElementsByClassName("error");    // returns an HTML Collection which cannot be forEach-ed
// errors.forEach(error => {   // ERROR!
//     console.log(error);
// });
console.log(errors[1]);


// Get elements by tag name
const paras = document.getElementsByTagName('p');
console.log(paras);