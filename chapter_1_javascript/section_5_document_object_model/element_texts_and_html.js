console.log("\nTOPIC: TEXTS & HTML IN ELEMENTS")

// Manipulating Element Texts
const pageTitle = document.querySelector('h1');

pageTitle.innerText = "Document Object Model";
console.log(pageTitle);


const allParas = document.querySelectorAll('p');

allParas.forEach(para => {
    para.innerText += " - modified";
})
console.log(allParas);



// Manipulating Element HTMLs
const content = document.querySelector(".content");

content.innerHTML = `<h3 style="color: blue;">I have a blue content now</h3>`;

const dataFromDb = ["red", "green"];

dataFromDb.forEach((color, indx) => {
    if (indx !== dataFromDb.length - 1) {
        content.innerHTML += `<p style="color: ${color};">I could have a ${color} content or</p>`;
    }
    else {
        content.innerHTML += `<p style="color: ${color};">I could have a ${color} content</p>`;
    }
})
console.log(content);
