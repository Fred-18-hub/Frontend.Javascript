console.log("\nTOPIC: LOOPS")

// 1. FOR LOOPS
// for (let i = 1; i <= 5; i++) {
//     console.log(`In loop: i = ${i}`)
// }
// console.log("Out of loop")

let brands = ["del", "hp", "asus"]

for (let i = 0; i < brands.length; i++) {
    let html = `<div>${brands[i]}</div>`
    console.log(`In for loop: ${brands[i]}`)
    console.log(`In for loop: ${html}`)
}


// 2. WHILE LOOPS
let ind = 0
while (ind < brands.length) {
    console.log(`In while loop: ${brands[ind]}`)

    ind++
}


// 3. DO-WHILE LOOPS
let indx = 4
do {
    console.log(`In do-while loop: i = ${indx}`)
    indx++
} while (indx < 3);