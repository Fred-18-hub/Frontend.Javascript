console.log("\nTOPIC: DECLARATION AND EXPRESSION");

// FUNCTION DECLARATION (Hoisted: Can be called before it is defined)
function greet(time = "day", name) {
    console.log(`Good ${time}, ${name}!`);
}

greet("morning", "John");

greetAgain("night", "Jane");    // Calling before defining

function greetAgain(time, name) {
    console.log(`Good ${time}, ${name}!`);
}


// FUNCTION EXPRESSION (Not Hoisted: Cannot be called before it is defined) - Recommended to end with semicolon
const eat = function(food) {
    if (food === undefined || food === "") {
        console.log("Please provide food to eat");
        return false;
    }
    else {
        console.log(`Eating ${food}`);
        return true;
    }
};

let eatResult = eat("");
console.log(eatResult);