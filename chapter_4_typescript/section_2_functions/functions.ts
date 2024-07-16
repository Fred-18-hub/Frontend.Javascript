console.log("\nTOPIC: FUNCTIONS");

let greet: Function;

greet = (): void => {
    console.log("Good day");
}

greet();

const add = (a: number, b: number, c?: string): any => {
    return c !== undefined ? `${c} = ${a + b}` : a + b;
}

console.log(add(10, 25, "sum"));
console.log(add(10, 25));

let logInformation = (userName: string, uid: string | number, activity: string) => {
    console.log(`${userName} with id ${uid} ${activity}`);    
};

logInformation("Kody", "u22", "logged in");
logInformation("Atreus", 33, "reached a milestone");


// Using Aliases
type stringOrNum = string | number;
logInformation = (userName: string, uid: stringOrNum, activity: string) => {
    console.log(`${userName} with id ${uid} ${activity}`);    
};

logInformation("Katherine", "u22", "logged out");
logInformation("Kathy", 33, "reached a milestone");

type phoneObj = {brand: string, model: stringOrNum};
const displayPhone = (phone: phoneObj) => {
    console.log(`${phone.model} by ${phone.brand}`);    
}

displayPhone({brand: "Apple", model:"iPhone 16 Ultra"})


// Function Signatures
let saySomething: (a: stringOrNum) => void;
saySomething = (message) => {
    console.log(message);
}

saySomething("how are you");

let calc: (a: number, b: number, c: string) => number;
calc = (numOne, numTwo, operation) => {
    if (operation === "add") {
        return numOne + numTwo;
    }
    else if (operation === "mul") {
        return numOne * numTwo;
    }
    else {
        return 0;
    }
}

console.log(calc(20, 21, "mul"));
