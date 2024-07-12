console.log("\nTOPIC: ELEMENT ATTRIBUTES")

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute("href", "https://youtube.com");   // updates exisiting attr
link.setAttribute("style", "color: orange;");   // adds a new attr
console.log(link.getAttribute('href'));


// Manipulating Specific Values of Attributes
// 1. style attribute
const errorDiv = document.querySelector("div.error");

// errorDiv.setAttribute("style", "margin: 100px;");   // this overrides the current value of style
console.log(errorDiv.style.color);

errorDiv.style.backgroundColor = "orange";
errorDiv.style.fontSize = "25px";
errorDiv.style.color = "";  // removes it

console.log(errorDiv);


// 2. class attribute
const firstPara = document.querySelector('p');

console.log(firstPara.classList);

firstPara.classList.remove("exception");
firstPara.classList.add("success");

console.log(firstPara);


// CHALLENGE
console.log("\nExercise:");

const challengeElements = document.querySelectorAll('h4');

challengeElements.forEach(element => {
    if (element.textContent.includes("exception")) {    // textContent can get hidden texts but innerText cannot
        element.classList.add("exception");
    }
    else if (element.textContent.includes("success")) {
        element.classList.add("success");
    }
});

console.log(challengeElements);

const challengeDiv = document.querySelector(".challenge");

challengeDiv.classList.toggle("challenge"); // toggles on/off class
// challengeDiv.classList.toggle("challenge");
console.log(challengeDiv);
