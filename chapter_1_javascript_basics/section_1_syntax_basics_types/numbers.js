console.log("\nTOPIC: NUMBERS DATATYPE")

let radius = 10
const pi = 3.142

// Maths Operations (+, -, *, /, **, %)
// let answer = radius + 2.9

// let answer = pi - 0.143

// let answer = pi * 100

// let answer = pi / radius

let answer = 10 % 3

console.log(answer)


// Concatenation of String and Numbers
let area = pi * radius**2
let message = "A circle with radius " + radius + "m has an area of " + area + "sqm"
console.log(message)


// Using Template String
let messageTemplateString = `A circle with radius ${radius}m has an area of ${area}sqm`
console.log(messageTemplateString)


// Using Template String in Html - Illustration
let title = "Area"
let shape = "Circle"
let html = `
    <h2>${title}</h2>
    <p>Shape: ${shape}</p>
    <span>Area: ${area}</span>
`
console.log(html)
