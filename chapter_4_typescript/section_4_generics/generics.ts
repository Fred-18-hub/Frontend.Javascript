console.log("\nTOPIC: GENERICS");

const addUid = (obj: object) => {
    const uId = Math.floor(Math.random() * 100);
    // obj.name = "yona";
    return {...obj, uId};
}

const docOne = addUid({name: "barry", age: 23});

console.log(docOne);
// console.log(docOne.name); // Error: tsc can't tell obj will have name property based on the function definition


// Using Generics

const addUidGeneric = <T extends {name: string}>(obj: T) => {
    const uId = Math.floor(Math.random() * 100);

    return {...obj, uId};
}

const docTwo = addUidGeneric({name: "allen", age: 23});

console.log(docTwo);
console.log(docTwo.age);

const docThree = addUidGeneric<{name: string, age: number}>({name: "chris", age: 27});

console.log(docThree);
console.log(docThree.name);



interface Resource<T> {
    uId: number;
    resourceName: string;
    data: T;
}

const resOne: Resource<string[]> = {
    uId: 23,
    resourceName: "phones",
    data: ["s24U", "iphone 16U"]
};

console.log(resOne);

