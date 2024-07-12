console.log("\nTOPIC: MATH OBJECT")

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

let area = 7.49;

console.log(Math.round(area));
console.log(Math.ceil(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));

// Random Numbers
let random = Math.random(); // generates random numbers b/n 0 and 1
console.log(random);

let randomBetween = (lowerBound, upperBound) => {
    let random = Math.round(Math.random() * upperBound);
    
    if (random < lowerBound) {
        return lowerBound;
    }
    
    if (random > upperBound) {
        return upperBound
    }

    return random;
};

console.log(randomBetween(20, 100));