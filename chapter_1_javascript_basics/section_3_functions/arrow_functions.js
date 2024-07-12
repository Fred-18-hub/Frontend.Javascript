console.log("\nTOPIC: ARROW FUNCTIONS")

// REGULAR FUNCTION
// const calcArea = function(radius) {
//     return 3.142 * radius**2;
// };

// let areaOfCircle = calcArea(7);
// console.log(`Circle Area = ${areaOfCircle}sqm`)


// ARROW FUNCTION
const calcArea = (length, breath) => {
    return length * breath;
};

let area = calcArea(4.5, 6);
console.log("Area of =", area);

const circleArea = radius => 3.142 * radius**2;   // Single parameter doesn't need parenthesis and single line doesn't need curly braces

let circleAreaResult = circleArea(7);
console.log(`Circle Area = ${circleAreaResult}sqm`);


// EXERCISE - Converting some regular functions to arrow functions
console.log("Exercise:");

// 1
// const greety = function() {
//     return "hello world"
// }

const greety = () => "hello world";

console.log(greety());

// 2
// const bill = function(products, tax) {
//     let total = 0;

//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

let billAmount = bill([2, 3, 5], 0.5);
console.log(`Bill = ${billAmount}`);
