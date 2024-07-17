console.log("\nTOPIC: TUPLES");
var arr = ["late?", true];
arr = [false, "yes"];
arr[0] = "no";
arr[0] = false;
arr[1] = false;
arr[1] = "okay";
console.log(arr);
var tup = ["eaten?", true];
// tup1 = [false, "slept?"]; // Error: values must conform to positions of the types 
console.log(tup);
tup[0] = "cooked?";
// tup[0] = false; // Error
tup[1] = false;
// tup[1] = "cut"; // Error
console.log(tup);
