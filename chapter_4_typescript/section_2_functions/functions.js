console.log("\nTOPIC: FUNCTIONS");
var greet;
greet = function () {
    console.log("Good day");
};
greet();
var add = function (a, b, c) {
    return c !== undefined ? "".concat(c, " = ").concat(a + b) : a + b;
};
console.log(add(10, 25, "sum"));
console.log(add(10, 25));
var logInformation = function (userName, uid, activity) {
    console.log("".concat(userName, " with id ").concat(uid, " ").concat(activity));
};
logInformation("Kody", "u22", "logged in");
logInformation("Atreus", 33, "reached a milestone");
logInformation = function (userName, uid, activity) {
    console.log("".concat(userName, " with id ").concat(uid, " ").concat(activity));
};
logInformation("Katherine", "u22", "logged out");
logInformation("Kathy", 33, "reached a milestone");
var displayPhone = function (phone) {
    console.log("".concat(phone.model, " by ").concat(phone.brand));
};
displayPhone({ brand: "Apple", model: "iPhone 16 Ultra" });
// Function Signatures
var saySomething;
saySomething = function (message) {
    console.log(message);
};
saySomething("how are you");
var calc;
calc = function (numOne, numTwo, operation) {
    if (operation === "add") {
        return numOne + numTwo;
    }
    else if (operation === "mul") {
        return numOne * numTwo;
    }
    else {
        return 0;
    }
};
console.log(calc(20, 21, "mul"));
