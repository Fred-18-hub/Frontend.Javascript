console.log("\nTOPIC: BOOLEAN")

console.log(true, false, "true", "false")

let subjectName = "chemistry"
let subjectArray = ["physics", "biology", "chemistry", "mathematics"]


// Methods Evaluating to Boolean
console.log(subjectName.includes("try"))
console.log(subjectName.startsWith("Chem"))

console.log(subjectArray.includes(subjectName))


// Logical Comparions - Loose (different types can still be true)
console.log("Loose Comparison:")
let weight = 84.8

console.log(weight == "84.8")   // true : type is not checked and js converts string "84.8" to a number bts
console.log(weight == 84.8)
console.log(weight != 84.8)
console.log(weight > 90)
console.log(weight < 90)
console.log(weight <= 84.8)

console.log(subjectName == "Chemistry")
console.log(subjectName > "Chemistry")  // true : lower case (first letter) > upper case (first letter)
console.log(subjectName < "physics")


// Logical Comparions - Strict
console.log("Strict Comparison:")
console.log(weight === "84.8")  // false : type is checked
console.log(weight !== "84.8")
