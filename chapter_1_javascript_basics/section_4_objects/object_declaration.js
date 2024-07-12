console.log("\nTOPIC: OBJECT LITERALS")

let user = {

    // Properties of user object
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@js.com",
    location: "toronto",
    age: 28,
    cart: [
        {
            itemName: "Galaxy S24 Ultra",
            price: 1199.99,
            quantity: 1
        },
        {
            itemName: "Apple Vision Pro",
            price: 3599.99,
            quantity: 2
        }
    ],

    // Methods of the user object
    login: function() {
        console.log(this)   // log the value of "this" at current context: user object; the case for regular functions
        console.log("User has logged in");
    },
    logout() {  // concise way to define a regular method/function in an object
        console.log("User has logged out");
    },
    numOfCartItems() {
        console.log(`User has ${this.cart.length} item(s) in the cart`);
    },
    totalPrice() {
        let total = 0;
        this.cart.forEach(item => {
            total += (item.quantity * item.price);
        });
        console.log(`Total price of items in user's cart is: \$${total}`);
    },
    logThisKeywordInArrowFunction: () => console.log(this)  // this will log the value of "this" at the point where this arrow function is called
}

console.log(this); // prints object at current context: Current file/document = Window file
user.logThisKeywordInArrowFunction(); // similar to console.log(this) since its called in an arrow function

console.log("\nUser object:");
user.login();
console.log(`Full name: ${user.firstName} ${user.lastName}`);

let key = "cart";
console.log(user[key]);
user[key].forEach((item, index) => {
    console.log(`Item ${++index}: ${item.itemName}`);
});
user.numOfCartItems();
user.totalPrice();
user.logout();
