var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("\nTOPIC: GENERICS");
var addUid = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    // obj.name = "yona";
    return __assign(__assign({}, obj), { uId: uId });
};
var docOne = addUid({ name: "barry", age: 23 });
console.log(docOne);
// console.log(docOne.name); // Error: tsc can't tell obj will have name property based on the function definition
// Using Generics
var addUidGeneric = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var docTwo = addUidGeneric({ name: "allen", age: 23 });
console.log(docTwo);
console.log(docTwo.age);
var docThree = addUidGeneric({ name: "chris", age: 27 });
console.log(docThree);
console.log(docThree.name);
var resOne = {
    uId: 23,
    resourceName: "phones",
    data: ["s24U", "iphone 16U"]
};
console.log(resOne);
