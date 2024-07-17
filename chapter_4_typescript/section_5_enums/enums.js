console.log("\nTOPIC: ENUMS");
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["PHONE"] = 0] = "PHONE";
    ResourceType[ResourceType["GROCERY"] = 1] = "GROCERY";
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["PET"] = 3] = "PET";
})(ResourceType || (ResourceType = {}));
var s23U = {
    uid: 1,
    resourceType: ResourceType.PHONE,
    data: {
        model: "Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1199.99
    }
};
console.log(s23U);
var books = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: [
        {
            title: "Astrophysics for People in a Hurry",
            author: "Neil DeGrasse Tyson",
            pages: 121
        },
        {
            title: "Astrophysics for People in a Hurry",
            author: "Neil DeGrasse Tyson",
            pages: 121
        }
    ]
};
console.log(books);
