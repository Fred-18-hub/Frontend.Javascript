console.log("\nTOPIC: ENUMS");

enum ResourceType {
    PHONE,
    GROCERY,
    BOOK,
    PET
}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const s23U: Resource<{model: string, brand: string, price: number}> = {
    uid: 1,
    resourceType: ResourceType.PHONE,
    data: {
        model: "Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1199.99
    }
};
console.log(s23U);

const books: Resource<{title: string, author: string, pages: number}[]> = {
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
