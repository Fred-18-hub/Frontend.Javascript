console.log("\nTOPIC:", "STRING DATATYPE")

// Concatenation
let firstName = "Fredrick"
let lastName = "Antwi"

let fullName = firstName + lastName
console.log(fullName)
fullName = firstName + " " + lastName
console.log(fullName)

// Getting Characters
console.log(fullName[0])

// String Length
console.log(fullName.length) // length is a property of a string

// String Methods
console.log(fullName.toUpperCase())

let fullNameToLower = fullName.toLowerCase()
console.log("Full name: ", fullName, "| Full name (lower): ", fullNameToLower)

let index = fullName.indexOf('t')
console.log("Index of t:", index)

// let result = fullName.lastIndexOf('r')

// let result = fullName.slice(1, 4)

let result = fullName.replace("rick", "ick")

console.log(result)