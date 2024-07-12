console.log("\nTOPIC: CONDITIONAL STATEMENTS")

// IF-ELSE STATEMENTS
let password = "pass"   // variants: "password", "p@ssword", "pass" "p@ss", "password1234", "p@ssword1234"

if (password.length >= 12 && password.includes("@")) {
    console.log("Password is mighty strong")
}
else if (password.length >= 8 || password.includes("@")) {
    console.log("Password is strong")
}
else {
    console.log("Password is weak")
}

let user = false // not logged in

if (!user) {
    console.log("Please log in")
}
else {
    console.log("Welcome, user")
}


// BREAK AND CONTINUE STATEMENTS
let scores = [50, 0, 70, 100, 90, 80]

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        console.log("No score")
        continue
    }

    console.log(`Score: ${scores[i]}`)

    if (scores[i] === 100) {
        console.log("Perfect score!")
        break
    }
}


// SWITCH STATEMENTS
let grade = 50 // variants: 'A', 'B', 'C', 'D', 'E', 'F

switch (grade) {    // Uses strict comparison (===)
    case 'A':
        console.log("You got an A")
        break
    
    case 'B':
        console.log("You got a B")
        break

    case 'C':
        console.log("You got a C")
        break

    case 'D':
        console.log("You got a D")
        break

    case 'E':
        console.log("You got an E")
        break

    case 'F':
        console.log("You got an F")
        break

    default:
        console.log("Invalid grade")
        break // not requried
}