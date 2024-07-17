console.log("\nTOPIC: DOM & TYPE CASTING");
// Handling possible null - 1
let anchor = document.querySelector('a'); // Grabs first anchor element
// console.log(anchor.href); // Error: anchor might be null and would not have href property if so
console.log(anchor?.href);
// Handling possible null - 2
anchor = document.querySelector('a'); // Tells tsc the value is never null: Used when sure value is available
console.log(anchor.href);
// Calling .href among other properties on anchor(or any other element) is possible for elements queried by tags
// Elements queried by other attributes (eg. class, id) must be casted into the appropriate type first
const anchorByClass = document.querySelector(".link"); // tsc can't determine the exact type of this element since
// this class can be used by multiple elements with different
// tags
console.log(anchorByClass);
// console.log(anchorByClass.href); // Error: type of anchorByClass is not HTMLAnchorElement and does not have href property
// Type Casting
const anchorByClassCasted = document.querySelector(".link");
console.log(anchorByClassCasted.href);
// Classes, Interfaces & Modules
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// Classes:
const invOne = new Invoice("Establishment LLC", "establishing artifacts", 230);
const payOne = new Payment("Media Ltd", "photoshoot work", 75);
const invPayList = [];
invPayList.push(invOne);
invPayList.push(payOne);
console.log(invPayList);
// Interfaces with Classes:
// Every variables with type HasFormatter must define or have format() method defined in its definition
const invDocOne = new Invoice("Company Ltd", "work on company website", 350); // Possible because format() method is defined in Invoice class
const payDocOne = new Payment("Business Inc", "construction work", 3000); // Possible because format() method is defined in Payment class
const docList = [];
docList.push(invDocOne);
docList.push(payDocOne);
console.log(docList);
// HTML Interactions
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const typeInput = document.querySelector("#type");
const toFromInput = document.querySelector("#tofrom");
const detailsInput = document.querySelector("#details");
const amountInput = document.querySelector("#amount");
const ulElement = document.querySelector("ul");
const outputList = new ListTemplate(ulElement);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    let doc;
    if (typeInput.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    outputList.render(doc, typeInput.value, "end");
});
