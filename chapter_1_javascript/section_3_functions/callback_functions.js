console.log("\nTOPIC: CALLBACK FUNCTIONS")

const myFunc = (callBackFunc) => {
    let myFuncEndResults = 100;
    console.log(`myFunc execution: myFuncEndResults = ${myFuncEndResults}`);

    callBackFunc(myFuncEndResults);
}

// myFunc(function(value) {
//     console.log(`callBackFunc execution: value passed from myFunc = ${value}`)
// })

myFunc(value => console.log(`callBackFunc execution: value passed from myFunc = ${value}`));


// PRACTICAL USECASE
let people = ["jake", "john", "james"];

const logPeople = (person, index) => {
    let number = index += 1;
    console.log(`${number} - ${person}`)
}

people.forEach(logPeople);