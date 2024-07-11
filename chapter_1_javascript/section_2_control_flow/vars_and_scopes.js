console.log("\nTOPIC: VARIABLES AND SCOPES")

let age = 30
// let age = 40    // Error: cannot redefine 'age'

if (true) {
    let age = 40    // No Error: 'age' is scoped to this block
    console.log("Inside if block/scope:", age)

    if (true) {
        // let age = 60    // No Error: 'age' is scoped to this block
        var someName = "John"
        console.log("Inside nested if block/scope:", age, someName)
    }
}

someName = "Jane"
console.log("Outside if block/scope", age, someName)    // someName is accessible outside the block (var is not block-scoped)