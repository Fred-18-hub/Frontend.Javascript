console.log("\nTOPIC: VARIABLES")

// 1. Const Variables - scoped to block
const earthToMoonDistance = 384400
console.log("Distance from Earth to the Moon = " + earthToMoonDistance + "km")

// earthToMoonDistance = 234455; // Error : cannot reassign a const variable


// 2. Let variables - scoped to block
let height = 1.86
console.log("I am " + height + "m tall")

height = 1.93
console.log("My height is " + height + "m now") // Reassignment is possible


// 3. Var variables - archaic && NOT scoped to block
var pet = "Onie"
console.log("My pet's name is", pet)

pet = "Ramie"
console.log(pet, "is my new pet")